import Navbar from "@/components/Navbar";
import LegalCrmHeroPage from "@/components/LegalCrmHeroPage";
import { FinalCTA, Footer } from "@/components/Footer";
import { pageOpenGraph } from "@/lib/og";

export const metadata = {
  title: "CRM Jurídico para Advogados: Feche Mais Contratos",
  description:
    "CRM jurídico da Scale: organize o WhatsApp, acompanhe cada negociação e aumente a taxa de fechamento de honorários com follow-up estruturado.",
  alternates: { canonical: "/crm-advogados" },
  openGraph: pageOpenGraph({
    title: "CRM Jurídico para Advogados: Feche Mais Contratos",
    description:
      "CRM jurídico da Scale: organize o WhatsApp, acompanhe cada negociação e aumente a taxa de fechamento de honorários com follow-up estruturado.",
    path: "/crm-advogados",
  }),
};

export default function CRMPage() {
  return (
    <>
      <Navbar />
      <main>
        <LegalCrmHeroPage />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
