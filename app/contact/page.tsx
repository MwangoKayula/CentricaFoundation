export default function ContactPage() {
  return (
    <main className="pt-6 pb-12">
      <header className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
          Get in Touch
        </h1>
        <p className="text-muted max-w-2xl">
          Have a question? Want to collaborate? Reach out to our team. We'd love
          to hear from you.
        </p>
      </header>

{/* ============================================================
    GOOGLE MAPS EMBED — Pembroke Court Flats, Lusaka
    Coordinates: -15.412283708922256, 28.288042048333423
    ============================================================ */}
<section className="mb-12">
  <div className="w-full aspect-video rounded-xl overflow-hidden border border-border shadow-sm">
    <iframe
      src="https://maps.google.com/maps?q=-15.412283708922256,28.288042048333423&t=&z=17&ie=UTF8&iwloc=&output=embed"
      title="Centrica Foundation Zambia — Office Location"
      className="w-full h-full"
      style={{ border: 0 }}
      loading="lazy"
      allowFullScreen
      referrerPolicy="no-referrer-when-downgrade"
    />
  </div>
  <p className="text-sm text-muted mt-3 text-center">
    Plot 4399 Pembroke Court Flats, Makishi Rd, Lusaka, Zambia
  </p>
</section>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-8">
            Contact Information
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-foreground mb-2">Email</h3>
              <a
                href="mailto:centricafoundationzambia@gmail.com"
                className="text-muted hover:text-primary transition-colors break-all"
              >
                centricafoundationzambia@gmail.com
              </a>
            </div>
            <div>
              <h3 className="text-lg font-bold text-foreground mb-2">Phone</h3>
              <a
                href="tel:+260967954403"
                className="text-muted hover:text-primary transition-colors"
              >
                +260 967954403
              </a>
            </div>
            <div>
              <h3 className="text-lg font-bold text-foreground mb-2">Address</h3>
              <p className="text-muted">
                Plot 4399 Pembroke Court Flats
                <br />
                Makishi Rd, Lusaka
                <br />
                Zambia
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-foreground mb-2">
                Office Hours
              </h3>
              <p className="text-muted">
                Mon–Fri: 8 AM – 5 PM CAT
                <br />
                Weekends: Closed
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-8">
            Send Us a Message
          </h2>
          <form className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-foreground mb-1"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Your name"
                className="w-full px-4 py-3 bg-surface border border-border rounded-lg text-foreground placeholder:text-muted focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-foreground mb-1"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="you@example.com"
                className="w-full px-4 py-3 bg-surface border border-border rounded-lg text-foreground placeholder:text-muted focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-foreground mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                placeholder="How can we help?"
                className="w-full px-4 py-3 bg-surface border border-border rounded-lg text-foreground placeholder:text-muted resize-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-hover transition-colors duration-200 font-medium shadow-sm"
            >
              Send Message
            </button>
          </form>
        </section>
      </div>
    </main>
  );
}