'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const saved = (localStorage.getItem('theme') as 'light' | 'dark') || 'light';
    setTheme(saved);
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const next = theme === 'light' ? 'dark' : 'light';
    setTheme(next);
    localStorage.setItem('theme', next);
    document.documentElement.classList.toggle('dark', next === 'dark');
  };

  const closeMenu = () => setMobileMenuOpen(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/projects', label: 'Projects' },
    { href: '/careers', label: 'Careers' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="bg-surface/80 backdrop-blur-md border-b border-border sticky top-0 z-50">
      {/* Top bar */}
      <div className="px-4 py-3">
        <div className="max-w-7xl mx-auto flex justify-between items-center gap-4">
          {/* Logo + Brand */}
          <Link
            href="/"
            className="flex items-center gap-3 text-foreground group"
            onClick={closeMenu}
          >
            <Image
              src="/centrica-logo.png"
              alt="Centrica Foundation Zambia"
              width={40}
              height={40}
              className="group-hover:scale-110 transition-transform duration-200"
            />
            <span className="text-base sm:text-lg font-bold tracking-tight md:text-xl">
              Centrica Foundation Zambia
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-muted hover:text-primary transition-colors duration-200 font-medium"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/donations"
              className="bg-primary text-white px-4 py-2 rounded-lg font-medium hover:bg-primary-hover transition-colors duration-200"
            >
              Donate
            </Link>
          </div>

          {/* Theme Toggle + Mobile Menu Button */}
          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-primary-soft transition-colors duration-200 text-muted hover:text-primary"
              aria-label="Toggle theme"
            >
              {mounted && theme === 'dark' ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="5"></circle>
                  <line x1="12" y1="1" x2="12" y2="3"></line>
                  <line x1="12" y1="21" x2="12" y2="23"></line>
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                  <line x1="1" y1="12" x2="3" y2="12"></line>
                  <line x1="21" y1="12" x2="23" y2="12"></line>
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                </svg>
              )}
            </button>

            {/* Mobile hamburger/close */}
            <button
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="md:hidden p-2 rounded-lg text-muted hover:text-primary hover:bg-primary-soft transition-colors"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                // X (close) icon
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              ) : (
                // Hamburger icon
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu panel */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-surface">
          <div className="px-4 py-4 max-w-7xl mx-auto flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="px-3 py-3 rounded-lg text-foreground font-medium hover:bg-primary-soft hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/donations"
              onClick={closeMenu}
              className="mt-2 bg-primary text-white text-center px-4 py-3 rounded-lg font-medium hover:bg-primary-hover transition-colors"
            >
              Donate
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}