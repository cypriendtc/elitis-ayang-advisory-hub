import { createFileRoute, Link } from "@tanstack/react-router";
import hero from "@/assets/hero.jpg";
import { CtaBand } from "@/components/site-layout";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ELITIS AYANG — Cabinet de conseil, formation et conciergerie" },
      { name: "description", content: "ELITIS AYANG accompagne entreprises, dirigeants et voyageurs premium au Cameroun : conseil, formation et conciergerie haut de gamme." },
      { property: "og:title", content: "ELITIS AYANG — Conseil, Formation, Conciergerie" },
      { property: "og:description", content: "Un seul interlocuteur de confiance pour vos projets au Cameroun." },
    ],
  }),
  component: Index,
});

const poles = [
  { to: "/conseil", title: "Conseil", text: "Stratégie, organisation et accompagnement des entreprises et porteurs de projets." },
  { to: "/formation", title: "Formation", text: "Programmes sur mesure pour développer les compétences de vos équipes et dirigeants." },
  { to: "/conciergerie", title: "Conciergerie", text: "Accueil, transferts, réservations et assistance privée, clé en main." },
] as const;

function Index() {
  return (
    <>
      <section className="relative overflow-hidden">
        <img src={hero} alt="Rendez-vous d'affaires à Douala" width={1600} height={1008} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="relative mx-auto max-w-6xl px-6 py-32 text-primary-foreground md:py-44">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Cabinet ELITIS AYANG · Cameroun</p>
          <h1 className="mt-5 max-w-3xl text-5xl font-semibold leading-[1.05] md:text-7xl">
            L'excellence au service de vos <span className="text-gradient-gold">ambitions</span>.
          </h1>
          <p className="mt-6 max-w-xl text-lg opacity-85">Conseil, formation et conciergerie haut de gamme : un interlocuteur unique, discret et disponible.</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/contact" className="rounded-sm bg-gradient-gold px-7 py-3 text-sm font-semibold text-accent-foreground">Nous contacter</Link>
            <Link to="/conseil" className="rounded-sm border border-gold/60 px-7 py-3 text-sm font-semibold">Nos expertises</Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="max-w-2xl text-4xl font-semibold md:text-5xl">Trois pôles, une même exigence.</h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {poles.map((p) => (
            <Link key={p.to} to={p.to} className="group border-t-2 border-gold bg-card p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <h3 className="text-3xl font-semibold">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
              <span className="mt-6 inline-block text-sm font-semibold text-primary group-hover:text-gold">Découvrir →</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-secondary">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-4">
          {[["Confiance", "Un interlocuteur unique et fiable"], ["Confidentialité", "Discrétion absolue"], ["Sur mesure", "Des solutions personnalisées"], ["Disponibilité", "Réactivité à chaque étape"]].map(([t, d]) => (
            <div key={t}>
              <p className="font-display text-2xl font-semibold text-primary">{t}</p>
              <p className="mt-2 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
