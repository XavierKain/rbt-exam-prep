import { useState, useEffect, useCallback } from 'react';
import type { Progress, FlashcardStatus, QuizResult, ExamResult } from '../types';

const STORAGE_KEY = 'rbt-exam-prep-progress';

const defaultProgress: Progress = {
  flashcards: {},
  quizScores: [],
  examScores: [],
  streakDays: [],
  lastActiveDate: '',
};

function loadProgress(): Progress {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultProgress;
    return JSON.parse(raw);
  } catch {
    return defaultProgress;
  }
}

function saveProgress(progress: Progress) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

function todayISO(): string {
  return new Date().toISOString().split('T')[0];
}

function updateStreak(streakDays: string[], lastActiveDate: string): string[] {
  const today = todayISO();
  if (lastActiveDate === today) return streakDays;

  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const yesterdayISO = yesterday.toISOString().split('T')[0];

  if (lastActiveDate === yesterdayISO || streakDays.length === 0) {
    return [...streakDays, today];
  }
  // Streak broken — restart
  return [today];
}

export function useProgress() {
  const [progress, setProgress] = useState<Progress>(loadProgress);

  useEffect(() => {
    saveProgress(progress);
  }, [progress]);

  // Record activity for streak tracking
  const recordActivity = useCallback(() => {
    setProgress((prev) => {
      const today = todayISO();
      if (prev.lastActiveDate === today) return prev;
      return {
        ...prev,
        streakDays: updateStreak(prev.streakDays, prev.lastActiveDate),
        lastActiveDate: today,
      };
    });
  }, []);

  const setFlashcardStatus = useCallback(
    (cardId: string, status: FlashcardStatus) => {
      recordActivity();
      setProgress((prev) => ({
        ...prev,
        flashcards: { ...prev.flashcards, [cardId]: status },
      }));
    },
    [recordActivity]
  );

  const addQuizResult = useCallback(
    (result: QuizResult) => {
      recordActivity();
      setProgress((prev) => ({
        ...prev,
        quizScores: [...prev.quizScores, result],
      }));
    },
    [recordActivity]
  );

  const addExamResult = useCallback(
    (result: ExamResult) => {
      recordActivity();
      setProgress((prev) => ({
        ...prev,
        examScores: [...prev.examScores, result],
      }));
    },
    [recordActivity]
  );

  const resetProgress = useCallback(() => {
    setProgress(defaultProgress);
  }, []);

  return {
    progress,
    setFlashcardStatus,
    addQuizResult,
    addExamResult,
    resetProgress,
    recordActivity,
  };
}
