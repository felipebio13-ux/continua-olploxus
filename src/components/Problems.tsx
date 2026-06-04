import { motion } from 'framer-motion';
import { Zap, Users, Database, Target, TrendingUp, Settings, Rocket, Check } from 'lucide-react';

const pillars = [
  {
    icon: Rocket,
    title: 'Arquitetura de Crescimento',
    description: 'O núcleo da nossa metodologia. Um framework integrado que conecta aquisição, conversão, retenção e escala em um único sistema coeso e previsível.',
    highlights: ['Framework Proprietário', 'Sistema Integrado', 'Resultados Comprovados', 'Crescimento Previsível'],
    featured: true,
  },
  {
    icon: Zap,
    title: 'Aquisição de Clientes',
    description: 'Múltiplos canais de captação qualificada para gerar oportunidades previsíveis e escaláveis, sem depender de indicações.',
    highlights: ['Canais Multiplataforma', 'Segmentação Avançada', 'Volume Previsível'],
    featured: false,
  },
  {
    icon: Database,
    title: 'CRM e Automação',
    description: 'Infraestrutura CRM completa com automações inteligentes, centralização de dados e rastreamento granular de toda a jornada comercial.',
    highlights: ['CRM Integrado', 'Automação Inteligente', 'Tracking Granular'],
    featured: false,
  },
  {
    icon: Target,
    title: 'Conversão Comercial',
    description: 'Otimização de processos de vendas e qualificação avançada de leads para transformar oportunidades em receita de forma consistente.',
    highlights: ['Qualificação Precisa', 'Scripts Treinados', 'Funil Otimizado'],
    featured: false,
  },
  {
    icon: Users,
    title: 'Reativação de Base',
    description: 'Estratégia de reengajamento para clientes inativos. Recupere receita deixada na mesa e construa crescimento recorrente.',
    highlights: ['Reengajamento Estratégico', 'Receita Recorrente', 'Valor Máximo da Base'],
    featured: false,
  },
  {
    icon: Settings,
    title: 'Processos e Indicadores',
    description: 'Documentação de processos comerciais e KPIs claros para garantir consistência operacional em toda a equipe.',
    highlights: ['Processos Documentados', 'KPIs Claros', 'Consistência Operacional'],
    featured: false,
  },
  {
    icon: TrendingUp,
    title: 'Expansão e Escala',
    description: 'Crescimento estruturado e controlado que permite escalar receita sem perder qualidade, controle ou previsibilidade.',
    highlights: ['Crescimento Previsível', 'Expansão Estruturada', 'Receita Escalável'],
    featured: false,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.4, 0, 0.2, 1] } },
};

function PillarCard({ pillar, index }: { pillar: typeof pillars[0]; index: number }) {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -5, transition: { duration: 0.25 } }}
      className={`group relative overflow-hidden rounded-2xl glass card-hover ${
        pillar.featured ? 'md:col-span-1 lg:row-span-2' : ''
      }`}
    >
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
        style={{
          background: index % 2 === 0
            ? 'radial-gradient(ellipse at top left, rgba(0, 212, 255, 0.09) 0%, transparent 65%)'
            : 'radial-gradient(ellipse at bottom right, rgba(0, 212, 255, 0.05) 0%, transparent 65%)',
        }}
      />

      <div className={`relative z-10 flex flex-col h-full p-6 ${pillar.featured ? 'lg:p-8' : ''}`}>
        <div
          className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110 shrink-0"
          style={{ background: 'rgba(0, 212, 255, 0.08)', border: '1px solid rgba(0, 212, 255, 0.15)' }}
        >
          <pillar.icon size={pillar.featured ? 22 : 19} className="text-cyan-400" />
        </div>

        <h3
          className={`font-bold text-white mb-3 leading-tight ${pillar.featured ? 'text-xl lg:text-2xl' : 'text-base'}`}
          style={{ fontFamily: 'Space Grotesk, sans-serif' }}
        >
          {pillar.title}
        </h3>

        <p className={`text-gray-400 leading-relaxed mb-5 ${pillar.featured ? 'text-sm lg:text-base' : 'text-xs'}`}>
          {pillar.description}
        </p>

        <div className="mt-auto space-y-2">
          {pillar.highlights.map((h, j) => (
            <div key={j} className="flex items-center gap-2.5">
              <Check size={13} className="text-cyan-400 shrink-0" strokeWidth={2.5} />
              <span className="text-xs text-gray-400">{h}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Problems() {
  const rows = [
    { items: [pillars[0], pillars[1]], layout: 'grid-cols-1 md:grid-cols-[1.6fr_1fr]' },
    { items: [pillars[2], pillars[3]], layout: 'grid-cols-1 md:grid-cols-[1fr_1.6fr]' },
    { items: [pillars[4], pillars[5], pillars[6]], layout: 'grid-cols-1 md:grid-cols-3' },
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
          className="text-center mb-20"
        >
          <span className="tag-premium inline-block mb-6">Nossa Metodologia</span>
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-black tracking-tight mb-6" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            Os Pilares da{' '}
            <span className="gradient-cyan">Arquitetura de Crescimento</span>
          </h2>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto leading-relaxed font-light">
            Cada pilar representa uma área crítica para construir um sistema de crescimento
            previsível, integrado e escalável para sua empresa.
          </p>
        </motion.div>

        <div className="flex flex-col gap-5">
          {rows.map((row, rowIdx) => (
            <motion.div
              key={rowIdx}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-60px' }}
              transition={{ staggerChildren: 0.12, delayChildren: rowIdx * 0.05 }}
              className={`grid gap-5 ${row.layout}`}
            >
              {row.items.map((pillar, colIdx) => (
                <PillarCard key={pillar.title} pillar={pillar} index={rowIdx + colIdx} />
              ))}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-14"
        >
          <div className="glass-cyan rounded-3xl p-10 text-center relative overflow-hidden luxury-border">
            <div className="blob-cyan absolute top-0 right-0 w-80 h-80 rounded-full opacity-30" />
            <div className="relative z-10">
              <span className="tag inline-block mb-5">Abordagem Integrada</span>
              <h3 className="text-3xl lg:text-4xl font-black text-white mb-5" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                Cada pilar conectado a{' '}
                <span className="gradient-cyan">um único objetivo</span>
              </h3>
              <p className="text-gray-400 text-lg max-w-xl mx-auto mb-8 font-light">
                Não oferecemos soluções isoladas. Cada elemento funciona em sinergia para criar
                um sistema completo de crescimento previsível e escalável para sua empresa.
              </p>
              <a href="#contato" className="btn-primary px-8 py-4 rounded-full text-sm font-bold inline-flex items-center gap-2 group">
                <span>Implementar em Minha Empresa</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
