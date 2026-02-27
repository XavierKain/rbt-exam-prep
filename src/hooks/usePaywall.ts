import { useState, useEffect, useCallback } from 'react';

const TRIAL_KEY = 'rbt_trial_start';
const PAID_KEY = 'rbt_paid';
const TRIAL_DURATION_MS = 24 * 60 * 60 * 1000; // 24 hours

interface PaywallState {
  isPaid: boolean;
  isTrialActive: boolean;
  isExpired: boolean;
  trialRemainingMs: number;
  trialStarted: boolean;
  startTrial: () => void;
  unlock: () => void;
  restorePurchase: () => void;
}

export function usePaywall(): PaywallState {
  const [isPaid, setIsPaid] = useState(() => localStorage.getItem(PAID_KEY) === 'true');
  const [trialStart, setTrialStart] = useState<number | null>(() => {
    const stored = localStorage.getItem(TRIAL_KEY);
    return stored ? parseInt(stored, 10) : null;
  });
  const [now, setNow] = useState(Date.now());

  // Tick every minute to update remaining time
  useEffect(() => {
    if (isPaid || !trialStart) return;
    const interval = setInterval(() => setNow(Date.now()), 60_000);
    return () => clearInterval(interval);
  }, [isPaid, trialStart]);

  const trialStarted = trialStart !== null;
  const trialRemainingMs = trialStart ? Math.max(0, TRIAL_DURATION_MS - (now - trialStart)) : TRIAL_DURATION_MS;
  const isTrialActive = trialStarted && trialRemainingMs > 0;
  const isExpired = trialStarted && trialRemainingMs <= 0 && !isPaid;

  const startTrial = useCallback(() => {
    if (trialStart) return;
    const timestamp = Date.now();
    localStorage.setItem(TRIAL_KEY, timestamp.toString());
    setTrialStart(timestamp);
    setNow(timestamp);
  }, [trialStart]);

  const unlock = useCallback(() => {
    localStorage.setItem(PAID_KEY, 'true');
    setIsPaid(true);
  }, []);

  const restorePurchase = useCallback(() => {
    // For now, just check if the flag exists
    if (localStorage.getItem(PAID_KEY) === 'true') {
      setIsPaid(true);
    }
  }, []);

  return {
    isPaid,
    isTrialActive,
    isExpired,
    trialRemainingMs,
    trialStarted,
    startTrial,
    unlock,
    restorePurchase,
  };
}
