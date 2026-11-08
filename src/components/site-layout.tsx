import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { Menu, X } from "lucide-react";
import { useState } from "react";
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
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    tree(
      <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-4 gap-y-3 px-4 py-3 sm:px-6">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="ELITIS AYANG" className="h-10 w-auto sm:h-12" />
          </Link>
          <div className="order-2 flex items-center gap-2 lg:order-3">
            <div role="group" className="flex items-center gap-1 text-xs font-semibold" aria-label={t("Choisir la langue")}>
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
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-sm text-primary transition-colors hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring lg:hidden"
              aria-label={menuOpen ? t("Fermer le menu") : t("Ouvrir le menu")}
              aria-controls="site-primary-nav"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
            </button>
          </div>
          <nav
            id="site-primary-nav"
            aria-label={t("Navigation principale")}
            className={`${menuOpen ? "flex" : "hidden"} order-3 w-full flex-col gap-1 border-t border-border pt-3 text-sm font-medium lg:order-2 lg:flex lg:w-auto lg:flex-row lg:items-center lg:gap-x-5 lg:border-0 lg:pt-0`}
          >
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                activeOptions={{ exact: true }}
                onClick={() => setMenuOpen(false)}
                className="rounded-sm px-3 py-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-primary lg:px-0 lg:py-1 lg:hover:bg-transparent"
                activeProps={{ className: "text-primary underline decoration-gold decoration-2 underline-offset-4" }}
              >
                {n.label}
              </Link>
            ))}
          </nav>
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
          <p className="break-all"><a href="mailto:contact@elitis-ayang.com">contact@elitis-ayang.com</a></p>
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
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold sm:tracking-[0.3em]">{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">{title}</h1>
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
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-4 py-12 sm:px-6 sm:py-14 md:flex-row md:items-center">
        <h2 className="text-3xl font-semibold text-accent-foreground sm:text-4xl">Parlons de votre projet.</h2>
        <Link to="/contact" className="rounded-sm bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-navy-deep">
          Prendre rendez-vous
        </Link>
      </div>
    </section>,
  );
}
