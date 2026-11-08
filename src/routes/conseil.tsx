import { createFileRoute } from "@tanstack/react-router";
import { Compass, Network, Rocket, Users, Briefcase, Globe2 } from "lucide-react";
import { ServicePage } from "@/components/service-page";
import img from "@/assets/conseil.jpg";

export const Route = createFileRoute("/conseil")({
  head: () => ({
    meta: [
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { title: "Conseil aux entreprises — ELITIS AYANG" },
      { name: "description", content: "Stratégie, organisation, création d'entreprise et accompagnement des dirigeants au Cameroun." },
      { property: "og:title", content: "Conseil — ELITIS AYANG" },
      { property: "og:description", content: "Un regard expert pour structurer et faire grandir vos projets." },
    ],
  }),
  component: () => (
    <ServicePage d={{
      eyebrow: "Pôle Conseil",
      title: "Des décisions éclairées, des projets qui avancent.",
      intro: "Nous accompagnons entreprises, institutions et porteurs de projets, de la réflexion stratégique jusqu'à la mise en œuvre concrète.",
      image: img, imageAlt: "Consultants ELITIS AYANG en séance de travail stratégique",
      aboutTitle: "Un partenaire stratégique ancré au Cameroun",
      about: [
        "Le marché camerounais et d'Afrique centrale offre des opportunités considérables, mais exige une lecture fine de l'environnement économique, réglementaire et culturel.",
        "ELITIS AYANG met à votre disposition une expertise terrain et une méthodologie rigoureuse pour transformer vos ambitions en résultats mesurables.",
      ],
      highlights: ["Diagnostic objectif et recommandations actionnables", "Accompagnement jusqu'à la mise en œuvre", "Connaissance approfondie de l'écosystème local", "Confidentialité garantie"],
      services: [
        { icon: Compass, title: "Stratégie & développement", text: "Diagnostic, positionnement, plan de croissance, études de marché et de faisabilité." },
        { icon: Network, title: "Organisation & management", text: "Optimisation des processus, structuration des équipes et conduite du changement." },
        { icon: Rocket, title: "Création d'entreprise", text: "Business plan, choix juridiques, formalités administratives et lancement." },
        { icon: Users, title: "Ressources humaines", text: "Recrutement, fiches de poste, gestion des talents et politique RH." },
        { icon: Briefcase, title: "Accompagnement des dirigeants", text: "Coaching et conseil personnalisé pour vos décisions clés." },
        { icon: Globe2, title: "Diaspora & investissement", text: "Sécurisation des projets d'investissement de la diaspora au Cameroun." },
      ],
      steps: [
        { title: "Écoute", text: "Compréhension de vos enjeux, contraintes et objectifs." },
        { title: "Diagnostic", text: "Analyse approfondie de votre situation et de votre marché." },
        { title: "Recommandations", text: "Feuille de route claire et priorisée." },
        { title: "Mise en œuvre", text: "Accompagnement opérationnel et suivi des résultats." },
      ],
      stats: [
        { value: 50, suffix: "+", label: "Projets accompagnés" },
        { value: 95, suffix: "%", label: "Clients satisfaits" },
        { value: 10, suffix: "+", label: "Secteurs d'activité" },
        { value: 24, suffix: "h", label: "Délai de réponse" },
      ],
      audience: ["PME & TPE", "Grandes entreprises", "Start-up", "Institutions", "ONG", "Porteurs de projets", "Diaspora"],
      faq: [
        { q: "Intervenez-vous hors de Douala et Yaoundé ?", a: "Oui, nous intervenons sur l'ensemble du territoire camerounais et en Afrique centrale." },
        { q: "Comment se déroule le premier rendez-vous ?", a: "Un premier échange sans engagement permet de cerner vos besoins et de vous proposer une offre adaptée." },
        { q: "Vos missions sont-elles confidentielles ?", a: "Absolument. Toutes nos missions sont couvertes par un engagement de confidentialité." },
      ],
    }} />
  ),
});
