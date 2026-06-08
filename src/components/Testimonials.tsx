import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data';

export default function Testimonials() {
  return (
    <section id="testemunhos" className="py-24 bg-brand-light relative">
      {/* Decorative backdrop patterns */}
      <div className="absolute top-10 right-10 w-48 h-48 rounded-full bg-[#1E5AA8]/5 filter blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-[#1E5AA8] uppercase tracking-widest block mb-2">
            Feedback do Mercado
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2C6B] tracking-tight mb-4">
            Quem Confia na Nossa Consultoria
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            A satisfação e o sucesso dos nossos parceiros são o testemunho mais fiel do nosso compromisso diário com a transparência e as melhores práticas contabilísticas.
          </p>
          <div className="h-1 w-20 bg-[#2E9B4B] rounded-full mx-auto mt-6" />
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS_DATA.map((testimonial, idx) => (
            <motion.div
              id={`testimonial-card-${testimonial.id}`}
              key={testimonial.id}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative flex flex-col justify-between hover:shadow-md transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
            >
              {/* Quotation icon decoration */}
              <div className="absolute top-6 right-8 text-neutral-100">
                <Quote className="h-10 w-10 fill-current opacity-70" />
              </div>

              <div>
                {/* Visual Stars */}
                <div className="flex items-center gap-1 mb-5">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4.5 w-4.5 text-amber-500 fill-current" />
                  ))}
                </div>

                {/* Feedback Comment */}
                <p className="text-sm text-gray-600 italic leading-relaxed mb-6 font-sans">
                  &ldquo;{testimonial.comment}&rdquo;
                </p>
              </div>

              {/* Author Profile */}
              <div className="flex items-center gap-4 pt-5 border-t border-gray-50">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="h-12 w-12 rounded-full object-cover border-2 border-brand-blue-med/20"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="text-sm font-extrabold text-brand-blue-dark">
                    {testimonial.name}
                  </h4>
                  <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider">
                    {testimonial.role} • <span className="text-[#1E5AA8]">{testimonial.company}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
