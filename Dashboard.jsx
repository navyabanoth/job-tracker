import Header from '../components/Header.jsx';
import Results from '../components/Results.jsx';
import { useMemo, useState } from 'react';
import { getCompaniesForRole, getRolesForCompany } from '../data/jobs.js';
import { getUser, logout } from '../auth.js';

function Quote() {
  const quotes = [
    'Opportunities don\'t happen, you create them.',
    'Your future is created by what you do today, not tomorrow.',
    'Stay hungry. Stay foolish.',
    'Dream big, work hard, stay focused.',
  ];
  const pick = quotes[new Date().getDate() % quotes.length];
  return <p className="text-black/70 italic">“{pick}”</p>;
}

export default function Dashboard() {
  const user = getUser();
  const [companyQuery, setCompanyQuery] = useState('');
  const [roleQuery, setRoleQuery] = useState('');

  const companyGroups = useMemo(() => {
    if (!companyQuery.trim()) return {};
    return getRolesForCompany(companyQuery);
  }, [companyQuery]);

  const roleGroups = useMemo(() => {
    if (!roleQuery.trim()) return {};
    return getCompaniesForRole(roleQuery);
  }, [roleQuery]);

  return (
    <div className="min-h-screen gradient-bg">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        <div className="rounded-3xl bg-white/80 border border-black/5 p-6 sm:p-10 shadow-card mx-auto max-w-4xl">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Welcome, {user?.name || 'Explorer'}</h2>
              <p className="text-black/60">Find roles by Company or discover Companies by Role — all details included.</p>
              <div className="mt-3"><Quote /></div>
            </div>
            <button onClick={() => { logout(); window.location.href = '/login'; }} className="h-10 px-4 rounded-xl bg-black/80 text-white hover:bg-black">Logout</button>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-2xl bg-primary-50/80 p-4 border border-primary-200">
              <h3 className="font-semibold mb-2 text-primary-800">Search by Company</h3>
              <input
                value={companyQuery}
                onChange={(e)=>setCompanyQuery(e.target.value)}
                onKeyDown={(e)=>{ if(e.key==='Enter') setCompanyQuery(e.currentTarget.value); }}
                className="w-full rounded-xl border border-black/10 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-400"
                placeholder="Enter company name e.g. Google, Amazon"
              />
            </div>

            <div className="rounded-2xl bg-primary-50/80 p-4 border border-primary-200">
              <h3 className="font-semibold mb-2 text-primary-800">Search by Role</h3>
              <input
                value={roleQuery}
                onChange={(e)=>setRoleQuery(e.target.value)}
                onKeyDown={(e)=>{ if(e.key==='Enter') setRoleQuery(e.currentTarget.value); }}
                className="w-full rounded-xl border border-black/10 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-400"
                placeholder="Enter role e.g. Frontend Developer, Data Scientist"
              />
            </div>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <Results title={companyQuery ? `Roles at "${companyQuery}"` : 'Roles by Company'} groups={companyGroups} />
          </div>
          <div>
            <Results title={roleQuery ? `Companies for "${roleQuery}"` : 'Companies by Role'} groups={roleGroups} />
          </div>
        </div>
      </main>
      <footer className="py-8 text-center text-sm text-black/60">Built for learning — demo dataset only.</footer>
    </div>
  );
}


