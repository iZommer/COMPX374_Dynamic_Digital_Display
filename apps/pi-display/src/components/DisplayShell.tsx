"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CalendarDays, CircleUserRound, Landmark, MessageCircle } from "lucide-react";
import type { ReactNode } from "react";

const navigation = [
  { href: "/status", label: "Status", icon: CircleUserRound },
  { href: "/calendar", label: "Calendar", icon: CalendarDays },
  { href: "/contact", label: "Contact", icon: MessageCircle },
];

export function DisplayShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  return (
    <main className="flex min-h-screen flex-col bg-[#f7f9f9] text-[#071a38]">
      <header className="flex flex-wrap items-center justify-between gap-4 bg-[#08243f] px-6 py-5 text-white sm:px-10">
        <div className="flex items-center gap-4"><div className="grid size-14 place-items-center bg-[#d43c2f]"><Landmark aria-hidden="true" size={30} /></div><div><p className="text-sm font-semibold uppercase tracking-[0.12em]">University of Waikato</p><p className="text-xs text-[#b7cadd]">Te Whare Wananga o Waikato</p></div></div>
        <div className="min-w-0 sm:text-right"><p className="text-3xl font-bold sm:text-4xl">Kei Hea a Nic?</p><p className="mt-1 text-base text-[#c8d8e7] sm:text-xl">Nicholas Vanderschantz&nbsp; | &nbsp;Office G.2.15</p></div>
      </header>
      <section className="flex-1 p-5 sm:p-8">{children}</section>
      <nav className="grid grid-cols-3 gap-3 border-t border-[#d9e1e7] bg-white p-4" aria-label="Display views">
        {navigation.map(({ href, label, icon: Icon }) => {
          const active = pathname === href;
          return <Link key={href} href={href} className={`flex min-h-20 items-center justify-center gap-3 border-2 text-xl font-bold transition sm:text-2xl ${active ? "border-[#087a54] bg-[#087a54] text-white" : "border-[#d9e1e7] bg-white text-[#071a38] hover:bg-[#edf5f2]"}`}><Icon aria-hidden="true" size={30} />{label}</Link>;
        })}
      </nav>
    </main>
  );
}
