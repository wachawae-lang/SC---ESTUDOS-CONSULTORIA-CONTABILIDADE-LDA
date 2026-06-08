import { motion } from 'motion/react';
import { Target, Eye, ShieldAlert, CheckCircle2 } from 'lucide-react';

export default function About() {
  const pillars = [
    {
      id: 'mission',
      title: 'A Nossa Missão',
      description: 'Proporcionar soluções integradas de gestão, contabilidade, auditoria e consultoria com elevados padrões de rigor e excelência, libertando os gestores para focarem no crescimento sustentável das suas corporações.',
      color: 'border-l-4 border-l-[#2E9B4B] bg-emerald-50/50',
      icon: <Target className="h-6 w-6 text-[#2E9B4B]" />
    },
    {
      id: 'vision',
      title: 'A Nossa Visão',
      description: 'Ser o parceiro estratégico de referência nacional reconhecido pelo mercado angolano pela integridade, transparência e inovação contínua nas respostas às exigências fiscais e corporativas modernas.',
      color: 'border-l-4 border-l-[#1E5AA8] bg-blue-50/50',
      icon: <Eye className="h-6 w-6 text-[#1E5AA8]" />
    },
    {
      id: 'values',
      title: 'Valores Fundamentais',
      description: 'Pautamo-nos pela Ética Profissional inflexível, Rigor Técnico, Confiança Mútua com os clientes, Inovação de Processos e Foco no acrescentar valor operacional persistente a cada projecto.',
      color: 'border-l-4 border-l-[#0B2C6B] bg-slate-50/50',
      icon: <ShieldAlert className="h-6 w-6 text-[#0B2C6B]" />
    }
  ];

  return (
    <section id="sobre-nos" className="py-24 bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Block: General institutional presentation */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs font-bold text-[#1E5AA8] uppercase tracking-wider block mb-2">
                Quem Somos
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2C6B] tracking-tight mb-6">
                Excelência em Apoio Empresarial com Rigor e Confiança
              </h2>
              
              <div className="h-1.5 w-16 bg-[#2E9B4B] rounded-full mb-8" />
              
              <p className="text-base text-gray-700 leading-relaxed mb-6 font-medium">
                A <span className="text-[#0B2C6B] font-bold">SC - ESTUDOS, CONSULTORIA &amp; CONTABILIDADE, LDA</span> é uma empresa especializada em consultoria empresarial, contabilidade, auditoria e gestão financeira, comprometida com a excelência, inovação e crescimento sustentável dos seus clientes.
              </p>
              
              <p className="text-sm text-gray-600 leading-relaxed mb-8">
                Atuamos de forma transversal no tecido empresarial angolano, fornecendo suporte fiscal especializado, estudos de viabilidade financeira robustos e sistemas ERP homologados pela AGT. O nosso propósito é consolidar a segurança contabilística de parceiros no mercado nacional, prestando um serviço que combina rigor regulatório à visão estratégica empresarial.
              </p>

              {/* Highlight Bullet Points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-5 w-5 text-[#2E9B4B] mt-0.5 shrink-0" />
                  <span className="text-sm font-semibold text-gray-800">Conformidade com a AGT garantida</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-5 w-5 text-[#1E5AA8] mt-0.5 shrink-0" />
                  <span className="text-sm font-semibold text-gray-800">Software homologado e integrado</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-5 w-5 text-[#0B2C6B] mt-0.5 shrink-0" />
                  <span className="text-sm font-semibold text-gray-800">Fidelização e Relatórios Mensais</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-5 w-5 text-[#2E9B4B] mt-0.5 shrink-0" />
                  <span className="text-sm font-semibold text-gray-800">Apoio contencioso e fiscal</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Block: Mission, Vision, Values Column */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            {pillars.map((pillar, idx) => (
              <motion.div
                id={`about-card-${pillar.id}`}
                key={pillar.id}
                className={`p-6 rounded-2xl shadow-sm border border-gray-100 flex gap-4 transition-all duration-300 hover:shadow-md ${pillar.color}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-white shadow-sm">
                  {pillar.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#0B2C6B] mb-2">{pillar.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed font-sans">{pillar.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
