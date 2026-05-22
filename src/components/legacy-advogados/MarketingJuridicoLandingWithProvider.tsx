import MarketingJuridicoLanding from "@/components/legacy-advogados/MarketingJuridicoLanding";
import { LeadFormProvider } from "@/components/legacy-advogados/contexts/lead-form-context";
import { LeadFormModal } from "@/components/legacy-advogados/ui/lead-form-modal";

export default function MarketingJuridicoLandingWithProvider() {
  return (
    <LeadFormProvider>
      <MarketingJuridicoLanding />
      <LeadFormModal />
    </LeadFormProvider>
  );
}
