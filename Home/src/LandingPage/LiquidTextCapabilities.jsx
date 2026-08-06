import React, { useEffect, useRef, useState } from 'react';

const capabilitiesData = [
  {
    id: '01',
    title: 'SYNAPTIC TELEMETRY',
    subtitle: 'Sub-millisecond bi-directional neural handshake delivering instant sensory telemetry across cybernetic nodes.',
    tag: 'LATENCY < 0.8ms',
    specs: ['99.99% Signal Purity', 'Sub-1ms Sync', 'Bio-Handshake V4']
  },
  {
    id: '02',
    title: 'QUANTUM MESH SECURITY',
    subtitle: 'Zero-trust post-quantum encrypted channels shielding cognitive data streams with self-healing cryptographic meshes.',
    tag: 'POST-QUANTUM ENCRYPTION',
    specs: ['4096-bit Quantum Keys', 'Zero-Trust Mesh', 'Self-Healing Shield']
  },
  {
    id: '03',
    title: 'BIO-ADAPTIVE AI',
    subtitle: 'Autonomous neural models self-optimizing to real-time workload, cognitive fatigue, and neural focus patterns.',
    tag: 'SELF-OPTIMIZING COGNITION',
    specs: ['Real-Time Adaptation', 'Fatigue Detection', 'Cognitive Load Balancing']
  },
  {
    id: '04',
    title: 'PARALLEL COGNITION',
    subtitle: 'Multi-threaded synthetic processing expanding human problem solving capacity and memory recall by 100x.',
    tag: 'SYNTHETIC EXPANSION',
    specs: ['100x Compute Scaling', 'Parallel Threads', 'Instant Memory Recall']
  }
];

const CapabilityCard = ({ item, index }) => {
  const cardRef = useRef(null);
  const [fillProgress, setFillProgress] = useState(0);
  const [time, setTime] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      setReducedMotion(mediaQuery.matches);
    }

    let animationFrameId;
    const animateWave = () => {
      setTime(t => t + (isHovered ? 0.07 : 0.04));
      animationFrameId = requestAnimationFrame(animateWave);
    };
    animationFrameId = requestAnimationFrame(animateWave);

    const handleScroll = () => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight || 800;

      const startTrigger = windowHeight * 0.88;
      const endTrigger = windowHeight * 0.32;
      
      const rawProgress = (startTrigger - rect.top) / (startTrigger - endTrigger);
      const clamped = Math.max(0, Math.min(1, rawProgress));
      setFillProgress(clamped);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isHovered]);

  // Liquid Math
  const waveHeight = isHovered ? 14 : 9;
  const fillPercent = fillProgress * 100;
  const liquidY = 100 - fillPercent;
  const wave1 = Math.sin(time + index * 1.5) * waveHeight;
  const wave2 = Math.cos(time * 0.9 + index) * waveHeight;
  const wave3 = Math.sin(time * 1.2 + index * 2) * (waveHeight * 0.6);

  return (
    <div
      ref={cardRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative w-full bg-slate-950/80 border border-emerald-900/40 hover:border-emerald-500/50 rounded-3xl p-5 sm:p-10 backdrop-blur-xl transition-all duration-500 overflow-hidden group shadow-[0_0_40px_rgba(5,150,105,0.08)] hover:shadow-[0_0_60px_rgba(16,185,129,0.18)]"
    >
      {/* Background Ambient Glow */}
      <div 
        className="absolute -right-20 -bottom-20 w-80 h-80 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none transition-opacity duration-700"
        style={{ opacity: Math.max(0.2, fillProgress) }}
      />

      {/* Top Card Info Bar */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-emerald-950">
        <div className="flex items-center space-x-3">
          <div className="px-3.5 py-1 rounded-full border border-emerald-500/40 bg-emerald-950/80 text-xs font-mono font-bold text-emerald-300 shadow-[0_0_10px_rgba(5,150,105,0.3)]">
            {item.id}
          </div>
          <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest font-semibold">
            {item.tag}
          </span>
        </div>

        {/* Sync Gauge */}
        <div className="flex items-center space-x-2 text-xs font-mono text-emerald-400/90">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
          <span>FLUID SYNC:</span>
          <span className="text-emerald-300 font-extrabold text-sm">{Math.round(fillProgress * 100)}%</span>
        </div>
      </div>

      {/* Responsive Liquid Text SVG Reveal */}
      <div className="relative my-4 select-none w-full">
        {reducedMotion ? (
          <h2
            className="text-2xl sm:text-4xl lg:text-5xl font-black font-mono tracking-tight text-emerald-400 transition-opacity duration-700 break-words"
            style={{ opacity: Math.max(0.25, fillProgress) }}
          >
            {item.title}
          </h2>
        ) : (
          <div className="relative w-full overflow-hidden py-1">
            <svg
              className="w-full h-auto max-h-36 min-h-12 overflow-visible"
              viewBox="0 0 950 120"
              preserveAspectRatio="xMinYMid meet"
            >
              <defs>
                {/* Glow Filter */}
                <filter id={`glow-high-${item.id}`} x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="3.5" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>

                {/* Multi-Stop Liquid Gradient */}
                <linearGradient id={`liquid-grad-v2-${item.id}`} x1="0%" y1="100%" x2="0%" y2="0%">
                  <stop offset="0%" stopColor="#022c22" />
                  <stop offset="40%" stopColor="#059669" />
                  <stop offset="80%" stopColor="#10b981" />
                  <stop offset="100%" stopColor="#a7f3d0" />
                </linearGradient>

                {/* Dynamic ClipPath for Primary Liquid Level Wave */}
                <clipPath id={`liquid-clip-primary-${item.id}`}>
                  <path
                    d={`
                      M -50 ${liquidY + wave1}
                      Q 237 ${liquidY - waveHeight + wave2}, 475 ${liquidY + wave1}
                      T 1000 ${liquidY + wave1}
                      V 200
                      H -50
                      Z
                    `}
                  />
                </clipPath>

                {/* Secondary Counter Wave ClipPath */}
                <clipPath id={`liquid-clip-sec-${item.id}`}>
                  <path
                    d={`
                      M -50 ${liquidY - wave2}
                      Q 237 ${liquidY + waveHeight - wave3}, 475 ${liquidY - wave2}
                      T 1000 ${liquidY - wave2}
                      V 200
                      H -50
                      Z
                    `}
                  />
                </clipPath>
              </defs>

              {/* 1. Thin Outline Text */}
              <text
                x="0"
                y="85"
                fontSize="56"
                fontWeight="900"
                fontFamily="system-ui, sans-serif"
                letterSpacing="-0.03em"
                textLength="930"
                lengthAdjust="spacingAndGlyphs"
                fill="none"
                stroke="#065f46"
                strokeWidth="1.8"
                className="opacity-50"
              >
                {item.title}
              </text>

              {/* 2. Secondary Translucent Liquid Layer */}
              <g clipPath={`url(#liquid-clip-sec-${item.id})`} className="opacity-40">
                <text
                  x="0"
                  y="85"
                  fontSize="56"
                  fontWeight="900"
                  fontFamily="system-ui, sans-serif"
                  letterSpacing="-0.03em"
                  textLength="930"
                  lengthAdjust="spacingAndGlyphs"
                  fill="#047857"
                >
                  {item.title}
                </text>
              </g>

              {/* 3. Primary Liquid Filled Text */}
              <g clipPath={`url(#liquid-clip-primary-${item.id})`}>
                <text
                  x="0"
                  y="85"
                  fontSize="56"
                  fontWeight="900"
                  fontFamily="system-ui, sans-serif"
                  letterSpacing="-0.03em"
                  textLength="930"
                  lengthAdjust="spacingAndGlyphs"
                  fill={`url(#liquid-grad-v2-${item.id})`}
                  filter={`url(#glow-high-${item.id})`}
                >
                  {item.title}
                </text>

                {/* Animated Rising Liquid Bubbles */}
                {fillProgress > 0.04 && (
                  <g className="opacity-90">
                    <circle
                      cx={(time * 60 + index * 120) % 900}
                      cy={Math.max(10, liquidY + 15)}
                      r="3.5"
                      fill="#ecfdf5"
                      className="animate-ping"
                      style={{ animationDuration: '2.5s' }}
                    />
                    <circle
                      cx={(time * 90 + index * 200) % 900}
                      cy={Math.max(15, liquidY + 35)}
                      r="4"
                      fill="#a7f3d0"
                    />
                    <circle
                      cx={(time * 45 + index * 300) % 900}
                      cy={Math.max(20, liquidY + 55)}
                      r="2.5"
                      fill="#34d399"
                    />
                  </g>
                )}
              </g>
            </svg>
          </div>
        )}
      </div>

      {/* Description Subtitle */}
      <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl">
        {item.subtitle}
      </p>

      {/* Tech Specifications Chips */}
      <div className="mt-5 flex flex-wrap gap-2">
        {item.specs.map((spec, sIdx) => (
          <span
            key={sIdx}
            className="px-3 py-1 rounded-lg bg-emerald-950/40 border border-emerald-900/60 text-[11px] font-mono text-emerald-400 group-hover:border-emerald-500/30 transition-colors"
          >
            ✓ {spec}
          </span>
        ))}
      </div>

      {/* Bottom Liquid Sync Progress Bar */}
      <div className="w-full bg-slate-900 h-1.5 rounded-full mt-6 overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-emerald-600 via-emerald-400 to-teal-300 shadow-[0_0_15px_#10b981] transition-all duration-300 ease-out"
          style={{ width: `${fillProgress * 100}%` }}
        />
      </div>
    </div>
  );
};

const LiquidTextCapabilities = () => {
  return (
    <section id="capabilities" className="relative z-10 max-w-7xl mx-auto px-6 py-24 border-t border-emerald-900/30">
      {/* Section Header */}
      <div className="mb-16 text-center md:text-left">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-950/60 backdrop-blur-md mb-4 shadow-[0_0_15px_rgba(5,150,105,0.2)]">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs font-mono uppercase tracking-widest text-emerald-300">
            SYSTEM CAPABILITIES // SCROLL TO FILL
          </span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-100">
          Engineered for <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">Infinite Expansion.</span>
        </h2>
        <p className="mt-4 text-slate-400 text-sm sm:text-base max-w-xl">
          Scroll down to observe real-time liquid synchronization across core cybernetic capability modules.
        </p>
      </div>

      {/* Cards Stack */}
      <div className="space-y-8">
        {capabilitiesData.map((item, idx) => (
          <CapabilityCard key={item.id} item={item} index={idx} />
        ))}
      </div>
    </section>
  );
};

export default LiquidTextCapabilities;
