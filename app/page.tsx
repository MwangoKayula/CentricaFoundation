import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <div className="flex-grow p-4 sm:p-8 max-w-7xl mx-auto w-full">

        {/* ============================================================
            PRIORITY 1 — HERO SECTION (text left, image right)
            ============================================================ */}
        <section className="mb-16 pb-8 border-b border-border grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground leading-tight mb-6">
              Combating Climate Change<br />
              <span className="text-primary">Through Collaborative Action</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted max-w-2xl mb-8">
              Our foundation is dedicated to combating climate change through
              collaborative tree planting and conservation initiatives. By
              partnering with local authorities, NGOs, and communities, we work
              to restore ecosystems and promote sustainable land use.
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
          </div>

          {/* Hero image — drop your file at public/images/hero-planting.jpg */}
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-border">
            <Image
              src="/images/hero-planting.jpg"
              alt="Community tree planting in Zambia"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </section>

        {/* ============================================================
            PRIORITY 2 — PHOTO GALLERY
            ============================================================ */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-3 text-center">
            Our Work in Action
          </h2>
          <p className="text-muted text-center max-w-2xl mx-auto mb-8">
            A glimpse into the communities, ecosystems, and people we work with
            across Zambia.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
            {[
              { src: '/images/gallery-1.jpg', alt: 'Community tree planting drive' },
              { src: '/images/gallery-2.jpg', alt: 'School greening initiative' },
              { src: '/images/gallery-3.jpg', alt: 'Community workshop on sustainable land use' },
              { src: '/images/gallery-4.jpg', alt: 'Seedlings in the nursery' },
              { src: '/images/gallery-5.jpg', alt: 'Volunteers working together' },
              { src: '/images/gallery-6.jpg', alt: 'Restored Zambian landscape' },
            ].map((img) => (
              <div
                key={img.src}
                className="relative aspect-square rounded-xl overflow-hidden border border-border group"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>
        </section>

        {/* ============================================================
            PRIORITY 3 — VIDEO SECTION (Facebook Reel)
            ============================================================ */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-3 text-center">
            See Our Impact
          </h2>
          <p className="text-muted text-center max-w-2xl mx-auto mb-8">
            Watch how your support translates into real change on the ground.
          </p>

          <div className="max-w-3xl mx-auto rounded-xl overflow-hidden border border-border shadow-lg bg-black">
            <div className="relative w-full" style={{ paddingTop: '177.78%' }}>
              {/* 177.78% aspect ratio = 9:16 vertical, ideal for Reels */}
              <iframe
                src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1582080566437508&show_text=false&width=560&height=996"
                title="Centrica Foundation Zambia — Our Work"
                className="absolute inset-0 w-full h-full"
                style={{ border: 'none', overflow: 'hidden' }}
                scrolling="no"
                frameBorder="0"
                allowFullScreen={true}
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              />
            </div>
          </div>
        </section>

        {/* ============================================================
            APPROACH / VALUES
            ============================================================ */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
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

            {/* STATS */}
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

          {/* SIDEBAR */}
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
                    <p className="text-xs text-muted">Lusaka Province</p>
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
                    <p className="text-xs text-muted">Local Schools Program</p>
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