import { ArrowUpRight, MapPin } from "lucide-react";
import { Link } from "wouter";
import type { Property } from "@/data/properties";

export function PropertyCard({ property }: { property: Property }) {
  return (
    <article className="group overflow-hidden rounded-[2rem] border border-[#ddd4c7] bg-[#fbf8f2] shadow-[0_12px_36px_rgba(55,46,35,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(55,46,35,0.1)]">
      <div className="relative aspect-[1.18] overflow-hidden bg-[#e5ddd1]">
        <img src={property.images[0]} alt="Gated residential community entrance used as sample property imagery" className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
        <div className="absolute left-5 top-5 flex flex-wrap gap-2">
          <span className="rounded-full bg-[#f7f3eb]/90 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#20221f]">{property.status}</span>
          {property.isSample && <span className="rounded-full border border-white/35 bg-black/25 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-white">Demo content</span>}
        </div>
        <p className="absolute bottom-5 left-5 right-5 text-xs font-medium text-white/80">Image supplied by project brief · listing details to be verified</p>
      </div>
      <div className="p-6 sm:p-7">
        <div className="flex items-start justify-between gap-5">
          <div><p className="eyebrow text-[#b86443]">{property.propertyType}</p><h3 className="mt-3 font-display text-2xl leading-tight tracking-[-0.025em] text-[#20221f]">{property.title}</h3></div>
          <ArrowUpRight className="mt-1 shrink-0 text-[#b86443] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" size={20} />
        </div>
        <p className="mt-4 flex items-center gap-2 text-sm text-[#6f716b]"><MapPin size={15} className="text-[#b86443]" />{property.location}</p>
        <div className="mt-7 flex items-end justify-between gap-3 border-t border-[#e3dbd0] pt-5"><p className="text-sm font-semibold text-[#20221f]">{property.price}</p><Link href={`/properties/${property.slug}`} className="text-sm font-semibold text-[#b86443] hover:text-[#20221f]">View details</Link></div>
      </div>
    </article>
  );
}
