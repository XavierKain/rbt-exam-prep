import { useState, useEffect, useCallback } from 'react';

const STORAGE_KEY = 'rbt_xp';

export type XPAction = 'correct_answer' | 'flashcard_reviewed' | 'quiz_completed' | 'exam_completed';

const BASE_XP: Record<XPAction, number> = {
  correct_answer: 10,
  flashcard_reviewed: 5,
  quiz_completed: 50,
  exam_completed: 100,
};

export interface XPState {
  totalXP: number;
  level: number;
  title: string;
  combo: number;
  xpForCurrentLevel: number;
  xpForNextLevel: number;
}

interface StoredXP {
  totalXP: number;
  combo: number;
}

function getComboMultiplier(combo: number): number {
  if (combo >= 10) return 3;
  if (combo >= 5) return 2;
  return 1;
}

export function xpForLevel(level: number): number {
  if (level <= 1) return 0;
  return Math.floor(100 * Math.pow(1.15, level - 2));
}

export function totalXPForLevel(level: number): number {
  let total = 0;
  for (let i = 2; i <= level; i++) {
    total += xpForLevel(i);
  }
  return total;
}

export function getLevelFromXP(totalXP: number): number {
  let level = 1;
  while (level < 50 && totalXP >= totalXPForLevel(level + 1)) {
    level++;
  }
  return level;
}

export function getTitleForLevel(level: number): string {
  if (level <= 5) return 'Novice';
  if (level <= 10) return 'Apprentice';
  if (level <= 20) return 'Student';
  if (level <= 30) return 'Scholar';
  if (level <= 40) return 'Expert';
  return 'Master';
}

function load(): StoredXP {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { totalXP: 0, combo: 0 };
    return JSON.parse(raw);
  } catch {
    return { totalXP: 0, combo: 0 };
  }
}

function save(data: StoredXP) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export function useXP() {
  const [stored, setStored] = useState<StoredXP>(load);

  useEffect(() => { save(stored); }, [stored]);

  const level = getLevelFromXP(stored.totalXP);
  const title = getTitleForLevel(level);
  const currentLevelXP = totalXPForLevel(level);
  const nextLevelXP = totalXPForLevel(Math.min(level + 1, 50));

  const addXP = useCallback((action: XPAction, correct?: boolean): { xpGained: number; leveledUp: boolean; newLevel: number } => {
    let result = { xpGained: 0, leveledUp: false, newLevel: 0 };
    setStored(prev => {
      let newCombo = prev.combo;
      if (action === 'correct_answer') {
        if (correct !== false) newCombo = prev.combo + 1;
        else { newCombo = 0; return { ...prev, combo: 0 }; }
      }

      const multiplier = action === 'correct_answer' ? getComboMultiplier(newCombo) : 1;
      const xpGained = BASE_XP[action] * multiplier;
      const newTotal = prev.totalXP + xpGained;
      const oldLevel = getLevelFromXP(prev.totalXP);
      const newLevel = getLevelFromXP(newTotal);

      result = { xpGained, leveledUp: newLevel > oldLevel, newLevel };
      return { totalXP: newTotal, combo: newCombo };
    });
    return result;
  }, []);

  const breakCombo = useCallback(() => {
    setStored(prev => ({ ...prev, combo: 0 }));
  }, []);

  const resetXP = useCallback(() => {
    setStored({ totalXP: 0, combo: 0 });
  }, []);

  const state: XPState = {
    totalXP: stored.totalXP,
    level,
    title,
    combo: stored.combo,
    xpForCurrentLevel: currentLevelXP,
    xpForNextLevel: nextLevelXP,
  };

  return { ...state, addXP, breakCombo, resetXP };
}
