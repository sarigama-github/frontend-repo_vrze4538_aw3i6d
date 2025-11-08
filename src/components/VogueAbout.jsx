import { motion } from 'framer-motion';

export default function VogueAbout() {
  return (
    <section id="about" className="relative bg-neutral-950 py-20 text-neutral-50">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <header className="mb-10">
          <p className="text-[11px] uppercase tracking-[0.3em] text-red-300">Profilo</p>
          <h2 className="mt-2 font-[900] text-4xl uppercase md:text-6xl" style={{ fontFamily: 'Mona Sans, Inter, system-ui, sans-serif' }}>About</h2>
        </header>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-md border border-red-500/20">
              <img src="https://images.unsplash.com/photo-1650056197378-292c0804ccb4?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxNYXJ5JTIwcG9ydHJhaXR8ZW58MHwwfHx8MTc2MjYyMjE1NHww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Mary portrait" className="h-full w-full object-cover" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-neutral-950/70 via-neutral-950/0 to-transparent" />
            </div>
          </div>
          <div className="md:col-span-7 md:pl-10">
            <p className="text-sm leading-relaxed text-white/70">
              Mary Molfix è ballerina e coreografa specializzata nello stile Hells. Il suo lavoro fonde l'eleganza delle linee con un'attitudine decisa, creando performance e composizioni dal gusto editoriale. Collabora con brand, artisti e produzioni alla ricerca di un'estetica contemporanea.
            </p>
            <div className="mt-6 grid grid-cols-3 gap-4">
              <div className="rounded-md border border-red-500/20 p-4 text-center">
                <div className="text-2xl font-semibold text-red-400">10+</div>
                <div className="mt-1 text-xs uppercase tracking-widest text-red-300">Anni</div>
              </div>
              <div className="rounded-md border border-red-500/20 p-4 text-center">
                <div className="text-2xl font-semibold text-red-400">50+</div>
                <div className="mt-1 text-xs uppercase tracking-widest text-red-300">Progetti</div>
              </div>
              <div className="rounded-md border border-red-500/20 p-4 text-center">
                <div className="text-2xl font-semibold text-red-400">15</div>
                <div className="mt-1 text-xs uppercase tracking-widest text-red-300">Premi</div>
              </div>
            </div>

            <blockquote className="mt-8 rounded-md border border-red-500/20 p-6 text-sm leading-relaxed text-white/80">
              “La precisione è nulla senza intenzione. Mary porta in scena quell'intenzione con una presenza magnetica.” — Vogue Italia
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
