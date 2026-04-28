import AdvogadosLanding from "@/components/legacy-advogados/AdvogadosLanding";
import { LeadFormProvider } from "@/components/legacy-advogados/contexts/lead-form-context";

export default function AdvogadosLandingWithProvider() {
  return (
    <LeadFormProvider>
      <AdvogadosLanding />
    </LeadFormProvider>
  );
}
