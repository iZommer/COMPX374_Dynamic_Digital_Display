import { Mail, MapPin, Phone } from "lucide-react";
import QRCode from "react-qr-code";
import { DisplayShell } from "@/components/DisplayShell";

const vcard = "BEGIN:VCARD\nVERSION:3.0\nFN:Nicholas Vanderschantz\nEMAIL:nicholas.vanderschantz@waikato.ac.nz\nTEL:078384000\nADR:;;G.2.15;University of Waikato;;;\nEND:VCARD";

export default function ContactPage() {
  return (
    <DisplayShell>
      <section className="mx-auto grid max-w-7xl gap-8 border border-[#d9e1e7] bg-white p-7 shadow-sm md:grid-cols-[minmax(0,3fr)_minmax(260px,2fr)] md:items-center sm:p-10"><div><h1 className="text-4xl font-bold sm:text-6xl">Nicholas Vanderschantz</h1><div className="mt-7 space-y-6 border-t border-[#d9e1e7] pt-7"><p className="flex items-center gap-5 text-2xl sm:text-3xl"><span className="grid size-16 shrink-0 place-items-center rounded-full bg-[#edf5f2]"><MapPin size={32} /></span><span><small className="block text-lg text-[#526a84]">Office</small>G.2.15</span></p><p className="flex items-center gap-5 text-xl sm:text-2xl"><span className="grid size-16 shrink-0 place-items-center rounded-full bg-[#edf5f2]"><Mail size={32} /></span><span className="min-w-0 break-all"><small className="block text-lg text-[#526a84]">Email</small>nicholas.vanderschantz@waikato.ac.nz</span></p><p className="flex items-center gap-5 text-2xl"><span className="grid size-16 shrink-0 place-items-center rounded-full bg-[#edf5f2]"><Phone size={32} /></span><span><small className="block text-lg text-[#526a84]">Phone</small>07 838 4000</span></p></div></div><div className="bg-[#edf8f4] p-6 text-center"><div className="mx-auto w-fit bg-white p-4"><QRCode value={vcard} size={230} fgColor="#08243f" /></div><p className="mt-4 text-2xl font-semibold text-[#35566f]">Scan to save contact</p></div></section>
    </DisplayShell>
  );
}
