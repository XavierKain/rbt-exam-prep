import { useState, useEffect, useRef, useMemo } from 'react';
import { questions } from '../data/questions';
import type { Category, Question, ExamResult } from '../types';
import ProgressBar from './ProgressBar';

interface ExamSimulatorProps {
  onComplete: (result: ExamResult) => void;
}

const EXAM_QUESTIONS = 85;
const EXAM_TIME_SECONDS = 90 * 60; // 90 minutes

const ALL_CATEGORIES: Category[] = [
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

function formatTime(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}:${s.toString().padStart(2, '0')}`;
}

type Phase = 'intro' | 'exam' | 'results';

export default function ExamSimulator({ onComplete }: ExamSimulatorProps) {
  const [phase, setPhase] = useState<Phase>('intro');
  const [examQuestions, setExamQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [timeLeft, setTimeLeft] = useState(EXAM_TIME_SECONDS);
  const [flagged, setFlagged] = useState<Set<string>>(new Set());
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const startTimeRef = useRef<number>(0);

  useEffect(() => {
    if (phase === 'exam' && timeLeft > 0) {
      timerRef.current = setInterval(() => {
        setTimeLeft((t) => {
          if (t <= 1) {
            clearInterval(timerRef.current!);
            finishExam();
            return 0;
          }
          return t - 1;
        });
      }, 1000);
      return () => clearInterval(timerRef.current!);
    }
  }, [phase]);

  function startExam() {
    const selected = shuffle(questions).slice(0, EXAM_QUESTIONS);
    setExamQuestions(selected);
    setCurrentIndex(0);
    setAnswers({});
    setTimeLeft(EXAM_TIME_SECONDS);
    setFlagged(new Set());
    startTimeRef.current = Date.now();
    setPhase('exam');
  }

  function finishExam() {
    if (timerRef.current) clearInterval(timerRef.current);
    const timeUsed = Math.round((Date.now() - startTimeRef.current) / 1000);

    const breakdown: Record<Category, { correct: number; total: number }> =
      {} as Record<Category, { correct: number; total: number }>;
    ALL_CATEGORIES.forEach((cat) => {
      breakdown[cat] = { correct: 0, total: 0 };
    });

    let correctTotal = 0;
    const wrongIds: string[] = [];

    examQuestions.forEach((q) => {
      breakdown[q.category].total++;
      if (answers[q.id] === q.correctIndex) {
        breakdown[q.category].correct++;
        correctTotal++;
      } else {
        wrongIds.push(q.id);
      }
    });

    const result: ExamResult = {
      date: new Date().toISOString(),
      totalQuestions: examQuestions.length,
      correctAnswers: correctTotal,
      timeUsedSeconds: timeUsed,
      categoryBreakdown: breakdown,
      wrongQuestionIds: wrongIds,
    };
    onComplete(result);
    setPhase('results');
  }

  function toggleFlag(qId: string) {
    setFlagged((prev) => {
      const next = new Set(prev);
      if (next.has(qId)) next.delete(qId);
      else next.add(qId);
      return next;
    });
  }

  const answeredCount = Object.keys(answers).length;

  const resultData = useMemo(() => {
    if (phase !== 'results') return null;
    let correct = 0;
    const wrongQs: Question[] = [];
    const breakdown: Record<Category, { correct: number; total: number }> =
      {} as Record<Category, { correct: number; total: number }>;
    ALL_CATEGORIES.forEach((cat) => {
      breakdown[cat] = { correct: 0, total: 0 };
    });

    examQuestions.forEach((q) => {
      breakdown[q.category].total++;
      if (answers[q.id] === q.correctIndex) {
        breakdown[q.category].correct++;
        correct++;
      } else {
        wrongQs.push(q);
      }
    });
    return { correct, wrongQs, breakdown };
  }, [phase, examQuestions, answers]);

  // INTRO
  if (phase === 'intro') {
    return (
      <div className="max-w-xl mx-auto text-center animate-fade-up">
        <div className="text-5xl mb-4">{'\u{1F4DD}'}</div>
        <h2 className="text-2xl font-bold text-[#1A1A2E] mb-4 text-shadow-sm">
          RBT Exam Simulator
        </h2>
        <div className="glass-card-strong p-6 mb-6 text-left">
          <h3 className="font-bold text-lg text-[#1A1A2E] mb-4 flex items-center gap-2">
            <span>{'\u{1F4CB}'}</span> Exam Format
          </h3>
          <ul className="space-y-3 text-sm text-[#4A4A5A]">
            <li className="flex items-center gap-2">
              <span className="text-blue-400">{'\u{25CF}'}</span>
              <strong className="text-[#1A1A2E]">{EXAM_QUESTIONS} multiple-choice questions</strong>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-purple-400">{'\u{25CF}'}</span>
              <strong className="text-[#1A1A2E]">90-minute time limit</strong>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-emerald-400">{'\u{25CF}'}</span>
              Questions from all 5 RBT task list sections
            </li>
            <li className="flex items-center gap-2">
              <span className="text-amber-400">{'\u{25CF}'}</span>
              Flag questions to review before submitting
            </li>
            <li className="flex items-center gap-2">
              <span className="text-rose-400">{'\u{25CF}'}</span>
              Score and category breakdown shown at the end
            </li>
          </ul>
        </div>
        <button
          onClick={startExam}
          className="btn-primary w-full text-lg"
        >
          Begin Exam
        </button>
      </div>
    );
  }

  // RESULTS
  if (phase === 'results' && resultData) {
    const pct = Math.round(
      (resultData.correct / examQuestions.length) * 100
    );
    const passed = pct >= 80;

    return (
      <div className="max-w-2xl mx-auto animate-fade-up">
        <div
          className={`glass-card-strong text-center p-8 mb-6 ${
            passed ? 'glow-success' : 'glow-danger'
          }`}
        >
          <p className="text-5xl mb-3">{passed ? '\u{1F389}' : '\u{1F4AA}'}</p>
          <h2 className="text-2xl font-bold text-[#1A1A2E] mb-3 text-shadow-sm">
            {passed ? 'Congratulations!' : 'Keep Studying!'}
          </h2>
          <div
            className="score-ring mx-auto mb-4"
            style={{
              '--ring-color': passed ? '#10B981' : '#F43F5E',
              '--ring-pct': `${pct}%`,
            } as React.CSSProperties}
          >
            <div className="text-center">
              <p className="text-3xl font-black text-[#1A1A2E]">{pct}%</p>
              <p className="text-xs text-[#7A7A8A]">
                {resultData.correct}/{examQuestions.length}
              </p>
            </div>
          </div>
          <p className="text-sm text-[#7A7A8A] mt-2">
            Passing score: 80% &middot; Time used:{' '}
            {formatTime(EXAM_TIME_SECONDS - timeLeft)}
          </p>
        </div>

        <h3 className="text-lg font-bold text-[#1A1A2E] mb-4">Score by Category</h3>
        <div className="space-y-3 mb-8">
          {ALL_CATEGORIES.map((cat) => {
            const { correct, total } = resultData.breakdown[cat];
            return (
              <ProgressBar
                key={cat}
                value={correct}
                max={total}
                label={cat}
                color={
                  total > 0 && correct / total >= 0.8
                    ? 'success'
                    : 'danger'
                }
              />
            );
          })}
        </div>

        {resultData.wrongQs.length > 0 && (
          <div className="mb-6">
            <h3 className="text-lg font-bold text-[#1A1A2E] mb-4">
              Wrong Answers ({resultData.wrongQs.length})
            </h3>
            <div className="space-y-3">
              {resultData.wrongQs.map((q) => (
                <div key={q.id} className="review-card">
                  <p className="font-medium text-[#1A1A2E] mb-2">{q.question}</p>
                  {answers[q.id] !== undefined && (
                    <p className="text-sm text-rose-400 mb-1 flex items-center gap-1.5">
                      <span>&#x274C;</span>
                      {q.options[answers[q.id]]}
                    </p>
                  )}
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
          onClick={() => setPhase('intro')}
          className="btn-primary w-full text-lg"
        >
          Try Again
        </button>
      </div>
    );
  }

  // EXAM
  const q = examQuestions[currentIndex];
  const isTimeLow = timeLeft < 300;

  return (
    <div className="max-w-3xl mx-auto animate-fade-up">
      {/* Header */}
      <div className="sticky top-0 z-10 pb-3 pt-4 mt-2" style={{ background: 'linear-gradient(to bottom, rgba(250,250,248,0.98) 0%, rgba(250,250,248,0.9) 80%, transparent 100%)' }}>
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-[#7A7A8A]">
            {answeredCount} of {examQuestions.length} answered
          </span>
          <div className={`timer-pill ${isTimeLow ? 'time-low' : ''}`}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            {formatTime(timeLeft)}
          </div>
        </div>
        <ProgressBar value={answeredCount} max={examQuestions.length} />
      </div>

      {/* Question */}
      <div className="glass-card-strong p-6 mt-4">
        <div className="flex justify-between items-start mb-4">
          <p className="text-xs font-semibold text-blue-400 uppercase tracking-wide">
            Question {currentIndex + 1} &middot; {q.taskCode}
          </p>
          <button
            onClick={() => toggleFlag(q.id)}
            className={`text-sm px-3 py-1.5 rounded-lg font-medium transition-all ${
              flagged.has(q.id)
                ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                : 'bg-[#F3F1EE] text-[#7A7A8A] border border-transparent hover:border-slate-600'
            }`}
          >
            {flagged.has(q.id) ? '\u{1F6A9} Flagged' : '\u{1F3F3}\u{FE0F} Flag'}
          </button>
        </div>

        <h3 className="text-lg font-bold text-[#1A1A2E] mb-6 text-shadow-sm leading-relaxed">
          {q.question}
        </h3>

        <div className="space-y-3">
          {q.options.map((opt, i) => (
            <button
              key={i}
              onClick={() =>
                setAnswers((prev) => ({ ...prev, [q.id]: i }))
              }
              className={`option-btn relative ${
                answers[q.id] === i ? 'selected' : ''
              }`}
            >
              <span className="font-semibold text-[#7A7A8A] mr-2">
                {String.fromCharCode(65 + i)}.
              </span>
              {opt}
            </button>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex gap-3 mt-6">
        <button
          onClick={() => setCurrentIndex((i) => Math.max(0, i - 1))}
          disabled={currentIndex === 0}
          className="btn-secondary px-5 disabled:opacity-30"
        >
          &larr; Prev
        </button>

        <div className="flex-1" />

        {currentIndex + 1 < examQuestions.length ? (
          <button
            onClick={() => setCurrentIndex((i) => i + 1)}
            className="btn-primary px-6"
          >
            Next &rarr;
          </button>
        ) : (
          <button
            onClick={finishExam}
            className="btn-success px-6"
          >
            Submit Exam
          </button>
        )}
      </div>

      {/* Question grid */}
      <div className="glass-card p-4 mt-6">
        <p className="text-sm font-semibold text-[#7A7A8A] mb-3">
          Question Navigator
        </p>
        <div className="flex flex-wrap gap-1.5">
          {examQuestions.map((eq, i) => {
            let cls = 'q-grid-btn ';
            const isAnswered = answers[eq.id] !== undefined;
            const isFlagged = flagged.has(eq.id);

            if (isFlagged && isAnswered) cls += 'flagged-answered';
            else if (isFlagged) cls += 'flagged-unanswered';
            else if (isAnswered) cls += 'answered';
            else cls += 'unanswered';

            if (i === currentIndex) cls += ' current';

            return (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={cls}
              >
                {i + 1}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
