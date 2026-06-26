import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'InvestJovem — Educação Financeira para Jovens Brasileiros',
  description:
    'Aprenda a montar sua primeira carteira de investimentos, quanto do salário investir e como construir patrimônio ao longo do tempo.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
