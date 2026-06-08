import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { Users, FileText, Award, Handshake } from 'lucide-react';
import { STATS_DATA } from '../data';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Users,
  FileText,
  Award,
  Handshake,
};

// Custom self-contained animated counter component
function AnimatedNumber({ value, duration = 1600 }: { value: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const containerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // Power 2 Out easing formula
      const easedProgress = progress * (2 - progress);
      setCount(Math.floor(easedProgress * value));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(value);
      }
    };

    window.requestAnimationFrame(step);
  }, [hasStarted, value, duration]);

  return <span ref={containerRef}>{count}</span>;
}

export default function Stats() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-[#0B2C6B] to-[#1E5AA8] text-white overflow-hidden">
      {/* Visual glowing geometric markers */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 bg-[#2E9B4B] rounded-full filter blur-[140px] opacity-15 pointer-events-none" />
      <div className="absolute inset-0 bg-[#091F4D]/10 mix-blend-multiply" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8 text-center">
          {STATS_DATA.map((item, idx) => {
            const IconComp = iconMap[item.icon] || Award;
            return (
              <motion.div
                id={`stat-box-${item.id}`}
                key={item.id}
                className="flex flex-col items-center justify-center p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -4, backgroundColor: 'rgba(255, 255, 255, 0.08)' }}
              >
                {/* Metric Icon */}
                <div className="h-10 w-10 rounded-full bg-white/10 text-emerald-400 flex items-center justify-center mb-4">
                  <IconComp className="h-5 w-5" />
                </div>

                {/* Counter value */}
                <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-2 font-mono">
                  <AnimatedNumber value={item.value} />
                  <span className="text-emerald-400">{item.suffix}</span>
                </span>

                {/* Subtitle / text label */}
                <span className="text-xs sm:text-sm font-semibold tracking-wide text-blue-100 uppercase">
                  {item.label}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
