export default function Logo({ size = 22 }: { size?: number }) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <span className="grid h-[34px] w-[34px] place-items-center rounded-[10px] border border-line-strong bg-orange/10">
        <svg viewBox="0 0 24 24" width={size} height={size} fill="none" aria-hidden>
          <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" fill="url(#boltGrad)" />
          <defs>
            <linearGradient
              id="boltGrad"
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
      </span>
      <span className="font-head text-[1.18rem] font-bold tracking-tight">
        Power<span className="font-medium text-mut">Agency</span>
      </span>
    </span>
  );
}
