import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "@/components/site-layout";
import { useLanguage, usePageMetadata } from "@/lib/language";
import { CONTACTS } from "@/lib/site-contacts";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
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
  const { tree } = useLanguage();
  usePageMetadata({
    title: "Contact — ELITIS AYANG",
    description: "Contactez le cabinet ELITIS AYANG pour vos besoins en conseil, formation ou conciergerie.",
    ogTitle: "Contactez ELITIS AYANG",
    ogDescription: "Écrivez-nous, nous revenons vers vous rapidement.",
  });
  return tree(
    <>
      <PageHero eyebrow="Contact" title="Échangeons sur vos besoins." />
      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:gap-12 sm:px-6 sm:py-20 md:grid-cols-[1fr_1.4fr]">
        <div className="min-w-0 space-y-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">Adresse</p>
            <p className="mt-1 font-display text-2xl">Douala — Yaoundé, Cameroun</p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">E-mail</p>
            <a className="mt-1 inline-block break-all font-display text-xl sm:text-2xl" href="mailto:contact@elitis-ayang.com">contact@elitis-ayang.com</a>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">Téléphone</p>
            <a className="mt-1 inline-block font-display text-xl sm:text-2xl" href={`tel:${CONTACTS.phone}`}>{CONTACTS.phone}</a>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">WhatsApp</p>
            <a className="mt-1 inline-block font-display text-xl sm:text-2xl" href={`https://wa.me/${CONTACTS.whatsapp.replace("+", "")}`} target="_blank" rel="noopener noreferrer">{CONTACTS.whatsapp}</a>
          </div>
          <a href={CONTACTS.facebook} target="_blank" rel="noopener noreferrer" className="inline-block border-b border-gold pb-1 text-sm font-semibold">Suivez-nous sur Facebook</a>
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
