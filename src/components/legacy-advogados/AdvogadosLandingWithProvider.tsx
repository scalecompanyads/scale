import AdvogadosLanding from "@/components/legacy-advogados/AdvogadosLanding";
import { LeadFormProvider } from "@/components/legacy-advogados/contexts/lead-form-context";
import { LeadFormModal } from "@/components/legacy-advogados/ui/lead-form-modal";

interface Props {
  heroHeadline?: string;
  heroHeadlineHighlight?: string;
  heroSubHeadline?: string;
}

export default function AdvogadosLandingWithProvider({ heroHeadline, heroHeadlineHighlight, heroSubHeadline }: Props) {
  return (
    <LeadFormProvider>
      <AdvogadosLanding heroHeadline={heroHeadline} heroHeadlineHighlight={heroHeadlineHighlight} heroSubHeadline={heroSubHeadline} />
      <LeadFormModal />
    </LeadFormProvider>
  );
}
