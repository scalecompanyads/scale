// =============================================================================
// navigation.ts — Itens do menu principal
// =============================================================================

export interface NavItem {
  label: string;
  href: string;
  /** true = abre dropdown com subitens */
  hasDropdown?: boolean;
  children?: NavItem[];
}

export const mainNav: NavItem[] = [
  {
    label: 'Serviços',
    href: '/#servicos',
  },
  {
    label: 'Cases',
    href: '/#depoimentos',
  },
  {
    label: 'Jurídico',
    href: '/guia-definitivo-marketing-juridico',
    hasDropdown: true,
    children: [
      {
        label: 'Guia de Marketing Jurídico',
        href: '/guia-definitivo-marketing-juridico',
      },
      {
        label: 'Calculadora de Anúncios',
        href: '/calculadora-investimento-anuncios',
      },
      {
        label: 'Softwares Jurídicos',
        href: '/comparativo-softwares-juridicos',
      },
      {
        label: 'Mentoria Jurídica',
        href: '/mentoria-marketing-juridico',
      },
    ],
  },
  {
    label: 'Blog',
    href: '/blog',
  },
];

/** Item CTA (botão no menu) */
export const ctaNav: NavItem = {
  label: 'Falar com especialista',
  href: '/contato',
};
