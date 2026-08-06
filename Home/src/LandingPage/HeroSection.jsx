import React, { useState } from 'react';
import PixelBlast from './PixelBlast';

const HeroSection = () => {
  const [activeTab, setActiveTab] = useState('telemetry');
  const [isHovered, setIsHovered] = useState(false);

  return (
    <header className="relative z-10 max-w-7xl mx-auto px-6 pt-10 pb-20 flex flex-col lg:flex-row items-center justify-between gap-12 select-none">
      {/* Left Column: Hero Copy & CTA */}
      <div className="flex-1 max-w-2xl text-center lg:text-left">
        {/* Status Pill Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-emerald-500/40 bg-emerald-950/70 backdrop-blur-md mb-6 shadow-[0_0_20px_rgba(5,150,105,0.3)]">
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 animate-ping" />
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-emerald-300 font-semibold">
            SURVEX OS // NEURAL SYNTHESIS ENGINE V4.2
          </span>
        </div>

        {/* Hero Main Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-slate-100 leading-[1.08] font-mono">
          Elevate Human Cognition with{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-green-300 to-teal-200 drop-shadow-[0_0_35px_rgba(16,185,129,0.4)]">
            Cybernetic Precision.
          </span>
        </h1>

        {/* Subtitle Paragraph */}
        <p className="mt-6 text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
          SurveX seamlessly integrates autonomous neural telemetry, ultra-low latency machine synchronization, and adaptive quantum processing into a unified cyborg interface.
        </p>

        {/* Live Cyber Metrics Quick Bar */}
        <div className="mt-8 grid grid-cols-3 gap-3 p-3 bg-slate-950/90 border border-emerald-900/50 rounded-2xl backdrop-blur-xl">
          <div className="text-left px-3">
            <div className="text-[10px] font-mono text-emerald-500 uppercase">SYNC LATENCY</div>
            <div className="text-sm sm:text-base font-mono font-bold text-slate-100 mt-0.5">0.42 ms</div>
          </div>
          <div className="text-left px-3 border-x border-emerald-950">
            <div className="text-[10px] font-mono text-emerald-500 uppercase">THROUGHPUT</div>
            <div className="text-sm sm:text-base font-mono font-bold text-slate-100 mt-0.5">120 Tbps</div>
          </div>
          <div className="text-left px-3">
            <div className="text-[10px] font-mono text-emerald-500 uppercase">ACTIVE NODES</div>
            <div className="text-sm sm:text-base font-mono font-bold text-slate-100 mt-0.5">16,384</div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
          <button className="group relative w-full sm:w-auto px-8 py-4 text-xs font-mono uppercase tracking-widest font-bold text-black bg-gradient-to-r from-emerald-400 via-green-300 to-teal-300 rounded-xl shadow-[0_0_30px_rgba(16,185,129,0.4)] hover:shadow-[0_0_45px_rgba(16,185,129,0.7)] hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 cursor-pointer overflow-hidden">
            <span className="relative z-10 flex items-center justify-center gap-2">
              Initialize Neural Link
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </button>

          <a href="#specs" className="w-full sm:w-auto px-8 py-4 text-xs font-mono uppercase tracking-widest font-semibold text-emerald-300 bg-slate-900/70 hover:bg-slate-900 border border-slate-800 hover:border-emerald-500/50 rounded-xl backdrop-blur-md transition-all duration-300 text-center cursor-pointer">
            Explore Specifications
          </a>
        </div>
      </div>

      {/* Right Column: Interactive Holographic Cybernetic Terminal */}
      <div 
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="flex-1 w-full max-w-lg bg-slate-950/90 border border-emerald-500/40 rounded-3xl p-6 sm:p-7 backdrop-blur-2xl shadow-[0_0_70px_rgba(5,150,105,0.25)] relative overflow-hidden group transition-all duration-500 hover:border-emerald-400/60"
      >
        {/* Subtle PixelBlast Effect inside Terminal Showcase */}
        <div className="absolute inset-0 z-0 opacity-25 pointer-events-none">
          <PixelBlast
            variant="diamond"
            pixelSize={4}
            color="#059669"
            patternScale={2}
            patternDensity={1.2}
            liquid={true}
            enableRipples={true}
            speed={0.5}
            edgeFade={0.15}
          />
        </div>

        <div className="relative z-10 space-y-6">
          {/* Top Window Bar */}
          <div className="flex items-center justify-between pb-4 border-b border-emerald-900/60">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981]" />
              <div className="w-3 h-3 rounded-full bg-teal-500/50" />
              <div className="w-3 h-3 rounded-full bg-green-500/30" />
            </div>
            <div className="flex items-center space-x-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-[11px] font-mono tracking-widest text-emerald-300 uppercase">
                TERMINAL ONLINE
              </span>
            </div>
          </div>

          {/* Mode Switcher Tabs */}
          <div className="grid grid-cols-3 gap-2 bg-black/60 p-1.5 rounded-xl border border-emerald-900/50">
            {[
              { id: 'telemetry', label: 'TELEMETRY' },
              { id: 'mesh', label: 'NEURAL MAP' },
              { id: 'spectrum', label: 'SPECTRUM' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-1.5 text-[10px] font-mono uppercase tracking-wider rounded-lg transition-all cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-emerald-500 text-black font-extrabold shadow-[0_0_12px_#10b981]'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content 1: Telemetry Waveform */}
          {activeTab === 'telemetry' && (
            <div className="space-y-4">
              <div className="bg-black/60 border border-emerald-900/60 rounded-2xl p-5 space-y-3">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-400">Cognitive Stream Output</span>
                  <span className="text-emerald-400 font-bold">120 Hz Active</span>
                </div>

                {/* Animated Frequency Audio Bars */}
                <div className="flex items-end justify-between h-16 gap-1.5 px-1">
                  {[45, 70, 35, 90, 100, 50, 80, 95, 65, 100, 85, 55, 90, 70, 45].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 bg-gradient-to-t from-emerald-600 via-emerald-400 to-teal-200 rounded-t transition-all duration-300"
                      style={{
                        height: isHovered ? `${Math.min(100, h + 10)}%` : `${h}%`,
                        opacity: 0.85 + (i % 2) * 0.15
                      }}
                    />
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="bg-black/50 border border-emerald-900/50 rounded-xl p-3.5">
                  <div className="text-[10px] font-mono text-slate-400 uppercase">SIGNAL PURITY</div>
                  <div className="text-base font-extrabold text-emerald-300 font-mono mt-0.5">99.99%</div>
                </div>
                <div className="bg-black/50 border border-emerald-900/50 rounded-xl p-3.5">
                  <div className="text-[10px] font-mono text-slate-400 uppercase">CRYPTO ENGINE</div>
                  <div className="text-base font-extrabold text-emerald-300 font-mono mt-0.5">KYBER-1024</div>
                </div>
              </div>
            </div>
          )}

          {/* Tab Content 2: Neural Map */}
          {activeTab === 'mesh' && (
            <div className="bg-black/60 border border-emerald-900/60 rounded-2xl p-5 space-y-3 font-mono text-xs">
              <div className="flex items-center justify-between text-slate-400">
                <span>NEURAL CLUSTER MAP</span>
                <span className="text-emerald-400">4 REGIONS SYNCED</span>
              </div>
              <div className="space-y-2 pt-2">
                {[
                  { region: 'ALPHA // CORTEX', sync: '99.8%', lat: '0.4ms' },
                  { region: 'BETA // SYNAPSE', sync: '100.0%', lat: '0.3ms' },
                  { region: 'GAMMA // MATRIX', sync: '99.9%', lat: '0.5ms' }
                ].map((r, idx) => (
                  <div key={idx} className="flex items-center justify-between p-2 rounded-lg bg-emerald-950/40 border border-emerald-900/40">
                    <span className="text-slate-200">{r.region}</span>
                    <span className="text-emerald-300 font-bold">{r.sync}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab Content 3: Spectrum */}
          {activeTab === 'spectrum' && (
            <div className="bg-black/60 border border-emerald-900/60 rounded-2xl p-5 space-y-3 font-mono text-xs">
              <div className="flex items-center justify-between text-slate-400">
                <span>BANDWIDTH SPECTRUM</span>
                <span className="text-emerald-400">120 Gbps</span>
              </div>
              <div className="py-4 flex items-center justify-center">
                <div className="h-20 w-20 rounded-full border-4 border-emerald-500 border-t-transparent animate-spin flex items-center justify-center">
                  <div className="h-10 w-10 rounded-full bg-emerald-400/20 animate-pulse" />
                </div>
              </div>
            </div>
          )}

          {/* Action Bar Footer */}
          <div className="pt-2 flex items-center justify-between text-xs font-mono text-emerald-400 border-t border-emerald-900/60">
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
              SYSTEM NOMINAL
            </span>
            <span className="text-[10px] text-emerald-500">AUTONOMOUS SYNTHESIS</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;
