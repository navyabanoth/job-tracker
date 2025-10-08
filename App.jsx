import { useEffect, useMemo, useState } from 'react';
import './App.css';
import Header from './components/Header.jsx';
import SearchBar from './components/SearchBar.jsx';
import Results from './components/Results.jsx';
import { getCompaniesForRole, getRolesForCompany } from './data/jobs.js';

function App() {
  const [mode, setMode] = useState('role');
  const [query, setQuery] = useState('Frontend');
  const [searchKey, setSearchKey] = useState('Frontend');

  const groups = useMemo(() => {
    if (!searchKey) return {};
    return mode === 'role' ? getCompaniesForRole(searchKey) : getRolesForCompany(searchKey);
  }, [mode, searchKey]);

  const title = useMemo(() => {
    if (!searchKey) return 'Results';
    return mode === 'role'
      ? `Companies offering "${searchKey}"`
      : `Roles available at "${searchKey}"`;
  }, [mode, searchKey]);

  return (
    <div className="min-h-screen gradient-bg">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <div className="mb-6">
          <h2 className="text-3xl font-bold tracking-tight">Find your next role</h2>
          <p className="text-black/60">Search by job role or company name to explore openings.</p>
        </div>
        <SearchBar
          mode={mode}
          query={query}
          onQueryChange={(v) => { setQuery(v); setSearchKey(v); }}
          onModeChange={(m) => { setMode(m); setQuery(''); setSearchKey(''); }}
          onSearch={() => setSearchKey(query)}
        />

        <Results title={title} groups={groups} />
      </main>
      <footer className="py-8 text-center text-sm text-black/60">
        Built for learning — demo dataset only.
      </footer>
    </div>
  );
}

export default App;
