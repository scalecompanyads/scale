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

const MODAL_STEPS = ['Nome', 'Contato', 'Instagram', 'Faturamento', 'Confirmar'] as const;

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
  const [step, setStep] = useState(0);
  const [consent, setConsent] = useState(false);
  const [attribution, setAttribution] = useState<LeadAttribution>(() =>
    getLeadAttribution()
  );

  const isModal = variant === 'modal';

  const inputClass = isModal
    ? 'w-full px-4 py-3 text-base text-slate-900 bg-white border border-slate-200 rounded-lg transition-shadow focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-brand-primary placeholder:text-slate-400'
    : 'w-full px-4 py-3 text-base text-ink bg-surface-card border border-edge rounded-lg transition-shadow focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-brand-primary placeholder:text-ink-light';

  const labelClass = isModal
    ? 'block text-sm font-medium text-slate-800 mb-2'
    : 'block text-sm font-medium text-ink mb-2';

  useEffect(() => {
    setAttribution(getLeadAttribution());
  }, []);

  function cleanInstagram() {
    return instagram.trim().replace(/^@+/, '');
  }

  function validateCurrentStep(): boolean {
    setError(null);

    if (step === 0 && nome.trim().length < 2) {
      setError('Informe seu nome completo.');
      return false;
    }

    if (step === 1) {
      if (!email.trim() || !email.includes('@')) {
        setError('Informe um e-mail válido.');
        return false;
      }
      if (phoneDigits.replace(/\D/g, '').length < 10) {
        setError('Informe um WhatsApp válido com DDD.');
        return false;
      }
    }

    if (step === 2) {
      const ig = cleanInstagram();
      if (ig.length < 2) {
        setError('Informe o @ do Instagram da empresa.');
        return false;
      }
      if (ig.length > 64) {
        setError('Use no máximo 64 caracteres no @.');
        return false;
      }
    }

    if (step === 4 && !consent) {
      setError('É necessário aceitar o contato para continuar.');
      return false;
    }

    return true;
  }

  function goNext() {
    if (!validateCurrentStep()) return;
    setStep((current) => Math.min(current + 1, MODAL_STEPS.length - 1));
  }

  function goBack() {
    setError(null);
    setStep((current) => Math.max(current - 1, 0));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);
    if (isModal && !validateCurrentStep()) {
      return;
    }
    if (phoneDigits.replace(/\D/g, '').length < 10) {
      setError('Informe um telefone válido com DDD.');
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
            (dev) Webhook não configurado — defina PUBLIC_LEAD_WEBHOOK_URL em .env.local
          </p>
        )}
      </div>
    );
  }

  if (isModal) {
    return (
      <form className="space-y-5" onSubmit={handleSubmit} noValidate>
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

        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wide text-slate-500">
            <span>
              Etapa {step + 1} de {MODAL_STEPS.length}
            </span>
            <span>{MODAL_STEPS[step]}</span>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-slate-100">
            <div
              className="h-full rounded-full bg-brand-primary transition-all"
              style={{ width: `${((step + 1) / MODAL_STEPS.length) * 100}%` }}
            />
          </div>
        </div>

        {step === 0 && (
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
        )}

        {step === 1 && (
          <div className="space-y-4">
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
          </div>
        )}

        {step === 2 && (
          <div>
            <label htmlFor="lead-instagram" className={labelClass}>
              @ do Instagram da empresa <span className="text-red-500">*</span>
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
              autoComplete="username"
            />
            <p className="mt-2 text-xs text-slate-500">
              Informe como aparece no Instagram, com ou sem @.
            </p>
          </div>
        )}

        {step === 3 && (
          <fieldset>
            <legend className={labelClass}>Faturamento atual</legend>
            <div className="space-y-2">
              {FATURAMENTO.map((o) => (
                <label
                  key={o.value}
                  className={`flex cursor-pointer items-center gap-3 rounded-lg border px-4 py-3 text-sm transition-colors ${
                    faturamento === o.value
                      ? 'border-brand-primary bg-brand-primary/10 text-slate-950'
                      : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                  }`}
                >
                  <input
                    type="radio"
                    name="faturamento"
                    value={o.value}
                    checked={faturamento === o.value}
                    onChange={(e) => setFaturamento(e.target.value)}
                    className="h-4 w-4 accent-brand-primary"
                  />
                  {o.label}
                </label>
              ))}
            </div>
          </fieldset>
        )}

        {step === 4 && (
          <div className="space-y-4">
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
              <p className="font-semibold text-slate-900">Confirme seus dados</p>
              <p className="mt-2">{nome}</p>
              <p>{email}</p>
              <p>{formatPhoneBR(phoneDigits)}</p>
              <p>{cleanInstagram() ? `@${cleanInstagram()}` : ''}</p>
            </div>
            <label className="flex cursor-pointer items-start gap-3 text-sm text-slate-700">
              <input
                type="checkbox"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                className="mt-1 h-4 w-4 shrink-0 accent-brand-primary"
              />
              <span>
                Concordo em receber mensagens e ligações da Scale para dar continuidade ao atendimento.
              </span>
            </label>
          </div>
        )}

        {error && (
          <p className="text-sm text-red-600" role="alert">
            {error}
          </p>
        )}

        <div className="flex items-center justify-between gap-3">
          {step > 0 ? (
            <button
              type="button"
              onClick={goBack}
              className="rounded-lg px-4 py-3 text-sm font-semibold text-slate-600 hover:bg-slate-100"
            >
              Voltar
            </button>
          ) : (
            <span />
          )}
          {step < MODAL_STEPS.length - 1 ? (
            <button
              type="button"
              onClick={goNext}
              className="rounded-lg bg-brand-primary px-6 py-3 text-sm font-semibold text-ink-inverse transition-colors hover:bg-brand-secondary"
            >
              Continuar
            </button>
          ) : (
            <button
              type="submit"
              disabled={loading}
              className="rounded-lg bg-brand-primary px-6 py-3 text-sm font-semibold text-ink-inverse transition-colors hover:bg-brand-secondary disabled:opacity-60"
            >
              {loading ? 'Enviando...' : 'Enviar'}
            </button>
          )}
        </div>
      </form>
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
          Telefone <span className="text-red-500">*</span>
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
          placeholder="DDD + número"
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
