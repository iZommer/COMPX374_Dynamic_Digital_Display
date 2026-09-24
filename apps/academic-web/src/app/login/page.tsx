import Link from "next/link";
import { Eye, Landmark, LockKeyhole, Mail } from "lucide-react";

export default function LoginPage() {
  return (
    <main className="grid min-h-screen bg-[#f4f7f8] lg:grid-cols-[minmax(320px,44%)_1fr]">
      <section className="flex flex-col justify-between bg-[#08243f] p-8 text-white sm:p-12 lg:p-16">
        <div className="flex items-center gap-4"><div className="grid size-14 place-items-center bg-[#d43c2f]"><Landmark aria-hidden="true" size={30} /></div><div><p className="text-lg font-semibold uppercase tracking-[0.12em]">University of Waikato</p><p className="text-sm text-[#b7cadd]">Te Whare Wananga o Waikato</p></div></div>
        <div className="py-16"><h1 className="text-4xl font-bold sm:text-5xl">Kei Hea a Nic?</h1><p className="mt-3 text-xl text-[#c8d8e7]">Academic diary and availability</p></div>
        <p className="text-sm uppercase leading-6 tracking-[0.16em] text-[#b7cadd]">People<br />Ideas<br />Impact</p>
      </section>
      <section className="grid place-items-center p-6 sm:p-10">
        <div className="w-full max-w-xl border border-[#d9e1e7] bg-white p-7 shadow-sm sm:p-10">
          <h2 className="text-4xl font-bold text-[#071a38]">Welcome back</h2><p className="mt-2 text-lg text-[#526a84]">Sign in to manage your office display.</p>
          <form className="mt-8 space-y-5">
            <label className="block font-semibold text-[#071a38]">Email address<span className="mt-2 flex items-center gap-3 border border-[#b9c8d6] px-4 py-3 focus-within:border-[#087a54]"><Mail aria-hidden="true" className="text-[#526a84]" size={20} /><input className="w-full outline-none" type="email" placeholder="name@waikato.ac.nz" /></span></label>
            <label className="block font-semibold text-[#071a38]">Password<span className="mt-2 flex items-center gap-3 border border-[#b9c8d6] px-4 py-3 focus-within:border-[#087a54]"><LockKeyhole aria-hidden="true" className="text-[#526a84]" size={20} /><input className="w-full outline-none" type="password" placeholder="Your password" /><Eye aria-hidden="true" className="text-[#526a84]" size={20} /></span></label>
            <Link className="block bg-[#087a54] px-5 py-4 text-center text-lg font-semibold text-white hover:bg-[#066543]" href="/overview">Sign in</Link>
          </form>
          <p className="mt-6 border-t border-[#d9e1e7] pt-6 text-center text-[#526a84]">Need access? <a className="font-semibold text-[#087a54] underline" href="mailto:servicedesk@waikato.ac.nz">Contact the service desk</a></p>
        </div>
      </section>
    </main>
  );
}
