import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Calculator,
  FileSearch,
  Briefcase,
  TrendingUp,
  PieChart,
  Cpu,
  Layers,
  ShoppingBag,
  Award,
  X,
  CheckCircle2,
  PhoneCall,
  Sparkles
} from 'lucide-react';
import { Service } from '../types';
import { SERVICES_DATA } from '../data';

// Map icon string names dynamically to Lucide React icons
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Calculator,
  FileSearch,
  Briefcase,
  TrendingUp,
  PieChart,
  Cpu,
  Layers,
  ShoppingBag,
  Award,
};

export default function Services() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const handleSelectService = (service: Service) => {
    setSelectedService(service);
  };

  const handleCloseModal = () => {
    setSelectedService(null);
  };

  const handleContactRef = () => {
    setSelectedService(null);
    const contactSection = document.getElementById('contactos');
    if (contactSection) {
      window.scrollTo({
        top: contactSection.offsetTop - 85,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="servicos" className="py-24 bg-brand-light">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-[#1E5AA8] uppercase tracking-widest block mb-2">
            O Que Fazemos
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2C6B] tracking-tight mb-4">
            Soluções Integradas de Alta Performance
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            Oferecemos suporte global para transformar a gestão corporativa, garantir a conformidade legal do seu negócio em Angola e impulsionar a sua rentabilidade.
          </p>
          <div className="h-1 w-20 bg-[#2E9B4B] rounded-full mx-auto mt-6" />
        </div>

        {/* Services Grid (9 Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service, idx) => {
            const IconComponent = iconMap[service.icon] || Calculator;
            return (
              <motion.div
                id={`service-card-${service.id}`}
                key={service.id}
                className="group relative bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-blue-100 transition-all duration-300 cursor-pointer flex flex-col justify-between"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                onClick={() => handleSelectService(service)}
                whileHover={{ y: -6 }}
              >
                {/* Active hover accent gradient border top */}
                <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-gradient-to-r from-[#1E5AA8] to-[#2E9B4B] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div>
                  {/* Icon Frame */}
                  <div className="h-12 w-12 rounded-xl bg-[#1E5AA8]/10 text-[#1E5AA8] flex items-center justify-center mb-6 group-hover:bg-[#1E5AA8] group-hover:text-white transition-all duration-300">
                    <IconComponent className="h-6 w-6" />
                  </div>

                  {/* Title and short text */}
                  <h3 className="text-lg font-bold text-[#0B2C6B] mb-2 group-hover:text-[#1E5AA8] transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
                    {service.description}
                  </p>
                </div>

                {/* Saber Mais Action Indicator */}
                <div className="mt-6 pt-4 border-t border-gray-50 flex items-center justify-between text-xs font-bold text-[#1E5AA8]">
                  <span>Saber Mais</span>
                  <span className="transform translate-x-0 group-hover:translate-x-1 duration-300 transition-transform">
                    &rarr;
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Service Detailed Modal Drawer */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop opacity */}
            <motion.div
              className="absolute inset-0 bg-brand-blue-dark/50 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleCloseModal}
            />

            {/* Modal Box */}
            <motion.div
              id="service-detail-modal"
              className="relative w-full max-w-2xl rounded-2xl bg-white p-6 sm:p-8 shadow-2xl border border-gray-100 z-10 overflow-hidden"
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              {/* Header inside modal */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-[#2E9B4B]/10 text-[#2E9B4B] flex items-center justify-center">
                    {(() => {
                      const IconComp = iconMap[selectedService.icon] || Calculator;
                      return <IconComp className="h-5 w-5" />;
                    })()}
                  </div>
                  <h3 className="text-xl font-extrabold text-[#0B2C6B]">
                    {selectedService.title}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="rounded-full p-1.5 hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-colors focus:outline-none"
                  aria-label="Fechar Modal"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Body */}
              <div className="mb-8">
                <p className="text-sm text-gray-700 leading-relaxed mb-6 font-medium">
                  {selectedService.detailedDescription}
                </p>

                <h4 className="text-xs font-bold text-[#0B2C6B] uppercase tracking-wider mb-4 flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-[#2E9B4B]" />
                  Apoio operacional e âmbito do serviço:
                </h4>

                <ul className="space-y-3">
                  {selectedService.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 className="h-4 w-4 text-[#2E9B4B] mt-0.5 shrink-0" />
                      <span className="text-sm text-gray-600 font-sans">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom CTA Actions */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-100">
                <button
                  type="button"
                  onClick={handleContactRef}
                  className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-[#0B2C6B] hover:bg-[#1E5AA8] py-3 text-sm font-bold text-white shadow-md active:scale-95 transition-all focus:outline-none"
                >
                  <PhoneCall className="h-4 w-4" />
                  Solicitar este Serviço
                </button>
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="flex-1 border border-gray-200 hover:bg-gray-50 py-3 rounded-xl text-sm font-semibold text-gray-600 active:scale-95 transition-all focus:outline-none"
                >
                  Fechar Detalhes
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
