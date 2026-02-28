import { useState, useEffect, useRef, useCallback } from 'react';
import { flashcards } from '../data/flashcards';

const BEST_TIME_KEY = 'rbt_match_best';

interface Tile {
  id: string;
  pairId: string;
  text: string;
  type: 'term' | 'definition';
  matched: boolean;
}

function pickPairs(count = 6): Tile[] {
  const shuffled = [...flashcards].sort(() => Math.random() - 0.5).slice(0, count);
  const tiles: Tile[] = [];
  for (const fc of shuffled) {
    tiles.push({ id: `t-${fc.id}`, pairId: fc.id, text: fc.term, type: 'term', matched: false });
    tiles.push({
      id: `d-${fc.id}`,
      pairId: fc.id,
      text: fc.definition.length > 80 ? fc.definition.slice(0, 77) + '...' : fc.definition,
      type: 'definition',
      matched: false,
    });
  }
  return tiles.sort(() => Math.random() - 0.5);
}

export default function MatchGame() {
  const [phase, setPhase] = useState<'intro' | 'playing' | 'done'>('intro');
  const [tiles, setTiles] = useState<Tile[]>([]);
  const [selected, setSelected] = useState<string | null>(null);
  const [errors, setErrors] = useState(0);
  const [elapsed, setElapsed] = useState(0);
  const [shaking, setShaking] = useState<Set<string>>(new Set());
  const [bestTime, setBestTime] = useState<number | null>(() => {
    const v = localStorage.getItem(BEST_TIME_KEY);
    return v ? Number(v) : null;
  });
  const timerRef = useRef<number>(0);

  const startGame = () => {
    setTiles(pickPairs(6));
    setSelected(null);
    setErrors(0);
    setElapsed(0);
    setShaking(new Set());
    setPhase('playing');
    timerRef.current = window.setInterval(() => setElapsed((t) => t + 100), 100);
  };

  useEffect(() => () => clearInterval(timerRef.current), []);

  const checkDone = useCallback((newTiles: Tile[]) => {
    if (newTiles.every((t) => t.matched)) {
      clearInterval(timerRef.current);
      setPhase('done');
      const timeS = elapsed / 1000;
      if (!bestTime || timeS < bestTime) {
        setBestTime(timeS);
        localStorage.setItem(BEST_TIME_KEY, String(timeS));
      }
    }
  }, [elapsed, bestTime]);

  const handleTap = (tile: Tile) => {
    if (tile.matched || shaking.has(tile.id)) return;

    if (!selected) {
      setSelected(tile.id);
      return;
    }

    if (selected === tile.id) {
      setSelected(null);
      return;
    }

    const first = tiles.find((t) => t.id === selected)!;
    // Must be different types to match
    if (first.type === tile.type) {
      setSelected(tile.id);
      return;
    }

    if (first.pairId === tile.pairId) {
      // Match!
      const newTiles = tiles.map((t) =>
        t.pairId === tile.pairId ? { ...t, matched: true } : t
      );
      setTiles(newTiles);
      setSelected(null);
      checkDone(newTiles);
    } else {
      // No match — shake
      setErrors((e) => e + 1);
      setShaking(new Set([selected, tile.id]));
      setTimeout(() => {
        setShaking(new Set());
        setSelected(null);
      }, 500);
    }
  };

  const formatTime = (ms: number) => {
    const s = Math.floor(ms / 1000);
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${m}:${sec.toString().padStart(2, '0')}`;
  };

  if (phase === 'intro') {
    return (
      <div className="text-center py-16 animate-fade-up">
        <div className="text-5xl mb-4">🧩</div>
        <h2 className="text-2xl font-bold mb-2" style={{ color: '#1A1A2E' }}>Match Game</h2>
        <p className="text-sm mb-2" style={{ color: '#7A7A8A' }}>
          Match terms with their definitions as fast as you can!
        </p>
        {bestTime && (
          <p className="text-sm mb-4" style={{ color: '#2D8F6F' }}>
            🏆 Best time: {bestTime.toFixed(1)}s
          </p>
        )}
        <button onClick={startGame} className="btn-primary text-lg px-8 py-3">
          Start!
        </button>
      </div>
    );
  }

  if (phase === 'done') {
    const timeS = elapsed / 1000;
    return (
      <div className="text-center py-16 animate-fade-up">
        <div className="text-5xl mb-4">🎉</div>
        <h2 className="text-2xl font-bold mb-2" style={{ color: '#1A1A2E' }}>Complete!</h2>
        <div className="text-3xl font-black mb-1" style={{ color: '#2D5F8A' }}>
          {timeS.toFixed(1)}s
        </div>
        <p className="text-sm mb-1" style={{ color: '#7A7A8A' }}>{errors} error{errors !== 1 ? 's' : ''}</p>
        {bestTime !== null && (
          <p className="text-sm mb-4" style={{ color: '#2D8F6F' }}>
            🏆 Best: {bestTime.toFixed(1)}s
          </p>
        )}
        <button onClick={startGame} className="btn-primary">Play Again</button>
      </div>
    );
  }

  const matched = tiles.filter((t) => t.matched).length / 2;

  return (
    <div className="max-w-2xl mx-auto py-4">
      <div className="flex justify-between items-center mb-4">
        <span className="text-sm font-medium" style={{ color: '#7A7A8A' }}>
          ⏱ {formatTime(elapsed)}
        </span>
        <span className="text-sm font-medium" style={{ color: '#7A7A8A' }}>
          {matched}/6 matched · {errors} errors
        </span>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
        {tiles.map((tile) => (
          <button
            key={tile.id}
            onClick={() => handleTap(tile)}
            disabled={tile.matched}
            className={`p-3 rounded-xl text-left text-xs sm:text-sm leading-snug min-h-[80px] transition-all duration-200
              ${tile.matched ? 'opacity-20 scale-95' : 'active:scale-95'}
              ${shaking.has(tile.id) ? 'animate-shake' : ''}
              ${selected === tile.id ? 'ring-2 ring-offset-1' : ''}
            `}
            style={{
              background: tile.matched ? '#E8E8E8' : tile.type === 'term' ? '#E8F0F7' : '#FFF5EE',
              border: `1px solid ${selected === tile.id ? '#2D5F8A' : '#E8E8E8'}`,
              color: '#1A1A2E',
              
            }}
          >
            <span className="text-[0.6rem] uppercase tracking-wider font-bold block mb-1"
              style={{ color: tile.type === 'term' ? '#2D5F8A' : '#E8743B' }}>
              {tile.type === 'term' ? 'Term' : 'Def'}
            </span>
            {tile.text}
          </button>
        ))}
      </div>
    </div>
  );
}
