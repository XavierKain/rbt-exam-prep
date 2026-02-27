import React from "react";
import {
  AbsoluteFill,
  Sequence,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
  Easing,
} from "remotion";

// ── Color Palette ──
const COLORS = {
  bg: "#0a0a0f",
  bgCard: "#12121a",
  text: "#f0f0f5",
  muted: "#8888a0",
  accent: "#6c5ce7",
  accentLight: "#a29bfe",
  green: "#00b894",
  pink: "#fd79a8",
  orange: "#fdcb6e",
};

// ── Fade In + Scale animation ──
const FadeIn: React.FC<{
  children: React.ReactNode;
  delay?: number;
  style?: React.CSSProperties;
}> = ({ children, delay = 0, style }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const s = spring({ frame: frame - delay, fps, config: { damping: 15, mass: 0.5 } });
  return (
    <div
      style={{
        opacity: s,
        transform: `scale(${interpolate(s, [0, 1], [0.8, 1])}) translateY(${interpolate(s, [0, 1], [30, 0])}px)`,
        ...style,
      }}
    >
      {children}
    </div>
  );
};

// ── Slide 1: Hook ──
const SlideHook: React.FC = () => {
  const frame = useCurrentFrame();
  const pulse = Math.sin(frame * 0.08) * 5;
  return (
    <AbsoluteFill
      style={{
        background: `radial-gradient(ellipse at 50% 30%, rgba(108,92,231,0.25) 0%, ${COLORS.bg} 70%)`,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "60px",
      }}
    >
      <FadeIn>
        <div style={{ fontSize: 100, marginBottom: 20 }}>😰</div>
      </FadeIn>
      <FadeIn delay={8}>
        <h1
          style={{
            fontSize: 72,
            fontWeight: 900,
            color: COLORS.text,
            textAlign: "center",
            lineHeight: 1.1,
            fontFamily: "Inter, -apple-system, sans-serif",
          }}
        >
          Taking the{" "}
          <span style={{ color: COLORS.accentLight }}>RBT Exam</span>?
        </h1>
      </FadeIn>
      <FadeIn delay={18}>
        <p
          style={{
            fontSize: 38,
            color: COLORS.muted,
            textAlign: "center",
            marginTop: 30,
            fontFamily: "Inter, sans-serif",
          }}
        >
          Study smarter, not harder.
        </p>
      </FadeIn>
      <FadeIn delay={28}>
        <div
          style={{
            marginTop: 50,
            fontSize: 28,
            color: COLORS.muted,
            fontFamily: "Inter, sans-serif",
            transform: `translateY(${pulse}px)`,
          }}
        >
          ↓ swipe to see ↓
        </div>
      </FadeIn>
    </AbsoluteFill>
  );
};

// ── Slide 2: Stats ──
const StatBadge: React.FC<{
  icon: string;
  number: string;
  label: string;
  delay: number;
  color: string;
}> = ({ icon, number, label, delay, color }) => (
  <FadeIn delay={delay}>
    <div
      style={{
        background: COLORS.bgCard,
        border: `1px solid rgba(255,255,255,0.05)`,
        borderRadius: 24,
        padding: "40px 50px",
        display: "flex",
        alignItems: "center",
        gap: 25,
        width: "100%",
      }}
    >
      <span style={{ fontSize: 60 }}>{icon}</span>
      <div>
        <div
          style={{
            fontSize: 52,
            fontWeight: 900,
            color,
            fontFamily: "Inter, sans-serif",
          }}
        >
          {number}
        </div>
        <div
          style={{
            fontSize: 28,
            color: COLORS.muted,
            fontFamily: "Inter, sans-serif",
          }}
        >
          {label}
        </div>
      </div>
    </div>
  </FadeIn>
);

const SlideStats: React.FC = () => (
  <AbsoluteFill
    style={{
      background: COLORS.bg,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "60px",
      gap: 25,
    }}
  >
    <FadeIn>
      <h2
        style={{
          fontSize: 52,
          fontWeight: 800,
          color: COLORS.text,
          textAlign: "center",
          marginBottom: 30,
          fontFamily: "Inter, sans-serif",
        }}
      >
        Everything you need
      </h2>
    </FadeIn>
    <StatBadge icon="📚" number="154" label="Flashcards" delay={8} color={COLORS.accentLight} />
    <StatBadge icon="❓" number="300+" label="Practice Questions" delay={16} color={COLORS.green} />
    <StatBadge icon="📝" number="85-Q" label="Exam Simulator" delay={24} color={COLORS.orange} />
    <StatBadge icon="📊" number="Live" label="Progress Tracking" delay={32} color={COLORS.pink} />
  </AbsoluteFill>
);

// ── Slide 3: Features ──
const SlideFeatures: React.FC = () => (
  <AbsoluteFill
    style={{
      background: COLORS.bg,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "60px",
      gap: 35,
    }}
  >
    <FadeIn>
      <h2
        style={{
          fontSize: 50,
          fontWeight: 800,
          color: COLORS.text,
          textAlign: "center",
          fontFamily: "Inter, sans-serif",
        }}
      >
        Why students love it
      </h2>
    </FadeIn>
    {[
      { icon: "✅", text: "5th Edition Task List", delay: 8 },
      { icon: "📱", text: "Works offline on your phone", delay: 16 },
      { icon: "🔒", text: "No account needed", delay: 24 },
      { icon: "🚫", text: "No ads, no tracking", delay: 32 },
      { icon: "💸", text: "No subscription", delay: 40 },
    ].map((item) => (
      <FadeIn key={item.text} delay={item.delay}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 25,
            fontSize: 38,
            color: COLORS.text,
            fontFamily: "Inter, sans-serif",
            fontWeight: 600,
          }}
        >
          <span style={{ fontSize: 45 }}>{item.icon}</span>
          {item.text}
        </div>
      </FadeIn>
    ))}
  </AbsoluteFill>
);

// ── Slide 4: Price + CTA ──
const SlideCTA: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const glow = interpolate(Math.sin(frame * 0.1), [-1, 1], [0.3, 0.8]);
  const s = spring({ frame: frame - 20, fps, config: { damping: 8, mass: 0.8 } });

  return (
    <AbsoluteFill
      style={{
        background: `radial-gradient(ellipse at 50% 70%, rgba(108,92,231,0.2) 0%, ${COLORS.bg} 70%)`,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "60px",
      }}
    >
      <FadeIn>
        <div style={{ fontSize: 80, marginBottom: 20 }}>🧠</div>
      </FadeIn>
      <FadeIn delay={8}>
        <h2
          style={{
            fontSize: 56,
            fontWeight: 900,
            color: COLORS.text,
            textAlign: "center",
            fontFamily: "Inter, sans-serif",
          }}
        >
          RBT Exam Prep
        </h2>
      </FadeIn>
      <FadeIn delay={16}>
        <div
          style={{
            fontSize: 80,
            fontWeight: 900,
            color: COLORS.green,
            marginTop: 20,
            fontFamily: "Inter, sans-serif",
          }}
        >
          $4.99
        </div>
        <div
          style={{
            fontSize: 32,
            color: COLORS.muted,
            textAlign: "center",
            fontFamily: "Inter, sans-serif",
          }}
        >
          one time — lifetime access
        </div>
      </FadeIn>
      <FadeIn delay={24}>
        <div
          style={{
            marginTop: 50,
            background: COLORS.accent,
            padding: "25px 60px",
            borderRadius: 50,
            fontSize: 38,
            fontWeight: 700,
            color: "white",
            fontFamily: "Inter, sans-serif",
            boxShadow: `0 0 ${40 * glow}px rgba(108,92,231,${glow})`,
            transform: `scale(${interpolate(s, [0, 1], [0.5, 1])})`,
          }}
        >
          🚀 Try Free for 24h
        </div>
      </FadeIn>
      <FadeIn delay={35}>
        <p
          style={{
            marginTop: 40,
            fontSize: 28,
            color: COLORS.muted,
            textAlign: "center",
            fontFamily: "Inter, sans-serif",
          }}
        >
          No credit card · No account · Works offline
        </p>
      </FadeIn>
    </AbsoluteFill>
  );
};

// ── Main Composition ──
export const PromoVideo: React.FC = () => {
  return (
    <AbsoluteFill style={{ background: COLORS.bg }}>
      {/* Slide 1: Hook (0s - 4s) */}
      <Sequence from={0} durationInFrames={120}>
        <SlideHook />
      </Sequence>

      {/* Slide 2: Stats (4s - 8s) */}
      <Sequence from={120} durationInFrames={120}>
        <SlideStats />
      </Sequence>

      {/* Slide 3: Features (8s - 12s) */}
      <Sequence from={240} durationInFrames={105}>
        <SlideFeatures />
      </Sequence>

      {/* Slide 4: CTA (12s - 15s) */}
      <Sequence from={345} durationInFrames={105}>
        <SlideCTA />
      </Sequence>
    </AbsoluteFill>
  );
};
