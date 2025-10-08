export default function SearchBar({ mode, query, onQueryChange, onModeChange, onSearch }) {
  return (
    <div className="bg-white/90 rounded-2xl shadow-card p-4 sm:p-6 border border-black/5">
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="inline-flex rounded-xl overflow-hidden border border-black/10">
          <button
            className={`px-4 py-2 text-sm font-medium ${mode === 'role' ? 'bg-primary-600 text-white' : 'bg-white text-black/70'}`}
            onClick={() => onModeChange('role')}
          >
            By Role
          </button>
          <button
            className={`px-4 py-2 text-sm font-medium ${mode === 'company' ? 'bg-primary-600 text-white' : 'bg-white text-black/70'}`}
            onClick={() => onModeChange('company')}
          >
            By Company
          </button>
        </div>

        <div className="flex-1 flex gap-3">
          <input
            value={query}
            onChange={(e) => onQueryChange(e.target.value)}
            onKeyDown={(e) => { if (e.key === 'Enter') onSearch(); }}
            placeholder={mode === 'role' ? 'Search role e.g. Frontend, Data Scientist' : 'Search company e.g. Google, TCS'}
            className="flex-1 rounded-xl border border-black/10 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-400"
          />
          <button
            onClick={onSearch}
            className="rounded-xl bg-primary-600 text-white px-5 py-2 font-medium shadow-card hover:bg-primary-700"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
}


