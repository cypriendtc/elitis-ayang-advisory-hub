import { createFileRoute } from "@tanstack/react-router";
import { Plane, Hotel, FileCheck, PartyPopper, Gem, Home } from "lucide-react";
import { ServicePage } from "@/components/service-page";
import img from "@/assets/conciergerie.jpg";

export const Route = createFileRoute("/conciergerie")({
  head: () => ({
    meta: [
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { title: "Conciergerie haut de gamme au Cameroun — ELITIS AYANG" },
      { name: "description", content: "Accueil, transferts, réservations et assistance privée à Douala et Yaoundé pour voyageurs d'affaires, diaspora et expatriés." },
      { property: "og:title", content: "Conciergerie — ELITIS AYANG" },
      { property: "og:description", content: "Un service clé en main : un seul interlocuteur pour tout." },
    ],
  }),
  component: () => (
    <ServicePage d={{
      metadata: {
        title: "Conciergerie haut de gamme au Cameroun — ELITIS AYANG",
        description: "Accueil, transferts, réservations et assistance privée à Douala et Yaoundé pour voyageurs d'affaires, diaspora et expatriés.",
        ogTitle: "Conciergerie — ELITIS AYANG",
        ogDescription: "Un service clé en main : un seul interlocuteur pour tout.",
      },
      eyebrow: "Pôle Conciergerie & Services",
      title: "Votre temps est précieux. Nous nous occupons du reste.",
      intro: "Hommes et femmes d'affaires, diplomates, expatriés, diaspora : un accompagnement local fiable, confidentiel et multilingue.",
      image: img, imageAlt: "Chauffeur ELITIS AYANG accueillant une cliente à l'aéroport",
      aboutTitle: "Un service clé en main, un seul interlocuteur",
      about: [
        "Manque de temps, formalités complexes, peur de perdre ses repères dans les grandes villes : nous savons ce que vivent les voyageurs exigeants.",
        "Notre conciergerie haut de gamme vous apporte gain de temps, sécurité, confort et confidentialité, de votre arrivée à votre départ.",
      ],
      highlights: ["Interlocuteur dédié et disponible", "Service multilingue", "Réseau de partenaires sélectionnés", "Discrétion absolue"],
      services: [
        { icon: Plane, title: "Accueil & transferts", text: "Accueil à l'aéroport, chauffeurs privés et déplacements entre Douala, Yaoundé et les régions." },
        { icon: Hotel, title: "Hébergement", text: "Sélection et réservation d'hôtels et résidences de standing." },
        { icon: FileCheck, title: "Formalités & démarches", text: "Assistance administrative, prises de rendez-vous et suivi de dossiers." },
        { icon: PartyPopper, title: "Événements", text: "Séminaires, réceptions, congrès et événements familiaux." },
        { icon: Gem, title: "Lifestyle management", text: "Restaurants, loisirs, shopping, excursions et demandes particulières." },
        { icon: Home, title: "Projets immobiliers", text: "Recherche, suivi de biens et de chantiers pour la diaspora." },
      ],
      steps: [
        { title: "Votre demande", text: "Par téléphone, e-mail ou WhatsApp." },
        { title: "Proposition", text: "Une solution sur mesure sous 24h." },
        { title: "Organisation", text: "Nous gérons chaque détail." },
        { title: "Sérénité", text: "Vous profitez, nous restons joignables." },
      ],
      stats: [
        { value: 7, suffix: "j/7", label: "Disponibilité" },
        { value: 200, suffix: "+", label: "Séjours organisés" },
        { value: 3, suffix: "", label: "Langues parlées" },
        { value: 100, suffix: "%", label: "Confidentialité" },
      ],
      audience: ["Voyageurs d'affaires", "Diplomates", "Expatriés", "Diaspora camerounaise", "Touristes premium", "Conférenciers"],
      faq: [
        { q: "Combien de temps à l'avance dois-je réserver ?", a: "Idéalement quelques jours avant, mais nous traitons aussi les demandes urgentes." },
        { q: "Proposez-vous des abonnements ?", a: "Oui, des formules sur mesure existent pour les entreprises et les clients réguliers." },
        { q: "Dans quelles villes intervenez-vous ?", a: "Principalement à Douala et Yaoundé, et partout au Cameroun sur demande." },
      ],
    }} />
  ),
});
