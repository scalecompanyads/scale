import AdvogadosLanding from "@/components/legacy-advogados/AdvogadosLanding";
import { LeadFormProvider } from "@/components/legacy-advogados/contexts/lead-form-context";
import { LeadFormModal } from "@/components/legacy-advogados/ui/lead-form-modal";

interface Props {
  heroHeadlineLine1?: string;
  heroHeadlineLine2?: string;
  heroHeadlineLine3?: string;
  heroHeadline?: string;
  heroHeadlineHighlight?: string;
  heroSubHeadline?: string;
}

export default function AdvogadosLandingWithProvider({
  heroHeadlineLine1,
  heroHeadlineLine2,
  heroHeadlineLine3,
  heroHeadline,
  heroHeadlineHighlight,
  heroSubHeadline,
}: Props) {
  return (
    <LeadFormProvider>
      <AdvogadosLanding
        heroHeadlineLine1={heroHeadlineLine1}
        heroHeadlineLine2={heroHeadlineLine2}
        heroHeadlineLine3={heroHeadlineLine3}
        heroHeadline={heroHeadline}
        heroHeadlineHighlight={heroHeadlineHighlight}
        heroSubHeadline={heroSubHeadline}
      />
      <LeadFormModal />
    </LeadFormProvider>
  );
}
