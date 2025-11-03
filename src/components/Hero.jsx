import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Waves } from 'lucide-react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-[#0E0E1A] via-[#1F1C2C] to-[#23293E] text-white">
      {/* Spline 3D Cover Background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/UiMDkOJtlS5O5Vaz/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient + vignette overlays (non-blocking) */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,245,212,0.10),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(14,14,26,0)_0%,rgba(14,14,26,0.6)_70%,rgba(14,14,26,0.85)_100%)]" />

      {/* Neon grid lines */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(128,255,234,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(128,255,234,0.06)_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E1A] via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pt-28 text-center sm:pt-36">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-md"
        >
          <Waves className="h-4 w-4 text-[#80FFEA]" />
          <span className="text-xs tracking-wide text-white/80">Real-time Water Level Intelligence</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="mt-6 max-w-5xl bg-gradient-to-r from-white via-[#80FFEA] to-white bg-clip-text text-4xl font-semibold leading-tight text-transparent md:text-7xl"
        >
          AI Water Level Monitoring & Flood Alerts
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mt-5 max-w-2xl text-base text-white/80 md:text-lg"
        >
          Measure, predict, and prevent overflows across tanks, drains, and reservoirs—before they happen.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
        >
          <a
            href="#dashboard"
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-[#00F5D4] px-6 py-3 font-medium text-[#0E0E1A] shadow-[0_0_30px_rgba(0,245,212,0.35)] transition-transform hover:scale-[1.02]"
          >
            <span className="relative z-10">View Live Levels</span>
            <span className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,#80FFEA40,transparent_40%)] transition-opacity duration-300 group-hover:opacity-100" />
          </a>

          <a
            href="#how-it-works"
            className="group inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-white/90 backdrop-blur-md transition-colors hover:border-[#80FFEA]/40 hover:bg-white/10"
          >
            <span>How It Works</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </motion.div>

        {/* Subtle parallax glow orbs */}
        <div className="pointer-events-none absolute left-[-10rem] top-40 h-80 w-80 rounded-full bg-[#00F5D4]/10 blur-3xl" />
        <div className="pointer-events-none absolute right-[-8rem] top-72 h-72 w-72 rounded-full bg-[#80FFEA]/10 blur-3xl" />
      </div>
    </section>
  );
};

export default Hero;
