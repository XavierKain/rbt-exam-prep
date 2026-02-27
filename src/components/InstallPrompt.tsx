import { useState, useEffect } from 'react';

interface BeforeInstallPromptEvent extends Event {
  prompt(): Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

export default function InstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
    };
    window.addEventListener('beforeinstallprompt', handler);
    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  if (!deferredPrompt || dismissed) return null;

  const handleInstall = async () => {
    await deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === 'accepted') {
      setDeferredPrompt(null);
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-[90] p-3 animate-slide-down">
      <div className="max-w-lg mx-auto glass-card-strong flex items-center gap-3 p-3 pr-4">
        <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0">
          <span className="text-lg font-bold text-white">R</span>
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold truncate">Install RBT Exam Prep</p>
          <p className="text-xs text-slate-400">Study offline anytime</p>
        </div>
        <button
          onClick={handleInstall}
          className="btn-primary !py-2 !px-4 text-sm flex-shrink-0"
        >
          Install
        </button>
        <button
          onClick={() => setDismissed(true)}
          className="text-slate-500 hover:text-slate-300 text-lg flex-shrink-0"
          aria-label="Dismiss"
        >
          &times;
        </button>
      </div>
    </div>
  );
}
