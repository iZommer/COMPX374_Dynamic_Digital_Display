import { Check, Clock3, Minus, UsersRound } from "lucide-react";
import { AcademicShell } from "@/components/AcademicShell";

const statuses = [
  { name: "Available", note: "Happy to be interrupted", color: "border-[#1f9d61] bg-[#eaf7f1]", icon: Check },
  { name: "In a meeting", note: "Please come back later", color: "border-[#e35c5c] bg-[#fff0f0]", icon: Minus },
  { name: "Teaching", note: "In class or facilitating", color: "border-[#ef8a2f] bg-[#fff3e8]", icon: UsersRound },
  { name: "Out of office", note: "Away from my desk", color: "border-[#94a3b0] bg-[#f2f5f7]", icon: Clock3 },
];

export default function AvailabilityPage() {
  return (
    <AcademicShell title="Manage availability" description="Set your current status and let others know when you will be free.">
      <div className="grid gap-5 xl:grid-cols-[minmax(0,2fr)_minmax(280px,1fr)]">
        <form className="border border-[#d9e1e7] bg-white p-6 shadow-sm"><h2 className="text-2xl font-bold">Current status</h2><p className="mt-1 text-[#526a84]">Choose the status shown on your office display.</p><fieldset className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4"><legend className="sr-only">Availability status</legend>{statuses.map(({ name, note, color, icon: Icon }, index) => <label key={name} className={`cursor-pointer border-2 p-4 text-center ${color}`}><input className="sr-only" type="radio" name="status" defaultChecked={index === 1} /><Icon className="mx-auto mb-3" size={30} /><span className="block font-bold">{name}</span><span className="mt-1 block text-sm text-[#526a84]">{note}</span></label>)}</fieldset><div className="mt-6 grid gap-5 border-t border-[#d9e1e7] pt-6 sm:grid-cols-2"><label className="font-semibold">When will you be back?<span className="mt-2 grid grid-cols-2 gap-3"><select className="border border-[#b9c8d6] bg-white px-3 py-3 font-normal"><option>Today</option><option>Tomorrow</option></select><input className="border border-[#b9c8d6] px-3 py-3 font-normal" type="time" defaultValue="14:30" /></span></label><label className="font-semibold">Message for visitors<textarea className="mt-2 block min-h-24 w-full resize-none border border-[#b9c8d6] p-3 font-normal" defaultValue="In a meeting until 2:30 pm. Please email me if urgent." maxLength={200} /></label></div><div className="mt-5 flex flex-wrap items-center gap-5"><button type="button" className="bg-[#087a54] px-6 py-3 font-semibold text-white hover:bg-[#066543]">Save changes</button><p className="flex items-center gap-2 text-[#087a54]"><Check size={20} /> Saved, display updates shortly</p></div></form>
        <aside className="border border-[#d9e1e7] bg-white p-6 shadow-sm"><h2 className="text-2xl font-bold">Outside your office</h2><div className="mt-5 border border-[#f1caca] bg-[#fff5f5] p-5"><p className="text-2xl font-bold text-[#c83737]">In a meeting</p><p className="mt-2 text-[#526a84]">In a meeting until 2:30 pm.<br />Please email me if urgent.</p><div className="mt-6 border-t border-[#e4cfcf] pt-5"><p className="text-xl font-bold text-[#071a38]">Nicholas Vanderschantz</p><p className="mt-2 text-[#526a84]">Office G.2.15</p></div></div></aside>
      </div>
    </AcademicShell>
  );
}
