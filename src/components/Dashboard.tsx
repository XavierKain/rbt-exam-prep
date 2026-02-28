import { flashcards } from '../data/flashcards';
import { questions } from '../data/questions';
import type { Category, Progress } from '../types';
import ProgressBar from './ProgressBar';
import { useGameState } from '../engine/useGameState';
import { ACHIEVEMENTS } from '../engine/achievements';
import { GOAL_LABELS, GOAL_TARGETS, type GoalLevel } from '../engine/dailyGoal';
import { totalXPForLevel } from '../engine/xpSystem';

interface DashboardProps {
  progress: Progress;
  onReset: () => void;
}

const ALL_CATEGORIES: Category[] = [
  'A. Measurement',
  'B. Skill Acquisition',
  'C. Behavior Reduction',
  'D. Documentation & Reporting',
  'E. Professional Conduct & Scope of Practice',
];

const STAT_CONFIGS = [
  { icon: '\u{1F525}', gradient: 'gradient-danger', label: 'Streak' },
  { icon: '\u{2705}', gradient: 'gradient-success', label: 'Cards Mastered' },
  { icon: '\u{1F9E0}', gradient: 'gradient-primary', label: 'Quizzes Taken' },
  { icon: '\u{1F4CB}', gradient: 'gradient-purple', label: 'Exams Taken' },
];

function StudyCalendar({ progress }: { progress: Progress }) {
  const today = new Date();
  const days: { date: string; active: boolean }[] = [];
  for (let i = 29; i >= 0; i--) {
    const d = new Date(today);
    d.setDate(d.getDate() - i);
    const iso = d.toISOString().split('T')[0];
    days.push({ date: iso, active: progress.streakDays.includes(iso) });
  }

  return (
    <div>
      <h3 className="text-lg font-bold text-[#1A1A2E] mb-3">Study Calendar</h3>
      <div className="grid grid-cols-10 gap-1">
        {days.map(d => (
          <div
            key={d.date}
            title={d.date}
            className="aspect-square rounded-sm"
            style={{
              backgroundColor: d.active ? '#2D8F6F' : '#E5E7EB',
              opacity: d.active ? 1 : 0.4,
            }}
          />
        ))}
      </div>
      <p className="text-xs text-[#7A7A8A] mt-1">Last 30 days</p>
    </div>
  );
}

export default function Dashboard({ progress, onReset }: DashboardProps) {
  const { xp, streak, dailyGoal, achievements } = useGameState();

  const knownCards = flashcards.filter(c => progress.flashcards[c.id] === 'know');
  const learningCards = flashcards.filter(c => progress.flashcards[c.id] === 'learning');

  const quizCount = progress.quizScores.length;
  const avgQuizScore = quizCount > 0
    ? Math.round((progress.quizScores.reduce((sum, r) => sum + r.correctAnswers / r.totalQuestions, 0) / quizCount) * 100)
    : 0;

  const examCount = progress.examScores.length;
  const avgExamScore = examCount > 0
    ? Math.round((progress.examScores.reduce((sum, r) => sum + r.correctAnswers / r.totalQuestions, 0) / examCount) * 100)
    : 0;

  const streakLength = progress.streakDays.length;

  const statValues = [
    `${streakLength} day${streakLength !== 1 ? 's' : ''}`,
    `${knownCards.length}/${flashcards.length}`,
    String(quizCount),
    String(examCount),
  ];

  const categoryMastery = ALL_CATEGORIES.map(cat => {
    const catCards = flashcards.filter(c => c.category === cat);
    const known = catCards.filter(c => progress.flashcards[c.id] === 'know').length;
    return { category: cat, known, total: catCards.length };
  });

  // XP bar calculations
  const currentLevelTotal = totalXPForLevel(xp.level);
  const nextLevelTotal = totalXPForLevel(Math.min(xp.level + 1, 50));
  const xpInLevel = xp.totalXP - currentLevelTotal;
  const xpNeeded = nextLevelTotal - currentLevelTotal;
  const xpPercent = xpNeeded > 0 ? Math.min(100, Math.round((xpInLevel / xpNeeded) * 100)) : 100;

  // Daily goal progress ring
  const goalRadius = 36;
  const goalCircumference = 2 * Math.PI * goalRadius;
  const goalOffset = goalCircumference - (dailyGoal.percentage / 100) * goalCircumference;

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-[#1A1A2E] mb-6 text-shadow-sm animate-fade-up">
        Your Progress
      </h2>

      {/* XP & Level Bar */}
      <div className="glass-card p-4 mb-4 animate-fade-up">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-black text-[#2D5F8A]">Lv.{xp.level}</span>
            <span className="text-sm font-medium text-[#E8743B]">{xp.title}</span>
          </div>
          <span className="text-sm text-[#7A7A8A]">{xp.totalXP} XP</span>
        </div>
        <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-500"
            style={{ width: `${xpPercent}%`, background: 'linear-gradient(90deg, #2D5F8A, #E8743B)' }}
          />
        </div>
        <div className="flex justify-between text-xs text-[#7A7A8A] mt-1">
          <span>{xpInLevel} / {xpNeeded} XP</span>
          <span>Level {Math.min(xp.level + 1, 50)}</span>
        </div>
        {xp.combo > 1 && (
          <p className="text-xs text-[#E8743B] font-medium mt-1">🔥 Combo x{xp.combo >= 10 ? 3 : xp.combo >= 5 ? 2 : 1}</p>
        )}
      </div>

      {/* Streak + Daily Goal Row */}
      <div className="grid grid-cols-2 gap-3 mb-6 animate-fade-up">
        {/* Streak */}
        <div className="glass-card p-4 text-center">
          <p className="text-3xl mb-1">🔥</p>
          <p className="text-2xl font-black text-[#E8743B]">{streak.currentStreak}</p>
          <p className="text-xs text-[#7A7A8A]">Day Streak</p>
          {streak.freezeCount > 0 && (
            <p className="text-xs text-[#2D5F8A] mt-1">❄️ {streak.freezeCount} freeze{streak.freezeCount > 1 ? 's' : ''}</p>
          )}
          <p className="text-xs text-[#7A7A8A]">Best: {streak.bestStreak}</p>
        </div>

        {/* Daily Goal */}
        <div className="glass-card p-4 flex flex-col items-center">
          <svg width="84" height="84" className="mb-1">
            <circle cx="42" cy="42" r={goalRadius} fill="none" stroke="#E5E7EB" strokeWidth="6" />
            <circle
              cx="42" cy="42" r={goalRadius} fill="none"
              stroke={dailyGoal.completed ? '#2D8F6F' : '#2D5F8A'}
              strokeWidth="6" strokeLinecap="round"
              strokeDasharray={goalCircumference}
              strokeDashoffset={goalOffset}
              transform="rotate(-90 42 42)"
              className="transition-all duration-500"
            />
            <text x="42" y="42" textAnchor="middle" dy="0.35em" className="text-sm font-bold fill-[#1A1A2E]">
              {dailyGoal.percentage}%
            </text>
          </svg>
          <p className="text-xs text-[#7A7A8A]">{dailyGoal.progress}/{dailyGoal.target} questions</p>
          <select
            value={dailyGoal.level}
            onChange={e => dailyGoal.setLevel(e.target.value as GoalLevel)}
            className="text-xs mt-1 border rounded px-1 py-0.5 text-[#4A4A5A] bg-white"
          >
            {(Object.keys(GOAL_TARGETS) as GoalLevel[]).map(l => (
              <option key={l} value={l}>{GOAL_LABELS[l]} ({GOAL_TARGETS[l]})</option>
            ))}
          </select>
        </div>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
        {STAT_CONFIGS.map((cfg, i) => (
          <div key={cfg.label} className={`stat-card ${cfg.gradient} animate-fade-up delay-${i + 1}`}>
            <div className="text-2xl mb-2">{cfg.icon}</div>
            <p className="text-xl font-bold text-white text-shadow-sm">{statValues[i]}</p>
            <p className="text-xs text-white/80 font-medium mt-0.5">{cfg.label}</p>
          </div>
        ))}
      </div>

      {/* Average scores */}
      {(quizCount > 0 || examCount > 0) && (
        <div className="grid grid-cols-2 gap-3 mb-8">
          {quizCount > 0 && (
            <div className="glass-card p-5 text-center animate-fade-up delay-2 glow-blue">
              <p className="text-xs text-[#7A7A8A] font-medium uppercase tracking-wider mb-1">Avg Quiz Score</p>
              <p className="text-4xl font-black gradient-text">{avgQuizScore}%</p>
            </div>
          )}
          {examCount > 0 && (
            <div className="glass-card p-5 text-center animate-fade-up delay-3 glow-purple">
              <p className="text-xs text-[#7A7A8A] font-medium uppercase tracking-wider mb-1">Avg Exam Score</p>
              <p className="text-4xl font-black gradient-text">{avgExamScore}%</p>
            </div>
          )}
        </div>
      )}

      {/* Achievements */}
      <h3 className="text-lg font-bold text-[#1A1A2E] mb-3 animate-fade-up">
        Achievements ({achievements.unlockedCount}/{achievements.totalCount})
      </h3>
      <div className="grid grid-cols-5 gap-2 mb-8">
        {ACHIEVEMENTS.map(a => {
          const unlocked = achievements.isUnlocked(a.id);
          return (
            <div
              key={a.id}
              title={`${a.name}: ${a.description}`}
              className={`aspect-square flex items-center justify-center rounded-xl text-2xl transition-all ${
                unlocked ? 'bg-white shadow-md scale-100' : 'bg-gray-100 opacity-40 grayscale'
              }`}
            >
              {a.icon}
            </div>
          );
        })}
      </div>

      {/* Study Calendar */}
      <div className="glass-card p-4 mb-8 animate-fade-up">
        <StudyCalendar progress={progress} />
      </div>

      {/* Flashcard mastery by category */}
      <h3 className="text-lg font-bold text-[#1A1A2E] mb-4 animate-fade-up">
        Flashcard Mastery by Category
      </h3>
      <div className="space-y-3 mb-8">
        {categoryMastery.map(({ category, known, total }) => (
          <div key={category} className="animate-fade-up">
            <ProgressBar
              value={known}
              max={total}
              label={category}
              color={total > 0 && known / total >= 0.8 ? 'success' : 'primary'}
            />
          </div>
        ))}
      </div>

      {/* Summary stats */}
      <div className="glass-card p-4 mb-6 animate-fade-up">
        <p className="text-sm text-[#4A4A5A]">
          <strong className="text-[#1A1A2E]">{flashcards.length}</strong> flashcards &middot;{' '}
          <strong className="text-[#1A1A2E]">{questions.length}</strong> practice questions &middot;{' '}
          <strong className="text-emerald-400">{knownCards.length}</strong> mastered &middot;{' '}
          <strong className="text-amber-400">{learningCards.length}</strong> still learning
        </p>
      </div>

      {/* Recent exam scores */}
      {progress.examScores.length > 0 && (
        <div className="mb-8 animate-fade-up">
          <h3 className="text-lg font-bold text-[#1A1A2E] mb-4">Recent Exam Scores</h3>
          <div className="space-y-2">
            {progress.examScores.slice(-5).reverse().map((exam, i) => {
              const pct = Math.round((exam.correctAnswers / exam.totalQuestions) * 100);
              return (
                <div key={i} className="glass-card flex justify-between items-center px-4 py-3">
                  <span className="text-sm text-[#7A7A8A]">{new Date(exam.date).toLocaleDateString()}</span>
                  <span className={`font-bold text-lg ${pct >= 80 ? 'text-emerald-400' : 'text-rose-400'}`}>
                    {pct}% ({exam.correctAnswers}/{exam.totalQuestions})
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      )}

      <button
        onClick={() => {
          if (window.confirm('Are you sure? This will reset all progress.')) {
            onReset();
          }
        }}
        className="text-sm text-rose-400/70 hover:text-rose-400 transition-colors font-medium"
      >
        Reset All Progress
      </button>
    </div>
  );
}
