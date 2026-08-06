import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DepthText from './DepthText';
import MoltenMetal from './MoltenMetal';

const IntroScene = ({ onComplete }) => {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const startTime = Date.now();
    const duration = 3000; // 3 seconds

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const currentProgress = Math.min(100, (elapsed / duration) * 100);
      setProgress(currentProgress);

      if (elapsed >= duration) {
        clearInterval(interval);
        handleExit();
      }
    }, 16);

    return () => clearInterval(interval);
  }, []);

  const handleExit = () => {
    if (isExiting) return;
    setIsExiting(true);
    setTimeout(() => {
      if (onComplete) onComplete();
      navigate('/home');
    }, 700); // Allow clip-path transition to complete
  };

  return (
    <div 
      className={`fixed inset-0 z-50 bg-black text-emerald-50 flex flex-col items-center justify-center overflow-hidden transition-all duration-700 ease-in-out ${
        isExiting ? 'scale-105 opacity-0' : 'opacity-100'
      }`}
      style={{
        clipPath: isExiting 
          ? 'polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)' 
          : 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
        transition: 'clip-path 700ms cubic-bezier(0.77, 0, 0.175, 1), opacity 700ms ease, transform 700ms ease'
      }}
    >
      {/* Molten Metal Shader Background - Green Theme */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-80">
        <MoltenMetal
          color1="#022c22"
          color2="#059669"
          color3="#a7f3d0"
          speed={0.35}
          scale={4}
          detail={3}
          glow={1.6}
          coreSize={0.1}
          swirl={1}
          fold={-0.2}
          blackPoint={0.05}
          brightness={1.3}
          colorMode="molten"
          grain={true}
          grainIntensity={0.05}
          mouseInteraction={true}
          mouseStrength={0.3}
          opacity={0.85}
        />
      </div>

      {/* Cyber Grid Background */}
      <div className="absolute inset-0 z-1 bg-[linear-gradient(to_right,#05966915_1px,transparent_1px),linear-gradient(to_bottom,#05966915_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_75%_65%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />
      
      {/* Green Ambient Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-emerald-500/20 blur-[160px] rounded-full pointer-events-none animate-pulse z-1" style={{ animationDuration: '4s' }} />

      {/* Intro Center Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
        {/* Brand Subtitle Pill */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-emerald-500/40 bg-black/70 backdrop-blur-md mb-6 shadow-[0_0_25px_rgba(5,150,105,0.4)]">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-emerald-300 font-semibold">
            SurveX // Cyborg
          </span>
        </div>

        {/* 3D Depth Brand Name */}
        <div className="my-2 py-4 cursor-pointer" onClick={handleExit}>
          <DepthText
            text="SurveX"
            layers={36}
            depth={2.8}
            faceColor="#ecfdf5"
            depthColor="#059669"
            tilt={8}
            pointerTracking
            smoothing={0.14}
            perspective={900}
            autoOrbit
            orbitSpeed={0.35}
            fontSize="clamp(4rem, 16vw, 9.5rem)"
            fontWeight={900}
            shadow
          />
        </div>

        {/* Cyber Tagline */}
        <p className="text-xs sm:text-sm font-mono tracking-widest text-emerald-400/90 uppercase mt-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
          Autonomous Cybernetic Intelligence
        </p>

        {/* Manual Skip Hint */}
        <button 
          onClick={handleExit}
          className="mt-8 text-[11px] font-mono tracking-widest text-slate-400 hover:text-emerald-300 transition-colors uppercase cursor-pointer"
        >
          [ Click to Skip ]
        </button>
      </div>

      {/* 3-Second Progress Bar at Bottom */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-emerald-950/80 z-20">
        <div 
          className="h-full bg-gradient-to-r from-emerald-600 via-emerald-400 to-green-300 shadow-[0_0_12px_#10b981] transition-all duration-75 ease-linear"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

export default IntroScene;
