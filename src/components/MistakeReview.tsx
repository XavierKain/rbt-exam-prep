import { useState, useMemo } from 'react';
import { questions } from '../data/questions';
import { useMistakes } from '../engine/smartReview';

export default function MistakeReview() {
  const { mistakes, markCorrect, addMistake, activeMistakes, mistakeCount } = useMistakes();
  const [mode, setMode] = useState<'review' | 'quiz'>('review');
  const [quizIdx, setQuizIdx] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);

  const mistakeQuestions = useMemo(() => {
    return activeMistakes
      .map((m) => questions.find((q) => q.id === m.questionId))
      .filter(Boolean) as typeof questions;
  }, [activeMistakes]);

  const allMistakeQuestions = useMemo(() => {
    return Object.values(mistakes)
      .map((m) => ({ ...m, question: questions.find((q) => q.id === m.questionId) }))
      .filter((m) => m.question)
      .sort((a, b) => b.count - a.count);
  }, [mistakes]);

  if (mistakeCount === 0 && Object.keys(mistakes).length === 0) {
    return (
      <div className="text-center py-16 animate-fade-up">
        <div className="text-5xl mb-4">✨</div>
        <h2 className="text-xl font-bold mb-2" style={{ color: '#1A1A2E' }}>No Mistakes Yet</h2>
        <p className="text-sm" style={{ color: '#7A7A8A' }}>
          Complete quizzes and exams — your mistakes will appear here for review.
        </p>
      </div>
    );
  }

  if (mode === 'quiz' && mistakeQuestions.length > 0) {
    const q = mistakeQuestions[quizIdx % mistakeQuestions.length];

    const handleAnswer = (idx: number) => {
      if (selectedAnswer !== null) return;
      setSelectedAnswer(idx);
      setShowExplanation(true);
      if (idx === q.correctIndex) {
        markCorrect(q.id);
      } else {
        addMistake(q.id);
      }
    };

    const next = () => {
      setSelectedAnswer(null);
      setShowExplanation(false);
      setQuizIdx((i) => i + 1);
    };

    return (
      <div className="max-w-2xl mx-auto py-4">
        <div className="flex justify-between items-center mb-4">
          <button onClick={() => setMode('review')} className="text-sm" style={{ color: '#2D5F8A' }}>
            ← Back to Review
          </button>
          <span className="text-sm" style={{ color: '#7A7A8A' }}>
            {mistakeCount} mistakes left
          </span>
        </div>

        <div className="rounded-2xl p-6 mb-4" style={{ background: '#fff', border: '1px solid #E8E8E8' }}>
          <p className="font-medium mb-4" style={{ color: '#1A1A2E' }}>{q.question}</p>
          <div className="space-y-2">
            {q.options.map((opt, i) => (
              <button
                key={i}
                onClick={() => handleAnswer(i)}
                className="w-full text-left p-3 rounded-xl text-sm transition-all"
                style={{
                  background:
                    selectedAnswer === null ? '#F5F5F5' :
                    i === q.correctIndex ? '#E8F5E9' :
                    i === selectedAnswer ? '#FFEBEE' : '#F5F5F5',
                  border: `1px solid ${
                    selectedAnswer !== null && i === q.correctIndex ? '#2D8F6F' :
                    selectedAnswer === i && i !== q.correctIndex ? '#E84B3B' : '#E8E8E8'
                  }`,
                  color: '#1A1A2E',
                }}
              >
                {opt}
              </button>
            ))}
          </div>
          {showExplanation && (
            <div className="mt-4 p-3 rounded-xl text-sm" style={{ background: '#F0F7FF', color: '#1A1A2E' }}>
              {q.explanation}
            </div>
          )}
        </div>
        {selectedAnswer !== null && (
          <button onClick={next} className="btn-primary w-full">Next</button>
        )}
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto py-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold" style={{ color: '#1A1A2E' }}>
          Mistake Review
        </h2>
        {mistakeCount > 0 && (
          <button onClick={() => { setMode('quiz'); setQuizIdx(0); }} className="btn-primary text-sm px-4 py-2">
            Quiz Mistakes ({mistakeCount})
          </button>
        )}
      </div>

      <div className="space-y-3">
        {allMistakeQuestions.map((m) => {
          const q = m.question!;
          const mastered = m.consecutiveCorrect >= 3;
          return (
            <div
              key={q.id}
              className="rounded-xl p-4"
              style={{
                background: mastered ? '#E8F5E9' : '#fff',
                border: `1px solid ${mastered ? '#2D8F6F' : '#E8E8E8'}`,
                opacity: mastered ? 0.7 : 1,
              }}
            >
              <div className="flex items-start justify-between gap-2 mb-2">
                <p className="text-sm font-medium" style={{ color: '#1A1A2E' }}>{q.question}</p>
                {mastered && (
                  <span className="text-xs whitespace-nowrap px-2 py-1 rounded-full"
                    style={{ background: '#2D8F6F', color: '#fff' }}>
                    ✓ Mastered
                  </span>
                )}
              </div>
              <p className="text-xs mb-1" style={{ color: '#2D8F6F' }}>
                ✓ {q.options[q.correctIndex]}
              </p>
              <p className="text-xs" style={{ color: '#7A7A8A' }}>
                Wrong {m.count}x · Correct streak: {m.consecutiveCorrect}/3
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
