import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { TrendingUp, Users, BarChart3, Building2, ArrowRight, ChevronDown, Zap } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.15, ease: [0.4, 0, 0.2, 1] },
  }),
};

function AnimatedCounter({ target, suffix = '', prefix = '' }: { target: number; suffix?: string; prefix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let start = 0;
          const duration = 2000;
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
  }, [target]);

  return <span ref={ref}>{prefix}{count.toLocaleString('pt-BR')}{suffix}</span>;
}

const dashboardMetrics = [
  { label: 'Pipeline Ativo', value: 2847, suffix: '', icon: Users, change: '+24%' },
  { label: 'Taxa de Conversao', value: 34, suffix: '%', icon: TrendingUp, change: '+8.2%' },
  { label: 'CAC Medio', prefix: 'R$', value: 12, suffix: '', icon: BarChart3, change: '-31%' },
  { label: 'LTV Medio', value: 6, suffix: 'x', icon: Building2, change: '+2.1x' },
];

const weekData = [30, 45, 38, 60, 52, 78, 65, 90, 72, 95, 88, 100];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center overflow-hidden tech-grid" style={{ background: 'var(--graphite-900)' }}>
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="blob-cyan-strong absolute top-1/3 -left-40 w-[600px] h-[600px] rounded-full pulse-cyan" />
        <div className="blob-cyan absolute bottom-1/4 -right-40 w-[800px] h-[800px] rounded-full" style={{ animationDelay: '2s' }} />
        <div className="orbit-line absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]" />
        <div className="orbit-line absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[1100px]" />
        <div className="premium-line absolute top-0 left-0 right-0" />
      </div>

      <motion.div style={{ y, opacity }} className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <motion.div custom={0} variants={fadeUp} initial="hidden" animate="show" className="mb-8">
              <span className="tag-premium">Infraestrutura de Crescimento Empresarial</span>
            </motion.div>

            <motion.h1
              custom={1} variants={fadeUp} initial="hidden" animate="show"
              className="text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.05] tracking-tight mb-8"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Arquitetura de{' '}
              <span className="gradient-cyan text-glow-cyan">crescimento</span>{' '}
              previsivel para empresas que querem escalar.
            </motion.h1>

            <motion.p
              custom={2} variants={fadeUp} initial="hidden" animate="show"
              className="text-xl text-gray-400 leading-relaxed mb-12 max-w-xl font-light"
            >
              Nao entregamos apenas campanhas. Construímos sistemas completos de aquisicao,
              conversao e escala para transformer sua empresa em uma maquina de crescimento.
            </motion.p>

            <motion.div custom={3} variants={fadeUp} initial="hidden" animate="show" className="flex flex-wrap gap-5">
              <a href="#contato" className="btn-primary px-8 py-4.5 rounded-full text-base font-bold flex items-center gap-3 group">
                <span>Solicitar Diagnostico Estrategico</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#metodologia" className="btn-secondary px-8 py-4.5 rounded-full text-base font-semibold flex items-center gap-3">
                <span>Conhecer Metodologia</span>
              </a>
            </motion.div>

            <motion.div custom={4} variants={fadeUp} initial="hidden" animate="show" className="mt-14 flex items-center gap-8">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2.5">
                  {['bg-cyan-600', 'bg-gray-600', 'bg-cyan-800'].map((c, i) => (
                    <div key={i} className={`w-9 h-9 rounded-full border-2 border-[#0a0a0a] ${c} flex items-center justify-center text-xs font-bold text-white`}>
                      {['M', 'C', 'R'][i]}
                    </div>
                  ))}
                </div>
                <span className="text-sm text-gray-400 font-medium">+180 empresas implementadas</span>
              </div>
              <div className="h-6 w-px bg-white/10" />
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  {[1,2,3,4,5].map(i => (
                    <svg key={i} className="w-3.5 h-3.5 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm text-gray-400">Avaliacao 4.9</span>
              </div>
            </motion.div>
          </div>

          <motion.div custom={2} variants={fadeUp} initial="hidden" animate="show" className="relative hidden lg:block">
            <div className="float relative">
              <div className="glass-cyan rounded-3xl p-8 glow-cyan-subtle luxury-border">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-widest mb-1.5 font-medium">Painel de Performance</p>
                    <p className="text-base font-semibold text-white">Marco 2025</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs text-emerald-400 font-semibold">Sistema Ativo</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  {dashboardMetrics.map((m, i) => (
                    <div key={i} className="glass rounded-2xl p-5" style={{ background: 'rgba(255,255,255,0.015)' }}>
                      <div className="flex items-center justify-between mb-3">
                        <m.icon size={16} className="text-cyan-400" />
                        <span className="text-xs font-bold text-emerald-400">{m.change}</span>
                      </div>
                      <div className="text-2xl font-black text-white mb-1" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                        <AnimatedCounter target={m.value} suffix={m.suffix} prefix={m.prefix} />
                      </div>
                      <div className="text-xs text-gray-500 font-medium">{m.label}</div>
                    </div>
                  ))}
                </div>

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs text-gray-500 font-medium">Performance Semanal</span>
                    <span className="text-xs font-bold text-cyan-400">+47% vs mes anterior</span>
                  </div>
                  <div className="flex items-end gap-2 h-20">
                    {weekData.map((h, i) => (
                      <motion.div
                        key={i}
                        initial={{ scaleY: 0 }}
                        animate={{ scaleY: 1 }}
                        transition={{ duration: 0.6, delay: 1 + i * 0.07, ease: 'easeOut' }}
                        style={{ originY: 1, height: `${h}%` }}
                        className="flex-1 rounded-sm"
                      >
                        <div
                          className="w-full h-full rounded-sm transition-all duration-300 hover:brightness-125"
                          style={{
                            background: i >= 9
                              ? `linear-gradient(to top, rgba(0, 212, 255, 0.4), rgba(0, 212, 255, 0.8))`
                              : `rgba(0, 212, 255,${0.15 + (i / 11) * 0.35})`,
                          }}
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <motion.div
              className="float-delayed absolute -top-10 -right-10 glass-cyan rounded-2xl p-5 w-56 luxury-border"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2, duration: 0.7 }}
            >
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-cyan-500/15 border border-cyan-500/20">
                  <Zap size={18} className="text-cyan-400" />
                </div>
                <div>
                  <div className="text-xl font-black text-white" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>R$ 8,40</div>
                  <div className="text-xs text-gray-400 font-medium">CAC Otimizado</div>
                </div>
              </div>
              <div className="mt-3 flex items-center gap-2">
                <div className="h-1.5 flex-1 rounded-full bg-white/5">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-cyan-600 to-cyan-400"
                    initial={{ width: 0 }}
                    animate={{ width: '75%' }}
                    transition={{ delay: 1.8, duration: 1.2 }}
                  />
                </div>
                <span className="text-xs text-cyan-400 font-bold">-42%</span>
              </div>
            </motion.div>

            <motion.div
              className="float absolute -bottom-8 -left-12 glass-cyan rounded-2xl p-5 w-52 luxury-border"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.4, duration: 0.7 }}
            >
              <div className="flex items-center gap-2.5 mb-2.5">
                <TrendingUp size={15} className="text-cyan-400" />
                <span className="text-xs text-gray-400 font-medium">Growth Rate</span>
              </div>
              <div className="text-3xl font-black gradient-cyan" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                <AnimatedCounter target={847} suffix="%" />
              </div>
              <div className="text-xs text-gray-500 mt-1.5 font-medium">Ultimos 90 dias</div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-gray-600 tracking-[0.2em] uppercase font-medium">Explorar</span>
          <ChevronDown size={18} className="text-gray-600 scroll-indicator" />
        </motion.div>
      </motion.div>
    </section>
  );
}
