import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Eye, Building2, MousePointerClick } from 'lucide-react';

function useCounter(target: number, duration = 2000) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let start = 0;
          const step = target / (duration / 16);
          const timer = setInterval(() => {
            start += step;
            if (start >= target) { setCount(target); clearInterval(timer); }
            else { setCount(Math.floor(start)); }
          }, 16);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);
  return { count, ref };
}

type MetricDef = {
  icon: React.ElementType;
  value: number;
  display: (n: number) => string;
  label: string;
  sublabel: string;
  delay: number;
};

function MetricCard({ m }: { m: MetricDef }) {
  const { count, ref } = useCounter(m.value);
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: m.delay }}
      className="metric-card rounded-3xl p-8 text-center"
    >
      <div className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-6 bg-cyan-500/10 border border-cyan-500/15">
        <m.icon size={22} className="text-cyan-400" />
      </div>
      <div className="text-5xl font-black mb-3 leading-none gradient-cyan" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
        {m.display(count)}
      </div>
      <div className="text-white font-semibold mb-1.5 text-lg">{m.label}</div>
      <div className="text-xs text-gray-500 font-medium">{m.sublabel}</div>
    </motion.div>
  );
}

const metrics: MetricDef[] = [
  { icon: Building2, value: 10, display: (n) => `${n}`, label: 'Empresas Atendidas', sublabel: 'Metodologia implementada', delay: 0 },
  { icon: Users, value: 5656, display: (n) => n >= 1000 ? `${(n / 1000).toFixed(1).replace('.', ',')}k` : `${n}`, label: 'Leads Gerados', sublabel: 'Acumulado nos últimos 5 meses', delay: 0.1 },
  { icon: Eye, value: 18000, display: (n) => n >= 1000 ? `${Math.floor(n / 1000)}k+` : `${n}`, label: 'Visualizações', sublabel: 'Oportunidades de contato geradas', delay: 0.2 },
  { icon: MousePointerClick, value: 3942, display: (n) => n >= 1000 ? `${(n / 1000).toFixed(1).replace('.', ',')}k+` : `${n}`, label: 'Pesquisas Qualificadas', sublabel: 'Intenção de compra identificada', delay: 0.3 },
];

type ClientResult = {
  name: string;
  sector: string;
  initials: string;
  stats: { label: string; value: number; display: (n: number) => string; icon: React.ElementType }[];
};

const clientResults: ClientResult[] = [
  {
    name: 'Gtec Segurança',
    sector: 'Segurança Eletrônica',
    initials: 'GT',
    stats: [
      { label: 'Leads Gerados', value: 1201, display: (n) => n.toLocaleString('pt-BR'), icon: Users },
      { label: 'Visualizações', value: 2459, display: (n) => n.toLocaleString('pt-BR'), icon: Eye },
    ],
  },
  {
    name: 'Rede Drogavida',
    sector: 'Farmácias',
    initials: 'RD',
    stats: [
      { label: 'Leads Gerados', value: 1442, display: (n) => n.toLocaleString('pt-BR'), icon: Users },
      { label: 'Visualizações', value: 9952, display: (n) => n.toLocaleString('pt-BR'), icon: Eye },
      { label: 'Pesquisas Qualificadas', value: 3203, display: (n) => n.toLocaleString('pt-BR'), icon: MousePointerClick },
    ],
  },
  {
    name: 'Ferro Velho Gigantão',
    sector: 'Comércio',
    initials: 'FG',
    stats: [
      { label: 'Leads Gerados', value: 1369, display: (n) => n.toLocaleString('pt-BR'), icon: Users },
      { label: 'Visualizações', value: 2127, display: (n) => n.toLocaleString('pt-BR'), icon: Eye },
      { label: 'Pesquisas Qualificadas', value: 739, display: (n) => n.toLocaleString('pt-BR'), icon: MousePointerClick },
    ],
  },
];

function ClientStatValue({ value, display }: { value: number; display: (n: number) => string }) {
  const { count, ref } = useCounter(value, 1800);
  return <span ref={ref}>{display(count)}</span>;
}

const monthLabels = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai'];
const monthData = [38, 58, 72, 88, 100];

export default function Metrics() {
  return (
    <section id="resultados" className="relative py-32 overflow-hidden" style={{ background: 'var(--graphite-800)' }}>
      <div className="absolute top-0 left-0 right-0 premium-line" />
      <div className="blob-cyan-strong absolute top-1/2 right-0 w-[700px] h-[700px] rounded-full opacity-20 -translate-y-1/2 translate-x-1/3" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="tag inline-block mb-6">Performance Comprovada</span>
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-black tracking-tight mb-6" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            Resultados Gerados pela{' '}
            <span className="gradient-cyan">Arquitetura de Crescimento</span>
          </h2>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto leading-relaxed font-light">
            Dados reais de clientes atendidos nos últimos 5 meses de operação.
          </p>
        </motion.div>

        {/* Métricas consolidadas */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {metrics.map((m, i) => <MetricCard key={i} m={m} />)}
        </div>

        {/* Cards individuais de clientes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mb-6"
        >
          <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold mb-8">Resultados por cliente</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {clientResults.map((client, i) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.65, delay: i * 0.1, ease: [0.4, 0, 0.2, 1] }}
                className="glass rounded-2xl p-7 relative overflow-hidden group hover:border-cyan-500/20 transition-colors duration-300"
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                  style={{ background: 'radial-gradient(ellipse at top left, rgba(0, 212, 255, 0.07) 0%, transparent 65%)' }}
                />
                <div className="relative z-10">
                  <div className="flex items-center gap-3.5 mb-6">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center text-sm font-black text-white shrink-0"
                      style={{
                        background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.35), rgba(0, 212, 255, 0.15))',
                        border: '1px solid rgba(0, 212, 255, 0.25)',
                      }}
                    >
                      {client.initials}
                    </div>
                    <div>
                      <div className="font-bold text-white text-base leading-tight" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{client.name}</div>
                      <div className="text-xs text-gray-500 font-medium mt-0.5">{client.sector}</div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {client.stats.map((stat, j) => (
                      <div key={j} className="flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                          <stat.icon size={14} className="text-cyan-400/70 shrink-0" />
                          <span className="text-xs text-gray-400">{stat.label}</span>
                        </div>
                        <span className="text-base font-black text-white" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                          <ClientStatValue value={stat.value} display={stat.display} />
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Gráfico de evolução */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="glass-cyan rounded-3xl p-10 luxury-border"
        >
          <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-10 gap-6">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Evolução de Leads Gerados</h3>
              <p className="text-sm text-gray-500 font-medium">Últimos 5 meses · Crescimento contínuo do volume de oportunidades</p>
            </div>
            <div className="flex items-center gap-4 flex-wrap">
              <div className="flex items-center gap-2.5">
                <div className="w-2.5 h-2.5 rounded-full" style={{ background: 'linear-gradient(135deg, var(--cyan-muted), var(--cyan))' }} />
                <span className="text-xs text-gray-400 font-medium">Leads Mensais</span>
              </div>
              <div
                className="px-4 py-1.5 rounded-full text-xs font-bold"
                style={{ background: 'rgba(0, 212, 255, 0.08)', border: '1px solid rgba(0, 212, 255, 0.2)', color: 'var(--cyan)' }}
              >
                5.656 leads em 5 meses
              </div>
            </div>
          </div>

          <div className="flex items-end gap-4 h-44">
            {monthData.map((h, i) => (
              <motion.div
                key={i}
                className="flex-1 flex flex-col justify-end group/bar cursor-default"
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 + i * 0.09, ease: 'easeOut' }}
                style={{ transformOrigin: 'bottom', height: '100%' }}
              >
                <div
                  className="w-full rounded-t-md transition-all duration-200 group-hover/bar:brightness-125"
                  style={{
                    height: `${h}%`,
                    background: i >= 3
                      ? `linear-gradient(to top, rgba(0, 212, 255, 0.35), rgba(0, 212, 255, 0.75))`
                      : `linear-gradient(to top, rgba(0, 212, 255, ${0.12 + (i / 4) * 0.28}), rgba(0, 212, 255, ${0.18 + (i / 4) * 0.4}))`,
                  }}
                />
              </motion.div>
            ))}
          </div>

          <div className="flex justify-around mt-4 px-1">
            {monthLabels.map((label, i) => (
              <span key={i} className="text-xs text-gray-600 flex-1 text-center font-medium">{label}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
