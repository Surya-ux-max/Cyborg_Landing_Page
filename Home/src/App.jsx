import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import IntroScene from './LandingPage/IntroScene';
import MainLanding from './LandingPage/MainLanding';

function App() {
  return (
    <div className="relative w-full min-h-screen bg-black">
      <Routes>
        <Route path="/" element={<IntroScene />} />
        <Route
          path="/home"
          element={
            <div className="relative w-full min-h-screen">
              <MainLanding />
              <Link
                to="/"
                className="fixed bottom-4 right-4 z-40 px-3.5 py-1.5 text-[11px] font-mono uppercase tracking-widest text-emerald-400 bg-emerald-950/80 hover:bg-emerald-900 border border-emerald-500/40 rounded-full backdrop-blur-md shadow-[0_0_15px_rgba(5,150,105,0.3)] transition-all cursor-pointer"
              >
                Replay Intro
              </Link>
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
