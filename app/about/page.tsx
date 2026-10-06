export default function AboutPage() {
  return (
    <main className="pt-6 pb-12">
      <header className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
          About Centrica Foundation Zambia
        </h1>
        <p className="text-muted max-w-2xl">
          We are a non-governmental, non-profit organisation dedicated to
          combating climate change through collaborative tree planting and
          conservation initiatives.
        </p>
      </header>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6">Our Mission</h2>
        <p className="text-muted mb-4">
          To combat climate change by partnering with local authorities, NGOs,
          and communities to restore ecosystems and promote sustainable land
          use. We work to ensure that Zambia's natural heritage thrives for
          future generations.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 bg-surface rounded-xl border border-border">
            <h3 className="text-xl font-bold text-foreground mb-2">
              Collaboration
            </h3>
            <p className="text-muted">
              We achieve more by working together with local authorities, NGOs,
              and communities.
            </p>
          </div>
          <div className="p-6 bg-surface rounded-xl border border-border">
            <h3 className="text-xl font-bold text-foreground mb-2">
              Conservation
            </h3>
            <p className="text-muted">
              We are committed to restoring ecosystems and promoting sustainable
              land use.
            </p>
          </div>
          <div className="p-6 bg-surface rounded-xl border border-border">
            <h3 className="text-xl font-bold text-foreground mb-2">
              Community-Led
            </h3>
            <p className="text-muted">
              We empower local communities to lead climate adaptation efforts.
            </p>
          </div>
          <div className="p-6 bg-surface rounded-xl border border-border">
            <h3 className="text-xl font-bold text-foreground mb-2">
              Transparency
            </h3>
            <p className="text-muted">
              We share our methods, data, and outcomes openly.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-foreground mb-6">
          Get Involved
        </h2>
        <p className="text-muted mb-8">
          Whether you're a community member, researcher, or advocate, we welcome
          your collaboration.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="/contact"
            className="inline-block bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-hover transition-colors duration-200 font-medium text-center"
          >
            Contact Us
          </a>
          <a
            href="/donations"
            className="inline-block bg-surface border border-border text-foreground px-6 py-3 rounded-lg hover:bg-primary-soft transition-colors duration-200 text-center"
          >
            Donate
          </a>
        </div>
      </section>
    </main>
  );
}