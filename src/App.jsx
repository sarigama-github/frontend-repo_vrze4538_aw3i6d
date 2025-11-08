import VogueHero from './components/VogueHero';
import VogueAbout from './components/VogueAbout';
import EditorialSpread from './components/EditorialSpread';
import BookingVogue from './components/BookingVogue';

function App() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-50" style={{ fontFamily: 'Mona Sans, Inter, system-ui, sans-serif' }}>
      <VogueHero />
      <VogueAbout />
      <EditorialSpread />
      <BookingVogue />
      <footer className="border-t border-white/10 py-10 text-center text-xs uppercase tracking-[0.25em] text-white/50">
        © {new Date().getFullYear()} Mary Molfix — Tutti i diritti riservati
      </footer>
    </main>
  );
}

export default App;
