import { Search, SlidersHorizontal } from "lucide-react";
import { useMemo, useState } from "react";
import type { Property } from "@/data/properties";
import { PropertyCard } from "./PropertyCard";

export function PropertyFilter({ properties }: { properties: Property[] }) {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState("all");
  const filtered = useMemo(() => properties.filter((property) => {
    const matchesQuery = `${property.title} ${property.location} ${property.propertyType}`.toLowerCase().includes(query.toLowerCase());
    const matchesStatus = status === "all" || property.status === status;
    return matchesQuery && matchesStatus;
  }), [properties, query, status]);
  return <div>
    <div className="mb-8 grid gap-3 rounded-3xl border border-[#ddd4c7] bg-[#fbf8f2] p-3 sm:grid-cols-[1fr_190px] sm:p-4">
      <label className="flex min-h-12 items-center gap-3 rounded-2xl border border-[#e3dbd0] bg-[#f7f3eb] px-4 text-sm text-[#6f716b]"><Search size={17} className="shrink-0 text-[#b86443]" /><span className="sr-only">Search properties</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search by location or property type" className="w-full bg-transparent text-[#20221f] outline-none placeholder:text-[#96948c]" /></label>
      <label className="flex min-h-12 items-center gap-3 rounded-2xl border border-[#e3dbd0] bg-[#f7f3eb] px-4 text-sm text-[#6f716b]"><SlidersHorizontal size={17} className="shrink-0 text-[#b86443]" /><span className="sr-only">Filter by status</span><select value={status} onChange={(event) => setStatus(event.target.value)} className="w-full bg-transparent text-[#20221f] outline-none"><option value="all">All statuses</option><option value="Sample">Sample content</option><option value="Available">Available</option><option value="Reserved">Reserved</option><option value="Sold">Sold</option></select></label>
    </div>
    <p className="mb-5 text-sm text-[#6f716b]">Showing {filtered.length} {filtered.length === 1 ? "property record" : "property records"}</p>
    {filtered.length > 0 ? <div className="grid gap-6 lg:grid-cols-2">{filtered.map((property) => <PropertyCard key={property.id} property={property} />)}</div> : <div className="rounded-3xl border border-dashed border-[#c9c0b2] px-6 py-16 text-center"><p className="font-display text-2xl text-[#20221f]">No matching property records</p><p className="mt-3 text-sm text-[#6f716b]">Try a different search, or check back when verified inventory is added.</p></div>}
  </div>;
}
