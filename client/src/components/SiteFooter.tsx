import { ArrowUpRight, Instagram, Mail, MessageCircle, Phone } from "lucide-react";
import { Link } from "wouter";
import { navItems, site } from "@/data/site";
import { BrandMark } from "./BrandMark";

export function SiteFooter() {
  const { contact } = site;
  return (
    <footer className="bg-[#20221f] px-4 pb-8 pt-16 text-[#f7f3eb] sm:px-6 lg:px-10">
      <div className="mx-auto max-w-[1380px]">
        <div className="grid gap-12 border-b border-white/12 pb-14 lg:grid-cols-[1.4fr_0.7fr_0.9fr]">
          <div>
            <BrandMark inverse />
            <p className="mt-7 max-w-sm text-sm leading-7 text-white/58">A clear, considered place to begin exploring homes and property opportunities with Emarv.</p>
            <Link href="/contact" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#efc0a9] transition hover:text-white">
              Start a conversation <ArrowUpRight size={15} />
            </Link>
          </div>
          <div>
            <p className="eyebrow text-[#efc0a9]">Explore</p>
            <nav className="mt-5 flex flex-col items-start gap-3" aria-label="Footer navigation">
              {navItems.slice(0, 5).map((item) => <Link key={item.href} href={item.href} className="text-sm text-white/58 transition hover:text-white">{item.label}</Link>)}
            </nav>
          </div>
          <div>
            <p className="eyebrow text-[#efc0a9]">Contact</p>
            <div className="mt-5 space-y-3 text-sm text-white/58">
              {contact.phone ? <a className="flex items-center gap-2 hover:text-white" href={`tel:${contact.phone}`}><Phone size={14} />{contact.phone}</a> : <p className="flex items-center gap-2"><Phone size={14} />Phone to be added</p>}
              {contact.email ? <a className="flex items-center gap-2 break-all hover:text-white" href={`mailto:${contact.email}`}><Mail size={14} />{contact.email}</a> : <p className="flex items-center gap-2"><Mail size={14} />Email to be added</p>}
              {contact.whatsapp ? <a className="flex items-center gap-2 hover:text-white" href={`https://wa.me/${contact.whatsapp}`}><MessageCircle size={14} />WhatsApp Emarv</a> : <Link className="flex items-center gap-2 hover:text-white" href="/contact"><MessageCircle size={14} />WhatsApp link to be added</Link>}
              {site.socials.length > 0 ? site.socials.map((social) => <a className="flex items-center gap-2 hover:text-white" key={social.href} href={social.href} target="_blank" rel="noreferrer"><Instagram size={14} />{social.label}</a>) : <p className="flex items-center gap-2"><Instagram size={14} />Social links to be added</p>}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 pt-7 text-[11px] uppercase tracking-[0.13em] text-white/38 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Emarv Homes & Properties</p>
          <p>Content placeholders are clearly marked for client review.</p>
        </div>
      </div>
    </footer>
  );
}
