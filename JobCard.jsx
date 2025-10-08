export default function JobCard({ job }) {
  return (
    <a href={job.applyUrl} target="_blank" rel="noreferrer" className="block">
      <div className="rounded-2xl border border-black/10 bg-white/90 hover:bg-white p-5 shadow-sm hover:shadow-card transition-shadow">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold">{job.role}</h3>
            <p className="text-sm text-black/60">{job.company}</p>
          </div>
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${job.type === 'Full-time' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'}`}>
            {job.type}
          </span>
        </div>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
          <div className="flex items-center gap-2"><span className="text-black/50">💰</span><span className="font-medium">{job.salary}</span></div>
          <div className="flex items-center gap-2"><span className="text-black/50">📍</span><span>{job.location}</span></div>
          <div className="flex items-center gap-2"><span className="text-black/50">✅</span><span>{job.eligibility}</span></div>
          <div className="flex items-center gap-2"><span className="text-black/50">📅</span><span>{job.applicationDates}</span></div>
          <div className="flex items-center gap-2 sm:col-span-2"><span className="text-black/50">🎓</span><span>{job.qualification}</span></div>
        </div>
      </div>
    </a>
  );
}



