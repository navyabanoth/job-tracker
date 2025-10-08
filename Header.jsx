export default function Header() {
  return (
    <header className="sticky top-0 z-20 backdrop-blur bg-white/70 border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-primary-600 text-white grid place-items-center shadow-card">JT</div>
          <div>
           <center> <h1 className="text-xl font-bold tracking-tight">Job Tracker</h1> </center>
            <p className="text-xs text-black/60 -mt-0.5">Find roles and track applications</p>
          </div>
        </div>
        <a href="https://vite.dev" className="text-sm text-primary-700 hover:text-primary-900">Powered by React + Vite</a>
      </div>
    </header>
  );
}



