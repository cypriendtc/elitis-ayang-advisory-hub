import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "@/components/site-layout";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — ELITIS AYANG" },
      { name: "description", content: "Contactez le cabinet ELITIS AYANG pour vos besoins en conseil, formation ou conciergerie." },
      { property: "og:title", content: "Contactez ELITIS AYANG" },
      { property: "og:description", content: "Écrivez-nous, nous revenons vers vous rapidement." },
    ],
  }),
  component: Contact,
});

const field = "w-full rounded-sm border border-input bg-card px-4 py-3 text-sm outline-none focus:border-gold";

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <PageHero eyebrow="Contact" title="Échangeons sur vos besoins." />
      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-[1fr_1.4fr]">
        <div className="space-y-6">
          {[["Adresse", "Douala — Yaoundé, Cameroun"], ["E-mail", "contact@elitis-ayang.com"], ["Téléphone", "+237 6XX XX XX XX"]].map(([k, v]) => (
            <div key={k}>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">{k}</p>
              <p className="mt-1 font-display text-2xl">{v}</p>
            </div>
          ))}
        </div>
        {sent ? (
          <p className="font-display text-3xl">Merci ! Votre message a bien été pris en compte.</p>
        ) : (
          <form className="grid gap-4" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
            <input required placeholder="Nom complet" className={field} />
            <input required type="email" placeholder="E-mail" className={field} />
            <select className={field} defaultValue="Conseil">
              <option>Conseil</option><option>Formation</option><option>Conciergerie</option><option>Autre</option>
            </select>
            <textarea required rows={6} placeholder="Votre message" className={field} />
            <button className="justify-self-start rounded-sm bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground hover:bg-navy-deep">Envoyer</button>
          </form>
        )}
      </section>
    </>
  );
}
