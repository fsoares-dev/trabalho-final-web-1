import { AlertTriangle, TrendingUp, Zap } from 'lucide-react';

const tiers = [
  {
    pct: '10%',
    title: 'Mínimo recomendado',
    description: 'Se você ganha R$ 3.000, guarde R$ 300/mês. Parece pouco, mas com consistência faz diferença enorme em 10 anos.',
    icon: Zap,
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/20',
    tag: 'Iniciante',
    tagColor: 'bg-blue-500/20 text-blue-300',
  },
  {
    pct: '20%',
    title: 'Meta intermediária',
    description: 'Com 20% do salário investido, você acelera a formação de patrimônio e fica mais perto da liberdade financeira mais cedo.',
    icon: TrendingUp,
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/20',
    tag: 'Recomendado',
    tagColor: 'bg-emerald-500/20 text-emerald-300',
  },
  {
    pct: '30%+',
    title: 'Aceleração patrimonial',
    description: 'Para quem tem disciplina e renda estável, 30% ou mais cria um efeito bola de neve poderoso. Exige controle de gastos firme.',
    icon: AlertTriangle,
    color: 'text-amber-400',
    bg: 'bg-amber-500/10',
    border: 'border-amber-500/20',
    tag: 'Avançado',
    tagColor: 'bg-amber-500/20 text-amber-300',
  },
];

const rules = [
  {
    title: 'Pague-se primeiro',
    body: 'Assim que receber o salário, transfira automaticamente o valor destinado a investimentos. Não espere o mês passar e guardar o que sobrar — raramente sobra.',
  },
  {
    title: 'Invista antes de gastar',
    body: 'Configure transferências automáticas no dia do pagamento. Trate o investimento como uma conta fixa, não como opção.',
  },
  {
    title: 'Aumente 1% por mês',
    body: 'A cada aumento de renda ou redução de despesa, aumente 1% do que você investe. Pequenos incrementos compostos são poderosos.',
  },
];

export default function QuantoInvestir() {
  return (
    <section id="quanto-investir" className="py-20 scroll-mt-16 bg-[#0a0c0f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium mb-4">
            Disciplina financeira
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Quanto do salário investir?
          </h2>
          <p className="text-gray-400 max-w-2xl text-lg">
            Não existe resposta única. O importante é começar — mesmo que seja pouco — e aumentar gradualmente.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {tiers.map((tier) => (
            <div
              key={tier.pct}
              className={`rounded-2xl bg-[#141618] border ${tier.border} p-6 relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`w-10 h-10 rounded-xl ${tier.bg} flex items-center justify-center`}>
                  <tier.icon className={`w-5 h-5 ${tier.color}`} />
                </div>
                <span className={`text-xs font-medium px-2 py-1 rounded-full ${tier.tagColor}`}>{tier.tag}</span>
              </div>
              <div className={`text-4xl font-bold ${tier.color} mb-2`}>{tier.pct}</div>
              <h3 className="text-base font-semibold text-white mb-3">{tier.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{tier.description}</p>
            </div>
          ))}
        </div>

        {/* Rules */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {rules.map((rule, i) => (
            <div key={i} className="rounded-xl bg-[#141618] border border-white/5 p-5">
              <div className="text-xs font-bold text-emerald-400 mb-2 uppercase tracking-widest">
                Regra {i + 1}
              </div>
              <h4 className="text-base font-semibold text-white mb-2">{rule.title}</h4>
              <p className="text-sm text-gray-400 leading-relaxed">{rule.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
