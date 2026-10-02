'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import CadenceHeader from '@/components/CadenceHeader';
import CadenceFooter from '@/components/CadenceFooter';
import CadenceDemoModal from '@/components/CadenceDemoModal';
import { FadeIn, FadeInStagger } from '@/components/Motion';

export default function CompanyPage() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-surface text-on-surface flex flex-col selection:bg-primary/20 transition-colors">
      <CadenceHeader onOpenDemoModal={() => setIsDemoModalOpen(true)} />

      <main className="w-full pt-16 bg-surface flex-1">
        <div className="flex flex-col w-full">
          {/* Telemetry Bar / Sub-header Meta Track */}
          <div className="w-full bg-surface-container-low px-4 sm:px-6 lg:px-8 py-2.5 border-b border-outline-variant/30">
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-on-surface-variant font-eyebrow text-[11px] uppercase tracking-widest">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="inline-flex items-center gap-1.5 text-primary font-semibold">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                  THE QUANTUM PRIMES // INDUSTRIAL OPTIMIZATION &amp; APPLIED AI
                </span>
                <span className="text-outline-variant hidden sm:inline">•</span>
                <span className="text-on-surface-variant">PARENT COMPANY</span>
              </div>
              <div className="flex items-center gap-4 text-on-surface-variant">
                <span className="inline-flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px] text-outline">mail</span>
                  thequantumprimes@gmail.com
                </span>
                <span className="text-outline-variant hidden md:inline">•</span>
                <span className="text-secondary font-medium">FLAGSHIP: CADENCE APS SCHEDULER</span>
              </div>
            </div>
          </div>

          {/* Hero Section */}
          <section className="relative w-full overflow-hidden px-4 sm:px-6 lg:px-8 pt-12 pb-16">
            <div className="absolute inset-0 bg-gradient-to-b from-surface-container-low via-surface to-surface pointer-events-none -z-10"></div>
            <div className="max-w-7xl mx-auto flex flex-col gap-10">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-primary/10 text-primary font-eyebrow text-xs uppercase font-medium">
                  <span className="material-symbols-outlined text-[14px]">corporate_fare</span>
                  ABOUT THE COMPANY
                </span>
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded bg-surface-container text-on-surface-variant font-tabular-mono-dense text-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                  THE QUANTUM PRIMES
                </span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                <div className="lg:col-span-8 flex flex-col gap-5">
                  <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-on-surface tracking-tight leading-tight">
                    Engineering deterministic mathematical optimization for the physical economy.
                  </h1>
                  <p className="font-body-default text-base sm:text-lg text-on-surface-variant leading-relaxed max-w-3xl">
                    <strong className="text-on-surface font-semibold">The Quantum Primes</strong> is an advanced industrial intelligence and operations research company. We build mathematical optimization engines, multi-plant supply chain architectures, and autonomous manufacturing agents that eliminate guesswork from production floors.
                  </p>
                  <p className="font-body-default text-sm sm:text-base text-on-surface-variant leading-relaxed max-w-3xl">
                    Our mission is to replace heuristic schedule fiction and fragile spreadsheets with provably optimal, constraint-satisfying ground truth. Our flagship product—the <strong>Cadence Production Scheduler</strong>—is an enterprise APS engine that turns real factory capacity into executable shop-floor schedules.
                  </p>

                  <div className="flex flex-wrap items-center gap-4 pt-2">
                    <Link
                      href="/contact"
                      className="h-11 px-6 bg-primary hover:bg-primary-container text-white font-medium text-sm rounded-xl flex items-center justify-center gap-2 transition-all shadow-md hover:shadow-lg active:scale-95"
                    >
                      <span>Contact The Quantum Primes</span>
                      <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                    </Link>
                    <a
                      href="#flagship-product"
                      className="h-11 px-6 bg-surface-container hover:bg-surface-container-high text-on-surface font-medium text-sm rounded-xl flex items-center gap-2 transition-all border border-outline-variant/40"
                    >
                      <span className="material-symbols-outlined text-[18px] text-primary">view_timeline</span>
                      <span>Explore Our Flagship Scheduler</span>
                    </a>
                  </div>
                </div>

                {/* Company System Card */}
                <div className="lg:col-span-4 bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant/50 shadow-md flex flex-col gap-4">
                  <div className="flex items-center justify-between pb-3 border-b border-surface-container">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                      <span className="font-eyebrow text-xs uppercase font-semibold text-on-surface">The Quantum Primes Stack</span>
                    </div>
                    <span className="text-[11px] font-tabular-mono-dense text-secondary font-medium">OPERATIONAL</span>
                  </div>

                  <div className="space-y-3 text-xs">
                    <div className="p-2.5 bg-surface-container-low rounded-lg">
                      <div className="text-on-surface-variant font-medium">Core Engine</div>
                      <div className="text-on-surface font-semibold text-sm">Google OR-Tools CP-SAT + MILP</div>
                    </div>
                    <div className="p-2.5 bg-surface-container-low rounded-lg">
                      <div className="text-on-surface-variant font-medium">Flagship Product</div>
                      <div className="text-on-surface font-semibold text-sm">Cadence APS (Production Scheduler)</div>
                    </div>
                    <div className="p-2.5 bg-surface-container-low rounded-lg">
                      <div className="text-on-surface-variant font-medium">Enterprise Integration</div>
                      <div className="text-on-surface font-semibold text-sm">ERP (SAP, Oracle, NetSuite) &amp; MES</div>
                    </div>
                    <div className="p-2.5 bg-surface-container-low rounded-lg">
                      <div className="text-on-surface-variant font-medium">Corporate Headquarters</div>
                      <div className="text-on-surface font-semibold text-sm">contact: thequantumprimes@gmail.com</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Company Metrics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
                <div className="bg-surface-container-lowest p-5 rounded-2xl border border-outline-variant/40">
                  <div className="text-xs uppercase text-on-surface-variant font-semibold tracking-wider">CP-SAT Core</div>
                  <div className="text-2xl sm:text-3xl font-bold text-on-surface mt-1">&lt; 45s</div>
                  <div className="text-xs text-on-surface-variant mt-1">Full 3-month factory solve</div>
                </div>
                <div className="bg-surface-container-lowest p-5 rounded-2xl border border-outline-variant/40">
                  <div className="text-xs uppercase text-on-surface-variant font-semibold tracking-wider">Inventory Drop</div>
                  <div className="text-2xl sm:text-3xl font-bold text-primary mt-1">15%</div>
                  <div className="text-xs text-on-surface-variant mt-1">Average WIP &amp; buffer reduction</div>
                </div>
                <div className="bg-surface-container-lowest p-5 rounded-2xl border border-outline-variant/40">
                  <div className="text-xs uppercase text-on-surface-variant font-semibold tracking-wider">Labor Cost Savings</div>
                  <div className="text-2xl sm:text-3xl font-bold text-secondary mt-1">10%</div>
                  <div className="text-xs text-on-surface-variant mt-1">Optimized shift overtime &amp; changeover</div>
                </div>
                <div className="bg-surface-container-lowest p-5 rounded-2xl border border-outline-variant/40">
                  <div className="text-xs uppercase text-on-surface-variant font-semibold tracking-wider">Capacity Boost</div>
                  <div className="text-2xl sm:text-3xl font-bold text-on-surface mt-1">+12%</div>
                  <div className="text-xs text-on-surface-variant mt-1">OEE &amp; throughput gain</div>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION: WHAT THE QUANTUM PRIMES DOES */}
          <section className="w-full py-16 bg-surface-container-low border-t border-outline-variant/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl mb-12">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-primary/10 text-primary font-eyebrow text-xs uppercase font-medium mb-3">
                  COMPANY SCOPE &amp; CAPABILITIES
                </div>
                <h2 className="text-2xl sm:text-4xl font-bold text-on-surface tracking-tight">
                  What The Quantum Primes builds for modern industry.
                </h2>
                <p className="text-base text-on-surface-variant mt-3 leading-relaxed">
                  We bridge the divide between theoretical operations research and dirty-boots shop floor reality. Our platform capabilities span target manufacturing industries across the entire production lifecycle:
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Pillar 1: SIOP */}
                <div className="bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant/40 flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-600 flex items-center justify-center mb-4">
                      <span className="material-symbols-outlined text-2xl">monitoring</span>
                    </div>
                    <h3 className="text-lg font-bold text-on-surface mb-2">
                      1. Sales, Inventory &amp; Operations Planning (SIOP)
                    </h3>
                    <p className="text-sm text-on-surface-variant leading-relaxed">
                      Aligning long-range executive forecasts with multi-plant S&amp;OE execution in a single unified model. We eliminate distributor channel distortion, evaluate subcontractor capacity limits, and promise reliable customer ship dates from real capacity.
                    </p>
                  </div>
                  <div className="mt-4 pt-4 border-t border-surface-container text-xs font-semibold text-primary">
                    Strategic Demand &amp; Supply Balancing →
                  </div>
                </div>

                {/* Pillar 2: APS Flagship */}
                <div className="bg-surface-container-lowest p-6 rounded-2xl border border-primary/30 ring-1 ring-primary/20 flex flex-col justify-between relative shadow-sm">
                  <div className="absolute -top-3 right-4 px-2 py-0.5 rounded bg-primary text-white text-[10px] font-bold uppercase tracking-wider">
                    FLAGSHIP PRODUCT
                  </div>
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                      <span className="material-symbols-outlined text-2xl">schedule</span>
                    </div>
                    <h3 className="text-lg font-bold text-on-surface mb-2">
                      2. Advanced Planning &amp; Scheduling (APS)
                    </h3>
                    <p className="text-sm text-on-surface-variant leading-relaxed">
                      Our core production scheduler software. Solves combinatorial job-shop scheduling, shift patterns, cleanout matrices, tool qualifications, and multi-stage routing trees in sub-second to 45-second CPU runs with mathematical optimality.
                    </p>
                  </div>
                  <div className="mt-4 pt-4 border-t border-surface-container text-xs font-semibold text-primary">
                    Finite Capacity CP-SAT Solver →
                  </div>
                </div>

                {/* Pillar 3: MES & AI */}
                <div className="bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant/40 flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-purple-500/10 text-purple-600 flex items-center justify-center mb-4">
                      <span className="material-symbols-outlined text-2xl">precision_manufacturing</span>
                    </div>
                    <h3 className="text-lg font-bold text-on-surface mb-2">
                      3. MES Execution &amp; Industrial Agent AI
                    </h3>
                    <p className="text-sm text-on-surface-variant leading-relaxed">
                      Real-time closed-loop execution. Traceability across WIP, machine dispatch, IATF 16949 / FDA compliance, and agentic AI ReAct loops (Observe, Reason, Act, Learn) with plain-language queries and operator-in-the-loop governance.
                    </p>
                  </div>
                  <div className="mt-4 pt-4 border-t border-surface-container text-xs font-semibold text-purple-600">
                    Live Telemetry &amp; Agentic Action →
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION: FLAGSHIP PRODUCT DEEP DIVE (C:\Users\Hp\OneDrive\Desktop 2\scheduler\scheduler-demo) */}
          <section id="flagship-product" className="w-full py-16 bg-surface border-t border-outline-variant/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="p-8 sm:p-12 rounded-3xl bg-[#0E131A] text-[#F0F4F8] border border-[#202938] shadow-2xl">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-7 flex flex-col gap-5">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1E293B] text-[#38BDF8] text-xs font-semibold uppercase tracking-wider w-fit">
                      <span className="w-2 h-2 rounded-full bg-[#38BDF8] animate-pulse"></span>
                      FLAGSHIP PRODUCT ARCHITECTURE
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
                      The Cadence Production Scheduler
                    </h2>
                    <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed">
                      Designed, engineered, and maintained by <strong className="text-white">The Quantum Primes</strong>. This system is a high-performance finite capacity FMCG and discrete manufacturing scheduler built on:
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                      <div className="p-3.5 bg-[#161C26] rounded-xl border border-[#202938]">
                        <div className="text-[#38BDF8] font-bold text-sm mb-1">Backend Engine</div>
                        <div className="text-[#CBD5E1]">Django 6.1 + DRF + Google OR-Tools CP-SAT</div>
                        <div className="text-[#64748B] mt-1">Port 8000 • Multi-threaded branch-and-bound</div>
                      </div>
                      <div className="p-3.5 bg-[#161C26] rounded-xl border border-[#202938]">
                        <div className="text-[#3ECF8E] font-bold text-sm mb-1">Interactive Frontend</div>
                        <div className="text-[#CBD5E1]">React 19 + React Router 7 + Vite + Tailwind</div>
                        <div className="text-[#64748B] mt-1">Port 5173 • High-density interactive Gantt</div>
                      </div>
                      <div className="p-3.5 bg-[#161C26] rounded-xl border border-[#202938]">
                        <div className="text-[#F59E0B] font-bold text-sm mb-1">Multi-Plant Routing</div>
                        <div className="text-[#CBD5E1]">Support for plant trees &amp; master factories</div>
                        <div className="text-[#64748B] mt-1">Multi-stage dependency links &amp; shift shading</div>
                      </div>
                      <div className="p-3.5 bg-[#161C26] rounded-xl border border-[#202938]">
                        <div className="text-[#A855F7] font-bold text-sm mb-1">Test Validation</div>
                        <div className="text-[#CBD5E1]">286 automated backend tests + 11 vitest</div>
                        <div className="text-[#64748B] mt-1">Zero regressions, 100% deterministic</div>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 pt-2">
                      <a
                        href="http://localhost:5173"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="h-11 px-6 bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-medium text-sm rounded-xl flex items-center gap-2 transition-all shadow-md active:scale-95"
                      >
                        <span className="material-symbols-outlined text-[18px]">launch</span>
                        <span>Launch Scheduler Demo (localhost:5173)</span>
                      </a>
                      <Link
                        href="/contact"
                        className="h-11 px-6 bg-[#1F2937] hover:bg-[#374151] text-white font-medium text-sm rounded-xl flex items-center gap-2 transition-all border border-[#374151]"
                      >
                        <span>Schedule Technical Deep-Dive</span>
                        <span className="material-symbols-outlined text-[16px]">mail</span>
                      </Link>
                    </div>
                  </div>

                  {/* Right Column: Execution Metrics */}
                  <div className="lg:col-span-5 bg-[#161C26] p-6 rounded-2xl border border-[#202938] flex flex-col gap-4">
                    <div className="flex items-center justify-between pb-3 border-b border-[#202938]">
                      <span className="text-xs uppercase tracking-wider font-semibold text-[#94A3B8]">
                        Solver Horizon Benchmarks
                      </span>
                      <span className="text-xs text-[#3ECF8E] font-mono">CP-SAT 4-Core</span>
                    </div>

                    <div className="space-y-3 font-mono text-xs">
                      <div className="flex justify-between items-center p-2.5 bg-[#0E131A] rounded-lg">
                        <span className="text-[#E2E8F0]">1 Month Horizon</span>
                        <span className="text-[#3ECF8E]">594 tasks • ~42s (Optimal)</span>
                      </div>
                      <div className="flex justify-between items-center p-2.5 bg-[#0E131A] rounded-lg">
                        <span className="text-[#E2E8F0]">2 Months Horizon</span>
                        <span className="text-[#3ECF8E]">1,188 tasks • ~45s (Optimal)</span>
                      </div>
                      <div className="flex justify-between items-center p-2.5 bg-[#0E131A] rounded-lg">
                        <span className="text-[#E2E8F0]">3 Months Horizon</span>
                        <span className="text-[#3ECF8E]">1,782 tasks • ~48s (Optimal)</span>
                      </div>
                      <div className="flex justify-between items-center p-2.5 bg-[#0E131A] rounded-lg">
                        <span className="text-[#E2E8F0]">6 Months Horizon</span>
                        <span className="text-[#F59E0B]">3,564 tasks • Capped</span>
                      </div>
                    </div>

                    <div className="pt-2 text-xs text-[#94A3B8] leading-relaxed border-t border-[#202938]">
                      <strong className="text-white">Instant Plan Reload (⚡):</strong> Once solved, schedules reload in 0ms without re-solving. Planners can compress idle gaps, anchor to the next whole hour, or export complete multi-sheet workbooks.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION: COMPANY ETHOS & CONTACT CTA */}
          <section className="w-full py-16 bg-surface-container-low border-t border-outline-variant/40">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center gap-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-primary/10 text-primary font-eyebrow text-xs uppercase font-medium">
                PARTNER WITH US
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-on-surface tracking-tight">
                Ready to transform your plant operations?
              </h2>
              <p className="text-base text-on-surface-variant leading-relaxed max-w-2xl">
                Whether you need to schedule a high-speed packaging facility, coordinate multi-plant supply chains, or deploy custom operations research algorithms, <strong className="text-on-surface">The Quantum Primes</strong> team is here to assist.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="h-12 px-8 bg-primary hover:bg-primary-container text-white font-medium text-sm rounded-xl flex items-center gap-2 transition-all shadow-md hover:shadow-lg active:scale-95"
                >
                  <span>Contact Our Team</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </Link>
                <a
                  href="mailto:thequantumprimes@gmail.com"
                  className="h-12 px-8 bg-surface-container hover:bg-surface-container-high text-on-surface font-medium text-sm rounded-xl flex items-center gap-2 transition-all border border-outline-variant/40"
                >
                  <span className="material-symbols-outlined text-[18px] text-primary">mail</span>
                  <span>thequantumprimes@gmail.com</span>
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>

      <CadenceFooter />
      <CadenceDemoModal isOpen={isDemoModalOpen} onClose={() => setIsDemoModalOpen(false)} />
    </div>
  );
}
