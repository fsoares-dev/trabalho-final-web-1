'use client';

import { useState, useMemo } from 'react';
import { Info } from 'lucide-react';

type Profile = 'conservador' | 'moderado' | 'arrojado';

const profiles: Record<Profile, { emergency: number; fixed: number; variable: number; defaultRate: number; label: string; description: string }> = {
  conservador: {
    emergency: 30,
    fixed: 50,
    variable: 20,
    defaultRate: 11,
    label: 'Conservador',
    description:
      'Perfil conservador: ideal para quem está começando ou ainda não tem reserva de emergência completa (6 meses de despesas). Priorize segurança antes de buscar retorno maior.',
  },
  moderado: {
    emergency: 20,
    fixed: 40,
    variable: 40,
    defaultRate: 13,
    label: 'Moderado',
    description:
      'Perfil moderado: equilíbrio entre segurança e crescimento. Você já tem uma reserva de emergência formada e aceita alguma volatilidade em busca de retornos melhores.',
  },
  arrojado: {
    emergency: 10,
    fixed: 30,
    variable: 60,
    defaultRate: 16,
    label: 'Arrojado',
    description:
      'Perfil arrojado: você tem reserva de emergência sólida, horizonte de investimento longo e tolerância a oscilações. Busca crescimento acelerado via renda variável.',
  },
};

function formatBRL(value: number) {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 });
}

function calcProjection(monthly: number, annualRate: number, years: number) {
  const r = Math.pow(1 + annualRate / 100, 1 / 12) - 1;
  const n = years * 12;
  if (r === 0) return monthly * n;
  return monthly * ((Math.pow(1 + r, n) - 1) / r);
}

function SliderRow({
  label,
  min,
  max,
  step,
  value,
  onChange,
  displayValue,
  trackColor,
}: {
  label: string;
  min: number;
  max: number;
  step: number;
  value: number;
  onChange: (v: number) => void;
  displayValue: string;
  trackColor?: string;
}) {
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <div className="mb-5">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm text-gray-400">{label}</span>
        <span className="text-sm font-semibold text-white tabular-nums">{displayValue}</span>
      </div>
      <div className="relative h-4 flex items-center">
        <div className="absolute w-full h-[4px] rounded-full bg-[#2a2d35]" />
        <div
          className="absolute h-[4px] rounded-full transition-all duration-75"
          style={{ width: `${pct}%`, background: trackColor || '#10b981' }}
        />
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="relative w-full opacity-0 cursor-pointer h-4 z-10"
          style={{ margin: 0 }}
        />
        <div
          className="absolute w-[18px] h-[18px] rounded-full bg-white shadow-md pointer-events-none transition-all duration-75"
          style={{ left: `calc(${pct}% - 9px)` }}
        />
      </div>
    </div>
  );
}

function AllocationBar({ label, pct, amount, color }: { label: string; pct: number; amount: number; color: string }) {
  return (
    <div className="mb-3">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm text-gray-400">{label}</span>
        <span className="text-sm text-gray-300 tabular-nums">{pct}%</span>
      </div>
      <div className="relative h-2 bg-[#2a2d35] rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-500"
          style={{ width: `${pct}%`, background: color }}
        />
      </div>
    </div>
  );
}

export default function Calculator() {
  const [salary, setSalary] = useState(3000);
  const [fixedCostPct, setFixedCostPct] = useState(50);
  const [leisurePct, setLeisurePct] = useState(20);
  const [profile, setProfile] = useState<Profile>('conservador');
  const [annualRate, setAnnualRate] = useState(profiles.conservador.defaultRate);

  const investPct = Math.max(0, 100 - fixedCostPct - leisurePct);
  const available = (salary * investPct) / 100;
  const p = profiles[profile];

  const emergency = (available * p.emergency) / 100;
  const fixed = (available * p.fixed) / 100;
  const variable = (available * p.variable) / 100;

  const proj1 = useMemo(() => calcProjection(available, annualRate, 1), [available, annualRate]);
  const proj5 = useMemo(() => calcProjection(available, annualRate, 5), [available, annualRate]);
  const proj10 = useMemo(() => calcProjection(available, annualRate, 10), [available, annualRate]);

  const invested1 = available * 12;
  const invested5 = available * 60;
  const invested10 = available * 120;

  function handleProfileChange(p: Profile) {
    setProfile(p);
    setAnnualRate(profiles[p].defaultRate);
  }

  return (
    <section id="calculadora" className="py-20 scroll-mt-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium mb-4">
            Ferramenta interativa
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Calculadora de Alocação
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Ajuste os sliders para ver quanto você pode investir e como seu patrimônio pode crescer com o tempo.
          </p>
        </div>

        {/* Salary & Expenses */}
        <div className="rounded-2xl bg-[#141618] border border-white/6 p-6 mb-4">
          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-6">
            Seu Salário e Despesas
          </h3>
          <SliderRow
            label="Salário líquido (R$)"
            min={500}
            max={20000}
            step={100}
            value={salary}
            onChange={setSalary}
            displayValue={`R$ ${salary.toLocaleString('pt-BR')}`}
          />
          <SliderRow
            label="Custos fixos (%)"
            min={0}
            max={90}
            step={5}
            value={fixedCostPct}
            onChange={(v) => {
              if (v + leisurePct <= 95) setFixedCostPct(v);
            }}
            displayValue={`${fixedCostPct}%`}
            trackColor="#3b82f6"
          />
          <SliderRow
            label="Lazer e extras (%)"
            min={0}
            max={50}
            step={5}
            value={leisurePct}
            onChange={(v) => {
              if (fixedCostPct + v <= 95) setLeisurePct(v);
            }}
            displayValue={`${leisurePct}%`}
            trackColor="#f59e0b"
          />
        </div>

        {/* Summary cards */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="rounded-2xl bg-[#141618] border border-white/6 p-5">
            <p className="text-xs text-gray-500 mb-1">disponível para investir</p>
            <p className="text-3xl font-bold text-emerald-400 tabular-nums">
              {formatBRL(available)}
            </p>
            <p className="text-xs text-gray-600 mt-1">por mês</p>
          </div>
          <div className="rounded-2xl bg-[#141618] border border-white/6 p-5">
            <p className="text-xs text-gray-500 mb-1">% do salário investido</p>
            <p className="text-3xl font-bold text-blue-400 tabular-nums">{investPct}%</p>
            <p className="text-xs text-gray-600 mt-1">
              {investPct < 10 ? 'tente chegar a 10%' : investPct < 20 ? 'bom! tente 20%' : 'excelente disciplina'}
            </p>
          </div>
        </div>

        {/* Profile allocation */}
        <div className="rounded-2xl bg-[#141618] border border-white/6 p-6 mb-4">
          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-5">
            Alocação da Carteira — Perfil
          </h3>

          {/* Profile tabs */}
          <div className="flex gap-2 mb-6">
            {(Object.keys(profiles) as Profile[]).map((key) => (
              <button
                key={key}
                onClick={() => handleProfileChange(key)}
                className={`flex-1 py-2 px-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                  profile === key
                    ? 'bg-emerald-500 text-[#0d0f12]'
                    : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/8'
                }`}
              >
                {profiles[key].label}
              </button>
            ))}
          </div>

          <AllocationBar label="Reserva de emergência" pct={p.emergency} amount={emergency} color="#10b981" />
          <AllocationBar label="Renda fixa (CDB, Tesouro, LCI)" pct={p.fixed} amount={fixed} color="#3b82f6" />
          <AllocationBar label="Renda variável (ações, ETFs, FIIs)" pct={p.variable} amount={variable} color="#f59e0b" />

          {/* Amount cards */}
          <div className="grid grid-cols-3 gap-3 mt-5">
            {[
              { label: 'reserva emergência', amount: emergency, color: 'text-emerald-400' },
              { label: 'renda fixa', amount: fixed, color: 'text-blue-400' },
              { label: 'renda variável', amount: variable, color: 'text-amber-400' },
            ].map((item) => (
              <div key={item.label} className="rounded-xl bg-[#0d0f12] border border-white/5 p-3">
                <p className="text-[11px] text-gray-500 mb-1">{item.label}</p>
                <p className={`text-lg font-bold tabular-nums ${item.color}`}>{formatBRL(item.amount)}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Projection */}
        <div className="rounded-2xl bg-[#141618] border border-white/6 p-6 mb-4">
          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-1">
            Projeção de Rendimento (Juros Compostos)
          </h3>
          <SliderRow
            label="Taxa de rendimento anual (%)"
            min={1}
            max={25}
            step={0.5}
            value={annualRate}
            onChange={setAnnualRate}
            displayValue={`${annualRate}% a.a.`}
          />
          <p className="text-xs text-gray-600 -mt-2 mb-6">
            Referência: Tesouro Selic ~10–11% a.a. | Carteira moderada ~12–15% a.a.
          </p>

          <div className="grid grid-cols-3 gap-3">
            {[
              { label: 'em 1 ano', proj: proj1, invested: invested1 },
              { label: 'em 5 anos', proj: proj5, invested: invested5 },
              { label: 'em 10 anos', proj: proj10, invested: invested10 },
            ].map((item) => (
              <div key={item.label} className="rounded-xl bg-[#0d0f12] border border-white/5 p-4 text-center">
                <p className="text-[11px] text-gray-500 mb-2">{item.label}</p>
                <p className="text-xl font-bold text-white tabular-nums">{formatBRL(item.proj)}</p>
                <p className="text-[11px] text-emerald-400 mt-1">
                  + {formatBRL(item.proj - item.invested)} em juros
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Profile description */}
        <div className="rounded-xl border-l-4 border-emerald-500 bg-emerald-500/5 px-5 py-4">
          <p className="text-sm text-gray-300 leading-relaxed">{p.description}</p>
        </div>

        <p className="text-xs text-gray-600 text-center mt-4 leading-relaxed">
          As projeções são estimativas educacionais baseadas em juros compostos. Rentabilidade passada não garante retornos futuros.
          Consulte um assessor de investimentos certificado (CFP) antes de tomar decisões.
        </p>
      </div>
    </section>
  );
}
