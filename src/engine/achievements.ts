import { useState, useEffect, useCallback } from 'react';
import type { Progress } from '../types';

const STORAGE_KEY = 'rbt_achievements';

export interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  xpReward: number;
}

export const ACHIEVEMENTS: Achievement[] = [
  { id: 'first_steps', name: 'First Steps', description: 'Complete your first quiz', icon: '👶', xpReward: 25 },
  { id: 'perfect_score', name: 'Perfect Score', description: 'Get 100% on a quiz', icon: '💯', xpReward: 50 },
  { id: 'night_owl', name: 'Night Owl', description: 'Study after 11 PM', icon: '🦉', xpReward: 25 },
  { id: 'early_bird', name: 'Early Bird', description: 'Study before 7 AM', icon: '🐦', xpReward: 25 },
  { id: 'speed_demon', name: 'Speed Demon', description: 'Answer 10 questions in under 60 seconds', icon: '⚡', xpReward: 50 },
  { id: 'category_master', name: 'Category Master', description: 'Score 90%+ in one category', icon: '🏅', xpReward: 75 },
  { id: 'the_grind', name: 'The Grind', description: 'Maintain a 7-day streak', icon: '🔥', xpReward: 100 },
  { id: 'marathon', name: 'Marathon', description: 'Study for 30 minutes in one session', icon: '🏃', xpReward: 50 },
  { id: 'ready_to_pass', name: 'Ready to Pass', description: 'Score 85%+ on 3 exams', icon: '🎓', xpReward: 150 },
  { id: 'centurion', name: 'Centurion', description: 'Answer 100 questions', icon: '💪', xpReward: 75 },
  { id: 'scholar', name: 'Scholar', description: 'Reach level 20', icon: '📚', xpReward: 100 },
  { id: 'perfectionist', name: 'Perfectionist', description: 'Get 5 perfect quiz scores', icon: '✨', xpReward: 100 },
  { id: 'comeback_kid', name: 'Comeback Kid', description: 'Get 3 wrong then 5 right in a row', icon: '🔄', xpReward: 50 },
  { id: 'flash_master', name: 'Flash Master', description: 'Master all flashcards', icon: '🃏', xpReward: 200 },
  { id: 'half_way', name: 'Half Way', description: 'Reach level 25', icon: '🏔️', xpReward: 100 },
  { id: 'dedicated', name: 'Dedicated', description: 'Maintain a 30-day streak', icon: '💎', xpReward: 200 },
  { id: 'legend', name: 'Legend', description: 'Maintain a 50-day streak', icon: '👑', xpReward: 500 },
  { id: 'explorer', name: 'Explorer', description: 'Try all 3 study modes', icon: '🧭', xpReward: 25 },
  { id: 'unstoppable', name: 'Unstoppable', description: 'Get 20 correct answers in a row', icon: '🚀', xpReward: 100 },
  { id: 'exam_ready', name: 'Exam Ready', description: 'Complete 5 exams', icon: '📋', xpReward: 100 },
];

interface AchievementContext {
  progress: Progress;
  level: number;
  streak: number;
  combo: number;
  totalQuestionsAnswered: number;
  sessionMinutes: number;
  sessionQuestionsTime?: { count: number; seconds: number };
  modesUsed: { flashcards: boolean; quiz: boolean; exam: boolean };
  totalFlashcards: number;
  wrongThenRight?: { wrongCount: number; rightCount: number };
}

type CheckFn = (ctx: AchievementContext) => boolean;

const CHECKS: Record<string, CheckFn> = {
  first_steps: ctx => ctx.progress.quizScores.length >= 1,
  perfect_score: ctx => ctx.progress.quizScores.some(q => q.correctAnswers === q.totalQuestions),
  night_owl: () => new Date().getHours() >= 23,
  early_bird: () => new Date().getHours() < 7,
  speed_demon: ctx => !!(ctx.sessionQuestionsTime && ctx.sessionQuestionsTime.count >= 10 && ctx.sessionQuestionsTime.seconds < 60),
  category_master: ctx => ctx.progress.examScores.some(e => Object.values(e.categoryBreakdown).some(c => c.total >= 5 && c.correct / c.total >= 0.9)),
  the_grind: ctx => ctx.streak >= 7,
  marathon: ctx => ctx.sessionMinutes >= 30,
  ready_to_pass: ctx => ctx.progress.examScores.filter(e => e.correctAnswers / e.totalQuestions >= 0.85).length >= 3,
  centurion: ctx => ctx.totalQuestionsAnswered >= 100,
  scholar: ctx => ctx.level >= 20,
  perfectionist: ctx => ctx.progress.quizScores.filter(q => q.correctAnswers === q.totalQuestions).length >= 5,
  comeback_kid: ctx => !!(ctx.wrongThenRight && ctx.wrongThenRight.wrongCount >= 3 && ctx.wrongThenRight.rightCount >= 5),
  flash_master: ctx => {
    const mastered = Object.values(ctx.progress.flashcards).filter(s => s === 'know').length;
    return ctx.totalFlashcards > 0 && mastered >= ctx.totalFlashcards;
  },
  half_way: ctx => ctx.level >= 25,
  dedicated: ctx => ctx.streak >= 30,
  legend: ctx => ctx.streak >= 50,
  explorer: ctx => ctx.modesUsed.flashcards && ctx.modesUsed.quiz && ctx.modesUsed.exam,
  unstoppable: ctx => ctx.combo >= 20,
  exam_ready: ctx => ctx.progress.examScores.length >= 5,
};

function load(): Set<string> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return new Set();
    return new Set(JSON.parse(raw) as string[]);
  } catch {
    return new Set();
  }
}

function save(unlocked: Set<string>) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify([...unlocked]));
}

export function useAchievements() {
  const [unlocked, setUnlocked] = useState<Set<string>>(load);

  useEffect(() => { save(unlocked); }, [unlocked]);

  const checkAchievements = useCallback((ctx: AchievementContext): Achievement[] => {
    const newlyUnlocked: Achievement[] = [];
    const current = load(); // fresh read
    
    for (const achievement of ACHIEVEMENTS) {
      if (current.has(achievement.id)) continue;
      const check = CHECKS[achievement.id];
      if (check && check(ctx)) {
        current.add(achievement.id);
        newlyUnlocked.push(achievement);
      }
    }

    if (newlyUnlocked.length > 0) {
      setUnlocked(new Set(current));
    }

    return newlyUnlocked;
  }, []);

  const isUnlocked = useCallback((id: string) => unlocked.has(id), [unlocked]);

  const resetAchievements = useCallback(() => {
    setUnlocked(new Set());
  }, []);

  return {
    unlocked,
    unlockedCount: unlocked.size,
    totalCount: ACHIEVEMENTS.length,
    checkAchievements,
    isUnlocked,
    resetAchievements,
    achievements: ACHIEVEMENTS,
  };
}

export type { AchievementContext };
