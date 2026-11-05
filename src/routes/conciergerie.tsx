import { createFileRoute } from "@tanstack/react-router";
import { CtaBand, PageHero, ServiceGrid } from "@/components/site-layout";

export const Route = createFileRoute("/conciergerie")({
  head: () => ({
    meta: [
      { title: "Conciergerie haut de gamme au Cameroun — ELITIS AYANG" },
      { name: "description", content: "Accueil, transferts, réservations et assistance privée à Douala et Yaoundé pour voyageurs d'affaires, diaspora et expatriés." },
      { property: "og:title", content: "Conciergerie — ELITIS AYANG" },
      { property: "og:description", content: "Un service clé en main : un seul interlocuteur pour tout." },
    ],
  }),
  component: () => (
    <>
      <PageHero eyebrow="Pôle Conciergerie & Services" title="Votre temps est précieux. Nous nous occupons du reste.">
        Hommes et femmes d'affaires, diplomates, expatriés, diaspora : un accompagnement local fiable, confidentiel et multilingue.
      </PageHero>
      <ServiceGrid items={[
        { title: "Accueil & transferts", text: "Accueil à l'aéroport, chauffeurs et déplacements entre Douala, Yaoundé et les régions." },
        { title: "Hébergement", text: "Sélection et réservation d'hôtels et résidences de standing." },
        { title: "Formalités & démarches", text: "Assistance administrative, rendez-vous et suivi de dossiers." },
        { title: "Événements", text: "Organisation de séminaires, réceptions et événements familiaux." },
        { title: "Lifestyle management", text: "Restaurants, loisirs, shopping et demandes particulières." },
        { title: "Projets immobiliers", text: "Suivi de vos biens et chantiers pour la diaspora." },
      ]} />
      <CtaBand />
    </>
  ),
});
