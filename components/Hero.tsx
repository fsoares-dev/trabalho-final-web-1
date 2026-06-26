import { ArrowDown, TrendingUp, Shield, Target } from 'lucide-react';

const stats = [
  { value: '72%', label: 'dos jovens não têm reserva de emergência' },
  { value: '8%', label: 'do Tesouro Selic ao ano (referência)' },
  { value: '30x', label: 'potencial de crescimento em 10 anos' },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-16">
      {/* Background gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-emerald-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Educação financeira para 18–30 anos
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Seu dinheiro pode
            <br />
            trabalhar por você.
            <br />
            <span className="text-emerald-400">Comece agora.</span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-400 leading-relaxed max-w-2xl mb-10">
            Aprenda a montar sua primeira carteira de investimentos, descobra quanto do salário guardar
            e veja como pequenos hábitos constantes constroem um patrimônio sólido ao longo do tempo.
          </p>

          <div className="flex flex-wrap gap-4 mb-16">
            <a
              href="#calculadora"
              className="px-6 py-3 bg-emerald-500 text-[#0d0f12] font-semibold rounded-xl hover:bg-emerald-400 transition-all duration-200 hover:shadow-lg hover:shadow-emerald-500/20"
            >
              Usar a calculadora
            </a>
            <a
              href="#carteira"
              className="px-6 py-3 bg-white/5 text-white font-semibold rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-200"
            >
              Ver o conteúdo
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="p-4 rounded-xl bg-white/3 border border-white/6 hover:border-white/10 transition-colors"
              >
                <div className="text-2xl font-bold text-emerald-400 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="relative flex justify-center pb-8">
        <a href="#carteira" className="flex flex-col items-center gap-2 text-gray-500 hover:text-gray-300 transition-colors group">
          <span className="text-xs uppercase tracking-widest">Explorar</span>
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </a>
      </div>
    </section>
  );
}
