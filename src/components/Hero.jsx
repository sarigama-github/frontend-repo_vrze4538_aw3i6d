import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-neutral-950 text-white">
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_-100px,rgba(244,63,94,0.25),transparent)]"
      />
      <img
        src="https://images.unsplash.com/photo-1579947145520-3b7253c4c645?q=80&w=1974&auto=format&fit=crop"
        alt="Ballerina in motion"
        className="absolute inset-0 h-full w-full object-cover opacity-30"
      />

      <div className="relative z-10 px-6 md:px-10 max-w-6xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <p className="uppercase tracking-[0.25em] text-rose-300/90 text-xs md:text-sm mb-3">
            Energia • Eleganza • Professionalità
          </p>
          <h1 className="font-extrabold leading-tight text-4xl md:text-6xl lg:text-7xl">
            Mary Molfix
          </h1>
          <p className="mt-3 text-lg md:text-2xl text-neutral-200">
            Coreografa, Movement Director e Ballerina — stile Hells
          </p>

          <div className="mt-8 flex items-center justify-center gap-4">
            <a
              href="#about"
              className="inline-flex items-center rounded-full bg-white text-neutral-900 px-6 py-3 text-sm font-semibold shadow hover:bg-neutral-200 transition"
            >
              Scopri di più
            </a>
            <a
              href="#booking"
              className="inline-flex items-center rounded-full border border-rose-300/60 px-6 py-3 text-sm font-semibold text-rose-200 hover:bg-rose-300/10 transition"
            >
              Prenota una lezione
            </a>
          </div>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-neutral-950 to-transparent" />
    </section>
  );
}
