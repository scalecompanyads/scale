/**
 * Envio de lead para webhook público (URL configurável em build).
 * Sem URL configurado: devolve ok para não bloquear UX (configuração pendente).
 */

export type LeadPayload = {
  nome: string;
  email: string;
  whatsapp: string;
  /** Dígitos do telefone como JSON number (ex.: Make «Parse a phone number» exige `number`). */
  number: number;
  faturamento: string;
  instagram: string;
  sourceUrl: string;
  submittedAt: string;
};

/** Apenas dígitos; usado em `number` para integrações que esperam tipo Numbers. */
function phoneDigitsAsNumber(whatsapp: string): number {
  const digits = whatsapp.replace(/\D/g, '');
  if (!digits) return 0;
  const n = Number(digits);
  return Number.isFinite(n) ? n : 0;
}

export type LeadFormData = {
  nome: string;
  email: string;
  whatsapp: string;
  faturamento: string;
  instagram: string;
};

function getWebhookUrl(): string | undefined {
  const raw = import.meta.env.PUBLIC_LEAD_WEBHOOK_URL as string | undefined;
  if (typeof raw !== 'string') return undefined;
  const t = raw.trim();
  return t.length > 0 ? t : undefined;
}

export async function submitLead(
  data: LeadFormData
): Promise<{ ok: boolean; skippedWebhook?: boolean; error?: string }> {
  const url = getWebhookUrl();
  const payload: LeadPayload = {
    ...data,
    number: phoneDigitsAsNumber(data.whatsapp),
    sourceUrl: typeof window !== 'undefined' ? window.location.href : '',
    submittedAt: new Date().toISOString(),
  };

  if (!url) {
    if (import.meta.env.DEV) {
      console.warn(
        '[lead] PUBLIC_LEAD_WEBHOOK_URL não definido — lead não enviado ao servidor.'
      );
    }
    return { ok: true, skippedWebhook: true };
  }

  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    if (!res.ok) {
      return { ok: false, error: `Falha ao enviar (${res.status})` };
    }
    return { ok: true };
  } catch (e) {
    const msg = e instanceof Error ? e.message : 'Erro de rede';
    return { ok: false, error: msg };
  }
}
