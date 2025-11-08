export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-neutral-950 text-neutral-200">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          <div>
            <h4 className="font-semibold text-white mb-2">Contatti</h4>
            <p className="text-sm">Email: <a className="underline hover:text-white" href="mailto:info@marymolfix.com">info@marymolfix.com</a></p>
            <p className="text-sm">Tel: <a className="underline hover:text-white" href="tel:+391234567890">+39 123 456 7890</a></p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-2">Social</h4>
            <div className="flex gap-4">
              <a className="hover:text-white" href="#" aria-label="Instagram">Instagram</a>
              <a className="hover:text-white" href="#" aria-label="TikTok">TikTok</a>
              <a className="hover:text-white" href="#" aria-label="YouTube">YouTube</a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-2">Newsletter</h4>
            <form onSubmit={(e)=>e.preventDefault()} className="flex gap-2">
              <input type="email" required placeholder="La tua email" className="flex-1 rounded-md border border-neutral-700 bg-neutral-900 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-rose-300" />
              <button className="rounded-md bg-white text-neutral-900 px-4 py-2 text-sm font-semibold hover:bg-neutral-200">Iscriviti</button>
            </form>
          </div>
        </div>
        <div className="mt-10 border-t border-neutral-800 pt-6 text-xs text-neutral-400 flex items-center justify-between">
          <p>© {year} Mary Molfix. Tutti i diritti riservati.</p>
          <a href="#home" className="hover:text-white">Torna su</a>
        </div>
      </div>
    </footer>
  );
}
