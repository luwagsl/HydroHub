import React from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { Footer } from './Footer';
import { Link, Outlet } from 'react-router-dom';

export function Layout() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative min-h-screen bg-hydro-black overflow-x-hidden selection:bg-hydro-green selection:text-hydro-black">
      {/* Scroll Progress Indicator */}
      <motion.div
        id="scroll-progress"
        className="fixed top-0 left-0 right-0 h-1 bg-hydro-green z-50 origin-left"
        style={{ scaleX }}
      />

      {/* Global Dithering Layer */}
      <div className="fixed inset-0 pointer-events-none z-[9999] mix-blend-overlay opacity-20">
        <svg width="100%" height="100%">
          <filter id="dither">
            <feTurbulence baseFrequency="0.8" />
            <feColorMatrix type="saturate" values="0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#dither)" />
        </svg>
      </div>

      <nav className="fixed top-0 left-0 w-full z-40 p-6 flex justify-between items-center pointer-events-none">
        <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-display font-black uppercase italic pointer-events-auto cursor-pointer"
        >
            <Link to="/">
                Hydro<span className="text-hydro-green">Hub.</span>
            </Link>
        </motion.div>
        
        <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex gap-4 pointer-events-auto"
        >
            <Link to="/registry" className="px-5 py-2 border border-white/20 uppercase text-[10px] font-bold tracking-widest hover:bg-white hover:text-hydro-black transition-all flex items-center justify-center">
                Registry
            </Link>
            <Link to="/connect" className="px-5 py-2 bg-hydro-green text-hydro-black uppercase text-[10px] font-black tracking-widest hover:scale-105 transition-transform flex items-center justify-center">
                Connect Lab
            </Link>
        </motion.div>
      </nav>

      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
