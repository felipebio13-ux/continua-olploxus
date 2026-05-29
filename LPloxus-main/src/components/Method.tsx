import { motion } from 'framer-motion';
import { Rocket, Layers, Target, TrendingUp, ArrowRight } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Rocket,
    title: 'Aquisicao',
    subtitle: 'Canais Estrategicos',
    description: 'Construcao de multiplos canais de aquisicao para atrair oportunidades qualificadas de forma previsivel e escalavel. Sistema de captacao que funciona independente de indicacoes.',
    features: ['Canais multiplataforma', 'Segmentacao avancada', 'Atracao qualificada', 'Volume previsivel'],
    accent: 'primary',
  },
  {
    number: '02',
    icon: Layers,
    title: 'Estruturacao',
    subtitle: 'Infraestrutura CRM',
    description: 'Implementacao completa de CRM, automacoes, sistemas de rastreamento e organizacao comercial. Fundacao solida para suportar o crescimento sustentavel.',
    features: ['CRM integrado', 'Automacao inteligente', 'Tracking granular', 'Processos documentados'],
    accent: 'secondary',
  },
  {
    number: '03',
    icon: Target,
    title: 'Conversao',
    subtitle: 'Performance Comercial',
    description: 'Otimizacao de processos de vendas, qualificacao avancada de leads e elevacao da performance comercial. Transformacao de oportunidades em receita de forma consistente.',
    features: ['Qualificacao precisa', 'Scripts treinados', 'Funil otimizado', 'Metricas claras'],
    accent: 'primary',
  },
  {
    number: '04',
    icon: TrendingUp,
    title: 'Escala',
    subtitle: 'Crescimento Sustentavel',
    description: 'Expansao previsivel, otimizacao continua de crescimento e geracao de receita escalavel. Sistema que permite crescer sem perder controle.',
    features: ['Expansao estruturada', 'Previsibilidade real', 'Otimizacao continua', 'Receita escalavel'],
    accent: 'secondary',
  },
];

export default function Method() {
  return (
    <section id="metodologia" className="relative py-32 overflow-hidden" style={{ background: 'var(--graphite-800)' }}>
      <div className="absolute top-0 left-0 right-0 premium-line" />
      <div className="blob-cyan-strong absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full opacity-20" />
      <div className="dot-pattern absolute inset-0 opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-24">
          <span className="tag inline-block mb-6">Metodologia Proprietaria</span>
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-black tracking-tight mb-6" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            Arquitetura de Crescimento{' '}
            <span className="gradient-cyan text-glow-cyan">Loxus</span>
          </h2>
          <div className="inline-block px-4 py-1.5 rounded-full border border-cyan-500/20 bg-cyan-500/5 mb-6">
            <span className="text-xs text-cyan-400 font-semibold tracking-wider">METODOLOGIA PROPRIETARIA REGISTRADA</span>
          </div>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto leading-relaxed font-light">
            Um framework estrategico em 4 estagios para construir, estruturar, converter e escalar
            seu crescimento empresarial deforma previsivel e sustentavel.
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent" />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.8, delay: i * 0.12, ease: [0.4, 0, 0.2, 1] }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="relative"
              >
                <div className="glass rounded-3xl p-8 card-hover relative overflow-hidden" style={{ borderColor: 'rgba(0, 212, 255, 0.08)' }}>
                  <div
                    className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-3xl"
                    style={{
                      background: step.accent === 'primary'
                        ? 'radial-gradient(ellipse at top left, rgba(0, 212, 255, 0.12) 0%, transparent 60%)'
                        : 'radial-gradient(ellipse at bottom right, rgba(255, 255, 255, 0.05) 0%, transparent 60%)',
                    }}
                  />
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-6">
                      <span className="method-number">{step.number}</span>
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center"
                        style={{
                          background: 'rgba(0, 212, 255, 0.1)',
                          border: '1px solid rgba(0, 212, 255, 0.2)',
                        }}
                      >
                        <step.icon size={20} className="text-cyan-400" />
                      </div>
                    </div>

                    <p className="text-xs uppercase tracking-widest mb-2 text-cyan-400/70 font-medium">{step.subtitle}</p>
                    <h3 className="text-2xl font-black text-white mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{step.title}</h3>
                    <p className="text-sm text-gray-400 leading-relaxed mb-6">{step.description}</p>

                    <div className="space-y-2.5">
                      {step.features.map((f, j) => (
                        <div key={j} className="flex items-center gap-2.5">
                          <div className="w-1.5 h-1.5 rounded-full bg-cyan-400/60" />
                          <span className="text-xs text-gray-400">{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div
                    className="absolute bottom-0 left-0 right-0 h-1 rounded-b-3xl opacity-0 hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: 'linear-gradient(90deg, transparent, rgba(0, 212, 255, 0.5), transparent)',
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.4 }} className="text-center mt-20">
          <div className="glass-cyan rounded-2xl p-8 max-w-3xl mx-auto luxury-border">
            <p className="text-gray-400 text-lg mb-6 font-light">
              Cada estagio e construido sobre o anterior. Nenhum e opcional.
              A metodologia funciona porque e um sistema completo, nao praticas isoladas.
            </p>
            <a href="#contato" className="btn-primary px-10 py-4.5 rounded-full text-base font-bold inline-flex items-center gap-3 group">
              <span>Implementar em Minha Empresa</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
