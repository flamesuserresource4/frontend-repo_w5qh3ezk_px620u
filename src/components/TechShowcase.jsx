import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Server, SignalHigh, Activity, ThermometerSun } from 'lucide-react';

const Architecture = () => {
  return (
    <div className="relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
      <h3 className="mb-4 text-xl font-medium text-white">Water sensors to AI – a seamless pipeline</h3>
      <div className="relative grid grid-cols-1 items-center gap-6 md:grid-cols-5">
        {/* Nodes */}
        <Node title="Ultrasonic" icon={<Activity className="h-5 w-5" />} color="#80FFEA" />
        <Connector />
        <Node title="Edge MCU" icon={<Server className="h-5 w-5" />} color="#00F5D4" />
        <Connector />
        <Node title="GSM/LoRa" icon={<SignalHigh className="h-5 w-5" />} color="#FFD166" />
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2"
      >
        <Node title="FastAPI Ingestion" color="#06D6A0" icon={<Server className="h-5 w-5" />} />
        <Node title="React Dashboard" color="#EF476F" icon={<Activity className="h-5 w-5" />} />
      </motion.div>
      {/* Trails */}
      <motion.div
        className="pointer-events-none absolute inset-0"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="absolute left-1/5 top-16 h-1/2 w-px bg-gradient-to-b from-[#80FFEA] to-transparent opacity-40" />
      </motion.div>
    </div>
  );
};

const Node = ({ title, icon, color = '#80FFEA' }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="relative flex items-center gap-3 rounded-xl border border-white/10 bg-[#0E0E1A]/60 p-4"
    style={{ boxShadow: `0 0 30px ${color}22` }}
  >
    <div className="grid h-10 w-10 place-items-center rounded-lg" style={{ background: `${color}22`, border: `1px solid ${color}55` }}>
      <div style={{ color }}>{icon}</div>
    </div>
    <div>
      <div className="text-sm text-white/60">Node</div>
      <div className="font-medium text-white">{title}</div>
    </div>
  </motion.div>
);

const Connector = () => (
  <div className="hidden h-1 w-full items-center justify-center md:flex">
    <motion.div
      className="h-[2px] w/full bg-gradient-to-r from-transparent via-[#80FFEA] to-transparent"
      animate={{ backgroundPositionX: [0, 200] }}
      transition={{ repeat: Infinity, duration: 2, ease: 'linear' }}
      style={{ backgroundSize: '200% 100%' }}
    />
  </div>
);

const DashboardPreview = () => {
  return (
    <div id="dashboard" className="relative mt-10 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-xl font-medium text-white">Live Water Levels</h3>
        <a href="#" className="group inline-flex items-center gap-2 text-[#80FFEA]">
          Open Dashboard <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </a>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {/* Reservoir card with animated wave */}
        <WaterCard name="Reservoir A" percent={86} status="Stable" gradientFrom="#00F5D4" gradientTo="#80FFEA" />
        <WaterCard name="Drain B" percent={64} status="Rising" gradientFrom="#FFD166" gradientTo="#EF476F" />
        <Thresholds />
        {/* Graph */}
        <div className="col-span-1 rounded-xl border border-white/10 bg-[#0E0E1A]/60 p-4 md:col-span-3">
          <div className="mb-3 text-white/80">Last 24h Levels</div>
          <AnimatedLineChart />
        </div>
      </div>
    </div>
  );
};

const WaterCard = ({ name, percent, status, gradientFrom, gradientTo }) => {
  return (
    <div className="rounded-xl border border-white/10 bg-[#0E0E1A]/60 p-4">
      <div className="mb-2 flex items-center justify-between text-white/80">
        <span>{name}</span>
        <span className={status === 'Rising' ? 'text-[#FFD166]' : 'text-[#06D6A0]'}>{status}</span>
      </div>
      <div className="relative h-36 w-full overflow-hidden rounded-lg border border-white/10 bg-white/5">
        {/* Water fill with wave */}
        <div className="absolute inset-x-0 bottom-0" style={{ height: `${percent}%` }}>
          <div
            className="absolute inset-0 animate-[float_6s_ease-in-out_infinite] opacity-90"
            style={{
              background: `linear-gradient(180deg, ${gradientFrom}, ${gradientTo})`,
              clipPath: 'path("M0,32 C24,24 48,40 72,32 C96,24 120,40 144,32 L144,144 L0,144 Z")',
              transform: 'translateY(8px)'
            }}
          />
          <div
            className="absolute inset-0 animate-[float_8s_ease-in-out_infinite]"
            style={{
              background: `linear-gradient(180deg, ${gradientFrom}, ${gradientTo})`,
              opacity: 0.7,
              clipPath: 'path("M0,28 C24,36 48,20 72,28 C96,36 120,20 144,28 L144,144 L0,144 Z")'
            }}
          />
        </div>
      </div>
      <div className="mt-2 flex items-center justify-between text-sm text-white/70">
        <span>Current level</span>
        <span className="text-white">{percent}%</span>
      </div>
    </div>
  );
};

const Thresholds = () => (
  <div className="rounded-xl border border-white/10 bg-[#0E0E1A]/60 p-4">
    <div className="mb-2 flex items-center justify-between text-white/80">
      <span>Threshold Bands</span>
      <ThermometerSun className="h-4 w-4 text-[#80FFEA]" />
    </div>
    <div className="relative h-36 w-full overflow-hidden rounded-lg border border-white/10 bg-white/5">
      <div className="absolute inset-x-0 top-1/4 h-px bg-[#06D6A0]" />
      <div className="absolute inset-x-0 top-1/2 h-px bg-[#FFD166]" />
      <div className="absolute inset-x-0 top-[70%] h-px bg-[#EF476F]" />
      <div className="absolute bottom-4 left-3 rounded-md border border-white/10 bg-white/5 px-2 py-1 text-xs text-white/70">Safe</div>
      <div className="absolute bottom-[45%] left-3 rounded-md border border-white/10 bg-white/5 px-2 py-1 text-xs text-white/70">Caution</div>
      <div className="absolute bottom-[25%] left-3 rounded-md border border-white/10 bg-white/5 px-2 py-1 text-xs text-white/70">Critical</div>
    </div>
  </div>
);

const AnimatedLineChart = () => {
  const points = [
    [0, 80], [10, 70], [20, 75], [30, 60], [40, 65], [50, 50], [60, 58], [70, 40], [80, 46], [90, 30], [100, 34]
  ];
  const path = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p[0]} ${p[1]}`).join(' ');
  return (
    <div className="h-48 w-full">
      <svg viewBox="0 0 100 100" className="h-full w-full">
        <defs>
          <linearGradient id="grad" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="#00F5D4" />
            <stop offset="100%" stopColor="#EF476F" />
          </linearGradient>
        </defs>
        <motion.path
          d={path}
          fill="none"
          stroke="url(#grad)"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.8, ease: 'easeInOut' }}
        />
      </svg>
    </div>
  );
};

const TechShowcase = () => {
  return (
    <section className="relative z-10 mx-auto max-w-7xl px-6 pb-24 text-white">
      <Architecture />
      <DashboardPreview />
    </section>
  );
};

export default TechShowcase;
