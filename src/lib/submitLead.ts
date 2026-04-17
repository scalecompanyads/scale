/**
 * Envio de lead para webhook público (URL configurável em build).
 * Sem URL configurado: devolve ok para não bloquear UX (configuração pendente).
 */

export type LeadPayload = {
  nome: string;
  email: string;
  /** Telefone só com dígitos, tipo JSON number (sem formatação). */
  number: number;
  /**
   * Estrutura que o Make costuma mapear como `1. fields → number → value`
   * no módulo «Phone number». Sem isto, esse caminho fica vazio e dá erro de parâmetro obrigatório.
   */
  fields: {
    number: {
      value: number;
    };
  };
  faturamento: string;
  instagram: string;
  sourceUrl: string;
  submittedAt: string;
};

function phoneDigitsAsNumber(digits: string): number {
  const d = digits.replace(/\D/g, '');
  if (!d) return 0;
  const n = Number(d);
  return Number.isFinite(n) ? n : 0;
}

export type LeadFormData = {
  nome: string;
  email: string;
  /** Apenas dígitos do telefone (estado interno do formulário). */
  phoneDigits: string;
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
  const number = phoneDigitsAsNumber(data.phoneDigits);
  const payload: LeadPayload = {
    nome: data.nome,
    email: data.email,
    number,
    fields: {
      number: {
        value: number,
      },
    },
    faturamento: data.faturamento,
    instagram: data.instagram,
    sourceUrl: typeof window !== 'undefined' ? window.location.href : '',
    submittedAt: new Date().toISOString(),
  };

  if (!url) {
    console.warn(
      '[lead] PUBLIC_LEAD_WEBHOOK_URL não definido — lead não enviado ao webhook.'
    );
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
