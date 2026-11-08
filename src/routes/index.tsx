import { createFileRoute, Link } from "@tanstack/react-router";
import { ShieldCheck, Lock, Sparkles, Clock, Quote } from "lucide-react";
import hero from "@/assets/hero.jpg";
import conseil from "@/assets/conseil.jpg";
import formation from "@/assets/formation.jpg";
import conciergerie from "@/assets/conciergerie.jpg";
import about from "@/assets/about.jpg";
import { CtaBand } from "@/components/site-layout";
import { useLanguage, usePageMetadata } from "@/lib/language";
import { Reveal, Counter } from "@/components/reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { title: "ELITIS AYANG — Cabinet de conseil, formation et conciergerie" },
      { name: "description", content: "ELITIS AYANG accompagne entreprises, dirigeants et voyageurs premium au Cameroun : conseil, formation et conciergerie haut de gamme." },
      { property: "og:title", content: "ELITIS AYANG — Conseil, Formation, Conciergerie" },
      { property: "og:description", content: "Un seul interlocuteur de confiance pour vos projets au Cameroun." },
    ],
  }),
  component: Index,
});

const poles = [
  { to: "/conseil", img: conseil, title: "Conseil", text: "Stratégie, organisation, création d'entreprise et accompagnement des dirigeants." },
  { to: "/formation", img: formation, title: "Formation", text: "Programmes sur mesure en management, leadership, relation client et efficacité." },
  { to: "/conciergerie", img: conciergerie, title: "Conciergerie", text: "Accueil, transferts, hébergement, formalités et assistance privée clé en main." },
] as const;

const values = [
  { icon: ShieldCheck, t: "Confiance", d: "Un interlocuteur unique, fiable et engagé à vos côtés." },
  { icon: Lock, t: "Confidentialité", d: "Discrétion absolue sur chacune de nos missions." },
  { icon: Sparkles, t: "Sur mesure", d: "Des solutions pensées pour vos besoins précis." },
  { icon: Clock, t: "Disponibilité", d: "Réactivité et présence à chaque étape." },
];

const testimonials = [
  { q: "Un accompagnement d'une grande rigueur. Notre réorganisation a été menée avec efficacité et beaucoup d'écoute.", a: "Directeur général, PME — Douala" },
  { q: "La formation en relation client a transformé l'accueil de notre hôtel. Nos équipes sont plus confiantes.", a: "Responsable RH, hôtellerie — Yaoundé" },
  { q: "De l'aéroport jusqu'à mes rendez-vous, tout était parfaitement organisé. Un service vraiment premium.", a: "Membre de la diaspora — Paris" },
];

const sectors = ["Hôtellerie", "Banque & Finance", "Industrie", "Institutions", "Commerce", "Immobilier", "Santé", "ONG", "Télécoms", "Transport"];

function Index() {
  const { tree } = useLanguage();
  usePageMetadata({
    title: "ELITIS AYANG — Cabinet de conseil, formation et conciergerie",
    description: "ELITIS AYANG accompagne entreprises, dirigeants et voyageurs premium au Cameroun : conseil, formation et conciergerie haut de gamme.",
    ogTitle: "ELITIS AYANG — Conseil, Formation, Conciergerie",
    ogDescription: "Un seul interlocuteur de confiance pour vos projets au Cameroun.",
  });
  return tree(
    <>
      <section className="relative overflow-hidden">
        <img src={hero} alt="Rendez-vous d'affaires à Douala" width={1600} height={1008} className="absolute inset-0 h-full w-full object-cover animate-ken-burns" />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="relative mx-auto max-w-6xl px-6 py-32 text-primary-foreground md:py-48">
          <p className="animate-fade-up text-xs font-semibold uppercase tracking-[0.3em] text-gold">Cabinet ELITIS AYANG · Cameroun</p>
          <h1 className="animate-fade-up mt-5 max-w-3xl text-5xl font-semibold leading-[1.05] [animation-delay:150ms] md:text-7xl">
            L'excellence au service de vos <span className="text-gradient-gold">ambitions</span>.
          </h1>
          <p className="animate-fade-up mt-6 max-w-xl text-lg opacity-85 [animation-delay:300ms]">Conseil, formation et conciergerie haut de gamme : un interlocuteur unique, discret et disponible, à Douala, Yaoundé et partout au Cameroun.</p>
          <div className="animate-fade-up mt-10 flex flex-wrap gap-4 [animation-delay:450ms]">
            <Link to="/contact" className="animate-shine rounded-sm px-7 py-3 text-sm font-semibold text-accent-foreground shadow-lg transition hover:scale-105">Nous contacter</Link>
            <Link to="/conseil" className="rounded-sm border border-gold/60 px-7 py-3 text-sm font-semibold transition hover:bg-gold hover:text-accent-foreground">Nos expertises</Link>
          </div>
        </div>
      </section>

      <div className="overflow-hidden border-y border-border bg-card py-5">
        <div className="flex w-max animate-marquee gap-12 font-display text-2xl text-muted-foreground">
          {[...sectors, ...sectors].map((s, i) => <span key={i} className="flex items-center gap-12">{s}<span className="text-gold">◆</span></span>)}
        </div>
      </div>

      <section className="mx-auto grid max-w-6xl items-center gap-16 px-6 py-24 md:grid-cols-2">
        <Reveal className="relative">
          <div className="absolute -right-4 -bottom-4 h-full w-full border-2 border-gold" />
          <img src={about} alt="Consultante du cabinet ELITIS AYANG" loading="lazy" width={1008} height={1200} className="relative w-full object-cover shadow-2xl" />
          <div className="absolute -left-6 bottom-10 animate-float bg-primary p-6 text-primary-foreground shadow-xl">
            <p className="font-display text-4xl text-gradient-gold">3 pôles</p>
            <p className="text-xs opacity-80">d'expertise complémentaires</p>
          </div>
        </Reveal>
        <Reveal delay={150}>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Qui sommes-nous</p>
          <h2 className="mt-3 text-4xl font-semibold md:text-5xl">Un cabinet ancré au Cameroun, ouvert sur le monde.</h2>
          <p className="mt-6 leading-relaxed text-muted-foreground">ELITIS AYANG est né d'une conviction : les entreprises, les dirigeants et les voyageurs exigeants méritent un partenaire capable de les accompagner globalement, avec professionnalisme et élégance.</p>
          <p className="mt-4 leading-relaxed text-muted-foreground">Notre force : réunir sous un même toit le conseil stratégique, la formation des talents et une conciergerie haut de gamme, pour vous faire gagner du temps et de la sérénité.</p>
          <Link to="/contact" className="mt-8 inline-block border-b-2 border-gold pb-1 text-sm font-semibold text-primary">Découvrir notre approche →</Link>
        </Reveal>
      </section>

      <section className="bg-secondary py-24">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal><h2 className="max-w-2xl text-4xl font-semibold md:text-5xl">Trois pôles, une même exigence.</h2></Reveal>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {poles.map((p, i) => (
              <Reveal key={p.to} delay={i * 120}>
                <Link to={p.to} className="group block h-full overflow-hidden bg-card shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-2xl">
                  <div className="overflow-hidden">
                    <img src={p.img} alt={p.title} loading="lazy" width={1200} height={912} className="h-56 w-full object-cover transition duration-700 group-hover:scale-110" />
                  </div>
                  <div className="border-t-2 border-gold p-8">
                    <h3 className="text-3xl font-semibold">{p.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
                    <span className="mt-6 inline-block text-sm font-semibold text-primary transition group-hover:translate-x-2 group-hover:text-gold">Découvrir →</span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy-deep py-20 text-primary-foreground">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 text-center md:grid-cols-4">
          {[[50, "+", "Entreprises accompagnées"], [500, "+", "Personnes formées"], [200, "+", "Séjours organisés"], [98, "%", "Clients satisfaits"]].map(([v, s, l]) => (
            <div key={l as string}>
              <p className="font-display text-6xl font-semibold text-gradient-gold"><Counter to={v as number} suffix={s as string} /></p>
              <p className="mt-2 text-sm opacity-70">{l}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <Reveal><h2 className="text-center text-4xl font-semibold md:text-5xl">Nos valeurs</h2></Reveal>
        <div className="mt-14 grid gap-8 md:grid-cols-4">
          {values.map((v, i) => (
            <Reveal key={v.t} delay={i * 100}>
              <div className="group text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border-2 border-gold text-primary transition duration-500 group-hover:bg-gradient-gold">
                  <v.icon className="h-7 w-7" />
                </div>
                <p className="mt-5 font-display text-2xl font-semibold">{v.t}</p>
                <p className="mt-2 text-sm text-muted-foreground">{v.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-secondary py-24">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal><h2 className="text-4xl font-semibold md:text-5xl">Ils nous font confiance</h2></Reveal>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.a} delay={i * 120}>
                <figure className="h-full bg-card p-8 shadow-sm">
                  <Quote className="h-8 w-8 text-gold" />
                  <blockquote className="mt-4 font-display text-xl leading-snug">« {t.q} »</blockquote>
                  <figcaption className="mt-6 text-xs font-semibold uppercase tracking-widest text-muted-foreground">{t.a}</figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
