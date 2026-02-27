import { useState, useMemo } from 'react';
import { flashcards } from '../data/flashcards';
import type { Category, FlashcardStatus } from '../types';
import ProgressBar from './ProgressBar';

interface FlashCardProps {
  flashcardStatuses: Record<string, FlashcardStatus>;
  onSetStatus: (id: string, status: FlashcardStatus) => void;
}

const CATEGORIES: Category[] = [
  'A. Measurement',
  'B. Skill Acquisition',
  'C. Behavior Reduction',
  'D. Documentation & Reporting',
  'E. Professional Conduct & Scope of Practice',
];

function getCategoryChipClass(category: Category): string {
  if (category.startsWith('A.')) return 'chip chip-measurement';
  if (category.startsWith('B.')) return 'chip chip-skill';
  if (category.startsWith('C.')) return 'chip chip-behavior';
  if (category.startsWith('D.')) return 'chip chip-documentation';
  return 'chip chip-professional';
}

export default function FlashCard({
  flashcardStatuses,
  onSetStatus,
}: FlashCardProps) {
  const [selectedCategory, setSelectedCategory] = useState<Category | 'all'>(
    'all'
  );
  const [isFlipped, setIsFlipped] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [filterMode, setFilterMode] = useState<'all' | 'learning' | 'unseen'>(
    'all'
  );

  const filtered = useMemo(() => {
    let cards = flashcards;
    if (selectedCategory !== 'all') {
      cards = cards.filter((c) => c.category === selectedCategory);
    }
    if (filterMode === 'learning') {
      cards = cards.filter((c) => flashcardStatuses[c.id] === 'learning');
    } else if (filterMode === 'unseen') {
      cards = cards.filter((c) => !flashcardStatuses[c.id]);
    }
    return cards;
  }, [selectedCategory, filterMode, flashcardStatuses]);

  const card = filtered[currentIndex];
  const knownCount = flashcards.filter(
    (c) => flashcardStatuses[c.id] === 'know'
  ).length;

  function next() {
    setIsFlipped(false);
    setCurrentIndex((i) => (i + 1 < filtered.length ? i + 1 : 0));
  }

  function prev() {
    setIsFlipped(false);
    setCurrentIndex((i) => (i - 1 >= 0 ? i - 1 : filtered.length - 1));
  }

  function markStatus(status: FlashcardStatus) {
    if (card) onSetStatus(card.id, status);
    next();
  }

  if (filtered.length === 0) {
    return (
      <div className="text-center py-16 animate-fade-up">
        <p className="text-slate-400 text-lg mb-4">
          No flashcards match your filters.
        </p>
        <button
          onClick={() => {
            setFilterMode('all');
            setSelectedCategory('all');
          }}
          className="text-blue-400 hover:text-blue-300 font-medium transition-colors"
        >
          Reset filters
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="animate-fade-up">
        <ProgressBar
          value={knownCount}
          max={flashcards.length}
          label="Mastered"
          color="success"
        />
      </div>

      <div className="flex flex-wrap gap-2 mt-4 mb-2 animate-fade-up delay-1">
        <select
          value={selectedCategory}
          onChange={(e) => {
            setSelectedCategory(e.target.value as Category | 'all');
            setCurrentIndex(0);
            setIsFlipped(false);
          }}
          className="dark-select flex-1 min-w-0"
        >
          <option value="all">All Categories</option>
          {CATEGORIES.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>

        <select
          value={filterMode}
          onChange={(e) => {
            setFilterMode(e.target.value as 'all' | 'learning' | 'unseen');
            setCurrentIndex(0);
            setIsFlipped(false);
          }}
          className="dark-select"
        >
          <option value="all">All Cards</option>
          <option value="unseen">Unseen Only</option>
          <option value="learning">Still Learning</option>
        </select>
      </div>

      <p className="text-sm text-slate-500 mb-4 animate-fade-up delay-1">
        Card {currentIndex + 1} of {filtered.length}
      </p>

      {card && (
        <div className="flashcard-container animate-scale-in delay-2">
          <div
            onClick={() => setIsFlipped(!isFlipped)}
            className={`flashcard-inner ${isFlipped ? 'flipped' : ''}`}
          >
            {/* Front */}
            <div className="flashcard-front">
              <div className="mb-3">
                <span className={getCategoryChipClass(card.category)}>
                  {card.taskCode} &middot; {card.category}
                </span>
              </div>
              <h2 className="text-xl font-bold text-white mb-4 text-shadow-sm">
                {card.term}
              </h2>
              <p className="text-slate-500 text-sm italic">
                Tap to reveal definition
              </p>
            </div>

            {/* Back */}
            <div className="flashcard-back">
              <div className="mb-3">
                <span className={getCategoryChipClass(card.category)}>
                  {card.taskCode} &middot; {card.category}
                </span>
              </div>
              <h2 className="text-lg font-bold text-white mb-3 text-shadow-sm">
                {card.term}
              </h2>
              <p className="text-slate-300 leading-relaxed text-sm">
                {card.definition}
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="flex gap-3 mt-6 justify-center animate-fade-up delay-3">
        <button onClick={prev} className="btn-secondary px-4">
          &larr;
        </button>
        <button
          onClick={() => markStatus('learning')}
          className="btn-danger flex-1 max-w-[160px]"
        >
          <span>Still Learning</span>
        </button>
        <button
          onClick={() => markStatus('know')}
          className="btn-success flex-1 max-w-[160px]"
        >
          <span>Know It</span>
        </button>
        <button onClick={next} className="btn-secondary px-4">
          &rarr;
        </button>
      </div>
    </div>
  );
}
