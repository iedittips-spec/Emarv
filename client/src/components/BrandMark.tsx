import { Link } from "wouter";

type BrandMarkProps = {
  inverse?: boolean;
};

export function BrandMark({ inverse = false }: BrandMarkProps) {
  return (
    <Link href="/" className="group inline-flex items-center gap-3" aria-label="Emarv Homes & Properties home">
      <span
        className={`grid size-10 place-items-center border text-[11px] font-semibold tracking-[0.24em] transition-transform duration-200 group-hover:-rotate-3 ${
          inverse ? "border-white/45 text-white" : "border-[#b86443] text-[#b86443]"
        }`}
      >
        E
      </span>
      <span className="flex flex-col leading-none">
        <span className={`font-display text-lg tracking-[0.2em] ${inverse ? "text-white" : "text-[#20221f]"}`}>EMARV</span>
        <span className={`mt-1 text-[9px] uppercase tracking-[0.2em] ${inverse ? "text-white/65" : "text-[#6f716b]"}`}>Homes & Properties</span>
      </span>
    </Link>
  );
}
