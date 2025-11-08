import { motion } from 'framer-motion';

const spreads = [
  {
    title: 'Studio Session',
    subtitle: 'Minimal chiaroscuro',
    image: 'https://images.unsplash.com/photo-1588418138111-c8f8c7d9cb0c?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTdHVkaW8lMjBTZXNzaW9ufGVufDB8MHx8fDE3NjI2MjIxNTR8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    year: '2024',
  },
  {
    title: 'Backstage Energy',
    subtitle: 'Raw movement',
    image: 'https://images.unsplash.com/photo-1547153760-18fc86324498?q=80&w=2069&auto=format&fit=crop',
    year: '2023',
  },
  {
    title: 'Hells Choreo',
    subtitle: 'Steel & velvet',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop',
    year: '2024',
  },
];

export default function EditorialSpread() {
  return (
    <section id="portfolio" className="relative bg-neutral-950 py-20 text-neutral-50">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <header className="mb-10 flex items-end justify-between">
          <div>
            <p className="text-[11px] uppercase tracking-[0.3em] text-white/60">Portfolio</p>
            <h2 className="mt-2 font-[900] text-4xl uppercase md:text-6xl" style={{ fontFamily: 'Mona Sans, Inter, system-ui, sans-serif' }}>Editoriale</h2>
          </div>
          <p className="hidden max-w-sm text-sm leading-relaxed text-white/60 md:block">Selezione curata di lavori tra direzione artistica, coreografie e performance. Estetica high-fashion con energia street.</p>
        </header>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
          {spreads.map((s, i) => (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className={
                i === 0
                  ? 'group relative md:col-span-7'
                  : i === 1
                  ? 'group relative md:col-span-5'
                  : 'group relative md:col-span-12'
              }
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-md border border-white/10">
                <img src={s.image} alt={s.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.05]" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-neutral-950/0 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="flex items-center justify-between text-xs uppercase tracking-[0.25em] text-white/70">
                    <span>{s.year}</span>
                    <span>{s.subtitle}</span>
                  </div>
                  <h3 className="mt-2 font-semibold text-2xl uppercase md:text-3xl">{s.title}</h3>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
