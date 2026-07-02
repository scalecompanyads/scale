import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { LeadFormProvider } from "@/contexts/LeadFormContext";
import { LeadFormModal } from "@/components/LeadFormModal";
import { JsonLd } from "@/components/JsonLd";
import { organizationSchema } from "@/lib/schema";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.scalecompany.com.br"),
  title: "Marketing Jurídico que Gera Contratos | Scale Company",
  description:
    "Agência nº 1 em marketing jurídico. Google Ads, Meta Ads e CRM para advogados captarem clientes todo mês, dentro do Provimento 205/2021 da OAB.",
  authors: [{ name: "Scale Company" }],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Marketing Jurídico que Gera Contratos | Scale Company",
    description:
      "Agência nº 1 em marketing jurídico. Google Ads, Meta Ads e CRM para advogados captarem clientes todo mês, dentro do Provimento 205/2021 da OAB.",
    url: "/",
    type: "website",
    locale: "pt_BR",
    siteName: "Scale Company",
  },
  twitter: {
    card: "summary_large_image",
    title: "Marketing Jurídico que Gera Contratos | Scale Company",
    description:
      "Agência nº 1 em marketing jurídico. Google Ads, Meta Ads e CRM para advogados captarem clientes todo mês, dentro das normas da OAB.",
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
    <html lang="pt-BR" className={`${inter.variable} ${playfair.variable}`} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <JsonLd data={organizationSchema()} />
      </head>
      <body suppressHydrationWarning style={{ fontFamily: "var(--font-inter, 'Inter', system-ui, sans-serif)" }}>
        <LeadFormProvider>
          {children}
          <LeadFormModal />
        </LeadFormProvider>
      </body>
    </html>
  );
}
