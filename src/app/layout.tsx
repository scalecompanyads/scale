import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { LeadFormProvider } from "@/contexts/LeadFormContext";
import { LeadFormModal } from "@/components/LeadFormModal";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Agência de Marketing Jurídico | Máquina de Captação Pronta - Scale Company",
  description:
    "Procurando uma agência de marketing jurídico especializada? A Scale Company entrega sua operação de captação de clientes 100% pronta: Tráfego, Landing Pages, SEO e Edição. Agende um diagnóstico.",
  keywords:
    "agência de marketing jurídico, marketing para advogados, tráfego pago para advogados, SEO para advogados, captação de clientes para escritório de advocacia",
  authors: [{ name: "Scale Company" }],
  openGraph: {
    title: "Agência de Marketing Jurídico | Máquina de Captação Pronta - Scale Company",
    description:
      "Procurando uma agência de marketing jurídico especializada? A Scale Company entrega sua operação de captação de clientes 100% pronta: Tráfego, Landing Pages, SEO e Edição. Agende um diagnóstico.",
    type: "website",
    locale: "pt_BR",
    siteName: "Scale Company",
  },
  twitter: {
    card: "summary_large_image",
    title: "Agência de Marketing Jurídico | Scale Company",
    description:
      "Marketing jurídico especializado. Do primeiro clique ao contrato fechado.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body style={{ fontFamily: "var(--font-inter, 'Inter', system-ui, sans-serif)" }}>
        <LeadFormProvider>
          {children}
          <LeadFormModal />
        </LeadFormProvider>
      </body>
    </html>
  );
}
