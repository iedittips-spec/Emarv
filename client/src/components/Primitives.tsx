import { ArrowRight, MessageCircle } from "lucide-react";
import { Link } from "wouter";
import { site } from "@/data/site";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";

export function PageShell({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return <div className={`min-h-screen ${dark ? "bg-[#20221f] text-[#f7f3eb]" : "bg-[#f7f3eb] text-[#20221f]"}`}><SiteHeader />{children}<SiteFooter /></div>;
}

export function Eyebrow({ children, inverse = false }: { children: React.ReactNode; inverse?: boolean }) {
  return <p className={`eyebrow ${inverse ? "text-[#efc0a9]" : "text-[#b86443]"}`}>{children}</p>;
}

export function SectionHeading({ eyebrow, title, body, inverse = false }: { eyebrow: string; title: string; body?: string; inverse?: boolean }) {
  return <div className="max-w-2xl"><Eyebrow inverse={inverse}>{eyebrow}</Eyebrow><h2 className={`mt-4 font-display text-4xl leading-[1.04] tracking-[-0.035em] sm:text-5xl ${inverse ? "text-[#f7f3eb]" : "text-[#20221f]"}`}>{title}</h2>{body && <p className={`mt-5 max-w-xl text-base leading-7 ${inverse ? "text-white/58" : "text-[#6f716b]"}`}>{body}</p>}</div>;
}

export function ArrowLink({ href, children, inverse = false }: { href: string; children: React.ReactNode; inverse?: boolean }) {
  return <Link href={href} className={`group inline-flex items-center gap-2 text-sm font-semibold transition ${inverse ? "text-[#efc0a9] hover:text-white" : "text-[#20221f] hover:text-[#b86443]"}`}>{children}<ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" /></Link>;
}

export function WhatsAppOrContact({ context }: { context?: string }) {
  const { whatsapp } = site.contact;
  const message = context ? `Hello Emarv Homes & Properties, I'm interested in ${context}. I would like to know more.` : "Hello Emarv Homes & Properties, I would like to know more.";
  if (whatsapp) return <a href={`https://wa.me/${whatsapp}?text=${encodeURIComponent(message)}`} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#5c846a] px-5 text-sm font-semibold text-[#41604d] transition hover:bg-[#e4eee6]"><MessageCircle size={17} /> WhatsApp Emarv</a>;
  return <Link href="/contact" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#c9c0b2] px-5 text-sm font-semibold text-[#20221f] transition hover:border-[#b86443] hover:text-[#b86443]"><MessageCircle size={17} /> Contact options</Link>;
}
