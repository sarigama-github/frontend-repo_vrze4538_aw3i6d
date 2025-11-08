import Hero from "./components/Hero";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Booking from "./components/Booking";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-inter text-neutral-900">
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur bg-white/60 border-b border-neutral-200">
        <div className="max-w-6xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
          <a href="#home" className="font-extrabold tracking-tight text-lg">Mary Molfix</a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#about" className="hover:text-rose-600">Chi sono</a>
            <a href="#portfolio" className="hover:text-rose-600">Portfolio</a>
            <a href="#booking" className="hover:text-rose-600">Lezioni</a>
            <a href="#footer" className="hover:text-rose-600">Contatti</a>
          </nav>
          <a href="#booking" className="inline-flex items-center rounded-full bg-neutral-900 text-white px-4 py-2 text-sm font-semibold hover:bg-neutral-800">Prenota</a>
        </div>
      </header>

      <main className="pt-16">
        <Hero />
        <About />
        <Portfolio />
        <Booking />
      </main>

      <div id="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
