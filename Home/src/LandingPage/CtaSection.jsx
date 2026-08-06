import React from 'react';
import LetterGlitch from './LetterGlitch';

const CtaSection = () => {
  return (
    <section className="relative z-10 max-w-7xl mx-auto px-6 py-24 my-12">
      <div className="relative rounded-3xl bg-black border border-emerald-500/40 p-10 sm:p-20 text-center overflow-hidden shadow-[0_0_90px_rgba(5,150,105,0.25)] group">
        {/* Background LetterGlitch Canvas */}
        <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
          <LetterGlitch
            glitchColors={['#022c22', '#059669', '#10b981', '#a7f3d0']}
            glitchSpeed={45}
            centerVignette={true}
            outerVignette={true}
            smooth={true}
          />
        </div>

        {/* Ambient Radial Lighting */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-emerald-500/15 blur-[160px] rounded-full pointer-events-none" />

        {/* Status Badge */}
        <div className="relative z-10 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/40 bg-black/80 backdrop-blur-md mb-6">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-emerald-300 font-semibold">
            CYBERNETIC SYNCHRONIZATION READY
          </span>
        </div>

        {/* Headline */}
        <h2 className="relative z-10 text-4xl sm:text-6xl font-black font-mono text-slate-100 tracking-tight max-w-3xl mx-auto leading-tight">
          Ready to Synchronize Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-green-300 to-teal-200">Cognitive Potential?</span>
        </h2>

        {/* Subtitle */}
        <p className="relative z-10 mt-6 text-slate-300 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
          Join leading researchers and engineers deploying SurveX OS across next-generation cybernetic infrastructure.
        </p>

        {/* CTA Buttons */}
        <div className="relative z-10 mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="w-full sm:w-auto px-9 py-4 text-xs font-mono uppercase tracking-widest font-extrabold text-black bg-gradient-to-r from-emerald-400 to-teal-300 rounded-xl shadow-[0_0_35px_rgba(16,185,129,0.5)] hover:scale-105 transition-all cursor-pointer">
            Initialize Neural Link
          </button>
          <button className="w-full sm:w-auto px-9 py-4 text-xs font-mono uppercase tracking-widest font-bold text-emerald-300 bg-black/80 hover:bg-slate-950 border border-emerald-500/40 rounded-xl backdrop-blur-md hover:border-emerald-400 transition-all cursor-pointer">
            Schedule Integration Demo
          </button>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
