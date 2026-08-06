import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const SecuritySection = () => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [hoverPos, setHoverPos] = useState({ x: 0, y: 0 });
  const [isAttackRunning, setIsAttackRunning] = useState(false);
  const [attackTimeLeft, setAttackTimeLeft] = useState(4);
  const [hasAutoTriggered, setHasAutoTriggered] = useState(false);

  // Scroll Progress
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 25,
    restDelta: 0.001
  });

  // Camera Shake & Screen Illumination during attack
  const shakeX = useSpring(0, { stiffness: 300, damping: 15 });
  const shakeY = useSpring(0, { stiffness: 300, damping: 15 });
  const [flashOpacity, setFlashOpacity] = useState(0);

  // Auto-trigger 4-second attack sequence when scrolled into view
  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (latest) => {
      if (latest > 0.3 && latest < 0.8 && !hasAutoTriggered && !isAttackRunning) {
        startFourSecondAttack();
        setHasAutoTriggered(true);
      }
    });
    return () => unsubscribe();
  }, [scrollYProgress, hasAutoTriggered, isAttackRunning]);

  // Start 4-Second Attack Function
  const startFourSecondAttack = () => {
    setIsAttackRunning(true);
    setAttackTimeLeft(4);

    const startTime = Date.now();
    const duration = 4000; // 4 seconds

    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const remaining = Math.max(0, Math.ceil((duration - elapsed) / 1000));
      setAttackTimeLeft(remaining);

      if (elapsed >= duration) {
        clearInterval(timer);
        setIsAttackRunning(false);
        shakeX.set(0);
        shakeY.set(0);
        setFlashOpacity(0);
      }
    }, 100);
  };

  // Canvas Procedural 4-Second Lightning Engine
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const setCanvasSize = () => {
      canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      canvas.height = canvas.parentElement?.clientHeight || 650;
    };
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // Particle & Shockwave Arrays
    const particles = [];
    const shockwaves = [];

    const createImpact = (x, y) => {
      // Screen Flash
      setFlashOpacity(0.35 + Math.random() * 0.25);
      setTimeout(() => setFlashOpacity(0), 80);

      // Camera Shake
      shakeX.set((Math.random() - 0.5) * 16);
      shakeY.set((Math.random() - 0.5) * 16);

      // Shockwave Ring
      shockwaves.push({ x, y, r: 5, maxR: 120, opacity: 1 });

      // Sparks
      for (let i = 0; i < 14; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = 3 + Math.random() * 8;
        particles.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          life: 1,
          decay: 0.02 + Math.random() * 0.03,
          size: 1.5 + Math.random() * 3,
          color: Math.random() > 0.4 ? '#a7f3d0' : '#10b981'
        });
      }
    };

    // Recursive Lightning Bolt Generator
    const drawLightningBranch = (x1, y1, x2, y2, displacement, depth = 0) => {
      if (displacement < 6 || depth > 5) {
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
        return;
      }
      const midX = (x1 + x2) / 2 + (Math.random() - 0.5) * displacement;
      const midY = (y1 + y2) / 2 + (Math.random() - 0.5) * displacement;
      drawLightningBranch(x1, y1, midX, midY, displacement / 1.8, depth + 1);
      drawLightningBranch(midX, midY, x2, y2, displacement / 1.8, depth + 1);
    };

    let frameCount = 0;

    const render = () => {
      frameCount++;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const w = canvas.width;
      const h = canvas.height;
      const targetX = w / 2;
      const targetY = h / 2;

      // 4-Second Active Attack Strikes
      if (isAttackRunning && Math.random() < 0.65) {
        ctx.save();
        const colors = ['#10b981', '#34d399', '#6ee7b7', '#ecfdf5'];
        ctx.strokeStyle = colors[Math.floor(Math.random() * colors.length)];
        ctx.shadowColor = '#059669';
        ctx.shadowBlur = 25;
        ctx.lineWidth = 2 + Math.random() * 3;

        // Originates from multi-directional screen boundaries
        const side = Math.floor(Math.random() * 4);
        let startX = Math.random() * w;
        let startY = 0;
        if (side === 1) { startX = w; startY = Math.random() * h; }
        if (side === 2) { startX = Math.random() * w; startY = h; }
        if (side === 3) { startX = 0; startY = Math.random() * h; }

        const hitX = targetX + (Math.random() - 0.5) * 380;
        const hitY = targetY + (Math.random() - 0.5) * 80;

        drawLightningBranch(startX, startY, hitX, hitY, 80);
        ctx.restore();

        createImpact(hitX, hitY);
      }

      // Render Expanding Shockwaves
      for (let i = shockwaves.length - 1; i >= 0; i--) {
        const sw = shockwaves[i];
        sw.r += 6;
        sw.opacity -= 0.04;

        if (sw.opacity <= 0 || sw.r >= sw.maxR) {
          shockwaves.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.strokeStyle = `rgba(52, 211, 153, ${sw.opacity})`;
        ctx.lineWidth = 2;
        ctx.shadowColor = '#10b981';
        ctx.shadowBlur = 15;
        ctx.beginPath();
        ctx.arc(sw.x, sw.y, sw.r, 0, Math.PI * 2);
        ctx.stroke();
        ctx.restore();
      }

      // Render Flying Spark Particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.life -= p.decay;

        if (p.life <= 0) {
          particles.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.fillStyle = p.color;
        ctx.shadowColor = '#10b981';
        ctx.shadowBlur = 12;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * p.life, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      // Ambient Defense Glow Particles when idle
      if (!isAttackRunning && frameCount % 3 === 0) {
        ctx.fillStyle = 'rgba(16, 185, 129, 0.2)';
        ctx.beginPath();
        ctx.arc(Math.random() * w, Math.random() * h, 1 + Math.random() * 2, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isAttackRunning]);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setHoverPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  return (
    <section
      ref={containerRef}
      id="security"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative w-full min-h-screen bg-black text-emerald-50 py-32 overflow-hidden flex flex-col items-center justify-center select-none border-t border-emerald-900/30"
    >
      {/* Screen Illumination Flash Overlay */}
      <div
        className="absolute inset-0 z-0 bg-emerald-400/25 pointer-events-none mix-blend-screen transition-opacity duration-75"
        style={{ opacity: flashOpacity }}
      />

      {/* Cyber Grid Background */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#05966912_1px,transparent_1px),linear-gradient(to_bottom,#05966912_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_75%_65%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Canvas Layer for 4-Second Lightning Attacks */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-10 w-full h-full pointer-events-none"
      />

      {/* Hover Shield Micro-Interaction Pulse */}
      {isHovered && (
        <div
          className="absolute z-15 w-56 h-56 rounded-full border border-emerald-400/40 bg-emerald-500/10 blur-xl pointer-events-none transition-transform duration-100 ease-out transform -translate-x-1/2 -translate-y-1/2"
          style={{ left: hoverPos.x, top: hoverPos.y }}
        />
      )}

      {/* Main Cinematic Title Container with Camera Shake */}
      <motion.div
        className="relative z-20 text-center px-4 flex flex-col items-center justify-center max-w-6xl mx-auto"
        style={{ x: shakeX, y: shakeY }}
      >
        {/* Status Header Badge & 4-Second Attack Control */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-8">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-emerald-500/40 bg-emerald-950/70 backdrop-blur-md shadow-[0_0_20px_rgba(5,150,105,0.3)]">
            <span className={`h-2.5 w-2.5 rounded-full ${isAttackRunning ? 'bg-emerald-400 animate-ping' : 'bg-emerald-500'}`} />
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-emerald-300 font-semibold">
              {isAttackRunning ? `UNDER 4s ASSAULT // ${attackTimeLeft}s` : 'SECURITY // STANDING UNBROKEN'}
            </span>
          </div>

          <button
            onClick={startFourSecondAttack}
            disabled={isAttackRunning}
            className="px-4 py-1.5 text-xs font-mono uppercase tracking-wider text-black font-bold bg-gradient-to-r from-emerald-400 to-teal-300 hover:from-emerald-300 hover:to-teal-200 rounded-full shadow-[0_0_15px_rgba(16,185,129,0.3)] transition-all cursor-pointer disabled:opacity-50"
          >
            {isAttackRunning ? `Attack Active (${attackTimeLeft}s)` : 'Trigger 4s Lightning Assault ⚡'}
          </button>
        </div>

        {/* Dynamic Bold Title: SECURITY */}
        <div className="relative my-4 py-2 group cursor-crosshair">
          {/* Defensive Hexagonal Energy Shield Grid behind Text */}
          <div
            className={`absolute inset-0 z-0 bg-[radial-gradient(#10b981_1.5px,transparent_1.5px)] bg-[size:16px_16px] rounded-3xl pointer-events-none transition-opacity duration-300 ${
              isAttackRunning ? 'opacity-70 animate-pulse' : 'opacity-30'
            }`}
          />

          <h1 className={`relative z-10 text-6xl sm:text-8xl md:text-9xl font-black font-mono tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-slate-100 via-emerald-300 to-emerald-600 transition-all duration-300 ${
            isAttackRunning ? 'drop-shadow-[0_0_60px_rgba(16,185,129,0.9)] scale-[1.02]' : 'drop-shadow-[0_0_45px_rgba(5,150,105,0.6)]'
          }`}>
            SECURITY
          </h1>

          {/* Glowing Fortified Aura */}
          <div
            className={`absolute inset-0 z-5 bg-gradient-to-r from-emerald-500/30 via-teal-400/40 to-green-500/30 blur-3xl rounded-full pointer-events-none transition-opacity duration-300 ${
              isAttackRunning ? 'opacity-100 scale-110' : 'opacity-40'
            }`}
          />
        </div>

        {/* Narrative Subtitle */}
        <p className="mt-6 text-base sm:text-xl text-slate-300 font-medium max-w-2xl leading-relaxed">
          Relentlessly assaulted by digital threats, post-quantum vectors, and zero-day strikes—<span className="text-emerald-400 font-bold font-mono">SurveX Security never breaks.</span>
        </p>

        {/* Defense Metrics Bar */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl">
          <div className="bg-slate-950/80 border border-emerald-900/50 rounded-2xl p-5 backdrop-blur-md hover:border-emerald-500/40 transition-all">
            <div className="text-xs font-mono text-emerald-500 uppercase">ATTACKS DEFENDED</div>
            <div className="text-2xl font-mono font-black text-emerald-300 mt-1">100% INTENDED</div>
          </div>
          <div className="bg-slate-950/80 border border-emerald-900/50 rounded-2xl p-5 backdrop-blur-md hover:border-emerald-500/40 transition-all">
            <div className="text-xs font-mono text-emerald-500 uppercase">CORE BREACHES</div>
            <div className="text-2xl font-mono font-black text-emerald-300 mt-1">0 ZERO</div>
          </div>
          <div className="bg-slate-950/80 border border-emerald-900/50 rounded-2xl p-5 backdrop-blur-md hover:border-emerald-500/40 transition-all">
            <div className="text-xs font-mono text-emerald-500 uppercase">SHIELD STATUS</div>
            <div className="text-2xl font-mono font-black text-emerald-300 mt-1">UNBROKEN</div>
          </div>
          <div className="bg-slate-950/80 border border-emerald-900/50 rounded-2xl p-5 backdrop-blur-md hover:border-emerald-500/40 transition-all">
            <div className="text-xs font-mono text-emerald-500 uppercase">CRYPTO ENGINE</div>
            <div className="text-2xl font-mono font-black text-emerald-300 mt-1">KYBER-1024</div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default SecuritySection;
