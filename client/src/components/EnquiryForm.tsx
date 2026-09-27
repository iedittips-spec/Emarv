import { Check, ChevronDown, Send } from "lucide-react";
import { FormEvent, useState } from "react";

export function EnquiryForm({ propertyName }: { propertyName?: string }) {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({ name: "", email: "", enquiryType: propertyName ? "Property enquiry" : "General enquiry", message: propertyName ? `I would like to know more about ${propertyName}.` : "" });
  const update = (key: keyof typeof form, value: string) => setForm((current) => ({ ...current, [key]: value }));
  const submit = (event: FormEvent) => {
    event.preventDefault();
    if (!form.name.trim() || !form.email.includes("@") || !form.message.trim()) { setError("Please add your name, a valid email address, and a short message."); return; }
    setError(""); setSubmitted(true);
  };
  if (submitted) return <div className="rounded-[2rem] border border-[#c8dccd] bg-[#edf5ef] p-7 sm:p-9"><div className="grid size-12 place-items-center rounded-full bg-[#5c846a] text-white"><Check size={22} /></div><h3 className="mt-6 font-display text-3xl tracking-[-0.025em] text-[#20221f]">Your enquiry is ready.</h3><p className="mt-3 max-w-md text-sm leading-7 text-[#5e6f63]">This front-end form is validated locally. A live email, CRM, or WhatsApp destination still needs to be connected before enquiries can be received by Emarv.</p><button type="button" onClick={() => setSubmitted(false)} className="mt-6 text-sm font-semibold text-[#41604d] underline underline-offset-4">Send another enquiry</button></div>;
  return <form onSubmit={submit} className="space-y-5" noValidate>
    {error && <p role="alert" className="rounded-2xl border border-[#e4b9ae] bg-[#fff1ed] px-4 py-3 text-sm text-[#9c4f3b]">{error}</p>}
    <div className="grid gap-5 sm:grid-cols-2"><label className="space-y-2 text-sm font-medium text-[#20221f]">Name <input required value={form.name} onChange={(event) => update("name", event.target.value)} className="form-input" autoComplete="name" /></label><label className="space-y-2 text-sm font-medium text-[#20221f]">Email <input required type="email" value={form.email} onChange={(event) => update("email", event.target.value)} className="form-input" autoComplete="email" /></label></div>
    <label className="space-y-2 text-sm font-medium text-[#20221f]">Enquiry type <span className="relative block"><select value={form.enquiryType} onChange={(event) => update("enquiryType", event.target.value)} className="form-input appearance-none pr-10"><option>General enquiry</option><option>Property enquiry</option><option>Viewing request</option><option>Partnership enquiry</option></select><ChevronDown size={17} className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#b86443]" /></span></label>
    <label className="space-y-2 text-sm font-medium text-[#20221f]">Message <textarea required value={form.message} onChange={(event) => update("message", event.target.value)} rows={6} className="form-input resize-y" placeholder="Tell us what you are looking for..." /></label>
    <button type="submit" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#20221f] px-6 text-sm font-semibold text-white transition hover:bg-[#b86443] active:scale-[0.97]"><Send size={16} /> Prepare enquiry</button>
    <p className="text-xs leading-5 text-[#85847c]">No message is sent yet. Connect a receiving service in the project configuration to make this form live.</p>
  </form>;
}
