"use client";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

import { useState } from "react";
import { Plus, Minus, ArrowRight } from "lucide-react";
import { useLeadForm } from "@/contexts/LeadFormContext";
import { homeFaqs as faqs } from "@/data/faqs";

function FAQItem({ question, answer }: { question: string, answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="faq-item">
      <button 
        className="faq-question"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
  <span style={{ paddingRight: "1rem" }}>{question}</span>
        <span 
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "24px",
            height: "24px",
            borderRadius: "50%",
            border: "1px solid rgba(255,255,255,0.2)",
            flexShrink: 0,
            transition: "all 0.2s"
          }}
        >
          {open ? <Minus size={14} color="#3B82F6" /> : <Plus size={14} color="rgba(255,255,255,0.5)" />}
        </span>
</button>
      
      <div 
        style={{
          display: "grid",
          gridTemplateRows: open ? "1fr" : "0fr",
          transition: "grid-template-rows 0.3s ease-in-out",
        }}
      >
        <div style={{ overflow: "hidden" }}>
          <p className="faq-answer">{answer}</p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const { open } = useLeadForm();

  return (
    <section id="faq" className="section" style={{ background: "rgba(255,255,255,0.015)" }}>
      <div className="container-page">
        <div style={{ maxWidth: "700px", margin: "0 auto", textAlign: "center", marginBottom: "4rem" }}>
          <h2 className="section-title">
            Tire suas dúvidas com especialistas em <span>marketing para advogados</span>
          </h2>
        </div>

        <div style={{ maxWidth: "800px", margin: "0 auto", marginBottom: "4rem" }}>
          {faqs.map((faq) => (
            <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
          ))}
        </div>

        <div style={{ textAlign: "center" }}>
          <button 
            onClick={open}
            className="btn-shiny"
          >
  <WhatsAppIcon size={20} />
  Agendar diagnóstico da sua captação
</button>
        </div>
      </div>
    </section>
  );
}
