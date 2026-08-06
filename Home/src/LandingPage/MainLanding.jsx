import React from 'react';

const MainLanding = () => {
  return (
    <div className="relative min-h-screen w-full bg-black text-emerald-50 selection:bg-emerald-500 selection:text-black overflow-x-hidden">
      {/* Ambient Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#05966910_1px,transparent_1px),linear-gradient(to_bottom,#05966910_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Glow Orbs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-emerald-500/10 blur-[180px] rounded-full pointer-events-none" />

      {/* Navbar */}
      <nav className="relative z-20 w-full max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center space-x-3 cursor-pointer">
          <div className="h-4 w-4 rounded bg-emerald-500 shadow-[0_0_12px_#10b981]" />
          <span className="text-lg font-bold font-mono tracking-wider text-emerald-100">
            SurveX <span className="text-emerald-400 font-normal text-sm">// CYBORG</span>
          </span>
        </div>

        <div className="hidden md:flex items-center space-x-8 text-xs font-mono tracking-widest text-slate-400 uppercase">
          <a href="#features" className="hover:text-emerald-400 transition-colors">Capabilities</a>
          <a href="#mesh" className="hover:text-emerald-400 transition-colors">Neural Mesh</a>
          <a href="#security" className="hover:text-emerald-400 transition-colors">Security</a>
          <a href="#specs" className="hover:text-emerald-400 transition-colors">Specifications</a>
        </div>

        <button className="px-5 py-2 text-xs font-mono uppercase tracking-wider text-emerald-300 bg-emerald-950/60 hover:bg-emerald-900/80 border border-emerald-500/40 rounded-lg backdrop-blur-md shadow-[0_0_15px_rgba(5,150,105,0.2)] hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all cursor-pointer">
          Launch Terminal
        </button>
      </nav>

      {/* Hero Section */}
      <header className="relative z-10 max-w-7xl mx-auto px-6 pt-16 pb-24 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="flex-1 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-emerald-500/30 bg-emerald-950/40 backdrop-blur-md mb-6">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-300">
              NEXT-GEN CYBORG PLATFORM
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-100 leading-[1.1]">
            Elevate Human Cognition with <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-green-300 to-teal-200">Cybernetic Precision.</span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-slate-400 leading-relaxed">
            SurveX seamlessly integrates autonomous neural telemetry, low-latency machine synchronization, and adaptive quantum processing into a unified cyborg interface.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
            <button className="w-full sm:w-auto px-8 py-3.5 text-xs font-mono uppercase tracking-widest font-semibold text-black bg-gradient-to-r from-emerald-400 to-teal-300 rounded-xl shadow-[0_0_25px_rgba(16,185,129,0.4)] hover:shadow-[0_0_35px_rgba(16,185,129,0.6)] hover:scale-[1.02] transition-all cursor-pointer">
              Initialize Neural Link
            </button>
            <button className="w-full sm:w-auto px-8 py-3.5 text-xs font-mono uppercase tracking-widest font-medium text-emerald-300 bg-slate-900/60 hover:bg-slate-900/90 border border-slate-800 hover:border-emerald-500/40 rounded-xl backdrop-blur-md transition-all cursor-pointer">
              Explore Specs
            </button>
          </div>
        </div>

        {/* Interactive Hologram Telemetry Box */}
        <div className="flex-1 w-full max-w-md bg-emerald-950/20 border border-emerald-500/30 rounded-2xl p-6 backdrop-blur-xl shadow-[0_0_50px_rgba(5,150,105,0.15)] relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />
          
          <div className="flex items-center justify-between pb-4 border-b border-emerald-900/60 text-xs font-mono text-emerald-400">
            <span>LIVE TELEMETRY</span>
            <span>SYSTEM // ACTIVE</span>
          </div>

          <div className="py-6 space-y-4 font-mono text-xs">
            <div className="flex justify-between items-center">
              <span className="text-slate-400">NEURAL HANDSHAKE</span>
              <span className="text-emerald-300 font-bold">99.98% SYNC</span>
            </div>
            <div className="w-full bg-slate-900 h-1.5 rounded-full overflow-hidden">
              <div className="bg-emerald-400 h-full w-[99.98%] shadow-[0_0_8px_#10b981]" />
            </div>

            <div className="flex justify-between items-center pt-2">
              <span className="text-slate-400">SIGNAL LATENCY</span>
              <span className="text-emerald-300 font-bold">0.82 ms</span>
            </div>
            <div className="w-full bg-slate-900 h-1.5 rounded-full overflow-hidden">
              <div className="bg-emerald-400 h-full w-[92%]" />
            </div>

            <div className="flex justify-between items-center pt-2">
              <span className="text-slate-400">CYBERNETIC NODES</span>
              <span className="text-emerald-300 font-bold">16,384 ONLINE</span>
            </div>
          </div>

          <div className="pt-4 border-t border-emerald-900/60 flex items-center justify-between text-[11px] font-mono text-emerald-500">
            <span>CORE STATUS: NOMINAL</span>
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
          </div>
        </div>
      </header>

      {/* Feature Cards Grid */}
      <section id="features" className="relative z-10 max-w-7xl mx-auto px-6 py-16 border-t border-emerald-900/30">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-slate-950/80 border border-emerald-900/40 hover:border-emerald-500/50 rounded-xl transition-all duration-300 group hover:shadow-[0_0_30px_rgba(5,150,105,0.15)]">
            <div className="h-10 w-10 rounded-lg bg-emerald-950/80 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-mono text-sm font-bold mb-4 group-hover:scale-110 transition-transform">
              01
            </div>
            <h3 className="text-lg font-bold text-slate-100 font-mono mb-2">Ultra-Low Latency</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Bi-directional neural handshake protocols delivering real-time sensory sync under 1 millisecond.
            </p>
          </div>

          <div className="p-6 bg-slate-950/80 border border-emerald-900/40 hover:border-emerald-500/50 rounded-xl transition-all duration-300 group hover:shadow-[0_0_30px_rgba(5,150,105,0.15)]">
            <div className="h-10 w-10 rounded-lg bg-emerald-950/80 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-mono text-sm font-bold mb-4 group-hover:scale-110 transition-transform">
              02
            </div>
            <h3 className="text-lg font-bold text-slate-100 font-mono mb-2">Quantum Mesh Security</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Zero-trust post-quantum encrypted channels shielding your cognitive data streams end-to-end.
            </p>
          </div>

          <div className="p-6 bg-slate-950/80 border border-emerald-900/40 hover:border-emerald-500/50 rounded-xl transition-all duration-300 group hover:shadow-[0_0_30px_rgba(5,150,105,0.15)]">
            <div className="h-10 w-10 rounded-lg bg-emerald-950/80 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-mono text-sm font-bold mb-4 group-hover:scale-110 transition-transform">
              03
            </div>
            <h3 className="text-lg font-bold text-slate-100 font-mono mb-2">Adaptive Bio-Cognition</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Self-optimizing AI models dynamically adjusting to user workload, fatigue, and focus states.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-emerald-950 py-8 text-center text-xs font-mono text-slate-500">
        <p>© 2026 SurveX Cybernetics. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default MainLanding;
