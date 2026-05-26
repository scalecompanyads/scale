export interface LegalLogo {
  file: string;
  alt: string;
  src: string;
}

export const legalLogosBasePath = '/scale-advogados/assets/logos-escritorios-adv';

export const legalLogos: LegalLogo[] = [
  {
    file: 'full-branco.webp',
    alt: 'Escritorio de advocacia cliente da Scale',
  },
  {
    file: 'gberti-logo-branco-horizontal.webp',
    alt: 'G Berti Advocacia',
  },
  {
    file: 'image2.webp',
    alt: 'Escritorio de advocacia cliente da Scale',
  },
  {
    file: 'whatsapp-logo.webp',
    alt: 'Escritorio de advocacia cliente da Scale',
  },
  {
    file: 'JRA.webp',
    alt: 'JRA Advocacia',
  },
  {
    file: 'logothiagovetor.webp',
    alt: 'Thiago Advocacia',
  },
  {
    file: 'logotipo-02.webp',
    alt: 'Escritorio de advocacia cliente da Scale',
  },
].map((logo) => ({
  ...logo,
  src: `${legalLogosBasePath}/${logo.file}`,
}));
