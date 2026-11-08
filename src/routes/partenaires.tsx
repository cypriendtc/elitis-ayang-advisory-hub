import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { PageHero } from "@/components/site-layout";
import { Button } from "@/components/ui/button";
import { useLanguage, usePageMetadata } from "@/lib/language";
import { CONTACTS } from "@/lib/site-contacts";
import { submitPartnership } from "@/lib/partners.functions";

export const Route = createFileRoute("/partenaires")({
  head: () => ({
    meta: [
      { title: "Devenir partenaire — ELITIS AYANG" },
      { name: "description", content: "Proposez votre hôtel ou appartement à ELITIS AYANG et rejoignez notre réseau de partenaires au Cameroun." },
    ],
  }),
  component: Partners,
});

const fieldClass = "w-full rounded-sm border border-input bg-card px-4 py-3 text-sm outline-none focus:border-gold";

function Partners() {
  const { language, tree } = useLanguage();
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  usePageMetadata({
    title: "Devenir partenaire — ELITIS AYANG",
    description: "Proposez votre hôtel ou appartement à ELITIS AYANG et rejoignez notre réseau de partenaires au Cameroun.",
    ogTitle: "Devenir partenaire — ELITIS AYANG",
    ogDescription: "Proposez votre hôtel ou appartement à ELITIS AYANG et rejoignez notre réseau de partenaires au Cameroun.",
  });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const propertyType = form.get("property_type");
    if (propertyType !== "hotel" && propertyType !== "apartment") {
      setStatus("error");
      return;
    }

    setStatus("submitting");
    try {
      await submitPartnership({
        data: {
          contact_name: String(form.get("contact_name") ?? ""),
          email: String(form.get("email") ?? ""),
          phone: String(form.get("phone") ?? ""),
          property_name: String(form.get("property_name") ?? ""),
          property_type: propertyType,
          city: String(form.get("city") ?? ""),
          address: String(form.get("address") ?? ""),
          capacity: Number(form.get("capacity")),
          description: String(form.get("description") ?? ""),
          website: String(form.get("website") ?? ""),
          language,
          consent: form.get("consent") === "on",
          company_url: String(form.get("company_url") ?? ""),
        },
      });
      setStatus("success");
    } catch (error) {
      console.error("Partner application submission failed", error);
      setStatus("error");
    }
  }

  return tree(
    <>
      <PageHero eyebrow="Partenaires" title="Rejoignez notre réseau d'hébergements." />
      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <h2 className="text-3xl font-semibold">Propriétaires d'hôtels et d'appartements</h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Vous proposez un hébergement à Douala, Yaoundé ou ailleurs au Cameroun ? Présentez votre établissement à ELITIS AYANG pour rejoindre notre réseau de partenaires.
          </p>
          <ol className="mt-8 space-y-5">
            <li><span className="font-semibold text-gold">01</span><p className="mt-1 font-medium">Envoyez votre candidature</p><p className="text-sm text-muted-foreground">Décrivez votre hébergement et partagez vos coordonnées.</p></li>
            <li><span className="font-semibold text-gold">02</span><p className="mt-1 font-medium">Notre équipe l'étudie</p><p className="text-sm text-muted-foreground">Chaque candidature est vérifiée avant toute mise en avant auprès des clients.</p></li>
            <li><span className="font-semibold text-gold">03</span><p className="mt-1 font-medium">Échangeons sur la suite</p><p className="text-sm text-muted-foreground">Nous vous recontactons pour discuter des modalités de partenariat.</p></li>
          </ol>
          <p className="mt-8 border-l-2 border-gold pl-4 text-sm text-muted-foreground">
            L'envoi du formulaire constitue une demande de partenariat, et non une publication automatique de votre établissement.
          </p>
        </div>

        <div className="bg-card p-6 shadow-sm md:p-8">
          {status === "success" ? (
            <div role="status" className="py-8">
              <h2 className="font-display text-3xl font-semibold">Merci pour votre candidature !</h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">Notre équipe va examiner les informations et vous recontactera. Votre établissement ne sera présenté qu'après validation du partenariat.</p>
              <a className="mt-6 inline-block font-semibold text-primary underline underline-offset-4" href={`https://wa.me/${CONTACTS.whatsapp.replace("+", "")}`} target="_blank" rel="noopener noreferrer">Une question ? Contactez-nous sur WhatsApp.</a>
            </div>
          ) : (
            <>
              <h2 className="text-3xl font-semibold">Déposer une candidature</h2>
              <p className="mt-2 text-sm text-muted-foreground">Les champs marqués d'un astérisque sont obligatoires.</p>
              <form className="mt-6 grid gap-5" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="contact_name" className="mb-1 block text-sm font-medium">Nom du contact *</label>
                  <input id="contact_name" name="contact_name" autoComplete="name" required maxLength={100} className={fieldClass} />
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="email" className="mb-1 block text-sm font-medium">E-mail *</label>
                    <input id="email" name="email" type="email" autoComplete="email" required maxLength={255} className={fieldClass} />
                  </div>
                  <div>
                    <label htmlFor="phone" className="mb-1 block text-sm font-medium">Téléphone *</label>
                    <input id="phone" name="phone" type="tel" autoComplete="tel" required maxLength={30} className={fieldClass} />
                  </div>
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="property_name" className="mb-1 block text-sm font-medium">Nom de l'établissement *</label>
                    <input id="property_name" name="property_name" required maxLength={150} className={fieldClass} />
                  </div>
                  <div>
                    <label htmlFor="property_type" className="mb-1 block text-sm font-medium">Type d'hébergement *</label>
                    <select id="property_type" name="property_type" required defaultValue="" className={fieldClass}>
                      <option value="" disabled>Sélectionnez une option</option>
                      <option value="hotel">Hôtel</option>
                      <option value="apartment">Appartement / résidence</option>
                    </select>
                  </div>
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="city" className="mb-1 block text-sm font-medium">Ville *</label>
                    <input id="city" name="city" required maxLength={100} className={fieldClass} />
                  </div>
                  <div>
                    <label htmlFor="address" className="mb-1 block text-sm font-medium">Adresse *</label>
                    <input id="address" name="address" autoComplete="street-address" required maxLength={300} className={fieldClass} />
                  </div>
                </div>
                <div>
                  <label htmlFor="capacity" className="mb-1 block text-sm font-medium">Nombre de chambres ou d'unités disponibles *</label>
                  <input id="capacity" name="capacity" type="number" min={1} max={10000} required className={fieldClass} />
                </div>
                <div>
                  <label htmlFor="description" className="mb-1 block text-sm font-medium">Présentez votre établissement *</label>
                  <textarea id="description" name="description" required maxLength={3000} rows={5} className={fieldClass} />
                </div>
                <div>
                  <label htmlFor="website" className="mb-1 block text-sm font-medium">Site web (facultatif)</label>
                  <input id="website" name="website" type="url" maxLength={500} placeholder="https://" className={fieldClass} />
                </div>

                <div className="absolute -left-[10000px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
                  <label htmlFor="company_url">Ne pas remplir</label>
                  <input id="company_url" name="company_url" tabIndex={-1} autoComplete="off" />
                </div>
                <label className="flex items-start gap-3 text-sm leading-relaxed">
                  <input name="consent" type="checkbox" required className="mt-1 accent-primary" />
                  <span>J'accepte qu'ELITIS AYANG utilise ces informations pour étudier ma demande et me recontacter.</span>
                </label>

                {status === "error" && (
                  <p role="alert" className="text-sm font-medium text-destructive">
                    L'envoi a échoué. Vérifiez les informations ou contactez-nous sur WhatsApp au {CONTACTS.whatsapp}.
                  </p>
                )}
                <Button type="submit" disabled={status === "submitting"} className="justify-self-start rounded-sm px-7">
                  {status === "submitting" ? "Envoi en cours…" : "Envoyer ma candidature"}
                </Button>
              </form>
            </>
          )}
        </div>
      </section>
    </>,
  );
}
