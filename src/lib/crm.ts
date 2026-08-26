type CrmWebhookPath = "contato" | "cases" | "blog" | "lp";

export async function postToCrmWebhook(path: CrmWebhookPath, payload: Record<string, unknown>) {
  const baseUrl = process.env.CRM_WEBHOOK_URL;
  const token = process.env.CRM_WEBHOOK_TOKEN;

  if (!baseUrl || !token) {
    console.error("CRM_WEBHOOK_URL/CRM_WEBHOOK_TOKEN não configurados no ambiente do site");
    return Response.json({ error: "Não foi possível enviar. Tente novamente." }, { status: 502 });
  }

  let res: Response;
  try {
    res = await fetch(`${baseUrl}/api/v1/webhooks/${path}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Webhook-Token": token,
      },
      body: JSON.stringify(payload),
    });
  } catch (error) {
    console.error(`Falha de rede ao chamar o webhook "${path}" do CRM`, error);
    return Response.json({ error: "Não foi possível enviar. Tente novamente." }, { status: 502 });
  }

  const data = await res.json().catch(() => null);

  if (res.status === 400) {
    return Response.json(
      { error: data?.error ?? "Preencha os campos obrigatórios." },
      { status: 400 }
    );
  }

  if (!res.ok) {
    // 401 (token inválido) e demais erros ficam no servidor — o visitante não precisa saber o motivo.
    console.error(`Webhook "${path}" do CRM retornou ${res.status}`, data);
    return Response.json({ error: "Não foi possível enviar. Tente novamente." }, { status: 502 });
  }

  return Response.json({ ok: true, lead: data }, { status: 201 });
}

export function cleanString(value: unknown): string | undefined {
  return typeof value === "string" && value.trim() ? value.trim() : undefined;
}
