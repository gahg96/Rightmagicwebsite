import HeroSection from '@/components/sections/HeroSection';
import HighlightsSection from '@/components/sections/HighlightsSection';
import ServicesSection from '@/components/sections/ServicesSection';
import GDFSection from '@/components/sections/GDFSection';
import ClientsSection from '@/components/sections/ClientsSection';
import GlobalStrategySection from '@/components/sections/GlobalStrategySection';

export default function Home() {
  return (
    <div className="flex flex-col gap-0">
      <HeroSection />
      <HighlightsSection />
      <ServicesSection />
      <GDFSection />
      <ClientsSection />
      <GlobalStrategySection />
    </div>
  );
}
