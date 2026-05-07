import { lazy, Suspense, useEffect, useRef, useState, type ReactNode } from "react";
import { Navbar } from "@/components/legacy-advogados/sections/Navbar";
import { Hero } from "@/components/legacy-advogados/sections/Hero";

const Problem = lazy(() =>
  import("@/components/legacy-advogados/sections/Problem").then((m) => ({ default: m.Problem }))
);
const FeaturedVideoCase = lazy(() =>
  import("@/components/legacy-advogados/sections/FeaturedVideoCase").then((m) => ({
    default: m.FeaturedVideoCase,
  }))
);
const Solution = lazy(() =>
  import("@/components/legacy-advogados/sections/Solution").then((m) => ({ default: m.Solution }))
);
const Services = lazy(() =>
  import("@/components/legacy-advogados/sections/Services").then((m) => ({ default: m.Services }))
);
const Results = lazy(() =>
  import("@/components/legacy-advogados/sections/Results").then((m) => ({ default: m.Results }))
);
const HowItWorks = lazy(() =>
  import("@/components/legacy-advogados/sections/HowItWorks").then((m) => ({ default: m.HowItWorks }))
);
const Testimonials = lazy(() =>
  import("@/components/legacy-advogados/sections/Testimonials").then((m) => ({
    default: m.Testimonials,
  }))
);
const FAQ = lazy(() => import("@/components/legacy-advogados/sections/FAQ").then((m) => ({ default: m.FAQ })));
const FinalCTA = lazy(() =>
  import("@/components/legacy-advogados/sections/FinalCTA").then((m) => ({ default: m.FinalCTA }))
);
const Footer = lazy(() =>
  import("@/components/legacy-advogados/sections/Footer").then((m) => ({ default: m.Footer }))
);

const deferredPlaceholder = <div className="section min-h-[70vh]" aria-hidden="true" />;

function DeferredSection({ children }: { children: ReactNode }) {
  const [enabled, setEnabled] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setEnabled(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px 120px", threshold: 0.01 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref}>
      {enabled ? (
        <Suspense fallback={deferredPlaceholder}>{children}</Suspense>
      ) : (
        deferredPlaceholder
      )}
    </div>
  );
}

export default function AdvogadosPage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <DeferredSection>
        <Problem />
      </DeferredSection>
      <DeferredSection>
        <FeaturedVideoCase />
      </DeferredSection>
      <DeferredSection>
        <Solution />
      </DeferredSection>
      <DeferredSection>
        <Services />
      </DeferredSection>
      <DeferredSection>
        <Results />
      </DeferredSection>
      <DeferredSection>
        <HowItWorks />
      </DeferredSection>
      <DeferredSection>
        <Testimonials />
      </DeferredSection>
      <DeferredSection>
        <FAQ />
      </DeferredSection>
      <DeferredSection>
        <FinalCTA />
      </DeferredSection>
      <DeferredSection>
        <Footer />
      </DeferredSection>
    </main>
  );
}
