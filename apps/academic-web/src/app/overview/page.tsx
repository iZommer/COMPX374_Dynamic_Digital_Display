import Link from "next/link";
import { CalendarDays, CheckCircle2, Clock3, Mail, MapPin, MonitorCheck } from "lucide-react";
import { AcademicShell } from "@/components/AcademicShell";

const week = [
  ["Mon", "21 Oct", "Available", "Teaching", "Available"],
  ["Tue", "22 Oct", "Available", "In a meeting", "Research"],
  ["Wed", "23 Oct", "Teaching", "Available", "Available"],
  ["Thu", "24 Oct", "In a meeting", "Available", "Available"],
  ["Fri", "25 Oct", "Available", "Teaching", "In a meeting"],
];

export default function OverviewPage() {
  return (
    <AcademicShell title="Good morning, Nic" description="Manage your availability and let others know when you are free.">
      <div className="grid gap-5 xl:grid-cols-[minmax(0,2fr)_minmax(280px,1fr)]">
        <section className="border border-[#d9e1e7] bg-white p-6 shadow-sm">
          <div className="flex flex-wrap items-start justify-between gap-4"><div><h2 className="text-2xl font-bold">Current availability</h2><p className="mt-1 text-[#526a84]">This is currently shown outside your office.</p></div><Link href="/availability" className="border border-[#087a54] px-4 py-2 font-semibold text-[#087a54] hover:bg-[#eaf7f1]">Edit status</Link></div>
          <div className="mt-6 flex items-center gap-4 border-l-4 border-[#1f9d61] bg-[#eaf7f1] p-5"><CheckCircle2 className="text-[#087a54]" size={42} /><div><p className="text-2xl font-bold text-[#076443]">Available</p><p className="text-[#35566f]">Drop in during office hours</p></div></div>
          <div className="mt-5 grid gap-3 sm:grid-cols-2"><div className="flex items-center gap-3 border border-[#d9e1e7] p-4"><Clock3 className="text-[#d77a1f]" /><div><p className="text-sm text-[#526a84]">Next</p><p className="font-semibold">Teaching at 1:00 pm</p></div></div><div className="flex items-center gap-3 border border-[#d9e1e7] p-4"><MonitorCheck className="text-[#087a54]" /><div><p className="text-sm text-[#526a84]">Office display</p><p className="font-semibold">Online, updated just now</p></div></div></div>
        </section>
        <aside className="border border-[#d9e1e7] bg-white p-6 shadow-sm"><h2 className="text-2xl font-bold">Outside your office</h2><p className="mt-1 text-[#526a84]">Visitor-facing details</p><div className="mt-6 border-t border-[#d9e1e7] pt-5"><p className="text-xl font-bold">Nicholas Vanderschantz</p><p className="mt-4 flex items-center gap-3 text-[#35566f]"><MapPin size={19} /> Office G.2.15</p><p className="mt-3 flex items-center gap-3 break-all text-[#35566f]"><Mail size={19} /> nicholas.vanderschantz@waikato.ac.nz</p></div></aside>
      </div>
      <section className="mt-5 border border-[#d9e1e7] bg-white p-6 shadow-sm"><div className="flex flex-wrap items-center justify-between gap-3"><div><h2 className="text-2xl font-bold">This week</h2><p className="text-[#526a84]">A quick view of planned activities.</p></div><Link href="/calendar" className="flex items-center gap-2 font-semibold text-[#087a54]"><CalendarDays size={19} /> Open calendar</Link></div><div className="mt-5 grid gap-3 md:grid-cols-5">{week.map(([day, date, ...items]) => <div key={day} className="border border-[#d9e1e7] p-3"><p className="font-bold">{day} <span className="font-normal text-[#526a84]">{date}</span></p><div className="mt-3 space-y-2">{items.map((item, index) => <p key={`${item}-${index}`} className={`border-l-4 px-2 py-2 text-sm font-medium ${item === "Available" ? "border-[#1f9d61] bg-[#eaf7f1] text-[#076443]" : item === "In a meeting" ? "border-[#e35c5c] bg-[#fff0f0] text-[#9d2525]" : "border-[#ef8a2f] bg-[#fff3e8] text-[#7b4314]"}`}>{item}</p>)}</div></div>)}</div></section>
    </AcademicShell>
  );
}
