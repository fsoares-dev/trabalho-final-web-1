import { RefreshCw, Clock, DollarSign, BarChart3 } from 'lucide-react';

const principles = [
  {
    icon: RefreshCw,
    title: 'Reinvista todos os rendimentos',
    body: 'O poder dos juros compostos exige que você não retire os rendimentos. Cada real de juros reinvestido gera mais juros no mês seguinte.',
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
  },
  {
    icon: Clock,
    title: 'O tempo é seu maior aliado',
    body: 'R$ 500/mês investidos a 12% a.a. por 10 anos viram cerca de R$ 115.000. Por 20 anos, ultrapassam R$ 494.000. O segredo é não parar.',
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
  },
  {
    icon: DollarSign,
    title: 'Aumente os aportes com o tempo',
    body: 'A cada promoção ou renda extra, aumente o valor mensal investido. Não deixe o estilo de vida crescer na mesma proporção que a renda.',
    color: 'text-amber-400',
    bg: 'bg-amber-500/10',
  },
  {
    icon: BarChart3,
    title: 'Rebalanceie sua carteira anualmente',
    body: 'Com o tempo, alguns ativos sobem mais que outros e saem da proporção ideal. Rebalancear anualmente mantém o risco sob controle.',
    color: 'text-purple-400',
    bg: 'bg-purple-500/10',
  },
];

const milestones = [
  { year: 'Ano 1', goal: 'Reserva de emergência completa + primeiros aportes em renda fixa', achieved: true },
  { year: 'Ano 2–3', goal: 'Carteira consolidada, primeiros FIIs ou ETFs, automatização total', achieved: false },
  { year: 'Ano 5', goal: 'Patrimônio de 12× o salário anual, renda passiva cobrindo pequenas despesas', achieved: false },
  { year: 'Ano 10', goal: 'Liberdade financeira parcial: renda passiva cobre 50%+ das despesas mensais', achieved: false },
];

export default function EscalarPatrimonio() {
  return (
    <section id="escalar" className="py-20 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-medium mb-4">
            Longo prazo
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Como escalar seu patrimônio
          </h2>
          <p className="text-gray-400 max-w-2xl text-lg">
            Construir riqueza não é evento, é processo. Consistência e tempo fazem mais do que qualquer dica milagrosa.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-12">
          {principles.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl bg-[#141618] border border-white/6 p-6 flex gap-4 hover:border-white/10 transition-colors group"
            >
              <div className={`w-10 h-10 rounded-xl ${p.bg} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                <p.icon className={`w-5 h-5 ${p.color}`} />
              </div>
              <div>
                <h3 className="text-base font-semibold text-white mb-2">{p.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{p.body}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="rounded-2xl bg-[#141618] border border-white/6 p-6">
          <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-6">
            Marcos do investidor consistente
          </h3>
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-white/8" />
            <div className="space-y-6">
              {milestones.map((m, i) => (
                <div key={i} className="relative pl-10">
                  <div className={`absolute left-0 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold border ${
                    i === 0
                      ? 'bg-emerald-500/20 border-emerald-500/40 text-emerald-400'
                      : 'bg-white/5 border-white/10 text-gray-500'
                  }`}>
                    {i + 1}
                  </div>
                  <div>
                    <span className={`text-xs font-semibold uppercase tracking-widest ${i === 0 ? 'text-emerald-400' : 'text-gray-500'}`}>
                      {m.year}
                    </span>
                    <p className="text-sm text-gray-300 mt-1">{m.goal}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
