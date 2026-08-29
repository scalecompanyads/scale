// Rastreio de origem: MEDIDO no navegador, nunca declarado no código.
//
// POR QUE ESTE ARQUIVO EXISTE
//
// Cada LP mandava a própria URL como string literal no payload
// (`pagina: '/scale-advogados-3'`, escrito à mão dentro do submit). Isso não
// é rastreamento, é o desenvolvedor afirmando de onde ele acha que o lead
// veio: a string continua igual se a página passar a ser servida em outro
// domínio, se o anúncio apontar para outra rota, se o arquivo for copiado
// para uma variante nova — e o CRM registra como verdade a afirmação errada,
// sem erro nenhum na tela. Em 29/08/2026 o usuário viu leads no CRM com
// "LP = /scale-advogados-3" e a URL de fato sendo outra; a checagem no banco
// confirmou os quatro únicos valores possíveis da coluna, que são exatamente
// as quatro strings escritas no código.
//
// A regra que vale daqui pra frente, e que vale igual do lado do CRM
// (AGENTS.md, "Rastreio é medido, não declarado"):
//
//   Origem de lead se LÊ de `window.location` / `document.referrer` no
//   momento do envio. Nenhum campo de rastreio nasce de uma constante,
//   de um mapa de rotas ou de uma dedução sobre "que página deve ser esta".
//
// O modelo já existia no CRM (`lerAtribuicao` em
// components/formularios/formulario-runner.tsx, que lê a URL real inclusive
// dentro de um iframe). Faltava aqui.
export type Tracking = {
  /** Caminho real da página, medido (`location.pathname`). Formato curto,
   *  que é o que o Make mapeia para a coluna "LP" do Monday. */
  pagina: string;
  /** A URL de fato, inteira — domínio, caminho e query. É o que o CRM grava
   *  em `lead_attribution.lp`: o path sozinho não distingue a mesma página
   *  servida em dois domínios, nem preserva o que a campanha trouxe. */
  pagina_url: string;
  referrer: string;
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
  utm_content: string;
  utm_term: string;
  gclid: string;
  fbclid: string;
};

const VAZIO: Tracking = {
  pagina: "",
  pagina_url: "",
  referrer: "",
  utm_source: "",
  utm_medium: "",
  utm_campaign: "",
  utm_content: "",
  utm_term: "",
  gclid: "",
  fbclid: "",
};

// Uma URL de campanha com UTM longa passa fácil de 240 caracteres, e cortar
// a URL é perder o rastro que ela existe para guardar. Mesmo teto do
// formulário público do CRM.
const MAX = 1000;

/** Lê a origem do lead da sessão do navegador, no momento do envio.
 *
 *  Todas as chaves sempre presentes (string vazia quando não há valor) —
 *  o payload é o mesmo objeto que vai para o Make, e um campo que some do
 *  JSON vira um mapeamento vazio lá do outro lado sem ninguém perceber. */
export function capturarTracking(): Tracking {
  if (typeof window === "undefined") return { ...VAZIO };

  const params = new URLSearchParams(window.location.search);
  const ler = (chave: string) => (params.get(chave) || "").slice(0, MAX);

  return {
    pagina: window.location.pathname.slice(0, MAX),
    pagina_url: window.location.href.slice(0, MAX),
    referrer: (document.referrer || "").slice(0, MAX),
    utm_source: ler("utm_source"),
    utm_medium: ler("utm_medium"),
    utm_campaign: ler("utm_campaign"),
    utm_content: ler("utm_content"),
    utm_term: ler("utm_term"),
    gclid: ler("gclid"),
    fbclid: ler("fbclid"),
  };
}
