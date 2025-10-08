import JobCard from './JobCard.jsx';

export default function Results({ title, groups }) {
  const groupKeys = Object.keys(groups || {});
  const nothing = groupKeys.length === 0;
  return (
    <section className="mt-6">
      <h2 className="text-lg font-semibold mb-3">{title}</h2>
      {nothing ? (
        <div className="rounded-xl border border-dashed border-black/15 p-8 text-center text-black/60 bg-white/60">
          No results yet. Try a different search.
        </div>
      ) : (
        <div className="space-y-8">
          {groupKeys.map((group) => (
            <div key={group}>
              <h3 className="text-base font-semibold mb-3 text-primary-700">{group}</h3>
              <div className="flex flex-col gap-4">
                {(groups[group] || []).map((job) => (
                  <JobCard key={job.id} job={job} />
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}



