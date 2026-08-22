# Performance & SEO — prioridade de desenvolvimento

Este arquivo é referenciado pelo `CLAUDE.md` e deve ser tratado como prioridade em qualquer tarefa de manutenção/evolução do **site institucional** (não se aplica às LPs de tráfego protegidas — ver `CLAUDE.md`).

Regra geral: nunca reduzir qualidade visual de imagem para ganhar performance. O otimizador de imagem do Next (`sharp`, já instalado) já reencoda tudo em AVIF/WebP sob demanda respeitando `quality` — o trabalho aqui é sobre formato, dimensionamento (`sizes`), prioridade de carregamento e peso de JS, não sobre comprimir mais agressivamente.

## ✅ Já aplicado (2026-08-22)

- **`next.config.ts`**: `formats: ["image/avif", "image/webp"]` — nesta versão do Next (16.x) o default mudou para `["image/webp"]` só; sem isso o site não estava servindo AVIF. `minimumCacheTTL: 2678400` (31 dias) para reduzir reprocessamento de imagens já publicadas.
- **`sizes` ausente em `<Image fill>`** (fazia o navegador baixar a imagem em 100vw mesmo quando ela ocupa só 25–50% da tela): corrigido em `Founders.tsx` (fotos dos sócios), `Highlights.tsx` (card de destaque), `Mission.tsx` (foto da equipe) e `Services.tsx` (background da seção de serviços).
- **`cases/page.tsx`**: removida a segunda ocorrência de `priority` (mesma imagem aparecia 2x na página, competindo pelo preload com a imagem realmente acima da dobra — isso atrasa o LCP real).

## 🔴 Prioridade #1 — Logo em `public/images/scale-logo.svg` e `scale-logo-about.svg`

Achado, não corrigido automaticamente (risco de distorção visual sem QA humano/visual):

- Os dois arquivos **não são SVG vetorial** — são um raster PNG de 1080×268px (92KB) embutido em base64 dentro de um wrapper SVG (exportação tipo "copiar como SVG" do Figma), somando ~123KB cada.
- O `Logo.tsx` carrega esse arquivo com `priority` (preload de alta prioridade) em **todas as páginas** do site institucional, para exibir uma logo de **36px de altura** (`h-9`). É o maior desperdício de bytes-por-página do site — maior impacto que qualquer hero image, porque acontece em toda navegação, não só na home.
- `scale-logo-about.svg` usa uma técnica de máscara/recolor (path parcial com pattern esticado) para gerar uma variante — reverti a engenharia da matriz de crop e confirmei que dá pra reproduzir com um crop simples de `(249,47)` a `(833,229)` no raster de 1080×268, mas a segunda variante (recolor) usa um segundo pattern esticado que não é seguro reconstruir por matemática sem comparação visual.
- **Correção recomendada**: pedir ao time de design um export real (SVG vetorial limpo, ou PNG/WebP no tamanho exibido ×2–3 para retina, algo como 200×70px). Até lá, se for reprocessar programaticamente, fazer isso com o dev server rodando e comparar screenshot antes/depois — não trocar o arquivo às cegas.

## 🟡 Prioridade #2 — Duas bibliotecas de animação no bundle (framer-motion + gsap)

`framer-motion` já é usado em praticamente todo componente client-side (Hero, Highlights, Mission, Reviews, ScrollReveal, Services, Stagger). `gsap` + `ScrollTrigger` foi adicionado depois, usado só em dois lugares: contador animado em `Mission.tsx` e reveal com `clip-path` em `Founders.tsx`. Ter as duas no bundle da home aumenta JS parseado/executado (afeta INP/TBT) para um ganho visual que o `framer-motion` também cobre.

Não removido agora porque são componentes em desenvolvimento ativo (arquivos não commitados no momento desta análise). Ao estabilizar essas animações, avaliar migrar os dois usos de gsap para `framer-motion` (`useInView` + `animate()` para o contador, `whileInView` com `clipPath` para o reveal dos sócios) e remover a dependência `gsap` do `package.json`.

## 🟢 Backlog — imagens de origem pesadas (baixo risco, baixo impacto direto)

PNGs como `hero-home-bg.png` (1.9MB), `services-hero-bg.png` (2.4MB), `article-acquisition-cover.png` (1.9MB) etc. não afetam o usuário final diretamente (o Next já reencoda em AVIF/WebP no tamanho certo antes de entregar), mas pesam no repo e no cold-cache do otimizador. Se quiser reduzir, reencodar como PNG otimizado ou JPEG de alta qualidade (mesmo nome de arquivo, sem trocar referências no código) — só fazer isso com comparação visual, não é urgente.

---

## Roadmap mais amplo (SEO / GEO / infra) — não implementado, mantido como referência de prioridade

### Core Web Vitals (alvo)
- LCP < 2.5s, INP < 200ms, CLS < 0.1. Ferramenta de validação: PageSpeed Insights + CrUX (dado real de usuário, não lab).

### Schema
- `Organization` schema global (footer/header) com `sameAs` para todas as redes.
- `LocalBusiness` aninhado em `LegalService` se houver atendimento presencial.
- `HowTo` schema em conteúdo tipo "como entrar com processo de X" (bom para GEO/IA).
- `Speakable` schema em trechos otimizados para leitura em voz alta.
- Sempre JSON-LD, nunca microdata inline.

### Crawlabilidade e arquitetura de URL
- Profundidade de clique: nenhuma página a mais de 3 cliques da home.
- URLs limpas/semânticas (já é o padrão do site: `/servicos/trafego-pago`, `/conteudos/...`).
- Checar `robots.txt` por bloqueios acidentais.
- Canonical tags em toda página (já presentes via `metadata.alternates.canonical` nas páginas revisadas).
- Internal linking hub-and-spoke entre pilares e clusters de conteúdo.

### Indexação forçada (GSC)
- Submissão em lote via URL Inspection API.
- IndexNow (Bing/Yandex) para notificar mudanças.
- Monitorar Coverage report semanalmente.

### Segurança e infraestrutura
- HTTPS com HSTS habilitado (header, não só certificado).
- TTFB < 200ms — considerar hosting no Brasil para público nacional.
- CDN (Cloudflare resolve isso geralmente sem custo).

### Mobile-first
- Seção não detalhada pelo usuário além do título — completar quando houver contexto adicional.
