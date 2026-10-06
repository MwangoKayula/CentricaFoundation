import Link from 'next/link';
import Image from 'next/image'; // Import Image

const quickLinks = [
  { href: '/about', label: 'About Us' },
  { href: '/projects', label: 'Our Projects' },
  { href: '/careers', label: 'Careers' },
  { href: '/donations', label: 'Donate' },
  { href: '/contact', label: 'Contact' },
];

const resourceLinks = [
  { href: '/reports', label: 'Annual Reports' },
  { href: '/privacy', label: 'Privacy Policy' },
  { href: '/terms', label: 'Terms of Service' },
  { href: '/accessibility', label: 'Accessibility' },
];

const socials = [
  {
    href: 'https://www.facebook.com/profile.php?id=61555274267843',
    label: 'Facebook',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
  },
];

interface FooterProps {
  locale?: string;
  t?: Record<string, string>;
}

export default function Footer({ locale = 'en', t = {} }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-surface border-t border-border text-muted mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12">
        {/* Top row: brand + columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          {/* Brand column */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4 text-foreground">
              <Image
                src="/centrica-logo.png"
                alt="Centrica Foundation Zambia"
                width={36}
                height={36}
              />
              <span className="text-lg font-bold tracking-tighter">
                Centrica Foundation Zambia
              </span>
            </Link>
            <p className="max-w-md leading-relaxed">
              Our foundation is dedicated to combating climate change through
              collaborative tree planting and conservation initiatives. We work to
              restore ecosystems, and promote sustainable land use.
            </p>

            {/* Social icons */}
            <div className="flex gap-3 mt-6">
              {socials.map((s) => (
                <a
                  key={s.href}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="p-2 rounded-full bg-primary-soft text-primary hover:bg-primary hover:text-white transition-colors duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-foreground font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-foreground font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {resourceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact & Newsletter */}
        <div className="border-t border-border pt-8 mb-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-foreground font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li>Plot 4399 Pembroke Court Flats, Makishi Rd, Lusaka, Zambia</li>
              <li>
                <a href="tel:+260967954403" className="hover:text-primary">
                  +260 967954403
                </a>
              </li>
              <li>
                <a href="mailto:centricaforestry@gmail.com" className="hover:text-primary">
                  centricaforestry@gmail.com
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-foreground font-semibold mb-4">Stay in the loop</h3>
            <p className="text-sm mb-4">
              Monthly updates on our work — no spam, unsubscribe anytime.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="you@example.com"
                className="flex-grow px-3 py-2 rounded-lg bg-background border border-border text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                type="submit"
                className="bg-primary text-white px-4 py-2 rounded-lg font-medium hover:bg-primary-hover transition-colors duration-200"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border pt-6 flex flex-col md:flex-row justify-between gap-4 text-sm">
          <p>
            © {year} Centrica Foundation Zambia. All rights reserved.
          </p>
          <p>
            Non-governmental organisation (NGO) · Non-profit organisation
          </p>
        </div>
      </div>
    </footer>
  );
}