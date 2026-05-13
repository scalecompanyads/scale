const STORAGE_KEY = 'scale_lead_attribution';

export type LeadAttribution = {
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

function emptyAttribution(): LeadAttribution {
  return {
    utm_source: '',
    utm_medium: '',
    utm_campaign: '',
    utm_content: '',
    utm_term: '',
    gclid: '',
    fbclid: '',
    referrer: '',
    landing_page: '',
    pagina: '',
    origem_trafego: '',
    canal: '',
    is_organic: false,
  };
}

function isGoogleOrganic(params: URLSearchParams, referrer: string): boolean {
  const source = (params.get('utm_source') ?? '').toLowerCase();
  const medium = (params.get('utm_medium') ?? '').toLowerCase();
  const ref = referrer.toLowerCase();

  return (
    (source === 'google' && (medium === 'organic' || medium === 'organico')) ||
    medium === 'organic' ||
    medium === 'organico' ||
    (!!ref && ref.includes('google.') && !params.get('gclid'))
  );
}

function readStoredAttribution(): Partial<LeadAttribution> {
  if (typeof window === 'undefined') return {};
  try {
    const raw = window.sessionStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === 'object' ? parsed : {};
  } catch {
    return {};
  }
}

function storeAttribution(attribution: LeadAttribution) {
  if (typeof window === 'undefined') return;
  try {
    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(attribution));
  } catch {
    // sessionStorage can be unavailable in restricted browser contexts.
  }
}

export function getLeadAttribution(): LeadAttribution {
  if (typeof window === 'undefined') return emptyAttribution();

  const params = new URLSearchParams(window.location.search);
  const stored = readStoredAttribution();
  const referrer = document.referrer || stored.referrer || '';
  const currentUrl = window.location.href;
  const hasCampaignParams = [
    'utm_source',
    'utm_medium',
    'utm_campaign',
    'utm_content',
    'utm_term',
    'gclid',
    'fbclid',
  ].some((key) => params.has(key));

  const organic = isGoogleOrganic(params, referrer);
  const attribution: LeadAttribution = {
    utm_source: params.get('utm_source') ?? stored.utm_source ?? '',
    utm_medium: params.get('utm_medium') ?? stored.utm_medium ?? '',
    utm_campaign: params.get('utm_campaign') ?? stored.utm_campaign ?? '',
    utm_content: params.get('utm_content') ?? stored.utm_content ?? '',
    utm_term: params.get('utm_term') ?? stored.utm_term ?? '',
    gclid: params.get('gclid') ?? stored.gclid ?? '',
    fbclid: params.get('fbclid') ?? stored.fbclid ?? '',
    referrer,
    landing_page: hasCampaignParams || organic || !stored.landing_page
      ? currentUrl
      : stored.landing_page,
    pagina: window.location.pathname,
    origem_trafego: organic ? 'organico' : stored.origem_trafego ?? '',
    canal: organic ? 'google_organico' : stored.canal ?? '',
    is_organic: organic || stored.is_organic === true,
  };

  if (hasCampaignParams || organic || !stored.landing_page) {
    storeAttribution(attribution);
  }

  return attribution;
}
