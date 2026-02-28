import { useState, useMemo } from 'react';
import { flashcards } from '../data/flashcards';
import type { Category, FlashcardStatus } from '../types';
import ProgressBar from './ProgressBar';
import { useSR } from '../engine/spacedRepetition';

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

const BOX_LABELS = ['New', 'Box 1', 'Box 2', 'Box 3', 'Box 4', 'Box 5'];
const BOX_COLORS = ['#7A7A8A', '#E84B3B', '#E8743B', '#C4A72C', '#2D8F6F', '#2D5F8A'];

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
  const [selectedCategory, setSelectedCategory] = useState<Category | 'all'>('all');
  const [isFlipped, setIsFlipped] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [filterMode, setFilterMode] = useState<'all' | 'learning' | 'unseen' | 'due'>('all');
  const { dueCards, record, stats, getCardBox } = useSR();

  const filtered = useMemo(() => {
    let cards = flashcards;
    if (selectedCategory !== 'all') {
      cards = cards.filter((c) => c.category === selectedCategory);
    }
    if (filterMode === 'learning') {
      cards = cards.filter((c) => flashcardStatuses[c.id] === 'learning');
    } else if (filterMode === 'unseen') {
      cards = cards.filter((c) => !flashcardStatuses[c.id]);
    } else if (filterMode === 'due') {
      const dueSet = new Set(dueCards);
      cards = cards.filter((c) => dueSet.has(c.id));
    }
    return cards;
  }, [selectedCategory, filterMode, flashcardStatuses, dueCards]);

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

  function handleGotIt() {
    if (card) {
      record(card.id, true);
      onSetStatus(card.id, 'know');
    }
    next();
  }

  function handleReviewAgain() {
    if (card) {
      record(card.id, false);
      onSetStatus(card.id, 'learning');
    }
    next();
  }

  if (filtered.length === 0) {
    return (
      <div className="text-center py-16 animate-fade-up">
        <p className="text-[#7A7A8A] text-lg mb-4">
          {filterMode === 'due' ? `No cards due for review! 🎉` : 'No flashcards match your filters.'}
        </p>
        <button
          onClick={() => { setFilterMode('all'); setSelectedCategory('all'); }}
          className="text-blue-400 hover:text-blue-300 font-medium transition-colors"
        >
          Reset filters
        </button>
      </div>
    );
  }

  const currentBox = card ? getCardBox(card.id) : 0;

  return (
    <div className="max-w-2xl mx-auto">
      <div className="animate-fade-up">
        <ProgressBar value={knownCount} max={flashcards.length} label="Mastered" color="success" />
      </div>

      {/* SR Stats bar */}
      <div className="flex gap-1 mt-2 mb-1 animate-fade-up">
        {[stats.unseen, stats.box1, stats.box2, stats.box3, stats.box4, stats.box5].map((count, i) => (
          <div key={i} className="flex-1 text-center">
            <div className="text-[0.6rem] font-bold" style={{ color: BOX_COLORS[i] }}>
              {BOX_LABELS[i]}
            </div>
            <div className="text-xs font-medium" style={{ color: '#1A1A2E' }}>{count}</div>
          </div>
        ))}
      </div>
      {stats.dueNow > 0 && (
        <p className="text-xs text-center mb-2" style={{ color: '#E8743B' }}>
          📋 {stats.dueNow} cards due for review
        </p>
      )}

      <div className="flex flex-wrap gap-2 mt-2 mb-2 animate-fade-up delay-1">
        <select
          value={selectedCategory}
          onChange={(e) => { setSelectedCategory(e.target.value as Category | 'all'); setCurrentIndex(0); setIsFlipped(false); }}
          className="dark-select flex-1 min-w-0"
        >
          <option value="all">All Categories</option>
          {CATEGORIES.map((c) => (<option key={c} value={c}>{c}</option>))}
        </select>
        <select
          value={filterMode}
          onChange={(e) => { setFilterMode(e.target.value as typeof filterMode); setCurrentIndex(0); setIsFlipped(false); }}
          className="dark-select"
        >
          <option value="all">All Cards</option>
          <option value="due">Due for Review ⏰</option>
          <option value="unseen">Unseen Only</option>
          <option value="learning">Still Learning</option>
        </select>
      </div>

      <p className="text-sm text-[#7A7A8A] mb-4 animate-fade-up delay-1">
        Card {currentIndex + 1} of {filtered.length}
      </p>

      {card && (
        <div className="flashcard-container animate-scale-in delay-2">
          <div onClick={() => setIsFlipped(!isFlipped)} className={`flashcard-inner ${isFlipped ? 'flipped' : ''}`}>
            {/* Front */}
            <div className="flashcard-front">
              <div className="mb-3 flex items-center justify-between">
                <span className={getCategoryChipClass(card.category)}>
                  {card.taskCode} &middot; {card.category}
                </span>
                <span className="text-xs font-bold px-2 py-0.5 rounded-full"
                  style={{ background: BOX_COLORS[currentBox] + '22', color: BOX_COLORS[currentBox] }}>
                  {BOX_LABELS[currentBox]}
                </span>
              </div>
              <h2 className="text-xl font-bold text-[#1A1A2E] mb-4 text-shadow-sm">{card.term}</h2>
              <p className="text-[#7A7A8A] text-sm italic">Tap to reveal definition</p>
            </div>
            {/* Back */}
            <div className="flashcard-back">
              <div className="mb-3 flex items-center justify-between">
                <span className={getCategoryChipClass(card.category)}>
                  {card.taskCode} &middot; {card.category}
                </span>
                <span className="text-xs font-bold px-2 py-0.5 rounded-full"
                  style={{ background: BOX_COLORS[currentBox] + '22', color: BOX_COLORS[currentBox] }}>
                  {BOX_LABELS[currentBox]}
                </span>
              </div>
              <h2 className="text-lg font-bold text-[#1A1A2E] mb-3 text-shadow-sm">{card.term}</h2>
              <p className="text-[#4A4A5A] leading-relaxed text-sm">{card.definition}</p>
            </div>
          </div>
        </div>
      )}

      <div className="flex gap-3 mt-6 justify-center animate-fade-up delay-3">
        <button onClick={prev} className="btn-secondary px-4">&larr;</button>
        <button onClick={handleReviewAgain} className="btn-danger flex-1 max-w-[160px]">
          <span>Review Again</span>
        </button>
        <button onClick={handleGotIt} className="btn-success flex-1 max-w-[160px]">
          <span>Got It ✓</span>
        </button>
        <button onClick={next} className="btn-secondary px-4">&rarr;</button>
      </div>
    </div>
  );
}
