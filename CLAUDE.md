# Scale Company — Guia do Projeto

## Stack
- **Framework:** Astro 5 (geração estática)
- **CSS:** Tailwind CSS v3 + `@astrojs/tailwind`
- **Linguagem:** TypeScript
- **Hosting:** A definir (Vercel ou Netlify recomendados)

## Estrutura de Pastas

```
src/
├── components/
│   ├── layout/       → Header, Footer, Nav, BaseHead
│   ├── sections/     → blocos de página (Hero, ServicesGrid, LocalCTA, ...)
│   ├── ui/           → componentes atômicos (Button, ServiceCard, Badge, ...)
│   └── seo/          → schemas JSON-LD (LocalBusiness, Service, Article)
├── content/
│   └── blog/         → artigos com co-location (cada artigo = pasta própria)
│       ├── _template/          → copie para criar novo artigo (ignorado pelo Astro)
│       │   └── index.md
│       └── nome-do-artigo/     → uma pasta por artigo
│           ├── index.md        → conteúdo + frontmatter
│           └── cover.webp      → única imagem “hero” do artigo (lista + OG + página)
├── data/             → dados centralizados (services.ts, cities.ts, navigation.ts)
├── layouts/          → BaseLayout, ServiceLayout, LocalLayout, BlogLayout
├── pages/            → rotas do site (arquivo = URL)
│   ├── servicos/     → páginas nacionais de serviço
│   ├── vila-velha/   → páginas locais VV (Fase 1)
│   ├── vitoria/      → páginas locais Vitória (Fase 2)
│   ├── serra/        → páginas locais Serra (Fase 2)
│   └── espirito-santo/ → hub estadual (Fase 3)
└── styles/
    └── global.css    → @tailwind directives + CSS vars + @layer components
```

## Tailwind — Padrões do Projeto

O projeto usa **Tailwind v3** com cores baseadas em variáveis CSS definidas em `src/styles/global.css`.

### Grupos de cores customizados

| Grupo | Uso | Exemplo de classe |
|-------|-----|-------------------|
| `brand.*` | Cores da marca | `bg-brand-primary`, `text-brand-primary` |
| `ink.*` | Texto | `text-ink`, `text-ink-light`, `text-ink-inverse` |
| `surface.*` | Fundos | `bg-surface-card`, `bg-surface-subtle` |
| `edge.*` | Bordas | `border-edge` |

### Para atualizar a identidade visual
Edite apenas `src/styles/global.css` — as variáveis `:root` controlam tudo:
```css
:root {
  --color-brand-primary: #0ea5e9;   /* ← substituir pela cor real */
  --color-brand-secondary: #0284c7;
  --font-body: system-ui;           /* ← substituir pela fonte real */
  --font-heading: system-ui;
}
```

### Classes utilitárias (@layer components em global.css)

```html
<!-- Container com max-width -->
<div class="container">...</div>
<div class="container-narrow">...</div>

<!-- Seção com padding vertical padrão -->
<section class="section">...</section>
<section class="section bg-surface-subtle">...</section>

<!-- Cabeçalho de seção -->
<div class="section-header">
  <span class="section-label">Label</span>
  <h2 class="section-title">Título</h2>
  <p class="section-subtitle">Subtítulo</p>
</div>
```

### Botões inline (padrão das páginas)
```html
<!-- Primary -->
<a href="..." class="px-8 py-4 text-lg font-semibold rounded-lg bg-brand-primary text-ink-inverse hover:bg-brand-secondary border-2 border-brand-primary transition-colors">
  CTA
</a>

<!-- Outline -->
<a href="..." class="px-8 py-4 text-lg font-semibold rounded-lg border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-ink-inverse transition-colors">
  CTA
</a>
```
> Ou use `<Button variant="primary" size="lg">` de `@components/ui/Button.astro`.

### Badge de cidade (padrão das páginas locais)
```html
<span class="inline-flex items-center gap-2 bg-green-50 border border-green-200 text-green-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
  📍 Vila Velha – ES
</span>
```

### Cards de serviço/cidade
```html
<a href="..." class="block p-5 rounded-xl border border-edge bg-surface-card hover:border-brand-primary hover:shadow-md transition-all">
  <p class="font-semibold text-ink text-lg">Serviço</p>
</a>
```

## Path Aliases (use nos imports)

```ts
import Button from '@components/ui/Button.astro';
import BaseLayout from '@layouts/BaseLayout.astro';
import { services } from '@data/services';
import '@styles/global.css';
```

## Responsabilidades (2 devs)

| Área | Dev 1 (Tech/SEO) | Dev 2 (Conteúdo/Local) |
|------|------------------|------------------------|
| `src/components/` | ✅ cria e mantém | ⚠️ não criar sem avisar |
| `src/layouts/` | ✅ principal | lê, não edita |
| `src/pages/` | cria arquivos + estrutura | preenche textos e copy |
| `src/content/blog/` | — | ✅ principal |
| `src/data/` | ✅ estrutura TypeScript | ✅ preenche valores |
| `src/styles/global.css` | ✅ principal | só lê variáveis CSS |

## Git — Branches

```
main        → produção (só via PR de develop)
develop     → integração (sempre funcional)
dev1/sem1-setup        → Dev 1
dev2/sem1-conteudo-vv  → Dev 2
```

- **Commits em português, imperativo:** `adiciona página vila-velha/criacao-de-sites`
- **PR obrigatório** para develop — o outro dev revisa
- **Tags por fase:** `v1.0.0` (Fase 1), `v2.0.0` (Fase 2), `v3.0.0` (Fase 3)

## Como Adicionar uma Nova Página Local

1. Criar arquivo em `src/pages/[cidade]/[servico].astro`
2. Usar `LocalLayout` como layout base
3. Importar dados da cidade de `@data/cities`
4. Title tag: `"[Serviço] em [Cidade] – ES | Scale"`
5. Hero com badge de cidade, h1, descrição e CTAs — copiar padrão de `/vila-velha/criacao-de-sites.astro`

## Como Adicionar um Artigo de Blog

> **Padrão obrigatório: co-location.** Cada artigo é uma pasta, não um arquivo solto.
> NUNCA criar `.md` diretamente na raiz de `src/content/blog/`.

### Passo a passo

1. Copie a pasta `src/content/blog/_template/` e renomeie para o slug do artigo:
   ```
   src/content/blog/meu-novo-artigo/
   └── index.md
   ```

2. Edite `index.md` preenchendo o frontmatter completo:
   ```yaml
   ---
   title: "Título do Artigo (com keyword)"
   description: "Resumo para meta description. Máx 160 caracteres."
   publishDate: 2025-06-01
   category: seo          # ver categorias válidas abaixo
   tags: ['seo', 'google']
   featured: false
   focusKeyword: "palavra-chave principal"
   readingTime: 6          # minutos estimados
   slug: meu-novo-artigo   # OBRIGATÓRIO — define a URL /blog/meu-novo-artigo
   ---
   ```

3. Adicione **uma** imagem de capa na mesma pasta (padrão para cards do `/blog`, hero do artigo e Open Graph — não é necessário arquivo separado para OG):
   ```
   src/content/blog/meu-novo-artigo/
   ├── index.md
   └── cover.webp          ← formato webp, proporção 16:9 recomendada
   ```

4. Referencie a capa no frontmatter com path relativo:
   ```yaml
   coverImage: ./cover.webp
   coverImageAlt: "Descrição acessível da imagem"
   ```

5. O artigo aparece automaticamente em `/blog` e em `/blog/meu-novo-artigo`.
   Não é necessário alterar nenhuma página de roteamento.

### Categorias válidas (campo `category`)

| Valor | Uso |
|-------|-----|
| `criacao-de-sites` | Sites institucionais e e-commerces |
| `landing-pages` | Landing pages e conversão |
| `seo` | Otimização para buscadores |
| `trafego-pago` | Google Ads, Meta Ads, mídia paga |
| `redes-sociais` | Social media e gestão de redes |
| `marketing-digital` | Marketing digital em geral |
| `local` | Conteúdo de SEO local (cidades) |
| `nicho` | Conteúdo segmentado por nicho de mercado |

### Campo `slug` — regras críticas

- **É obrigatório.** Sem ele, a URL gerada pelo Astro incluirá `/index` e quebrará.
- **Deve ser idêntico ao nome da pasta.** Exemplo: pasta `gestao-redes-sociais-para-empresas/` → `slug: gestao-redes-sociais-para-empresas`.
- **Não inclua no schema Zod** (`src/content/config.ts`). `slug` é campo reservado do Astro — adicioná-lo ao schema causa erro de build.
- Use kebab-case, sem acentos, sem espaços.

### Ilustrações no corpo do texto (padrão: ícones; imagens raster só se necessário)

- **Padrão:** ilustrar com **ícones ou SVG inline** (HTML permitido no `.md`) e boa hierarquia de títulos/listas. Use as classes utilitárias `.blog-icon` e `figure.blog-figure-icon` definidas em `src/styles/global.css` para manter tamanho e cor alinhados à marca.
- **Exceção:** fotos, prints ou diagramas em **`.webp`** no corpo só quando forem indispensáveis (ex.: captura de tela, gráfico de dados). Não planeje “galerias” por artigo — isso dificulta escalar a produção.

Exemplo de SVG inline com legenda:
```html
<figure class="blog-figure-icon">
  <span class="blog-icon" aria-hidden="true">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
  </span>
  <figcaption>Legenda opcional</figcaption>
</figure>
```

Escape hatch — imagem raster rara na pasta do artigo:
```markdown
![Print do relatório no GA4](./exemplo-print.webp)
```

### Arquivos gerados automaticamente

| Rota | Arquivo responsável |
|------|---------------------|
| `/blog` | `src/pages/blog/index.astro` |
| `/blog/[slug]` | `src/pages/blog/[slug].astro` |
| Schema JSON-LD do artigo | `src/components/seo/SchemaArticle.astro` (via `BlogLayout`) |

### O que NÃO fazer

- Não criar `.md` solto em `src/content/blog/` (sem pasta)
- Não omitir o campo `slug` no frontmatter
- Não definir `slug` dentro do schema Zod em `src/content/config.ts`
- Não colocar imagens em `src/assets/blog/` — capa e assets do corpo ficam na pasta do artigo
- Não preencher o corpo com várias imagens “placeholder”; prefira ícones/SVG e texto
- Não duplicar slugs entre artigos diferentes

## Nomenclatura de Arquivos

| Tipo | Padrão | Exemplo |
|------|--------|---------|
| Componentes Astro | PascalCase | `ServiceCard.astro` |
| Páginas Astro | kebab-case | `criacao-de-sites.astro` |
| Data files | camelCase | `services.ts` |
| Pasta de artigo de blog | kebab-case | `quanto-custa-criar-um-site-profissional/` |
| Arquivo de artigo | sempre `index.md` | `index.md` (dentro da pasta do artigo) |
| Imagem de capa do artigo | `cover.webp` | `cover.webp` (única imagem principal por artigo) |
| Imagem raster no corpo (exceção) | kebab-case descritivo | `print-dashboard.webp` — só quando necessário |
| Imagens de componentes/UI | `categoria-nome.webp` | `service-criacao-de-sites.webp` |

## URLs do Site (mapa completo)

### Nacionais
- `/` — Home
- `/servicos` — Hub de serviços
- `/servicos/gestao-redes-sociais`
- `/servicos/trafego-pago`
- `/servicos/consultoria-seo`
- `/servicos/criacao-de-sites`
- `/servicos/criacao-de-landing-pages`
- `/cases`
- `/sobre`
- `/contato`
- `/blog` + `/blog/[slug]`

### Locais — Vila Velha (Fase 1)
- `/vila-velha` — hub local
- `/vila-velha/criacao-de-sites`
- `/vila-velha/criacao-de-landing-pages`
- `/vila-velha/seo`
- `/vila-velha/gestao-redes-sociais`
- `/vila-velha/trafego-pago`

### Locais — Vitória (Fase 2), Serra (Fase 2), ES (Fase 3)
- `/vitoria`, `/vitoria/criacao-de-sites`, `/vitoria/seo`
- `/serra`, `/serra/criacao-de-sites`
- `/espirito-santo`, `/espirito-santo/criacao-de-sites`
