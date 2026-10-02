'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from '@/context/ThemeContext';
import CadenceLogo from './CadenceLogo';

interface HeaderProps {
  onOpenDemoModal?: () => void;
}

export default function CadenceHeader({ onOpenDemoModal }: HeaderProps) {
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 16);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => {
    if (path === '/' && pathname === '/') return true;
    if (path !== '/' && pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled ? 'scrolled shadow-sm bg-surface/95 backdrop-blur-md' : 'bg-surface/90 backdrop-blur-sm'
      }`}
      id="site-header"
    >
      <div className="h-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        {/* Brand Logo & Version */}
        <div className="flex items-center gap-3 shrink-0">
          <Link href="/" className="flex items-center gap-2 group">
            <CadenceLogo className="h-7 w-auto transition-transform duration-200 group-hover:scale-[1.02]" />
          </Link>
          <div className="hidden sm:flex flex-col">
            <span className="text-[10px] uppercase font-bold tracking-wider text-primary">The Quantum Primes</span>
            <span className="text-[10px] text-on-surface-variant font-mono">APS Engine v2.4</span>
          </div>
        </div>

        {/* Desktop Navigation - Clean, perfectly spaced & uncrowded */}
        <nav className="hidden lg:flex items-center gap-3.5 xl:gap-7 h-full text-[13.5px] xl:text-[14px]">
          {/* Features with Mega Menu */}
          <div className="group relative h-full flex items-center">
            <Link
              href="/features"
              className={`transition-colors py-2 flex items-center gap-1 text-[14px] font-medium ${
                isActive('/features')
                  ? 'text-primary'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              <span>Features</span>
              <span className="material-symbols-outlined text-[15px] opacity-60 group-hover:rotate-180 transition-transform duration-200">
                expand_more
              </span>
            </Link>
            <div className="mega-menu opacity-0 invisible translate-y-1 transition-all duration-150 absolute top-14 -left-4 sm:-left-8 w-[540px] max-w-[calc(100vw-2rem)] bg-surface-container-lowest border border-outline-variant shadow-2xl rounded-2xl p-5 pointer-events-none grid grid-cols-2 gap-4 z-50">
              <Link
                href="/features"
                className="p-3 rounded-xl hover:bg-surface-container-low transition-all group/item"
              >
                <div className="font-medium text-[15px] text-on-surface mb-1 flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-[18px]">account_tree</span>
                  <span>CP-SAT Discrete Engine</span>
                </div>
                <div className="text-[13px] text-on-surface-variant leading-snug">
                  Deterministic mathematical CP-SAT core capabilities.
                </div>
              </Link>
              <Link
                href="/how-it-works"
                className="p-3 rounded-xl hover:bg-surface-container-low transition-all group/item"
              >
                <div className="font-medium text-[15px] text-on-surface mb-1 flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-[18px]">tune</span>
                  <span>How It Works</span>
                </div>
                <div className="text-[13px] text-on-surface-variant leading-snug">
                  Mathematical engine architecture and 4-stage pipeline.
                </div>
              </Link>
              <Link
                href="/#gantt-preview"
                className="p-3 rounded-xl hover:bg-surface-container-low transition-all group/item"
              >
                <div className="font-medium text-[15px] text-on-surface mb-1 flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-[18px]">view_timeline</span>
                  <span>Interactive Gantt</span>
                </div>
                <div className="text-[13px] text-on-surface-variant leading-snug">
                  Sub-second shift dispatch control with live re-solve simulation.
                </div>
              </Link>
              <Link
                href="/integrations"
                className="p-3 rounded-xl hover:bg-surface-container-low transition-all group/item"
              >
                <div className="font-medium text-[15px] text-on-surface mb-1 flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-[18px]">sync_alt</span>
                  <span>Bi-Directional Sync</span>
                </div>
                <div className="text-[13px] text-on-surface-variant leading-snug">
                  Real-time ERP &amp; MES telemetry handshake.
                </div>
              </Link>
            </div>
          </div>

          {/* Solutions with Mega Menu */}
          <div className="group relative h-full flex items-center">
            <Link
              href="/solutions"
              className={`transition-colors py-2 flex items-center gap-1 text-[14px] font-medium ${
                isActive('/solutions')
                  ? 'text-primary'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              <span>Solutions</span>
              <span className="material-symbols-outlined text-[15px] opacity-60 group-hover:rotate-180 transition-transform duration-200">
                expand_more
              </span>
            </Link>
            <div className="mega-menu opacity-0 invisible translate-y-1 transition-all duration-150 absolute top-14 -left-4 sm:-left-8 w-[540px] max-w-[calc(100vw-2rem)] bg-surface-container-lowest border border-outline-variant shadow-2xl rounded-2xl p-5 pointer-events-none grid grid-cols-2 gap-4 z-50">
              <Link
                href="/solutions"
                className="p-3 rounded-xl hover:bg-surface-container-low transition-all group/item"
              >
                <div className="font-medium text-[15px] text-on-surface mb-1 flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-[18px]">account_tree</span>
                  <span>Advanced Planning &amp; Scheduling</span>
                </div>
                <div className="text-[13px] text-on-surface-variant leading-snug">
                  Finite-capacity APS core for multi-plant discrete factories.
                </div>
              </Link>
              <Link
                href="/solutions#how-it-works-eyelit"
                className="p-3 rounded-xl hover:bg-surface-container-low transition-all group/item"
              >
                <div className="font-medium text-[15px] text-on-surface mb-1 flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-[18px]">tune</span>
                  <span>Plan &amp; Schedule in One Model</span>
                </div>
                <div className="text-[13px] text-on-surface-variant leading-snug">
                  4-stage workflow: capacity, change, visibility &amp; deployment.
                </div>
              </Link>
              <Link
                href="/solutions"
                className="p-3 rounded-xl hover:bg-surface-container-low transition-all group/item"
              >
                <div className="font-medium text-[15px] text-on-surface mb-1 flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-[18px]">psychology</span>
                  <span>Industrial Agent AI</span>
                </div>
                <div className="text-[13px] text-on-surface-variant leading-snug">
                  Agentic connective tissue with Caddy Mode governance.
                </div>
              </Link>
              <Link
                href="/case-studies"
                className="p-3 rounded-xl hover:bg-surface-container-low transition-all group/item"
              >
                <div className="font-medium text-[15px] text-on-surface mb-1 flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-[18px]">verified</span>
                  <span>Plant Outcomes &amp; Case Studies</span>
                </div>
                <div className="text-[13px] text-on-surface-variant leading-snug">
                  Real plant benchmarks, OEE gains, and setup reductions.
                </div>
              </Link>
            </div>
          </div>

          {/* Industries with Mega Menu */}
          <div className="group relative h-full flex items-center">
            <Link
              href="/industries"
              className={`transition-colors py-2 flex items-center gap-1 text-[14px] font-medium ${
                isActive('/industries')
                  ? 'text-primary'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              <span>Industries</span>
              <span className="material-symbols-outlined text-[15px] opacity-60 group-hover:rotate-180 transition-transform duration-200">
                expand_more
              </span>
            </Link>
            <div className="mega-menu opacity-0 invisible translate-y-1 transition-all duration-150 absolute top-14 -left-4 sm:-left-8 w-[540px] max-w-[calc(100vw-2rem)] bg-surface-container-lowest border border-outline-variant shadow-2xl rounded-2xl p-5 pointer-events-none grid grid-cols-2 gap-4 z-50">
              <Link
                href="/industries"
                className="p-3 rounded-xl hover:bg-surface-container-low transition-all"
              >
                <div className="font-medium text-[15px] text-on-surface mb-1 flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-[18px]">conveyor_belt</span>
                  <span>FMCG & Packaged Goods</span>
                </div>
                <div className="text-[13px] text-on-surface-variant leading-snug">
                  Allergen sequence cleanout and high-speed multi-SKU packaging.
                </div>
              </Link>
              <Link
                href="/industries"
                className="p-3 rounded-xl hover:bg-surface-container-low transition-all"
              >
                <div className="font-medium text-[15px] text-on-surface mb-1 flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-[18px]">vaccines</span>
                  <span>Pharma & Life Sciences</span>
                </div>
                <div className="text-[13px] text-on-surface-variant leading-snug">
                  GMP cleanroom validation and campaign batch allocation.
                </div>
              </Link>
              <Link
                href="/industries"
                className="p-3 rounded-xl hover:bg-surface-container-low transition-all"
              >
                <div className="font-medium text-[15px] text-on-surface mb-1 flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-[18px]">view_column</span>
                  <span>Precision Converting</span>
                </div>
                <div className="text-[13px] text-on-surface-variant leading-snug">
                  Multi-spindle die orchestration and web slitter scheduling.
                </div>
              </Link>
              <Link
                href="/industries"
                className="p-3 rounded-xl hover:bg-surface-container-low transition-all"
              >
                <div className="font-medium text-[15px] text-on-surface mb-1 flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-[18px]">science</span>
                  <span>Chemicals & Resins</span>
                </div>
                <div className="text-[13px] text-on-surface-variant leading-snug">
                  Continuous reactor vessel tracking and hazard matrix balancing.
                </div>
              </Link>
            </div>
          </div>

          {/* Integrations with Mega Menu */}
          <div className="group relative h-full flex items-center">
            <Link
              href="/integrations"
              className={`transition-colors py-2 flex items-center gap-1 text-[14px] font-medium ${
                isActive('/integrations')
                  ? 'text-primary'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              <span>Integrations</span>
              <span className="material-symbols-outlined text-[15px] opacity-60 group-hover:rotate-180 transition-transform duration-200">
                expand_more
              </span>
            </Link>
            <div className="mega-menu opacity-0 invisible translate-y-1 transition-all duration-150 absolute top-14 -left-4 sm:-left-8 w-[500px] max-w-[calc(100vw-2rem)] bg-surface-container-lowest border border-outline-variant shadow-2xl rounded-2xl p-5 pointer-events-none grid grid-cols-2 gap-4 z-50">
              <Link
                href="/integrations#erp"
                className="p-3 rounded-xl hover:bg-surface-container-low transition-all"
              >
                <div className="font-medium text-[15px] text-on-surface mb-1 flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-[18px]">database</span>
                  <span>ERP Connectors</span>
                </div>
                <div className="text-[13px] text-on-surface-variant leading-snug">
                  SAP S/4HANA, NetSuite, Dynamics 365 &amp; Odoo.
                </div>
              </Link>
              <Link
                href="/integrations#mes"
                className="p-3 rounded-xl hover:bg-surface-container-low transition-all"
              >
                <div className="font-medium text-[15px] text-on-surface mb-1 flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-[18px]">precision_manufacturing</span>
                  <span>MES &amp; SCADA</span>
                </div>
                <div className="text-[13px] text-on-surface-variant leading-snug">
                  Plex, AVEVA Wonderware, OPC-UA &amp; Ignition.
                </div>
              </Link>
              <Link
                href="/docs"
                className="p-3 rounded-xl hover:bg-surface-container-low transition-all"
              >
                <div className="font-medium text-[15px] text-on-surface mb-1 flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-[18px]">terminal</span>
                  <span>REST API &amp; Webhooks</span>
                </div>
                <div className="text-[13px] text-on-surface-variant leading-snug">
                  OpenAPI v3 endpoints and live dispatch webhooks.
                </div>
              </Link>
              <Link
                href="/integrations#custom"
                className="p-3 rounded-xl hover:bg-surface-container-low transition-all"
              >
                <div className="font-medium text-[15px] text-on-surface mb-1 flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-[18px]">hub</span>
                  <span>Custom Adapters</span>
                </div>
                <div className="text-[13px] text-on-surface-variant leading-snug">
                  Custom flat files, SFTP, and proprietary databases.
                </div>
              </Link>
            </div>
          </div>

          <Link
            href="/roi-calculator"
            className={`transition-colors py-2 text-[14px] font-medium ${
              isActive('/roi-calculator')
                ? 'text-primary'
                : 'text-on-surface-variant hover:text-on-surface'
            }`}
          >
            ROI Calculator
          </Link>

          <Link
            href="/case-studies"
            className={`transition-colors py-2 text-[14px] font-medium ${
              isActive('/case-studies')
                ? 'text-primary'
                : 'text-on-surface-variant hover:text-on-surface'
            }`}
          >
            Case Studies
          </Link>

          <Link
            href="/contact"
            className={`transition-colors py-2 text-[14px] font-medium ${
              isActive('/contact')
                ? 'text-primary'
                : 'text-on-surface-variant hover:text-on-surface'
            }`}
          >
            Contact
          </Link>
        </nav>

        {/* Right Action Controls */}
        <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
          {/* Theme Switcher */}
          <button
            onClick={toggleTheme}
            className="w-9 h-9 flex items-center justify-center rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface transition-all focus:outline-none border border-outline-variant/40 active:scale-95"
            aria-label="Toggle light and dark theme"
            type="button"
            title={`Current: ${theme} theme. Click to toggle.`}
          >
            <span className="material-symbols-outlined text-[18px] transition-transform duration-200">
              {theme === 'dark' ? 'light_mode' : 'dark_mode'}
            </span>
          </button>

          {/* Launch Application Bridge */}
          <a
            href="http://localhost:5173"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 text-on-surface-variant hover:text-on-surface font-medium text-[13px] px-3 py-1.5 transition-all border border-outline-variant/40 rounded-lg hover:bg-surface-container-low"
            title="Launch live Production Scheduler app"
          >
            <span className="material-symbols-outlined text-[16px] text-primary">launch</span>
            <span>Launch App</span>
          </a>

          {/* Book Demo CTA */}
          {onOpenDemoModal ? (
            <button
              onClick={onOpenDemoModal}
              className="h-9 px-4 bg-primary hover:bg-primary-container text-white font-medium text-[13px] rounded-lg flex items-center justify-center transition-all shadow-sm hover:shadow active:scale-95"
              type="button"
            >
              Book a demo
            </button>
          ) : (
            <Link
              href="/book-a-demo"
              className="h-9 px-4 bg-primary hover:bg-primary-container text-white font-medium text-[13px] rounded-lg flex items-center justify-center transition-all shadow-sm hover:shadow active:scale-95"
            >
              Book a demo
            </Link>
          )}

          {/* Mobile hamburger menu */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-9 h-9 flex items-center justify-center rounded-lg bg-surface-container text-on-surface hover:bg-surface-container-high transition-colors"
            aria-label="Toggle navigation menu"
            type="button"
          >
            <span className="material-symbols-outlined text-[20px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-surface-container-lowest border-b border-outline-variant px-5 py-5 flex flex-col gap-3 shadow-2xl">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="py-2 text-on-surface hover:text-primary font-medium transition-colors flex items-center justify-between"
          >
            <span>Product Overview</span>
            <span className="material-symbols-outlined text-[18px]">chevron_right</span>
          </Link>
          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="py-2 text-on-surface hover:text-primary font-medium transition-colors flex items-center justify-between"
          >
            <span>Contact Us</span>
            <span className="material-symbols-outlined text-[18px]">chevron_right</span>
          </Link>
          <Link
            href="/features"
            onClick={() => setMobileMenuOpen(false)}
            className="py-2 text-on-surface hover:text-primary font-medium transition-colors flex items-center justify-between"
          >
            <span>Platform Features</span>
            <span className="material-symbols-outlined text-[18px]">chevron_right</span>
          </Link>
          <Link
            href="/how-it-works"
            onClick={() => setMobileMenuOpen(false)}
            className="py-2 text-on-surface hover:text-primary font-medium transition-colors flex items-center justify-between"
          >
            <span>How It Works (Solver Architecture)</span>
            <span className="material-symbols-outlined text-[18px]">chevron_right</span>
          </Link>
          <Link
            href="/solutions"
            onClick={() => setMobileMenuOpen(false)}
            className="py-2 text-on-surface hover:text-primary font-medium transition-colors flex items-center justify-between"
          >
            <span>Solutions (APS Platform)</span>
            <span className="material-symbols-outlined text-[18px]">chevron_right</span>
          </Link>
          <Link
            href="/industries"
            onClick={() => setMobileMenuOpen(false)}
            className="py-2 text-on-surface hover:text-primary font-medium transition-colors flex items-center justify-between"
          >
            <span>Target Industries</span>
            <span className="material-symbols-outlined text-[18px]">chevron_right</span>
          </Link>
          <Link
            href="/roi-calculator"
            onClick={() => setMobileMenuOpen(false)}
            className="py-2 text-on-surface hover:text-primary font-medium transition-colors flex items-center justify-between"
          >
            <span>ROI Calculator</span>
            <span className="material-symbols-outlined text-[18px]">chevron_right</span>
          </Link>
          <Link
            href="/case-studies"
            onClick={() => setMobileMenuOpen(false)}
            className="py-2 text-on-surface hover:text-primary font-medium transition-colors flex items-center justify-between"
          >
            <span>Case Studies</span>
            <span className="material-symbols-outlined text-[18px]">chevron_right</span>
          </Link>
          <Link
            href="/integrations"
            onClick={() => setMobileMenuOpen(false)}
            className="py-2 text-on-surface hover:text-primary font-medium transition-colors flex items-center justify-between"
          >
            <span>Integrations Directory</span>
            <span className="material-symbols-outlined text-[18px]">chevron_right</span>
          </Link>
          <Link
            href="/security"
            onClick={() => setMobileMenuOpen(false)}
            className="py-2 text-on-surface hover:text-primary font-medium transition-colors flex items-center justify-between"
          >
            <span>Security & Compliance</span>
            <span className="material-symbols-outlined text-[18px]">chevron_right</span>
          </Link>
          <Link
            href="/docs"
            onClick={() => setMobileMenuOpen(false)}
            className="py-2 text-on-surface hover:text-primary font-medium transition-colors flex items-center justify-between"
          >
            <span>Developer Docs & API</span>
            <span className="material-symbols-outlined text-[18px]">chevron_right</span>
          </Link>
          <div className="pt-3 border-t border-outline-variant flex flex-col gap-2.5">
            <a
              href="http://localhost:5173"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-4 text-center rounded-lg border border-outline-variant text-on-surface font-medium flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-[18px] text-primary">launch</span>
              Launch Scheduler App (localhost:5173)
            </a>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-2.5 px-4 text-center rounded-lg bg-primary text-white font-medium shadow-sm"
            >
              Contact The Quantum Primes
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
