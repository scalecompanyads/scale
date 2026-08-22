@AGENTS.md

# Performance — prioridade de desenvolvimento

Ver `PERFORMANCE.md` na raiz do projeto. Ele lista o que já foi corrigido (config de imagem, `sizes`, prioridade de LCP) e o que ainda está pendente, na ordem: **1) logo em `public/images/scale-logo*.svg`** (raster de 123KB embutido carregado com `priority` em toda página, maior desperdício de bytes do site), 2) duas libs de animação (framer-motion + gsap) no bundle, 3) roadmap de SEO/schema/crawlabilidade/indexação/infra. Qualquer tarefa de manutenção/evolução do site institucional deve considerar esse arquivo — e nunca reduzir qualidade visual de imagem para ganhar performance.

# LPs de tráfego — NÃO ALTERAR

Este projeto hospeda 4 landing pages que **não fazem parte do site institucional** e que **nunca devem ser alteradas, refatoradas, restilizadas ou consideradas** em qualquer tarefa de manutenção/evolução do site institucional (home, servicos, sobre, cases, contato, conteudos, noticias, etc.). Elas são espelhadas 1:1 do repositório `scalecompany-marketing-juridico` (fonte da verdade) e usadas para tráfego pago / campanhas ao vivo. Formulários, imagens, vídeos, CSS e rotas devem permanecer exatamente como estão.

Rotas protegidas:
- `/scale-advogados` — LP principal de tráfego
- `/scale-advogados-2` — variante de teste (não indexada)
- `/scale-advogados-3` — variante mobile-first (não indexada)
- `/scale-class` — LP de inscrição para aula/live (não indexada)

Arquivos protegidos (não editar, não deletar, não "limpar duplicação" com o resto do site):
- `src/app/scale-advogados/` (layout.tsx, page.tsx, scale-advogados.css)
- `src/app/scale-advogados-2/` (layout.tsx, page.tsx, scale-advogados.css)
- `src/app/scale-advogados-3/` (layout.tsx, page.tsx, scale-advogados-3.css, DepoimentosCarousel.tsx, InlineLeadForm.tsx, VideoTestimonials.tsx)
- `src/app/scale-class/` (layout.tsx, page.tsx)
- `src/app/api/live-signup/route.ts` (form da /scale-class chama esse endpoint; depende de `CRM_WEBHOOK_TOKEN` no `.env.local`)
- `src/lib/og.ts`, `src/lib/webhooks.ts`
- `src/data/legalSeo.ts`, `src/data/legalLogos.ts`, `src/data/legalExtraLogos.ts`
- `src/components/legal/ScaleAdvogadosV3Hero.tsx`, `src/components/legal/ScaleAdvogados2V3Hero.tsx`
- `src/styles/scale-advogados-v3-hero.css`, `src/styles/scale-advogados-2-v3-hero.css`
- `public/scale-advogados/` (88MB de imagens/vídeos usados pelas 3 variantes de scale-advogados)
- `public/scale-class/`
- dependência `lucide-react` (pinada em `1.17.0` no `package.json`, mesma versão do repo de origem — usada só por essas LPs)

Qualquer atualização futura dessas LPs deve vir do repositório de origem `scalecompany-marketing-juridico` (copiar de lá, não editar aqui diretamente).
