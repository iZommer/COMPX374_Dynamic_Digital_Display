import { Upload } from "lucide-react";
import { AcademicShell } from "@/components/AcademicShell";

const days = [
  { day: "Mon", date: "21 Oct", events: [["Teaching", "9:00 - 10:00", "orange"], ["Office hours", "1:00 - 3:00", "green"], ["Research", "3:00 - 5:00", "blue"]] },
  { day: "Tue", date: "22 Oct", events: [["Office hours", "9:00 - 12:00", "green"], ["Meeting", "2:00 - 3:00", "red"], ["Research", "3:00 - 5:00", "blue"]] },
  { day: "Wed", date: "23 Oct", events: [["Teaching", "9:00 - 11:00", "orange"], ["Teaching", "1:00 - 3:00", "orange"], ["Office hours", "3:30 - 5:00", "green"]] },
  { day: "Thu", date: "24 Oct", events: [["Meeting", "10:00 - 11:00", "red"], ["Research", "11:00 - 1:00", "blue"]] },
  { day: "Fri", date: "25 Oct", events: [["Office hours", "9:00 - 12:00", "green"], ["Teaching", "1:00 - 4:00", "orange"]] },
];
const colors: Record<string, string> = { green: "border-[#1f9d61] bg-[#eaf7f1]", orange: "border-[#ef8a2f] bg-[#fff3e8]", red: "border-[#e35c5c] bg-[#fff0f0]", blue: "border-[#4f91df] bg-[#edf5ff]" };

export default function CalendarPage() {
  return (
    <AcademicShell title="Weekly calendar" description="View and manage your planned activities for the week.">
      <section className="border border-[#d9e1e7] bg-white p-6 shadow-sm"><div className="flex flex-wrap items-start justify-between gap-4"><div><h2 className="text-2xl font-bold">Your calendar</h2><p className="mt-1 text-[#526a84]">Private event details are hidden on the office display.</p></div><label className="cursor-pointer border border-[#8aa0b5] px-5 py-3 font-semibold hover:bg-[#f4f7f8]"><Upload className="mr-2 inline" size={19} />Import .ics<input className="sr-only" type="file" accept=".ics,text/calendar" /></label></div><div className="mt-6 grid gap-3 md:grid-cols-5">{days.map(({ day, date, events }) => <div key={day} className="min-h-96 border border-[#d9e1e7] p-3"><div className="border-b border-[#d9e1e7] pb-3 text-center"><p className="text-lg font-bold">{day}</p><p className="text-sm text-[#526a84]">{date}</p></div><div className="mt-3 space-y-3">{events.map(([name, time, color]) => <div key={`${name}-${time}`} className={`border-l-4 p-3 ${colors[color]}`}><p className="font-bold">{name}</p><p className="mt-1 text-sm text-[#526a84]">{time}</p></div>)}</div></div>)}</div></section>
    </AcademicShell>
  );
}
