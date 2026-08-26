import { Metadata } from "next";
import { pageOpenGraph } from "@/lib/og";

export const metadata: Metadata = {
  title: "Captação de Clientes para Advogados com Tráfego Pago | Scale",
  description:
    "Estruturamos o marketing do seu escritório para gerar novas oportunidades com uma estrutura completa de anúncios, páginas, criativos e CRM.",
  alternates: { canonical: "/scale-advogados-topo" },
  openGraph: pageOpenGraph({
    title: "Captação de Clientes para Advogados com Tráfego Pago | Scale",
    description:
      "Estruturamos o marketing do seu escritório para gerar novas oportunidades com uma estrutura completa de anúncios, páginas, criativos e CRM.",
    path: "/scale-advogados-topo",
  }),
  robots: { index: false, follow: false },
};

export default function ScaleAdvogadosTopoLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
