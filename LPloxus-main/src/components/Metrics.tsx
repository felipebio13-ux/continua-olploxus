import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, DollarSign, BarChart3 } from 'lucide-react';

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
  { icon: Users, value: 127000, display: (n) => `${Math.floor(n / 1000)}k+`, label: 'Oportunidades Geradas', sublabel: 'Pipeline qualificado entregue', delay: 0 },
  { icon: TrendingUp, value: 38, display: (n) => `${n}%`, label: 'Taxa de Conversao', sublabel: 'Media entre implementacoes', delay: 0.1 },
  { icon: DollarSign, value: 9, display: (n) => `R$ ${n},20`, label: 'CAC Medio', sublabel: 'Custo de aquisicao otimizado', delay: 0.2 },
  { icon: BarChart3, value: 847, display: (n) => `${n}%`, label: 'ROI Medio', sublabel: 'Retorno sobre investimento', delay: 0.3 },
];

const weekData = [22, 35, 28, 48, 41, 62, 55, 75, 68, 88, 80, 100];

export default function Metrics() {
  return (
    <section id="resultados" className="relative py-32 overflow-hidden" style={{ background: 'var(--graphite-800)' }}>
      <div className="absolute top-0 left-0 right-0 premium-line" />
      <div className="blob-cyan-strong absolute top-1/2 right-0 w-[700px] h-[700px] rounded-full opacity-20 -translate-y-1/2 translate-x-1/3" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-20">
          <span className="tag inline-block mb-6">Performance Comprovada</span>
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-black tracking-tight mb-6" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            Resultados que{' '}
            <span className="gradient-cyan">validam a metodologia</span>
          </h2>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto leading-relaxed font-light">
            Dados consolidados de 12 meses de implementacoes em empresas de diferentes portes e segmentos.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {metrics.map((m, i) => <MetricCard key={i} m={m} />)}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="glass-cyan rounded-3xl p-10 luxury-border"
        >
          <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-10 gap-6">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Evolucao do Pipeline</h3>
              <p className="text-sm text-gray-500 font-medium">Ultimos 12 meses · Crescimento continuo do pipeline de oportunidades</p>
            </div>
            <div className="flex items-center gap-6 flex-wrap">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full" style={{ background: 'linear-gradient(135deg, var(--cyan-muted), var(--cyan))' }} />
                <span className="text-xs text-gray-400 font-medium">Pipeline Ativo</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full" style={{ background: 'rgba(0, 212, 255, 0.4)' }} />
                <span className="text-xs text-gray-400 font-medium">Volume Crescente</span>
              </div>
              <div className="px-4 py-2 rounded-full text-xs font-bold gradient-cyan" style={{ background: 'rgba(0, 212, 255, 0.08)', border: '1px solid rgba(0, 212, 255, 0.2)', color: 'var(--cyan)', WebkitBackgroundClip: 'unset', WebkitTextFillColor: 'unset' }}>
                +127% crescimento anual
              </div>
            </div>
          </div>

          <div className="flex items-end gap-2.5 h-44">
            {weekData.map((h, i) => (
              <motion.div
                key={i}
                className="flex-1 flex flex-col justify-end group/bar cursor-default"
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 + i * 0.06, ease: 'easeOut' }}
                style={{ transformOrigin: 'bottom', height: '100%' }}
              >
                <div
                  className="w-full rounded-t-md transition-all duration-200 group-hover/bar:brightness-125"
                  style={{
                    height: `${h}%`,
                    background: i >= 9
                      ? `linear-gradient(to top, rgba(0, 212, 255, 0.3), rgba(0, 212, 255, 0.7))`
                      : `linear-gradient(to top, rgba(0, 212, 255,${0.1 + (i / 11) * 0.25}), rgba(0, 212, 255,${0.15 + (i / 11) * 0.4}))`,
                  }}
                />
              </motion.div>
            ))}
          </div>

          <div className="flex justify-between mt-4 px-1">
            {['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'].map((m, i) => (
              <span key={i} className="text-xs text-gray-600 flex-1 text-center font-medium">{m}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
