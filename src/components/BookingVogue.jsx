import { motion } from 'framer-motion';
import { ArrowRight, Mail, Instagram } from 'lucide-react';

export default function BookingVogue() {
  return (
    <section id="contact" className="relative bg-neutral-950 py-20 text-neutral-50">
      <div className="mx-auto max-w-4xl px-6 md:px-10">
        <header className="mb-10">
          <p className="text-[11px] uppercase tracking-[0.3em] text-red-300">Lezioni & Booking</p>
          <h2 className="mt-2 font-[900] text-4xl uppercase md:text-6xl" style={{ fontFamily: 'Mona Sans, Inter, system-ui, sans-serif' }}>Prenotazioni</h2>
        </header>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="rounded-md border border-red-500/20 p-6">
            <h3 className="text-sm uppercase tracking-[0.3em] text-red-300">Lezioni private</h3>
            <p className="mt-3 text-sm text-white/70">Sessioni su misura per tecnica Hells, linee, transizioni e stage presence. In studio o online.</p>
            <a
              href="https://calendly.com/" target="_blank" rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-red-500 px-5 py-3 text-[12px] font-semibold uppercase tracking-widest text-white transition hover:bg-red-400"
            >
              Prenota ora <ArrowRight size={16} />
            </a>
          </div>

          <form className="rounded-md border border-red-500/20 p-6">
            <h3 className="text-sm uppercase tracking-[0.3em] text-red-300">Richiesta progetti</h3>
            <p className="mt-3 text-sm text-white/70">Per brand, videoclip, eventi o direzione creativa.</p>

            <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
              <input className="w-full rounded-md border border-white/10 bg-transparent px-3 py-2 text-sm placeholder:text-white/40 focus:border-red-400 focus:outline-none" placeholder="Nome" />
              <input type="email" className="w-full rounded-md border border-white/10 bg-transparent px-3 py-2 text-sm placeholder:text-white/40 focus:border-red-400 focus:outline-none" placeholder="Email" />
            </div>
            <input className="mt-4 w-full rounded-md border border-white/10 bg-transparent px-3 py-2 text-sm placeholder:text-white/40 focus:border-red-400 focus:outline-none" placeholder="Oggetto" />
            <textarea rows={4} className="mt-4 w-full rounded-md border border-white/10 bg-transparent px-3 py-2 text-sm placeholder:text-white/40 focus:border-red-400 focus:outline-none" placeholder="Descrivi il progetto" />

            <button type="submit" className="mt-5 inline-flex items-center gap-2 rounded-full border border-red-500/30 px-5 py-3 text-[12px] uppercase tracking-widest text-red-200 transition hover:border-red-400 hover:text-white">
              Invia richiesta <ArrowRight size={16} />
            </button>

            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-white/70">
              <a href="mailto:booking@molfix.studio" className="inline-flex items-center gap-2 hover:text-red-300"><Mail size={16} /> booking@molfix.studio</a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-red-300"><Instagram size={16} /> @marymolfix</a>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
