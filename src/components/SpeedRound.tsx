import { useState, useEffect, useRef, useCallback } from 'react';
import { questions } from '../data/questions';
import type { Question } from '../types';

interface SpeedRoundProps {
  onComplete?: (score: number, total: number) => void;
}

interface TFQuestion {
  statement: string;
  isTrue: boolean;
  source: Question;
}

function generateTFQuestions(count = 20): TFQuestion[] {
  const shuffled = [...questions].sort(() => Math.random() - 0.5);
  const result: TFQuestion[] = [];

  for (const q of shuffled) {
    if (result.length >= count) break;
    const isTrue = Math.random() > 0.5;
    if (isTrue) {
      result.push({
        statement: `${q.question.replace(/\?$/, '')} — The answer is: ${q.options[q.correctIndex]}`,
        isTrue: true,
        source: q,
      });
    } else {
      const wrongOptions = q.options.filter((_, i) => i !== q.correctIndex);
      const wrongAnswer = wrongOptions[Math.floor(Math.random() * wrongOptions.length)];
      result.push({
        statement: `${q.question.replace(/\?$/, '')} — The answer is: ${wrongAnswer}`,
        isTrue: false,
        source: q,
      });
    }
  }
  return result;
}

const TIMER_MS = 5000;

export default function SpeedRound({ onComplete }: SpeedRoundProps) {
  const [phase, setPhase] = useState<'intro' | 'playing' | 'done'>('intro');
  const [tfQuestions] = useState(() => generateTFQuestions(20));
  const [currentIdx, setCurrentIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(TIMER_MS);
  const [feedback, setFeedback] = useState<'correct' | 'incorrect' | null>(null);
  const [totalTime, setTotalTime] = useState(0);
  const timerRef = useRef<number>(0);
  const startRef = useRef(0);

  const current = tfQuestions[currentIdx];

  const advance = useCallback(() => {
    clearInterval(timerRef.current);
    const elapsed = Date.now() - startRef.current;
    setTotalTime((t) => t + elapsed);
    if (currentIdx + 1 >= tfQuestions.length) {
      setPhase('done');
    } else {
      setTimeout(() => {
        setFeedback(null);
        setCurrentIdx((i) => i + 1);
        setTimeLeft(TIMER_MS);
        startRef.current = Date.now();
        timerRef.current = window.setInterval(() => {
          setTimeLeft((t) => {
            if (t <= 50) return 0;
            return t - 50;
          });
        }, 50);
      }, 600);
    }
  }, [currentIdx, tfQuestions.length]);

  const answer = useCallback(
    (userSaysTrue: boolean) => {
      if (feedback) return;
      const correct = userSaysTrue === current.isTrue;
      if (correct) setScore((s) => s + 1);
      setFeedback(correct ? 'correct' : 'incorrect');
      // Sound effects if available
      try {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const se = (window as any).soundEffects;
        if (se) correct ? se.playCorrect() : se.playWrong();
      } catch { /* noop */ }
      advance();
    },
    [feedback, current, advance]
  );

  // Timer timeout = incorrect
  useEffect(() => {
    if (phase === 'playing' && timeLeft <= 0 && !feedback) {
      setFeedback('incorrect');
      advance();
    }
  }, [timeLeft, phase, feedback, advance]);

  const startGame = () => {
    setPhase('playing');
    startRef.current = Date.now();
    timerRef.current = window.setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 50) return 0;
        return t - 50;
      });
    }, 50);
  };

  useEffect(() => {
    return () => clearInterval(timerRef.current);
  }, []);

  useEffect(() => {
    if (phase === 'done' && onComplete) {
      onComplete(score, tfQuestions.length);
    }
  }, [phase, score, tfQuestions.length, onComplete]);

  if (phase === 'intro') {
    return (
      <div className="text-center py-16 animate-fade-up">
        <div className="text-5xl mb-4">⚡</div>
        <h2 className="text-2xl font-bold mb-2" style={{ color: '#1A1A2E' }}>Speed Round</h2>
        <p className="text-sm mb-6" style={{ color: '#7A7A8A' }}>
          True or False — 5 seconds per question, 20 questions
        </p>
        <button onClick={startGame} className="btn-primary text-lg px-8 py-3">
          Start!
        </button>
      </div>
    );
  }

  if (phase === 'done') {
    const avgTime = totalTime / tfQuestions.length / 1000;
    const pct = Math.round((score / tfQuestions.length) * 100);
    return (
      <div className="text-center py-16 animate-fade-up">
        <div className="text-5xl mb-4">{pct >= 80 ? '🎉' : pct >= 60 ? '👍' : '💪'}</div>
        <h2 className="text-2xl font-bold mb-2" style={{ color: '#1A1A2E' }}>Round Complete!</h2>
        <div className="text-4xl font-black mb-2" style={{ color: '#2D5F8A' }}>
          {score}/{tfQuestions.length}
        </div>
        <p className="text-sm mb-1" style={{ color: '#7A7A8A' }}>
          {pct}% correct
        </p>
        <p className="text-sm mb-6" style={{ color: '#7A7A8A' }}>
          Avg. time: {avgTime.toFixed(1)}s per question
        </p>
        <button onClick={() => { setPhase('intro'); setCurrentIdx(0); setScore(0); setTotalTime(0); setTimeLeft(TIMER_MS); setFeedback(null); }} className="btn-primary">
          Play Again
        </button>
      </div>
    );
  }

  const timerPct = (timeLeft / TIMER_MS) * 100;

  return (
    <div className="max-w-lg mx-auto py-4">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium" style={{ color: '#7A7A8A' }}>
          {currentIdx + 1}/{tfQuestions.length}
        </span>
        <span className="text-sm font-bold" style={{ color: '#2D5F8A' }}>
          Score: {score}
        </span>
      </div>

      {/* Timer bar */}
      <div className="w-full h-2 rounded-full mb-6" style={{ background: '#E8E8E8' }}>
        <div
          className="h-full rounded-full transition-all duration-50"
          style={{
            width: `${timerPct}%`,
            background: timerPct > 30 ? '#2D8F6F' : '#E84B3B',
          }}
        />
      </div>

      <div
        className="rounded-2xl p-6 mb-6 min-h-[160px] flex items-center justify-center text-center"
        style={{
          background: feedback === 'correct' ? '#E8F5E9' : feedback === 'incorrect' ? '#FFEBEE' : '#fff',
          border: '1px solid #E8E8E8',
          transition: 'background 0.3s',
        }}
      >
        <p className="text-base font-medium leading-relaxed" style={{ color: '#1A1A2E' }}>
          {current.statement}
        </p>
      </div>

      <div className="flex gap-4">
        <button
          onClick={() => answer(true)}
          disabled={!!feedback}
          className="flex-1 py-4 rounded-xl text-lg font-bold text-white transition-transform active:scale-95"
          style={{ background: '#2D8F6F', opacity: feedback ? 0.6 : 1 }}
        >
          ✓ True
        </button>
        <button
          onClick={() => answer(false)}
          disabled={!!feedback}
          className="flex-1 py-4 rounded-xl text-lg font-bold text-white transition-transform active:scale-95"
          style={{ background: '#E84B3B', opacity: feedback ? 0.6 : 1 }}
        >
          ✗ False
        </button>
      </div>
    </div>
  );
}
