import AdvogadosLanding from "@/components/legacy-advogados/AdvogadosLanding";
import { LeadFormProvider } from "@/components/legacy-advogados/contexts/lead-form-context";
import { LeadFormModal } from "@/components/legacy-advogados/ui/lead-form-modal";

export default function AdvogadosLandingWithProvider() {
  return (
    <LeadFormProvider>
      <AdvogadosLanding />
      <LeadFormModal />
    </LeadFormProvider>
  );
}
