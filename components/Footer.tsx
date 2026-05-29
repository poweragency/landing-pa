import Link from "next/link";
import { CONTACT } from "@/lib/content";
import Logo from "./Logo";

const LEGAL = [
  { label: "Privacy policy", href: "/privacy" },
  { label: "Cookie policy", href: "/cookie" },
  { label: "Termini di servizio", href: "/termini" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-bg-soft px-6 pb-8 pt-12">
      <div className="mx-auto max-w-[1180px]">
        <div className="grid grid-cols-1 gap-8 pb-8 md:grid-cols-[2fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-3 max-w-[34ch] text-[0.9rem] leading-relaxed text-dim">
              Sistemi AI per chi vuole risultati reali. Italia · Operatività remota.
            </p>
          </div>

          <div>
            <h4 className="mb-3 font-head text-[0.82rem] font-semibold uppercase tracking-[0.14em] text-dim">
              Contatti
            </h4>
            <a
              href={`mailto:${CONTACT.email}`}
              className="block py-1.5 text-[0.95rem] text-mut transition-colors hover:text-orange"
            >
              {CONTACT.email}
            </a>
          </div>

          <div>
            <h4 className="mb-3 font-head text-[0.82rem] font-semibold uppercase tracking-[0.14em] text-dim">
              Legale
            </h4>
            {LEGAL.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="block py-1.5 text-[0.95rem] text-mut transition-colors hover:text-orange"
              >
                {l.label}
              </Link>
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
