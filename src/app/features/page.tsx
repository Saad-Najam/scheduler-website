'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import CadenceHeader from '@/components/CadenceHeader';
import CadenceFooter from '@/components/CadenceFooter';
import CadenceDemoModal from '@/components/CadenceDemoModal';
import { FadeIn, FadeInStagger, FadeInItem } from '@/components/Motion';

export default function FeaturesPage() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<'all' | 'solver' | 'dispatch' | 'integrations' | 'governance'>('all');

  const coreFeatures = [
    {
      category: 'solver',
      title: 'Google OR-Tools CP-SAT Discrete Engine',
      badge: 'MATHEMATICAL CORE',
      icon: 'account_tree',
      tagline: 'Deterministic constraint programming replaces heuristic approximations',
      desc: 'Formulates multi-level bills of materials, sequence-dependent setup matrices, and machine contention as provable constraint satisfaction problems. Guarantees global mathematical feasibility without heuristic blindspots.',
      capabilities: [
        'Exact mixed-integer & SAT formulation with deterministic random seed matching',
        'Global makespan, setup time, and tardiness multi-objective optimization',
        'Asymmetric Traveling Salesperson (ATSP) changeover sequencing via AddCircuit()',
        'Cumulative labor and tooling capacity limits via AddCumulative()'
      ],
      metric: '< 45s Solve Horizon',
      metricSub: 'Up to 1,782 tasks scheduled'
    },
    {
      category: 'dispatch',
      title: 'The Ripple Engine™ Dynamic Re-Anchor',
      badge: 'REAL-TIME TELEMETRY',
      icon: 'sync_alt',
      tagline: 'Sub-second schedule healing without disrupting active floor shifts',
      desc: 'When unscheduled line breakdowns, rush customer orders, or raw material shortages strike, Cadence re-anchors the schedule in under 2 seconds using warm-start Large Neighborhood Search (LNS).',
      capabilities: [
        'T-zero immutable truth state pinning protects running shift assignments',
        'Selective downstream mutation only—prevents total plant schedule panic',
        'Automated alternate line routing and secondary machine failover',
        'WebSocket / SSE live dispatch push directly to floor terminal screens'
      ],
      metric: '< 2.0s Re-solve',
      metricSub: 'Zero shop-floor disruption'
    },
    {
      category: 'dispatch',
      title: 'Interactive Multi-Shift Gantt Simulation',
      badge: 'OPERATIONAL TELEMETRY',
      icon: 'view_timeline',
      tagline: 'High-density visual control with drag-and-drop constraint validation',
      desc: 'Equips master schedulers and plant controllers with interactive multi-shift Gantt views. Drag-and-drop tasks with automatic shift boundary snapping and instant visual conflict flagging.',
      capabilities: [
        'Shift boundary shading (Shift 1 / Shift 2 / Shift 3 / Weekend maintenance)',
        'Upstream-downstream dependency curve overlays with bottleneck glow indicators',
        'Color-coded task states: Active, At Risk, Changeover/CIP, Delayed, Completed',
        '1-click instant plan reload and scenario sandbox evaluation'
      ],
      metric: '3-Month Horizon',
      metricSub: 'Shift, Day, & Hour granularity'
    },
    {
      category: 'integrations',
      title: 'Bi-Directional Enterprise ERP Handshake',
      badge: 'ENTERPRISE CONNECTIVITY',
      icon: 'hub',
      tagline: 'Automated 2-way sync with SAP, NetSuite, Dynamics 365, and Plex MES',
      desc: 'Ingests production orders, routing operations, work center capacities, and inventory balances seamlessly. Writes back locked start/finish timestamps, work center allocations, and schedule confirmations with zero manual re-entry.',
      capabilities: [
        'Certified SAP S/4HANA IDoc / OData v4 and BAPI RFC adapters',
        'Oracle NetSuite REST Web Services and Microsoft Dynamics 365 OData sync',
        'Idempotent writes with cryptographic event IDs preventing duplicates',
        'Automated Excel / CSV / SFTP hotfolder ingestion for transitional plants'
      ],
      metric: '24+ Pre-Built Adapters',
      metricSub: '< 100ms delta ingestion'
    },
    {
      category: 'solver',
      title: 'Perishable WIP Dwell & Reservoir Balancing',
      badge: 'PROCESS CONSTRAINTS',
      icon: 'timer',
      tagline: 'Prevent scrap and batch dumps across intermediate holding buffers',
      desc: 'Models continuous mass conservation and holding time limits between upstream batch cooking/reactors and downstream high-speed packaging lines. Guarantees perishable products never spoil in intermediate vessels.',
      capabilities: [
        'Strict interval dwell-time bounds (IntEnd - IntStart ≤ MaxHoldingMinutes)',
        'Piecewise continuous reservoir volume balance constraints',
        'Automated tank clean-in-place (CIP) turnaround scheduling',
        'Zero buffer leakage and zero line starvation interlocks'
      ],
      metric: '0 Batch Spoilage',
      metricSub: '100% sterile & perishable compliance'
    },
    {
      category: 'governance',
      title: 'Air-Gapped Sovereign Cluster & Governance',
      badge: 'SECURITY & AUDIT',
      icon: 'shield',
      tagline: 'Enterprise compliance with zero external cloud data egress',
      desc: 'Deployable on-premise inside your physical plant network or private VPC on Kubernetes. Strict role-based access control, FDA 21 CFR Part 11 audit trails, and cryptographic log verification.',
      capabilities: [
        'Air-gapped operation with 100% disconnected runtime mode',
        'SOC 2 Type II, ISO 27001, and FDA 21 CFR Part 11 compliance ready',
        'Granular RBAC: Plant Controller, Master Scheduler, Dispatcher, Operator',
        'Full tamper-evident audit logs with cryptographic hash chains'
      ],
      metric: '100% Air-Gapped',
      metricSub: 'Zero data egress mode'
    }
  ];

  const filteredFeatures = activeCategory === 'all'
    ? coreFeatures
    : coreFeatures.filter(f => f.category === activeCategory);

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
      feature: 'Perishable WIP Decay Bounds',
      cadence: 'Hard continuous interval bounds (0 scrap events)',
      legacy: 'Unconstrained queues (high spoil risk)',
      sheets: 'Periodic phone calls between cooker and filler'
    },
    {
      feature: 'Enterprise ERP Synchronization',
      cadence: 'Bi-directional real-time webhook streaming',
      legacy: 'Nightly CSV/SFTP batch ingestion',
      sheets: 'Manual copy-pasting from SAP exports'
    },
    {
      feature: 'Air-Gapped Security',
      cadence: 'Self-hosted Docker / K8s sovereign clusters',
      legacy: 'Legacy Windows client-server with patchy patches',
      sheets: 'Uncontrolled email attachments and shared drives'
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
                  <span>The Quantum Primes · Cadence APS Features &amp; Capabilities</span>
                </div>

                <h1 className="font-display font-bold text-3xl sm:text-5xl lg:text-6xl text-on-surface tracking-tight leading-[1.1]">
                  Core Features Built for Industrial Ground Truth.
                </h1>

                <p className="text-base sm:text-lg text-on-surface-variant leading-relaxed">
                  Discover the complete feature suite of the <strong className="text-on-surface">Cadence Production Scheduler</strong>. From Google OR-Tools CP-SAT discrete optimization to sub-second dynamic re-anchoring, interactive Gantt dispatching, and bi-directional ERP synchronization.
                </p>

                <div className="flex items-center gap-4 flex-wrap pt-2">
                  <a
                    href="http://localhost:5173"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-11 px-6 bg-primary hover:bg-primary-container text-white font-medium text-sm rounded-xl flex items-center justify-center gap-2 transition-all shadow-md hover:shadow-lg active:scale-95"
                  >
                    <span className="material-symbols-outlined text-[18px]">launch</span>
                    <span>Launch Local Scheduler App</span>
                  </a>

                  <Link
                    href="/roi-calculator"
                    className="h-11 px-6 bg-surface-container hover:bg-surface-container-high text-on-surface font-medium text-sm rounded-xl flex items-center justify-center transition-all border border-outline-variant/40 active:scale-95"
                  >
                    Calculate Plant ROI
                  </Link>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Category Filters Bar */}
        <section className="w-full bg-surface-container-low border-b border-outline-variant/40 py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 overflow-x-auto">
            <span className="text-xs font-mono uppercase text-on-surface-variant mr-2 shrink-0">Filter by Category:</span>
            {[
              { id: 'all', label: 'All Features' },
              { id: 'solver', label: 'Mathematical Solver' },
              { id: 'dispatch', label: 'Dispatch & Gantt' },
              { id: 'integrations', label: 'Integrations & Sync' },
              { id: 'governance', label: 'Security & Governance' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id as any)}
                type="button"
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all shrink-0 ${
                  activeCategory === tab.id
                    ? 'bg-primary text-white shadow-sm font-semibold'
                    : 'bg-surface hover:bg-surface-container text-on-surface-variant hover:text-on-surface border border-outline-variant/40'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </section>

        {/* Features Grid */}
        <section className="w-full py-16 sm:py-20 lg:py-24 bg-surface-container-lowest border-b border-outline-variant/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12">
            <div className="flex flex-col gap-2 max-w-2xl">
              <span className="font-mono text-xs text-primary font-semibold uppercase tracking-wider">
                FEATURE CAPABILITIES ARCHITECTURE
              </span>
              <h2 className="font-display font-bold text-2xl sm:text-4xl text-on-surface tracking-tight">
                Engineered for physical factory realities.
              </h2>
              <p className="text-sm text-on-surface-variant">
                Every feature in Cadence is mathematically formulated to eliminate schedule fiction and maximize line utilization.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredFeatures.map((feat, idx) => (
                <div
                  key={idx}
                  className="p-8 rounded-2xl bg-surface-container-low border border-outline-variant/50 shadow-sm flex flex-col justify-between gap-6 hover:shadow-md hover:border-primary/40 transition-all duration-300"
                >
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                        <span className="material-symbols-outlined text-[24px]">{feat.icon}</span>
                      </div>
                      <span className="font-mono text-[10px] uppercase tracking-wider px-2.5 py-1 rounded bg-surface border border-outline-variant/40 text-on-surface-variant font-medium">
                        {feat.badge}
                      </span>
                    </div>

                    <div className="flex flex-col gap-2">
                      <h3 className="font-display font-bold text-lg text-on-surface leading-snug">
                        {feat.title}
                      </h3>
                      <p className="text-xs font-medium text-primary leading-snug">
                        {feat.tagline}
                      </p>
                      <p className="text-xs text-on-surface-variant leading-relaxed mt-1">
                        {feat.desc}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-outline-variant/40 flex flex-col gap-2">
                      {feat.capabilities.map((cap, cIdx) => (
                        <div key={cIdx} className="flex items-start gap-2 text-xs text-on-surface leading-tight">
                          <span className="material-symbols-outlined text-[15px] text-secondary shrink-0 mt-0.5">check_circle</span>
                          <span>{cap}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-outline-variant/30 flex items-center justify-between text-xs font-mono bg-surface p-3 rounded-xl border border-outline-variant/40">
                    <span className="text-primary font-bold">{feat.metric}</span>
                    <span className="text-on-surface-variant text-[11px]">{feat.metricSub}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Competitive Benchmark Comparison Matrix */}
        <section className="w-full py-16 sm:py-20 lg:py-24 bg-surface border-b border-outline-variant/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-10">
            <div className="flex flex-col gap-2 max-w-2xl">
              <span className="font-mono text-xs text-primary font-semibold uppercase tracking-wider">
                FEATURE BENCHMARK
              </span>
              <h2 className="font-display font-bold text-2xl sm:text-4xl text-on-surface tracking-tight">
                Cadence Features vs Traditional Approaches
              </h2>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Why constraint-satisfaction mathematical optimization outperforms heuristic legacy APS tools and spreadsheets.
              </p>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-outline-variant/50 shadow-sm bg-surface-container-lowest">
              <table className="w-full text-left font-body-dense text-xs border-collapse">
                <thead>
                  <tr className="bg-surface-container border-b border-outline-variant font-mono uppercase text-on-surface-variant tracking-wider">
                    <th className="py-4 px-6">Capability Dimension</th>
                    <th className="py-4 px-6 text-primary font-bold">Cadence APS (CP-SAT)</th>
                    <th className="py-4 px-6 text-on-surface-variant">Legacy APS Tools</th>
                    <th className="py-4 px-6 text-on-surface-variant">Manual Spreadsheets</th>
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
              Experience the power of Cadence Features on your plant data.
            </h2>
            <p className="text-base text-on-surface-variant max-w-xl leading-relaxed">
              Send us an anonymized work orders sample and line changeover matrix. We will model your plant's hardest bottleneck in 48 hours.
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
