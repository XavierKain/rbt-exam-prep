import { useState, useMemo } from 'react';
import { questions } from '../data/questions';
import type { Category, Question, QuizResult } from '../types';
import ProgressBar from './ProgressBar';

interface QuizModeProps {
  onComplete: (result: QuizResult) => void;
}

const CATEGORIES: Category[] = [
  'A. Measurement',
  'B. Skill Acquisition',
  'C. Behavior Reduction',
  'D. Documentation & Reporting',
  'E. Professional Conduct & Scope of Practice',
];

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

type Phase = 'setup' | 'quiz' | 'review';

export default function QuizMode({ onComplete }: QuizModeProps) {
  const [phase, setPhase] = useState<Phase>('setup');
  const [selectedCategories, setSelectedCategories] = useState<Category[]>([]);
  const [questionCount, setQuestionCount] = useState(20);
  const [quizQuestions, setQuizQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [correctCount, setCorrectCount] = useState(0);

  function toggleCategory(cat: Category) {
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  }

  function startQuiz() {
    const cats =
      selectedCategories.length > 0 ? selectedCategories : CATEGORIES;
    const pool = questions.filter((q) => cats.includes(q.category));
    const selected = shuffle(pool).slice(0, questionCount);
    setQuizQuestions(selected);
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setShowFeedback(false);
    setAnswers({});
    setCorrectCount(0);
    setPhase('quiz');
  }

  function submitAnswer() {
    if (selectedAnswer === null) return;
    const q = quizQuestions[currentIndex];
    const isCorrect = selectedAnswer === q.correctIndex;
    if (isCorrect) setCorrectCount((c) => c + 1);
    setAnswers((prev) => ({ ...prev, [q.id]: selectedAnswer }));
    setShowFeedback(true);
  }

  function nextQuestion() {
    if (currentIndex + 1 >= quizQuestions.length) {
      const wrongIds = quizQuestions
        .filter((q) => answers[q.id] !== q.correctIndex)
        .map((q) => q.id);
      const lastQ = quizQuestions[currentIndex];
      const lastCorrect = selectedAnswer === lastQ.correctIndex;
      const finalCorrect = correctCount + (lastCorrect ? 0 : 0);

      const result: QuizResult = {
        date: new Date().toISOString(),
        totalQuestions: quizQuestions.length,
        correctAnswers: finalCorrect,
        categories:
          selectedCategories.length > 0 ? selectedCategories : CATEGORIES,
        wrongQuestionIds: wrongIds,
      };
      onComplete(result);
      setPhase('review');
      return;
    }
    setCurrentIndex((i) => i + 1);
    setSelectedAnswer(null);
    setShowFeedback(false);
  }

  const wrongQuestions = useMemo(
    () =>
      quizQuestions.filter(
        (q) => answers[q.id] !== undefined && answers[q.id] !== q.correctIndex
      ),
    [quizQuestions, answers]
  );

  // SETUP
  if (phase === 'setup') {
    return (
      <div className="max-w-xl mx-auto animate-fade-up">
        <h2 className="text-2xl font-bold text-white mb-6 text-shadow-sm">
          Quiz Setup
        </h2>

        <div className="glass-card-strong p-6 mb-6">
          <label className="block font-semibold text-white mb-3">Categories</label>
          <p className="text-sm text-[#7A7A8A] mb-3">
            Select categories or leave blank for all
          </p>
          <div className="flex flex-col gap-3">
            {CATEGORIES.map((cat) => (
              <label
                key={cat}
                className="flex items-center gap-3 cursor-pointer group"
              >
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(cat)}
                  onChange={() => toggleCategory(cat)}
                  className="dark-checkbox"
                />
                <span className="text-sm text-[#4A4A5A] group-hover:text-[#1A1A2E] transition-colors">
                  {cat}
                </span>
              </label>
            ))}
          </div>
        </div>

        <div className="glass-card-strong p-6 mb-6">
          <label className="block font-semibold text-white mb-3">
            Number of Questions
          </label>
          <select
            value={questionCount}
            onChange={(e) => setQuestionCount(Number(e.target.value))}
            className="dark-select w-full"
          >
            {[10, 20, 30, 50].map((n) => (
              <option key={n} value={n}>
                {n} questions
              </option>
            ))}
          </select>
        </div>

        <button onClick={startQuiz} className="btn-primary w-full text-lg">
          Start Quiz
        </button>
      </div>
    );
  }

  // REVIEW
  if (phase === 'review') {
    const pct = quizQuestions.length > 0
      ? Math.round((correctCount / quizQuestions.length) * 100)
      : 0;
    const passed = pct >= 80;

    return (
      <div className="max-w-2xl mx-auto animate-fade-up">
        <div className="glass-card-strong text-center p-8 mb-8">
          <p className="text-5xl mb-3">{passed ? '\u{1F389}' : '\u{1F4AA}'}</p>
          <h2 className="text-2xl font-bold text-white mb-3 text-shadow-sm">
            Quiz Complete!
          </h2>
          <div
            className="score-ring mx-auto mb-4"
            style={{
              '--ring-color': passed ? '#10B981' : '#3B82F6',
              '--ring-pct': `${pct}%`,
            } as React.CSSProperties}
          >
            <div className="text-center">
              <p className="text-3xl font-black text-white">{pct}%</p>
              <p className="text-xs text-[#7A7A8A]">
                {correctCount}/{quizQuestions.length}
              </p>
            </div>
          </div>
        </div>

        {wrongQuestions.length > 0 && (
          <div className="mb-6">
            <h3 className="text-lg font-bold text-white mb-4">
              Review Wrong Answers ({wrongQuestions.length})
            </h3>
            <div className="space-y-3">
              {wrongQuestions.map((q) => (
                <div key={q.id} className="review-card animate-fade-up">
                  <p className="font-medium text-white mb-2">{q.question}</p>
                  <p className="text-sm text-rose-400 mb-1 flex items-center gap-1.5">
                    <span>&#x274C;</span>
                    {q.options[answers[q.id]]}
                  </p>
                  <p className="text-sm text-emerald-400 mb-1 flex items-center gap-1.5">
                    <span>&#x2705;</span>
                    {q.options[q.correctIndex]}
                  </p>
                  <p className="text-sm text-[#7A7A8A] italic mt-2">
                    {q.explanation}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        <button
          onClick={() => setPhase('setup')}
          className="btn-primary w-full text-lg"
        >
          New Quiz
        </button>
      </div>
    );
  }

  // QUIZ
  const q = quizQuestions[currentIndex];
  return (
    <div className="max-w-2xl mx-auto animate-fade-up">
      <ProgressBar
        value={currentIndex + (showFeedback ? 1 : 0)}
        max={quizQuestions.length}
        label={`Question ${currentIndex + 1} of ${quizQuestions.length}`}
      />

      <div className="glass-card-strong p-6 mt-5">
        <p className="text-xs font-semibold text-blue-400 uppercase tracking-wide mb-2">
          {q.taskCode} &middot; {q.category}
        </p>
        <h3 className="text-lg font-bold text-white mb-6 text-shadow-sm leading-relaxed">
          {q.question}
        </h3>

        <div className="space-y-3">
          {q.options.map((opt, i) => {
            let classes = 'option-btn relative';
            if (showFeedback) {
              if (i === q.correctIndex) classes += ' correct';
              else if (i === selectedAnswer) classes += ' wrong';
              else classes += ' dimmed';
            } else if (selectedAnswer === i) {
              classes += ' selected';
            }

            return (
              <button
                key={i}
                onClick={() => !showFeedback && setSelectedAnswer(i)}
                disabled={showFeedback}
                className={classes}
              >
                <span className="font-semibold text-[#7A7A8A] mr-2">
                  {String.fromCharCode(65 + i)}.
                </span>
                <span>{opt}</span>
                {showFeedback && i === q.correctIndex && (
                  <span className="ml-auto text-emerald-400 text-lg">&#x2705;</span>
                )}
                {showFeedback && i === selectedAnswer && i !== q.correctIndex && (
                  <span className="ml-auto text-rose-400 text-lg">&#x274C;</span>
                )}
              </button>
            );
          })}
        </div>

        {showFeedback && (
          <div
            className={`mt-4 p-4 rounded-xl animate-scale-in ${
              selectedAnswer === q.correctIndex
                ? 'bg-emerald-500/10 border border-emerald-500/20'
                : 'bg-rose-500/10 border border-rose-500/20'
            }`}
          >
            <p className={`font-bold mb-1 ${
              selectedAnswer === q.correctIndex ? 'text-emerald-400' : 'text-rose-400'
            }`}>
              {selectedAnswer === q.correctIndex ? '\u2705 Correct!' : '\u274C Incorrect'}
            </p>
            <p className="text-sm text-[#4A4A5A]">{q.explanation}</p>
          </div>
        )}

        <div className="mt-6">
          {!showFeedback ? (
            <button
              onClick={submitAnswer}
              disabled={selectedAnswer === null}
              className="btn-primary w-full"
            >
              Submit Answer
            </button>
          ) : (
            <button
              onClick={nextQuestion}
              className="btn-primary w-full"
            >
              {currentIndex + 1 >= quizQuestions.length
                ? 'See Results'
                : 'Next Question'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
