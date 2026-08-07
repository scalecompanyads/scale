import { Metadata } from "next";
import { pageOpenGraph } from "@/lib/og";

export const metadata: Metadata = {
  title: "Scale Advogados: Máquina de Captação 360º | Scale",
  description:
    "Estrutura completa de aquisição para escritórios: tráfego, páginas, vídeos e CRM. Exclusividade por região e conformidade com a OAB.",
  alternates: { canonical: "/scale-advogados-2" },
  openGraph: pageOpenGraph({
    title: "Scale Advogados: Máquina de Captação 360º | Scale",
    description:
      "Estrutura completa de aquisição para escritórios: tráfego, páginas, vídeos e CRM. Exclusividade por região e conformidade com a OAB.",
    path: "/scale-advogados-2",
  }),
  robots: { index: false, follow: false },
};

export default function ScaleAdvogados2Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
