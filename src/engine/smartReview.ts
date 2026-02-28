import { useState, useCallback, useMemo } from 'react';
import { flashcards } from '../data/flashcards';
import { questions } from '../data/questions';
import { getDueCards, type SRState } from './spacedRepetition';
import type { Category } from '../types';

const MISTAKES_KEY = 'rbt_mistakes';

export interface MistakeRecord {
  questionId: string;
  count: number;
  consecutiveCorrect: number;
  lastSeen: number;
}

export type MistakeState = Record<string, MistakeRecord>;

function loadMistakes(): MistakeState {
  try {
    const raw = localStorage.getItem(MISTAKES_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function saveMistakes(state: MistakeState) {
  localStorage.setItem(MISTAKES_KEY, JSON.stringify(state));
}

export function recordMistake(state: MistakeState, questionId: string): MistakeState {
  const existing = state[questionId];
  return {
    ...state,
    [questionId]: {
      questionId,
      count: (existing?.count ?? 0) + 1,
      consecutiveCorrect: 0,
      lastSeen: Date.now(),
    },
  };
}

export function recordMistakeCorrect(state: MistakeState, questionId: string): MistakeState {
  const existing = state[questionId];
  if (!existing) return state;
  return {
    ...state,
    [questionId]: {
      ...existing,
      consecutiveCorrect: existing.consecutiveCorrect + 1,
      lastSeen: Date.now(),
    },
  };
}

export interface SmartReviewItem {
  type: 'flashcard' | 'question';
  id: string;
}

export function generateSmartSession(
  mistakes: MistakeState,
  srState: SRState,
  categoryScores: Record<string, { correct: number; total: number }>,
  maxItems = 15
): SmartReviewItem[] {
  const items: SmartReviewItem[] = [];
  const used = new Set<string>();

  // 1. Past mistakes (not mastered = consecutiveCorrect < 3)
  const activeMistakes = Object.values(mistakes)
    .filter((m) => m.consecutiveCorrect < 3)
    .sort((a, b) => b.count - a.count);
  for (const m of activeMistakes) {
    if (items.length >= Math.floor(maxItems * 0.4)) break;
    const q = questions.find((q) => q.id === m.questionId);
    if (q && !used.has(q.id)) {
      items.push({ type: 'question', id: q.id });
      used.add(q.id);
    }
  }

  // 2. SR due cards
  const due = getDueCards(srState);
  for (const id of due) {
    if (items.length >= Math.floor(maxItems * 0.65)) break;
    if (!used.has(id)) {
      items.push({ type: 'flashcard', id });
      used.add(id);
    }
  }

  // 3. Weak categories
  const weakCats = Object.entries(categoryScores)
    .map(([cat, s]) => ({ cat: cat as Category, pct: s.total > 0 ? s.correct / s.total : 1 }))
    .sort((a, b) => a.pct - b.pct);
  for (const { cat } of weakCats) {
    if (items.length >= Math.floor(maxItems * 0.85)) break;
    const catQs = questions.filter((q) => q.category === cat && !used.has(q.id));
    if (catQs.length > 0) {
      const pick = catQs[Math.floor(Math.random() * catQs.length)];
      items.push({ type: 'question', id: pick.id });
      used.add(pick.id);
    }
  }

  // 4. Fill with unseen/random
  const allCards = [...flashcards.map((f) => ({ type: 'flashcard' as const, id: f.id })),
    ...questions.map((q) => ({ type: 'question' as const, id: q.id }))];
  const shuffled = allCards.sort(() => Math.random() - 0.5);
  for (const item of shuffled) {
    if (items.length >= maxItems) break;
    if (!used.has(item.id)) {
      items.push(item);
      used.add(item.id);
    }
  }

  return items;
}

export function useMistakes() {
  const [mistakes, setMistakes] = useState<MistakeState>(loadMistakes);

  const addMistake = useCallback((questionId: string) => {
    setMistakes((prev) => {
      const next = recordMistake(prev, questionId);
      saveMistakes(next);
      return next;
    });
  }, []);

  const markCorrect = useCallback((questionId: string) => {
    setMistakes((prev) => {
      const next = recordMistakeCorrect(prev, questionId);
      saveMistakes(next);
      return next;
    });
  }, []);

  const activeMistakes = useMemo(
    () => Object.values(mistakes).filter((m) => m.consecutiveCorrect < 3),
    [mistakes]
  );

  return { mistakes, addMistake, markCorrect, activeMistakes, mistakeCount: activeMistakes.length };
}
