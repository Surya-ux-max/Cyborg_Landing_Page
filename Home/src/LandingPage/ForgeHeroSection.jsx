import React from 'react';
import CyberGlobe from './CyberGlobe';
import PixelBlast from './PixelBlast';

const ForgeHeroSection = () => {
  return (
    <div className="relative w-full min-h-screen bg-[#030d0a] text-slate-100 selection:bg-emerald-500 selection:text-black overflow-hidden flex flex-col justify-between font-sans">
      {/* Background PixelBlast Canvas Effect */}
      <div className="absolute inset-0 z-0 opacity-25 pointer-events-auto">
        <PixelBlast
          variant="circle"
          pixelSize={5}
          color="#059669"
          patternScale={3}
          patternDensity={1}
          liquid={true}
          enableRipples={true}
          speed={0.4}
          edgeFade={0.4}
          transparent={true}
        />
      </div>

      {/* Radial Green Ambient Light Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-emerald-600/15 blur-[200px] rounded-full pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-teal-500/10 blur-[160px] rounded-full pointer-events-none" />

      {/* Top Navbar */}
      <header className="relative z-20 w-full max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        {/* Brand Logo */}
        <div className="flex items-center space-x-3 cursor-pointer">
          <div className="h-6 w-6 rounded border-2 border-emerald-400 flex items-center justify-center bg-emerald-950/80">
            <div className="w-2 h-2 bg-emerald-400 transform rotate-45" />
          </div>
          <span className="text-xl font-bold font-mono tracking-wider text-slate-100">
            SurveX <span className="text-emerald-400 font-normal text-sm">// CYBORG</span>
          </span>
        </div>

        {/* Center Nav Links with Active Dots */}
        <nav className="hidden md:flex items-center space-x-10 text-xs font-mono tracking-widest text-slate-300 uppercase">
          <div className="flex flex-col items-center space-y-1">
            <a href="#about" className="hover:text-emerald-400 transition-colors font-semibold">About Us</a>
            <span className="w-1.5 h-1.5 bg-emerald-400 rounded-sm" />
          </div>
          <div className="flex flex-col items-center space-y-1">
            <a href="#capabilities" className="hover:text-emerald-400 transition-colors">Features</a>
            <span className="w-1.5 h-1.5 bg-slate-700 rounded-sm" />
          </div>
          <div className="flex flex-col items-center space-y-1">
            <a href="#security" className="hover:text-emerald-400 transition-colors">Security</a>
            <span className="w-1.5 h-1.5 bg-slate-700 rounded-sm" />
          </div>
          <div className="flex flex-col items-center space-y-1">
            <a href="#specs" className="hover:text-emerald-400 transition-colors">Contact</a>
            <span className="w-1.5 h-1.5 bg-slate-700 rounded-sm" />
          </div>
        </nav>

        {/* Right Action Button with Phone Icon */}
        <button className="px-6 py-2.5 text-xs font-mono uppercase tracking-wider text-black font-extrabold bg-gradient-to-r from-emerald-400 to-teal-300 hover:from-emerald-300 hover:to-teal-200 rounded-full shadow-[0_0_20px_rgba(16,185,129,0.4)] flex items-center space-x-2 transition-all cursor-pointer">
          <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.27c1.21.49 2.53.76 3.88.76a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.35.27 2.67.76 3.88a1 1 0 01-.27 1.11l-2.37 2.4z" />
          </svg>
          <span>+1 800-SURVEX</span>
        </button>
      </header>

      {/* Main Hero Container */}
      <main className="relative z-10 w-full max-w-7xl mx-auto px-6 py-8 flex-1 flex flex-col justify-between">
        {/* Starburst Top Right Corner */}
        <div className="absolute top-4 right-12 text-emerald-400 opacity-80 animate-pulse pointer-events-none">
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
          </svg>
        </div>

        {/* Center 3D Globe Visualizer */}
        <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
          <div className="w-[500px] h-[500px] sm:w-[650px] sm:h-[650px]">
            <CyberGlobe />
          </div>
        </div>

        {/* Main Content Layout Grid */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center h-full min-h-[500px]">
          {/* Left Column Copy & Starburst */}
          <div className="md:col-span-4 space-y-6 self-center">
            {/* 8-Point Starburst Icon */}
            <div className="text-emerald-400">
              <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
              </svg>
            </div>

            <p className="text-sm sm:text-base text-slate-300 font-medium leading-relaxed max-w-xs">
              Empowering you to enhance, extend, and evolve with technology like never before.
            </p>

            {/* Team Avatar Glassmorphic Card */}
            <div className="mt-8 p-4 bg-emerald-950/40 border border-emerald-500/30 rounded-2xl backdrop-blur-xl max-w-xs shadow-[0_0_30px_rgba(5,150,105,0.15)]">
              <div className="flex items-center -space-x-3 mb-3">
                <img className="w-10 h-10 rounded-full border-2 border-emerald-400 object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80" alt="Team 1" />
                <img className="w-10 h-10 rounded-full border-2 border-emerald-400 object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80" alt="Team 2" />
                <img className="w-10 h-10 rounded-full border-2 border-emerald-400 object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80" alt="Team 3" />
              </div>
              <p className="text-xs text-slate-300 leading-snug">
                Empowering you to enhance, extend, and evolve with technology like never before.
              </p>
            </div>
          </div>

          {/* Central Massive Title Over Globe */}
          <div className="md:col-span-8 flex flex-col items-center justify-center text-center py-6">
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tighter uppercase font-mono leading-[0.95] text-slate-100 drop-shadow-[0_10px_30px_rgba(0,0,0,0.9)] select-none">
              CYBERNETICS
              <br />
              <span className="text-slate-100">REIMAGINED</span>
            </h1>

            {/* Callout Pointer Button over Globe */}
            <div className="mt-12 flex items-center space-x-4 bg-emerald-950/60 border border-emerald-500/40 rounded-2xl p-3 backdrop-blur-xl shadow-[0_0_30px_rgba(5,150,105,0.3)]">
              <span className="text-xs font-mono text-slate-300 px-2">Across devices, platforms, and tools</span>
              <button className="px-5 py-2 text-xs font-mono font-extrabold uppercase tracking-wider text-black bg-gradient-to-r from-emerald-400 to-teal-300 rounded-xl shadow-[0_0_15px_#10b981] hover:scale-105 transition-all cursor-pointer">
                Get Started
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Right Key Stats */}
        <div className="relative z-10 flex flex-col sm:flex-row items-end justify-end gap-12 pb-6 pt-8">
          <div className="text-right">
            <div className="text-2xl sm:text-3xl font-mono font-black text-slate-100">500,000+</div>
            <div className="text-xs font-mono text-emerald-400 uppercase font-bold tracking-wider">INTEGRATIONS</div>
            <div className="text-[11px] text-slate-400 mt-0.5">Across devices, platforms, and tools</div>
          </div>

          <div className="text-right border-l border-emerald-900/60 pl-8">
            <div className="text-2xl sm:text-3xl font-mono font-black text-slate-100">20x POWER</div>
            <div className="text-xs font-mono text-emerald-400 uppercase font-bold tracking-wider">EFFICIENCY</div>
            <div className="text-[11px] text-slate-400 mt-0.5">Operates on edge, not hardware-bound</div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ForgeHeroSection;
