import React from 'react';
import { motion } from 'framer-motion';
import { Droplets, Cpu, Radio } from 'lucide-react';

const features = [
  {
    icon: Droplets,
    title: 'Real-Time Monitoring',
    desc: 'Tracks drain and tank levels using ultrasonic precision.',
    accent: '#80FFEA',
  },
  {
    icon: Cpu,
    title: 'AI Prediction Engine',
    desc: 'Forecasts overflow before it occurs with regression modeling.',
    accent: '#00F5D4',
  },
  {
    icon: Radio,
    title: 'Offline GSM Alerts',
    desc: 'Sends instant SMS warnings without internet connectivity.',
    accent: '#FFD166',
  },
];

const Features = () => {
  return (
    <section id="how-it-works" className="relative z-10 mx-auto max-w-7xl px-6 py-24 text-white">
      <div className="mx-auto mb-12 max-w-3xl text-center">
        <h2 className="text-3xl font-semibold md:text-4xl">Powerful, Intelligent Capabilities</h2>
        <p className="mt-3 text-white/70">Glassmorphic design with neural glow and fluid animations.</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            whileHover={{ y: -4 }}
            className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
            style={{ boxShadow: `0 0 40px ${f.accent}22` }}
          >
            <div
              className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full blur-3xl"
              style={{ background: `${f.accent}33` }}
            />
            <div className="flex items-center gap-3">
              <div
                className="grid h-12 w-12 place-items-center rounded-xl"
                style={{ background: `${f.accent}22`, border: `1px solid ${f.accent}55` }}
              >
                <f.icon className="h-6 w-6" style={{ color: f.accent }} />
              </div>
              <h3 className="text-xl font-medium">{f.title}</h3>
            </div>
            <p className="mt-3 text-white/70">{f.desc}</p>
            <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            <div className="mt-4 text-sm text-white/60">Framer Motion tilt & glow on hover.</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Features;
