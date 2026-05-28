import { CONTACT } from "@/lib/content";
import Logo from "./Logo";

const PRODUCT_LINKS = [
  "Il pacchetto",
  "Le carrozzerie",
  "Enterprise",
  "PowerLeads",
  "PowerReel",
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-bg-soft px-6 pb-8 pt-16">
      <div className="mx-auto max-w-[1180px]">
        <div className="grid grid-cols-1 gap-10 pb-12 md:grid-cols-[2fr_1fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-[34ch] text-[0.92rem] leading-relaxed text-dim">
              Sistemi AI per chi vuole risultati reali.
              <br />
              Italia · Operatività remota.
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-head text-[0.82rem] font-semibold uppercase tracking-[0.14em] text-dim">
              Prodotti
            </h4>
            {PRODUCT_LINKS.map((p) => (
              <a
                key={p}
                href="#prodotti"
                className="block py-1.5 text-[0.95rem] text-mut transition-colors hover:text-orange"
              >
                {p}
              </a>
            ))}
          </div>

          <div>
            <h4 className="mb-4 font-head text-[0.82rem] font-semibold uppercase tracking-[0.14em] text-dim">
              Contatti
            </h4>
            <a
              href={`mailto:${CONTACT.email}`}
              className="block py-1.5 text-[0.95rem] text-mut transition-colors hover:text-orange"
            >
              {CONTACT.email}
            </a>
            <a
              href={CONTACT.instagram}
              target="_blank"
              rel="noopener"
              className="block py-1.5 text-[0.95rem] text-mut transition-colors hover:text-orange"
            >
              Instagram {CONTACT.instagramHandle}
            </a>
          </div>

          <div>
            <h4 className="mb-4 font-head text-[0.82rem] font-semibold uppercase tracking-[0.14em] text-dim">
              Legale
            </h4>
            {["Privacy policy", "Cookie policy", "Termini di servizio"].map((l) => (
              <a
                key={l}
                href="#"
                className="block py-1.5 text-[0.95rem] text-mut transition-colors hover:text-orange"
              >
                {l}
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-line pt-6 text-[0.86rem] text-dim">
          <p>© {year} PowerAgency. Tutti i diritti riservati.</p>
          <p>Costruito con sistemi che vendiamo.</p>
        </div>
      </div>
    </footer>
  );
}
