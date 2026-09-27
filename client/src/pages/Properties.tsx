import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Link } from "wouter";
import { properties } from "@/data/properties";
import { PageShell, SectionHeading } from "@/components/Primitives";
import { PropertyFilter } from "@/components/PropertyFilter";

export default function Properties() {
  return <PageShell><main><section className="bg-[#20221f] px-4 pb-16 pt-36 text-[#f7f3eb] sm:px-6 sm:pb-20 lg:px-10"><div className="mx-auto max-w-[1380px]"><Link href="/" className="mb-14 inline-flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-white/55 hover:text-white"><ArrowLeft size={14} /> Home</Link><div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end"><div><p className="eyebrow text-[#efc0a9]">Property records</p><h1 className="mt-5 max-w-3xl font-display text-5xl leading-[0.95] tracking-[-0.05em] sm:text-7xl">Find the right starting point.</h1></div><p className="max-w-md text-base leading-7 text-white/58">A structured property space ready for verified Emarv inventory. Search and filters are live against the current data layer.</p></div></div></section><section className="px-4 py-16 sm:px-6 sm:py-24 lg:px-10"><div className="mx-auto max-w-[1380px]"><div className="mb-10 flex items-end justify-between gap-6"><SectionHeading eyebrow="Browse the collection" title="Property, with room to breathe." /><p className="hidden items-center gap-2 text-sm text-[#6f716b] sm:flex"><ArrowUpRight size={16} className="text-[#b86443]" /> {properties.length} record currently structured</p></div><PropertyFilter properties={properties} /></div></section></main></PageShell>;
}
