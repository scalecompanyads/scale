/**
 * Envio de lead para webhook público (URL configurável em build).
 * Sem URL configurado: devolve ok para não bloquear UX (configuração pendente).
 */
import { formatPhoneBR } from './phoneFormat';
import { getLeadAttribution, type LeadAttribution } from './leadAttribution';

export type LeadPayload = {
  lead_id: string;
  nome: string;
  email: string;
  /** Dígitos do telefone como número JSON (raiz). */
  number: number;
  fields: {
    number: {
      type: 'text';
      /** Telefone no formato (XX) XXXXX-XXXX */
      value: string;
      /** Igual a `value` — formato bruto mascarado para integrações Make. */
      rawValue: string;
    };
  };
  faturamento: string;
  instagram: string;
  origem: string;
  form_name: string;
  sourceUrl: string;
  submittedAt: string;
  attribution: LeadAttribution;
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
  utm_content: string;
  utm_term: string;
  gclid: string;
  fbclid: string;
  referrer: string;
  landing_page: string;
  pagina: string;
  origem_trafego: string;
  canal: string;
  is_organic: boolean;
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

function getExcelWebhookUrl(): string | undefined {
  const raw = import.meta.env.PUBLIC_EXCEL_WEBHOOK_URL as string | undefined;
  if (typeof raw !== 'string') return undefined;
  const t = raw.trim();
  return t.length > 0 ? t : undefined;
}

function generateLeadId(): string {
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
    return crypto.randomUUID();
  }
  return `lead-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
}

function pushLeadSubmitEvent(data: LeadPayload) {
  if (typeof window === 'undefined') return;
  const w = window as Window & { dataLayer?: Record<string, unknown>[] };
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push({
    event: 'lead_submit_success',
    ...data,
  });
}

export async function submitLead(
  data: LeadFormData
): Promise<{ ok: boolean; skippedWebhook?: boolean; error?: string }> {
  const url = getWebhookUrl();
  const excelUrl = getExcelWebhookUrl();
  
  const digits = data.phoneDigits.replace(/\D/g, '');
  const masked = formatPhoneBR(digits);
  const number = phoneDigitsAsNumber(data.phoneDigits);
  const attribution = getLeadAttribution();
  const payload: LeadPayload = {
    lead_id: generateLeadId(),
    nome: data.nome,
    email: data.email,
    number,
    fields: {
      number: {
        type: 'text',
        value: masked,
        rawValue: masked,
      },
    },
    faturamento: data.faturamento,
    instagram: data.instagram,
    origem: 'lead-form-organico',
    form_name: 'organic_pages',
    sourceUrl: typeof window !== 'undefined' ? window.location.href : '',
    submittedAt: new Date().toISOString(),
    attribution,
    ...attribution,
  };

  pushLeadSubmitEvent(payload);

  if (excelUrl) {
    // Disparo secundário sem aguardar/bloquear, para preencher a planilha
    fetch(excelUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    }).catch((err) => console.error('[lead] Erro ao enviar ao Excel Webhook:', err));
  }

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
