import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, MapPin, Hash, Mail, Building2, Send, CheckCircle2, Loader2 } from 'lucide-react';
import { SERVICES_DATA } from '../data';
import { ContactFormInput } from '../types';

export default function Contact() {
  const [formState, setFormState] = useState<ContactFormInput>({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple verification
    if (!formState.name || !formState.phone || !formState.message) {
      setErrorMessage('Por favor, preencha os campos obrigatórios (Nome, Telecon e Mensagem).');
      return;
    }

    setErrorMessage('');
    setIsLoading(true);

    // Simulate sending message to corporate server
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
      setFormState({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: '',
      });
    }, 1800);
  };

  return (
    <section id="contactos" className="py-24 bg-white relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-[#1E5AA8] uppercase tracking-widest block mb-2">
            Fale Connosco
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2C6B] tracking-tight mb-4">
            Pronto para Elevar os Seus Resultados?
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            Estamos prontos para analisar as necessidades da sua empresa e propor as soluções de maior valor operativo. Entre em contacto preenchendo o formulário ou através dos canais directos.
          </p>
          <div className="h-1 w-20 bg-[#2E9B4B] rounded-full mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Institutional Contact Info Column (5 spans) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-8 bg-brand-light p-8 rounded-2xl border border-gray-100">
            <div>
              <h3 className="text-xl font-bold text-[#0B2C6B] mb-2 leading-tight">
                Informações de Contacto
              </h3>
              <p className="text-xs text-gray-500 mb-8 font-sans">
                Visite-nos ou agende uma reunião presencial ou online com os nossos consultores certificados.
              </p>

              {/* Detail Blocks */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#1E5AA8] to-[#0B2C6B] text-white shadow-md">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Telefone</h4>
                    <p className="text-sm font-bold text-[#0B2C6B] font-mono mt-0.5">
                      <a href="tel:+244925689122" className="hover:text-blue-700 transition-colors">
                        +244 925 689 122
                      </a>
                    </p>
                    <p className="text-[11px] text-gray-400 mt-0.5">Suporte operacional (Seg a Sex das 8:00 às 17:00)</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#2E9B4B] to-emerald-700 text-white shadow-md">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Endereço</h4>
                    <p className="text-sm font-bold text-[#0B2C6B] mt-0.5">
                      Cidade Baixa, Mariano Machado, Huambo
                    </p>
                    <p className="text-[11px] text-gray-400 mt-0.5">Angola – Instalações centrais da empresa</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#0B2C6B] to-slate-800 text-white shadow-md">
                    <Hash className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">NIF</h4>
                    <p className="text-sm font-bold text-[#0B2C6B] font-mono mt-0.5">
                      5002833778
                    </p>
                    <p className="text-[11px] text-gray-400 mt-0.5">Número de Identificação Fiscal registado na AGT</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-indigo-700 text-white shadow-md">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">E-mail Comercial</h4>
                    <p className="text-sm font-bold text-[#0B2C6B] mt-0.5">
                      <a href="mailto:geral@sc-estudos.com" className="hover:text-blue-700 transition-colors">
                        geral@sc-estudos.com
                      </a>
                    </p>
                    <p className="text-[11px] text-gray-400 mt-0.5">Para propostas e documentação técnica</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Map embed inside details box */}
            <div className="relative rounded-2xl overflow-hidden shadow-md h-48 border border-gray-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15654.555986872658!2d15.7335198!3d-12.7761009!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1bb6f0b7c7b04fbb%3A0xa9a5da79cda65487!2sMariano%20Machado%2C%20Huambo%2C%20Angola!5e0!3m2!1spt!2spt!4v1700000000000!5m2!1spt!2spt"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização SC Huambo"
              />
            </div>
          </div>

          {/* Form Column (7 spans) */}
          <div className="lg:col-span-7 bg-white p-8 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between">
            <form onSubmit={handleFormSubmit} className="space-y-6">
              <div className="border-b border-gray-100 pb-4">
                <h3 className="text-xl font-bold text-[#0B2C6B] leading-tight">
                  Envie-nos uma Mensagem
                </h3>
                <p className="text-xs text-gray-500 mt-0.5 font-sans">
                  Preencha os dados e receba uma proposta estruturada e detalhada.
                </p>
              </div>

              {errorMessage && (
                <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs font-semibold rounded-lg">
                  {errorMessage}
                </div>
              )}

              {/* Form Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="form-name" className="block text-xs font-bold text-[#0B2C6B] mb-2 uppercase">
                    Nome Completo <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="form-name"
                    name="name"
                    type="text"
                    required
                    value={formState.name}
                    onChange={handleInputChange}
                    placeholder="Ex: Dr. António Ferreira"
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:border-brand-blue-med focus:outline-none focus:ring-1 focus:ring-brand-blue-med"
                  />
                </div>

                <div>
                  <label htmlFor="form-email" className="block text-xs font-bold text-[#0B2C6B] mb-2 uppercase">
                    E-mail Corporativo
                  </label>
                  <input
                    id="form-email"
                    name="email"
                    type="email"
                    value={formState.email}
                    onChange={handleInputChange}
                    placeholder="Ex: nome@empresa.com"
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:border-brand-blue-med focus:outline-none focus:ring-1 focus:ring-brand-blue-med"
                  />
                </div>

                <div>
                  <label htmlFor="form-phone" className="block text-xs font-bold text-[#0B2C6B] mb-2 uppercase">
                    Telefone Directo <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="form-phone"
                    name="phone"
                    type="tel"
                    required
                    value={formState.phone}
                    onChange={handleInputChange}
                    placeholder="Ex: +244 9XX XXX XXX"
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:border-brand-blue-med focus:outline-none focus:ring-1 focus:ring-brand-blue-med"
                  />
                </div>

                <div>
                  <label htmlFor="form-company" className="block text-xs font-bold text-[#0B2C6B] mb-2 uppercase">
                    Empresa / Organização
                  </label>
                  <input
                    id="form-company"
                    name="company"
                    type="text"
                    value={formState.company}
                    onChange={handleInputChange}
                    placeholder="Ex: Empresa de Huambo"
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:border-brand-blue-med focus:outline-none focus:ring-1 focus:ring-brand-blue-med"
                  />
                </div>
              </div>

              {/* Service Select Dropdown */}
              <div>
                <label htmlFor="form-service" className="block text-xs font-bold text-[#0B2C6B] mb-2 uppercase">
                  Serviço Pretendido
                </label>
                <div className="relative">
                  <select
                    id="form-service"
                    name="service"
                    value={formState.service}
                    onChange={handleInputChange}
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm bg-white focus:border-brand-blue-med focus:outline-none focus:ring-1 focus:ring-brand-blue-med appearance-none"
                  >
                    <option value="">Selecione para qual serviço deseja consultoria...</option>
                    {SERVICES_DATA.map((srv) => (
                      <option key={srv.id} value={srv.title}>
                        {srv.title}
                      </option>
                    ))}
                  </select>
                  {/* Custom arrow decoration */}
                  <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                    &darr;
                  </div>
                </div>
              </div>

              {/* Message field */}
              <div>
                <label htmlFor="form-message" className="block text-xs font-bold text-[#0B2C6B] mb-2 uppercase">
                  Detalhes do Pedido <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="form-message"
                  name="message"
                  required
                  rows={4}
                  value={formState.message}
                  onChange={handleInputChange}
                  placeholder="Escreva brevemente os contornos do apoio que necessita e os objectivos da sua empresa..."
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:border-brand-blue-med focus:outline-none focus:ring-1 focus:ring-brand-blue-med"
                />
              </div>

              {/* Submit trigger */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-[#0B2C6B] hover:bg-[#1E5AA8] text-white py-4 font-bold text-sm shadow-md transition-all duration-300 active:scale-98 disabled:opacity-50"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="h-4.5 w-4.5 animate-spin text-white" />
                    A processar o pedido...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Enviar Proposta de Consultoria
                  </>
                )}
              </button>
            </form>
          </div>

        </div>
      </div>

      {/* Instant simulated submission success feedback modal */}
      <AnimatePresence>
        {isSuccess && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              className="absolute inset-0 bg-neutral-900/40 backdrop-blur-xs"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsSuccess(false)}
            />
            <motion.div
              id="form-success-alert"
              className="relative w-full max-w-md bg-white rounded-2xl p-8 border border-gray-100 z-10 shadow-2xl text-center"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              <div className="h-16 w-16 bg-[#2E9B4B]/10 rounded-full text-[#2E9B4B] flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold text-[#0B2C6B] mb-2">Mensagem Enviada!</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                Agradecemos o seu interesse! Recebemos o seu formulário de contacto. Um dos nossos especialistas de contas irá rever o seu pedido e responder no prazo de 24 horas úteis.
              </p>
              <button
                type="button"
                onClick={() => setIsSuccess(false)}
                className="w-full bg-[#0B2C6B] hover:bg-[#1E5AA8] text-white font-bold text-sm py-3 rounded-xl transition-all shadow-md active:scale-95"
              >
                Entendido
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
