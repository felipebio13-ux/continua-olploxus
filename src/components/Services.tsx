import { motion } from 'framer-motion';
import { Layers, Users, Building2, LayoutGrid as Layout, GitMerge, RefreshCw } from 'lucide-react';

const services = [
  {
    icon: Layers,
    title: 'Sistema de Aquisicao',
    description: 'Arquitetura completa de canais de aquisicao estrategicos para atrair oportunidades qualificadas de forma previsivel e continua.',
    tags: ['Canais Multiplataforma', 'Segmentacao Avancada', 'Volume Previsivel', 'Lead Qualificado'],
    accent: 'primary',
  },
  {
    icon: Building2,
    title: 'Infraestrutura CRM',
    description: 'Implementacao e configuracao de CRM integrado com automacoes, tracking e dashboards para visibilidade total do pipeline.',
    tags: ['CRM Integrado', 'Automacoes', 'Pipeline Visual', 'Relatorios Avancados'],
    accent: 'secondary',
  },
  {
    icon: RefreshCw,
    title: 'Reativacao de Clientes',
    description: 'Sistema estruturado de reengajamento e reativacao da base inativa para recuperar receita recorrente sem aquisicao nova.',
    tags: ['Reengajamento', 'Base Inativa', 'Receita Recorrente', 'LTV Expansion'],
    accent: 'primary',
  },
  {
    icon: Users,
    title: 'Estrutura Comercial',
    description: 'Desenho e implementacao de processos comerciais, scripts de vendas, rituais de gestao e estrutura de conversao.',
    tags: ['Processo de Vendas', 'Scripts', 'Rituais de Gestao', 'Metricas Comerciais'],
    accent: 'secondary',
  },
  {
    icon: Layout,
    title: 'Sistemas de Conversao',
    description: 'Funis de conversao otimizados, paginas de alta performance e fluxos automatizados para transformar leads em clientes.',
    tags: ['Funis Otimizados', 'Copy Estrategica', 'Testes Continuos', 'A/B Testing'],
    accent: 'primary',
  },
  {
    icon: GitMerge,
    title: 'Ecossistema de Crescimento',
    description: 'Integracao completa de todos os sistemas e processos para criar uma maquina de crescimento coesa e automatizada.',
    tags: ['Integracao Total', 'Automacao Ponta-a-Ponta', 'Escalabilidade', 'Sinergia de Sistemas'],
    accent: 'secondary',
  },
];

export default function Services() {
  return (
    <section id="solucoes" className="relative py-32 overflow-hidden" style={{ background: 'var(--graphite-900)' }}>
      <div className="tech-grid absolute inset-0 opacity-60" />
      <div className="absolute top-0 left-0 right-0 premium-line" />
      <div className="blob-cyan absolute bottom-0 left-1/4 w-[600px] h-[600px] rounded-full opacity-15" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-20">
          <span className="tag-premium inline-block mb-6">Solucoes Empresariais</span>
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-black tracking-tight mb-6" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            Infraestrutura completa de{' '}
            <span className="gradient-cyan">crescimento</span>
          </h2>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto leading-relaxed font-light">
            Nao entregamos servicos isolados. Implementamos sistemas integrados que funcionam em sinergia
            para gerar crescimento previsivel e sustentavel.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.4, 0, 0.2, 1] }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="glass rounded-3xl p-8 group cursor-default relative overflow-hidden"
              style={{ borderColor: 'rgba(255, 255, 255, 0.04)' }}
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-600 rounded-3xl"
                style={{
                  background: s.accent === 'primary'
                    ? 'radial-gradient(ellipse at top left, rgba(0, 212, 255, 0.08) 0%, transparent 70%)'
                    : 'radial-gradient(ellipse at bottom right, rgba(255, 255, 255, 0.04) 0%, transparent 70%)',
                }}
              />
              <div className="relative z-10">
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: 'rgba(0, 212, 255, 0.08)',
                    border: '1px solid rgba(0, 212, 255, 0.15)',
                  }}
                >
                  <s.icon size={22} className="text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{s.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed mb-6">{s.description}</p>
                <div className="flex flex-wrap gap-2">
                  {s.tags.map((tag, j) => (
                    <span
                      key={j}
                      className="text-xs px-3 py-1.5 rounded-full font-medium"
                      style={{
                        background: 'rgba(0, 212, 255, 0.05)',
                        border: '1px solid rgba(0, 212, 255, 0.12)',
                        color: 'rgba(0, 212, 255, 0.8)',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div
                className="absolute bottom-0 left-0 right-0 h-1 rounded-b-3xl scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left"
                style={{
                  background: 'linear-gradient(90deg, rgba(0, 212, 255, 0.3), rgba(0, 212, 255, 0.6), rgba(0, 212, 255, 0.3))',
                }}
              />
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.3 }} className="text-center mt-16">
          <div className="glass rounded-2xl p-6 inline-flex items-center gap-8 flex-wrap justify-center" style={{ borderColor: 'rgba(0, 212, 255, 0.08)' }}>
            <div className="text-center">
              <div className="text-3xl font-black gradient-cyan" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>12+</div>
              <div className="text-xs text-gray-400 font-medium">Meses de Implementacao</div>
            </div>
            <div className="h-10 w-px bg-white/10" />
            <div className="text-center">
              <div className="text-3xl font-black gradient-cyan" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>180+</div>
              <div className="text-xs text-gray-400 font-medium">Empresas Implementadas</div>
            </div>
            <div className="h-10 w-px bg-white/10" />
            <div className="text-center">
              <div className="text-3xl font-black gradient-cyan" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>R$ 2.1Bi</div>
              <div className="text-xs text-gray-400 font-medium">Receita Gerada</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
