import { useState } from "react";

export default function Booking() {
  const [form, setForm] = useState({ name: "", email: "", lesson: "Hells Basics", message: "" });
  const lessons = [
    { type: "Hells Basics", level: "Beginner", duration: "60 min" },
    { type: "Hells Performance", level: "Intermediate", duration: "90 min" },
    { type: "Creative Direction", level: "Pro / Team", duration: "Project" },
  ];

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    const bookingUrl = "https://calendly.com/"; // replace with real calendly if available
    window.open(bookingUrl, "_blank");
  };

  return (
    <section id="booking" className="bg-white">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-20">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Lezioni & Prenotazioni</h2>
            <p className="text-neutral-700 mb-6">Scegli la soluzione più adatta al tuo livello e ai tuoi obiettivi.</p>

            <div className="space-y-3">
              {lessons.map((l, i) => (
                <div key={i} className="flex items-center justify-between p-4 rounded-xl border border-neutral-200 bg-neutral-50">
                  <div>
                    <p className="font-semibold">{l.type}</p>
                    <p className="text-sm text-neutral-600">{l.level} • {l.duration}</p>
                  </div>
                  <a href="#form" className="text-rose-600 font-semibold hover:underline">Prenota ora</a>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <h3 className="font-semibold mb-2">FAQ</h3>
              <ul className="space-y-2 text-sm text-neutral-700">
                <li>
                  <span className="font-medium">Cosa portare:</span> abbigliamento comodo, scarpe adeguate, acqua.
                </li>
                <li>
                  <span className="font-medium">Durata:</span> 60–90 minuti in base al livello.
                </li>
                <li>
                  <span className="font-medium">Pagamenti:</span> online o in studio, ricevuta disponibile.
                </li>
              </ul>
            </div>
          </div>

          <form id="form" onSubmit={submit} className="p-6 rounded-2xl border border-neutral-200 bg-neutral-50">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Nome</label>
                <input name="name" value={form.name} onChange={handleChange} required className="w-full rounded-md border border-neutral-300 px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-rose-300" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input type="email" name="email" value={form.email} onChange={handleChange} required className="w-full rounded-md border border-neutral-300 px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-rose-300" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium mb-1">Lezione</label>
                <select name="lesson" value={form.lesson} onChange={handleChange} className="w-full rounded-md border border-neutral-300 px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-rose-300">
                  {lessons.map((l, i) => (
                    <option key={i} value={l.type}>{l.type} — {l.level}</option>
                  ))}
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium mb-1">Messaggio</label>
                <textarea name="message" value={form.message} onChange={handleChange} rows="4" className="w-full rounded-md border border-neutral-300 px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-rose-300" />
              </div>
            </div>
            <button type="submit" className="mt-4 inline-flex items-center rounded-full bg-neutral-900 text-white px-5 py-3 text-sm font-semibold hover:bg-neutral-800">Prenota ora</button>
          </form>
        </div>
      </div>
    </section>
  );
}
