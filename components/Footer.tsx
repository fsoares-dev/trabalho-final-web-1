import { TrendingUp } from 'lucide-react';

const links = [
  { label: 'Carteira', href: '#carteira' },
  { label: 'Quanto Investir', href: '#quanto-investir' },
  { label: 'Escalar Patrimônio', href: '#escalar' },
  { label: 'Investimentos', href: '#investimentos' },
  { label: 'Análise de Mercado', href: '#analise' },
  { label: 'Calculadora', href: '#calculadora' },
  { label: 'Fontes Confiáveis', href: '#fontes' },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#0a0c0f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="max-w-sm">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 rounded-lg bg-emerald-500 flex items-center justify-center">
                <TrendingUp className="w-3.5 h-3.5 text-[#0d0f12]" strokeWidth={2.5} />
              </div>
              <span className="font-bold text-white text-base tracking-tight">
                Invest<span className="text-emerald-400">Jovem</span>
              </span>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed">
              Educação financeira acessível para jovens brasileiros. Conteúdo informativo — não constitui recomendação de investimento.
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-gray-500 hover:text-white transition-colors duration-150"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-10 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-600">
            © 2024 InvestJovem. Conteúdo educacional — não é consultoria financeira.
          </p>
          <p className="text-xs text-gray-600">
            Dados de referência: Banco Central do Brasil, B3, CVM.
          </p>
        </div>
      </div>
    </footer>
  );
}
