import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 500); // Allow exit animation to stay before callback
    }, 2400);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          id="loading-screen"
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0B2C6B]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: 'easeInOut' } }}
        >
          {/* Subtle elegant particle animation in background */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#1E5AA8]/30 via-[#0B2C6B]/90 to-[#0B2C6B] opacity-[0.8] pointer-events-none" />

          <div className="relative flex flex-col items-center">
            {/* Logo image badge with animations */}
            <motion.div
              id="loading-logo-badge"
              className="relative flex items-center justify-center w-28 h-28 rounded-2xl bg-white shadow-2xl overflow-hidden p-2 border border-gray-100"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{
                scale: [0.8, 1.1, 1],
                opacity: 1,
                rotate: [0, 5, -5, 0],
              }}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
            >
              <img
                src="https://lh3.googleusercontent.com/d/1b1ENYjC9FhSBLYN2wXB9mqGC7GxJVZGh"
                alt="SC Logo"
                className="h-full w-full object-contain"
                referrerPolicy="no-referrer"
              />
              <motion.div
                className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-[#1E5AA8] via-[#2E9B4B] to-[#1E5AA8]"
                animate={{ x: ['-100%', '100%'] }}
                transition={{ repeat: Infinity, duration: 2, ease: 'linear' }}
              />
            </motion.div>

            {/* Glowing ring */}
            <motion.div
              className="absolute -inset-4 rounded-full border-2 border-dashed border-[#2E9B4B]/30"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 8, ease: 'linear' }}
            />

            {/* Company name and loading text */}
            <motion.h1
              id="loading-company-name"
              className="mt-8 text-xl font-bold text-white tracking-[0.25em] text-center"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              SC - ESTUDOS &amp; CONSULTORIA
            </motion.h1>

            <motion.p
              id="loading-company-tagline"
              className="mt-2 text-xs text-blue-200/70 uppercase tracking-[0.15em] font-light text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              Excelência • Rigor • Rigor Fiscal
            </motion.p>

            {/* Loading progress bar container */}
            <div className="mt-8 w-48 h-[3px] bg-white/20 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-[#2E9B4B] to-[#1E5AA8]"
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 1.8, ease: 'easeInOut' }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
