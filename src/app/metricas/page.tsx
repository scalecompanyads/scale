"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function MetricasPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);
  };

  if (submitted) {
    return (
      <main className="min-h-screen bg-[#010f1c] bg-grid text-white flex flex-col items-center justify-center p-6">
        <div className="card-glass p-12 text-center max-w-lg w-full flex flex-col items-center">
          <Image
            src="/images/scale-logo.svg"
            alt="Scale Company"
            width={160}
            height={40}
            className="mb-8"
          />
          <div className="w-16 h-16 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center mb-6">
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h1 className="text-2xl font-bold mb-4">Relatório Enviado!</h1>
          <p className="text-white/70 mb-8">
            Obrigado por preencher as métricas desta semana. Seus dados são
            fundamentais para otimizarmos suas campanhas.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="btn-outline w-full justify-center"
          >
            Enviar novo relatório
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#010f1c] bg-grid text-white py-12 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center mb-10 text-center">
          <Image
            src="/images/scale-logo.svg"
            alt="Scale Company"
            width={180}
            height={45}
            className="mb-8"
          />
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Acompanhamento <span className="text-gradient-cyan">Semanal</span>
          </h1>
          <p className="text-white/70 text-lg max-w-xl">
            Preencha os dados abaixo para que possamos analisar a performance da
            última semana e aplicar melhorias na sua captação.
          </p>
        </div>

        {/* Form Card */}
        <div className="card-glass p-6 md:p-10 relative overflow-hidden">
          <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] glow-cyan rounded-full mix-blend-screen opacity-50 pointer-events-none"></div>
          <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] glow-blue rounded-full mix-blend-screen opacity-50 pointer-events-none"></div>

          <form onSubmit={handleSubmit} className="relative z-10 space-y-12">
            {/* Seção 1 */}
            <section className="space-y-6">
              <div className="border-b border-white/10 pb-4 mb-6">
                <h2 className="text-xl font-bold text-gradient">
                  1. Métricas do Funil (Quantitativo)
                </h2>
                <p className="text-white/60 text-sm mt-1">
                  O objetivo desta seção é mapear os números crus para calcular
                  as taxas de conversão entre cada etapa.
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2 text-white/90">
                    Quantos leads novos entraram em contato na última semana?
                  </label>
                  <input
                    type="number"
                    min="0"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="Ex: 15"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-white/90">
                    Quantos leads responderam ao primeiro contato?
                  </label>
                  <input
                    type="number"
                    min="0"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="Ex: 10"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-white/90">
                    Quantas consultas ou reuniões de alinhamento foram
                    agendadas?
                  </label>
                  <input
                    type="number"
                    min="0"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="Ex: 5"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-white/90">
                    Das reuniões agendadas, quantas de fato aconteceram?
                  </label>
                  <input
                    type="number"
                    min="0"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="Ex: 4"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-white/90">
                    Quantos contratos de honorários foram fechados com os leads
                    dessa semana?
                  </label>
                  <input
                    type="number"
                    min="0"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="Ex: 1"
                  />
                </div>
              </div>
            </section>

            {/* Seção 2 */}
            <section className="space-y-6">
              <div className="border-b border-white/10 pb-4 mb-6">
                <h2 className="text-xl font-bold text-gradient">
                  2. Qualidade do Lead (Qualitativo)
                </h2>
                <p className="text-white/60 text-sm mt-1">
                  Serve para entender se a segmentação das campanhas está
                  trazendo o cliente ideal para a tese ou especialidade.
                </p>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-3 text-white/90">
                    Em uma escala de 1 a 5, como você avalia a qualidade geral
                    dos leads desta semana?
                  </label>
                  <div className="flex items-center gap-2 sm:gap-4">
                    {[1, 2, 3, 4, 5].map((num) => (
                      <label key={num} className="flex-1 cursor-pointer group">
                        <input
                          type="radio"
                          name="leadQuality"
                          value={num}
                          required
                          className="sr-only peer"
                        />
                        <div className="h-12 flex items-center justify-center rounded-lg border border-white/10 bg-white/5 peer-checked:bg-blue-600/30 peer-checked:border-blue-500 peer-checked:text-blue-400 transition-all hover:bg-white/10">
                          {num}
                        </div>
                      </label>
                    ))}
                  </div>
                  <div className="flex justify-between text-xs text-white/50 mt-2">
                    <span>1: Muito desqualificados</span>
                    <span>5: Totalmente no perfil</span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-3 text-white/90">
                    A maioria dos leads estava buscando a área de atuação
                    correta da campanha?
                  </label>
                  <div className="space-y-3">
                    {[
                      "Sim, perfeitamente alinhados.",
                      "A maioria sim, mas alguns perdidos.",
                      "Não, muitos buscando áreas diferentes.",
                    ].map((option, idx) => (
                      <label
                        key={idx}
                        className="flex items-start gap-3 cursor-pointer p-3 rounded-lg border border-transparent hover:bg-white/5 transition-colors"
                      >
                        <input
                          type="radio"
                          name="areaAlignment"
                          value={option}
                          required
                          className="mt-1 w-4 h-4 text-blue-500 bg-white/5 border-white/20 focus:ring-blue-500 focus:ring-offset-[#010f1c]"
                        />
                        <span className="text-white/80">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Seção 3 */}
            <section className="space-y-6">
              <div className="border-b border-white/10 pb-4 mb-6">
                <h2 className="text-xl font-bold text-gradient">
                  3. Diagnóstico de Perdas (Objeções)
                </h2>
                <p className="text-white/60 text-sm mt-1">
                  Identificar se o problema está na atração ou no atendimento
                  comercial.
                </p>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-3 text-white/90">
                    Qual foi o principal motivo de perda dos leads que não
                    fecharam? (Múltipla escolha)
                  </label>
                  <div className="space-y-3">
                    {[
                      "Acharam os honorários caros / Sem orçamento.",
                      "Pararam de responder (Ghosting).",
                      "Caso não era viável juridicamente.",
                      "Fecharam com a concorrência.",
                    ].map((option, idx) => (
                      <label
                        key={idx}
                        className="flex items-start gap-3 cursor-pointer p-3 rounded-lg border border-transparent hover:bg-white/5 transition-colors"
                      >
                        <input
                          type="checkbox"
                          name="lossReasons"
                          value={option}
                          className="mt-1 w-4 h-4 rounded text-blue-500 bg-white/5 border-white/20 focus:ring-blue-500 focus:ring-offset-[#010f1c]"
                        />
                        <span className="text-white/80">{option}</span>
                      </label>
                    ))}

                    {/* Outro */}
                    <div className="flex items-start gap-3 p-3">
                      <input
                        type="checkbox"
                        id="lossReasonOther"
                        className="mt-3 w-4 h-4 rounded text-blue-500 bg-white/5 border-white/20 focus:ring-blue-500 focus:ring-offset-[#010f1c]"
                      />
                      <div className="flex-1">
                        <label
                          htmlFor="lossReasonOther"
                          className="text-white/80 block mb-2 cursor-pointer"
                        >
                          Outro:
                        </label>
                        <input
                          type="text"
                          className="w-full bg-white/5 border border-white/10 rounded-lg p-2 text-white focus:outline-none focus:border-blue-500 transition-colors text-sm"
                          placeholder="Especifique..."
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-white/90">
                    Algum comentário adicional ou observação sobre a semana?
                    (Opcional)
                  </label>
                  <textarea
                    rows={4}
                    className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-blue-500 transition-colors resize-none"
                    placeholder="Digite suas observações..."
                  ></textarea>
                </div>
              </div>
            </section>

            <div className="pt-4 flex justify-end">
              <button type="submit" className="btn-shiny w-full md:w-auto">
                Enviar Relatório Semanal
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
