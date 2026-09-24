"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CalendarDays, ContactRound, LayoutDashboard, Landmark, LogOut, UserRoundCheck } from "lucide-react";
import type { ReactNode } from "react";

const navigation = [
  { href: "/overview", label: "Overview", icon: LayoutDashboard },
  { href: "/availability", label: "Availability", icon: UserRoundCheck },
  { href: "/calendar", label: "Calendar", icon: CalendarDays },
  { href: "/contact-details", label: "Contact details", icon: ContactRound },
];

export function AcademicShell({ title, description, children }: { title: string; description: string; children: ReactNode }) {
  const pathname = usePathname();
  return (
    <div className="min-h-screen bg-[#f4f7f8] text-[#071a38] lg:grid lg:grid-cols-[260px_1fr]">
      <aside className="bg-[#08243f] px-4 py-5 text-white lg:min-h-screen lg:px-5 lg:py-8">
        <div className="flex items-center gap-3 px-2">
          <div className="grid size-11 place-items-center border border-white/30 bg-[#d43c2f]"><Landmark aria-hidden="true" size={24} /></div>
          <div><p className="text-sm font-semibold uppercase tracking-[0.12em]">University of Waikato</p><p className="text-xs text-[#b7cadd]">Te Whare Wananga o Waikato</p></div>
        </div>
        <div className="mt-7 px-2"><p className="text-2xl font-bold">Kei Hea a Nic?</p><p className="mt-1 text-sm text-[#b7cadd]">Academic diary and availability</p></div>
        <nav className="mt-7 grid grid-cols-4 gap-2 lg:grid-cols-1" aria-label="Academic portal">
          {navigation.map(({ href, label, icon: Icon }) => {
            const active = pathname === href;
            return <Link key={href} href={href} className={`flex min-h-12 items-center justify-center gap-3 px-3 py-3 text-sm font-medium transition lg:justify-start lg:text-base ${active ? "bg-[#274d72] text-white" : "text-[#c8d8e7] hover:bg-white/10 hover:text-white"}`}><Icon aria-hidden="true" size={21} /><span className="hidden sm:inline">{label}</span></Link>;
          })}
        </nav>
        <Link href="/login" className="mt-8 hidden items-center gap-3 border-t border-white/15 px-3 pt-5 text-sm text-[#b7cadd] hover:text-white lg:flex"><LogOut aria-hidden="true" size={19} /> Sign out</Link>
      </aside>
      <main className="min-w-0">
        <header className="border-b border-[#d9e1e7] bg-white px-5 py-7 sm:px-8 lg:px-10"><div className="mx-auto max-w-7xl"><h1 className="text-3xl font-bold sm:text-4xl">{title}</h1><p className="mt-2 text-base text-[#526a84] sm:text-lg">{description}</p></div></header>
        <div className="mx-auto max-w-7xl p-5 sm:p-8 lg:p-10">{children}</div>
      </main>
    </div>
  );
}
