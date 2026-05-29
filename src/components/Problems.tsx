import { motion } from 'framer-motion';
import { TrendingDown, Users, Database, Link2Off, Target, RefreshCw, GitBranch, Boxes } from 'lucide-react';

const problems = [
  { icon: Users, title: 'Leads que nao convertem', description: 'Milhares de leads entrando, mas taxa de conversao alarmantemente baixa. O problema nao sao os leads — e a estrutura comercial.', accent: 'primary' },
  { icon: Database, title: 'CRM desorganizado ou inexistente', description: 'Sem centralizacao de dados, sem rastreamento de interacoes, sem historico de vendas. Cada negociacao comeca do zero toda vez.', accent: 'secondary' },
  { icon: Link2Off, title: 'Dependencia de indicacoes', description: 'Seu crescimento esta refem da sorte e do boca a boca. Sem um sistema de aquisicao previsivel, o futuro e incerto.', accent: 'primary' },
  { icon: TrendingDown, title: 'Aquisicao imprevisivel', description: 'Meses de abundancia alternando com meses de escassez. Sem regularidade, impossível planejar investimentos ou contratações.', accent: 'secondary' },
  { icon: Target, title: 'Baixa conversao comercial', description: 'Time comercial perdendo oportunidades que deveriam ser fechadas. Falta de processo, falta de metodo, falta de resultados.', accent: 'primary' },
  { icon: RefreshCw, title: 'Clientes inativos sem reativacao', description: 'Base de clientes parados crescendo sem estrategia de reengajamento. Receita recorrente sendo deixada na mesa todos os meses.', accent: 'secondary' },
  { icon: GitBranch, title: 'Processos comerciais fracos', description: 'Sem scripts, sem etapas definidas, sem metricas. Cada vendedor improvisa, e a performance e inconsistente.', accent: 'primary' },
  { icon: Boxes, title: 'Ausencia de sistema de crescimento', description: 'Tudo depende de acao manual, sem automacao, sem integracao, sem escala. Cada novo cliente exige o mesmo esforco do primeiro.', accent: 'secondary' },
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
          <span className="tag-premium inline-block mb-6">Diagnostico Estrategico</span>
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-black tracking-tight mb-6" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            Sua empresa enfrenta{' '}
            <span className="gradient-cyan">algum destes desafios</span>?
          </h2>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto leading-relaxed font-light">
            A maioria das empresas cresce ate certo ponto e depois estagna.
            Identificar os gargalos e o primeiro passo para construir um crescimento previsivel.
          </p>
        </motion.div>

        <motion.div variants={containerVariants} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }} className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {problems.map((p, i) => (
            <motion.div key={i} variants={cardVariants} whileHover={{ y: -6, transition: { duration: 0.3 } }} className="glass rounded-2xl p-6 card-hover group cursor-default relative overflow-hidden">
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                style={{
                  background: p.accent === 'primary'
                    ? 'radial-gradient(ellipse at top left, rgba(0, 212, 255, 0.1) 0%, transparent 70%)'
                    : 'radial-gradient(ellipse at bottom right, rgba(255, 255, 255, 0.03) 0%, transparent 70%)',
                }}
              />
              <div className="relative z-10">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: 'rgba(0, 212, 255, 0.08)',
                    border: '1px solid rgba(0, 212, 255, 0.15)',
                  }}
                >
                  <p.icon size={18} className="text-cyan-400" />
                </div>
                <h3 className="text-base font-bold text-white mb-2 leading-tight" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{p.title}</h3>
                <p className="text-xs text-gray-400 leading-relaxed">{p.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }} className="mt-16">
          <div className="glass-cyan rounded-3xl p-10 text-center relative overflow-hidden luxury-border">
            <div className="blob-cyan absolute top-0 right-0 w-80 h-80 rounded-full opacity-30" />
            <div className="relative z-10">
              <span className="tag inline-block mb-5">Solucao Loxus</span>
              <h3 className="text-3xl lg:text-4xl font-black text-white mb-5" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                Todo gargalo tem uma{' '}
                <span className="gradient-cyan">arquitetura de solucao</span>
              </h3>
              <p className="text-gray-400 text-lg max-w-xl mx-auto mb-8 font-light">
                Nao entregamos solucoes genericas. Cada sistema e desenhado especificamente
                para as necessidades e momento da sua empresa.
              </p>
              <a href="#metodologia" className="btn-primary px-8 py-4 rounded-full text-sm font-bold inline-flex items-center gap-2 group">
                <span>Conhecer Metodologia</span>
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
