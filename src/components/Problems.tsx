import { motion } from 'framer-motion';
import { Zap, Database, Target, TrendingUp, ArrowRight, Check } from 'lucide-react';

const pillars = [
  {
    icon: Zap,
    title: 'Aquisição de Clientes',
    description: 'Construímos múltiplos canais de captação qualificada para gerar oportunidades previsíveis — sem depender de indicações ou sazonalidade.',
    highlights: ['Canais Multiplataforma', 'Segmentação Avançada', 'Volume Previsível'],
    cta: 'Quero gerar mais oportunidades',
  },
  {
    icon: Database,
    title: 'CRM e Automação',
    description: 'Infraestrutura CRM completa com automações inteligentes que organizam sua operação comercial de ponta a ponta.',
    highlights: ['CRM Integrado', 'Automação Inteligente', 'Tracking Granular'],
    cta: 'Quero organizar minha operação',
  },
  {
    icon: Target,
    title: 'Conversão Comercial',
    description: 'Processos de vendas otimizados e qualificação avançada que transformam oportunidades em receita de forma consistente.',
    highlights: ['Qualificação Precisa', 'Scripts Treinados', 'Funil Otimizado'],
    cta: 'Quero vender mais',
  },
  {
    icon: TrendingUp,
    title: 'Expansão e Escala',
    description: 'Crescimento estruturado que permite escalar receita sem perder controle, qualidade ou previsibilidade operacional.',
    highlights: ['Crescimento Previsível', 'Expansão Estruturada', 'Receita Escalável'],
    cta: 'Quero expandir minha empresa',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.4, 0, 0.2, 1] } },
};

function PillarCard({ pillar, large }: { pillar: typeof pillars[0]; large: boolean }) {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -5, transition: { duration: 0.25 } }}
      className="group relative overflow-hidden rounded-2xl glass card-hover flex flex-col h-full"
    >
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
        style={{
          background: 'radial-gradient(ellipse at top left, rgba(0, 212, 255, 0.09) 0%, transparent 65%)',
        }}
      />

      <div className={`relative z-10 flex flex-col h-full ${large ? 'p-8 lg:p-10' : 'p-7'}`}>
        <div
          className="w-11 h-11 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 shrink-0"
          style={{ background: 'rgba(0, 212, 255, 0.08)', border: '1px solid rgba(0, 212, 255, 0.15)' }}
        >
          <pillar.icon size={20} className="text-cyan-400" />
        </div>

        <h3
          className={`font-bold text-white mb-3 leading-tight ${large ? 'text-xl lg:text-2xl' : 'text-lg'}`}
          style={{ fontFamily: 'Space Grotesk, sans-serif' }}
        >
          {pillar.title}
        </h3>

        <p className={`text-gray-400 leading-relaxed mb-6 ${large ? 'text-sm lg:text-base' : 'text-sm'}`}>
          {pillar.description}
        </p>

        <div className="space-y-2 mb-8">
          {pillar.highlights.map((h, j) => (
            <div key={j} className="flex items-center gap-2.5">
              <Check size={13} className="text-cyan-400 shrink-0" strokeWidth={2.5} />
              <span className="text-xs text-gray-400">{h}</span>
            </div>
          ))}
        </div>

        <div className="mt-auto">
          <a
            href="#contato"
            className="inline-flex items-center gap-2.5 text-sm font-semibold text-cyan-400 hover:text-white transition-colors duration-200 group/cta"
          >
            <span>{pillar.cta}</span>
            <ArrowRight
              size={15}
              className="transition-transform duration-200 group-hover/cta:translate-x-1"
              strokeWidth={2.5}
            />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Problems() {
  const rows = [
    { items: [0, 1], layout: 'grid-cols-1 md:grid-cols-[1.55fr_1fr]' },
    { items: [2, 3], layout: 'grid-cols-1 md:grid-cols-[1fr_1.55fr]' },
  ];

  return (
    <section className="relative py-32 overflow-hidden" style={{ background: 'var(--graphite-900)' }}>
      <div className="dot-pattern absolute inset-0 opacity-50" />
      <div className="blob-cyan absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="max-w-3xl">
            <span className="tag-premium inline-block mb-6">Arquitetura de Crescimento</span>
            <h2
              className="text-4xl lg:text-5xl xl:text-6xl font-black tracking-tight mb-6"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Um sistema integrado para{' '}
              <span className="gradient-cyan">crescimento previsível</span>
            </h2>
            <p className="text-gray-400 text-xl leading-relaxed font-light">
              Nossa metodologia conecta quatro pilares estratégicos em um único sistema coeso.
              Cada pilar reforça os demais, criando crescimento sustentável e escalável.
            </p>
          </div>
        </motion.div>

        <div className="flex flex-col gap-5">
          {rows.map((row, rowIdx) => (
            <motion.div
              key={rowIdx}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-60px' }}
              transition={{ staggerChildren: 0.14, delayChildren: 0.05 }}
              className={`grid gap-5 ${row.layout}`}
            >
              {row.items.map((pillarIdx, colIdx) => (
                <PillarCard
                  key={pillars[pillarIdx].title}
                  pillar={pillars[pillarIdx]}
                  large={
                    (rowIdx === 0 && colIdx === 0) ||
                    (rowIdx === 1 && colIdx === 1)
                  }
                />
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
