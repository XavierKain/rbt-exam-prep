import { useXP } from './xpSystem';
import { useStreak } from './streakManager';
import { useDailyGoal } from './dailyGoal';
import { useAchievements } from './achievements';
import { useSoundEffects } from './soundEffects';

export function useGameState() {
  const xp = useXP();
  const streak = useStreak();
  const dailyGoal = useDailyGoal();
  const achievements = useAchievements();
  const sound = useSoundEffects();

  return { xp, streak, dailyGoal, achievements, sound };
}
