import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <div className="flex-grow p-4 sm:p-8 max-w-7xl mx-auto w-full">

        {/* HERO SECTION */}
        <section className="mb-12 pb-8 border-b border-border">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight mb-6">
            Combating Climate Change<br />
            <span className="text-primary">Through Collaborative Action</span>
          </h1>
          <p className="text-xl text-muted max-w-2xl mb-8">
            Our foundation is dedicated to combating climate change through
            collaborative tree planting and conservation initiatives. By partnering
            with local authorities, NGOs, and communities, we work to restore
            ecosystems and promote sustainable land use.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/projects"
              className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-hover transition-colors font-medium text-center"
            >
              Explore Our Projects
            </Link>
            <Link
              href="/donations"
              className="bg-surface border border-border text-foreground px-6 py-3 rounded-lg hover:bg-primary-soft transition-colors text-center"
            >
              Support Our Work
            </Link>
          </div>
        </section>

        {/* MAIN LAYOUT: Grid for Desktop, Stack for Mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

          {/* MAIN CONTENT COLUMN */}
          <div className="lg:col-span-3">

            {/* FOCUS AREAS */}
            <section className="mb-16">
              <h2
                id="about"
                className="text-3xl font-bold text-foreground mb-8 text-center"
              >
                Our Approach
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="p-6 bg-surface rounded-xl shadow-sm border border-border">
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    Collaborative
                  </h3>
                  <p className="text-muted">
                    We partner with local authorities, NGOs, and communities to
                    ensure every initiative is rooted in local knowledge and
                    ownership.
                  </p>
                </div>
                <div className="p-6 bg-surface rounded-xl shadow-sm border border-border">
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    Conservation-First
                  </h3>
                  <p className="text-muted">
                    Every project is designed to restore ecosystems and protect
                    Zambia's natural heritage for future generations.
                  </p>
                </div>
                <div className="p-6 bg-surface rounded-xl shadow-sm border border-border">
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    Sustainable
                  </h3>
                  <p className="text-muted">
                    We promote sustainable land use practices that balance
                    ecological health with community livelihoods.
                  </p>
                </div>
              </div>
            </section>

            {/* STATISTICS CTA */}
            <section className="mb-16 bg-primary-soft rounded-xl p-8 text-center">
              <div className="mb-6">
                <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                  Our Commitment
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <div className="text-4xl font-bold text-foreground">1000+</div>
                  <div className="text-muted">Trees Planted Annually</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-foreground">15+</div>
                  <div className="text-muted">Community Partnerships</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-foreground">5</div>
                  <div className="text-muted">Provinces Reached</div>
                </div>
              </div>
            </section>

            {/* DONATE CTA */}
            <section className="mb-16 bg-surface rounded-xl p-8 border border-border text-center">
              <h2 className="text-2xl font-bold text-foreground mb-3">
                Support Our Mission
              </h2>
              <p className="text-muted max-w-2xl mx-auto mb-6">
                Your donation directly funds tree planting and conservation
                projects in local communities across Zambia.
              </p>
              <Link
                href="/donations"
                className="inline-block bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-hover transition-colors font-medium"
              >
                Donate Now
              </Link>
            </section>

          </div>

          {/* SIDEBAR: News & Updates */}
          <aside className="lg:col-span-1 flex flex-col gap-6">
            <div className="bg-surface p-6 rounded-xl shadow-sm border border-border">
              <h3 className="text-xl font-bold text-foreground mb-4 border-b border-border pb-3">
                Latest Updates
              </h3>
              <div className="space-y-5">

                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-primary-soft text-primary flex items-center justify-center rounded-full text-sm font-bold shrink-0">
                    01
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      Tree Planting Drive
                    </p>
                    <p className="text-xs text-muted">
                      Lusaka Province
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-primary-soft text-primary flex items-center justify-center rounded-full text-sm font-bold shrink-0">
                    02
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      School Greening Partnership
                    </p>
                    <p className="text-xs text-muted">
                      Local Schools Program
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-primary-soft text-primary flex items-center justify-center rounded-full text-sm font-bold shrink-0">
                    03
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      Community Workshop
                    </p>
                    <p className="text-xs text-muted">
                      Sustainable Land Use
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Newsletter */}
            <div className="bg-primary-soft p-6 rounded-xl">
              <h4 className="text-lg font-bold text-foreground mb-3">
                Stay Connected
              </h4>
              <p className="text-sm text-muted mb-4">
                Get monthly updates on our work and how you can help.
              </p>
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-3 py-2 rounded-md bg-surface border border-border text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary mb-3"
              />
              <button className="w-full bg-primary text-white py-2 rounded-md hover:bg-primary-hover transition-colors font-medium">
                Subscribe
              </button>
            </div>
          </aside>

        </div>
      </div>
    </main>
  );
}