import { useState } from 'react';
import FlashCard from './components/FlashCard';
import QuizMode from './components/QuizMode';
import ExamSimulator from './components/ExamSimulator';
import Dashboard from './components/Dashboard';
import SpeedRound from './components/SpeedRound';
import MatchGame from './components/MatchGame';
import MistakeReview from './components/MistakeReview';
import Paywall from './components/Paywall';
import InstallPrompt from './components/InstallPrompt';
import { useProgress } from './hooks/useProgress';
import { usePaywall } from './hooks/usePaywall';

type Tab = 'flashcards' | 'quiz' | 'speed' | 'match' | 'exam' | 'mistakes' | 'dashboard';

const MAIN_TABS: { id: Tab; label: string; icon: string }[] = [
  { id: 'flashcards', label: 'Cards', icon: '📚' },
  { id: 'quiz', label: 'Quiz', icon: '❓' },
  { id: 'speed', label: 'Speed', icon: '⚡' },
  { id: 'match', label: 'Match', icon: '🧩' },
  { id: 'exam', label: 'Exam', icon: '📝' },
];

const MORE_TABS: { id: Tab; label: string; icon: string }[] = [
  { id: 'mistakes', label: 'Mistakes', icon: '🔄' },
  { id: 'dashboard', label: 'Progress', icon: '📊' },
];

const GATED_TABS: Tab[] = ['flashcards', 'quiz', 'exam', 'speed', 'match', 'mistakes'];

function formatTrialTime(ms: number): string {
  const hours = Math.floor(ms / (1000 * 60 * 60));
  const minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
  if (hours > 0) return `${hours}h ${minutes}m`;
  return `${minutes}m`;
}

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>('flashcards');
  const [showMore, setShowMore] = useState(false);
  useState(() => {
    if (localStorage.getItem('rbt_trial_start') === null) {
      localStorage.setItem('rbt_trial_start', String(Date.now()));
    }
    return true;
  });
  const {
    progress,
    setFlashcardStatus,
    addQuizResult,
    addExamResult,
    resetProgress,
  } = useProgress();
  const {
    isPaid,
    isTrialActive,
    isExpired,
    trialRemainingMs,
    trialStarted,
    startTrial: _startTrial,
    unlock,
    restorePurchase,
  } = usePaywall();

  const isGated = GATED_TABS.includes(activeTab) && isExpired;

  const handleTabChange = (tab: Tab) => {
    setActiveTab(tab);
    setShowMore(false);
  };

  return (
    <div className="min-h-[100dvh] flex flex-col">
      {trialStarted && isTrialActive && !isPaid && (
        <div className="trial-banner">
          <span>⏱ Free trial: {formatTrialTime(trialRemainingMs)} remaining</span>
        </div>
      )}

      <header className="pt-10 pb-6 px-4 text-center animate-fade-up" style={{ background: 'linear-gradient(180deg, #E8F0F7 0%, #FAFAF8 100%)' }}>
        <div className="flex items-center justify-center gap-2 mb-2">
          <span className="text-3xl" role="img" aria-label="brain">🧠</span>
          <h1 className="text-3xl font-black tracking-tight gradient-text">RBT Exam Prep</h1>
          <span className="text-3xl" role="img" aria-label="graduation">🎓</span>
        </div>
        <p className="text-sm font-medium tracking-wide" style={{ color: '#7A7A8A' }}>Master your certification</p>
        <p className="text-[0.65rem] mt-1 tracking-wider uppercase" style={{ color: '#7A7A8A' }}>2nd Edition Task List</p>
      </header>

      <main className="flex-1 max-w-4xl w-full mx-auto px-4 pb-24">
        {isGated ? (
          <div className="text-center py-20 animate-fade-up">
            <div className="text-5xl mb-4">🔒</div>
            <h2 className="text-xl font-bold mb-2">Trial Expired</h2>
            <p className="text-sm mb-6" style={{ color: '#7A7A8A' }}>Unlock full access to continue studying.</p>
            <button onClick={unlock} className="btn-primary">Unlock Full Access — $4.99</button>
          </div>
        ) : (
          <div key={activeTab} className="tab-content">
            {activeTab === 'flashcards' && (
              <FlashCard flashcardStatuses={progress.flashcards} onSetStatus={setFlashcardStatus} />
            )}
            {activeTab === 'quiz' && <QuizMode onComplete={addQuizResult} />}
            {activeTab === 'speed' && <SpeedRound />}
            {activeTab === 'match' && <MatchGame />}
            {activeTab === 'exam' && <ExamSimulator onComplete={addExamResult} />}
            {activeTab === 'mistakes' && <MistakeReview />}
            {activeTab === 'dashboard' && <Dashboard progress={progress} onReset={resetProgress} />}
          </div>
        )}
      </main>

      <div className="pb-20 text-center px-4">
        <p className="text-[0.65rem]" style={{ color: '#7A7A8A' }}>
          Based on the BACB RBT Task List (2nd ed.) &middot; Not affiliated with BACB
        </p>
      </div>

      {/* More menu popup */}
      {showMore && (
        <div className="fixed bottom-16 left-0 right-0 z-50 flex justify-center">
          <div className="rounded-xl shadow-lg p-2 mx-4" style={{ background: '#fff', border: '1px solid #E8E8E8' }}>
            {MORE_TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className="flex items-center gap-2 w-full px-4 py-3 rounded-lg text-sm font-medium hover:bg-gray-50"
                style={{ color: activeTab === tab.id ? '#2D5F8A' : '#1A1A2E' }}
              >
                <span>{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      <nav className="bottom-nav fixed bottom-0 left-0 right-0 z-50">
        <div className="max-w-lg mx-auto flex justify-around items-center py-2">
          {MAIN_TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabChange(tab.id)}
              className={`nav-tab ${activeTab === tab.id ? 'active' : ''}`}
            >
              <span className="nav-indicator" />
              <span className="nav-icon">{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          ))}
          <button
            onClick={() => setShowMore(!showMore)}
            className={`nav-tab ${MORE_TABS.some((t) => t.id === activeTab) ? 'active' : ''}`}
          >
            <span className="nav-indicator" />
            <span className="nav-icon">•••</span>
            <span>More</span>
          </button>
        </div>
      </nav>

      {isExpired && <Paywall onUnlock={unlock} onRestore={restorePurchase} />}
      <InstallPrompt />
    </div>
  );
}
