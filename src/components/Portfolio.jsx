import { useState } from "react";

const items = [
  {
    title: "HELLS Showcase",
    year: 2024,
    role: "Coreografa & Performer",
    media: "https://images.unsplash.com/photo-1515165562835-c3b8c218a1c6?q=80&w=2068&auto=format&fit=crop",
  },
  {
    title: "Brand Campaign",
    year: 2023,
    role: "Movement Director",
    media: "https://images.unsplash.com/photo-1516637090014-cb1ab0d08fc7?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Tour Performance",
    year: 2022,
    role: "Ballerina",
    media: "https://images.unsplash.com/photo-1506792006437-256b665541e4?q=80&w=2080&auto=format&fit=crop",
  },
  {
    title: "Music Video",
    year: 2024,
    role: "Coreografa",
    media: "https://images.unsplash.com/photo-1517142089942-ba376ce32a0b?q=80&w=2070&auto=format&fit=crop",
  },
];

export default function Portfolio() {
  const [active, setActive] = useState(null);

  return (
    <section id="portfolio" className="bg-neutral-50">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-20">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-3xl md:text-4xl font-bold">Portfolio</h2>
          <p className="text-sm text-neutral-600">Selezione di progetti e collaborazioni</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, idx) => (
            <article
              key={idx}
              className="group relative rounded-xl overflow-hidden bg-white border border-neutral-200 shadow-sm hover:shadow-md transition"
              onMouseEnter={() => setActive(idx)}
              onMouseLeave={() => setActive(null)}
            >
              <img
                src={item.media}
                alt={item.title}
                className="h-56 w-full object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="text-sm text-neutral-600">{item.year} • {item.role}</p>
              </div>

              <div className={`absolute inset-0 bg-black/50 transition-opacity ${active===idx ? 'opacity-100' : 'opacity-0'}`}></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
