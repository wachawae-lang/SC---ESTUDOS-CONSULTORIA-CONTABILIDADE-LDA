import React from 'react';
import { Facebook, Linkedin, Twitter, Instagram, ArrowUpRight, HelpCircle } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollTop = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(href.substring(1));
    if (targetElement) {
      const offsetPos = targetElement.offsetTop - 80;
      window.scrollTo({
        top: offsetPos,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer className="bg-brand-blue-dark text-slate-300 pt-20 pb-10 border-t border-white/5 relative overflow-hidden">
      {/* Decorative backdrop glow */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#2E9B4B] rounded-full filter blur-[150px] opacity-10 pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Core Footer columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          
          {/* Logo Column (4 spans) */}
          <div className="lg:col-span-4">
            <a
              href="#inicio"
              onClick={(e) => handleScrollTop(e, '#inicio')}
              className="flex items-center gap-3 mb-6"
            >
              <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-md p-1 overflow-hidden">
                <img
                  src="https://lh3.googleusercontent.com/d/1b1ENYjC9FhSBLYN2wXB9mqGC7GxJVZGh"
                  alt="SC Logo"
                  className="h-full w-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-extrabold text-white tracking-normal leading-tight">
                  SC - ESTUDOS &amp; CONSULTORIA
                </span>
                <span className="text-[9px] font-bold text-brand-green tracking-[0.12em] uppercase leading-none">
                  Contabilidade &amp; Gestão
                </span>
              </div>
            </a>
            
            <p className="text-xs text-slate-400 leading-relaxed mb-6 max-w-sm font-sans">
              Especialistas em consultoria empresarial, contabilidade geral, auditoria financeira e desenvolvimento de estudos de viabilidade técnica e económica em Angola. Orientamos o seu negócio para o rigor regulatório e rentabilidade financeira estável.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="no-opener text-gray-400 hover:text-white"
                className="h-9 w-9 rounded-xl bg-white/5 flex items-center justify-center hover:bg-[#1E5AA8] hover:text-white transition-all duration-300 shadow-md"
                aria-label="Seguir no Facebook"
              >
                <Facebook className="h-4.5 w-4.5" />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="no-opener text-gray-400 hover:text-white"
                className="h-9 w-9 rounded-xl bg-white/5 flex items-center justify-center hover:bg-[#1E5AA8] hover:text-white transition-all duration-300 shadow-md"
                aria-label="Seguir no LinkedIn"
              >
                <Linkedin className="h-4.5 w-4.5" />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="no-opener"
                className="h-9 w-9 rounded-xl bg-white/5 flex items-center justify-center hover:bg-[#1E5AA8] hover:text-white transition-all duration-300 shadow-md"
                aria-label="Seguir no Instagram"
              >
                <Instagram className="h-4.5 w-4.5" />
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="no-opener"
                className="h-9 w-9 rounded-xl bg-white/5 flex items-center justify-center hover:bg-[#1E5AA8] hover:text-white transition-all duration-300 shadow-md"
                aria-label="Seguir no Twitter"
              >
                <Twitter className="h-4.5 w-4.5" />
              </a>
            </div>
          </div>

          {/* Core Services column (3 spans) */}
          <div className="lg:col-span-3 lg:col-start-6">
            <h4 className="text-xs font-extrabold text-white uppercase tracking-widest mb-6 border-l-2 border-[#2E9B4B] pl-2.5">
              Serviços Chave
            </h4>
            <ul className="space-y-3.5 text-xs text-slate-400 font-sans">
              <li>
                <a href="#servicos" onClick={(e) => handleScrollTop(e, '#servicos')} className="hover:text-white transition-colors">
                  Contabilidade Geral e analítica
                </a>
              </li>
              <li>
                <a href="#servicos" onClick={(e) => handleScrollTop(e, '#servicos')} className="hover:text-white transition-colors">
                  Auditoria de Demonstrações
                </a>
              </li>
              <li>
                <a href="#servicos" onClick={(e) => handleScrollTop(e, '#servicos')} className="hover:text-white transition-colors">
                  Consultoria Fiscal &amp; Planeamento
                </a>
              </li>
              <li>
                <a href="#servicos" onClick={(e) => handleScrollTop(e, '#servicos')} className="hover:text-white transition-colors">
                  Estudos de Viabilidade de Projecto
                </a>
              </li>
              <li>
                <a href="#servicos" onClick={(e) => handleScrollTop(e, '#servicos')} className="hover:text-white transition-colors">
                  Softwares de Gestão Licenciados
                </a>
              </li>
            </ul>
          </div>

          {/* Navigation drawer links column (2 spans) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-extrabold text-white uppercase tracking-widest mb-6 border-l-2 border-[#1E5AA8] pl-2.5">
              Links Rápidos
            </h4>
            <ul className="space-y-3.5 text-xs text-slate-400 font-sans">
              <li>
                <a href="#inicio" onClick={(e) => handleScrollTop(e, '#inicio')} className="hover:text-white transition-colors">
                  Página Inicial
                </a>
              </li>
              <li>
                <a href="#sobre-nos" onClick={(e) => handleScrollTop(e, '#sobre-nos')} className="hover:text-white transition-colors">
                  Sobre Nós (História)
                </a>
              </li>
              <li>
                <a href="#servicos" onClick={(e) => handleScrollTop(e, '#servicos')} className="hover:text-white transition-colors">
                  Catálogo de Serviços
                </a>
              </li>
              <li>
                <a href="#diferenciais" onClick={(e) => handleScrollTop(e, '#diferenciais')} className="hover:text-white transition-colors">
                  Diferenciais Competitivos
                </a>
              </li>
              <li>
                <a href="#contactos" onClick={(e) => handleScrollTop(e, '#contactos')} className="hover:text-white transition-colors">
                  Contactos Centrais
                </a>
              </li>
            </ul>
          </div>

          {/* Compliance notice footer block (3 spans) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-extrabold text-white uppercase tracking-widest mb-6 border-l-2 border-slate-500 pl-2.5">
              Ficha Reguladora
            </h4>
            <p className="text-xs text-slate-400 mb-4 font-sans leading-relaxed">
              <strong>Sede:</strong> Cidade Baixa, Mariano Machado, Huambo, Angola.<br />
              <strong>NIF:</strong> 5002833778 <br />
              <strong>Telefone:</strong> +244 925 689 122
            </p>
            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-start gap-2">
              <HelpCircle className="h-4.5 w-4.5 text-emerald-400 mt-0.5 shrink-0" />
              <p className="text-[10px] text-slate-400 font-sans leading-tight">
                Em conformidade integral de fomento com o PGC e regulamentos da Administração Geral Tributária (AGT).
              </p>
            </div>
          </div>

        </div>

        {/* Outer bottom copyright line */}
        <div className="pt-8 border-t border-white/10 text-center md:flex md:items-center md:justify-between text-xs text-slate-500 font-sans">
          <p>
            &copy; {currentYear} SC - ESTUDOS, CONSULTORIA &amp; CONTABILIDADE, LDA. Todos os direitos reservados.
          </p>
          <p className="mt-2 md:mt-0 text-[10px] text-slate-600">
            Huambo, Angola • Excelência em Consultoria Corporativa.
          </p>
        </div>

      </div>
    </footer>
  );
}
