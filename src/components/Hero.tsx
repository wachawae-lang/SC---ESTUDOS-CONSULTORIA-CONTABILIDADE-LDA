import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, ShieldCheck, Award, TrendingUp } from 'lucide-react';

const heroBgImage = '/src/assets/images/corporate_hero_bg_1780938038462.png';

export default function Hero() {
  const handleRequestConsulting = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const contactSection = document.getElementById('contactos');
    if (contactSection) {
      window.scrollTo({
        top: contactSection.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0B2C6B] via-[#091F4D] to-[#040D24] pt-24 pb-16 overflow-hidden"
    >
      {/* Background Decorative Circles / Gradients */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-[#1E5AA8] rounded-full filter blur-[120px] opacity-20 pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-[#2E9B4B] rounded-full filter blur-[120px] opacity-15 pointer-events-none" />

      {/* Grid Pattern overlay for tech advisory vibe */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:24px_24px] opacity-60 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full z-10 pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Hero Text Column */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            {/* Soft high-contrast micro badge */}
            <motion.div
              id="hero-badge"
              className="inline-flex self-start items-center gap-2 px-3 py-1.5 rounded-full bg-[#1E5AA8]/20 border border-[#1E5AA8]/30 mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="flex h-2 w-2 rounded-full col bg-[#2E9B4B] animate-pulse" />
              <span className="text-xs font-bold text-gray-200 uppercase tracking-widest">
                Parceiro Estratégico em Angola
              </span>
            </motion.div>

            {/* Main Premium Heading */}
            <motion.h1
              id="hero-main-title"
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-none mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Soluções Inteligentes para a <br className="hidden md:inline" />
              <span className="bg-gradient-to-r from-blue-300 via-emerald-300 to-green-400 bg-clip-text text-transparent">
                Gestão da Sua Empresa
              </span>
            </motion.h1>

            {/* High legibility subtitle */}
            <motion.p
              id="hero-subtitle"
              className="text-lg text-gray-300 font-normal leading-relaxed mb-8 max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Consultoria, Contabilidade e Gestão Empresarial com excelência e profissionalismo. Estruturamos caminhos de rigor para o crescimento sustentável do seu negócio.
            </motion.p>

            {/* Click-to-action buttons */}
            <motion.div
              className="flex flex-col sm:flex-row items-center gap-4 mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <button
                type="button"
                onClick={handleRequestConsulting}
                className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-xl bg-[#2E9B4B] px-8 py-4 text-sm font-bold text-white shadow-xl hover:bg-green-600 transition-all duration-300 hover:shadow-green-900/30 active:scale-95 group focus:outline-none"
              >
                Solicitar Consultoria
                <ArrowUpRight className="h-4.5 w-4.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>

              <a
                href="#servicos"
                className="w-full sm:w-auto flex items-center justify-center rounded-xl bg-white/10 border border-white/20 px-8 py-4 text-sm font-bold text-white hover:bg-white/15 hover:border-white/40 transition-all duration-300 focus:outline-none"
              >
                Conhecer Serviços
              </a>
            </motion.div>

            {/* Trust factors metrics badge row */}
            <motion.div
              className="grid grid-cols-3 gap-4 border-t border-white/10 pt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 border border-white/10 text-emerald-400">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">Rigor</h4>
                  <p className="text-[10px] text-gray-400">Cultura de conformidade</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 border border-white/10 text-blue-400">
                  <Award className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">Liderança</h4>
                  <p className="text-[10px] text-gray-400">Soluções inovadoras</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 border border-white/10 text-teal-400">
                  <TrendingUp className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider font-sans">Parceria</h4>
                  <p className="text-[10px] text-gray-400">Resultados duradouros</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Hero Banner Image Column */}
          <div className="lg:col-span-5 relative flex justify-center">
            <motion.div
              id="hero-image-wrapper"
              className="relative w-full max-w-md lg:max-w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white/5 bg-[#091F4D]/40"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {/* Overlay shading to style corporate colors inside picture framing */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B2C6B]/50 via-transparent to-[#1E5AA8]/20 mix-blend-multiply" />
              
              <img
                src={heroBgImage}
                alt="SC Estudos Escritório Moderno"
                className="w-full h-[320px] sm:h-[400px] lg:h-[480px] object-cover hover:scale-105 duration-700 transition-transform"
                referrerPolicy="no-referrer"
              />

              {/* Floating trust badge on image */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl backdrop-blur-md bg-black/40 border border-white/10 flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-[#2E9B4B] flex items-center justify-center text-white font-extrabold font-sans">
                  SC
                </div>
                <div className="flex-1">
                  <h5 className="text-xs font-bold text-white leading-tight">
                    Sua tranquilidade regulatória
                  </h5>
                  <p className="text-[10px] text-gray-300">
                    Nós cuidamos e otimizamos a contabilidade e fiscalidade.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Back glow decoration behind image */}
            <div className="absolute inset-0 -m-3 border border-[#2E9B4B]/25 rounded-3xl pointer-events-none transform rotate-3" />
          </div>

        </div>
      </div>
    </section>
  );
}
