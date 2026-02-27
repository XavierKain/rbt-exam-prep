import { flashcards } from '../data/flashcards';
import { questions } from '../data/questions';
import type { Category, Progress } from '../types';
import ProgressBar from './ProgressBar';

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

export default function Dashboard({ progress, onReset }: DashboardProps) {
  const knownCards = flashcards.filter(
    (c) => progress.flashcards[c.id] === 'know'
  );
  const learningCards = flashcards.filter(
    (c) => progress.flashcards[c.id] === 'learning'
  );

  const quizCount = progress.quizScores.length;
  const avgQuizScore =
    quizCount > 0
      ? Math.round(
          (progress.quizScores.reduce(
            (sum, r) => sum + r.correctAnswers / r.totalQuestions,
            0
          ) /
            quizCount) *
            100
        )
      : 0;

  const examCount = progress.examScores.length;
  const avgExamScore =
    examCount > 0
      ? Math.round(
          (progress.examScores.reduce(
            (sum, r) => sum + r.correctAnswers / r.totalQuestions,
            0
          ) /
            examCount) *
            100
        )
      : 0;

  const streakLength = progress.streakDays.length;

  const statValues = [
    `${streakLength} day${streakLength !== 1 ? 's' : ''}`,
    `${knownCards.length}/${flashcards.length}`,
    String(quizCount),
    String(examCount),
  ];

  const categoryMastery = ALL_CATEGORIES.map((cat) => {
    const catCards = flashcards.filter((c) => c.category === cat);
    const known = catCards.filter(
      (c) => progress.flashcards[c.id] === 'know'
    ).length;
    return { category: cat, known, total: catCards.length };
  });

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-white mb-6 text-shadow-sm animate-fade-up">
        Your Progress
      </h2>

      {/* Stats grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
        {STAT_CONFIGS.map((cfg, i) => (
          <div
            key={cfg.label}
            className={`stat-card ${cfg.gradient} animate-fade-up delay-${i + 1}`}
          >
            <div className="text-2xl mb-2">{cfg.icon}</div>
            <p className="text-xl font-bold text-white text-shadow-sm">
              {statValues[i]}
            </p>
            <p className="text-xs text-white/70 font-medium mt-0.5">
              {cfg.label}
            </p>
          </div>
        ))}
      </div>

      {/* Average scores */}
      {(quizCount > 0 || examCount > 0) && (
        <div className="grid grid-cols-2 gap-3 mb-8">
          {quizCount > 0 && (
            <div className="glass-card p-5 text-center animate-fade-up delay-2 glow-blue">
              <p className="text-xs text-[#7A7A8A] font-medium uppercase tracking-wider mb-1">
                Avg Quiz Score
              </p>
              <p className="text-4xl font-black gradient-text">{avgQuizScore}%</p>
            </div>
          )}
          {examCount > 0 && (
            <div className="glass-card p-5 text-center animate-fade-up delay-3 glow-purple">
              <p className="text-xs text-[#7A7A8A] font-medium uppercase tracking-wider mb-1">
                Avg Exam Score
              </p>
              <p className="text-4xl font-black gradient-text">{avgExamScore}%</p>
            </div>
          )}
        </div>
      )}

      {/* Flashcard mastery by category */}
      <h3 className="text-lg font-bold text-white mb-4 animate-fade-up">
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
          <strong className="text-white">{flashcards.length}</strong> flashcards &middot;{' '}
          <strong className="text-white">{questions.length}</strong> practice questions &middot;{' '}
          <strong className="text-emerald-400">{knownCards.length}</strong> mastered &middot;{' '}
          <strong className="text-amber-400">{learningCards.length}</strong> still learning
        </p>
      </div>

      {/* Recent exam scores */}
      {progress.examScores.length > 0 && (
        <div className="mb-8 animate-fade-up">
          <h3 className="text-lg font-bold text-white mb-4">Recent Exam Scores</h3>
          <div className="space-y-2">
            {progress.examScores
              .slice(-5)
              .reverse()
              .map((exam, i) => {
                const pct = Math.round(
                  (exam.correctAnswers / exam.totalQuestions) * 100
                );
                return (
                  <div
                    key={i}
                    className="glass-card flex justify-between items-center px-4 py-3"
                  >
                    <span className="text-sm text-[#7A7A8A]">
                      {new Date(exam.date).toLocaleDateString()}
                    </span>
                    <span
                      className={`font-bold text-lg ${
                        pct >= 80 ? 'text-emerald-400' : 'text-rose-400'
                      }`}
                    >
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
