'use client';

import Link from 'next/link';
import { useState } from 'react';

const presetTiers = [
  {
    id: 'supporter',
    label: 'Supporter',
    amount: 25,
    description: 'Plants and cares for 10 indigenous trees.',
    featured: false,
  },
  {
    id: 'recommended',
    label: 'Recommended',
    amount: 100,
    description: 'Funds a community tree planting workshop.',
    featured: true,
  },
  {
    id: 'major',
    label: 'Major Impact',
    amount: 500,
    description: 'Sponsors a full ecosystem restoration project.',
    featured: false,
  },
];

export default function DonationsPage() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [isMonthly, setIsMonthly] = useState(false);

  // Determine the effective amount: custom input overrides preset
  const effectiveAmount = customAmount
    ? parseFloat(customAmount)
    : selectedAmount ?? 0;

  const handleCustomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Only allow numbers and one decimal point
    const value = e.target.value;
    if (/^\d*\.?\d{0,2}$/.test(value)) {
      setCustomAmount(value);
      setSelectedAmount(null); // deselect preset when typing custom
    }
  };

  const handlePresetClick = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount(''); // clear custom when preset selected
  };

  const handleDonate = () => {
    // Placeholder — you'll wire this to Stripe/PayPal/Flutterwave later
    alert(
      `Donation of $${effectiveAmount.toFixed(2)} ${
        isMonthly ? 'per month' : 'one-time'
      } — payment integration coming soon.`
    );
  };

  return (
    <main className="min-h-screen flex flex-col items-center p-4 sm:p-10">
      <header className="text-center mb-12 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
          Support Our Mission
        </h1>
        <p className="text-xl text-muted">
          Your donation helps us combat climate change through collaborative
          tree planting and conservation initiatives. Every contribution fuels
          our projects in local communities across Zambia.
        </p>
      </header>

      {/* One-time vs Monthly toggle */}
      <div className="mb-8 inline-flex rounded-full border border-border bg-surface p-1">
        <button
          onClick={() => setIsMonthly(false)}
          className={`px-6 py-2 rounded-full font-medium transition-colors ${
            !isMonthly
              ? 'bg-primary text-white'
              : 'text-muted hover:text-primary'
          }`}
        >
          One-time
        </button>
        <button
          onClick={() => setIsMonthly(true)}
          className={`px-6 py-2 rounded-full font-medium transition-colors ${
            isMonthly
              ? 'bg-primary text-white'
              : 'text-muted hover:text-primary'
          }`}
        >
          Monthly
        </button>
      </div>

      {/* Preset tiers */}
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
        {presetTiers.map((tier) => {
          const isSelected = selectedAmount === tier.amount && !customAmount;

          return (
            <button
              key={tier.id}
              onClick={() => handlePresetClick(tier.amount)}
              className={`text-left p-8 rounded-xl flex flex-col justify-between transition-all duration-200 ${
                tier.featured
                  ? 'border-2 border-primary shadow-lg'
                  : 'border border-border shadow-sm hover:border-primary/50'
              } ${
                isSelected
                  ? 'ring-2 ring-primary ring-offset-2 ring-offset-background'
                  : ''
              } bg-surface`}
            >
              <div>
                <span
                  className={`text-sm font-semibold ${
                    tier.featured ? 'text-primary' : 'text-muted'
                  }`}
                >
                  {tier.label}
                </span>
                <h2 className="text-3xl font-bold text-foreground mt-2">
                  ${tier.amount}
                  {isMonthly && (
                    <span className="text-base font-medium text-muted"> /mo</span>
                  )}
                </h2>
                <p className="text-muted mt-2">{tier.description}</p>
              </div>
              <div
                className={`mt-6 w-full text-center px-4 py-2 rounded-lg font-medium transition-colors ${
                  isSelected
                    ? 'bg-primary text-white'
                    : 'bg-primary-soft text-primary'
                }`}
              >
                {isSelected ? '✓ Selected' : `Choose $${tier.amount}`}
              </div>
            </button>
          );
        })}
      </div>

      {/* Custom amount */}
      <div className="w-full max-w-2xl bg-surface border border-border rounded-xl p-8 mb-10">
        <h3 className="text-xl font-bold text-foreground mb-2">
          Or enter your own amount
        </h3>
        <p className="text-sm text-muted mb-4">
          Every dollar counts. Choose the amount that feels right for you.
        </p>

        <div className="flex items-center gap-3">
          <div className="relative flex-grow">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted font-medium">
              $
            </span>
            <input
              type="text"
              inputMode="decimal"
              value={customAmount}
              onChange={handleCustomChange}
              placeholder="0.00"
              className="w-full pl-8 pr-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary text-lg font-medium"
            />
          </div>
          {isMonthly && (
            <span className="text-muted font-medium whitespace-nowrap">
              / month
            </span>
          )}
        </div>
      </div>

      {/* Donate CTA */}
      <button
        onClick={handleDonate}
        disabled={!effectiveAmount || effectiveAmount <= 0}
        className="bg-primary text-white px-10 py-4 rounded-lg font-medium text-lg hover:bg-primary-hover transition-colors shadow-sm disabled:opacity-40 disabled:cursor-not-allowed"
      >
        {effectiveAmount > 0
          ? `Donate $${effectiveAmount.toFixed(2)}${
              isMonthly ? ' / month' : ''
            }`
          : 'Select an amount'}
      </button>

      {/* Why donate */}
      <section className="w-full max-w-4xl text-center px-4 mt-20">
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
        <p>
          All donations are tax-deductible for eligible donors. Payment
          processing coming soon.
        </p>
      </footer>
    </main>
  );
}