import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, PhoneCall, ArrowUpRight } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  const menuItems = [
    { label: 'Início', href: '#inicio', key: 'inicio' },
    { label: 'Sobre Nós', href: '#sobre-nos', key: 'sobre-nos' },
    { label: 'Serviços', href: '#servicos', key: 'servicos' },
    { label: 'Diferenciais', href: '#diferenciais', key: 'diferenciais' },
    { label: 'Contactos', href: '#contactos', key: 'contactos' },
  ];

  // Track scroll activity to style navigation bar dynamically
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Determine active section on page
      const scrollPosition = window.scrollY + 100;
      for (const item of menuItems) {
        const el = document.getElementById(item.key);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.key);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClickAnchor = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const offsetPos = targetElement.offsetTop - 80;
      window.scrollTo({
        top: offsetPos,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <header
        id="main-navigation"
        className={`fixed top-0 left-0 right-0 z-30 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Elegant Logo Design */}
            <a
              href="#inicio"
              onClick={(e) => handleClickAnchor(e, '#inicio')}
              className="flex items-center gap-3 focus:outline-none"
            >
              <div className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-white shadow-md p-1 overflow-hidden border border-gray-100">
                <img
                  src="https://lh3.googleusercontent.com/d/1b1ENYjC9FhSBLYN2wXB9mqGC7GxJVZGh"
                  alt="SC Logo"
                  className="h-full w-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-brand-blue-dark tracking-normal leading-tight">
                  SC - ESTUDOS &amp; CONSULTORIA
                </span>
                <span className="text-[9px] font-semibold text-brand-green tracking-[0.12em] uppercase leading-none">
                  Contabilidade &amp; Gestão
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <ul className="flex items-center gap-7">
                {menuItems.map((item) => (
                  <li key={item.key}>
                    <a
                      href={item.href}
                      onClick={(e) => handleClickAnchor(e, item.href)}
                      className={`relative py-1 text-sm font-semibold transition-colors duration-200 focus:outline-none ${
                        activeSection === item.key
                          ? 'text-[#1E5AA8]'
                          : isScrolled
                          ? 'text-gray-600 hover:text-[#1E5AA8]'
                          : 'text-gray-100 hover:text-white'
                      }`}
                    >
                      {item.label}
                      {activeSection === item.key && (
                        <motion.span
                          layoutId="activeIndicator"
                          className="absolute bottom-0 left-0 h-[2px] w-full bg-[#2E9B4B]"
                          transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                        />
                      )}
                    </a>
                  </li>
                ))}
              </ul>

              {/* Call to action */}
              <a
                href="#contactos"
                onClick={(e) => handleClickAnchor(e, '#contactos')}
                className={`flex items-center gap-1.5 rounded-full px-5 py-2.5 text-xs font-bold transition-all duration-300 hover:shadow-lg focus:outline-none ${
                  isScrolled
                    ? 'bg-[#0B2C6B] text-white hover:bg-[#1E5AA8]'
                    : 'bg-white text-[#0B2C6B] hover:bg-[#F5F5F5]'
                }`}
              >
                Solicitar Consultoria
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </nav>

            {/* Mobile Navigation Toggle */}
            <div className="flex md:hidden">
              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className={`rounded-lg p-2 focus:outline-none transition-colors ${
                  isScrolled
                    ? 'text-brand-blue-dark hover:bg-gray-100'
                    : 'text-white hover:bg-white/10'
                }`}
                aria-label="Abrir Menu"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-20 bg-brand-blue-dark/95 backdrop-blur-lg flex flex-col justify-center px-6"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
          >
            <div className="flex flex-col gap-6 text-center">
              {menuItems.map((item) => (
                <motion.a
                  key={item.key}
                  href={item.href}
                  onClick={(e) => handleClickAnchor(e, item.href)}
                  className="text-xl font-bold text-white/90 hover:text-brand-green transition-colors py-2 block border-b border-white/10"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                </motion.a>
              ))}

              <div className="mt-8 flex flex-col gap-4">
                <a
                  href="#contactos"
                  onClick={(e) => handleClickAnchor(e, '#contactos')}
                  className="flex items-center justify-center gap-2 rounded-xl bg-brand-green py-3 text-sm font-bold text-white shadow-xl hover:bg-green-700 active:scale-95 transition-all"
                >
                  <PhoneCall className="h-4 w-4" />
                  +244 925 689 122
                </a>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="text-xs font-semibold text-gray-400 hover:text-white"
                >
                  Fechar Menu
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
