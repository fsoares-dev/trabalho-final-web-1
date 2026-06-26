import { ExternalLink, BookOpen, Radio, FileText, GraduationCap } from 'lucide-react';

const sources = [
  {
    category: 'Órgãos reguladores',
    icon: FileText,
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
    items: [
      { name: 'Banco Central do Brasil', desc: 'Dados sobre Selic, inflação, Relatório Focus e regulação', url: 'bcb.gov.br' },
      { name: 'CVM', desc: 'Comissão de Valores Mobiliários: fiscaliza e regula o mercado de capitais', url: 'gov.br/cvm' },
      { name: 'B3', desc: 'Bolsa de valores brasileira: dados de mercado, cotações e fundamentos', url: 'b3.com.br' },
    ],
  },
  {
    category: 'Educação e conteúdo',
    icon: GraduationCap,
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
    items: [
      { name: 'Me Poupe! (Nathalia Arcuri)', desc: 'Canal e livros sobre finanças pessoais para iniciantes', url: 'youtube.com' },
      { name: 'Tesouro Direto (oficial)', desc: 'Educação sobre títulos públicos, simulador e informações completas', url: 'tesourodireto.com.br' },
      { name: 'Dinheirama', desc: 'Artigos sobre investimentos, impostos e planejamento financeiro', url: 'dinheirama.com' },
    ],
  },
  {
    category: 'Livros recomendados',
    icon: BookOpen,
    color: 'text-amber-400',
    bg: 'bg-amber-500/10',
    items: [
      { name: 'O Homem Mais Rico da Babilônia', desc: 'George Clason — princípios atemporais de poupança e investimento', url: '' },
      { name: 'Pai Rico, Pai Pobre', desc: 'Robert Kiyosaki — mentalidade sobre ativos, passivos e liberdade financeira', url: '' },
      { name: 'A Psicologia Financeira', desc: 'Morgan Housel — como o comportamento humano afeta as finanças', url: '' },
    ],
  },
];

const warnings = [
  'Desconfie de promessas de ganhos garantidos acima da Selic',
  'Verifique se o profissional tem certificação (CFP, CEA, CGA)',
  'Fuja de "grupos VIP" de sinais de investimento',
  'Nunca invista dinheiro que vai precisar no curto prazo em renda variável',
];

export default function FontesConfiaveis() {
  return (
    <section id="fontes" className="py-20 scroll-mt-16 bg-[#0a0c0f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-medium mb-4">
            Aprenda com segurança
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Fontes confiáveis para se informar
          </h2>
          <p className="text-gray-400 max-w-2xl text-lg">
            O mercado financeiro é cheio de ruído. Filtre as fontes certas e ignore o resto.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
          {sources.map((src) => (
            <div key={src.category} className="rounded-2xl bg-[#141618] border border-white/6 p-6">
              <div className="flex items-center gap-3 mb-5">
                <div className={`w-9 h-9 rounded-xl ${src.bg} flex items-center justify-center`}>
                  <src.icon className={`w-4 h-4 ${src.color}`} />
                </div>
                <h3 className="text-sm font-semibold text-gray-300">{src.category}</h3>
              </div>
              <div className="space-y-3">
                {src.items.map((item) => (
                  <div key={item.name} className="p-3 rounded-xl bg-[#0d0f12] border border-white/5 group">
                    <div className="flex items-start justify-between gap-2">
                      <p className="text-sm font-semibold text-white">{item.name}</p>
                      {item.url && (
                        <ExternalLink className="w-3.5 h-3.5 text-gray-600 flex-shrink-0 mt-0.5" />
                      )}
                    </div>
                    <p className="text-xs text-gray-500 mt-1 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Red flags */}
        <div className="rounded-2xl bg-red-500/5 border border-red-500/20 p-6">
          <h3 className="text-sm font-semibold text-red-400 uppercase tracking-widest mb-4">
            Sinais de alerta — fuja de
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {warnings.map((w, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="text-red-400 text-base mt-0.5 flex-shrink-0">×</span>
                <span className="text-sm text-gray-400">{w}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
