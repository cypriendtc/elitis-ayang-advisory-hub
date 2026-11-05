import { createFileRoute } from "@tanstack/react-router";
import { CtaBand, PageHero, ServiceGrid } from "@/components/site-layout";

export const Route = createFileRoute("/conseil")({
  head: () => ({
    meta: [
      { title: "Conseil aux entreprises — ELITIS AYANG" },
      { name: "description", content: "Stratégie, organisation, création d'entreprise et accompagnement des dirigeants au Cameroun." },
      { property: "og:title", content: "Conseil — ELITIS AYANG" },
      { property: "og:description", content: "Un regard expert pour structurer et faire grandir vos projets." },
    ],
  }),
  component: () => (
    <>
      <PageHero eyebrow="Pôle Conseil" title="Des décisions éclairées, des projets qui avancent.">
        Nous accompagnons entreprises, institutions et porteurs de projets de la réflexion stratégique à la mise en œuvre.
      </PageHero>
      <ServiceGrid items={[
        { title: "Stratégie & développement", text: "Diagnostic, positionnement, plan de croissance et études de marché." },
        { title: "Organisation & management", text: "Optimisation des processus, structuration des équipes et conduite du changement." },
        { title: "Création d'entreprise", text: "Business plan, formalités et accompagnement au lancement." },
        { title: "Ressources humaines", text: "Recrutement, gestion des talents et politique RH." },
        { title: "Accompagnement des dirigeants", text: "Coaching et conseil personnalisé pour vos décisions clés." },
        { title: "Diaspora & investissement", text: "Accompagnement des projets d'investissement de la diaspora au Cameroun." },
      ]} />
      <CtaBand />
    </>
  ),
});
