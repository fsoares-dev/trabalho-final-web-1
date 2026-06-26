'use client';

import { useState, useEffect } from 'react';
import { TrendingUp, Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Carteira', href: '#carteira' },
  { label: 'Quanto Investir', href: '#quanto-investir' },
  { label: 'Escalar Patrimônio', href: '#escalar' },
  { label: 'Investimentos', href: '#investimentos' },
  { label: 'Análise', href: '#analise' },
  { label: 'Calculadora', href: '#calculadora' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0d0f12]/95 backdrop-blur-md border-b border-white/5 shadow-xl' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center">
              <TrendingUp className="w-4 h-4 text-[#0d0f12]" strokeWidth={2.5} />
            </div>
            <span className="font-bold text-white text-lg tracking-tight">
              Invest<span className="text-emerald-400">Jovem</span>
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-1.5 text-sm text-gray-400 hover:text-white rounded-md transition-colors duration-150 hover:bg-white/5"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#calculadora"
              className="ml-3 px-4 py-1.5 text-sm font-semibold bg-emerald-500 text-[#0d0f12] rounded-lg hover:bg-emerald-400 transition-colors duration-150"
            >
              Calcular agora
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 text-gray-400 hover:text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#0d0f12]/98 border-b border-white/5 px-4 pb-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-2.5 text-sm text-gray-400 hover:text-white border-b border-white/5 last:border-0"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
