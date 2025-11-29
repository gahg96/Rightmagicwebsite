import CaseStudiesSection from '@/components/sections/CaseStudiesSection';
import ArchitectureSection from '@/components/sections/ArchitectureSection';

export default function CasesPage() {
  return (
    <div className="flex flex-col gap-0">
      <CaseStudiesSection />
      <ArchitectureSection />
    </div>
  );
}

