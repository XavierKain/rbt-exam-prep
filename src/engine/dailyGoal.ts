import { useState, useEffect, useCallback } from 'react';

const STORAGE_KEY = 'rbt_daily_goal';

export type GoalLevel = 'casual' | 'regular' | 'serious' | 'intense';

export const GOAL_TARGETS: Record<GoalLevel, number> = {
  casual: 10,
  regular: 20,
  serious: 30,
  intense: 50,
};

export const GOAL_LABELS: Record<GoalLevel, string> = {
  casual: 'Casual',
  regular: 'Regular',
  serious: 'Serious',
  intense: 'Intense',
};

interface StoredGoal {
  level: GoalLevel;
  todayProgress: number;
  lastDate: string;
}

function todayISO(): string {
  return new Date().toISOString().split('T')[0];
}

function load(): StoredGoal {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { level: 'regular', todayProgress: 0, lastDate: '' };
    const data = JSON.parse(raw) as StoredGoal;
    if (data.lastDate !== todayISO()) {
      return { ...data, todayProgress: 0, lastDate: todayISO() };
    }
    return data;
  } catch {
    return { level: 'regular', todayProgress: 0, lastDate: '' };
  }
}

function save(data: StoredGoal) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export function useDailyGoal() {
  const [goal, setGoal] = useState<StoredGoal>(load);

  useEffect(() => { save(goal); }, [goal]);

  const target = GOAL_TARGETS[goal.level];
  const progress = goal.todayProgress;
  const completed = progress >= target;
  const percentage = Math.min(100, Math.round((progress / target) * 100));

  const incrementProgress = useCallback((amount = 1) => {
    setGoal(prev => {
      const today = todayISO();
      const base = prev.lastDate === today ? prev.todayProgress : 0;
      return { ...prev, todayProgress: base + amount, lastDate: today };
    });
  }, []);

  const setLevel = useCallback((level: GoalLevel) => {
    setGoal(prev => ({ ...prev, level }));
  }, []);

  const resetGoal = useCallback(() => {
    setGoal({ level: 'regular', todayProgress: 0, lastDate: '' });
  }, []);

  return {
    level: goal.level,
    target,
    progress,
    completed,
    percentage,
    incrementProgress,
    setLevel,
    resetGoal,
  };
}
