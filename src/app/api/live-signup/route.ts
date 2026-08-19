export async function POST(request: Request) {
  const body = await request.json();

  const res = await fetch("https://crm.scalecompany.com.br/api/v1/webhooks/live", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Webhook-Token": process.env.CRM_WEBHOOK_TOKEN!,
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    return Response.json({ error: "Falha ao registrar inscrição." }, { status: res.status });
  }

  return Response.json(await res.json(), { status: 201 });
}
