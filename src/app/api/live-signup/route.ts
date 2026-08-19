export async function POST(request: Request) {
  if (!process.env.CRM_WEBHOOK_TOKEN) {
    console.error("[live-signup] CRM_WEBHOOK_TOKEN não configurado");
    return Response.json({ error: "Configuração interna ausente." }, { status: 500 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Payload inválido." }, { status: 400 });
  }

  let res: Response;
  try {
    res = await fetch("https://crm.scalecompany.com.br/api/v1/webhooks/live", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Webhook-Token": process.env.CRM_WEBHOOK_TOKEN,
      },
      body: JSON.stringify(body),
    });
  } catch (err) {
    console.error("[live-signup] Erro ao chamar CRM:", err);
    return Response.json({ error: "Falha ao conectar com o CRM." }, { status: 502 });
  }

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    console.error(`[live-signup] CRM retornou ${res.status}:`, text);
    return Response.json({ error: "Falha ao registrar inscrição." }, { status: res.status });
  }

  const text = await res.text();
  if (!text) return Response.json({ ok: true }, { status: 201 });

  try {
    return Response.json(JSON.parse(text), { status: 201 });
  } catch {
    return Response.json({ ok: true }, { status: 201 });
  }
}
