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

const C = {
  bg: "#FAFAF8", bgAlt: "#F3F1EE", card: "#FFFFFF", text: "#1A1A2E",
  textBody: "#4A4A5A", muted: "#7A7A8A", primary: "#2D5F8A",
  primaryBg: "#E8F0F7", accent: "#E8743B", green: "#2D8F6F",
  greenBg: "#E6F5F0", border: "#E5E3DE", red: "#E84B3B",
};
const FONT = "'DM Sans', -apple-system, sans-serif";
const FONT_T = "'DM Serif Display', Georgia, serif";

const Pop: React.FC<{children: React.ReactNode; delay?: number; style?: React.CSSProperties}> = ({children, delay=0, style}) => {
  const f = useCurrentFrame(); const {fps} = useVideoConfig();
  const s = spring({frame:f-delay, fps, config:{damping:10,mass:0.4,stiffness:200}});
  return <div style={{opacity:s, transform:`scale(${interpolate(s,[0,1],[0.3,1])})`, ...style}}>{children}</div>;
};
const Slam: React.FC<{children: React.ReactNode; delay?: number; style?: React.CSSProperties}> = ({children, delay=0, style}) => {
  const f = useCurrentFrame(); const {fps} = useVideoConfig();
  const s = spring({frame:f-delay, fps, config:{damping:8,mass:0.3,stiffness:300}});
  return <div style={{opacity:s, transform:`scale(${interpolate(s,[0,1],[2.5,1])})`, ...style}}>{children}</div>;
};
const SlideUp: React.FC<{children: React.ReactNode; delay?: number; style?: React.CSSProperties}> = ({children, delay=0, style}) => {
  const f = useCurrentFrame(); const {fps} = useVideoConfig();
  const s = spring({frame:f-delay, fps, config:{damping:12,mass:0.4}});
  return <div style={{opacity:s, transform:`translateY(${interpolate(s,[0,1],[60,0])}px)`, ...style}}>{children}</div>;
};

const SlideProblem: React.FC = () => (
  <AbsoluteFill style={{background:C.bg, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", padding:50}}>
    <Slam><p style={{fontFamily:FONT, fontSize:48, color:C.red, fontWeight:800, textTransform:"uppercase", letterSpacing:3, marginBottom:15}}>STOP</p></Slam>
    <SlideUp delay={8}><h1 style={{fontFamily:FONT_T, fontSize:56, color:C.text, textAlign:"center", lineHeight:1.2}}>Wasting hours on<br/>outdated RBT study guides</h1></SlideUp>
    <Pop delay={20}><div style={{marginTop:30, display:"flex", gap:15}}>
      {["$40+ books","$13/mo apps","Random Quizlet"].map(t=>(
        <div key={t} style={{fontFamily:FONT, fontSize:22, padding:"10px 18px", background:"#FEE", color:C.red, borderRadius:8, fontWeight:600, textDecoration:"line-through"}}>{t}</div>
      ))}
    </div></Pop>
  </AbsoluteFill>
);

const SlideSolution: React.FC = () => (
  <AbsoluteFill style={{background:C.primaryBg, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", padding:50}}>
    <Pop><div style={{fontSize:80, marginBottom:10}}>🎓</div></Pop>
    <Slam delay={6}><h1 style={{fontFamily:FONT_T, fontSize:64, color:C.primary, textAlign:"center", marginBottom:10}}>RBT Exam Prep</h1></Slam>
    <SlideUp delay={14}><p style={{fontFamily:FONT, fontSize:32, color:C.textBody, textAlign:"center"}}>The only app you need to pass.</p></SlideUp>
    <SlideUp delay={20}><div style={{marginTop:25, display:"flex", gap:20}}>
      {["159 Flashcards","320+ Questions","Exam Simulator"].map((t,i)=>(
        <Pop key={t} delay={22+i*4}><div style={{fontFamily:FONT, fontSize:22, fontWeight:700, background:C.card, border:`1px solid ${C.border}`, padding:"12px 20px", borderRadius:10, color:C.text, boxShadow:"0 3px 10px rgba(0,0,0,0.06)"}}>{t}</div></Pop>
      ))}
    </div></SlideUp>
  </AbsoluteFill>
);

const SlidePrice: React.FC = () => (
  <AbsoluteFill style={{background:C.bg, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", padding:50}}>
    <SlideUp><p style={{fontFamily:FONT, fontSize:28, color:C.muted, fontWeight:500, marginBottom:5}}>Others charge $13/month</p></SlideUp>
    <Slam delay={10}><span style={{fontFamily:FONT_T, fontSize:120, color:C.green}}>$4.99</span></Slam>
    <Pop delay={18}><p style={{fontFamily:FONT, fontSize:36, fontWeight:800, color:C.text, marginTop:10}}>ONE TIME. FOREVER.</p></Pop>
    <SlideUp delay={24}><div style={{marginTop:25, display:"flex", gap:15}}>
      {["No subscription","No account","Works offline"].map(t=>(
        <div key={t} style={{fontFamily:FONT, fontSize:20, color:C.green, background:C.greenBg, padding:"8px 16px", borderRadius:50, fontWeight:600}}>✓ {t}</div>
      ))}
    </div></SlideUp>
  </AbsoluteFill>
);

const SlideCTA: React.FC = () => {
  const frame = useCurrentFrame();
  const pulse = Math.sin(frame*0.12)*3;
  return (
    <AbsoluteFill style={{background:C.bg, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", padding:50}}>
      <div style={{position:"absolute",top:0,left:0,right:0,bottom:0,opacity:0.3, background:`radial-gradient(circle at 50% 50%, ${C.primaryBg} 0%, transparent 70%)`}}/>
      <Pop><p style={{fontFamily:FONT, fontSize:28, color:C.accent, fontWeight:700, textTransform:"uppercase", letterSpacing:3, marginBottom:10}}>Free 24-hour trial</p></Pop>
      <Slam delay={8}><h1 style={{fontFamily:FONT_T, fontSize:56, color:C.text, textAlign:"center", lineHeight:1.2}}>Start Studying<br/>Right Now</h1></Slam>
      <SlideUp delay={16}><div style={{marginTop:35, background:C.accent, padding:"24px 60px", borderRadius:14, fontFamily:FONT, fontSize:36, fontWeight:800, color:"white", boxShadow:"0 8px 30px rgba(232,116,59,0.35)", transform:`translateY(${pulse}px)`}}>Try It Free →</div></SlideUp>
      <Pop delay={24}><p style={{fontFamily:FONT, fontSize:22, color:C.muted, marginTop:20}}>No credit card · No sign-up · Just study</p></Pop>
    </AbsoluteFill>
  );
};

export const PromoVideoV3: React.FC = () => (
  <AbsoluteFill style={{background:C.bg}}>
    <Sequence from={0} durationInFrames={75}><SlideProblem/></Sequence>
    <Sequence from={75} durationInFrames={90}><SlideSolution/></Sequence>
    <Sequence from={165} durationInFrames={90}><SlidePrice/></Sequence>
    <Sequence from={255} durationInFrames={105}><SlideCTA/></Sequence>
    <Audio src={staticFile("music.mp3")} volume={0.25}/>
  </AbsoluteFill>
);
