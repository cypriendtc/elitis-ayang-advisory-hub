import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import logo from "@/assets/logo.png";
import { useLanguage } from "@/lib/language";
import { CONTACTS } from "@/lib/site-contacts";

const nav = [
  { to: "/", label: "Accueil" },
  { to: "/conseil", label: "Conseil" },
  { to: "/formation", label: "Formation" },
  { to: "/conciergerie", label: "Conciergerie" },
  { to: "/partenaires", label: "Partenaires" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const { language, setLanguage, t, tree } = useLanguage();

  return (
    tree(
      <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-3">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="ELITIS AYANG" className="h-12 w-auto" />
          </Link>
          <div className="flex flex-wrap items-center justify-end gap-x-5 gap-y-2">
            <nav aria-label={t("Navigation principale")} className="flex flex-wrap gap-x-5 gap-y-1 text-sm font-medium">
              {nav.map((n) => (
                <Link key={n.to} to={n.to} activeOptions={{ exact: true }}
                  className="text-muted-foreground transition-colors hover:text-primary"
                  activeProps={{ className: "text-primary underline decoration-gold decoration-2 underline-offset-8" }}>
                  {n.label}
                </Link>
              ))}
            </nav>
            <div className="flex items-center gap-1 text-xs font-semibold" aria-label={t("Choisir la langue")}>
              {(["fr", "en"] as const).map((code) => (
                <button
                  key={code}
                  type="button"
                  lang={code}
                  aria-pressed={language === code}
                  onClick={() => setLanguage(code)}
                  className={`rounded-sm px-2 py-1 transition-colors ${language === code ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-primary"}`}
                >
                  {code.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
        </div>
      </header>,
    )
  );
}

export function SiteFooter() {
  const { tree } = useLanguage();

  return tree(
    <footer className="bg-navy-deep text-primary-foreground">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-12 md:grid-cols-3">
        <div>
          <p className="font-display text-2xl">ELITIS <span className="text-gradient-gold">AYANG</span></p>
          <p className="mt-2 text-sm opacity-70">Conseil · Formation · Conciergerie · Services</p>
          <a className="mt-3 inline-block text-sm underline underline-offset-4" href={CONTACTS.facebook} target="_blank" rel="noopener noreferrer">Facebook</a>
        </div>
        <div className="space-y-1 text-sm opacity-80">
          <p>Douala — Yaoundé, Cameroun</p>
          <p><a href="mailto:contact@elitis-ayang.com">contact@elitis-ayang.com</a></p>
          <p><a href={`tel:${CONTACTS.phone}`}>{CONTACTS.phone}</a></p>
          <p><a href={`https://wa.me/${CONTACTS.whatsapp.replace("+", "")}`}>WhatsApp : {CONTACTS.whatsapp}</a></p>
        </div>
        <p className="text-sm opacity-60 md:text-right">© {new Date().getFullYear()} ELITIS AYANG. Tous droits réservés.</p>
      </div>
    </footer>,
  );
}

export function PageHero({ eyebrow, title, children }: { eyebrow: string; title: string; children?: ReactNode }) {
  const { tree } = useLanguage();
  return tree(
    <section className="bg-navy-deep text-primary-foreground">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl text-5xl font-semibold leading-tight md:text-6xl">{title}</h1>
        {children && <p className="mt-6 max-w-2xl text-lg opacity-80">{children}</p>}
      </div>
    </section>,
  );
}

export function ServiceGrid({ items }: { items: { title: string; text: string }[] }) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="grid gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
        {items.map((it, i) => (
          <div key={it.title} className="bg-card p-8">
            <span className="font-display text-3xl text-gold">0{i + 1}</span>
            <h3 className="mt-3 text-2xl font-semibold">{it.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{it.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function CtaBand() {
  const { tree } = useLanguage();
  return tree(
    <section className="bg-gradient-gold">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 py-14 md:flex-row md:items-center">
        <h2 className="text-4xl font-semibold text-accent-foreground">Parlons de votre projet.</h2>
        <Link to="/contact" className="rounded-sm bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-navy-deep">
          Prendre rendez-vous
        </Link>
      </div>
    </section>,
  );
}
