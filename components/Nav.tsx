"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { NAV_LINKS } from "@/lib/content";
import { EASE } from "@/lib/motion";
import MagneticButton from "./MagneticButton";
import Logo from "./Logo";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: EASE }}
      className={`fixed inset-x-0 top-0 z-[120] transition-colors duration-300 ${
        scrolled
          ? "border-b border-line bg-bg/70 backdrop-blur-xl backdrop-saturate-150"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-[72px] max-w-[1180px] items-center justify-between gap-6 px-6">
        <a href="#top" aria-label="PowerAgency home" data-cursor="hover">
          <Logo />
        </a>

        <nav className="hidden items-center gap-9 md:flex" aria-label="Navigazione principale">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              data-cursor="hover"
              className="group relative text-[0.95rem] font-medium text-mut transition-colors hover:text-ink"
            >
              {l.label}
              <span className="absolute -bottom-1.5 left-0 h-0.5 w-0 rounded bg-gradient-to-r from-amber to-red transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <MagneticButton
            href="#contatti"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber via-orange to-red px-5 py-2.5 font-head text-[0.9rem] font-semibold text-[#1a0a03] shadow-[0_8px_30px_-8px_rgba(255,45,45,0.5)]"
          >
            Prenota una call <span aria-hidden>→</span>
          </MagneticButton>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Chiudi menu" : "Apri menu"}
          aria-expanded={open}
          className="flex flex-col gap-[5px] p-2 md:hidden"
        >
          <span
            className={`h-0.5 w-6 rounded bg-ink transition-transform duration-300 ${
              open ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 rounded bg-ink transition-opacity duration-300 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 rounded bg-ink transition-transform duration-300 ${
              open ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: EASE }}
            className="overflow-hidden border-b border-line bg-bg/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-1 px-6 pb-6 pt-2">
              {NAV_LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-line py-3 font-medium text-mut"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#contatti"
                onClick={() => setOpen(false)}
                className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-amber via-orange to-red px-5 py-3 font-head font-semibold text-[#1a0a03]"
              >
                Prenota una call →
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
