/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],

  theme: {
    extend: {
      /**
       * CORES — mapeadas para CSS vars definidas em global.css
       * Quando os assets da empresa chegarem:
       *   1. Abra src/styles/global.css
       *   2. Preencha os valores de --color-brand-* e --color-surface-*
       *   3. Nada mais precisa mudar — tudo atualiza automaticamente
       *
       * Grupos de cor disponíveis:
       *   brand.primary / brand.secondary / brand.accent
       *   ink (DEFAULT=heading) / ink.mid / ink.light / ink.inverse
       *   surface.page / surface.card / surface.subtle
       *   edge (DEFAULT=border)
       */
      colors: {
        brand: {
          primary:   'var(--color-brand-primary)',
          secondary: 'var(--color-brand-secondary)',
          accent:    'var(--color-brand-accent)',
          blue: '#0077FF',
          'blue-light': '#3395FF',
          'blue-dark': '#005ACC',
          'blue-900': '#001F4D',
          orange: '#FF6A00',
          'orange-light': '#FF8533',
          'orange-100': '#FFF0E6',
        },
        ink: {
          DEFAULT: 'var(--color-text-primary)',
          mid:     'var(--color-text-secondary)',
          light:   'var(--color-text-muted)',
          inverse: 'var(--color-text-on-dark)',
        },
        content: {
          primary: '#FFFFFF',
          secondary: '#C4C4D0',
          tertiary: '#9898A8',
          disabled: '#6B6B7A',
        },
        surface: {
          page:   'var(--color-surface-page)',
          card:   'var(--color-surface-card)',
          subtle: 'var(--color-surface-subtle)',
          950: '#050507',
          900: '#0C0C10',
          800: '#141418',
          700: '#1C1C22',
          600: '#2A2A32',
        },
        edge: {
          DEFAULT: 'var(--color-border)',
          strong:  'var(--color-border-strong)',
        },
      },

      /**
       * TIPOGRAFIA — preencher após definir as fontes da empresa
       * Ex: fontFamily: { body: ['Inter', 'system-ui', 'sans-serif'] }
       */
      fontFamily: {
        body:    ['var(--font-body)', 'system-ui', 'sans-serif'],
        heading: ['var(--font-heading)', 'system-ui', 'sans-serif'],
        display: ['var(--font-syne)', 'sans-serif'],
        sans: ['var(--font-dm-sans)', 'sans-serif'],
      },
      fontSize: {
        'display-2xl': ['clamp(3rem,7vw,5.5rem)', { lineHeight: '0.98', letterSpacing: '-0.03em' }],
        'display-xl': ['clamp(2.5rem,5vw,4rem)', { lineHeight: '1.02', letterSpacing: '-0.025em' }],
        'display-lg': ['clamp(2rem,4vw,3rem)', { lineHeight: '1.04', letterSpacing: '-0.02em' }],
        'display-md': ['clamp(1.5rem,3vw,2.25rem)', { lineHeight: '1.06', letterSpacing: '-0.015em' }],
        'display-sm': ['clamp(1.25rem,2vw,1.75rem)', { lineHeight: '1.08', letterSpacing: '-0.01em' }],
      },

      /** Max-width container (1200px do design) */
      maxWidth: {
        site: '1200px',
      },

      /** Z-index semântico */
      zIndex: {
        dropdown: '100',
        sticky:   '200',
        overlay:  '300',
        modal:    '400',
      },

      /** Transições padrão */
      transitionDuration: {
        DEFAULT: '200ms',
      },

      /** Animações */
      animation: {
        marquee:    'marquee 35s linear infinite',
        grid:       'grid 20s linear infinite',
        'spin-slow': 'spin 3s linear infinite',
        'fade-up': 'fadeUp 0.6s ease forwards',
        'fade-in': 'fadeIn 0.5s ease forwards',
        'scale-in': 'scaleIn 0.4s ease forwards',
        'slide-right': 'slideRight 0.5s ease forwards',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        float: 'float 6s ease-in-out infinite',
        shimmer: 'shimmer 2s linear infinite',
        spotlight: 'spotlight 2s ease 0.75s forwards',
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to:   { transform: 'translateX(-50%)' },
        },
        grid: {
          '0%':   { transform: 'translateY(-50%)' },
          '100%': { transform: 'translateY(0)' },
        },
        spin: {
          from: { transform: 'rotate(0deg)' },
          to:   { transform: 'rotate(360deg)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        slideRight: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        spotlight: {
          '0%': { opacity: '0', transform: 'translate(-72%, -62%) scale(0.5)' },
          '100%': { opacity: '1', transform: 'translate(-50%, -40%) scale(1)' },
        },
      },
      boxShadow: {
        'blue-glow': '0 0 40px rgba(0,119,255,0.25)',
        'orange-glow': '0 0 40px rgba(255,106,0,0.25)',
        card: '0 1px 3px rgba(0,0,0,0.5), 0 4px 16px rgba(0,0,0,0.3)',
        'card-hover': '0 2px 8px rgba(0,0,0,0.6), 0 8px 32px rgba(0,0,0,0.4)',
        elevated: '0 8px 32px rgba(0,0,0,0.6), 0 2px 8px rgba(0,0,0,0.3)',
      },
      backgroundImage: {
        'gradient-blue': 'linear-gradient(135deg, #0077FF 0%, #005ACC 100%)',
        'gradient-orange': 'linear-gradient(135deg, #FF6A00 0%, #FF8533 100%)',
        'gradient-hero': 'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(0,119,255,0.2) 0%, transparent 70%)',
        'gradient-section': 'radial-gradient(ellipse 60% 50% at 50% 100%, rgba(0,119,255,0.12) 0%, transparent 70%)',
        'gradient-orange-glow': 'radial-gradient(ellipse 60% 50% at 50% 100%, rgba(255,106,0,0.15) 0%, transparent 70%)',
        'grid-lines': 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
        'grid-white': 'linear-gradient(to right, rgb(255 255 255 / 0.02) 1px, transparent 1px), linear-gradient(to bottom, rgb(255 255 255 / 0.02) 1px, transparent 1px)',
      },
    },
  },

  plugins: [],
};
