import { useState, useCallback, useEffect } from 'react';

const MUTE_KEY = 'rbt_sound_mute';

let audioCtx: AudioContext | null = null;

function getCtx(): AudioContext {
  if (!audioCtx) audioCtx = new AudioContext();
  return audioCtx;
}

function playTone(frequency: number, duration: number, type: OscillatorType = 'sine', volume = 0.3) {
  const ctx = getCtx();
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = type;
  osc.frequency.value = frequency;
  gain.gain.value = volume;
  gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + duration);
  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.start(ctx.currentTime);
  osc.stop(ctx.currentTime + duration);
}

function playCorrect(volume: number) {
  const ctx = getCtx();
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = 'sine';
  osc.frequency.setValueAtTime(523, ctx.currentTime);
  osc.frequency.linearRampToValueAtTime(784, ctx.currentTime + 0.15);
  gain.gain.value = volume;
  gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.3);
  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.start(ctx.currentTime);
  osc.stop(ctx.currentTime + 0.3);
}

function playWrong(volume: number) {
  const ctx = getCtx();
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = 'square';
  osc.frequency.setValueAtTime(350, ctx.currentTime);
  osc.frequency.linearRampToValueAtTime(200, ctx.currentTime + 0.2);
  gain.gain.value = volume * 0.3;
  gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.3);
  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.start(ctx.currentTime);
  osc.stop(ctx.currentTime + 0.3);
}

function playLevelUp(volume: number) {
  [523, 659, 784].forEach((freq, i) => {
    setTimeout(() => playTone(freq, 0.3, 'sine', volume), i * 150);
  });
}

function playAchievement(volume: number) {
  [523, 659, 784, 1047].forEach((freq, i) => {
    setTimeout(() => playTone(freq, 0.4, 'sine', volume * 0.8), i * 120);
  });
}

function playStreakMilestone(volume: number) {
  [392, 523, 659, 784, 1047].forEach((freq, i) => {
    setTimeout(() => playTone(freq, 0.25, 'triangle', volume * 0.6), i * 100);
  });
}

export function useSoundEffects() {
  const [muted, setMuted] = useState(() => {
    try { return localStorage.getItem(MUTE_KEY) === 'true'; } catch { return false; }
  });
  const [volume, setVolume] = useState(0.5);

  useEffect(() => {
    localStorage.setItem(MUTE_KEY, String(muted));
  }, [muted]);

  const play = useCallback((sound: 'correct' | 'wrong' | 'levelUp' | 'achievement' | 'streakMilestone') => {
    if (muted) return;
    try {
      const fns = { correct: playCorrect, wrong: playWrong, levelUp: playLevelUp, achievement: playAchievement, streakMilestone: playStreakMilestone };
      fns[sound](volume);
    } catch { /* audio not available */ }
  }, [muted, volume]);

  const toggleMute = useCallback(() => setMuted(m => !m), []);

  return { muted, volume, setVolume, toggleMute, play };
}
