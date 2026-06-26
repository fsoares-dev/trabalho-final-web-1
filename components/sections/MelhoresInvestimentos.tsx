import { Lock, BarChart2, Building2 } from 'lucide-react';

const categories = [
  {
    icon: Lock,
    title: 'Renda Fixa',
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/20',
    badge: 'Menor risco',
    badgeColor: 'bg-blue-500/15 text-blue-300',
    items: [
      { name: 'Tesouro Selic', desc: 'Liquidez diária, segue a Selic. Ideal para reserva de emergência.' },
      { name: 'Tesouro IPCA+', desc: 'Protege da inflação. Ótimo para longo prazo (aposentadoria).' },
      { name: 'CDB', desc: 'Emitido por bancos. Rendimento varia: pode superar 100% do CDI.' },
      { name: 'LCI / LCA', desc: 'Isentos de IR para pessoa física. Prazo mínimo de carência.' },
    ],
    profiles: ['Conservador', 'Moderado', 'Arrojado'],
  },
  {
    icon: Building2,
    title: 'Fundos Imobiliários (FIIs)',
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/20',
    badge: 'Renda passiva',
    badgeColor: 'bg-emerald-500/15 text-emerald-300',
    items: [
      { name: 'FIIs de tijolo', desc: 'Investem em imóveis físicos: shoppings, galpões, lajes.' },
      { name: 'FIIs de papel', desc: 'Investem em CRIs e CRAs, rendimento atrelado ao CDI ou IPCA.' },
      { name: 'FIIs de fundo', desc: 'Compram cotas de outros FIIs. Alta diversificação.' },
      { name: 'ETFs de FIIs', desc: 'Como XFIX11 ou RBFF11: diversificam com um único ativo.' },
    ],
    profiles: ['Moderado', 'Arrojado'],
  },
  {
    icon: BarChart2,
    title: 'Renda Variável',
    color: 'text-amber-400',
    bg: 'bg-amber-500/10',
    border: 'border-amber-500/20',
    badge: 'Maior potencial',
    badgeColor: 'bg-amber-500/15 text-amber-300',
    items: [
      { name: 'ETFs de ações', desc: 'BOVA11, IVVB11: exposição ampla com baixo custo e simplicidade.' },
      { name: 'Ações', desc: 'Parte de empresas reais. Exige mais estudo e aceita mais volatilidade.' },
      { name: 'BDRs', desc: 'Recibos de ações internacionais negociados na B3 (Apple, Amazon etc.).' },
      { name: 'Fundos de ações', desc: 'Gestão profissional. Avalie o histórico e o custo (taxa de adm.).' },
    ],
    profiles: ['Arrojado'],
  },
];

export default function MelhoresInvestimentos() {
  return (
    <section id="investimentos" className="py-20 scroll-mt-16 bg-[#0a0c0f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium mb-4">
            Universo de investimentos
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Investimentos por perfil de risco
          </h2>
          <p className="text-gray-400 max-w-2xl text-lg">
            Cada produto tem características, riscos e retornos diferentes. Conheça os principais disponíveis no mercado brasileiro.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className={`rounded-2xl bg-[#141618] border ${cat.border} p-6 flex flex-col`}
            >
              <div className="flex items-start justify-between mb-5">
                <div className={`w-10 h-10 rounded-xl ${cat.bg} flex items-center justify-center`}>
                  <cat.icon className={`w-5 h-5 ${cat.color}`} />
                </div>
                <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${cat.badgeColor}`}>
                  {cat.badge}
                </span>
              </div>

              <h3 className={`text-xl font-bold ${cat.color} mb-4`}>{cat.title}</h3>

              <div className="space-y-3 flex-1">
                {cat.items.map((item) => (
                  <div key={item.name} className="p-3 rounded-xl bg-[#0d0f12] border border-white/5">
                    <p className="text-sm font-semibold text-white mb-1">{item.name}</p>
                    <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="mt-5 pt-4 border-t border-white/5">
                <p className="text-xs text-gray-600 mb-2">Indicado para</p>
                <div className="flex flex-wrap gap-1.5">
                  {cat.profiles.map((p) => (
                    <span key={p} className="text-xs px-2 py-0.5 rounded-full bg-white/5 text-gray-400 border border-white/8">
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-xl bg-[#141618] border border-amber-500/20 p-4 flex gap-3">
          <div className="w-5 h-5 rounded-full bg-amber-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
            <span className="text-amber-400 text-xs font-bold">!</span>
          </div>
          <p className="text-sm text-gray-400 leading-relaxed">
            <span className="text-amber-400 font-semibold">Atenção: </span>
            este site tem finalidade educacional e não constitui recomendação de investimento. Nenhum produto específico de corretora é indicado aqui.
            Antes de investir, analise as características do produto, seu prazo e liquidez.
          </p>
        </div>
      </div>
    </section>
  );
}
