import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: 'Marcelo Viana', role: 'CEO · Construtora Viana', avatar: 'MV',
    text: 'Em 60 dias, saímos de um pipeline de 3 oportunidades por mes para mais de 40. O custo de aquisicao caiu 61% e a previsibilidade de receita permitiu planejar contratacoes e investimentos que antes eram impossíveis. A metodologia transformou completamente nossa estrutura comercial.',
    metric: '+1.300% pipeline', sector: 'Construcao Civil',
  },
  {
    name: 'Camila Rezende', role: 'Diretora Comercial · Clínica Estética Renova', avatar: 'CR',
    text: 'A infraestrutura CRM que implementaram foi um divisor de águas. Antes, a equipe perdia horas em processos manuais. Hoje, o sistema qualifica, rastreia e converte automaticamente. Triplicamos os agendamentos sem aumentar a equipe. Previsibilidade real de faturamento.',
    metric: '3x conversao', sector: 'Saude e Estetica',
  },
  {
    name: 'Rafael Drummond', role: 'Fundador · Drummond Advocacia', avatar: 'RD',
    text: 'Nunca imaginei que um escritório de advocacia pudesse ter um sistema de aquisicao tão estruturado. O sistema de reativacao de clientes inativos gerou R$ 847.000 em receita recuperada nos primeiros 6 meses. A metodologia funciona para qualquer modelo de negocio.',
    metric: 'R$ 847k recuperado', sector: 'Juridico',
  },
  {
    name: 'Tatiane Borges', role: 'Sócia · Studio Borges Arquitetura', avatar: 'TB',
    text: 'O diagnostico inicial identificou exatamente onde estávamos perdendo oportunidades. O sistema de conversao que implementaram hoje transforma 34% dos leads em propostas enviadas. Nossa agenda está preenchida com 4 meses de antecedência. Crescimento previsível.',
    metric: '34% taxa de proposta', sector: 'Arquitetura',
  },
  {
    name: 'Bruno Castelo', role: 'CEO · EduTech Castelo', avatar: 'BC',
    text: 'Escalamos de 200 para 1.800 alunos em menos de 6 meses. A arquitetura de crescimento que desenharam funciona como um relógio: aquisicao, estruturação, conversão, escala. Agora temos previsibilidade real de receita e estamos expandindo para novos mercados.',
    metric: '800% crescimento', sector: 'Educação',
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    if (!autoplay) return;
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((c) => (c + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [autoplay, current]);

  const go = (dir: number) => {
    setAutoplay(false);
    setDirection(dir);
    setCurrent((c) => (c + dir + testimonials.length) % testimonials.length);
  };

  const t = testimonials[current];

  return (
    <section id="depoimentos" className="relative py-32 overflow-hidden" style={{ background: 'var(--graphite-900)' }}>
      <div className="absolute top-0 left-0 right-0 premium-line" />
      <div className="dot-pattern absolute inset-0 opacity-40" />
      <div className="blob-cyan absolute bottom-0 left-1/3 w-[600px] h-[600px] rounded-full opacity-20" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-20">
          <span className="tag-premium inline-block mb-6">Resultados Reais</span>
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-black tracking-tight mb-6" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            Empresas que implementaram a{' '}
            <span className="gradient-cyan">metodologia</span>
          </h2>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              initial={{ opacity: 0, x: direction * 80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -80 }}
              transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
              className="glass-cyan rounded-3xl p-10 lg:p-12 relative overflow-hidden luxury-border"
            >
              <div className="blob-cyan absolute top-0 right-0 w-80 h-80 rounded-full opacity-25" />

              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-10 bg-cyan-500/10 border border-cyan-500/15">
                <Quote size={22} className="text-cyan-400" />
              </div>

              <p className="text-xl lg:text-2xl text-gray-200 leading-relaxed mb-12 max-w-3xl font-light">"{t.text}"</p>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center text-sm font-black text-white" style={{ background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.5), rgba(0, 212, 255, 0.25))', border: '1px solid rgba(0, 212, 255, 0.3)' }}>
                    {t.avatar}
                  </div>
                  <div>
                    <div className="font-bold text-white text-lg">{t.name}</div>
                    <div className="text-sm text-gray-400 font-medium">{t.role}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 flex-wrap sm:flex-nowrap">
                  <span className="text-xs px-4 py-2 rounded-full font-medium" style={{ background: 'rgba(0, 212, 255, 0.08)', border: '1px solid rgba(0, 212, 255, 0.2)', color: 'var(--cyan)' }}>{t.sector}</span>
                  <span className="text-xs px-4 py-2 rounded-full font-bold" style={{ background: 'rgba(0, 212, 255, 0.15)', border: '1px solid rgba(0, 212, 255, 0.3)', color: 'var(--cyan-light)' }}>{t.metric}</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-between mt-10">
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setAutoplay(false); setDirection(i > current ? 1 : -1); setCurrent(i); }}
                  className="h-1.5 rounded-full transition-all duration-400"
                  style={{ width: i === current ? '32px' : '10px', background: i === current ? 'var(--cyan)' : 'rgba(255,255,255,0.12)' }}
                />
              ))}
            </div>
            <div className="flex gap-3">
              <button onClick={() => go(-1)} className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 hover:bg-cyan-500/10" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
                <ChevronLeft size={20} className="text-gray-400" />
              </button>
              <button onClick={() => go(1)} className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 hover:bg-cyan-500/10" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
                <ChevronRight size={20} className="text-gray-400" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
