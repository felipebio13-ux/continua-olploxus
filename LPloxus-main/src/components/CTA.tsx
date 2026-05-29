import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';

const checks = [
  'Diagnostico completo da estrutura comercial',
  'Plano de implementacao personalizado',
  'Sessao sem compromisso de 45 minutos',
];

export default function CTA() {
  return (
    <section id="contato" className="relative py-32 overflow-hidden" style={{ background: 'var(--graphite-900)' }}>
      <div className="absolute top-0 left-0 right-0 premium-line" />
      <div className="blob-cyan-strong absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full opacity-30" />
      <div className="blob-cyan absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-40" />
      <div className="dot-pattern absolute inset-0 opacity-30" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          <span className="tag-premium inline-block mb-8">Proximo Passo</span>

          <h2 className="text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight mb-8 leading-[1.05]" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            Transforme sua empresa em uma{' '}
            <span className="gradient-cyan text-glow-cyan">maquina de crescimento</span>{' '}
            previsivel.
          </h2>

          <p className="text-gray-400 text-xl leading-relaxed mb-14 max-w-2xl mx-auto font-light">
            Agende uma sessao estrategica gratuita e descubra exatamente como implementar
            a Arquitetura de Crescimento Loxus na sua empresa.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-14">
            {checks.map((c, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }} className="flex items-center gap-3">
                <CheckCircle2 size={18} className="text-cyan-400" />
                <span className="text-base text-gray-300 font-medium">{c}</span>
              </motion.div>
            ))}
          </div>

          <motion.a
            href="https://wa.me/5511999999999?text=Olá!%20Quero%20agendar%20uma%20sessão%20estratégica%20para%20implementar%20a%20Arquitetura%20de%20Crescimento%20Lóxus."
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            className="btn-primary inline-flex items-center gap-4 px-12 py-6 rounded-full text-lg font-bold glow-cyan group"
          >
            <span>Solicitar Diagnostico Estrategico</span>
            <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
          </motion.a>

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.4 }} className="mt-12 flex items-center justify-center gap-6">
            <div className="flex items-center gap-2">
              <Sparkles size={16} className="text-cyan-400" />
              <span className="text-sm text-gray-500">Vagas limitadas</span>
            </div>
            <div className="h-4 w-px bg-white/10" />
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-sm text-gray-500">Resposta em ate 2h</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
