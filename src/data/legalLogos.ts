export interface LegalLogo {
  file: string;
  alt: string;
  src: string;
}

export const legalLogosBasePath = '/scale-advogados/assets/logos-escritorios-adv';

export const legalLogos: LegalLogo[] = [
  {
    file: 'Full Branco.png',
    alt: 'Escritorio de advocacia cliente da Scale',
  },
  {
    file: 'gberti-logo-branco-horizontal.png',
    alt: 'G Berti Advocacia',
  },
  {
    file: 'image2.png',
    alt: 'Escritorio de advocacia cliente da Scale',
  },
  {
    file: 'Imagem do WhatsApp de 2025-02-17 à(s) 17.43.37_300846c1-Photoroom.png',
    alt: 'Escritorio de advocacia cliente da Scale',
  },
  {
    file: 'JRA.png',
    alt: 'JRA Advocacia',
  },
  {
    file: 'logothiagovetor.png',
    alt: 'Thiago Advocacia',
  },
  {
    file: 'LOGOTIPO-02 (1).png',
    alt: 'Escritorio de advocacia cliente da Scale',
  },
].map((logo) => ({
  ...logo,
  src: encodeURI(`${legalLogosBasePath}/${logo.file}`),
}));
