import React from "react";
import {
  AbsoluteFill,
  Sequence,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
  Audio,
  staticFile,
} from "remotion";

// ── V2 Color Palette (Educational / Warm) ──
const C = {
  bg: "#FAFAF8",
  bgAlt: "#F3F1EE",
  card: "#FFFFFF",
  text: "#1A1A2E",
  textBody: "#4A4A5A",
  muted: "#7A7A8A",
  primary: "#2D5F8A",
  primaryLight: "#3A7CB8",
  primaryBg: "#E8F0F7",
  accent: "#E8743B",
  accentLight: "#F09060",
  green: "#2D8F6F",
  greenBg: "#E6F5F0",
  border: "#E5E3DE",
};

const FONT_BODY = "'DM Sans', -apple-system, sans-serif";
const FONT_TITLE = "'DM Serif Display', Georgia, serif";

// ── Animations ──
const FadeUp: React.FC<{
  children: React.ReactNode;
  delay?: number;
  y?: number;
  style?: React.CSSProperties;
}> = ({ children, delay = 0, y = 40, style }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const s = spring({ frame: frame - delay, fps, config: { damping: 14, mass: 0.6 } });
  return (
    <div style={{
      opacity: s,
      transform: `translateY(${interpolate(s, [0, 1], [y, 0])}px)`,
      ...style,
    }}>
      {children}
    </div>
  );
};

const ScaleIn: React.FC<{
  children: React.ReactNode;
  delay?: number;
  style?: React.CSSProperties;
}> = ({ children, delay = 0, style }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const s = spring({ frame: frame - delay, fps, config: { damping: 12, mass: 0.5 } });
  return (
    <div style={{
      opacity: s,
      transform: `scale(${interpolate(s, [0, 1], [0.6, 1])})`,
      ...style,
    }}>
      {children}
    </div>
  );
};

const SlideIn: React.FC<{
  children: React.ReactNode;
  delay?: number;
  from?: "left" | "right";
  style?: React.CSSProperties;
}> = ({ children, delay = 0, from = "right", style }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const s = spring({ frame: frame - delay, fps, config: { damping: 15, mass: 0.5 } });
  const dir = from === "left" ? -1 : 1;
  return (
    <div style={{
      opacity: s,
      transform: `translateX(${interpolate(s, [0, 1], [80 * dir, 0])}px)`,
      ...style,
    }}>
      {children}
    </div>
  );
};

// ── Background Pattern ──
const BgPattern: React.FC<{ color?: string }> = ({ color = C.primaryBg }) => (
  <div style={{
    position: "absolute", top: 0, left: 0, right: 0, bottom: 0,
    opacity: 0.4,
    background: `radial-gradient(circle at 20% 20%, ${color} 0%, transparent 50%),
                 radial-gradient(circle at 80% 80%, ${color} 0%, transparent 50%)`,
  }} />
);

// ── Slide 1: Hook with animated text ──
const SlideHook: React.FC = () => {
  const frame = useCurrentFrame();
  return (
    <AbsoluteFill style={{ background: C.bg, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: 60 }}>
      <BgPattern />
      <ScaleIn>
        <div style={{ fontSize: 110, marginBottom: 20 }}>🎓</div>
      </ScaleIn>
      <FadeUp delay={10}>
        <h1 style={{
          fontFamily: FONT_TITLE, fontSize: 68, color: C.text,
          textAlign: "center", lineHeight: 1.15, marginBottom: 10,
        }}>
          Taking the
        </h1>
      </FadeUp>
      <FadeUp delay={18}>
        <h1 style={{
          fontFamily: FONT_TITLE, fontSize: 76, color: C.primary,
          textAlign: "center", lineHeight: 1.1, marginBottom: 30,
        }}>
          RBT Exam?
        </h1>
      </FadeUp>
      <FadeUp delay={28}>
        <p style={{
          fontFamily: FONT_BODY, fontSize: 36, color: C.textBody,
          textAlign: "center", maxWidth: 700,
        }}>
          Study smarter with the app designed for <strong style={{ color: C.text }}>your success</strong>.
        </p>
      </FadeUp>
      <FadeUp delay={40}>
        <div style={{
          marginTop: 40, background: C.greenBg, color: C.green,
          padding: "12px 28px", borderRadius: 50,
          fontFamily: FONT_BODY, fontSize: 24, fontWeight: 600,
        }}>
          ✅ Based on BACB 2nd Edition Task List
        </div>
      </FadeUp>
    </AbsoluteFill>
  );
};

// ── Slide 2: Stats with staggered cards ──
const StatCard: React.FC<{
  icon: string; number: string; label: string;
  delay: number; color: string;
}> = ({ icon, number, label, delay, color }) => (
  <SlideIn delay={delay} from={delay % 2 === 0 ? "left" : "right"}>
    <div style={{
      background: C.card, border: `1px solid ${C.border}`,
      borderRadius: 16, padding: "30px 40px",
      display: "flex", alignItems: "center", gap: 25,
      width: "100%", boxShadow: "0 4px 15px rgba(0,0,0,0.05)",
    }}>
      <div style={{
        width: 65, height: 65, borderRadius: 14,
        background: color === C.primary ? C.primaryBg : color === C.green ? C.greenBg : "#FEF0E6",
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: 32,
      }}>{icon}</div>
      <div>
        <div style={{ fontFamily: FONT_TITLE, fontSize: 44, color }}>{number}</div>
        <div style={{ fontFamily: FONT_BODY, fontSize: 22, color: C.muted }}>{label}</div>
      </div>
    </div>
  </SlideIn>
);

const SlideStats: React.FC = () => (
  <AbsoluteFill style={{
    background: C.bg, display: "flex", flexDirection: "column",
    alignItems: "center", justifyContent: "center", padding: 60,
  }}>
    <BgPattern color={C.greenBg} />
    <FadeUp>
      <h2 style={{
        fontFamily: FONT_TITLE, fontSize: 48, color: C.text,
        textAlign: "center", marginBottom: 30,
      }}>Everything you need</h2>
    </FadeUp>
    <div style={{
      display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18,
      width: "100%", maxWidth: 820, padding: "0 20px",
    }}>
      <ScaleIn delay={8}><div style={{
        background: C.card, border: `1px solid ${C.border}`, borderRadius: 16,
        padding: "28px 20px", textAlign: "center",
        boxShadow: "0 4px 15px rgba(0,0,0,0.05)",
      }}>
        <div style={{ fontSize: 36, marginBottom: 8 }}>📚</div>
        <div style={{ fontFamily: FONT_TITLE, fontSize: 42, color: C.primary }}>159</div>
        <div style={{ fontFamily: FONT_BODY, fontSize: 20, color: C.muted }}>Flashcards</div>
      </div></ScaleIn>
      <ScaleIn delay={14}><div style={{
        background: C.card, border: `1px solid ${C.border}`, borderRadius: 16,
        padding: "28px 20px", textAlign: "center",
        boxShadow: "0 4px 15px rgba(0,0,0,0.05)",
      }}>
        <div style={{ fontSize: 36, marginBottom: 8 }}>❓</div>
        <div style={{ fontFamily: FONT_TITLE, fontSize: 42, color: C.green }}>320+</div>
        <div style={{ fontFamily: FONT_BODY, fontSize: 20, color: C.muted }}>Questions</div>
      </div></ScaleIn>
      <ScaleIn delay={20}><div style={{
        background: C.card, border: `1px solid ${C.border}`, borderRadius: 16,
        padding: "28px 20px", textAlign: "center",
        boxShadow: "0 4px 15px rgba(0,0,0,0.05)",
      }}>
        <div style={{ fontSize: 36, marginBottom: 8 }}>📝</div>
        <div style={{ fontFamily: FONT_TITLE, fontSize: 42, color: C.accent }}>85-Q</div>
        <div style={{ fontFamily: FONT_BODY, fontSize: 20, color: C.muted }}>Exam Sim</div>
      </div></ScaleIn>
      <ScaleIn delay={26}><div style={{
        background: C.card, border: `1px solid ${C.border}`, borderRadius: 16,
        padding: "28px 20px", textAlign: "center",
        boxShadow: "0 4px 15px rgba(0,0,0,0.05)",
      }}>
        <div style={{ fontSize: 36, marginBottom: 8 }}>📊</div>
        <div style={{ fontFamily: FONT_TITLE, fontSize: 42, color: C.primary }}>Live</div>
        <div style={{ fontFamily: FONT_BODY, fontSize: 20, color: C.muted }}>Tracking</div>
      </div></ScaleIn>
    </div>
  </AbsoluteFill>
);

// ── Slide 3: Features with checkmarks ──
const FeatureRow: React.FC<{ text: string; delay: number }> = ({ text, delay }) => (
  <FadeUp delay={delay}>
    <div style={{
      display: "flex", alignItems: "center", gap: 20,
      background: C.card, border: `1px solid ${C.border}`,
      borderRadius: 12, padding: "20px 30px",
      boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
    }}>
      <div style={{
        width: 40, height: 40, borderRadius: 10,
        background: C.greenBg, display: "flex",
        alignItems: "center", justifyContent: "center",
        fontSize: 20, fontWeight: 700, color: C.green,
      }}>✓</div>
      <span style={{
        fontFamily: FONT_BODY, fontSize: 32, fontWeight: 600, color: C.text,
      }}>{text}</span>
    </div>
  </FadeUp>
);

const SlideFeatures: React.FC = () => (
  <AbsoluteFill style={{
    background: C.bgAlt, display: "flex", flexDirection: "column",
    alignItems: "center", justifyContent: "center", padding: 60, gap: 18,
  }}>
    <FadeUp>
      <h2 style={{
        fontFamily: FONT_TITLE, fontSize: 46, color: C.text,
        textAlign: "center", marginBottom: 20,
      }}>Why students love it</h2>
    </FadeUp>
    <FeatureRow text="2nd Edition Task List" delay={8} />
    <FeatureRow text="Works offline on your phone" delay={14} />
    <FeatureRow text="No account needed" delay={20} />
    <FeatureRow text="No ads, no tracking" delay={26} />
    <FeatureRow text="No subscription — ever" delay={32} />
  </AbsoluteFill>
);

// ── Slide 4: Social Proof ──
const SlideProof: React.FC = () => (
  <AbsoluteFill style={{
    background: C.bg, display: "flex", flexDirection: "column",
    alignItems: "center", justifyContent: "center", padding: 60,
  }}>
    <BgPattern />
    <FadeUp>
      <h2 style={{
        fontFamily: FONT_TITLE, fontSize: 44, color: C.text,
        textAlign: "center", marginBottom: 40,
      }}>Students are passing</h2>
    </FadeUp>
    <ScaleIn delay={10}>
      <div style={{
        background: C.card, border: `1px solid ${C.border}`,
        borderRadius: 20, padding: "40px 50px", maxWidth: 800,
        boxShadow: "0 8px 30px rgba(0,0,0,0.06)",
      }}>
        <div style={{ color: "#F5A623", fontSize: 36, marginBottom: 15 }}>★★★★★</div>
        <p style={{
          fontFamily: FONT_BODY, fontSize: 30, color: C.textBody,
          fontStyle: "italic", lineHeight: 1.5, marginBottom: 20,
        }}>
          "I used this app for two weeks and passed my exam on the first try. Best $5 I ever spent."
        </p>
        <p style={{
          fontFamily: FONT_BODY, fontSize: 22, fontWeight: 700, color: C.text,
        }}>— Sarah M., RBT</p>
      </div>
    </ScaleIn>
    <FadeUp delay={25}>
      <div style={{
        marginTop: 30, display: "flex", gap: 30,
      }}>
        {["80% pass rate", "320+ questions", "24h free trial"].map((t, i) => (
          <div key={t} style={{
            background: C.primaryBg, color: C.primary,
            padding: "10px 20px", borderRadius: 50,
            fontFamily: FONT_BODY, fontSize: 20, fontWeight: 600,
          }}>{t}</div>
        ))}
      </div>
    </FadeUp>
  </AbsoluteFill>
);

// ── Slide 5: CTA ──
const SlideCTA: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const pulse = spring({ frame: frame - 25, fps, config: { damping: 8, mass: 0.8 } });
  const float = Math.sin(frame * 0.06) * 4;

  return (
    <AbsoluteFill style={{
      background: C.bg, display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center", padding: 60,
    }}>
      <BgPattern color={C.greenBg} />
      <ScaleIn>
        <div style={{ fontSize: 90, marginBottom: 15 }}>🎓</div>
      </ScaleIn>
      <FadeUp delay={8}>
        <h2 style={{
          fontFamily: FONT_TITLE, fontSize: 54, color: C.text,
          textAlign: "center",
        }}>RBT Exam Prep</h2>
      </FadeUp>
      <FadeUp delay={16}>
        <div style={{
          fontFamily: FONT_TITLE, fontSize: 80, color: C.green,
          marginTop: 10,
        }}>$4.99</div>
        <p style={{
          fontFamily: FONT_BODY, fontSize: 28, color: C.muted,
          textAlign: "center",
        }}>one time — lifetime access</p>
      </FadeUp>
      <FadeUp delay={24}>
        <div style={{
          marginTop: 40,
          background: C.accent,
          padding: "22px 55px",
          borderRadius: 12,
          fontSize: 34, fontWeight: 700, color: "white",
          fontFamily: FONT_BODY,
          boxShadow: "0 8px 25px rgba(232,116,59,0.3)",
          transform: `scale(${interpolate(pulse, [0, 1], [0.5, 1])}) translateY(${float}px)`,
        }}>
          Start Free Trial →
        </div>
      </FadeUp>
      <FadeUp delay={35}>
        <div style={{
          marginTop: 35, display: "flex", gap: 20,
          fontFamily: FONT_BODY, fontSize: 22, color: C.muted,
        }}>
          <span>✨ No credit card</span>
          <span>·</span>
          <span>No account</span>
          <span>·</span>
          <span>Works offline</span>
        </div>
      </FadeUp>
    </AbsoluteFill>
  );
};

// ── Main Composition (20 seconds) ──
export const PromoVideoV2: React.FC = () => {
  return (
    <AbsoluteFill style={{ background: C.bg }}>
      {/* Slide 1: Hook (0s - 4.5s) */}
      <Sequence from={0} durationInFrames={135}>
        <SlideHook />
      </Sequence>

      {/* Slide 2: Stats (4.5s - 9s) */}
      <Sequence from={135} durationInFrames={135}>
        <SlideStats />
      </Sequence>

      {/* Slide 3: Features (9s - 13s) */}
      <Sequence from={270} durationInFrames={120}>
        <SlideFeatures />
      </Sequence>

      {/* Slide 4: Social Proof (13s - 17s) */}
      <Sequence from={390} durationInFrames={120}>
        <SlideProof />
      </Sequence>

      {/* Slide 5: CTA (17s - 20s) */}
      <Sequence from={510} durationInFrames={90}>
        <SlideCTA />
      </Sequence>

      {/* Background music */}
      <Audio src={staticFile("music.mp3")} volume={0.3} />
    </AbsoluteFill>
  );
};
