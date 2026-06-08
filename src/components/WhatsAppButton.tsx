import { motion } from 'motion/react';
import { useState } from 'react';

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);
  const phoneNumber = '+244925689122';
  const message = 'Olá! Gostaria de obter mais informações sobre os vossos serviços de consultoria, contabilidade e gestão.';
  const encodedText = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedText}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center">
      {/* Tooltip */}
      <motion.div
        className={`mr-3 rounded-lg bg-white px-3 py-1.5 text-xs font-semibold text-brand-blue-dark shadow-xl border border-gray-100 ${
          showTooltip ? 'block' : 'hidden'
        }`}
        initial={{ opacity: 0, x: 20 }}
        animate={showTooltip ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
        transition={{ duration: 0.2 }}
      >
        Presença online • Fale Connosco!
        <div className="absolute right-[-4px] top-1/2 h-2 w-2 -translate-y-1/2 rotate-45 border-r border-t border-gray-100 bg-white" />
      </motion.div>

      {/* Pulsing ring background */}
      <div className="absolute inset-0 -m-1 animate-ping rounded-full bg-brand-green/30 pointer-events-none" />

      {/* Button with motion state */}
      <motion.a
        id="whatsapp-floating-button"
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar via WhatsApp"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-green text-white shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <svg
          className="h-7 w-7 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.734-1.456L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.852.002-2.63-1.023-5.101-2.887-6.968C16.579 1.951 14.108.924 11.48.924c-5.441 0-9.866 4.425-9.87 9.857-.001 1.737.457 3.432 1.328 4.933l-.441 1.611 1.65-.433zm12.333-7.51c-.13-.217-.48-.347-.98-.598-.5-.25-2.95-1.45-3.41-1.617-.46-.167-.79-.25-1.12.25-.33.5-.167 1.04-.667 1.583-.17.183-.34.367-.583-.167-.25-.5-.167-.25-.833-2.167-.42-1.2-1.04-1.63-1.425-1.78-.17-.067-.34-.133-.5-.133-.2-.017-.5.05-1.066.617-.517.517-1.3.17-1.3 1.3 0 .7.17 1.3.34 1.83.17.5.33 1 .67 1.417 1.5 1.5 2.167 2.167 3.833 2.833.5.217 1 .367 1.45.5.6.167 1.13.133 1.567.067.48-.067 1.45-.583 1.65-1.15.2-.567.2-1.05.133-1.15z" />
        </svg>
      </motion.a>
    </div>
  );
}
