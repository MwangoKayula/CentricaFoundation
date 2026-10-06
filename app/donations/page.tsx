import Link from 'next/link';

export default function DonationsPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4 sm:p-10">
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
          Support Our Mission
        </h1>
        <p className="text-xl text-muted max-w-2xl mx-auto">
          Your donation helps us combat climate change through collaborative
          tree planting and conservation initiatives. Every contribution fuels
          our projects in local communities across Zambia.
        </p>
      </header>

      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {/* Tier 1 */}
        <div className="bg-surface p-8 rounded-xl shadow-sm border border-border flex flex-col justify-between">
          <div>
            <span className="text-sm font-semibold text-muted">Supporter</span>
            <h2 className="text-3xl font-bold text-foreground mt-2">ZMW 250</h2>
            <p className="text-muted mt-2">
              Plants and cares for 10 indigenous trees.
            </p>
          </div>
          <Link
            href="/contact"
            className="mt-6 w-full text-center bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-hover transition-colors font-medium"
          >
            Donate ZMW 250
          </Link>
        </div>

        {/* Tier 2 - Recommended */}
        <div className="bg-surface p-8 rounded-xl shadow-lg border-2 border-primary flex flex-col justify-between">
          <div>
            <span className="text-sm font-semibold text-primary">
              Recommended
            </span>
            <h2 className="text-3xl font-bold text-foreground mt-2">ZMW 1,000</h2>
            <p className="text-muted mt-2">
              Funds a community tree planting workshop.
            </p>
          </div>
          <Link
            href="/contact"
            className="mt-6 w-full text-center bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-hover transition-colors font-medium"
          >
            Donate ZMW 1,000
          </Link>
        </div>

        {/* Tier 3 */}
        <div className="bg-surface p-8 rounded-xl shadow-sm border border-border flex flex-col justify-between">
          <div>
            <span className="text-sm font-semibold text-muted">
              Major Impact
            </span>
            <h2 className="text-3xl font-bold text-foreground mt-2">ZMW 5,000</h2>
            <p className="text-muted mt-2">
              Sponsors a full ecosystem restoration project.
            </p>
          </div>
          <Link
            href="/contact"
            className="mt-6 w-full text-center bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-hover transition-colors font-medium"
          >
            Donate ZMW 5,000
          </Link>
        </div>
      </div>

      <section className="w-full max-w-4xl text-center px-4">
        <h2 className="text-2xl font-bold text-foreground mb-6">
          Why Donate to Centrica Foundation Zambia?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-lg text-foreground mb-2">
              100% Transparency
            </h3>
            <p className="text-muted">
              We publish quarterly reports showing exactly how funds are used.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg text-foreground mb-2">
              Community Led
            </h3>
            <p className="text-muted">
              Funds go directly to community leaders who know the needs best.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg text-foreground mb-2">
              Tangible Results
            </h3>
            <p className="text-muted">
              You'll receive updates on the specific impact of your donation.
            </p>
          </div>
        </div>
      </section>

      <footer className="mt-16 text-center text-muted text-sm">
        <p>All donations are tax-deductible for eligible donors.</p>
      </footer>
    </main>
  );
}