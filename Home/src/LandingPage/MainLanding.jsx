import React, { useState } from 'react';
import ForgeHeroSection from './ForgeHeroSection';
import LiquidTextCapabilities from './LiquidTextCapabilities';
import SecuritySection from './SecuritySection';
import CtaSection from './CtaSection';

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
      {/* Reimagined Hero Section matching Reference UI */}
      <ForgeHeroSection />

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

      {/* CTA Section with LetterGlitch Background */}
      <CtaSection />

      {/* Footer */}
      <footer className="relative z-10 border-t border-emerald-950 py-8 text-center text-xs font-mono text-slate-500">
        <p>© 2026 SurveX Cybernetics. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default MainLanding;
