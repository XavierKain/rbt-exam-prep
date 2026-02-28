import { useState, useCallback, useMemo } from 'react';
import { flashcards } from '../data/flashcards';

const STORAGE_KEY = 'rbt_sr_data';

const BOX_INTERVALS: Record<number, number> = {
  1: 0,
  2: 1 * 24 * 60 * 60 * 1000,
  3: 3 * 24 * 60 * 60 * 1000,
  4: 7 * 24 * 60 * 60 * 1000,
  5: 14 * 24 * 60 * 60 * 1000,
};

export interface SRCardData {
  box: number;
  lastReviewed: number;
  nextDue: number;
}

export type SRState = Record<string, SRCardData>;

function load(): SRState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function save(state: SRState) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

export function getDueCards(state: SRState): string[] {
  const now = Date.now();
  const seen = new Set(Object.keys(state));
  const unseen = flashcards.filter((c) => !seen.has(c.id)).map((c) => c.id);
  const due = Object.entries(state)
    .filter(([, d]) => d.nextDue <= now)
    .sort((a, b) => a[1].nextDue - b[1].nextDue)
    .map(([id]) => id);
  return [...due, ...unseen];
}

export function recordResult(state: SRState, cardId: string, correct: boolean): SRState {
  const now = Date.now();
  const current = state[cardId];
  let newBox: number;
  if (!current) {
    newBox = correct ? 2 : 1;
  } else {
    newBox = correct ? Math.min(current.box + 1, 5) : 1;
  }
  const interval = BOX_INTERVALS[newBox] || 0;
  return {
    ...state,
    [cardId]: { box: newBox, lastReviewed: now, nextDue: now + interval },
  };
}

export interface SRStats {
  box1: number; box2: number; box3: number; box4: number; box5: number;
  unseen: number; dueNow: number; total: number;
}

export function getStats(state: SRState): SRStats {
  const total = flashcards.length;
  const seen = new Set(Object.keys(state));
  const unseen = flashcards.filter((c) => !seen.has(c.id)).length;
  const counts = { box1: 0, box2: 0, box3: 0, box4: 0, box5: 0 };
  Object.values(state).forEach((d) => {
    const key = `box${d.box}` as keyof typeof counts;
    if (key in counts) counts[key]++;
  });
  return { ...counts, unseen, dueNow: getDueCards(state).length, total };
}

export function useSR() {
  const [state, setState] = useState<SRState>(load);

  const persist = useCallback((newState: SRState) => {
    setState(newState);
    save(newState);
  }, []);

  const dueCards = useMemo(() => getDueCards(state), [state]);

  const record = useCallback(
    (cardId: string, correct: boolean) => {
      const newState = recordResult(state, cardId, correct);
      persist(newState);
    },
    [state, persist]
  );

  const stats = useMemo(() => getStats(state), [state]);

  const getCardBox = useCallback(
    (cardId: string): number => state[cardId]?.box ?? 0,
    [state]
  );

  return { state, dueCards, record, stats, getCardBox };
}
