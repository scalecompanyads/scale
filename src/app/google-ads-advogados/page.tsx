import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CheckCircle2, Target, TrendingUp, BarChart, Scale, HelpCircle, ArrowRight, BadgeCheck } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { CTAButton } from "@/components/ui/CTAButton";
import { pageOpenGraph } from "@/lib/og";
import '@/styles/scale-advogados-v3-hero.css';

export const metadata: Metadata = {
  title: "Google Ads para Advogados: Leads em 7 Dias | Scale",
  description:
    "Campanhas de Google Ads para advogados 100% dentro da OAB. Apareça no topo quando o cliente busca sua área. Leads qualificados desde a 1ª semana.",
  alternates: { canonical: "/google-ads-advogados" },
  openGraph: pageOpenGraph({
    title: "Google Ads para Advogados: Leads em 7 Dias | Scale",
    description:
      "Campanhas de Google Ads para advogados 100% dentro da OAB. Apareça no topo quando o cliente busca sua área. Leads qualificados desde a 1ª semana.",
    path: "/google-ads-advogados",
  }),
};

export default function GoogleAdsAdvogados() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col min-h-screen bg-[#010f1c] text-white">
        
        {/* 1. Hero Section */}
        <section className="relative h-[100dvh] md:h-screen flex flex-col overflow-hidden bg-[#020b16] md:pb-0">
          
          {/* Mobile Image Container */}
          <div className="absolute top-0 inset-x-0 w-full md:hidden h-[45dvh] z-0">
            <img 
              src="/images/hero-mobile-bg.png" 
              alt="Google Ads para Advogados" 
              className="w-full h-full object-cover object-top"
            />
            {/* Mobile Overlay */}
            <div className="absolute inset-x-0 bottom-0 h-[60%] bg-gradient-to-t from-[#020b16] to-transparent" />
          </div>

          {/* Desktop Background Image */}
          <div 
            className="hidden md:block absolute inset-0 bg-[url('/images/hero-desktop-bg.png')] bg-cover bg-center bg-no-repeat z-0" 
          />

          {/* Desktop Overlay */}
          <div className="hidden md:block absolute inset-y-0 left-0 w-[60%] bg-gradient-to-r from-[#020b16] via-[#020b16]/90 to-transparent z-0" />

          {/* Content Container */}
          <div className="container-page relative z-10 w-full flex-grow flex flex-col justify-end md:justify-center pb-2 pt-[30vh] md:py-0">
            <div className="flex flex-col items-center text-center md:items-start md:text-left max-w-full md:max-w-[550px]">
              
              {/* Badge (Hidden on Mobile) */}
              <div className="hidden md:inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.03)] text-[rgba(255,255,255,0.8)] text-xs font-bold tracking-[0.15em] uppercase backdrop-blur-sm mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] inline-block" />
                Conformidade com a OAB
              </div>

              {/* H1 */}
              <h1 className="text-[clamp(1.75rem,4.5vw,3.5rem)] font-bold leading-[1.1] tracking-tight text-white m-0 mb-4">
                Google Ads para Advogados: Capte Clientes{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] to-[#1630DF]">
                  Todos os Dias
                </span>{" "}
                com Ética.
              </h1>

              {/* Subheadline */}
              <div className="flex flex-col gap-3 mb-6">
                <p className="text-[clamp(0.9rem,1.2vw,1.15rem)] font-medium text-[rgba(255,255,255,0.85)] leading-relaxed m-0">
                  Posicione seu escritório de advocacia no topo do Google exatamente no momento em que seu cliente ideal busca pelas suas áreas de atuação.
                </p>
                <p className="text-[0.85rem] md:text-base text-[rgba(255,255,255,0.85)] leading-relaxed m-0">
                  Estratégia de marketing jurídico de alta performance e{" "}
                  <strong className="text-white font-medium block mt-1 md:inline md:mt-0">100% alinhada ao Provimento 205/2021.</strong>
                </p>
              </div>

              {/* CTAs */}
              <div className="flex flex-col items-center md:items-start gap-3 w-full md:w-auto">
                <CTAButton className="inline-flex items-center justify-center gap-2 bg-[#3B82F6] text-white font-bold text-[0.8rem] md:text-sm uppercase tracking-widest px-6 py-3 hover:bg-[#1630DF] transition-colors duration-300 w-full md:w-auto">
                  <WhatsAppIcon size={18} />
                  Agendar Diagnóstico Gratuito
                </CTAButton>
                <div className="mt-2 flex items-center justify-center gap-2 text-xs md:text-sm text-[rgba(255,255,255,0.6)]">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>Mais de 100 escritórios atendidos</span>
                </div>
              </div>

            </div>
          </div>

          {/* Bottom transition border */}
          <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.1)] to-transparent z-20" />
        </section>

        {/* 2. Seção de Dor e Solução */}
        <section className="py-24 bg-[#021626] px-4 sm:px-6 lg:px-8 border-y border-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Chega de depender apenas de indicações boca a boca</h2>
              <p className="text-[rgba(255,255,255,0.7)] text-lg">
                Explicamos a diferença entre a prospecção ativa (proibida pela OAB) e a prospecção passiva (permitida). O Google Ads atua na intenção de busca, captando quem já precisa da sua ajuda.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-8 bg-[#010f1c] rounded-2xl border border-white/5 hover:border-blue-500/30 transition-colors">
                <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-6">
                  <Target className="w-6 h-6 text-blue-500" />
                </div>
                <h3 className="text-xl font-bold mb-4">Tráfego Altamente Qualificado</h3>
                <p className="text-[rgba(255,255,255,0.6)]">Atraia clientes que já precisam da sua especialidade (Criminal, Trabalhista, Previdenciário, Família). Você aparece para buscas exatas.</p>
              </div>
              <div className="p-8 bg-[#010f1c] rounded-2xl border border-white/5 hover:border-blue-500/30 transition-colors">
                <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-6">
                  <TrendingUp className="w-6 h-6 text-blue-500" />
                </div>
                <h3 className="text-xl font-bold mb-4">Custo sob Controle</h3>
                <p className="text-[rgba(255,255,255,0.6)]">Invista o orçamento que fizer sentido para a realidade da sua banca. O Google Ads permite escalar o investimento com segurança.</p>
              </div>
              <div className="p-8 bg-[#010f1c] rounded-2xl border border-white/5 hover:border-blue-500/30 transition-colors">
                <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-6">
                  <BarChart className="w-6 h-6 text-blue-500" />
                </div>
                <h3 className="text-xl font-bold mb-4">Mensuração de Contratos</h3>
                <p className="text-[rgba(255,255,255,0.6)]">Saiba exatamente quantos contatos fecharam honorários a partir das campanhas, medindo o retorno sobre cada real investido.</p>
              </div>
            </div>

            <div className="mt-16 flex justify-center">
              <CTAButton className="inline-flex items-center justify-center gap-2 bg-[#3B82F6] text-white font-bold text-sm md:text-base uppercase tracking-widest px-8 py-4 hover:bg-[#1630DF] transition-colors duration-300 text-center">
                <WhatsAppIcon size={20} />
                Quero atrair clientes qualificados
              </CTAButton>
            </div>
          </div>
        </section>

        {/* 3. Quebra da Maior Objeção (OAB) */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#010f1c]">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#021626] to-[#010f1c] border border-blue-900/30 rounded-3xl p-8 md:p-12 relative overflow-hidden">
            <Scale className="absolute -right-10 -bottom-10 w-64 h-64 text-blue-500/5" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Fazer anúncios no Google é permitido pela OAB?</h2>
              <p className="text-xl text-emerald-400 font-medium mb-6">A resposta é SIM.</p>
              <div className="space-y-4 text-[rgba(255,255,255,0.8)] leading-relaxed">
                <p>
                  Tanto o <strong>Código de Ética e Disciplina</strong> quanto o <strong>Provimento 205/2021</strong> da OAB permitem o uso do Google Ads.
                </p>
                <p>
                  O Google Ads é considerado <strong>publicidade passiva (inbound marketing)</strong>, pois o advogado não está "oferecendo" o serviço diretamente ou enviando propostas não solicitadas, mas sim aparecendo de forma informativa para quem já está buscando por auxílio jurídico na rede de pesquisa.
                </p>
                <p className="text-[rgba(255,255,255,0.5)] text-sm mt-6 pt-4 border-t border-white/10 italic">
                  *Nossas estratégias evitam termos mercantilistas e focam puramente em autoridade e informação, garantindo total segurança ética para a sua banca.
                </p>
              </div>

              <div className="mt-10">
                <CTAButton className="inline-flex items-center justify-center gap-2 bg-[#3B82F6] text-white font-bold text-sm md:text-base uppercase tracking-widest px-8 py-4 hover:bg-[#1630DF] transition-colors duration-300 text-center">
                  <WhatsAppIcon size={20} />
                  Analisar viabilidade do meu escritório
                </CTAButton>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Metodologia */}
        <section className="py-24 bg-[#021626] px-4 sm:px-6 lg:px-8 border-y border-white/5">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Como estruturamos o Google Ads do seu Escritório de Advocacia</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Mapeamento de Palavras-Chave Jurídicas",
                  desc: "Identificação de termos de fundo de funil (ex: 'advogado especialista em divórcio' e não apenas 'o que é divórcio')."
                },
                {
                  step: "02",
                  title: "Criação de Landing Pages de Alta Conversão",
                  desc: "Anúncios precisam de páginas rápidas e persuasivas. Construímos o web design focado em converter cliques em contatos no WhatsApp."
                },
                {
                  step: "03",
                  title: "Configuração e Segmentação Local",
                  desc: "Foco na sua cidade ou região de atuação, otimizando o raio de alcance para atrair clientes viáveis para o seu modelo de atendimento."
                },
                {
                  step: "04",
                  title: "Otimização e Escala",
                  desc: "Análise constante de dados e termos de pesquisa para reduzir o Custo por Aquisição (CPA) de cada novo cliente."
                }
              ].map((item, idx) => (
                <div key={idx} className="relative p-8 bg-[#010f1c] border border-white/5 rounded-2xl">
                  <div className="text-4xl font-black text-blue-500/20 mb-4">{item.step}</div>
                  <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                  <p className="text-[rgba(255,255,255,0.6)]">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-16 flex justify-center">
              <CTAButton className="inline-flex items-center justify-center gap-2 bg-[#3B82F6] text-white font-bold text-sm md:text-base uppercase tracking-widest px-8 py-4 hover:bg-[#1630DF] transition-colors duration-300 text-center">
                <WhatsAppIcon size={20} />
                Quero implementar essa estratégia
              </CTAButton>
            </div>
          </div>
        </section>

        {/* 5. Prova Social e Autoridade */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#010f1c]">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">Resultados reais na Advocacia</h2>
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="p-8 rounded-2xl bg-gradient-to-br from-[#021626] to-[#010f1c] border border-white/10">
                <div className="text-5xl font-black text-white mb-2">+300%</div>
                <div className="text-lg font-medium text-blue-400 mb-4">Volume de Contatos Qualificados</div>
                <p className="text-[rgba(255,255,255,0.5)] text-sm">Aumento no volume de agendamentos em 3 meses para escritórios focados em demandas de alta complexidade.</p>
              </div>
              <div className="p-8 rounded-2xl bg-gradient-to-br from-[#021626] to-[#010f1c] border border-white/10">
                <div className="text-5xl font-black text-white mb-2">-45%</div>
                <div className="text-lg font-medium text-blue-400 mb-4">Redução do Custo por Lead</div>
                <p className="text-[rgba(255,255,255,0.5)] text-sm">Otimização contínua de campanhas isolando cliques desqualificados e curiosos.</p>
              </div>
            </div>

            <div className="mt-16 flex justify-center">
              <CTAButton className="inline-flex items-center justify-center gap-2 bg-[#3B82F6] text-white font-bold text-sm md:text-base uppercase tracking-widest px-8 py-4 hover:bg-[#1630DF] transition-colors duration-300 text-center">
                <WhatsAppIcon size={20} />
                Quero resultados como esses
              </CTAButton>
            </div>
          </div>
        </section>

        {/* 6. FAQ (Schema Markup for FAQPage recommended later) */}
        <section className="py-24 bg-[#021626] px-4 sm:px-6 lg:px-8 border-y border-white/5">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Principais dúvidas sobre Gestão de Tráfego para Advogados</h2>
            
            <div className="space-y-4">
              {[
                {
                  q: "Qual o investimento mínimo ideal no Google Ads para advogados?",
                  a: "Sugerimos a partir de R$ 30 a R$ 50 diários para obter dados estatísticos rápidos e gerar os primeiros contatos qualificados, variando conforme sua região."
                },
                {
                  q: "Em quanto tempo começo a receber mensagens de potenciais clientes?",
                  a: "Geralmente nos primeiros dias ou semanas de veiculação ativa, já que os anúncios captam pessoas com urgência e intenção imediata."
                },
                {
                  q: "Preciso ter um site ou a landing page já é suficiente?",
                  a: "Apenas uma Landing Page de alta conversão costuma performar melhor em anúncios do que sites institucionais genéricos, pois direciona o usuário exatamente ao que ele buscou."
                },
                {
                  q: "Vocês atendem todas as áreas do direito?",
                  a: "Atendemos áreas como Previdenciário, Trabalhista, Família, Criminal, Tributário e Empresarial. Avaliamos a viabilidade antes de iniciar o projeto."
                },
                {
                  q: "A OAB pode punir meu escritório por usar o Google?",
                  a: "Não. A prospecção passiva via links patrocinados no Google é permitida e regulamentada pelo Provimento 205/2021, desde que respeitados os princípios éticos."
                }
              ].map((faq, idx) => (
                <div key={idx} className="p-6 bg-[#010f1c] border border-white/5 rounded-xl">
                  <h3 className="text-lg font-bold mb-3 flex items-start gap-3">
                    <HelpCircle className="w-6 h-6 text-blue-500 shrink-0 mt-0.5" />
                    <span>{faq.q}</span>
                  </h3>
                  <p className="text-[rgba(255,255,255,0.6)] pl-9">{faq.a}</p>
                </div>
              ))}
            </div>

            <div className="mt-16 flex justify-center">
              <CTAButton className="inline-flex items-center justify-center gap-2 bg-[#3B82F6] text-white font-bold text-sm md:text-base uppercase tracking-widest px-8 py-4 hover:bg-[#1630DF] transition-colors duration-300 text-center">
                <WhatsAppIcon size={20} />
                Tirar dúvidas com um especialista
              </CTAButton>
            </div>
          </div>
        </section>

        {/* 7. Call to Action Final */}
        <section className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-[#010f1c]">
           <div className="absolute inset-0 bg-[url('/images/cta-bg.png')] bg-cover bg-center bg-no-repeat opacity-20"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#010f1c] to-transparent"></div>
          
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Pronto para acelerar o crescimento da sua banca?</h2>
            <p className="text-xl text-[rgba(255,255,255,0.7)] mb-10 max-w-2xl mx-auto">
              Não deixe seus potenciais clientes encontrarem a concorrência na primeira página do Google.
            </p>
            <CTAButton className="inline-flex px-10 py-5 bg-[#3B82F6] text-white font-bold rounded hover:bg-[#2563EB] transition-colors items-center justify-center gap-2 text-lg">
              Quero uma Análise da Minha Presença Digital
              <ArrowRight className="w-5 h-5" />
            </CTAButton>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
