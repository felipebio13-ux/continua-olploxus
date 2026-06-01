import { motion } from 'framer-motion';
import { Zap, Users, Database, Target, TrendingUp, RotateCw, Settings, Rocket } from 'lucide-react';

const methodologyPillars = [
  {
    id: 1,
    icon: Rocket,
    title: 'Arquitetura de Crescimento',
    description: 'O núcleo da nossa metodologia. Um framework integrado que conecta aquisição, conversão, retenção e escala em um único sistema coeso.',
    highlights: ['Framework Proprietário', 'Sistema Integrado', 'Metodologia Testada', 'Resultados Comprovados'],
    accent: 'primary',
    size: 'large',
  },
  {
    id: 2,
    icon: Zap,
    title: 'Aquisição de Clientes',
    description: 'Construção de múltiplos canais de captação qualificada. De leads até oportunidades, criamos sistemas previsíveis e escaláveis.',
    highlights: ['Canais Multiplataforma', 'Segmentação Avançada', 'Volume Previsível'],
    accent: 'secondary',
    size: 'small',
  },
  {
    id: 3,
    icon: Database,
    title: 'CRM e Automação',
    description: 'Infraestrutura CRM completa com automações inteligentes. Centralização de dados, rastreamento e organização comercial da sua base.',
    highlights: ['CRM Integrado', 'Automação Inteligente', 'Tracking Granular'],
    accent: 'primary',
    size: 'small',
  },
  {
    id: 4,
    icon: Target,
    title: 'Conversão Comercial',
    description: 'Otimização de processos de vendas e qualificação avançada de leads. Transformamos oportunidades em receita consistente.',
    highlights: ['Qualificação Precisa', 'Scripts Treinados', 'Funil Otimizado'],
    accent: 'secondary',
    size: 'small',
  },
  {
    id: 5,
    icon: Users,
    title: 'Reativação de Base',
    description: 'Estratégia de reengajamento para clientes inativos. Transformar receita deixada na mesa em crescimento recorrente.',
    highlights: ['Reengajamento Estratégico', 'Receita Recorrente', 'Valor Máximo'],
    accent: 'primary',
    size: 'small',
  },
  {
    id: 6,
    icon: Settings,
    title: 'Processos e Indicadores',
    description: 'Documentação de processos comerciais e criação de KPIs claros. Cada vendedor segue a mesma metodologia com consistência.',
    highlights: ['Processos Documentados', 'KPIs Claros', 'Consistência Operacional'],
    accent: 'secondary',
    size: 'small',
  },
  {
    id: 7,
    icon: TrendingUp,
    title: 'Expansão e Escala',
    description: 'Crescimento previsível e controlado. Expansão estruturada que permite escalar sem perder qualidade ou controle operacional.',
    highlights: ['Crescimento Previsível', 'Expansão Estruturada', 'Receita Escalável'],
    accent: 'primary',
    size: 'large',
  },
];

const containerVariants = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };
const cardVariants = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] } } };

export default function Problems() {
  return (
    <section className="relative py-32 overflow-hidden" style={{ background: 'var(--graphite-900)' }}>
      <div className="dot-pattern absolute inset-0 opacity-50" />
      <div className="blob-cyan absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-20">
          <span className="tag-premium inline-block mb-6">Nossa Metodologia</span>
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-black tracking-tight mb-6" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            Os Pilares da{' '}
            <span className="gradient-cyan">Arquitetura de Crescimento</span>
          </h2>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto leading-relaxed font-light">
            Cada pilar representa uma área crítica para construir um sistema de crescimento previsível,
            integrado e escalável para sua empresa.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-max"
        >
          {methodologyPillars.map((pillar, i) => (
            <motion.div
              key={pillar.id}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className={`group relative overflow-hidden rounded-2xl card-hover glass transition-all ${
                pillar.size === 'large'
                  ? 'md:col-span-2 lg:col-span-2 lg:row-span-2'
                  : 'md:col-span-1'
              }`}
            >
              <div className="relative z-10 h-full p-6 lg:p-8 flex flex-col justify-between">
                <div>
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
                    style={{
                      background: 'rgba(0, 212, 255, 0.08)',
                      border: '1px solid rgba(0, 212, 255, 0.15)',
                    }}
                  >
                    <pillar.icon size={24} className="text-cyan-400" />
                  </div>
                  <h3 className="text-lg lg:text-xl font-bold text-white mb-3 leading-tight" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed mb-5">
                    {pillar.description}
                  </p>
                </div>

                <div className="space-y-2">
                  {pillar.highlights.map((highlight, j) => (
                    <div key={j} className="flex items-center gap-2.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-400/60" />
                      <span className="text-xs text-gray-400">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                style={{
                  background: pillar.accent === 'primary'
                    ? 'radial-gradient(ellipse at top left, rgba(0, 212, 255, 0.1) 0%, transparent 70%)'
                    : 'radial-gradient(ellipse at bottom right, rgba(255, 255, 255, 0.03) 0%, transparent 70%)',
                }}
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }} className="mt-16">
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
