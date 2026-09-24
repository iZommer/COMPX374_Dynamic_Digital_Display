import { Check, Clock3, UsersRound } from "lucide-react";
import { DisplayShell } from "@/components/DisplayShell";

export default function StatusPage() {
  return (
    <DisplayShell>
      <div className="mx-auto flex h-full max-w-7xl flex-col justify-center gap-5">
        <section className="flex min-h-72 flex-col items-center justify-center border-2 border-[#2caa72] bg-[#ebf8f2] p-8 text-center sm:flex-row sm:gap-10 sm:text-left">
          <div className="grid size-28 shrink-0 place-items-center rounded-full bg-[#087a54] text-white sm:size-36"><Check size={74} strokeWidth={3} /></div>
          <div><h1 className="text-6xl font-black uppercase text-[#076443] sm:text-8xl">Available</h1><p className="mt-3 text-3xl text-[#164c3c] sm:text-5xl">Drop in during office hours</p></div>
        </section>
        <section className="grid gap-4 border border-[#d9e1e7] bg-white p-6 shadow-sm sm:grid-cols-[auto_1fr_auto] sm:items-center sm:px-8"><div className="grid size-20 place-items-center rounded-full bg-[#fff0df] text-[#8a4a0e]"><UsersRound size={40} /></div><div><p className="text-2xl text-[#526a84]">Next</p><p className="text-3xl font-bold sm:text-4xl">Teaching at 1:00 pm</p></div><p className="flex items-center gap-2 text-lg text-[#718399]"><Clock3 size={24} /> Updated just now</p></section>
      </div>
    </DisplayShell>
  );
}
