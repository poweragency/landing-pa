"use client";

import { motion } from "framer-motion";
import { TEAM, SQUAD, type Person } from "@/lib/content";
import { EASE } from "@/lib/motion";
import SectionHead from "./SectionHead";

const PEOPLE: Person[] = [...TEAM, ...SQUAD];

function PersonCard({ person, delay }: { person: Person; delay: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.7, delay, ease: EASE }}
      whileHover={{ y: -6 }}
      className="ring-grad rounded-[18px] border border-line bg-surface p-10 text-center transition-shadow duration-300 hover:shadow-[0_24px_50px_-28px_rgba(255,122,24,0.5)]"
    >
      <div className="relative mx-auto mb-5 grid h-[86px] w-[86px] place-items-center rounded-full">
        <span className="absolute inset-0 animate-[spin_8s_linear_infinite] rounded-full [background:conic-gradient(from_140deg,#ffb347,#ff2d2d,#c4161c,#ffb347)]" />
        <span className="absolute inset-[3px] grid place-items-center rounded-full bg-surface-2 font-head text-[1.5rem] font-bold">
          {person.initials}
        </span>
      </div>
      <h3 className="font-head text-[1.25rem] font-semibold">{person.name}</h3>
      <p className="mt-1.5 text-[0.92rem] font-medium text-orange">{person.role}</p>
    </motion.article>
  );
}

export default function Team() {
  return (
    <section id="team" className="scroll-mt-24 px-6 pb-28">
      <div className="mx-auto max-w-[1180px]">
        <SectionHead
          kicker="Chi siamo"
          title="Il team"
          lead="Niente reparti infiniti. Le persone che costruiscono il tuo sistema sono le stesse che lo usano ogni giorno."
        />

        <div className="mx-auto grid max-w-[420px] grid-cols-1 gap-5 md:max-w-none md:grid-cols-3">
          {PEOPLE.map((m, i) => (
            <PersonCard key={m.name} person={m} delay={(i % 3) * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}
