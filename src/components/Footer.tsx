import { MessageCircle, Mail, MapPin, ArrowUpRight } from 'lucide-react';

const quickLinks = [
  { label: 'Metodologia', href: '#metodologia' },
  { label: 'Solucoes', href: '#solucoes' },
  { label: 'Resultados', href: '#resultados' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'Diagnostico', href: '#contato' },
];

const services = ['Sistema de Aquisicao', 'Infraestrutura CRM', 'Reativacao de Clientes', 'Estrutura Comercial', 'Sistemas de Conversao', 'Ecossistema de Crescimento'];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden" style={{ background: 'var(--graphite-900)', borderTop: '1px solid rgba(0, 212, 255, 0.06)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-3 mb-6 group w-fit">
              <motion.img
                src="https://i.ibb.co/DfqWpvjF/l-xus-logo.png"
                alt="Loxus"
                className="h-10 w-auto"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </a>
            <p className="text-gray-500 text-base leading-relaxed mb-8 max-w-md font-light">
              Arquitetura de crescimento previsivel para empresas que querem escalar.
              Implementamos sistemas completos de aquisicao, conversao e escala.
            </p>
            <div className="flex flex-col gap-4">
              <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors group/link">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'rgba(37,211,102,0.08)', border: '1px solid rgba(37,211,102,0.15)' }}>
                  <MessageCircle size={17} className="text-emerald-400" />
                </div>
                <span className="font-medium">(11) 99999-9999</span>
                <ArrowUpRight size={14} className="opacity-0 group-hover/link:opacity-100 transition-opacity text-cyan-400" />
              </a>
              <a href="mailto:contato@loxus.com.br" className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors group/link">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'rgba(0, 212, 255, 0.05)', border: '1px solid rgba(0, 212, 255, 0.1)' }}>
                  <Mail size={17} className="text-cyan-400" />
                </div>
                <span className="font-medium">contato@loxus.com.br</span>
                <ArrowUpRight size={14} className="opacity-0 group-hover/link:opacity-100 transition-opacity text-cyan-400" />
              </a>
              <div className="flex items-center gap-4 text-gray-500">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.04)' }}>
                  <MapPin size={17} className="text-gray-500" />
                </div>
                <span className="font-medium">Sao Paulo, SP · Brasil</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm mb-6 uppercase tracking-widest">Navegacao</h4>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm text-gray-500 hover:text-white transition-colors font-medium group/link">
                    <span className="group-hover/link:translate-x-1 transition-transform inline-block">{l.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm mb-6 uppercase tracking-widest">Solucoes</h4>
            <ul className="flex flex-col gap-3">
              {services.map((s) => (
                <li key={s}><span className="text-sm text-gray-500 font-medium">{s}</span></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-10" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.04)' }}>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <p className="text-xs text-gray-600 font-medium">© {new Date().getFullYear()} Loxus. Todos os direitos reservados.</p>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs text-gray-600 font-medium">Sistema operando normalmente</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
