import React from 'react';
import { motion } from 'motion/react';
import {
  Users,
  HeartHandshake,
  ShieldCheck,
  Zap,
  CalendarDays,
  CheckCircle,
} from 'lucide-react';
import { DIFFERENTIALS_DATA } from '../data';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Users,
  HeartHandshake,
  ShieldCheck,
  Zap,
  CalendarDays,
  CheckCircle,
};

export default function Differentials() {
  return (
    <section id="diferenciais" className="py-24 bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-[#1E5AA8] uppercase tracking-widest block mb-2">
            Porquê Escolher-nos
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2C6B] tracking-tight mb-4">
            Os Nossos Diferenciais Competitivos
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            Construímos relações sólidas e sustentáveis, aliadas a processos inovadores que dão robustez e impulsionam o desempenho das empresas no mercado nacional.
          </p>
          <div className="h-1 w-20 bg-[#2E9B4B] rounded-full mx-auto mt-6" />
        </div>

        {/* Differentials Grid (6 blocks) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DIFFERENTIALS_DATA.map((item, idx) => {
            const IconComp = iconMap[item.icon] || CheckCircle;
            return (
              <motion.div
                id={`diff-box-${item.id}`}
                key={item.id}
                className="group relative bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col items-start"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                {/* Visual accent corner mark */}
                <div className="absolute top-0 right-0 h-16 w-16 bg-[#2E9B4B]/5 rounded-bl-3xl group-hover:bg-[#2E9B4B]/10 transition-colors duration-300" />

                {/* Icon Wrapper */}
                <div className="h-12 w-12 rounded-xl bg-[#2E9B4B]/10 text-[#2E9B4B] flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
                  <IconComp className="h-5 w-5" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-[#0B2C6B] mb-2 group-hover:text-[#1E5AA8] transition-colors duration-200">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed font-sans">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
