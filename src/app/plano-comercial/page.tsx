import Image from "next/image";
import { Fragment } from "react";
import {
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  UserPlus,
  GraduationCap,
  Eye,
  BarChart3,
  TrendingUp,
  BookOpen,
  FileText,
  Video,
  ClipboardList,
  MessageSquare,
  Presentation,
  Cloud,
  Target,
} from "lucide-react";

function SlideEyebrow({ n, label }: { n: number; label: string }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-blue-500/30 bg-blue-500/10 text-xs font-bold text-blue-400">
        {String(n).padStart(2, "0")}
      </span>
      <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-400">{label}</span>
    </div>
  );
}

const contextoHoje = [
  "Comercial dependente de pessoas",
  "Conhecimento pouco documentado",
  "Crescimento baseado em esforço bruto",
  "Resultados flutuantes e imprevisíveis",
];

const contextoFuturo = [
  "Comercial escalável e modular",
  "Processos claros e documentados",
  "Pessoas treináveis com ramp-up rápido",
  "Gestão orientada por indicadores (KPIs)",
];

const visaoFluxo = [
  { titulo: "Pessoas", desc: "Talentos individuais" },
  { titulo: "Processos", desc: "Sistematização" },
  { titulo: "Previsibilidade", desc: "Métricas estáveis" },
  { titulo: "Escala", desc: "Crescimento contínuo" },
];

const diagnostico = [
  { label: "Conhecimento concentrado", desc: "Informações vitais retidas na mente de poucos membros do time." },
  { label: "Pouca documentação", desc: "Falta de manuais operacionais e processos mapeados formalmente." },
  { label: "Treinamento informal", desc: "Onboarding baseado em observação, sem trilha de capacitação clara." },
  { label: "Dependência de indivíduos", desc: "Resultados atrelados à performance de vendedores específicos." },
  { label: "Pouca previsibilidade", desc: "Dificuldade em projetar receita e escalar o volume de vendas." },
];

const milestones = [
  "2 SDRs performando",
  "2 Closers performando",
  "Playbook Comercial concluído",
  "Onboarding Comercial estruturado",
  "Indicadores padronizados",
  "Rituais comerciais definidos",
];

const pilarPessoas = [
  { icon: UserPlus, label: "Recrutamento", desc: "Perfil ideal de cliente interno (ICP) e processo seletivo padronizado." },
  { icon: GraduationCap, label: "Treinamento", desc: "Onboarding imersivo e reciclagens técnicas contínuas." },
  { icon: Eye, label: "Acompanhamento", desc: "Shadowing de calls, roleplays semanais e mentoria diária." },
  { icon: BarChart3, label: "Performance", desc: "Avaliação baseada em dados reais e KPIs individuais." },
  { icon: TrendingUp, label: "Plano de Carreira", desc: "Regras claras de promoção e evolução financeira (SDR para Closer)." },
];

const cultura = [
  "Responsabilidade",
  "Meritocracia",
  "Feedback Radical",
  "Transparência",
  "Melhoria Contínua",
  "Premiações",
  "Campanhas",
  "Reconhecimento",
];

const segunda = [
  { label: "Reunião Coletiva", desc: "Alinhamento de expectativas da semana." },
  { label: "Planejamento & Prioridades", desc: "Definição do foco tático de cada vendedor." },
  { label: "Revisão de Pipeline", desc: "Auditoria de deals e forecast." },
  { label: "Metas", desc: "Visão clara do que precisa ser atingido." },
];

const quinta = [
  { label: "Reuniões Individuais (1:1)", desc: "Espaço focado no indivíduo." },
  { label: "Coaching & Roleplay", desc: "Treinamento prático de situações reais." },
  { label: "Plano de Ação", desc: "Ajustes táticos para fechar a semana." },
  { label: "Feedback", desc: "Avaliação qualitativa contínua." },
];

const rituaisMensais = [
  { label: "Início do mês", desc: "Reunião Executiva: apresentação dos resultados, KPIs e Plano de Ação." },
  { label: "Meio do mês", desc: "Reunião com Sócios: resultados parciais e correção de rota rápida." },
  { label: "Frequência Mensal", desc: "Review & 1:1: avaliação profunda de performance e desenvolvimento." },
];

const semana1 = ["Imersão na Cultura", "Estudo de Produtos", "Definição de ICP", "Treinamento no CRM", "Estudo de Scripts"];
const semana2 = ["Imersão Comercial", "Acompanhamento (Shadow)", "Roleplays Diários", "Operação supervisionada"];
const aposOnboarding = ["Autonomia operacional", "Feedback contínuo do Gestor", "Treinamentos específicos", "Reciclagens trimestrais"];

const biblioteca = [
  { icon: BookOpen, label: "Playbook Comercial" },
  { icon: FileText, label: "Scripts & Templates" },
  { icon: Video, label: "Biblioteca de Calls" },
  { icon: ClipboardList, label: "Materiais de Apoio" },
  { icon: MessageSquare, label: "Banco de Objeções" },
  { icon: Presentation, label: "Apresentações & Pitchs" },
  { icon: Video, label: "Treinamentos Gravados" },
  { icon: Cloud, label: "Acesso via Nuvem" },
];

const kpiSdr = ["Volume de Contatos", "Agendamentos (Meetings)", "Taxa de Comparecimento", "Taxa de Conversão Geral"];
const kpiCloser = ["Reuniões Realizadas", "Taxa de Fechamento (Win)", "Ticket Médio (ACV/MRR)", "Receita & Pipeline Total"];

const roadmap = [
  { periodo: "30 Dias", titulo: "Organização", desc: "Auditoria, mapeamento do processo atual e configuração das bases operacionais e ferramentas." },
  { periodo: "60 Dias", titulo: "Padronização", desc: "Criação do Playbook, implementação de KPIs, treinamento de scripts e início dos rituais comerciais." },
  { periodo: "90 Dias", titulo: "Escala", desc: "Equipe performando dentro da nova metodologia, previsibilidade de receita e contratações validadas." },
];

const orgChart = [
  "SDRs (Geração e Qualificação)",
  "Closers (Negociação e Fechamento)",
  "Customer Success (Onboarding e Retenção)",
];

export default function PlanoComercialPage() {
  return (
    <main className="min-h-screen bg-[#010f1c] bg-grid text-white">
      {/* Slide 1: Capa */}
      <section className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden px-6 py-24 text-center sm:px-10">
        <div className="glow-cyan pointer-events-none absolute left-1/2 top-1/2 h-[32rem] w-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full" aria-hidden="true" />
        <div className="relative">
          <Image src="/images/scale-logo.svg" alt="Scale Company" width={200} height={50} className="mx-auto mb-10" priority />
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-blue-400 mb-4">Apresentação Interna</p>
          <h1 className="section-title !text-4xl md:!text-6xl">Plano Estratégico Comercial</h1>
          <h2 className="mt-2 text-xl md:text-2xl font-semibold text-white/80">Estruturação do Departamento Comercial</h2>
          <p className="mt-8 max-w-2xl mx-auto text-lg italic text-white/60">
            Construindo um comercial previsível, escalável e independente de talentos individuais.
          </p>
        </div>
      </section>

      {/* Slide 2: Contexto */}
      <section className="border-t border-white/5 px-6 py-24 sm:px-10">
        <div className="mx-auto max-w-5xl">
          <SlideEyebrow n={2} label="Contexto" />
          <h2 className="section-title">Onde estamos <span>vs.</span> onde queremos chegar</h2>
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="card-glass p-8">
              <p className="mb-5 text-xs font-bold uppercase tracking-wider text-white/40">Hoje</p>
              <ul className="space-y-4">
                {contextoHoje.map((item) => (
                  <li key={item} className="flex gap-3 text-white/70">
                    <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-white/30" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="card-glass p-8 !border-blue-500/30 !bg-blue-500/5">
              <p className="mb-5 text-xs font-bold uppercase tracking-wider text-blue-400">Futuro</p>
              <ul className="space-y-4">
                {contextoFuturo.map((item) => (
                  <li key={item} className="flex gap-3 text-white">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Slide 3: Visão Estratégica */}
      <section className="border-t border-white/5 bg-white/[0.015] px-6 py-24 sm:px-10">
        <div className="mx-auto max-w-5xl">
          <SlideEyebrow n={3} label="Visão Estratégica" />
          <h2 className="section-title">Transformar conhecimento em processos</h2>
          <p className="section-subtitle max-w-2xl">
            O objetivo primário é construir um motor comercial capaz de crescer e tracionar receita sem depender de vendedores específicos ou talentos isolados.
          </p>
          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-3">
            {visaoFluxo.map((step, i) => (
              <Fragment key={step.titulo}>
                <div className="card-glass min-w-[180px] px-6 py-6 text-center">
                  <p className="font-bold text-white">{step.titulo}</p>
                  <p className="mt-1 text-sm text-white/50">{step.desc}</p>
                </div>
                {i < visaoFluxo.length - 1 && (
                  <ArrowRight className="h-6 w-6 shrink-0 rotate-90 text-blue-400 sm:rotate-0" />
                )}
              </Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* Slide 4: Diagnóstico */}
      <section className="border-t border-white/5 px-6 py-24 sm:px-10">
        <div className="mx-auto max-w-5xl">
          <SlideEyebrow n={4} label="Diagnóstico" />
          <h2 className="section-title">Principais gargalos identificados na operação</h2>
          <div className="mt-10 space-y-4">
            {diagnostico.map((item) => (
              <div key={item.label} className="card-glass flex gap-4 p-6">
                <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-amber-400" />
                <p className="text-white/80">
                  <strong className="text-white">{item.label}:</strong> {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Slide 5: Milestones */}
      <section className="border-t border-white/5 bg-white/[0.015] px-6 py-24 sm:px-10">
        <div className="mx-auto max-w-5xl">
          <SlideEyebrow n={5} label="Milestones" />
          <h2 className="section-title">Objetivos operacionais para os próximos 90 dias</h2>
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {milestones.map((item) => (
              <div key={item} className="card-glass flex items-center gap-3 p-5">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-blue-400" />
                <span className="font-medium text-white/85">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Slide 6: Design Organizacional */}
      <section className="border-t border-white/5 px-6 py-24 sm:px-10">
        <div className="mx-auto max-w-5xl">
          <SlideEyebrow n={6} label="Design Organizacional" />
          <h2 className="section-title">Estrutura comercial alvo</h2>
          <div className="mt-14 flex flex-col items-center">
            <div className="card-glass px-8 py-4 font-bold">Sócios</div>
            <div className="h-8 w-px bg-white/15" />
            <div className="card-glass !border-blue-500/30 !bg-blue-500/5 px-8 py-4 font-bold text-blue-300">Gestor Comercial</div>
            <div className="h-8 w-px bg-white/15" />
            <div className="relative flex w-full max-w-3xl flex-col gap-6 sm:flex-row sm:justify-between">
              <div className="absolute left-[16%] right-[16%] top-0 hidden h-px bg-white/15 sm:block" />
              {orgChart.map((label) => (
                <div key={label} className="flex flex-1 flex-col items-center gap-4">
                  <div className="h-8 w-px bg-white/15" />
                  <div className="card-glass w-full px-4 py-4 text-center text-sm text-white/80">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Slide 7: Pilar 1 - Pessoas */}
      <section className="border-t border-white/5 bg-white/[0.015] px-6 py-24 sm:px-10">
        <div className="mx-auto max-w-5xl">
          <SlideEyebrow n={7} label="Pilar Estratégico 1" />
          <h2 className="section-title">Pessoas: construindo um time replicável</h2>
          <div className="mt-10 space-y-4">
            {pilarPessoas.map((item) => (
              <div key={item.label} className="card-glass flex gap-4 p-6">
                <item.icon className="mt-0.5 h-5 w-5 shrink-0 text-blue-400" />
                <p className="text-white/80">
                  <strong className="text-white">{item.label}:</strong> {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Slide 8: Pilar 2 - Cultura */}
      <section className="border-t border-white/5 px-6 py-24 sm:px-10">
        <div className="mx-auto max-w-5xl">
          <SlideEyebrow n={8} label="Pilar Estratégico 2" />
          <h2 className="section-title">Cultura: o motor invisível da performance</h2>
          <div className="mt-10 flex flex-wrap gap-3">
            {cultura.map((valor) => (
              <span key={valor} className="rounded-full border border-blue-500/20 bg-blue-500/10 px-5 py-2.5 text-sm font-semibold uppercase tracking-wider text-blue-300">
                {valor}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Slide 9: Pilar 3 - Gestão */}
      <section className="border-t border-white/5 bg-white/[0.015] px-6 py-24 sm:px-10">
        <div className="mx-auto max-w-5xl">
          <SlideEyebrow n={9} label="Pilar Estratégico 3" />
          <h2 className="section-title">Gestão: cadência de rituais comerciais</h2>
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="card-glass p-7">
              <p className="mb-5 text-xs font-bold uppercase tracking-wider text-blue-400">Segunda-feira</p>
              <ul className="space-y-4">
                {segunda.map((item) => (
                  <li key={item.label}>
                    <p className="font-semibold text-white">{item.label}</p>
                    <p className="text-sm text-white/55">{item.desc}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="card-glass p-7">
              <p className="mb-5 text-xs font-bold uppercase tracking-wider text-blue-400">Quinta-feira</p>
              <ul className="space-y-4">
                {quinta.map((item) => (
                  <li key={item.label}>
                    <p className="font-semibold text-white">{item.label}</p>
                    <p className="text-sm text-white/55">{item.desc}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="card-glass mt-6 p-7">
            <p className="mb-5 text-xs font-bold uppercase tracking-wider text-blue-400">Rituais Mensais</p>
            <ul className="grid grid-cols-1 gap-5 sm:grid-cols-3">
              {rituaisMensais.map((item) => (
                <li key={item.label}>
                  <p className="font-semibold text-white">{item.label}</p>
                  <p className="text-sm text-white/55">{item.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Slide 10: Pilar 4 - Desenvolvimento */}
      <section className="border-t border-white/5 px-6 py-24 sm:px-10">
        <div className="mx-auto max-w-5xl">
          <SlideEyebrow n={10} label="Pilar Estratégico 4" />
          <h2 className="section-title">Desenvolvimento: a jornada do colaborador</h2>
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="card-glass p-7">
              <p className="mb-5 text-xs font-bold uppercase tracking-wider text-blue-400">Semana 1: Base</p>
              <ul className="space-y-3">
                {semana1.map((item) => (
                  <li key={item} className="flex gap-2 text-sm text-white/75">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="card-glass p-7">
              <p className="mb-5 text-xs font-bold uppercase tracking-wider text-blue-400">Semana 2: Prática</p>
              <ul className="space-y-3">
                {semana2.map((item) => (
                  <li key={item} className="flex gap-2 text-sm text-white/75">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="card-glass p-7">
              <p className="mb-5 text-xs font-bold uppercase tracking-wider text-blue-400">Após Onboarding</p>
              <ul className="space-y-3">
                {aposOnboarding.map((item) => (
                  <li key={item} className="flex gap-2 text-sm text-white/75">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Slide 11: Gestão do Conhecimento */}
      <section className="border-t border-white/5 bg-white/[0.015] px-6 py-24 sm:px-10">
        <div className="mx-auto max-w-5xl">
          <SlideEyebrow n={11} label="Gestão do Conhecimento" />
          <h2 className="section-title">Biblioteca Comercial: o hub da operação</h2>
          <p className="section-subtitle max-w-2xl">
            Centralização de todos os ativos intelectuais da área comercial, garantindo que o conhecimento pertença à Scale Company, e não aos indivíduos.
          </p>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {biblioteca.map((item) => (
              <div key={item.label} className="card-glass flex flex-col items-center gap-3 p-6 text-center">
                <item.icon className="h-6 w-6 text-blue-400" />
                <span className="text-sm font-medium text-white/80">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Slide 12: Ferramentas Práticas */}
      <section className="border-t border-white/5 px-6 py-24 sm:px-10">
        <div className="mx-auto max-w-5xl">
          <SlideEyebrow n={12} label="Ferramentas Práticas" />
          <h2 className="section-title">Banco de Objeções: biblioteca viva</h2>
          <p className="section-subtitle max-w-2xl">
            Um registro centralizado onde o conhecimento de negociações passadas fica documentado para o futuro.
          </p>
          <div className="card-glass mt-8 p-6">
            <p className="text-white/80">
              <strong className="text-white">Objetivo Estratégico:</strong> garantir que novos vendedores não cometam erros antigos. Todo aprendizado da linha de frente é institucionalizado instantaneamente.
            </p>
          </div>

          <div className="card-glass mt-6 p-7">
            <p className="mb-4 text-xs font-bold uppercase tracking-wider text-blue-400">Exemplo prático: &ldquo;Tá muito caro para o momento&rdquo;</p>
            <p className="mb-4 text-sm text-white/70">
              <strong className="text-white">Contexto:</strong> cliente B2B no final do budget anual comparando nosso serviço com agências locais menores.
            </p>
            <blockquote className="mb-4 rounded-r-lg border-l-4 border-blue-500 bg-blue-500/10 p-4">
              <p className="m-0 italic text-white/90">
                &ldquo;Compreendo perfeitamente, o budget importa. Mas me tire uma dúvida: você está buscando o menor custo hoje, ou a estrutura que vai escalar sua receita de forma previsível amanhã?&rdquo;
              </p>
            </blockquote>
            <p className="text-sm text-white/70">
              <strong className="text-white">Aprendizados:</strong> mudar o frame de &ldquo;custo&rdquo; para &ldquo;investimento na previsibilidade&rdquo;. Ancorar no ROI, não no fee.
            </p>
          </div>
        </div>
      </section>

      {/* Slide 13: Métricas & KPIs */}
      <section className="border-t border-white/5 bg-white/[0.015] px-6 py-24 sm:px-10">
        <div className="mx-auto max-w-5xl">
          <SlideEyebrow n={13} label="Métricas & KPIs" />
          <h2 className="section-title">Dashboards minimalistas de gestão</h2>
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="card-glass p-7">
              <p className="mb-5 text-xs font-bold uppercase tracking-wider text-blue-400">Indicadores SDR</p>
              <ul className="space-y-3">
                {kpiSdr.map((item) => (
                  <li key={item} className="flex gap-2 text-white/80">
                    <Target className="mt-0.5 h-4 w-4 shrink-0 text-blue-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="card-glass p-7">
              <p className="mb-5 text-xs font-bold uppercase tracking-wider text-blue-400">Indicadores Closer</p>
              <ul className="space-y-3">
                {kpiCloser.map((item) => (
                  <li key={item} className="flex gap-2 text-white/80">
                    <BarChart3 className="mt-0.5 h-4 w-4 shrink-0 text-blue-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Slide 14: Implementação */}
      <section className="border-t border-white/5 px-6 py-24 sm:px-10">
        <div className="mx-auto max-w-5xl">
          <SlideEyebrow n={14} label="Implementação" />
          <h2 className="section-title">Roadmap executivo</h2>
          <div className="relative mt-14 grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="absolute left-[16%] right-[16%] top-4 hidden h-px bg-white/15 md:block" />
            {roadmap.map((item) => (
              <div key={item.periodo} className="relative flex flex-col items-center text-center">
                <div className="mb-5 flex h-9 w-9 items-center justify-center rounded-full border border-blue-500/40 bg-[#010f1c] text-xs font-bold text-blue-400">
                  {item.periodo.split(" ")[0]}
                </div>
                <p className="font-bold text-white">{item.periodo}: {item.titulo}</p>
                <p className="mt-2 text-sm text-white/60">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Slide 15: Conclusão */}
      <section className="border-t border-white/5 bg-white/[0.015] px-6 py-28 sm:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <SlideEyebrow n={15} label="Conclusão" />
          <blockquote className="text-xl md:text-2xl font-semibold leading-relaxed text-white">
            &ldquo;O objetivo deste projeto não é apenas aumentar as vendas. É construir um departamento comercial <span className="text-blue-400">previsível</span>, <span className="text-blue-400">escalável</span> e preparado para crescer junto com a Scale Company.&rdquo;
          </blockquote>
          <div className="my-10 h-px w-24 mx-auto bg-white/15" />
          <blockquote className="text-xl md:text-2xl font-semibold leading-relaxed text-white">
            &ldquo;Empresas crescem quando deixam de depender de pessoas e passam a depender de <span className="text-blue-400">processos</span>.&rdquo;
          </blockquote>
          <Image src="/images/scale-logo.svg" alt="Scale Company" width={160} height={40} className="mx-auto mt-16 opacity-70" />
        </div>
      </section>
    </main>
  );
}
