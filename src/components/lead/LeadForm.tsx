'use client';

import { useEffect, useState, type FormEvent } from 'react';
import { formatPhoneBR } from '../../lib/phoneFormat';
import { submitLead } from '../../lib/submitLead';
import { getLeadAttribution, type LeadAttribution } from '../../lib/leadAttribution';

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
  const [phoneDigits, setPhoneDigits] = useState('');
  const [faturamento, setFaturamento] = useState('prefiro_nao_informar');
  const [instagram, setInstagram] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [skippedWebhook, setSkippedWebhook] = useState(false);
  const [attribution, setAttribution] = useState<LeadAttribution>(() =>
    getLeadAttribution()
  );

  const isModal = variant === 'modal';

  const inputClass = isModal
    ? 'w-full px-4 py-3 text-base text-slate-900 bg-slate-50 border border-slate-200 rounded-lg transition-shadow focus:outline-none focus:ring-2 focus:ring-[#1630DF] focus:border-[#1630DF] placeholder:text-slate-400'
    : 'w-full px-4 py-3 text-base text-ink bg-surface-card border border-edge rounded-lg transition-shadow focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-brand-primary placeholder:text-ink-light';

  const labelClass = isModal
    ? 'block text-sm font-semibold text-slate-800 mb-2'
    : 'block text-sm font-medium text-ink mb-2';

  useEffect(() => {
    setAttribution(getLeadAttribution());
  }, []);

  function cleanInstagram() {
    return instagram.trim().replace(/^@+/, '');
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);
    
    if (nome.trim().length < 2) {
      setError('Informe seu nome completo.');
      return;
    }
    if (!email.trim() || !email.includes('@')) {
      setError('Informe um e-mail válido.');
      return;
    }
    if (phoneDigits.replace(/\D/g, '').length < 10) {
      setError('Informe um WhatsApp válido com DDD.');
      return;
    }
    const ig = cleanInstagram();
    if (!ig) {
      setError('Informe o @ do Instagram.');
      return;
    }

    setLoading(true);
    const result = await submitLead({
      nome: nome.trim(),
      email: email.trim(),
      phoneDigits,
      faturamento,
      instagram: ig ? `@${ig}` : '',
    });
    setLoading(false);
    
    if (result.ok) {
      if (result.skippedWebhook && import.meta.env.PROD) {
        setError(
          'Não foi possível registrar seu envio neste momento. Envie um e-mail para contato@scale.com.br ou tente novamente mais tarde.'
        );
        return;
      }
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
            ? 'rounded-xl bg-white p-6 text-center text-slate-900'
            : 'rounded-xl border border-edge bg-surface-card p-8 text-center text-ink'
        }
      >
        <p className="text-lg font-semibold">Obrigado!</p>
        <p className="mt-2 text-sm opacity-90">
          Recebemos seus dados. Em breve entraremos em contato.
        </p>
        {skippedWebhook && import.meta.env.DEV && (
          <p className="mt-3 text-xs text-amber-700">
            (dev) Webhook não configurado — defina PUBLIC_LEAD_WEBHOOK_URL em .env.local
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
      <input type="hidden" name="utm_source" value={attribution.utm_source} />
      <input type="hidden" name="utm_medium" value={attribution.utm_medium} />
      <input type="hidden" name="utm_campaign" value={attribution.utm_campaign} />
      <input type="hidden" name="utm_content" value={attribution.utm_content} />
      <input type="hidden" name="utm_term" value={attribution.utm_term} />
      <input type="hidden" name="gclid" value={attribution.gclid} />
      <input type="hidden" name="fbclid" value={attribution.fbclid} />
      <input type="hidden" name="referrer" value={attribution.referrer} />
      <input type="hidden" name="landing_page" value={attribution.landing_page} />
      <input type="hidden" name="pagina" value={attribution.pagina} />
      <input type="hidden" name="origem_trafego" value={attribution.origem_trafego} />
      <input type="hidden" name="canal" value={attribution.canal} />
      <input type="hidden" name="is_organic" value={String(attribution.is_organic)} />

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
        <label htmlFor="lead-telefone" className={labelClass}>
          WhatsApp <span className="text-red-500">*</span>
        </label>
        <input
          id="lead-telefone"
          name="telefone"
          type="tel"
          required
          autoComplete="tel"
          inputMode="numeric"
          value={formatPhoneBR(phoneDigits)}
          onChange={(e) => {
            const d = e.target.value.replace(/\D/g, '').slice(0, 11);
            setPhoneDigits(d);
          }}
          className={inputClass}
          placeholder="(11) 99999-9999"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
            @ no Instagram <span className="text-red-500">*</span>
          </label>
          <input
            id="lead-instagram"
            name="instagram"
            type="text"
            required
            value={instagram}
            onChange={(e) => setInstagram(e.target.value)}
            className={inputClass}
            placeholder="@suaempresa"
            autoComplete="off"
          />
        </div>
      </div>

      {error && (
        <p className="text-sm text-red-600 font-medium" role="alert">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={loading}
        className={
          isModal 
            ? "w-full px-8 py-3.5 font-semibold text-base rounded-lg bg-[#1630DF] text-white hover:bg-[#00BAFF] transition-colors border-2 border-[#1630DF] hover:border-[#00BAFF] disabled:opacity-60 mt-2 shadow-md shadow-[#1630DF]/20"
            : "w-full px-8 py-4 font-semibold text-base rounded-lg bg-brand-primary text-ink-inverse hover:bg-brand-secondary transition-colors border-2 border-brand-primary disabled:opacity-60"
        }
      >
        {loading ? 'Enviando…' : 'Enviar agora'}
      </button>
    </form>
  );
}
