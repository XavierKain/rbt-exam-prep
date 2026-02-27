interface PaywallProps {
  onUnlock: () => void;
  onRestore: () => void;
}

export default function Paywall({ onUnlock, onRestore }: PaywallProps) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-fade-in">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      {/* Modal */}
      <div className="relative glass-card-strong p-8 max-w-sm w-full text-center animate-scale-in">
        {/* Lock icon */}
        <div className="w-20 h-20 mx-auto mb-6 rounded-full gradient-primary flex items-center justify-center">
          <span className="text-4xl">🔒</span>
        </div>

        <h2 className="text-2xl font-bold mb-2">Free Trial Ended</h2>
        <p className="text-slate-400 mb-6 text-sm leading-relaxed">
          Your 24-hour free trial has ended. Unlock full access to all flashcards,
          practice quizzes, and exam simulations.
        </p>

        {/* Price */}
        <div className="mb-6">
          <div className="text-4xl font-black gradient-text mb-1">$4.99</div>
          <p className="text-slate-500 text-xs">One-time payment &middot; Lifetime access</p>
        </div>

        {/* Features included */}
        <div className="text-left mb-6 space-y-2">
          {[
            '154 Flashcards with spaced repetition',
            '300+ Practice Questions',
            'Realistic 85-Question Exam Simulator',
            'Progress tracking & streaks',
          ].map((feature) => (
            <div key={feature} className="flex items-center gap-2 text-sm text-slate-300">
              <span className="text-success flex-shrink-0">&#10003;</span>
              <span>{feature}</span>
            </div>
          ))}
        </div>

        {/* Unlock button */}
        <button
          onClick={onUnlock}
          className="btn-primary w-full text-lg mb-3"
        >
          Unlock Full Access — $4.99
        </button>

        {/* Restore */}
        <button
          onClick={onRestore}
          className="text-sm text-slate-500 hover:text-slate-300 transition-colors"
        >
          Restore Purchase
        </button>
      </div>
    </div>
  );
}
