import { useEffect, useRef } from 'react';

interface LandingPageProps {
  onGetStarted: () => void;
}

const FEATURES = [
  { icon: '📚', title: '154 Flashcards', desc: 'Master every concept from the BACB RBT 5th Edition Task List with interactive flip cards.' },
  { icon: '❓', title: '300+ Practice Questions', desc: 'Test your knowledge with detailed explanations for every answer.' },
  { icon: '📝', title: 'Realistic Exam Simulator', desc: '85 questions in 90 minutes — just like the real RBT certification exam.' },
  { icon: '📊', title: 'Progress Tracking', desc: 'Track streaks, mastery by category, and quiz/exam scores over time.' },
];

const STEPS = [
  { num: '1', title: 'Study Flashcards', desc: 'Review key terms and concepts across all 5 task list categories. Mark cards as "Know" or "Learning" to track mastery.' },
  { num: '2', title: 'Take Practice Quizzes', desc: 'Test yourself with customizable quizzes — choose categories, question count, and review explanations.' },
  { num: '3', title: 'Simulate the Real Exam', desc: 'Take a timed, 85-question mock exam with scoring and category breakdown — just like exam day.' },
];

const TESTIMONIALS = [
  { name: 'Jessica M.', role: 'RBT, Certified May 2025', text: 'I passed my RBT exam on the first try! The flashcards and exam simulator were incredibly helpful. I studied for just 2 weeks using this app.' },
  { name: 'Marcus T.', role: 'RBT Student', text: 'The practice questions are so close to the real exam. The explanations helped me understand concepts I was struggling with. Highly recommend!' },
  { name: 'Priya K.', role: 'RBT, Certified March 2025', text: 'Best $5 I ever spent. The exam simulator helped me manage my time and the progress tracking kept me motivated throughout my study sessions.' },
];

export default function LandingPage({ onGetStarted }: LandingPageProps) {
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('landing-visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    sectionsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const setRef = (i: number) => (el: HTMLElement | null) => {
    sectionsRef.current[i] = el;
  };

  return (
    <div className="landing-page min-h-[100dvh] overflow-x-hidden">
      {/* Hero */}
      <section className="relative px-4 pt-16 pb-20 text-center overflow-hidden">
        <div className="landing-hero-bg" />
        <div className="relative z-10 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#E8F0F7] border border-[#E5E3DE] text-sm text-[#4A4A5A] mb-8 animate-fade-up">
            <span>🎓</span>
            <span>Aligned with BACB 5th Edition Task List</span>
          </div>
          <h1 className="text-5xl sm:text-6xl font-black mb-4 animate-fade-up delay-1">
            <span className="block text-5xl sm:text-6xl mb-1">🧠</span>
            <span className="gradient-text">RBT Exam Prep</span>
          </h1>
          <p className="text-xl sm:text-2xl text-[#4A4A5A] font-medium mb-3 animate-fade-up delay-2">
            Pass your RBT certification on the first try
          </p>
          <p className="text-[#7A7A8A] mb-10 max-w-md mx-auto animate-fade-up delay-3">
            The most comprehensive study app for the Registered Behavior Technician exam.
            Flashcards, quizzes, and a realistic exam simulator — all in your pocket.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 animate-fade-up delay-4">
            <button onClick={onGetStarted} className="landing-cta-btn">
              Start Free Trial
              <span className="ml-2">→</span>
            </button>
            <p className="text-xs text-[#7A7A8A]">Free for 24 hours &middot; No account required</p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section ref={setRef(0)} className="landing-section px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-3">Everything you need to pass</h2>
          <p className="text-[#7A7A8A] text-center mb-12 max-w-lg mx-auto">
            Built specifically for the RBT certification exam with tools that match how you actually study.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {FEATURES.map((f, i) => (
              <div key={f.title} className="landing-feature-card" style={{ transitionDelay: `${i * 80}ms` }}>
                <span className="text-3xl mb-3 block">{f.icon}</span>
                <h3 className="text-lg font-bold mb-1">{f.title}</h3>
                <p className="text-sm text-[#7A7A8A] leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section ref={setRef(1)} className="landing-section px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-3">How it works</h2>
          <p className="text-[#7A7A8A] text-center mb-12">A simple, proven study workflow</p>
          <div className="space-y-6">
            {STEPS.map((s, i) => (
              <div key={s.num} className="landing-step-card" style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="landing-step-num">{s.num}</div>
                <div>
                  <h3 className="text-lg font-bold mb-1">{s.title}</h3>
                  <p className="text-sm text-[#7A7A8A] leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section ref={setRef(2)} className="landing-section px-4 py-16">
        <div className="max-w-md mx-auto text-center">
          <h2 className="text-3xl font-bold mb-3">Simple, fair pricing</h2>
          <p className="text-[#7A7A8A] mb-8">No subscriptions. No hidden fees.</p>
          <div className="landing-pricing-card">
            <div className="text-sm font-semibold text-primary mb-4 uppercase tracking-wider">Full Access</div>
            <div className="flex items-baseline justify-center gap-1 mb-1">
              <span className="text-5xl font-black gradient-text">$4.99</span>
            </div>
            <p className="text-[#7A7A8A] text-sm mb-6">One-time payment &middot; Lifetime access</p>
            <div className="text-left space-y-3 mb-8">
              {[
                'Free for 24 hours — no credit card needed',
                '154 interactive flashcards',
                '300+ practice questions with explanations',
                'Realistic 85-question exam simulator',
                'Progress tracking & daily streaks',
                'Works offline as a mobile app',
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 text-sm text-[#4A4A5A]">
                  <span className="text-success mt-0.5 flex-shrink-0">&#10003;</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <button onClick={onGetStarted} className="landing-cta-btn w-full">
              Start Free Trial
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section ref={setRef(3)} className="landing-section px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-3">Loved by RBT students</h2>
          <p className="text-[#7A7A8A] text-center mb-12">Join hundreds of students who passed with confidence</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {TESTIMONIALS.map((t, i) => (
              <div key={t.name} className="landing-testimonial-card" style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="flex gap-1 mb-3 text-warning">
                  {'★★★★★'.split('').map((s, j) => <span key={j}>{s}</span>)}
                </div>
                <p className="text-sm text-[#4A4A5A] leading-relaxed mb-4">"{t.text}"</p>
                <div>
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-[#7A7A8A]">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section ref={setRef(4)} className="landing-section px-4 py-20 text-center">
        <div className="max-w-lg mx-auto">
          <h2 className="text-3xl font-bold mb-3">Ready to pass your RBT exam?</h2>
          <p className="text-[#7A7A8A] mb-8">Start studying now with a free 24-hour trial. No account needed.</p>
          <button onClick={onGetStarted} className="landing-cta-btn">
            Start Studying Now
            <span className="ml-2">→</span>
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 px-4 py-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="text-xl">🧠</span>
            <span className="font-bold gradient-text">RBT Exam Prep</span>
          </div>
          <p className="text-xs text-[#7A7A8A] mb-4">
            Based on the BACB RBT Task List (5th ed.) &middot; Not affiliated with BACB
          </p>
          <div className="flex items-center justify-center gap-6 text-xs text-[#7A7A8A]">
            <button onClick={onGetStarted} className="hover:text-[#4A4A5A] transition-colors">Get Started</button>
            <span className="text-[#E5E3DE]">|</span>
            <a href="mailto:support@rbtexamprep.com" className="hover:text-[#4A4A5A] transition-colors">Contact</a>
            <span className="text-[#E5E3DE]">|</span>
            <button className="hover:text-[#4A4A5A] transition-colors">Privacy</button>
          </div>
        </div>
      </footer>
    </div>
  );
}
