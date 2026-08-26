import { cleanString, postToCrmWebhook } from "@/lib/crm";

const LP_SOURCES: Record<string, string> = {
  "/scale-advogados": "Scale Advogados",
  "/scale-advogados-2": "Scale Advogados 2",
  "/scale-advogados-3": "Scale Advogados 3",
  "/scale-advogados-topo": "Scale Advogados Topo",
};

// The browser still posts directly to Make for Monday. This route is a
// second, server-authenticated delivery to the CRM, so its secret never
// reaches the visitor and neither destination depends on the other.
export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  const nome = cleanString(body?.nome);
  const whatsapp = cleanString(body?.telefoneDigits) ?? cleanString(body?.telefone);
  const email = cleanString(body?.email);
  const pagina = cleanString(body?.pagina);

  if (!nome || !whatsapp || !email) {
    return Response.json({ error: "Nome, WhatsApp e e-mail são obrigatórios." }, { status: 400 });
  }

  return postToCrmWebhook("lp", {
    nome,
    whatsapp,
    email,
    instagram: cleanString(body?.perfilArroba),
    faturamento_mensal: cleanString(body?.faturamentoLabel) ?? cleanString(body?.faturamento),
    origem: pagina ? (LP_SOURCES[pagina] ?? "Landing Page") : "Landing Page",
    pagina,
    utm_source: cleanString(body?.utm_source),
    utm_medium: cleanString(body?.utm_medium),
    utm_campaign: cleanString(body?.utm_campaign),
    fbclid: cleanString(body?.fbclid),
  });
}
