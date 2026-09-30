'use client';

import React from 'react';
import Link from 'next/link';
import { useTheme } from '@/context/ThemeContext';
import CadenceLogo from './CadenceLogo';

export default function CadenceFooter() {
  const { theme, toggleTheme } = useTheme();

  return (
    <footer className="w-full bg-surface-container-lowest border-t border-outline-variant pt-16 pb-12 transition-colors">
      <div className="max-w-7xl mx-auto px-margin">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-space-xl pb-16 border-b border-outline-variant">
          {/* Column 1-2: Brand & Theme Toggle */}
          <div className="lg:col-span-2 flex flex-col gap-space-md pr-space-lg">
            <Link href="/" className="inline-block">
              <CadenceLogo className="h-7 w-auto" />
            </Link>
            <p className="font-body-dense text-body-dense text-on-surface-variant leading-relaxed max-w-sm">
              Constraint-based production scheduling that turns factory capacity into executable plans. Deterministic CP-SAT engine.
            </p>
            <div className="flex items-center gap-space-sm pt-space-xs">
              <button
                onClick={toggleTheme}
                className="inline-flex items-center gap-space-xs px-space-sm py-1.5 rounded-lg border border-outline-variant bg-surface text-on-surface hover:bg-surface-container font-body-dense text-body-dense transition-colors"
                type="button"
                id="footer-theme-toggle"
              >
                <span className="material-symbols-outlined text-[16px]">palette</span>
                <span id="footer-theme-label" className="font-tabular-mono-dense capitalize">
                  Theme: {theme}
                </span>
              </button>
            </div>
          </div>

          {/* Column 3: Product */}
          <div className="flex flex-col gap-space-sm">
            <span className="font-eyebrow text-eyebrow uppercase text-on-surface-variant font-semibold tracking-wider">
              Product
            </span>
            <Link href="/#gantt-preview" className="font-body-dense text-body-dense text-on-surface-variant hover:text-on-surface transition-colors">
              Constraint Solver
            </Link>
            <Link href="/#gantt-preview" className="font-body-dense text-body-dense text-on-surface-variant hover:text-on-surface transition-colors">
              Interactive Gantt
            </Link>
            <Link href="/how-it-works" className="font-body-dense text-body-dense text-on-surface-variant hover:text-on-surface transition-colors">
              Sequence Matrix
            </Link>
            <Link href="/roi-calculator" className="font-body-dense text-body-dense text-on-surface-variant hover:text-on-surface transition-colors">
              ROI Payback Model
            </Link>

          </div>

          {/* Column 4: Solutions */}
          <div className="flex flex-col gap-space-sm">
            <span className="font-eyebrow text-eyebrow uppercase text-on-surface-variant font-semibold tracking-wider">
              Solutions
            </span>
            <Link href="/solutions#fmcg" className="font-body-dense text-body-dense text-on-surface-variant hover:text-on-surface transition-colors">
              FMCG Operations
            </Link>
            <Link href="/solutions#pharma" className="font-body-dense text-body-dense text-on-surface-variant hover:text-on-surface transition-colors">
              Pharma & Life Sciences
            </Link>
            <Link href="/solutions#food" className="font-body-dense text-body-dense text-on-surface-variant hover:text-on-surface transition-colors">
              Food & Beverage
            </Link>
            <Link href="/solutions#converting" className="font-body-dense text-body-dense text-on-surface-variant hover:text-on-surface transition-colors">
              Precision Converting
            </Link>
            <Link href="/solutions#automotive" className="font-body-dense text-body-dense text-on-surface-variant hover:text-on-surface transition-colors">
              Automotive Tier 1
            </Link>
          </div>

          {/* Column 5: Resources */}
          <div className="flex flex-col gap-space-sm">
            <span className="font-eyebrow text-eyebrow uppercase text-on-surface-variant font-semibold tracking-wider">
              Resources
            </span>
            <Link href="/case-studies" className="font-body-dense text-body-dense text-on-surface-variant hover:text-on-surface transition-colors">
              Case Studies
            </Link>
            <Link href="/integrations" className="font-body-dense text-body-dense text-on-surface-variant hover:text-on-surface transition-colors">
              Integration Connectors
            </Link>
            <Link href="/docs" className="font-body-dense text-body-dense text-on-surface-variant hover:text-on-surface transition-colors">
              CP-SAT API Reference
            </Link>
            <Link href="/book-a-demo" className="font-body-dense text-body-dense text-on-surface-variant hover:text-on-surface transition-colors">
              Pilot Evaluation
            </Link>
          </div>

          {/* Column 6: Company */}
          <div className="flex flex-col gap-space-sm">
            <span className="font-eyebrow text-eyebrow uppercase text-on-surface-variant font-semibold tracking-wider">
              Company
            </span>
            <Link href="/company" className="font-body-dense text-body-dense text-on-surface-variant hover:text-on-surface transition-colors">
              The Quantum Primes
            </Link>
            <Link href="/contact" className="font-body-dense text-body-dense text-primary hover:text-primary-container font-semibold transition-colors">
              Contact Desk
            </Link>
            <a href="mailto:thequantumprimes@gmail.com" className="font-body-dense text-body-dense text-on-surface-variant hover:text-on-surface transition-colors">
              thequantumprimes@gmail.com
            </a>
            <Link href="/company#flagship-product" className="font-body-dense text-body-dense text-on-surface-variant hover:text-on-surface transition-colors">
              Scheduler Architecture
            </Link>
            <Link href="/security" className="font-body-dense text-body-dense text-on-surface-variant hover:text-on-surface transition-colors">
              Security & Compliance
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-space-lg flex flex-col md:flex-row items-center justify-between gap-space-md text-on-surface-variant font-tabular-mono-dense text-tabular-mono-dense">
          <div className="flex items-center gap-space-md flex-wrap">
            <span>© 2026 The Quantum Primes. All rights reserved.</span>
            <div className="inline-flex items-center gap-1.5 text-on-surface">
              <span className="w-2 h-2 rounded-full bg-secondary inline-block animate-pulse"></span>
              <span>CP-SAT Solver Engine Active (99.98% uptime)</span>
            </div>
          </div>
          <div className="flex items-center gap-space-lg">
            <Link href="/contact" className="hover:text-on-surface transition-colors">
              Contact Support
            </Link>
            <Link href="/security" className="hover:text-on-surface transition-colors">
              SOC 2 Type II
            </Link>
            <Link href="/docs" className="hover:text-on-surface transition-colors">
              OpenAPI v3
            </Link>
            <a
              href="http://localhost:5173"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline font-medium"
            >
              Launch Scheduler Demo (5173) →
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
