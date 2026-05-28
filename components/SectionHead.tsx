import Reveal from "./Reveal";
import type { ReactNode } from "react";

type Props = {
  kicker: string;
  title: ReactNode;
  lead?: string;
  center?: boolean;
};

export default function SectionHead({ kicker, title, lead, center }: Props) {
  return (
    <Reveal
      className={`mb-14 max-w-[760px] ${center ? "mx-auto text-center" : ""}`}
    >
      <span className="mb-4 inline-block font-head text-[0.8rem] font-semibold uppercase tracking-[0.18em] text-orange">
        {kicker}
      </span>
      <h2 className="font-head text-[clamp(1.9rem,4.4vw,3.1rem)] font-bold leading-[1.08] tracking-[-0.02em]">
        {title}
      </h2>
      {lead && (
        <p className={`mt-4 text-[1.05rem] text-mut ${center ? "mx-auto" : ""} max-w-[56ch]`}>
          {lead}
        </p>
      )}
    </Reveal>
  );
}
