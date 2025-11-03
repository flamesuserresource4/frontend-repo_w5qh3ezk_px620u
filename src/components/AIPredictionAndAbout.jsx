import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Leaf, FlaskConical, Waves, Github, ExternalLink } from 'lucide-react';

const AIPredictionAndAbout = () => {
  return (
    <section className="relative z-10 mx-auto max-w-7xl px-6 pb-24 text-white">
      <div className="grid items-center gap-10 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl md:grid-cols-2">
        {/* Chart */}
        <div className="rounded-xl border border-white/10 bg-[#0E0E1A]/60 p-4">
          <div className="mb-3 text-white/80">Predicted Water Level</div>
          <PredictionChart />
          <div className="mt-6 flex items-center gap-6">
            <ConfidenceMeter confidence={95} />
            <div className="text-sm text-white/70">
              Confidence Score
              <div className="text-white">95%</div>
            </div>
          </div>
        </div>
        {/* Copy */}
        <div>
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
            <Cpu className="h-3.5 w-3.5 text-[#80FFEA]" /> AI Regression Model
          </div>
          <h3 className="text-2xl font-semibold md:text-3xl">Overflow prediction with 95%+ accuracy</h3>
          <p className="mt-4 text-white/70">
            Our AI regression model predicts overflow times with over 95% accuracy. Each tank’s trend is analyzed in real-time to forecast drain risk and send proactive alerts.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-3 text-sm text-white/70">
            <Badge icon={<FlaskConical className="h-4 w-4" />} label="Flask Backend" />
            <Badge icon={<Waves className="h-4 w-4" />} label="Ultrasonic Sensors" />
            <Badge icon={<Leaf className="h-4 w-4" />} label="Eco-first Design" />
            <Badge icon={<Cpu className="h-4 w-4" />} label="Real-time Inference" />
          </div>
        </div>
      </div>

      {/* About & Mission */}
      <div className="mt-16 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
        <h4 className="text-xl font-semibold">Our Mission: Flood-Free Smart Cities</h4>
        <p className="mt-3 max-w-3xl text-white/70">
          Storm Water Monitoring System is an innovation from IEM Kolkata that combines IoT and AI to predict urban drain overflow with precision. Our mission is to create sustainable, flood-resilient smart cities.
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-white/70">
          <Badge icon={<FlaskConical className="h-4 w-4" />} label="Flask" />
          <Badge icon={<Cpu className="h-4 w-4" />} label="React" />
          <Badge icon={<Waves className="h-4 w-4" />} label="GSM" />
          <Badge icon={<Leaf className="h-4 w-4" />} label="Sustainability" />
        </div>
      </div>

      {/* Footer */}
      <footer className="relative mt-16 overflow-hidden rounded-2xl border border-white/10 bg-[#0E0E1A]/80 p-6">
        {/* Wave edge */}
        <svg className="pointer-events-none absolute -top-[1px] left-0 h-8 w-full" preserveAspectRatio="none" viewBox="0 0 1440 80">
          <path fill="url(#waveGrad)" d="M0,64L48,58.7C96,53,192,43,288,48C384,53,480,75,576,74.7C672,75,768,53,864,53.3C960,53,1056,75,1152,80C1248,85,1344,75,1392,69.3L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z" />
          <defs>
            <linearGradient id="waveGrad" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#80FFEA22" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
        </svg>

        <div className="relative z-10 flex flex-col items-center justify-between gap-4 text-center text-white/70 md:flex-row md:text-left">
          <div>
            <div className="text-white">Built with ❤️ by Team Binary Bondhu — IEM Kolkata</div>
            <div className="text-sm">© {new Date().getFullYear()} Storm Water Monitoring System</div>
          </div>
          <nav className="flex items-center gap-6">
            <a className="hover:text-white" href="#">Home</a>
            <a className="hover:text-white" href="#dashboard">Dashboard</a>
            <a className="hover:text-white" href="#">Documentation</a>
            <a className="hover:text-white" href="#">Contact</a>
          </nav>
        </div>
      </footer>
    </section>
  );
};

const Badge = ({ icon, label }) => (
  <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1">
    <span className="text-[#80FFEA]">{icon}</span>
    <span>{label}</span>
  </div>
);

const PredictionChart = () => {
  // Animated gradient line chart (left-to-right)
  const points = [
    [0, 70], [10, 68], [20, 64], [30, 60], [40, 58], [50, 50], [60, 48], [70, 42], [80, 38], [90, 35], [100, 30]
  ];
  const d = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p[0]} ${p[1]}`).join(' ');
  return (
    <div className="h-48 w-full">
      <svg viewBox="0 0 100 100" className="h-full w-full">
        <defs>
          <linearGradient id="pred" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="#00F5D4" />
            <stop offset="100%" stopColor="#EF476F" />
          </linearGradient>
        </defs>
        <motion.path
          d={d}
          fill="none"
          stroke="url(#pred)"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: 'easeInOut' }}
        />
      </svg>
    </div>
  );
};

const ConfidenceMeter = ({ confidence = 92 }) => {
  const radius = 36;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (1 - confidence / 100);
  return (
    <div className="relative grid place-items-center">
      <svg className="h-24 w-24 -rotate-90" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r={radius} fill="none" stroke="#ffffff22" strokeWidth="8" />
        <motion.circle
          cx="50"
          cy="50"
          r={radius}
          fill="none"
          stroke="url(#meter)"
          strokeWidth="8"
          strokeDasharray={circumference}
          strokeDashoffset={circumference}
          whileInView={{ strokeDashoffset: offset }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: 'easeOut' }}
        />
        <defs>
          <linearGradient id="meter" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="#00F5D4" />
            <stop offset="100%" stopColor="#06D6A0" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute text-sm font-medium text-white">{confidence}%</div>
    </div>
  );
};

export default AIPredictionAndAbout;
