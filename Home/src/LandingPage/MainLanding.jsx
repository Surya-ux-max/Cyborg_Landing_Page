import React, { useState } from 'react';
import PixelBlast from './PixelBlast';
import HeroSection from './HeroSection';
import LiquidTextCapabilities from './LiquidTextCapabilities';
import SecuritySection from './SecuritySection';

const MainLanding = () => {
  const [activeSpecTab, setActiveSpecTab] = useState('processing');

  const specsData = {
    processing: [
      { label: 'Neural Cores', value: '16,384 Parallel Quantum Units' },
      { label: 'Clock Frequency', value: '4.8 GHz Base / 6.2 GHz Boost' },
      { label: 'Cache Hierarchy', value: '128MB L1 / 1GB Neural L2' },
      { label: 'Model Capacity', value: '700B Parameters Real-Time' }
    ],
    telemetry: [
      { label: 'Bi-Directional Latency', value: '< 0.82 ms Handshake' },
      { label: 'Signal Bandwidth', value: '120 Gbps Direct Neural Stream' },
      { label: 'Packet Error Rate', value: '< 0.00001% Zero-Loss' },
      { label: 'Sampling Rate', value: '100,000 Hz Continuous' }
    ],
    security: [
      { label: 'Encryption Protocol', value: 'Kyber-1024 / Dilithium V4' },
      { label: 'Key Rotation', value: 'Continuous Per-Handshake' },
      { label: 'Mesh Isolation', value: 'Hardware Air-Gapped Sandbox' },
      { label: 'Authentication', value: 'Biometric Neural Signature' }
    ]
  };

  return (
    <div className="relative min-h-screen w-full bg-black text-emerald-50 selection:bg-emerald-500 selection:text-black overflow-x-hidden">
      {/* Interactive PixelBlast Background for Hero Section */}
      <div className="absolute inset-0 z-0 h-[900px] pointer-events-auto opacity-35">
        <PixelBlast
          variant="circle"
          pixelSize={6}
          color="#10b981"
          patternScale={3}
          patternDensity={1.2}
          pixelSizeJitter={0.5}
          enableRipples={true}
          rippleSpeed={0.4}
          rippleThickness={0.12}
          rippleIntensityScale={1.5}
          liquid={true}
          liquidStrength={0.12}
          liquidRadius={1.2}
          liquidWobbleSpeed={5}
          speed={0.6}
          edgeFade={0.35}
          transparent={true}
        />
      </div>

      {/* Ambient Grid Overlay */}
      <div className="absolute inset-0 z-1 bg-[linear-gradient(to_right,#05966910_1px,transparent_1px),linear-gradient(to_bottom,#05966910_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Glow Orbs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-emerald-500/15 blur-[180px] rounded-full pointer-events-none" />

      {/* Navbar */}
      <nav className="relative z-20 w-full max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center space-x-3 cursor-pointer">
          <div className="h-4 w-4 rounded bg-emerald-500 shadow-[0_0_12px_#10b981]" />
          <span className="text-lg font-bold font-mono tracking-wider text-emerald-100">
            SurveX <span className="text-emerald-400 font-normal text-sm">// CYBORG</span>
          </span>
        </div>

        <div className="hidden md:flex items-center space-x-8 text-xs font-mono tracking-widest text-slate-400 uppercase">
          <a href="#capabilities" className="hover:text-emerald-400 transition-colors">Capabilities</a>
          <a href="#mesh" className="hover:text-emerald-400 transition-colors">Neural Mesh</a>
          <a href="#security" className="hover:text-emerald-400 transition-colors">Security</a>
          <a href="#specs" className="hover:text-emerald-400 transition-colors">Specifications</a>
        </div>

        <button className="px-6 py-2.5 text-xs font-mono uppercase tracking-wider text-black font-semibold bg-gradient-to-r from-emerald-400 to-teal-300 hover:from-emerald-300 hover:to-teal-200 rounded-lg shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] hover:scale-[1.02] transition-all cursor-pointer">
          Get Early Access
        </button>
      </nav>

      {/* Modular Hero Section */}
      <HeroSection />

      {/* Scroll-Driven Liquid Text Capabilities Section */}
      <LiquidTextCapabilities />

      {/* Neural Mesh Section */}
      <section id="mesh" className="relative z-10 max-w-7xl mx-auto px-6 py-24 border-t border-emerald-900/30">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-1 max-w-xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-emerald-500/30 bg-emerald-950/60 backdrop-blur-md mb-4">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-mono uppercase tracking-widest text-emerald-300">
                02 // AUTONOMOUS MESH
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-100 tracking-tight">
              Self-Healing <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">Neural Mesh Architecture.</span>
            </h2>
            <p className="mt-4 text-slate-400 text-base leading-relaxed">
              SurveX continuously balances neural traffic across thousands of distributed cybernetic nodes, ensuring zero downtime, automatic failover, and instantaneous data routing.
            </p>
          </div>

          {/* Neural Node Grid Showcase */}
          <div className="flex-1 w-full grid grid-cols-2 gap-4">
            {[
              { node: 'NODE ALPHA', lat: '0.42 ms', status: 'ACTIVE', load: '32%' },
              { node: 'NODE BETA', lat: '0.55 ms', status: 'SYNCED', load: '48%' },
              { node: 'NODE GAMMA', lat: '0.38 ms', status: 'OPTIMAL', load: '28%' },
              { node: 'NODE DELTA', lat: '0.61 ms', status: 'ACTIVE', load: '52%' }
            ].map((n, i) => (
              <div key={i} className="bg-slate-950/90 border border-emerald-900/40 hover:border-emerald-500/40 rounded-2xl p-5 backdrop-blur-md transition-all group">
                <div className="flex items-center justify-between text-xs font-mono text-emerald-400">
                  <span>{n.node}</span>
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                </div>
                <div className="text-lg font-mono font-bold text-slate-100 mt-3">{n.lat}</div>
                <div className="flex justify-between items-center text-[10px] font-mono text-slate-500 mt-2">
                  <span>STATUS: {n.status}</span>
                  <span>LOAD: {n.load}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Standing Unbroken Security Section */}
      <SecuritySection />

      {/* Specifications Section */}
      <section id="specs" className="relative z-10 max-w-7xl mx-auto px-6 py-24 border-t border-emerald-900/30">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-emerald-500/30 bg-emerald-950/60 backdrop-blur-md mb-4">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-300">
              TECHNICAL SPECIFICATIONS
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-100">
            Hardware & <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">Protocol Specs.</span>
          </h2>
        </div>

        {/* Tab Controls */}
        <div className="flex justify-center gap-3 mb-8">
          {[
            { id: 'processing', label: 'Processing' },
            { id: 'telemetry', label: 'Telemetry' },
            { id: 'security', label: 'Security' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveSpecTab(tab.id)}
              className={`px-5 py-2.5 rounded-xl text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
                activeSpecTab === tab.id
                  ? 'bg-emerald-500 text-black font-bold shadow-[0_0_20px_rgba(16,185,129,0.4)]'
                  : 'bg-slate-900/70 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Specs Matrix */}
        <div className="max-w-3xl mx-auto bg-slate-950/90 border border-emerald-900/40 rounded-3xl p-6 sm:p-8 backdrop-blur-xl divide-y divide-emerald-950">
          {specsData[activeSpecTab].map((row, idx) => (
            <div key={idx} className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <span className="text-xs font-mono text-slate-400 uppercase">{row.label}</span>
              <span className="text-sm font-mono font-bold text-emerald-300">{row.value}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-24 my-12">
        <div className="relative rounded-3xl bg-gradient-to-b from-emerald-950/40 to-slate-950 border border-emerald-500/30 p-10 sm:p-16 text-center overflow-hidden shadow-[0_0_80px_rgba(5,150,105,0.15)]">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-emerald-500/10 blur-[140px] rounded-full pointer-events-none" />

          <h2 className="relative z-10 text-3xl sm:text-5xl font-extrabold text-slate-100 tracking-tight max-w-2xl mx-auto">
            Ready to Synchronize Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">Cognitive Potential?</span>
          </h2>
          <p className="relative z-10 mt-4 text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
            Join leading researchers and engineers deploying SurveX OS across next-generation cybernetic infrastructure.
          </p>

          <div className="relative z-10 mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto px-8 py-4 text-xs font-mono uppercase tracking-widest font-bold text-black bg-gradient-to-r from-emerald-400 to-teal-300 rounded-xl shadow-[0_0_30px_rgba(16,185,129,0.5)] hover:scale-105 transition-all cursor-pointer">
              Initialize Neural Link
            </button>
            <button className="w-full sm:w-auto px-8 py-4 text-xs font-mono uppercase tracking-widest font-medium text-emerald-300 bg-slate-900/80 hover:bg-slate-900 border border-emerald-500/30 rounded-xl backdrop-blur-md transition-all cursor-pointer">
              Schedule Integration Demo
            </button>
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
