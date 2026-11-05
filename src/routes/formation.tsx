import { createFileRoute } from "@tanstack/react-router";
import { Crown, HeartHandshake, Timer, Lightbulb, GraduationCap, Sparkles } from "lucide-react";
import { ServicePage } from "@/components/service-page";
import img from "@/assets/formation.jpg";

export const Route = createFileRoute("/formation")({
  head: () => ({
    meta: [
      { title: "Formation professionnelle — ELITIS AYANG" },
      { name: "description", content: "Formations sur mesure en management, leadership, relation client et compétences professionnelles au Cameroun." },
      { property: "og:title", content: "Formation — ELITIS AYANG" },
      { property: "og:description", content: "Développez les compétences de vos équipes avec des programmes sur mesure." },
    ],
  }),
  component: () => (
    <ServicePage d={{
      eyebrow: "Pôle Formation",
      title: "Former aujourd'hui les talents de demain.",
      intro: "Des programmes en inter ou intra-entreprise, conçus selon vos objectifs et animés par des praticiens expérimentés.",
      image: img, imageAlt: "Séminaire de formation animé par ELITIS AYANG",
      aboutTitle: "Des formations utiles, concrètes et immédiatement applicables",
      about: [
        "La performance d'une organisation repose sur les compétences de ses femmes et de ses hommes. Nos formations allient apports théoriques, cas pratiques et mises en situation.",
        "Chaque programme est adapté au contexte de votre structure et à la réalité du terrain africain.",
      ],
      highlights: ["Formateurs praticiens et certifiés", "Pédagogie active et participative", "Attestation de formation remise", "En présentiel, en ligne ou en entreprise"],
      services: [
        { icon: Crown, title: "Management & leadership", text: "Piloter une équipe, déléguer, motiver, décider et gérer les conflits." },
        { icon: HeartHandshake, title: "Relation client & accueil", text: "Excellence de service, savoir-être et culture du service premium." },
        { icon: Timer, title: "Efficacité professionnelle", text: "Organisation, gestion du temps, prise de parole et communication." },
        { icon: Lightbulb, title: "Entrepreneuriat", text: "Construire, financer et piloter durablement son activité." },
        { icon: Sparkles, title: "Protocole & savoir-vivre", text: "Codes de l'entreprise, événements officiels et étiquette." },
        { icon: GraduationCap, title: "Parcours sur mesure", text: "Ingénierie pédagogique adaptée à vos enjeux spécifiques." },
      ],
      steps: [
        { title: "Analyse des besoins", text: "Identification des compétences à développer." },
        { title: "Conception", text: "Programme et supports personnalisés." },
        { title: "Animation", text: "Sessions interactives et ateliers pratiques." },
        { title: "Évaluation", text: "Mesure des acquis et plan de progrès." },
      ],
      stats: [
        { value: 500, suffix: "+", label: "Personnes formées" },
        { value: 30, suffix: "+", label: "Thématiques" },
        { value: 98, suffix: "%", label: "Taux de satisfaction" },
        { value: 3, suffix: "", label: "Formats : présentiel, en ligne, intra" },
      ],
      audience: ["Dirigeants", "Managers", "Équipes commerciales", "Personnel d'accueil", "Entrepreneurs", "Jeunes diplômés"],
      faq: [
        { q: "Proposez-vous des formations en entreprise ?", a: "Oui, nous intervenons directement dans vos locaux avec un programme adapté à vos équipes." },
        { q: "Quelle est la durée d'une formation ?", a: "De une demi-journée à plusieurs semaines selon le parcours choisi." },
        { q: "Délivrez-vous une attestation ?", a: "Une attestation de formation est remise à chaque participant." },
      ],
    }} />
  ),
});
