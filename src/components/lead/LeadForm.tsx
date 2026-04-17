'use client';

import { useState, type FormEvent } from 'react';
import { submitLead } from '../../lib/submitLead';

const FATURAMENTO = [
  { value: 'prefiro_nao_informar', label: 'Prefiro não informar' },
  { value: 'ate_10k', label: 'Até R$ 10 mil' },
  { value: '10k_50k', label: 'R$ 10 mil a R$ 50 mil' },
  { value: '50k_200k', label: 'R$ 50 mil a R$ 200 mil' },
  { value: 'acima_200k', label: 'Acima de R$ 200 mil' },
] as const;

type Props = {
  variant: 'modal' | 'page';
  /** Chamado após envio com sucesso (ex.: fechar modal). */
  onSuccess?: () => void;
};

export default function LeadForm({ variant, onSuccess }: Props) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [faturamento, setFaturamento] = useState('prefiro_nao_informar');
  const [instagram, setInstagram] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [skippedWebhook, setSkippedWebhook] = useState(false);

  const isModal = variant === 'modal';

  const inputClass = isModal
    ? 'w-full px-4 py-3 text-base text-slate-900 bg-white border border-slate-200 rounded-lg transition-shadow focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-brand-primary placeholder:text-slate-400'
    : 'w-full px-4 py-3 text-base text-ink bg-surface-card border border-edge rounded-lg transition-shadow focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-brand-primary placeholder:text-ink-light';

  const labelClass = isModal
    ? 'block text-sm font-medium text-slate-800 mb-2'
    : 'block text-sm font-medium text-ink mb-2';

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    const ig = instagram.trim().replace(/^@+/, '');
    const result = await submitLead({
      nome: nome.trim(),
      email: email.trim(),
      whatsapp: whatsapp.trim(),
      faturamento,
      instagram: ig ? `@${ig}` : '',
    });
    setLoading(false);
    if (result.ok) {
      setSuccess(true);
      setSkippedWebhook(!!result.skippedWebhook);
      if (isModal && onSuccess) {
        window.setTimeout(() => onSuccess(), 2200);
      }
    } else {
      setError(result.error ?? 'Não foi possível enviar. Tente novamente.');
    }
  }

  if (success) {
    return (
      <div
        className={
          isModal
            ? 'rounded-xl bg-white p-6 text-center text-slate-900 shadow-xl'
            : 'rounded-xl border border-edge bg-surface-card p-8 text-center text-ink'
        }
      >
        <p className="text-lg font-semibold">Obrigado!</p>
        <p className="mt-2 text-sm opacity-90">
          Recebemos seus dados. Em breve entraremos em contato.
        </p>
        {skippedWebhook && import.meta.env.DEV && (
          <p className="mt-3 text-xs text-amber-700">
            (dev) Webhook não configurado — defina PUBLIC_LEAD_WEBHOOK_URL
          </p>
        )}
      </div>
    );
  }

  return (
    <form
      className={isModal ? 'space-y-4' : 'space-y-5'}
      onSubmit={handleSubmit}
      noValidate
    >
      <div>
        <label htmlFor="lead-nome" className={labelClass}>
          Nome completo <span className="text-red-500">*</span>
        </label>
        <input
          id="lead-nome"
          name="nome"
          type="text"
          required
          autoComplete="name"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          className={inputClass}
          placeholder="Seu nome"
        />
      </div>

      <div>
        <label htmlFor="lead-email" className={labelClass}>
          E-mail profissional <span className="text-red-500">*</span>
        </label>
        <input
          id="lead-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={inputClass}
          placeholder="seu@email.com"
        />
      </div>

      <div>
        <label htmlFor="lead-whatsapp" className={labelClass}>
          WhatsApp <span className="text-red-500">*</span>
        </label>
        <input
          id="lead-whatsapp"
          name="whatsapp"
          type="tel"
          required
          autoComplete="tel"
          value={whatsapp}
          onChange={(e) => setWhatsapp(e.target.value)}
          className={inputClass}
          placeholder="(00) 00000-0000"
        />
      </div>

      <div>
        <label htmlFor="lead-faturamento" className={labelClass}>
          Faturamento atual
        </label>
        <select
          id="lead-faturamento"
          name="faturamento"
          value={faturamento}
          onChange={(e) => setFaturamento(e.target.value)}
          className={inputClass}
        >
          {FATURAMENTO.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="lead-instagram" className={labelClass}>
          @ no Instagram
        </label>
        <input
          id="lead-instagram"
          name="instagram"
          type="text"
          value={instagram}
          onChange={(e) => setInstagram(e.target.value)}
          className={inputClass}
          placeholder="@suaempresa"
          autoComplete="off"
        />
      </div>

      {error && (
        <p className="text-sm text-red-600" role="alert">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full px-8 py-4 font-semibold text-base rounded-lg bg-brand-primary text-ink-inverse hover:bg-brand-secondary transition-colors border-2 border-brand-primary disabled:opacity-60"
      >
        {loading ? 'Enviando…' : 'Enviar'}
      </button>
    </form>
  );
}
