import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import { siteOgImage } from "@/lib/site-og";
import { ContactFormProvider } from "@/contexts/ContactFormContext";
import ContactFormModal from "@/components/ContactFormModal";
import GoogleTagManager from "@/components/GoogleTagManager";
import MicrosoftClarity from "@/components/MicrosoftClarity";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const canelaDeck = localFont({
  variable: "--font-canela-deck",
  src: [
    {
      path: "../fonts/canela-deck/CanelaDeck-Regular-Trial.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../canela-text-trial/CanelaDeck-Bold-Trial.otf",
      weight: "700",
      style: "normal",
    },
  ],
});

const siteTitle = "Scale Company | Marketing Jurídico que Gera Contratos";
const siteDescription =
  "Agência de marketing jurídico que transforma a presença digital de escritórios de advocacia em aquisição previsível: estratégia, tráfego pago, landing pages, design, conteúdo e CRM em uma única operação.";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.scalecompany.com.br"),
  title: siteTitle,
  description: siteDescription,
  authors: [{ name: "Scale Company" }],
  alternates: { canonical: "/" },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: "/",
    type: "website",
    locale: "pt_BR",
    siteName: "Scale Company",
    images: [siteOgImage],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: [siteOgImage.url],
  },
  robots: {
    index: true,
    follow: true,
  },
};
import Script from "next/script";
export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${canelaDeck.variable} h-full antialiased`}
    >
      <head>
        <Script
          data-website-id="dfid_6dAvjGNjRUiU5ud1c88sT"
          data-domain="www.scalecompany.com.br"
          src="https://datafa.st/js/script.js"
          strategy="afterInteractive"
        />
        <MicrosoftClarity />
      </head>
      <body className="min-h-full flex flex-col bg-black">
        <GoogleTagManager />
        <ContactFormProvider>
          {children}
          <ContactFormModal />
        </ContactFormProvider>
      </body>
    </html>
  );
}
