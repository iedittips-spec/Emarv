import { ArrowDownRight, ArrowUpRight, Check, Compass, FileText, ShieldCheck } from "lucide-react";
import { Link } from "wouter";
import { properties } from "@/data/properties";
import { services } from "@/data/services";
import { site } from "@/data/site";
import { PropertyCard } from "@/components/PropertyCard";
import { ArrowLink, Eyebrow, PageShell, SectionHeading, WhatsAppOrContact } from "@/components/Primitives";

export default function Home() {
  return <PageShell>
    <main>
      <section className="relative isolate flex min-h-[720px] items-end overflow-hidden bg-[#20221f] text-white sm:min-h-[780px]">
        <img src={site.heroImage} alt="Palm-lined gated residential community at golden hour" className="absolute inset-0 -z-20 h-full w-full object-cover object-center" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(19,22,18,0.8)_0%,rgba(19,22,18,0.35)_52%,rgba(19,22,18,0.18)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-72 bg-gradient-to-t from-[#20221f]/85 to-transparent" />
        <div className="mx-auto w-full max-w-[1380px] px-4 pb-14 pt-40 sm:px-6 sm:pb-20 lg:px-10 lg:pb-24">
          <div className="max-w-3xl animate-rise">
            <p className="eyebrow text-[#efc0a9]">Emarv Homes & Properties</p>
            <h1 className="mt-5 max-w-3xl font-display text-[clamp(3.5rem,8vw,7.4rem)] leading-[0.88] tracking-[-0.06em] text-white">Find a place that feels like the right move.</h1>
            <p className="mt-7 max-w-xl text-base leading-7 text-white/75 sm:text-lg">A clearer, more considered place to explore homes and property opportunities — and take the next step with confidence.</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"><Link href="/properties" className="inline-flex min-h-13 items-center justify-center gap-2 rounded-full bg-[#c87958] px-6 text-sm font-semibold text-white shadow-lg shadow-black/15 transition hover:bg-[#da8b68] active:scale-[0.97]">Explore properties <ArrowUpRight size={17} /></Link><Link href="/contact" className="inline-flex min-h-13 items-center justify-center rounded-full border border-white/40 px-6 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10">Start an enquiry</Link></div>
          </div>
          <div className="mt-20 flex items-end justify-between gap-8 border-t border-white/20 pt-5 text-xs uppercase tracking-[0.15em] text-white/55"><span>Homes · Property · Possibility</span><span className="hidden items-center gap-2 sm:flex"><ArrowDownRight size={16} /> Scroll to explore</span></div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 sm:py-28 lg:px-10">
        <div className="mx-auto max-w-[1380px]">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
            <SectionHeading eyebrow="A better place to begin" title="Property decisions deserve a little more clarity." body="The first version of Emarv’s digital home is designed to make the important things easier to find: the property, the context, and the next conversation." />
            <div className="grid gap-8 sm:grid-cols-3 lg:pt-16">
              {[{ icon: Compass, title: "Start with what matters", body: "A calm, focused way to share what you are looking for." }, { icon: FileText, title: "See the details clearly", body: "Property information belongs in one considered place." }, { icon: ShieldCheck, title: "Move at your pace", body: "Useful next steps without pressure or unnecessary noise." }].map(({ icon: Icon, title, body }) => <div key={title} className="border-t border-[#cfc5b8] pt-5"><Icon size={21} strokeWidth={1.4} className="text-[#b86443]" /><h3 className="mt-6 font-display text-xl leading-tight">{title}</h3><p className="mt-3 text-sm leading-6 text-[#6f716b]">{body}</p></div>)}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#ebe3d6] px-4 py-20 sm:px-6 sm:py-28 lg:px-10">
        <div className="mx-auto max-w-[1380px]">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end"><SectionHeading eyebrow="The property edit" title="A considered shortlist, not a wall of listings." body="This space is ready for verified Emarv inventory. The sample record below shows the shape of a live property experience without presenting invented details as fact." /><ArrowLink href="/properties">View all property records</ArrowLink></div>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">{properties.slice(0, 1).map((property) => <PropertyCard key={property.id} property={property} />)}<div className="flex min-h-[340px] flex-col justify-between rounded-[2rem] border border-dashed border-[#b9aa99] p-7 sm:p-9"><div><p className="eyebrow text-[#b86443]">More to come</p><h3 className="mt-4 max-w-sm font-display text-3xl leading-tight tracking-[-0.03em]">Your verified property inventory belongs here.</h3></div><div className="flex items-end justify-between gap-4"><p className="max-w-xs text-sm leading-6 text-[#6f716b]">Add live listings, property images, locations, prices, and availability in <code className="text-xs">data/properties.ts</code>.</p><ArrowUpRight className="shrink-0 text-[#b86443]" /></div></div></div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 sm:py-28 lg:px-10">
        <div className="mx-auto grid max-w-[1380px] gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-24">
          <div className="relative overflow-hidden rounded-[2.2rem] bg-[#d9cbbd]"><img src={site.heroImage} alt="Residential property approach framed by tropical greenery" className="aspect-[0.92] w-full object-cover sm:aspect-[1.15] lg:aspect-[0.88]" /><div className="absolute bottom-5 left-5 rounded-2xl border border-white/35 bg-[#20221f]/75 px-4 py-3 text-xs text-white/80 backdrop-blur-sm">Homepage image · supplied project asset</div></div>
          <div><SectionHeading eyebrow="How this helps" title="A more human way to navigate the next move." body="From the first search to the first message, every part of this experience is designed to reduce friction and make a real conversation easier to start." /><div className="mt-9 space-y-5">{services.map((service, index) => <div key={service.id} className="flex gap-5 border-t border-[#d8cfc2] pt-5"><span className="font-display text-2xl text-[#b86443]">0{index + 1}</span><div><h3 className="font-display text-xl">{service.title}</h3><p className="mt-2 max-w-md text-sm leading-6 text-[#6f716b]">{service.description}</p></div></div>)}</div><div className="mt-9"><ArrowLink href="/services">Explore the approach</ArrowLink></div></div>
        </div>
      </section>

      <section className="bg-[#20221f] px-4 py-20 text-[#f7f3eb] sm:px-6 sm:py-28 lg:px-10">
        <div className="mx-auto grid max-w-[1380px] gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24"><SectionHeading inverse eyebrow="Trust, when it is ready" title="Real voices. Verified details. No inflated claims." body="Positive Google Reviews will be added here once approved source content is supplied. Until then, this section stays transparent rather than manufacturing proof." /><div className="rounded-[2rem] border border-white/15 p-7 sm:p-10"><div className="flex size-11 items-center justify-center rounded-full border border-[#efc0a9]/50 text-[#efc0a9]"><Check size={19} /></div><h3 className="mt-7 font-display text-3xl tracking-[-0.025em]">Reviews are coming from the source.</h3><p className="mt-4 max-w-lg text-sm leading-7 text-white/58">Once genuine positive Google Reviews are shared, they can be displayed here with the reviewer’s name and source attribution — close to the original wording.</p><Link href="/reviews" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#efc0a9] hover:text-white">See the reviews space <ArrowUpRight size={16} /></Link></div></div>
      </section>

      <section className="px-4 py-20 sm:px-6 sm:py-28 lg:px-10"><div className="mx-auto flex max-w-[1380px] flex-col items-start justify-between gap-8 rounded-[2.2rem] bg-[#d8a088] px-7 py-10 sm:px-12 sm:py-14 lg:flex-row lg:items-end"><div><Eyebrow>Ready when you are</Eyebrow><h2 className="mt-4 max-w-2xl font-display text-4xl leading-[0.98] tracking-[-0.04em] text-[#20221f] sm:text-6xl">Let’s make the next step feel simple.</h2></div><div className="flex flex-wrap gap-3"><Link href="/contact" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#20221f] px-5 text-sm font-semibold text-white transition hover:bg-[#41453d]">Contact Emarv <ArrowUpRight size={16} /></Link><WhatsAppOrContact /></div></div></section>
    </main>
  </PageShell>;
}
