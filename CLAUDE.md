@AGENTS.md

# Performance — prioridade de desenvolvimento

Ver `PERFORMANCE.md` na raiz do projeto. Ele lista o que já foi corrigido (config de imagem, `sizes`, prioridade de LCP) e o que ainda está pendente, na ordem: **1) logo em `public/images/scale-logo*.svg`** (raster de 123KB embutido carregado com `priority` em toda página, maior desperdício de bytes do site), 2) duas libs de animação (framer-motion + gsap) no bundle, 3) roadmap de SEO/schema/crawlabilidade/indexação/infra. Qualquer tarefa de manutenção/evolução do site institucional deve considerar esse arquivo — e nunca reduzir qualidade visual de imagem para ganhar performance.

# LPs de tráfego — NÃO ALTERAR

Este projeto hospeda 5 landing pages que **não fazem parte do site institucional** e que **nunca devem ser alteradas, refatoradas, restilizadas ou consideradas** em qualquer tarefa de manutenção/evolução do site institucional (home, servicos, sobre, cases, contato, conteudos, noticias, etc.). Elas são espelhadas 1:1 do repositório `scalecompany-marketing-juridico` (fonte da verdade) e usadas para tráfego pago / campanhas ao vivo. Formulários, imagens, vídeos, CSS e rotas devem permanecer exatamente como estão.

Rotas protegidas:
- `/scale-advogados` — LP principal de tráfego
- `/scale-advogados-2` — variante de teste (não indexada)
- `/scale-advogados-3` — variante mobile-first (não indexada)
- `/scale-advogados-topo` — variante topo de funil (não indexada)
- `/scale-class` — LP de inscrição para aula/live (não indexada)

Arquivos protegidos (não editar, não deletar, não "limpar duplicação" com o resto do site):
- `src/app/scale-advogados/` (layout.tsx, page.tsx, scale-advogados.css)
- `src/app/scale-advogados-2/` (layout.tsx, page.tsx, scale-advogados.css)
- `src/app/scale-advogados-3/` (layout.tsx, page.tsx, scale-advogados-3.css, DepoimentosCarousel.tsx, InlineLeadForm.tsx, VideoTestimonials.tsx)
- `src/app/scale-advogados-topo/` (layout.tsx, page.tsx, scale-advogados-topo.css)
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

**Uma exceção, aberta pelo usuário em 29/08/2026: o bloco de rastreio.** O
submit das cinco LPs foi alterado aqui de propósito para parar de declarar a
própria URL e passar a medi-la (`capturarTracking()`, em
`src/lib/tracking.ts`) — ver "Rastreio é medido, não declarado" mais abaixo.
Ao copiar qualquer coisa do repo de origem, **não reintroduza o
`pagina: /scale-advogados-x` literal**: era ele o defeito.

# Lead de LP não é lead orgânico

Já quebrou **duas vezes**, e das duas o sintoma apareceu do lado do CRM: o
grupo de WhatsApp do time recebeu lead de **tráfego pago** anunciado como
**"🔔 NOVO LEAD ORGANICO 🔔"**. O CRM tem um aviso de grupo com esse cabeçalho
fixo (`notifyLeadGroup()`), e ele é exclusivo do lead **orgânico** — o do
formulário do institucional. Lead de campanha paga é avisado pelo Make, ou por
ninguém.

Os formulários deste repo não são todos a mesma coisa. Quem manda para onde:

| Formulário | Endpoint local | Vira no CRM | Natureza |
|---|---|---|---|
| Contato, blog, cases (institucional) | `/api/lead-contato`, `/api/lead-blog`, `/api/lead-cases` (via `postToCrmWebhook` de `src/lib/crm.ts`) | `Site — Contato` / `Blog` / `Cases` | **orgânico** |
| `/scale-advogados*` | `/api/lead-lp` (+ Make + Excel, no submit da própria página) | `LP — *` | **tráfego** |
| `/scale-class` | `/api/live-signup` | `Site — Live` → **Quadro Live** | **tráfego (live)** |

A `/scale-class` é a fácil de errar: tem cara de formulário do institucional
(nome, email, WhatsApp, faturamento, email de confirmação bonitinho), mas é
**LP de campanha paga** para inscrição em aula ao vivo. Ela tem classe própria
no CRM — o Quadro Live, agrupado por evento — e **não** é orgânico. Nunca
aponte o form dela (nem nenhum form de LP) para `postToCrmWebhook` / os
endpoints `lead-blog|lead-cases|lead-contato`: aqueles três são exatamente os
que fazem o CRM gritar "NOVO LEAD ORGANICO" no grupo.

Detalhes que andam junto:

- **`/scale-class` não dispara o Make** (diferente das `scale-advogados*`, que
  chamam `MAKE_WEBHOOK_URL` no submit). Ela só chama `/api/live-signup` e
  empurra o evento `lead_submit_success` no `dataLayer` do GTM. E, por decisão
  do usuário, o CRM também não avisa o grupo nesse caminho — inscrito de live
  é volume de campanha. **Nenhum aviso no grupo é o comportamento correto**,
  não um bug para alguém "consertar".
- **`EVENT_ID` em `src/app/scale-class/page.tsx`** (`"YYYY-MM-DD"`) é o que o
  Quadro Live usa para separar uma live da outra. Reaproveitou a página para
  uma live nova? Atualize junto com a data do badge, o título e o link do
  grupo — e lembre que o conteúdo do email de confirmação mora no CRM
  (`app/api/v1/webhooks/live/route.ts`), não aqui.
- **LP nova precisa de entrada nova no CRM.** O Quadro de Tráfego filtra por
  lista exata de origem (`ORIGEM_TRAFEGO` em
  `components/crm/leads-workspace.tsx`); LP que não estiver lá entra no banco
  e some do quadro.

# Rastreio é medido, não declarado

**Nenhum campo de origem de lead nasce de uma constante no código.** URL da
página, UTM, referrer e click id se leem de `window.location` /
`document.referrer` no instante do envio — é o que
`capturarTracking()` (`src/lib/tracking.ts`) faz, e é o único jeito
autorizado de preencher esses campos em qualquer formulário deste repo.

Regra do usuário, 29/08/2026: *"cria uma regra para que url não seja inventado
e seja feito o trackeamento real"*.

O defeito que a originou morava aqui: cada LP mandava a própria URL como
string literal dentro do payload (`pagina: '/scale-advogados-3'`). O CRM
recebia a afirmação e a registrava como se fosse rastreamento — e a coluna
"LP" da base tinha **exatamente os quatro valores escritos no código-fonte**,
inclusive para lead que chegou por outra URL. A `/scale-class` era pior: não
mandava URL nenhuma, e todo inscrito de live entrava sem origem de página.

O que o helper devolve, e por que os dois campos de página:

- **`pagina`** — `location.pathname`, o formato curto que o Make mapeia para a
  coluna "LP" do Monday. Mudar o formato desse campo mexe no board.
- **`pagina_url`** — `location.href` inteiro (domínio, caminho e query). É de
  onde o CRM tira o caminho que grava em `lead_attribution.lp`: a coluna de lá
  guarda `/scale-advogados-3`, não a URL toda (pedido do usuário), mas quem
  extrai o caminho é o webhook, em cima da URL medida. Mandar a URL inteira
  daqui é o que garante que o caminho gravado saiu da barra do navegador.
- **`referrer`** e as UTMs completas — `utm_source/medium/campaign/content/term`,
  `gclid`, `fbclid`. Todas as chaves sempre presentes (string vazia quando não
  há valor), porque o mesmo objeto vai para o Make: campo que some do JSON
  vira mapeamento vazio lá do outro lado sem ninguém perceber.

`utm_content` e `utm_term` chegavam do navegador e morriam em
`/api/lead-lp`, que não os repassava — o Make os levava para o Monday
("Criativo" e "Público") e o CRM ficava com a atribuição pela metade. Se for
acrescentar um campo de rastreio, ele precisa atravessar os **três** pontos:
o helper, o repasse (`src/app/api/lead-lp/route.ts`, `/api/live-signup`) e o
schema do webhook no CRM (`lib/api/schemas/webhooks.ts`), senão ele é
capturado e jogado fora silenciosamente.

Derivar de dado medido é permitido; chutar não é. `LP_SOURCES` em
`/api/lead-lp` transforma o **caminho real** em rótulo de origem (`LP — Scale
Advogados 3`) e cai em "Landing Page" quando não conhece a rota — nunca
inventa a rota. E campo de rastreio que não veio vai **vazio**: um `lp` nulo
diz "não sabemos", um `lp` chutado diz uma mentira indistinguível da verdade.
