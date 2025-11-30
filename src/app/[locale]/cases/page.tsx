import CaseStudiesSection from '@/components/sections/CaseStudiesSection';
import ArchitectureSection from '@/components/sections/ArchitectureSection';
import ClientWallSection from '@/components/sections/ClientWallSection';

export default function CasesPage() {
  return (
    <div className="flex flex-col gap-0">
      <CaseStudiesSection />
      <ArchitectureSection />
      <ClientWallSection />
    </div>
  );
}

