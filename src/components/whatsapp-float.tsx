import { useEffect, useState } from "react";
import { X } from "lucide-react";

import { useLanguage } from "@/lib/language";
import { whatsappLink } from "@/lib/site-contacts";
import { Button } from "@/components/ui/button";

function WhatsAppIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}

export function WhatsAppFloat() {
  const { language, tree } = useLanguage();
  const [showBubble, setShowBubble] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShowBubble(true), 2500);
    return () => clearTimeout(t);
  }, []);

  const href = whatsappLink(language);

  return tree(
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
      {showBubble && !dismissed && (
        <div className="animate-whatsapp-pop relative max-w-[240px] rounded-lg border border-border bg-card p-4 shadow-xl">
          <Button variant="ghost" size="icon"
            onClick={() => setDismissed(true)}
            aria-label="Fermer le message"
            className="absolute right-2 top-2 text-muted-foreground transition-colors hover:text-foreground"
          >
            <X className="h-3.5 w-3.5" />
          </Button>
          <p className="text-sm font-semibold">Une question ?</p>
          <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
            Écrivez-nous directement sur WhatsApp, nous répondons rapidement.
          </p>
          <span className="absolute -bottom-1.5 right-8 h-3 w-3 rotate-45 border-b border-r border-border bg-card" />
        </div>
      )}

      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Discuter avec ELITIS AYANG sur WhatsApp"
        className="group relative flex h-12 w-12 items-center justify-center rounded-full bg-whatsapp text-primary-foreground shadow-lg transition-transform duration-300 hover:scale-110 sm:h-14 sm:w-14"
      >
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-whatsapp opacity-30" />
        <WhatsAppIcon className="relative h-7 w-7" />
        {!dismissed && (
          <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-destructive text-[10px] font-bold text-destructive-foreground">
            1
          </span>
        )}
      </a>
    </div>
  );
}
