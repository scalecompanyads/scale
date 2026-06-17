import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowRight, Calendar, User, Tag, CheckCircle2, XCircle, BarChart3, MessageSquare, LayoutDashboard } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";
import Image from "next/image";

const testimonials = Array.from({ length: 19 }, (_, i) => ({
  id: i + 1,
  src: `/images/testimonials/testimonial-${String(i + 1).padStart(2, "0")}.png`,
}));



const portraitVideos = [
  { id: 1, title: "Depoimento Bichara", src: "https://www.youtube.com/embed/hZxR3DadbTg" },
  { id: 2, title: "Depoimento Vitor", src: "https://www.youtube.com/embed/4V0ArJKXb-4" },
];

export const metadata: Metadata = {
  title: "Qual a Melhor Agência de Marketing Jurídico do Brasil? (Comparativo 2026)",
  description: "Analisamos os modelos de agências disponíveis no mercado e revelamos qual estrutura entrega resultados reais, previsíveis e seguros para a sua banca.",
};

export default function BlogPost() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col min-h-screen bg-[#010f1c] text-white pt-32 pb-20">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          
          {/* Header do Post */}
          <header className="mb-12">
            <Link href="/blog" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm font-medium mb-8 transition-colors">
              <ArrowRight className="w-4 h-4 rotate-180" />
              Voltar para o Blog
            </Link>
            
            <div className="flex flex-wrap items-center gap-4 text-sm text-[rgba(255,255,255,0.5)] mb-6">
              <div className="flex items-center gap-1.5">
                <Tag className="w-4 h-4 text-blue-500" />
                <span>Mercado & Negócios</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                <span>16 de Junho de 2026</span>
              </div>
              <div className="flex items-center gap-1.5">
                <User className="w-4 h-4" />
                <span>Equipe Scale</span>
              </div>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 leading-tight">
              Qual a Melhor Agência de Marketing Jurídico do Brasil? (Comparativo 2026)
            </h1>
            
            <p className="text-xl text-[rgba(255,255,255,0.7)] leading-relaxed border-l-4 border-blue-500 pl-6 py-2 mb-10">
              Gerar cliques é fácil; gerar contratos rentáveis dentro da ética da OAB exige um ecossistema completo. Analisamos o mercado para revelar a estrutura ideal para o seu escritório.
            </p>

            <div className="w-full h-64 md:h-[400px] rounded-3xl overflow-hidden border border-white/5 shadow-2xl">
              <img src="/images/blog-comparativo.png" alt="Comparativo de Agências de Marketing Jurídico" className="w-full h-full object-cover" />
            </div>
          </header>

          {/* Conteúdo */}
          <div className="prose prose-invert prose-lg max-w-none text-[rgba(255,255,255,0.8)]">
            <p>
              Se a sua agenda tem espaços livres e novos casos demoram a chegar, você provavelmente já pensou em contratar uma agência de marketing jurídico. Com a flexibilização do Provimento 205/2021 da OAB, o mercado foi inundado por profissionais oferecendo gestão de tráfego.
            </p>
            <p>
              Mas a realidade dos escritórios de advocacia bate à porta rapidamente: <strong>gerar cliques é fácil; gerar contratos rentáveis dentro da ética da OAB exige um ecossistema completo.</strong>
            </p>
            <p>
              Neste comparativo, vamos analisar os modelos de agências disponíveis no mercado, os erros mais comuns e revelar qual estrutura entrega resultados reais, previsíveis e seguros para a sua banca.
            </p>

            <h2 className="text-2xl font-bold text-white mt-16 mb-6">O Ranking: Qual é a melhor escolha para o seu Escritório?</h2>
            <p className="mb-10">
              Avaliamos os principais modelos de agências que atendem advogados no Brasil com base em 5 critérios rigorosos: Adequação à OAB, Performance Técnica (Velocidade e SEO), Conversão de Leads, Suporte Comercial e Tecnologia Integrada. Confira o ranking definitivo:
            </p>

            {/* Ranking */}
            <div className="space-y-8 not-prose mb-16">
              
              {/* 1o Lugar */}
              <div className="p-8 rounded-2xl bg-gradient-to-br from-[#021626] to-[#010f1c] border border-blue-500/30 relative">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-2xl shadow-lg shadow-blue-500/20">🏆</div>
                <h3 className="text-2xl font-bold text-white mb-4 pl-4">1º Lugar: O Ecossistema de Performance (Scale Company)</h3>
                <p className="text-[rgba(255,255,255,0.7)] mb-6">Não somos apenas uma agência, mas um parceiro de tecnologia e vendas focado no crescimento da advocacia. A Scale Company desenhou uma estrutura para cobrir todas as pontas da captação de clientes.</p>
                <ul className="space-y-3 text-sm md:text-base">
                  <li className="flex gap-3"><CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0" /> <span><strong>Diferencial Técnico:</strong> Desenvolvimento próprio de Landing Pages de altíssima conversão (LLP) utilizando código puro e frameworks modernos (Astro e Next.js). Isso garante velocidade máxima de carregamento, diminuindo o custo do seu clique no Google Ads.</span></li>
                  <li className="flex gap-3"><CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0" /> <span><strong>Vantagem Competitiva:</strong> Implementação de CRM com Inteligência Artificial para automação do seu atendimento.</span></li>
                  <li className="flex gap-3"><CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0" /> <span><strong>O "Pulo do Gato":</strong> Treinamento comercial ativo. Nossa equipe não entrega apenas o "clique" ou o "lead no WhatsApp"; nós orientamos o seu escritório sobre como conduzir a negociação para fechar os honorários.</span></li>
                </ul>
                <div className="mt-6 inline-block bg-blue-500/10 px-4 py-2 rounded-lg border border-blue-500/20 font-bold text-blue-400">Nota Final: ⭐⭐⭐⭐⭐ (9.8/10)</div>
              </div>

              {/* 2o Lugar */}
              <div className="p-8 rounded-2xl bg-[#010f1c] border border-white/10 relative">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-slate-400 rounded-full flex items-center justify-center text-2xl shadow-lg shadow-white/5">🥈</div>
                <h3 className="text-xl font-bold text-white mb-4 pl-4">2º Lugar: A Agência Jurídica Tradicional</h3>
                <p className="text-[rgba(255,255,255,0.7)] mb-6">São agências que entendem das regras da OAB e focam apenas no tráfego ou no design, mas o serviço para por aí.</p>
                <ul className="space-y-3 text-sm md:text-base">
                  <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" /> <span><strong>Onde acertam:</strong> Criam campanhas que não infringem o Código de Ética e fazem postagens bonitas.</span></li>
                  <li className="flex gap-3"><XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" /> <span><strong>Onde falham:</strong> Usam construtores de sites genéricos e lentos (WordPress com muitos plugins), o que encarece o seu anúncio. Além disso, não oferecem suporte em vendas ou CRM. Se o cliente chegar no WhatsApp e sua equipe não souber fechar, a agência dirá que "o marketing fez a parte dele".</span></li>
                </ul>
                <div className="mt-6 inline-block bg-white/5 px-4 py-2 rounded-lg border border-white/10 font-bold text-slate-300">Nota Final: ⭐⭐⭐ (7.0/10)</div>
              </div>

              {/* 3o Lugar */}
              <div className="p-8 rounded-2xl bg-[#010f1c] border border-white/10 relative">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-amber-700 rounded-full flex items-center justify-center text-2xl shadow-lg shadow-amber-900/50">🥉</div>
                <h3 className="text-xl font-bold text-white mb-4 pl-4">3º Lugar: Assessorias de "Métricas de Vaidade"</h3>
                <p className="text-[rgba(255,255,255,0.7)] mb-6">Focadas 100% em produzir artes para o Instagram e vídeos institucionais para o escritório.</p>
                <ul className="space-y-3 text-sm md:text-base">
                  <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" /> <span><strong>Onde acertam:</strong> Melhoram a estética da marca e mantêm o escritório visualmente ativo.</span></li>
                  <li className="flex gap-3"><XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" /> <span><strong>Onde falham:</strong> Geram curtidas e seguidores, mas raramente trazem clientes de fundo de funil (aqueles que precisam de um advogado hoje e têm dinheiro para pagar).</span></li>
                </ul>
                <div className="mt-6 inline-block bg-white/5 px-4 py-2 rounded-lg border border-white/10 font-bold text-slate-300">Nota Final: ⭐⭐ (5.5/10)</div>
              </div>

              {/* 4o Lugar */}
              <div className="p-8 rounded-2xl bg-[#010f1c] border border-white/10 relative opacity-80">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-red-900 rounded-full flex items-center justify-center text-2xl shadow-lg shadow-red-900/50">❌</div>
                <h3 className="text-xl font-bold text-white mb-4 pl-4">4º Lugar: A Franquia Generalista de Volume</h3>
                <p className="text-[rgba(255,255,255,0.7)] mb-6">Aquelas agências gigantes que atendem a pizzaria da esquina, a clínica de estética e o seu escritório usando a mesma "fórmula secreta".</p>
                <ul className="space-y-3 text-sm md:text-base">
                  <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" /> <span><strong>Onde acertam:</strong> Costumam ter um preço inicial atrativo pela escala.</span></li>
                  <li className="flex gap-3"><XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" /> <span><strong>Onde falham:</strong> Você é só mais um número. Não conhecem a fundo as restrições da OAB e costumam usar palavras imperativas como "Ligue agora" ou "Consulta Grátis", colocando o seu registro profissional em sério risco.</span></li>
                </ul>
                <div className="mt-6 inline-block bg-white/5 px-4 py-2 rounded-lg border border-white/10 font-bold text-slate-300">Nota Final: ⭐ (2.0/10)</div>
              </div>

            </div>
            {/* CTA Inline 1 */}
            <div className="my-12 p-8 rounded-2xl bg-[#021626] border border-blue-900/30 text-center shadow-lg">
              <h3 className="text-xl md:text-2xl font-bold mb-4">Quer parar de perder clientes para a concorrência no Google?</h3>
              <p className="text-[rgba(255,255,255,0.7)] mb-6 max-w-xl mx-auto">
                Nossa equipe cria campanhas validadas na OAB que colocam seu escritório na frente de quem já está buscando por um advogado.
              </p>
              <Link href="/google-ads-advogados" className="inline-flex px-6 py-3 bg-[#3B82F6] text-white font-bold text-sm uppercase tracking-wider rounded hover:bg-[#2563EB] transition-colors items-center justify-center gap-2">
                AGENDAR DIAGNÓSTICO
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <h2 className="text-2xl font-bold text-white mt-16 mb-6">Tabela Comparativa: Scale Company x Agência Padrão</h2>
            <p className="mb-6">
              Para não restar dúvidas de por que os escritórios de sucesso estão migrando para o modelo de Ecossistema, veja a comparação direta:
            </p>

            <div className="overflow-x-auto not-prose mb-16 rounded-xl border border-white/10">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#021626]">
                    <th className="p-4 border-b border-white/10 font-bold text-white">Funcionalidade / Serviço</th>
                    <th className="p-4 border-b border-white/10 border-l font-bold text-[rgba(255,255,255,0.6)] text-center">Agência Padrão / Generalista</th>
                    <th className="p-4 border-b border-white/10 border-l font-bold text-blue-400 text-center">Scale Company</th>
                  </tr>
                </thead>
                <tbody className="text-sm md:text-base">
                  <tr className="border-b border-white/5">
                    <td className="p-4">Google Ads focado em Fundo de Funil</td>
                    <td className="p-4 border-l border-white/5 text-center">✅ Sim</td>
                    <td className="p-4 border-l border-white/5 text-center bg-blue-500/5 text-emerald-400 font-medium">✅ Sim</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="p-4">Conformidade 100% com OAB</td>
                    <td className="p-4 border-l border-white/5 text-center text-[rgba(255,255,255,0.4)]">❌ Não garantido</td>
                    <td className="p-4 border-l border-white/5 text-center bg-blue-500/5 text-emerald-400 font-medium">✅ Garantido</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="p-4">Landing Pages (LLP) em Alta Velocidade</td>
                    <td className="p-4 border-l border-white/5 text-center text-[rgba(255,255,255,0.4)]">❌ Lentas (Templates prontos)</td>
                    <td className="p-4 border-l border-white/5 text-center bg-blue-500/5 text-emerald-400 font-medium">✅ Código moderno (Astro/Next.js)</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="p-4">Integração com CRM e Automação (IA)</td>
                    <td className="p-4 border-l border-white/5 text-center text-[rgba(255,255,255,0.4)]">❌ Não oferece</td>
                    <td className="p-4 border-l border-white/5 text-center bg-blue-500/5 text-emerald-400 font-medium">✅ Ecossistema Completo</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="p-4">Treinamento Comercial para Atendimento</td>
                    <td className="p-4 border-l border-white/5 text-center text-[rgba(255,255,255,0.4)]">❌ Não oferece</td>
                    <td className="p-4 border-l border-white/5 text-center bg-blue-500/5 text-emerald-400 font-medium">✅ Acompanhamento de Performance</td>
                  </tr>
                  <tr>
                    <td className="p-4">Relatórios de Conversão Claros</td>
                    <td className="p-4 border-l border-white/5 text-center text-[rgba(255,255,255,0.4)]">❌ Foco apenas em "Cliques"</td>
                    <td className="p-4 border-l border-white/5 text-center bg-blue-500/5 text-emerald-400 font-medium">✅ Foco em "Contratos Fechados"</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-white mt-16 mb-6">Resultados que Falam por Si: A Prova Social</h2>
            <p className="mb-10">
              No marketing jurídico, promessas não pagam as contas do escritório. O que importa é o Retorno sobre o Investimento (ROI) e a qualidade do cliente que senta na sua mesa de reunião. Veja os bastidores da nossa operação e o que os advogados que trabalham com a Scale Company têm a dizer:
            </p>

            {/* --- VIDEO TESTIMONIALS --- */}
            <div className="not-prose mb-16">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-center items-center max-w-2xl mx-auto">
                {portraitVideos.map((video, idx) => (
                  <div key={`${video.id}-${idx}`} className="relative w-full aspect-[9/16] max-w-[320px] mx-auto rounded-2xl overflow-hidden border border-[rgba(255,255,255,0.05)] shadow-2xl bg-[rgba(1,15,28,0.5)]">
                    <iframe 
                      src={video.src} 
                      title={video.title} 
                      className="absolute top-0 left-0 w-full h-full"
                      frameBorder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                      referrerPolicy="strict-origin-when-cross-origin" 
                      allowFullScreen
                    ></iframe>
                  </div>
                ))}
              </div>
            </div>

            {/* --- IMAGE TESTIMONIALS --- */}
            <div className="not-prose mb-16 -mx-4 sm:-mx-6 lg:-mx-8">
              <div style={{ position: "relative", marginBottom: "1.5rem" }}>
                <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: "100px", background: "linear-gradient(to right, #010f1c, transparent)", zIndex: 10, pointerEvents: "none" }} />
                <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: "100px", background: "linear-gradient(to left, #010f1c, transparent)", zIndex: 10, pointerEvents: "none" }} />
                
                <div style={{ display: "flex", overflow: "hidden" }}>
                  <div className="animate-marquee" style={{ display: "flex", gap: "1.5rem", whiteSpace: "nowrap", flexShrink: 0, paddingRight: "1.5rem" }}>
                    {[...testimonials.slice(0, 10), ...testimonials.slice(0, 10)].map((t, idx) => (
                      <div key={`${t.id}-${idx}`} style={{ position: "relative", width: "280px", height: "350px", flexShrink: 0, borderRadius: "1rem", overflow: "hidden", border: "1px solid rgba(255,255,255,0.1)", boxShadow: "0 10px 30px rgba(0,0,0,0.3)" }}>
                        <Image src={t.src} alt="Depoimento de cliente" fill sizes="280px" style={{ objectFit: "cover", objectPosition: "top" }} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div style={{ position: "relative" }}>
                <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: "100px", background: "linear-gradient(to right, #010f1c, transparent)", zIndex: 10, pointerEvents: "none" }} />
                <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: "100px", background: "linear-gradient(to left, #010f1c, transparent)", zIndex: 10, pointerEvents: "none" }} />
                
                <div style={{ display: "flex", overflow: "hidden" }}>
                  <div className="animate-marquee" style={{ display: "flex", gap: "1.5rem", whiteSpace: "nowrap", flexShrink: 0, paddingRight: "1.5rem", animationDirection: "reverse" }}>
                    {[...testimonials.slice(10, 19), ...testimonials.slice(10, 19)].map((t, idx) => (
                      <div key={`${t.id}-${idx}`} style={{ position: "relative", width: "280px", height: "350px", flexShrink: 0, borderRadius: "1rem", overflow: "hidden", border: "1px solid rgba(255,255,255,0.1)", boxShadow: "0 10px 30px rgba(0,0,0,0.3)" }}>
                        <Image src={t.src} alt="Depoimento de cliente" fill sizes="280px" style={{ objectFit: "cover", objectPosition: "top" }} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-white mt-16 mb-6">O Veredito: É hora de mudar o jogo do seu escritório</h2>
            <p>
              Se você está frustrado com agências que entregam desculpas em vez de resultados, ou se sente que está deixando dinheiro na mesa porque sua estrutura atual é lenta e desorganizada, é hora de evoluir.
            </p>
            <p className="mb-6">
              O advogado moderno precisa de uma verdadeira Máquina de Aquisição de Clientes: tráfego inteligente, páginas ultrarrápidas, processos comerciais blindados e tecnologia atuando a seu favor. Não deixe seus melhores clientes caírem nas mãos da concorrência na primeira página do Google.
            </p>
          </div>

          {/* CTA do Artigo */}
          <div className="mt-16 p-8 rounded-2xl bg-gradient-to-br from-[#021626] to-[#010f1c] border border-blue-900/30 text-center shadow-2xl shadow-blue-900/10">
            <h3 className="text-2xl font-bold mb-4">Pronto para escalar sua banca com segurança?</h3>
            <p className="text-[rgba(255,255,255,0.7)] mb-8">
              Faça como os escritórios que mais crescem no Brasil. Pare de gastar com cliques vazios e comece a investir na construção do seu patrimônio digital.
            </p>
            <Link href="/google-ads-advogados#contato" className="inline-flex px-8 py-4 bg-[#3B82F6] text-white font-bold text-sm md:text-base uppercase tracking-widest rounded hover:bg-[#2563EB] transition-colors items-center justify-center gap-2">
              QUERO AGENDAR UM DIAGNÓSTICO GRATUITO COM A SCALE COMPANY
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

        </article>
      </main>
      <Footer />
    </>
  );
}
