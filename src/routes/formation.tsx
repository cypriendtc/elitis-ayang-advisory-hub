import { createFileRoute } from "@tanstack/react-router";
import { CtaBand, PageHero, ServiceGrid } from "@/components/site-layout";

export const Route = createFileRoute("/formation")({
  head: () => ({
    meta: [
      { title: "Formation professionnelle — ELITIS AYANG" },
      { name: "description", content: "Formations sur mesure en management, leadership, relation client et compétences professionnelles." },
      { property: "og:title", content: "Formation — ELITIS AYANG" },
      { property: "og:description", content: "Développez les compétences de vos équipes avec des programmes sur mesure." },
    ],
  }),
  component: () => (
    <>
      <PageHero eyebrow="Pôle Formation" title="Former aujourd'hui les talents de demain.">
        Des programmes en inter ou intra-entreprise, conçus selon vos objectifs et animés par des praticiens expérimentés.
      </PageHero>
      <ServiceGrid items={[
        { title: "Management & leadership", text: "Piloter une équipe, déléguer, motiver et décider." },
        { title: "Relation client & accueil", text: "Excellence de service, savoir-être et culture premium." },
        { title: "Efficacité professionnelle", text: "Organisation, gestion du temps et communication." },
        { title: "Entrepreneuriat", text: "Construire, financer et piloter son activité." },
        { title: "Protocole & savoir-vivre", text: "Codes de l'entreprise, événements officiels et diplomatie." },
        { title: "Parcours sur mesure", text: "Ingénierie pédagogique adaptée à vos enjeux spécifiques." },
      ]} />
      <CtaBand />
    </>
  ),
});
