import type { LucideIcon } from "lucide-react";
import { Check } from "lucide-react";
import { Reveal, Counter } from "./reveal";
import { useLanguage } from "@/lib/language";
import { CtaBand } from "./site-layout";

export type ServicePageData = {
  eyebrow: string;
  title: string;
  intro: string;
  image: string;
  imageAlt: string;
  aboutTitle: string;
  about: string[];
  highlights: string[];
  services: { icon: LucideIcon; title: string; text: string }[];
  steps: { title: string; text: string }[];
  stats: { value: number; suffix: string; label: string }[];
  audience: string[];
  faq: { q: string; a: string }[];
};

export function ServicePage({ d }: { d: ServicePageData }) {
  const { tree } = useLanguage();
  return tree(
    <>
      <section className="relative overflow-hidden bg-navy-deep text-primary-foreground">
        <img src={d.image} alt="" className="absolute inset-0 h-full w-full object-cover opacity-40 animate-ken-burns" />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="relative mx-auto max-w-6xl px-6 py-28 md:py-36">
          <p className="animate-fade-up text-xs font-semibold uppercase tracking-[0.3em] text-gold">{d.eyebrow}</p>
          <h1 className="animate-fade-up mt-4 max-w-3xl text-5xl font-semibold leading-tight [animation-delay:150ms] md:text-6xl">{d.title}</h1>
          <p className="animate-fade-up mt-6 max-w-2xl text-lg opacity-85 [animation-delay:300ms]">{d.intro}</p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl items-center gap-14 px-6 py-24 md:grid-cols-2">
        <Reveal className="relative">
          <div className="absolute -left-4 -top-4 h-full w-full border-2 border-gold" />
          <img src={d.image} alt={d.imageAlt} loading="lazy" width={1200} height={912} className="relative w-full object-cover shadow-2xl" />
        </Reveal>
        <Reveal delay={150}>
          <h2 className="text-4xl font-semibold md:text-5xl">{d.aboutTitle}</h2>
          {d.about.map((p) => <p key={p} className="mt-5 leading-relaxed text-muted-foreground">{p}</p>)}
          <ul className="mt-8 space-y-3">
            {d.highlights.map((h) => (
              <li key={h} className="flex gap-3 text-sm font-medium"><Check className="mt-0.5 h-5 w-5 shrink-0 text-gold" />{h}</li>
            ))}
          </ul>
        </Reveal>
      </section>

      <section className="bg-secondary py-24">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal><h2 className="text-center text-4xl font-semibold md:text-5xl">Nos prestations</h2></Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {d.services.map((s, i) => (
              <Reveal key={s.title} delay={i * 90}>
                <div className="group h-full bg-card p-8 shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-xl">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-gold transition duration-500 group-hover:rotate-12 group-hover:bg-gradient-gold group-hover:text-primary">
                    <s.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 text-2xl font-semibold">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy-deep py-20 text-primary-foreground">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 text-center md:grid-cols-4">
          {d.stats.map((s) => (
            <div key={s.label}>
              <p className="font-display text-6xl font-semibold text-gradient-gold"><Counter to={s.value} suffix={s.suffix} /></p>
              <p className="mt-2 text-sm opacity-70">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <Reveal><h2 className="text-4xl font-semibold md:text-5xl">Notre démarche</h2></Reveal>
        <div className="mt-14 grid gap-8 md:grid-cols-4">
          {d.steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 120}>
              <div className="relative border-l-2 border-gold pl-6">
                <span className="font-display text-5xl text-gold/40">0{i + 1}</span>
                <h3 className="mt-2 text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-secondary py-24">
        <div className="mx-auto grid max-w-6xl gap-14 px-6 md:grid-cols-2">
          <Reveal>
            <h2 className="text-4xl font-semibold">Pour qui ?</h2>
            <div className="mt-8 flex flex-wrap gap-3">
              {d.audience.map((a) => <span key={a} className="rounded-full border border-gold bg-card px-4 py-2 text-sm font-medium">{a}</span>)}
            </div>
          </Reveal>
          <Reveal delay={150}>
            <h2 className="text-4xl font-semibold">Questions fréquentes</h2>
            <div className="mt-8 divide-y divide-border border-y border-border">
              {d.faq.map((f) => (
                <details key={f.q} className="group py-5">
                  <summary className="flex cursor-pointer list-none justify-between font-semibold">{f.q}<span className="text-gold transition group-open:rotate-45">+</span></summary>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
                </details>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
