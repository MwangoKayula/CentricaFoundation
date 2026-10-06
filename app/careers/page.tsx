export default function CareersPage() {
  const roles = [
    {
      title: 'Field Coordinator (Forestry)',
      team: 'Operations',
      location: 'Lusaka, Zambia',
      type: 'Full-time',
    },
    {
      title: 'Community Engagement Officer',
      team: 'Outreach',
      location: 'Various Provinces',
      type: 'Full-time',
    },
    {
      title: 'Environmental Data Analyst',
      team: 'Research',
      location: 'Hybrid',
      type: 'Full-time',
    },
    {
      title: 'Communications Associate',
      team: 'Communications',
      location: 'Remote',
      type: 'Part-time',
    },
  ];

  return (
    <main className="pt-6 pb-12">
      <header className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
          Careers at Centrica Foundation Zambia
        </h1>
        <p className="text-muted max-w-2xl">
          Join our mission to combat climate change and restore Zambia's
          ecosystems. We value diverse perspectives and lived experience.
        </p>
      </header>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6">
          Current Openings
        </h2>
        <div className="space-y-6">
          {roles.map((role, idx) => (
            <article
              key={idx}
              className="p-6 bg-surface border border-border rounded-xl hover:border-primary/50 transition-colors duration-200"
            >
              <div className="flex justify-between items-start flex-col md:flex-row gap-4">
                <div>
                  <h3 className="text-xl font-bold text-foreground">
                    {role.title}
                  </h3>
                  <p className="text-sm text-primary font-medium">
                    {role.team}
                  </p>
                </div>
                <div className="flex flex-col gap-1 md:items-end">
                  <span className="text-xs font-medium text-muted">
                    {role.location}
                  </span>
                  <span className="px-2 py-1 rounded-full text-xs font-medium bg-primary-soft text-primary">
                    {role.type}
                  </span>
                </div>
              </div>
              <button className="mt-4 text-primary font-medium hover:underline inline-flex items-center gap-1">
                Learn More & Apply
                <span aria-hidden="true">&rarr;</span>
              </button>
            </article>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-foreground mb-6">
          Why Work With Us?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-surface rounded-xl border border-border">
            <h3 className="text-xl font-bold text-foreground mb-2">
              Mission-Driven
            </h3>
            <p className="text-muted">
              Work on solutions that directly combat climate change and restore
              Zambia's ecosystems.
            </p>
          </div>
          <div className="p-6 bg-surface rounded-xl border border-border">
            <h3 className="text-xl font-bold text-foreground mb-2">
              Flexible Work
            </h3>
            <p className="text-muted">
              We support remote and hybrid models to ensure access across
              Zambia.
            </p>
          </div>
          <div className="p-6 bg-surface rounded-xl border border-border">
            <h3 className="text-xl font-bold text-foreground mb-2">
              Growth Focus
            </h3>
            <p className="text-muted">
              Invest in your skills with mentorship and continuous learning.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}