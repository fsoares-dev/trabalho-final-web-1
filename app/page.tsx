import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import CarteiraPrimeira from '@/components/sections/CarteiraPrimeira';
import QuantoInvestir from '@/components/sections/QuantoInvestir';
import EscalarPatrimonio from '@/components/sections/EscalarPatrimonio';
import MelhoresInvestimentos from '@/components/sections/MelhoresInvestimentos';
import AnaliseMercado from '@/components/sections/AnaliseMercado';
import FontesConfiaveis from '@/components/sections/FontesConfiaveis';
import Calculator from '@/components/Calculator';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <CarteiraPrimeira />
        <QuantoInvestir />
        <EscalarPatrimonio />
        <MelhoresInvestimentos />
        <AnaliseMercado />
        <Calculator />
        <FontesConfiaveis />
      </main>
      <Footer />
    </>
  );
}
