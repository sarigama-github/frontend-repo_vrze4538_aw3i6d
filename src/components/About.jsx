export default function About() {
  return (
    <section id="about" className="bg-white text-neutral-900">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-20">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Chi sono</h2>
            <p className="text-neutral-700 leading-relaxed">
              Sono Mary Molfix, ballerina, coreografa e movement director specializzata nello stile Hells.
              Guido performer e brand nella creazione di coreografie e direzioni del movimento che uniscono
              energia, precisione e identità visiva. Mi sono formata tra accademie e palchi internazionali e ho
              collaborato con artisti, teatri e produzioni digitali.
            </p>
            <p className="mt-4 text-neutral-700 leading-relaxed">
              Lavoro su progetti per videoclip, tour, adv e formazione: dal concept al set, conduco il team con
              cura e professionalità, mantenendo un approccio umano e creativo.
            </p>

            <div className="mt-8 p-5 rounded-xl bg-neutral-50 border border-neutral-200">
              <p className="text-sm italic text-neutral-600">
                “Mary unisce disciplina e visione artistica. Le sue coreografie elevano ogni progetto.” —
                <span className="font-semibold"> L. Bianchi, Creative Director</span>
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2069&auto=format&fit=crop"
              alt="Backstage 1"
              className="h-56 w-full object-cover rounded-xl"
            />
            <img
              src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070&auto=format&fit=crop"
              alt="Backstage 2"
              className="h-56 w-full object-cover rounded-xl"
            />
            <img
              src="https://images.unsplash.com/photo-1487180144351-b8472da7d491?q=80&w=1975&auto=format&fit=crop"
              alt="Performance"
              className="col-span-2 h-64 w-full object-cover rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
