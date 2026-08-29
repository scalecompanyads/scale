import { cleanString, postToCrmWebhook } from "@/lib/crm";

// Rótulo de origem por ROTA REAL da página (o que `capturarTracking()` mediu
// no navegador, nunca o que o código da LP achava que ela era). O valor vira
// `LP — <rótulo>` no CRM e precisa existir em `ORIGEM_TRAFEGO`
// (components/crm/leads-workspace.tsx, no repo do CRM), que é um `.in()`
// exato: LP nova sem entrada aqui E lá entra no banco e some do Quadro de
// Tráfego. O fallback "Landing Page" existe justamente para esse caso —
// "LP — Landing Page" está na lista, então o lead aparece mesmo quando a
// rota é desconhecida daqui.
const LP_SOURCES: Record<string, string> = {
  "/scale-advogados": "Scale Advogados",
  "/scale-advogados-2": "Scale Advogados 2",
  "/scale-advogados-3": "Scale Advogados 3",
  "/scale-advogados-topo": "Scale Advogados Topo",
};

/** A rota de onde o lead veio, tirada da URL medida. Da URL completa quando
 *  ela veio (é a fonte mais confiável: traz domínio e query), do pathname
 *  medido quando não. Nunca de uma constante — ver src/lib/tracking.ts. */
function rotaDe(paginaUrl: string | undefined, pagina: string | undefined): string | undefined {
  let caminho = pagina;
  if (paginaUrl) {
    try {
      caminho = new URL(paginaUrl).pathname;
    } catch {
      // URL ilegível: fica com o pathname que o cliente mediu, se houver.
    }
  }
  if (!caminho) return undefined;
  const semBarraFinal = caminho.replace(/\/+$/, "");
  return (semBarraFinal || "/").toLowerCase();
}

// The browser still posts directly to Make for Monday. This route is a
// second, server-authenticated delivery to the CRM, so its secret never
// reaches the visitor and neither destination depends on the other.
export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  const nome = cleanString(body?.nome);
  const whatsapp = cleanString(body?.telefoneDigits) ?? cleanString(body?.telefone);
  const email = cleanString(body?.email);
  const pagina = cleanString(body?.pagina);
  const paginaUrl = cleanString(body?.pagina_url);

  if (!nome || !whatsapp || !email) {
    return Response.json({ error: "Nome, WhatsApp e e-mail são obrigatórios." }, { status: 400 });
  }

  const rota = rotaDe(paginaUrl, pagina);

  return postToCrmWebhook("lp", {
    nome,
    whatsapp,
    email,
    instagram: cleanString(body?.perfilArroba),
    faturamento_mensal: cleanString(body?.faturamentoLabel) ?? cleanString(body?.faturamento),
    origem: (rota && LP_SOURCES[rota]) || "Landing Page",
    pagina,
    pagina_url: paginaUrl,
    referrer: cleanString(body?.referrer),
    utm_source: cleanString(body?.utm_source),
    utm_medium: cleanString(body?.utm_medium),
    utm_campaign: cleanString(body?.utm_campaign),
    // utm_content e utm_term chegavam do navegador e morriam aqui: o Make
    // levava os dois para o Monday (colunas "Criativo" e "Público") e o CRM
    // ficava com a linha de atribuição pela metade. Era literalmente "no
    // Monday chega, aqui não".
    utm_content: cleanString(body?.utm_content),
    utm_term: cleanString(body?.utm_term),
    gclid: cleanString(body?.gclid),
    fbclid: cleanString(body?.fbclid),
  });
}
