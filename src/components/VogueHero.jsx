import { motion, useMotionValue, useTransform } from 'framer-motion';
import { ArrowRight, PlayCircle } from 'lucide-react';
import { useEffect } from 'react';

export default function VogueHero() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const spotlightX = useTransform(mx, [0, 1], ['0%', '100%']);
  const spotlightY = useTransform(my, [0, 1], ['0%', '100%']);

  useEffect(() => {
    const onMove = (e) => {
      const { innerWidth, innerHeight } = window;
      mx.set(e.clientX / innerWidth);
      my.set(e.clientY / innerHeight);
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, [mx, my]);

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-neutral-950 text-neutral-50">
      {/* Editorial gradient background */}
      <div className="absolute inset-0 opacity-90" aria-hidden>
        <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_70%_-10%,rgba(255,255,255,0.08),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(800px_500px_at_20%_110%,rgba(255,98,140,0.08),transparent)]" />
      </div>

      {/* Interactive spotlight */}
      <motion.div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `radial-gradient(300px 300px at ${spotlightX} ${spotlightY}, rgba(255,255,255,0.06), transparent 70%)`,
        }}
        aria-hidden
      />

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-between px-6 py-8 md:px-10">
        {/* Thin editorial nav */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div className="text-xs uppercase tracking-[0.35em] text-white/70">Mary Molfix</div>
          <nav className="hidden gap-8 text-[13px] uppercase tracking-widest text-white/70 md:flex">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#portfolio" className="hover:text-white">Portfolio</a>
            <a href="#contact" className="hover:text-white">Contatti</a>
          </nav>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-[12px] uppercase tracking-widest text-white/80 transition hover:border-white hover:text-white"
          >
            Prenota <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>

        {/* Headline block */}
        <div className="flex flex-1 items-center">
          <div className="w-full">
            <div className="mb-8 text-xs uppercase tracking-[0.35em] text-white/60">Hells • Dance • Choreography</div>
            <div className="leading-[0.9]">
              <motion.h1
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="font-[900] text-[clamp(2.8rem,8vw,7.2rem)] uppercase tracking-tight"
                style={{ fontFamily: 'Mona Sans, Inter, system-ui, sans-serif' }}
              >
                Eleganza
              </motion.h1>
              <motion.h1
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.9, ease: 'easeOut', delay: 0.08 }}
                className="font-[900] text-[clamp(2.8rem,8vw,7.2rem)] uppercase text-white/90"
                style={{ fontFamily: 'Mona Sans, Inter, system-ui, sans-serif' }}
              >
                E<br className="md:hidden" /> Dinamica
              </motion.h1>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-6 max-w-xl text-sm leading-relaxed text-white/70 md:text-base"
            >
              Ballerina e coreografa specializzata nello stile Hells. Direzione artistica e performance che fondono rigore e attitudine street in un linguaggio contemporaneo.
            </motion.p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#about"
                className="group inline-flex items-center gap-3 rounded-full bg-white px-5 py-3 text-[12px] font-semibold uppercase tracking-widest text-neutral-900 transition hover:bg-white/90"
              >
                Scopri di più <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="https://calendly.com/" target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-[12px] uppercase tracking-widest text-white/80 backdrop-blur transition hover:border-white hover:text-white"
              >
                Prenota una lezione <PlayCircle size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Editorial ticker */}
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: ['0%', '-50%'] }}
          transition={{ repeat: Infinity, duration: 30, ease: 'linear' }}
          className="pointer-events-none -mx-6 mt-16 flex select-none whitespace-nowrap border-t border-white/10 py-4 text-xs uppercase tracking-[0.25em] text-white/40 md:-mx-10"
          aria-hidden
        >
          <span className="mx-6">Mary Molfix • Vogue-Inspired Editorial Experience • Hells • Choreography • Direction • Performance •</span>
          <span className="mx-6">Mary Molfix • Vogue-Inspired Editorial Experience • Hells • Choreography • Direction • Performance •</span>
        </motion.div>
      </div>
    </section>
  );
}
