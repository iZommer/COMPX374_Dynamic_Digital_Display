import { DisplayShell } from "@/components/DisplayShell";

const schedule = [
  { day: "Mon", date: "21 Oct", slots: ["Free", "Busy", "Free", "Free"] },
  { day: "Tue", date: "22 Oct", slots: ["Free", "Free", "Busy", "Free"] },
  { day: "Wed", date: "23 Oct", slots: ["Free", "Busy", "Free", "Free"] },
  { day: "Thu", date: "24 Oct", slots: ["Busy", "Free", "Free", "Free"] },
  { day: "Fri", date: "25 Oct", slots: ["Free", "Free", "Busy", "Free"] },
];
const times = ["9 am", "11 am", "1 pm", "3 pm"];

export default function CalendarPage() {
  return (
    <DisplayShell>
      <div className="mx-auto max-w-7xl"><div className="flex flex-wrap items-end justify-between gap-4"><div><h1 className="text-5xl font-bold sm:text-6xl">This week</h1><p className="mt-2 text-2xl text-[#526a84]">See when Nic is free or busy in the office.</p></div><div className="flex gap-5 text-xl"><span className="flex items-center gap-2"><i className="size-5 rounded-full bg-[#66c9a1]" />Free</span><span className="flex items-center gap-2"><i className="size-5 rounded-full bg-[#f47f7f]" />Busy</span></div></div><div className="mt-6 grid gap-3 md:grid-cols-5">{schedule.map(({ day, date, slots }) => <section key={day} className={`border-2 bg-white p-4 ${day === "Wed" ? "border-[#087a54] bg-[#f1faf6]" : "border-[#d9e1e7]"}`}><h2 className="text-3xl font-bold sm:text-4xl">{day}</h2><p className="text-xl text-[#526a84]">{date}</p><div className="mt-5 space-y-3">{slots.map((slot, index) => <div key={`${day}-${times[index]}`} className="grid grid-cols-[55px_1fr] items-center gap-2"><span className="text-lg text-[#526a84]">{times[index]}</span><span className={`px-3 py-3 text-center text-xl font-bold ${slot === "Free" ? "bg-[#dff5eb] text-[#076443]" : "bg-[#ffe0e0] text-[#b52020]"}`}>{slot}</span></div>)}</div></section>)}</div></div>
    </DisplayShell>
  );
}
