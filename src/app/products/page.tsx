'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import CadenceHeader from '@/components/CadenceHeader';
import CadenceFooter from '@/components/CadenceFooter';
import CadenceDemoModal from '@/components/CadenceDemoModal';
import { FadeIn, FadeInStagger, FadeInItem } from '@/components/Motion';

export default function ProductsPage() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  const pillars = [
    {
      title: 'CP-SAT Finite Capacity Engine',
      badge: 'MATHEMATICAL CORE',
      icon: 'account_tree',
      desc: 'Replaces heuristic approximations with deterministic constraint programming. Formulates multi-level BOMs, sequence-dependent changeovers, and machine contention as mixed-integer theorems.',
      bullets: [
        'Global makespan & tardiness minimization',
        'Asymmetric Traveling Salesperson changeover loops',
        'Piecewise linear mass conservation bounds',
        'Bit-identical deterministic solver seeds'
      ]
    },
    {
      title: 'The Ripple Engine™',
      badge: 'REAL-TIME TELEMETRY',
      icon: 'sync_alt',
      desc: 'When line breakdowns or rush orders strike, Cadence re-anchors the schedule in under 2 seconds. Injects previous feasible solutions via warm-start LNS without shaking the entire plant.',
      bullets: [
        'Sub-second micro-anchor re-optimization',
        'T-zero immutable truth state pinning',
        'Selective downstream mutation only',
        'Zero shop-floor panic or schedule fiction'
      ]
    },
    {
      title: 'Bi-Directional Enterprise Bridges',
      badge: 'INTEGRATIONS HUB',
      icon: 'hub',
      desc: 'Connects directly to your ERP, MES, and SCADA infrastructure. Bi-directional webhooks sync work orders, production confirmations, and actual scrap rates continuously.',
      bullets: [
        'Certified SAP S/4HANA IDoc / OData v4 sync',
        'Oracle NetSuite & Dynamics 365 native connectors',
        'Direct ISA-95 Level 3 SCADA / OPC-UA polling',
        'Cryptographic audit trail with idempotent UUIDs'
      ]
    },
    {
      title: 'Air-Gapped Sovereign Cluster',
      badge: 'SECURITY & GOVERNANCE',
      icon: 'shield',
      desc: 'Deployable on-premise inside your physical data room or private VPC. 100% disconnected operation mode ensures proprietary product recipes never leave the factory perimeter.',
      bullets: [
        'Bare-metal Kubernetes (k3s) & Docker deployment',
        'Zero external cloud egress required',
        'SOC 2 Type II, ISO 27001, FDA 21 CFR Part 11 compliant',
        'Offline cryptographically signed binary updates'
      ]
    }
  ];

  const comparisonRows = [
    {
      feature: 'Finite Capacity Constraints',
      cadence: 'Exact CP-SAT mathematical enforcement',
      legacy: 'Coarse bucket approximations (infinite capacity)',
      sheets: 'Manual eyeball adjustments (impossible to enforce)'
    },
    {
      feature: 'Sequence-Dependent Setups',
      cadence: 'N×N TSP Hamiltonian tour optimization',
      legacy: 'Static priority rules (heuristic sorting)',
      sheets: 'Manual grouping by SKU color/flavor'
    },
    {
      feature: 'Rescheduling Response Time',
      cadence: 'Sub-second to <4s dynamic re-anchor',
      legacy: 'Batch overnight solver runs (4 to 8 hours)',
      sheets: '3 to 6 hours manual planning scramble'
    },
    {
      feature: 'WIP Hold Decay Preservation',
      cadence: 'Hard continuous interval bounds (0 scrap events)',
      legacy: 'Unconstrained queues (high spoil risk)',
      sheets: 'Periodic phone calls between cooker and filler'
    },
    {
      feature: 'Enterprise ERP Synchronization',
      cadence: 'Bi-directional real-time webhook streaming',
      legacy: 'Nightly CSV/SFTP batch ingestion',
      sheets: 'Manual copy-pasting from SAP exports'
    }
  ];

  return (
    <div className="min-h-screen bg-surface text-on-surface flex flex-col selection:bg-primary/20 transition-colors">
      <CadenceHeader onOpenDemoModal={() => setIsDemoModalOpen(true)} />

      <main className="w-full pt-16 bg-surface flex-1">
        {/* Billboard Hero */}
        <section className="w-full relative overflow-hidden bg-surface py-16 sm:py-20 lg:py-24 border-b border-outline-variant/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-8">
            <FadeIn>
              <div className="flex flex-col gap-4 max-w-3xl">
                <div className="inline-flex items-center gap-2 self-start px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary font-mono text-xs uppercase tracking-wider font-semibold">
                  <span className="w-2 h-2 rounded-full bg-secondary inline-block animate-pulse"></span>
                  <span>The Quantum Primes · Cadence APS Architecture Specification</span>
                </div>

                <h1 className="font-display font-bold text-3xl sm:text-5xl lg:text-6xl text-on-surface tracking-tight leading-[1.1]">
                  Engineered precision for high-mix manufacturing floors.
                </h1>

                <p className="text-base sm:text-lg text-on-surface-variant leading-relaxed">
                  Cadence is the flagship production scheduling product of <strong className="text-on-surface">The Quantum Primes</strong>. It combines Google OR-Tools CP-SAT discrete optimization, sub-second shop-floor telemetry streaming, and bi-directional ERP integration to turn plant capacity into mathematically feasible dispatches.
                </p>

                <div className="flex items-center gap-4 flex-wrap pt-2">
                  <a
                    href="http://localhost:5173"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-11 px-6 bg-primary hover:bg-primary-container text-white font-medium text-sm rounded-xl flex items-center justify-center gap-2 transition-all shadow-md hover:shadow-lg active:scale-95"
                  >
                    <span className="material-symbols-outlined text-[18px]">launch</span>
                    <span>Launch Local Scheduler (Port 5173)</span>
                  </a>

                  <Link
                    href="/contact"
                    className="h-11 px-6 bg-surface-container hover:bg-surface-container-high text-on-surface font-medium text-sm rounded-xl flex items-center justify-center transition-all border border-outline-variant/40 active:scale-95"
                  >
                    Contact The Quantum Primes
                  </Link>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* 4 Core Pillars */}
        <section className="w-full py-16 sm:py-20 lg:py-24 bg-surface-container-lowest border-b border-outline-variant/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12">
            <div className="flex flex-col gap-2 max-w-2xl">
              <span className="font-mono text-xs text-primary font-semibold uppercase tracking-wider">
                CORE SUBSYSTEMS
              </span>
              <h2 className="font-display font-bold text-2xl sm:text-4xl text-on-surface tracking-tight">
                Architected around mathematical certainty, not heuristics.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {pillars.map((p, idx) => (
                <div
                  key={idx}
                  className="p-8 rounded-2xl bg-surface-container-low border border-outline-variant/50 shadow-sm flex flex-col gap-6 hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined text-[24px]">{p.icon}</span>
                    </div>
                    <span className="font-mono text-[11px] uppercase tracking-wider px-2.5 py-1 rounded bg-surface border border-outline-variant/40 text-on-surface-variant font-medium">
                      {p.badge}
                    </span>
                  </div>

                  <div className="flex flex-col gap-2">
                    <h3 className="font-display font-bold text-xl text-on-surface">
                      {p.title}
                    </h3>
                    <p className="text-sm text-on-surface-variant leading-relaxed">
                      {p.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-outline-variant/40 flex flex-col gap-2">
                    {p.bullets.map((b, bIdx) => (
                      <div key={bIdx} className="flex items-center gap-2.5 text-xs text-on-surface">
                        <span className="material-symbols-outlined text-[16px] text-secondary">check</span>
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Architecture Comparison Matrix */}
        <section className="w-full py-16 sm:py-20 lg:py-24 bg-surface border-b border-outline-variant/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-10">
            <div className="flex flex-col gap-2 max-w-2xl">
              <span className="font-mono text-xs text-primary font-semibold uppercase tracking-wider">
                COMPETITIVE BENCHMARK
              </span>
              <h2 className="font-display font-bold text-2xl sm:text-4xl text-on-surface tracking-tight">
                Deterministic Solver vs Legacy Alternatives
              </h2>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Why manufacturing operations research outperforms heuristic legacy software and spreadsheets.
              </p>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-outline-variant/50 shadow-sm bg-surface-container-lowest">
              <table className="w-full text-left font-body-dense text-xs border-collapse">
                <thead>
                  <tr className="bg-surface-container border-b border-outline-variant font-mono uppercase text-on-surface-variant tracking-wider">
                    <th className="py-4 px-6">Capability Dimension</th>
                    <th className="py-4 px-6 text-primary font-bold">Cadence APS (CP-SAT)</th>
                    <th className="py-4 px-6 text-on-surface-variant">Legacy APS (Preactor/Asprova)</th>
                    <th className="py-4 px-6 text-on-surface-variant">Spreadsheets (Excel/Sheets)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant/40 font-body-dense text-on-surface">
                  {comparisonRows.map((r, idx) => (
                    <tr key={idx} className="hover:bg-surface-container-low/50 transition-colors">
                      <td className="py-4 px-6 font-semibold text-on-surface whitespace-nowrap">
                        {r.feature}
                      </td>
                      <td className="py-4 px-6 font-medium text-primary bg-primary/5">
                        <div className="flex items-center gap-1.5">
                          <span className="material-symbols-outlined text-[15px] text-secondary">check_circle</span>
                          <span>{r.cadence}</span>
                        </div>
                      </td>
                      <td className="py-4 px-6 text-on-surface-variant">
                        {r.legacy}
                      </td>
                      <td className="py-4 px-6 text-on-surface-variant/80">
                        {r.sheets}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Pre-Footer Action Billboard */}
        <section className="w-full py-16 sm:py-20 bg-surface-container-low text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-6">
            <h2 className="font-display font-bold text-2xl sm:text-4xl text-on-surface tracking-tight">
              Test your plant's hardest bottleneck on Cadence.
            </h2>
            <p className="text-base text-on-surface-variant max-w-xl leading-relaxed">
              Send us an anonymized work orders sample and line changeover matrix. We will return an optimal schedule comparison in 48 hours.
            </p>
            <div className="flex items-center gap-4 flex-wrap">
              <Link
                href="/contact"
                className="h-11 px-6 bg-primary hover:bg-primary-container text-white font-medium text-sm rounded-xl flex items-center justify-center transition-all shadow-md active:scale-95"
              >
                Contact The Quantum Primes
              </Link>
              <button
                type="button"
                onClick={() => setIsDemoModalOpen(true)}
                className="h-11 px-6 bg-surface-container-lowest hover:bg-surface-container text-on-surface font-medium text-sm rounded-xl flex items-center justify-center transition-all border border-outline-variant/50 active:scale-95"
              >
                Request Technical Pilot
              </button>
            </div>
            <div className="text-xs text-on-surface-variant flex items-center gap-1.5 mt-2">
              <span className="material-symbols-outlined text-[15px] text-primary">mail</span>
              <span>Direct inquiries: <strong>thequantumprimes@gmail.com</strong></span>
            </div>
          </div>
        </section>
      </main>

      <CadenceFooter />

      <CadenceDemoModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
      />
    </div>
  );
}
