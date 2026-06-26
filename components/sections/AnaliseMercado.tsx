import { Eye, BookOpen, AlertCircle, TrendingDown } from 'lucide-react';

const concepts = [
  {
    term: 'Selic',
    def: 'A taxa básica de juros da economia brasileira, definida pelo Banco Central. Referência para todos os investimentos de renda fixa.',
  },
  {
    term: 'CDI',
    def: 'Certificado de Depósito Interbancário. Taxa muito próxima da Selic, usada como referência para CDBs e fundos.',
  },
  {
    term: 'IPCA',
    def: 'Índice de Preços ao Consumidor Amplo. Mede a inflação oficial do Brasil. Investimentos IPCA+ protegem seu poder de compra.',
  },
  {
    term: 'P/L',
    def: 'Preço/Lucro. Indica quantos anos levaria para recuperar o investimento num ativo. Útil para comparar ações do mesmo setor.',
  },
  {
    term: 'Dividend Yield',
    def: 'Percentual de dividendos pagos em relação ao preço do ativo. FIIs e ações pagadoras de dividendos têm DY relevante.',
  },
  {
    term: 'Volatilidade',
    def: 'Medida de quanto um ativo oscila de preço. Alta volatilidade = mais risco e potencial de retorno. Baixa = mais estabilidade.',
  },
];

const mistakes = [
  {
    icon: TrendingDown,
    title: 'Vender na queda por pânico',
    body: 'O mercado oscila. Quem vende na baixa realiza o prejuízo. Investidores de longo prazo usam quedas como oportunidade de compra.',
  },
  {
    icon: Eye,
    title: 'Olhar a carteira todo dia',
    body: 'Verificar o saldo diariamente cria ansiedade e decisões emocionais. Revise mensalmente ou trimestralmente, não diariamente.',
  },
  {
    icon: AlertCircle,
    title: 'Seguir dicas de influencers',
    body: 'Muitos "gurus" não têm certificação e podem ter interesse nos produtos que indicam. Prefira fontes reguladas (CVM, B3, CFPs).',
  },
  {
    icon: BookOpen,
    title: 'Não entender o que compra',
    body: 'Nunca invista em algo que não consegue explicar com suas palavras. Simplicidade e entendimento batem qualquer estratégia complexa.',
  },
];

export default function AnaliseMercado() {
  return (
    <section id="analise" className="py-20 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium mb-4">
            Conhecimento essencial
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Analisar o mercado com segurança
          </h2>
          <p className="text-gray-400 max-w-2xl text-lg">
            Você não precisa virar especialista. Mas entender os conceitos básicos evita erros caros.
          </p>
        </div>

        {/* Glossary */}
        <div className="rounded-2xl bg-[#141618] border border-white/6 p-6 mb-8">
          <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-5">
            Glossário essencial
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {concepts.map((c) => (
              <div key={c.term} className="p-4 rounded-xl bg-[#0d0f12] border border-white/5">
                <div className="text-sm font-bold text-emerald-400 mb-1.5">{c.term}</div>
                <p className="text-xs text-gray-400 leading-relaxed">{c.def}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Common mistakes */}
        <div>
          <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-5">
            Erros mais comuns do investidor iniciante
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {mistakes.map((m) => (
              <div key={m.title} className="rounded-2xl bg-[#141618] border border-white/6 p-5 flex gap-4 hover:border-red-500/20 transition-colors group">
                <div className="w-9 h-9 rounded-lg bg-red-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-red-500/15 transition-colors">
                  <m.icon className="w-4 h-4 text-red-400" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white mb-1.5">{m.title}</h4>
                  <p className="text-sm text-gray-400 leading-relaxed">{m.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
