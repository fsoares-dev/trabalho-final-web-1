import { Shield, Target, Layers, CheckCircle2 } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Monte sua reserva de emergência',
    description:
      'Antes de qualquer investimento, guarde de 3 a 6 meses das suas despesas mensais em aplicações de alta liquidez — como o Tesouro Selic ou CDB com liquidez diária. Esse dinheiro não é para crescer, é para te proteger.',
    icon: Shield,
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/20',
  },
  {
    number: '02',
    title: 'Defina seu perfil de risco',
    description:
      'Conservador, moderado ou arrojado? Seu perfil determina quanto você aloca em renda fixa e renda variável. Iniciantes devem começar conservadores e migrar gradualmente.',
    icon: Target,
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/20',
  },
  {
    number: '03',
    title: 'Diversifique suas aplicações',
    description:
      'Não coloque tudo em um só lugar. Uma carteira equilibrada combina renda fixa (Tesouro Direto, CDB, LCI, LCA), fundos imobiliários (FIIs) e ações/ETFs. Diversificar reduz riscos sem abrir mão do crescimento.',
    icon: Layers,
    color: 'text-amber-400',
    bg: 'bg-amber-500/10',
    border: 'border-amber-500/20',
  },
];

const checkItems = [
  'Reserva de emergência de 3–6 meses de despesas',
  'Ao menos um produto de renda fixa com liquidez',
  'Reinvestimento de rendimentos (não retire os juros)',
  'Revisão trimestral da carteira',
  'Aportes mensais automáticos (automatize para não esquecer)',
];

export default function CarteiraPrimeira() {
  return (
    <section id="carteira" className="py-20 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium mb-4">
            Passo a passo
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Sua primeira carteira de investimentos
          </h2>
          <p className="text-gray-400 max-w-2xl text-lg">
            Montar uma carteira não precisa ser complicado. Siga essa ordem e você estará no caminho certo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {steps.map((step) => (
            <div
              key={step.number}
              className={`rounded-2xl bg-[#141618] border ${step.border} p-6 hover:border-opacity-60 transition-all duration-300 group`}
            >
              <div className={`w-10 h-10 rounded-xl ${step.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <step.icon className={`w-5 h-5 ${step.color}`} />
              </div>
              <div className="text-xs font-bold text-gray-600 mb-2 tracking-widest">{step.number}</div>
              <h3 className="text-lg font-semibold text-white mb-3">{step.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Checklist */}
        <div className="rounded-2xl bg-[#141618] border border-white/6 p-6">
          <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-5">
            Checklist da carteira inicial
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {checkItems.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-300">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
