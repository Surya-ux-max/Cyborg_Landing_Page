import React, { useState } from 'react';
import PixelBlast from './PixelBlast';
import LiquidTextCapabilities from './LiquidTextCapabilities';

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

      {/* Hero Section */}
      <header className="relative z-10 max-w-7xl mx-auto px-6 pt-12 pb-24 flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="flex-1 max-w-2xl text-center lg:text-left">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-950/60 backdrop-blur-md mb-6 shadow-[0_0_15px_rgba(5,150,105,0.25)]">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-300">
              SURVEX OS // NEURAL SYNTHESIS ENGINE
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-100 leading-[1.1]">
            Elevate Human Cognition with <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-green-300 to-teal-200">Cybernetic Precision.</span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-slate-400 leading-relaxed">
            SurveX seamlessly integrates autonomous neural telemetry, low-latency machine synchronization, and adaptive quantum processing into a unified cyborg interface.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <button className="w-full sm:w-auto px-8 py-3.5 text-xs font-mono uppercase tracking-widest font-semibold text-black bg-gradient-to-r from-emerald-400 to-teal-300 rounded-xl shadow-[0_0_25px_rgba(16,185,129,0.4)] hover:shadow-[0_0_35px_rgba(16,185,129,0.6)] hover:scale-[1.02] transition-all cursor-pointer">
              Initialize Neural Link
            </button>
            <a href="#specs" className="w-full sm:w-auto px-8 py-3.5 text-xs font-mono uppercase tracking-widest font-medium text-emerald-300 bg-slate-900/60 hover:bg-slate-900/90 border border-slate-800 hover:border-emerald-500/40 rounded-xl backdrop-blur-md transition-all cursor-pointer text-center">
              Explore Specs
            </a>
          </div>
        </div>

        {/* Modern Cybernetic Interactive Interface Showcase */}
        <div className="flex-1 w-full max-w-lg bg-slate-950/80 border border-emerald-500/30 rounded-3xl p-6 backdrop-blur-2xl shadow-[0_0_60px_rgba(5,150,105,0.2)] relative overflow-hidden group">
          {/* Subtle PixelBlast Effect inside Showcase */}
          <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
            <PixelBlast
              variant="diamond"
              pixelSize={4}
              color="#059669"
              patternScale={2}
              patternDensity={1}
              liquid={false}
              enableRipples={true}
              speed={0.4}
              edgeFade={0.1}
            />
          </div>

          <div className="relative z-10 space-y-6">
            {/* Top Bar Header */}
            <div className="flex items-center justify-between pb-4 border-b border-emerald-900/60">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <div className="w-3 h-3 rounded-full bg-teal-500/40" />
                <div className="w-3 h-3 rounded-full bg-green-500/20" />
              </div>
              <span className="text-xs font-mono tracking-widest text-emerald-400 uppercase bg-emerald-950/80 px-3 py-1 rounded-full border border-emerald-500/30">
                Cybernetic Hub v4.2
              </span>
            </div>

            {/* Neural Audio / Frequency Waveform Visualizer */}
            <div className="bg-black/50 border border-emerald-900/50 rounded-2xl p-5 space-y-3">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-slate-400">Cognitive Stream Output</span>
                <span className="text-emerald-400 font-bold">120 Hz Active</span>
              </div>
              <div className="flex items-end justify-between h-14 gap-1.5 px-2">
                {[40, 65, 30, 85, 95, 45, 70, 90, 60, 100, 75, 50, 80, 65, 40].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 bg-gradient-to-t from-emerald-600 to-teal-300 rounded-t transition-all duration-300 animate-pulse"
                    style={{ height: `${h}%`, animationDelay: `${i * 0.1}s` }}
                  />
                ))}
              </div>
            </div>

            {/* Modern Metrics Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-black/40 border border-emerald-900/40 rounded-xl p-4">
                <div className="text-[11px] font-mono text-slate-400 uppercase">Throughput</div>
                <div className="text-xl font-extrabold text-emerald-300 font-mono mt-1">4.8 GB/s</div>
                <div className="text-[10px] text-emerald-500 font-mono mt-1">↑ 12% Optimized</div>
              </div>

              <div className="bg-black/40 border border-emerald-900/40 rounded-xl p-4">
                <div className="text-[11px] font-mono text-slate-400 uppercase">Mesh Health</div>
                <div className="text-xl font-extrabold text-emerald-300 font-mono mt-1">100% Secure</div>
                <div className="text-[10px] text-emerald-500 font-mono mt-1">Quantum Encryption</div>
              </div>
            </div>

            {/* Action Bar Indicator */}
            <div className="pt-2 flex items-center justify-between text-xs font-mono text-emerald-400">
              <span className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                Interface Synchronized
              </span>
              <a href="#mesh" className="text-[11px] uppercase tracking-wider text-emerald-300 hover:text-white underline underline-offset-4 cursor-pointer">
                View Diagnostics →
              </a>
            </div>
          </div>
        </div>
      </header>

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
