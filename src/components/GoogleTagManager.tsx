"use client";

import { usePathname } from "next/navigation";
import Script from "next/script";

const GTM_ID = "GTM-KS5L52P9";

// As LPs de tráfego (/scale-advogados, /scale-advogados-2, /scale-advogados-3, /scale-class)
// já carregam GTM próprio no próprio page.tsx. Não renderizar aqui nessas rotas evita
// disparar o container duas vezes na mesma página.
const EXCLUDED_PREFIXES = ["/scale-advogados", "/scale-class"];

export default function GoogleTagManager() {
  const pathname = usePathname();

  if (EXCLUDED_PREFIXES.some((prefix) => pathname?.startsWith(prefix))) {
    return null;
  }

  return (
    <>
      {/* Google Tag Manager */}
      <Script
        id="gtm-init"
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${GTM_ID}');`,
        }}
      />
      {/* End Google Tag Manager */}

      {/* Google Tag Manager (noscript) */}
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        />
      </noscript>
      {/* End Google Tag Manager (noscript) */}
    </>
  );
}
