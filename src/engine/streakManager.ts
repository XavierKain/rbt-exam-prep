import { useState, useEffect, useCallback } from 'react';

const STORAGE_KEY = 'rbt_streak';

interface StoredStreak {
  currentStreak: number;
  bestStreak: number;
  freezeCount: number;
  lastStudyDate: string;
  todayQuestions: number;
  todayMinutes: number;
  todayGoalMultiplied: boolean;
}

const defaultStreak: StoredStreak = {
  currentStreak: 0,
  bestStreak: 0,
  freezeCount: 0,
  lastStudyDate: '',
  todayQuestions: 0,
  todayMinutes: 0,
  todayGoalMultiplied: false,
};

function todayISO(): string {
  return new Date().toISOString().split('T')[0];
}

function yesterdayISO(): string {
  const d = new Date();
  d.setDate(d.getDate() - 1);
  return d.toISOString().split('T')[0];
}

function load(): StoredStreak {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultStreak;
    const data = JSON.parse(raw) as StoredStreak;
    // Check if day rolled over
    const today = todayISO();
    if (data.lastStudyDate === today) return data;
    const yesterday = yesterdayISO();
    if (data.lastStudyDate === yesterday) {
      // Streak continues, reset daily counters
      return { ...data, todayQuestions: 0, todayMinutes: 0, todayGoalMultiplied: false };
    }
    // Missed a day - check freeze
    if (data.freezeCount > 0 && data.currentStreak > 0) {
      return { ...data, freezeCount: data.freezeCount - 1, todayQuestions: 0, todayMinutes: 0, todayGoalMultiplied: false };
    }
    // Streak broken
    return { ...data, currentStreak: 0, todayQuestions: 0, todayMinutes: 0, todayGoalMultiplied: false };
  } catch {
    return defaultStreak;
  }
}

function save(data: StoredStreak) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export function useStreak() {
  const [streak, setStreak] = useState<StoredStreak>(load);

  useEffect(() => { save(streak); }, [streak]);

  const recordQuestion = useCallback(() => {
    setStreak(prev => {
      const today = todayISO();
      const newQuestions = prev.todayQuestions + 1;
      const qualifies = newQuestions >= 5;
      const isNewDay = prev.lastStudyDate !== today;

      let newStreak = prev.currentStreak;
      if (isNewDay && qualifies) {
        newStreak = prev.currentStreak + 1;
      }

      return {
        ...prev,
        todayQuestions: newQuestions,
        lastStudyDate: qualifies ? today : prev.lastStudyDate,
        currentStreak: newStreak,
        bestStreak: Math.max(prev.bestStreak, newStreak),
      };
    });
  }, []);

  const recordMinutes = useCallback((minutes: number) => {
    setStreak(prev => {
      const today = todayISO();
      const newMinutes = prev.todayMinutes + minutes;
      const qualifies = newMinutes >= 5;
      const isNewDay = prev.lastStudyDate !== today;

      let newStreak = prev.currentStreak;
      if (isNewDay && qualifies) {
        newStreak = prev.currentStreak + 1;
      }

      return {
        ...prev,
        todayMinutes: newMinutes,
        lastStudyDate: qualifies ? today : prev.lastStudyDate,
        currentStreak: newStreak,
        bestStreak: Math.max(prev.bestStreak, newStreak),
      };
    });
  }, []);

  const checkFreezeEarned = useCallback((dailyGoalTarget: number) => {
    setStreak(prev => {
      if (prev.todayGoalMultiplied) return prev;
      if (prev.todayQuestions >= dailyGoalTarget * 2 && prev.freezeCount < 2) {
        return { ...prev, freezeCount: prev.freezeCount + 1, todayGoalMultiplied: true };
      }
      return prev;
    });
  }, []);

  const resetStreak = useCallback(() => {
    setStreak(defaultStreak);
  }, []);

  return {
    currentStreak: streak.currentStreak,
    bestStreak: streak.bestStreak,
    freezeCount: streak.freezeCount,
    todayQuestions: streak.todayQuestions,
    todayMinutes: streak.todayMinutes,
    recordQuestion,
    recordMinutes,
    checkFreezeEarned,
    resetStreak,
  };
}
