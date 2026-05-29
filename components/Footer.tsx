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

        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-line pt-6 text-[0.86rem] text-dim">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <p>© {year} PowerAgency. Tutti i diritti riservati.</p>
            <p className="hidden sm:block">· Costruito con sistemi che vendiamo.</p>
          </div>

          <a
            href="https://powersite.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="hover"
            aria-label="Powered by PowerLanding — apri il sito"
            className="group inline-flex items-center gap-2 rounded-full border border-line-strong bg-white/[0.02] px-4 py-2 font-head text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-amber transition-colors hover:border-amber/60 hover:bg-orange/[0.08]"
          >
            <svg
              viewBox="0 0 24 24"
              width="13"
              height="13"
              fill="none"
              aria-hidden
              className="transition-transform duration-300 group-hover:scale-110"
            >
              <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" fill="url(#plbolt)" />
              <defs>
                <linearGradient
                  id="plbolt"
                  x1="4"
                  y1="2"
                  x2="20"
                  y2="22"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#ffb347" />
                  <stop offset="1" stopColor="#ff2d2d" />
                </linearGradient>
              </defs>
            </svg>
            Powered by PowerLanding
          </a>
        </div>
      </div>
    </footer>
  );
}
