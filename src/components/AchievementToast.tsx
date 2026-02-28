import { useEffect, useState } from 'react';
import type { Achievement } from '../engine/achievements';

interface Toast {
  id: number;
  achievement: Achievement;
}

let toastId = 0;
const listeners: Set<(toast: Toast) => void> = new Set();

export function showAchievementToast(achievement: Achievement) {
  const toast: Toast = { id: ++toastId, achievement };
  listeners.forEach(fn => fn(toast));
}

export default function AchievementToastContainer() {
  const [toasts, setToasts] = useState<Toast[]>([]);

  useEffect(() => {
    const handler = (toast: Toast) => {
      setToasts(prev => [...prev, toast]);
      setTimeout(() => {
        setToasts(prev => prev.filter(t => t.id !== toast.id));
      }, 3000);
    };
    listeners.add(handler);
    return () => { listeners.delete(handler); };
  }, []);

  if (toasts.length === 0) return null;

  return (
    <div className="fixed top-4 right-4 z-[9998] flex flex-col gap-2">
      {toasts.map(toast => (
        <div
          key={toast.id}
          className="bg-white/95 backdrop-blur-sm border border-[#E8743B]/30 rounded-xl px-4 py-3 shadow-lg animate-slide-in-top flex items-center gap-3 min-w-[280px]"
        >
          <span className="text-2xl">{toast.achievement.icon}</span>
          <div>
            <p className="font-bold text-sm text-[#1A1A2E]">🏆 Achievement Unlocked!</p>
            <p className="text-sm text-[#4A4A5A]">{toast.achievement.name}</p>
            <p className="text-xs text-[#E8743B] font-medium">+{toast.achievement.xpReward} XP</p>
          </div>
        </div>
      ))}
      <style>{`
        @keyframes slide-in-top {
          0% { transform: translateY(-100%); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        .animate-slide-in-top {
          animation: slide-in-top 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}
