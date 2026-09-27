import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import { navItems } from "@/data/site";
import { BrandMark } from "./BrandMark";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="absolute inset-x-0 top-0 z-40 px-4 pt-4 sm:px-6 lg:px-10">
      <div className="mx-auto flex max-w-[1380px] items-center justify-between rounded-full border border-white/20 bg-[#151715]/75 px-4 py-3 text-white shadow-2xl shadow-black/10 backdrop-blur-md sm:px-6">
        <BrandMark inverse />
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`relative py-2 text-[11px] font-medium uppercase tracking-[0.15em] transition-colors hover:text-[#efc0a9] ${location === item.href ? "text-[#efc0a9]" : "text-white/75"}`}
            >
              {item.label}
              {location === item.href && <span className="absolute inset-x-0 -bottom-0.5 mx-auto h-px bg-[#efc0a9]" />}
            </Link>
          ))}
        </nav>
        <Link href="/contact" className="hidden rounded-full bg-[#c87958] px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-[#da8b68] active:scale-[0.97] lg:inline-flex">
          Start an enquiry
        </Link>
        <button
          type="button"
          className="grid size-11 place-items-center rounded-full border border-white/20 text-white transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#efc0a9] lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? "Close navigation" : "Open navigation"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={19} strokeWidth={1.7} /> : <Menu size={19} strokeWidth={1.7} />}
        </button>
      </div>
      {open && (
        <div id="mobile-navigation" className="mx-0 mt-2 rounded-3xl border border-[#d9d1c4] bg-[#f7f3eb] p-3 text-[#20221f] shadow-2xl lg:hidden">
          <nav aria-label="Mobile navigation" className="flex flex-col">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="rounded-2xl px-4 py-3.5 text-sm font-medium transition hover:bg-[#ebe3d6]">
                {item.label}
              </Link>
            ))}
            <Link href="/contact" className="mt-2 rounded-2xl bg-[#20221f] px-4 py-3.5 text-center text-sm font-semibold text-white">
              Start an enquiry
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
