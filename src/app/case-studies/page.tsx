'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import CadenceHeader from '@/components/CadenceHeader';
import CadenceFooter from '@/components/CadenceFooter';
import CadenceDemoModal from '@/components/CadenceDemoModal';
import { FadeIn, FadeInStagger } from '@/components/Motion';

export default function Page() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-surface text-on-surface flex flex-col selection:bg-primary/20 transition-colors">
      <CadenceHeader onOpenDemoModal={() => setIsDemoModalOpen(true)} />
      
      <main className="w-full pt-16 bg-surface flex-1">
        <div className="flex flex-col w-full">
{/* Telemetry Bar */}
<section className="w-full bg-surface-container-high py-2.5 px-margin">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-2 text-on-surface-variant font-tabular-mono-dense text-tabular-mono-dense">
<div className="flex items-center gap-space-sm flex-wrap">
<span className="inline-flex items-center gap-1.5 px-space-xs py-0.5 rounded bg-surface-container-lowest text-primary font-medium">
<span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
          AUDITED PLANT TELEMETRY
        </span>
<span className="hidden sm:inline text-outline-variant">|</span>
<span>VERIFIED POST-COMMISSIONING 90-DAY AUDITS</span>
<span className="hidden sm:inline text-outline-variant">|</span>
<span className="text-on-surface font-semibold">48 GLOBAL FACILITIES REPORTING</span>
</div>
<div className="flex items-center gap-space-md font-medium text-on-surface">
<span className="inline-flex items-center gap-1 text-secondary">
<span className="material-symbols-outlined text-[14px]">trending_up</span>
          MEDIAN OEE LIFT: +9.4 PTS
        </span>
<span className="text-outline-variant">/</span>
<span className="inline-flex items-center gap-1 text-primary">
<span className="material-symbols-outlined text-[14px]">tune</span>
          CIP &amp; CHANGEOVER REDUCTION: -34.8%
        </span>
</div>
</div>
</section>
{/* Hero Section */}
<section className="w-full py-16 lg:py-24 px-margin">
<div className="max-w-7xl mx-auto flex flex-col gap-10">
<div className="flex flex-col gap-4 max-w-4xl">
<div className="inline-flex items-center gap-2">
<span className="font-eyebrow text-eyebrow text-primary uppercase px-space-xs py-0.5 rounded bg-primary-fixed">
            EMPIRICAL EVIDENCE // 48 SITES
          </span>
<span className="font-eyebrow text-eyebrow text-on-surface-variant uppercase">
            APS REPLACEMENT AUDITS
          </span>
</div>
<h1 className="font-display text-display text-on-surface tracking-tight leading-[1.08]">
          How Tier-1 manufacturers eliminated schedule fiction on the factory floor.
        </h1>
<p className="font-body-default text-body-default text-on-surface-variant max-w-3xl leading-relaxed">
          Read empirical, audited case studies of production facilities replacing legacy spreadsheets and heuristic APS engines with Cadence deterministic CP-SAT scheduling. Every figure below is backed by third-party post-go-live accounting validation.
        </p>
</div>
{/* Aggregate Impact Metric Strip */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
<div className="bg-surface-container-low p-6 rounded-lg shadow-sm flex flex-col justify-between">
<div className="flex items-center justify-between mb-4">
<span className="font-eyebrow text-eyebrow text-on-surface-variant uppercase">Cumulative Fleet Margin</span>
<span className="material-symbols-outlined text-primary text-[20px]">account_balance_wallet</span>
</div>
<div>
<div className="font-display text-display text-on-surface font-semibold tracking-tight leading-none mb-1">
              $18.4M
            </div>
<p className="font-body-dense text-body-dense text-on-surface-variant">
              Annual margin recaptured directly from idle equipment &amp; scrap across audited plants.
            </p>
</div>
</div>
<div className="bg-surface-container-low p-6 rounded-lg shadow-sm flex flex-col justify-between">
<div className="flex items-center justify-between mb-4">
<span className="font-eyebrow text-eyebrow text-on-surface-variant uppercase">Time-to-Value Horizon</span>
<span className="material-symbols-outlined text-secondary text-[20px]">speed</span>
</div>
<div>
<div className="font-display text-display text-on-surface font-semibold tracking-tight leading-none mb-1">
              34 Days
            </div>
<p className="font-body-dense text-body-dense text-on-surface-variant">
              Median payback period calculated from live plant-floor signoff to full capital recovery.
            </p>
</div>
</div>
<div className="bg-surface-container-low p-6 rounded-lg shadow-sm flex flex-col justify-between">
<div className="flex items-center justify-between mb-4">
<span className="font-eyebrow text-eyebrow text-on-surface-variant uppercase">Allergen Flush Compression</span>
<span className="material-symbols-outlined text-primary text-[20px]">clean_hands</span>
</div>
<div>
<div className="font-display text-display text-on-surface font-semibold tracking-tight leading-none mb-1">
              -76.4%
            </div>
<p className="font-body-dense text-body-dense text-on-surface-variant">
              Caustic and sanitize sequence compression achieved via automated traveling salesperson tours.
            </p>
</div>
</div>
<div className="bg-surface-container-low p-6 rounded-lg shadow-sm flex flex-col justify-between">
<div className="flex items-center justify-between mb-4">
<span className="font-eyebrow text-eyebrow text-on-surface-variant uppercase">Hold Decay Integrity</span>
<span className="material-symbols-outlined text-secondary text-[20px]">verified_user</span>
</div>
<div>
<div className="font-display text-display text-on-surface font-semibold tracking-tight leading-none mb-1">
              0 Spoils
            </div>
<p className="font-body-dense text-body-dense text-on-surface-variant">
              Zero buffer tank hold-decay scrap events across 12M operating hours under CP-SAT constraints.
            </p>
</div>
</div>
</div>
</div>
</section>
{/* Filter & Search Controls */}
<section className="w-full bg-surface-container py-6 px-margin">
<div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-center justify-between gap-4">
<div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
<button className="px-3.5 py-1.5 rounded-lg bg-on-surface text-surface font-body-dense text-body-dense whitespace-nowrap shadow-sm">
          All Facilities (48)
        </button>
<button className="px-3.5 py-1.5 rounded-lg bg-surface-container-lowest text-on-surface-variant hover:text-on-surface font-body-dense text-body-dense whitespace-nowrap transition-colors">
          Food &amp; Beverage / CPG (18)
        </button>
<button className="px-3.5 py-1.5 rounded-lg bg-surface-container-lowest text-on-surface-variant hover:text-on-surface font-body-dense text-body-dense whitespace-nowrap transition-colors">
          Pharma &amp; Life Sciences (12)
        </button>
<button className="px-3.5 py-1.5 rounded-lg bg-surface-container-lowest text-on-surface-variant hover:text-on-surface font-body-dense text-body-dense whitespace-nowrap transition-colors">
          Specialty Chemicals (10)
        </button>
<button className="px-3.5 py-1.5 rounded-lg bg-surface-container-lowest text-on-surface-variant hover:text-on-surface font-body-dense text-body-dense whitespace-nowrap transition-colors">
          Packaging &amp; Converting (8)
        </button>
</div>
<div className="relative w-full lg:w-96">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[18px]">search</span>
<input className="w-full h-10 pl-9 pr-4 rounded-lg bg-surface-container-lowest text-on-surface font-body-dense text-body-dense placeholder:text-outline focus:outline-none focus:ring-1 focus:ring-primary shadow-sm" placeholder="Filter by bottleneck, plant topology, ERP (SAP, NetSuite)..." type="text"/>
</div>
</div>
</section>
{/* Featured Deep-Dive Case Study */}
<section className="w-full py-16 px-margin">
<div className="max-w-7xl mx-auto flex flex-col gap-8">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="w-2.5 h-2.5 rounded-full bg-primary"></span>
<span className="font-eyebrow text-eyebrow uppercase text-primary font-semibold tracking-wider">
            FEATURED AUDIT // FULL SYSTEM DEEP-DIVE
          </span>
</div>
<span className="font-tabular-mono text-tabular-mono text-on-surface-variant hidden sm:inline">
          REF: AUD-FMCG-2024-CHI
        </span>
</div>
<div className="bg-surface-container-low rounded-xl p-8 lg:p-10 shadow-sm flex flex-col gap-10">
{/* Profile Header */}
<div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-6">
<div className="flex flex-col gap-2 max-w-3xl">
<span className="font-eyebrow text-eyebrow text-on-surface-variant uppercase tracking-wider">
              CLIENT PROFILE // SNACK &amp; ALLERGEN BAKERY
            </span>
<h2 className="font-headline-lg text-headline-lg text-on-surface">
              Fortune 100 FMCG Manufacturer — Chicago Plant
            </h2>
<div className="flex items-center gap-3 text-on-surface-variant font-tabular-mono-dense text-tabular-mono-dense flex-wrap pt-1">
<span className="px-2 py-0.5 rounded bg-surface-container">14 Packaging Lines</span>
<span className="px-2 py-0.5 rounded bg-surface-container">420 Active SKUs</span>
<span className="px-2 py-0.5 rounded bg-surface-container">SAP S/4HANA Core</span>
<span className="px-2 py-0.5 rounded bg-surface-container">2 Continuous Tunnel Ovens</span>
</div>
</div>
<div className="flex items-center gap-2">
<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-secondary-container text-on-secondary-container font-tabular-mono-dense text-tabular-mono-dense font-medium">
<span className="material-symbols-outlined text-[16px]">verified</span>
              P&amp;L Reconciled
            </span>
</div>
</div>
{/* Metric Callout Strip */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
<div className="bg-surface-container-lowest p-6 rounded-lg shadow-sm">
<span className="font-eyebrow text-eyebrow text-on-surface-variant uppercase">Sanitation Recovery</span>
<div className="font-headline-lg text-headline-lg text-primary font-semibold mt-1 mb-1">
              -38.2%
            </div>
<p className="font-body-dense text-body-dense text-on-surface font-medium">
              Washdown Waste Compressed
            </p>
<p className="font-tabular-mono-dense text-tabular-mono-dense text-on-surface-variant mt-1">
              Reclaimed 28.5 line hours/week across packing lines
            </p>
</div>
<div className="bg-surface-container-lowest p-6 rounded-lg shadow-sm">
<span className="font-eyebrow text-eyebrow text-on-surface-variant uppercase">Throughput Synchronization</span>
<div className="font-headline-lg text-headline-lg text-secondary font-semibold mt-1 mb-1">
              +11.6 pts
            </div>
<p className="font-body-dense text-body-dense text-on-surface font-medium">
              Line OEE Sustained Lift
            </p>
<p className="font-tabular-mono-dense text-tabular-mono-dense text-on-surface-variant mt-1">
              Maintained continuous proofer &amp; oven synchronized dispatch
            </p>
</div>
<div className="bg-surface-container-lowest p-6 rounded-lg shadow-sm">
<span className="font-eyebrow text-eyebrow text-on-surface-variant uppercase">Direct Financial Impact</span>
<div className="font-headline-lg text-headline-lg text-on-surface font-semibold mt-1 mb-1">
              $1.42M
            </div>
<p className="font-body-dense text-body-dense text-on-surface font-medium">
              First-Year Verified Margin Recaptured
            </p>
<p className="font-tabular-mono-dense text-tabular-mono-dense text-on-surface-variant mt-1">
              100% investment payback achieved in 27 running days
            </p>
</div>
</div>
{/* Plant Snapshot Image & Telemetry Mockup */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
<div className="lg:col-span-7 rounded-lg overflow-hidden relative shadow-md">
<img className="w-full h-80 object-cover rounded-lg" alt="Modern automated FMCG food packaging line" src="/images/case-tetrabio.jpg" loading="lazy" />
<div className="absolute bottom-3 left-3 bg-surface-container-lowest/90 backdrop-blur px-3 py-1.5 rounded text-on-surface font-tabular-mono-dense text-tabular-mono-dense shadow-sm flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-secondary"></span>
              Live Dispatch Active: Packaging Cell 04-B
            </div>
</div>
{/* Inline Telemetry Snippet */}
<div className="lg:col-span-5 bg-inverse-surface p-6 rounded-lg text-inverse-on-surface font-tabular-mono text-tabular-mono flex flex-col gap-3">
<div className="flex items-center justify-between pb-2">
<span className="text-outline uppercase text-[11px]">SOLVER KERNEL EMIT</span>
<span className="text-primary-fixed-dim text-[11px]">CP-SAT v9.8</span>
</div>
<div className="text-[12px] leading-relaxed space-y-1 text-surface-container-highest">
<p><span className="text-outline">&gt;</span> model.AddCircuit(allergen_subtours)</p>
<p><span className="text-outline">&gt;</span> solver.SetDisjunctiveCrew(crew_size=2)</p>
<p><span className="text-outline">&gt;</span> search_workers: 16 | branches: 48,209</p>
<p><span className="text-secondary-fixed">&gt; OPTIMAL SOLUTION FOUND (0.428s)</span></p>
<p className="text-outline-variant pt-2">&gt; Caustic flush duration: 65m (was 435m)</p>
<p className="text-outline-variant">&gt; Starvation risk: 0.00%</p>
</div>
</div>
</div>
{/* 3-Pillar Operational Breakdown */}
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
<div className="bg-surface-container-lowest p-6 rounded-lg shadow-sm flex flex-col gap-3">
<div className="flex items-center gap-2 text-error font-title-md text-title-md font-semibold">
<span className="material-symbols-outlined text-[20px]">warning</span>
              The Challenge
            </div>
<p className="font-body-dense text-body-dense text-on-surface-variant leading-relaxed">
              Sequence-dependent allergen washdowns between peanut butter and plain dough lines caused catastrophic 4-hour caustic flushes. Production schedulers relied on 14 separate spreadsheets that frequently desynchronized tunnel ovens from packing cells, resulting in hot dough backups and emergency dump dumps.
            </p>
</div>
<div className="bg-surface-container-lowest p-6 rounded-lg shadow-sm flex flex-col gap-3">
<div className="flex items-center gap-2 text-primary font-title-md text-title-md font-semibold">
<span className="material-symbols-outlined text-[20px]">architecture</span>
              Cadence Architecture
            </div>
<p className="font-body-dense text-body-dense text-on-surface-variant leading-relaxed">
              Implemented bidirectional SAP S/4HANA RFC integration. Formulated an N×N asymmetric traveling salesperson matrix with AddCircuit() to group allergen SKUs without starving downstream shelf life. Changeovers were bound to strict disjunctive mechanics constraints (2 shared crew members across 14 lines).
            </p>
</div>
<div className="bg-surface-container-lowest p-6 rounded-lg shadow-sm flex flex-col gap-3">
<div className="flex items-center gap-2 text-secondary font-title-md text-title-md font-semibold">
<span className="material-symbols-outlined text-[20px]">task_alt</span>
              Audited Plant Floor Results
            </div>
<p className="font-body-dense text-body-dense text-on-surface-variant leading-relaxed">
              Total CIP washdown time plummeted from 435 mins/week to 65 mins/week. Zero oven starvation stops recorded across 12 consecutive months. Unscheduled weekend overtime shifts collapsed from 18 shifts per month to just 2, saving over $340k in premium labor.
            </p>
</div>
</div>
{/* Plant Leader Verified Quote */}
<div className="bg-surface-container p-6 rounded-lg flex flex-col sm:flex-row items-start gap-4">
<span className="material-symbols-outlined text-primary text-[32px] shrink-0">format_quote</span>
<div className="flex flex-col gap-2">
<p className="font-body-default text-body-default text-on-surface italic leading-relaxed">
              “Prior to Cadence, our master scheduler spent six hours every morning fixing schedule collisions when dough mix batches were delayed by 15 minutes. Cadence solved the entire week’s finite capacity in 45 seconds, perfectly pacing our tunnel ovens and saving us almost 30 hours of caustic washdown every week.”
            </p>
<div className="flex items-center gap-2 font-tabular-mono-dense text-tabular-mono-dense text-on-surface-variant mt-1">
<span className="font-semibold text-on-surface">VP of Global Manufacturing Operations</span>
<span>—</span>
<span>Fortune 100 FMCG Brand</span>
</div>
</div>
</div>
</div>
</div>
</section>
{/* Grid of 4 Detailed Facility Case Studies */}
<section className="w-full py-16 sm:py-20 px-margin bg-surface-container-low">
<div className="max-w-7xl mx-auto flex flex-col gap-10">
<div className="flex flex-col gap-2">
<span className="font-eyebrow text-eyebrow text-primary uppercase">PLANT-BY-PLANT FIELD REPORTS</span>
<h2 className="font-headline-lg text-headline-lg text-on-surface">
          Deterministic scheduling validated across diverse topologies
        </h2>
<p className="font-body-default text-body-default text-on-surface-variant max-w-2xl">
          Detailed mathematical formulations and economic returns across aseptic bottling, sterile biopharma, continuous polymer synthesis, and precision converting.
        </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
{/* Case 1: Biopharma OSD */}
<div className="bg-surface-container-lowest p-8 rounded-lg shadow-sm flex flex-col justify-between gap-6">
<div className="flex flex-col gap-4">
<div className="flex items-center justify-between">
<span className="px-2.5 py-1 rounded bg-surface-container text-on-surface font-eyebrow text-eyebrow uppercase">
                Pharma &amp; Life Sciences
              </span>
<span className="font-tabular-mono-dense text-tabular-mono-dense text-on-surface-variant">Basel, Switzerland</span>
</div>
<div>
<h3 className="font-title-lg text-title-lg text-on-surface font-semibold">
                Biopharma Sterile Oral Solid Dosage (OSD) Facility
              </h3>
<p className="font-tabular-mono-dense text-tabular-mono-dense text-primary font-medium mt-1">
                TOPOLOGY: 6 WET GRANULATORS • 8 ROTARY TABLET PRESSES • 4 COATERS
              </p>
</div>
<div className="flex flex-col gap-3 font-body-dense text-body-dense text-on-surface-variant">
<div>
<strong className="text-on-surface">Challenge:</strong> Strict 4-hour intermediate granulate buffer decay hold-times before compression. Batch delays in tablet compression caused unrecoverable buffer expiration, resulting in $380,000 in quarterly scrapped API.
              </div>
<div>
<strong className="text-on-surface">Solution:</strong> Implemented hard non-relaxable interval constraints (<code className="font-tabular-mono-dense bg-surface-container px-1 py-0.5 rounded text-on-surface">IntEnd - IntStart ≤ 240m</code>) with automated microbiological release gates and cleanroom cleaning disjunctions.
              </div>
</div>
</div>
<div className="pt-4 bg-surface-container-low -mx-8 -mb-8 p-6 rounded-b-lg flex flex-col gap-2">
<span className="font-eyebrow text-eyebrow text-on-surface-variant uppercase">Audited 90-Day Metric</span>
<div className="flex items-center justify-between flex-wrap gap-2">
<span className="font-tabular-mono text-tabular-mono text-secondary font-semibold">100.0% Hold Compliance</span>
<span className="font-tabular-mono text-tabular-mono text-on-surface font-semibold">0 Scrapped Batches (18 mos)</span>
<span className="font-tabular-mono text-tabular-mono text-primary font-semibold">+$1.1M Recaptured Margin</span>
</div>
</div>
</div>
{/* Case 2: Aseptic Bottling */}
<div className="bg-surface-container-lowest p-8 rounded-lg shadow-sm flex flex-col justify-between gap-6">
<div className="flex flex-col gap-4">
<div className="flex items-center justify-between">
<span className="px-2.5 py-1 rounded bg-surface-container text-on-surface font-eyebrow text-eyebrow uppercase">
                Food &amp; Beverage
              </span>
<span className="font-tabular-mono-dense text-tabular-mono-dense text-on-surface-variant">Munich, Germany</span>
</div>
<div>
<h3 className="font-title-lg text-title-lg text-on-surface font-semibold">
                Multi-Tier Aseptic Dairy &amp; Plant-Based Bottling
              </h3>
<p className="font-tabular-mono-dense text-tabular-mono-dense text-primary font-medium mt-1">
                TOPOLOGY: 3 CONTINUOUS UHT PASTEURIZERS • 9 FILLING LINES • BUFFER SILOS
              </p>
</div>
<div className="flex flex-col gap-3 font-body-dense text-body-dense text-on-surface-variant">
<div>
<strong className="text-on-surface">Challenge:</strong> Continuous pasteurizer flow directly coupled to discrete multi-lane packaging. Rapid shifts between oat milk, almond milk, and dairy triggered mandatory sterile water flushes and caused pasteurizer overheating shutdowns.
              </div>
<div>
<strong className="text-on-surface">Solution:</strong> Continuous cumulative reservoir balance constraints with dynamic piecewise flow pacing, ensuring pasteurizers never hit low-fill cavitation or high-fill safety dumps.
              </div>
</div>
</div>
<div className="pt-4 bg-surface-container-low -mx-8 -mb-8 p-6 rounded-b-lg flex flex-col gap-2">
<span className="font-eyebrow text-eyebrow text-on-surface-variant uppercase">Audited 90-Day Metric</span>
<div className="flex items-center justify-between flex-wrap gap-2">
<span className="font-tabular-mono text-tabular-mono text-secondary font-semibold">-41.2% CIP Chemical Waste</span>
<span className="font-tabular-mono text-tabular-mono text-on-surface font-semibold">+8.4 pts Plant OEE</span>
<span className="font-tabular-mono text-tabular-mono text-primary font-semibold">$890k/yr Direct Savings</span>
</div>
</div>
</div>
{/* Case 3: Specialty Polymers */}
<div className="bg-surface-container-lowest p-8 rounded-lg shadow-sm flex flex-col justify-between gap-6">
<div className="flex flex-col gap-4">
<div className="flex items-center justify-between">
<span className="px-2.5 py-1 rounded bg-surface-container text-on-surface font-eyebrow text-eyebrow uppercase">
                Specialty Chemicals
              </span>
<span className="font-tabular-mono-dense text-tabular-mono-dense text-on-surface-variant">Baton Rouge, USA</span>
</div>
<div>
<h3 className="font-title-lg text-title-lg text-on-surface font-semibold">
                Specialty Polymers &amp; Synthetic Resins Plant
              </h3>
<p className="font-tabular-mono-dense text-tabular-mono-dense text-primary font-medium mt-1">
                TOPOLOGY: 18 EXOTHERMIC BATCH REACTORS • 5 PELLETIZING EXTRUDERS
              </p>
</div>
<div className="flex flex-col gap-3 font-body-dense text-body-dense text-on-surface-variant">
<div>
<strong className="text-on-surface">Challenge:</strong> Severe exothermic cooling curves paired with extreme color transition penalties. Switching from carbon-black infused compound to optical-clear polymer required an eight-hour hazardous solvent wash and heavy scrap loss.
              </div>
<div>
<strong className="text-on-surface">Solution:</strong> Formulated chromatic transition penalty cost matrices combined with thermodynamic cooling decay windows to maximize light-to-dark sequencing without violating customer delivery SLAs.
              </div>
</div>
</div>
<div className="pt-4 bg-surface-container-low -mx-8 -mb-8 p-6 rounded-b-lg flex flex-col gap-2">
<span className="font-eyebrow text-eyebrow text-on-surface-variant uppercase">Audited 90-Day Metric</span>
<div className="flex items-center justify-between flex-wrap gap-2">
<span className="font-tabular-mono text-tabular-mono text-secondary font-semibold">-28.5% Solvent Waste</span>
<span className="font-tabular-mono text-tabular-mono text-on-surface font-semibold">2.1x Cycle Turn Velocity</span>
<span className="font-tabular-mono text-tabular-mono text-primary font-semibold">$670k/yr Cash Savings</span>
</div>
</div>
</div>
{/* Case 4: Packaging & Converting */}
<div className="bg-surface-container-lowest p-8 rounded-lg shadow-sm flex flex-col justify-between gap-6">
<div className="flex flex-col gap-4">
<div className="flex items-center justify-between">
<span className="px-2.5 py-1 rounded bg-surface-container text-on-surface font-eyebrow text-eyebrow uppercase">
                Packaging &amp; Converting
              </span>
<span className="font-tabular-mono-dense text-tabular-mono-dense text-on-surface-variant">Atlanta, USA</span>
</div>
<div>
<h3 className="font-title-lg text-title-lg text-on-surface font-semibold">
                Flexible Film &amp; Corrugated Packaging Converter
              </h3>
<p className="font-tabular-mono-dense text-tabular-mono-dense text-primary font-medium mt-1">
                TOPOLOGY: 4 WIDE-WEB FLEXO PRESSES • 8 SLITTERS • DIE-CUTTER POOL
              </p>
</div>
<div className="flex flex-col gap-3 font-body-dense text-body-dense text-on-surface-variant">
<div>
<strong className="text-on-surface">Challenge:</strong> High-mix slitter knife positioning bottlenecks. Tooling dies and skilled setup technicians were constantly oversubscribed across 8 lines, generating 52 hours of cumulative setup downtime every week.
              </div>
<div>
<strong className="text-on-surface">Solution:</strong> Joint 1D/2D trim-loss minimization integrated directly with multi-resource disjunctive tooling and technician constraints to eliminate wait-for-setup line stoppages.
              </div>
</div>
</div>
<div className="pt-4 bg-surface-container-low -mx-8 -mb-8 p-6 rounded-b-lg flex flex-col gap-2">
<span className="font-eyebrow text-eyebrow text-on-surface-variant uppercase">Audited 90-Day Metric</span>
<div className="flex items-center justify-between flex-wrap gap-2">
<span className="font-tabular-mono text-tabular-mono text-secondary font-semibold">+91.4% Slitter Yield</span>
<span className="font-tabular-mono text-tabular-mono text-on-surface font-semibold">-34% Setup Downtime</span>
<span className="font-tabular-mono text-tabular-mono text-primary font-semibold">$520k/yr Direct Value</span>
</div>
</div>
</div>
</div>
</div>
</section>
{/* Verification Methodology Protocol */}
<section className="w-full py-16 px-margin">
<div className="max-w-7xl mx-auto flex flex-col gap-10">
<div className="flex flex-col gap-3 max-w-3xl">
<span className="font-eyebrow text-eyebrow text-primary uppercase">EMPIRICAL GOVERNANCE</span>
<h2 className="font-headline-lg text-headline-lg text-on-surface">
          The Plant Leader Audit Protocol &amp; Verification Methodology
        </h2>
<p className="font-body-default text-body-default text-on-surface-variant">
          Cadence does not measure ROI with vanity projections. Every payback metric is confirmed through an air-gapped three-stage mathematical reconciliation protocol before being published.
        </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="bg-surface-container-low p-8 rounded-lg shadow-sm flex flex-col gap-4 relative">
<span className="font-display text-display text-primary font-semibold leading-none opacity-40">01</span>
<h3 className="font-title-lg text-title-lg text-on-surface font-semibold">
            Pre-Cadence Baseline Logging
          </h3>
<p className="font-body-dense text-body-dense text-on-surface-variant leading-relaxed">
            We extract 90 days of raw unedited historical ERP work orders, actual machine SCADA runtimes, maintenance logs, and shift scrap reports. This establishes the uncontested physical baseline of shop-floor performance.
          </p>
<div className="pt-2 text-on-surface-variant font-tabular-mono-dense text-tabular-mono-dense">
            • Raw SCADA timestamp extraction<br/>
            • True changeover duration audit
          </div>
</div>
<div className="bg-surface-container-low p-8 rounded-lg shadow-sm flex flex-col gap-4 relative">
<span className="font-display text-display text-primary font-semibold leading-none opacity-40">02</span>
<h3 className="font-title-lg text-title-lg text-on-surface font-semibold">
            Air-Gapped Counter-Factual Replay
          </h3>
<p className="font-body-dense text-body-dense text-on-surface-variant leading-relaxed">
            The historical order book is fed through the Cadence CP-SAT constraint engine with identical machine capacities and real-world downtime events. This mathematical simulation proves exact delta potential without confounding variables.
          </p>
<div className="pt-2 text-on-surface-variant font-tabular-mono-dense text-tabular-mono-dense">
            • Deterministic backtest validation<br/>
            • Strict resource conflict verification
          </div>
</div>
<div className="bg-surface-container-low p-8 rounded-lg shadow-sm flex flex-col gap-4 relative">
<span className="font-display text-display text-primary font-semibold leading-none opacity-40">03</span>
<h3 className="font-title-lg text-title-lg text-on-surface font-semibold">
            Post-Go-Live 90-Day Financial Re-Audit
          </h3>
<p className="font-body-dense text-body-dense text-on-surface-variant leading-relaxed">
            Following pilot launch, plant financial controllers and plant engineers audit shift logs, scrap slips, and utility costs against solver promises. The payback period is signed off exclusively when realized savings meet or exceed the target.
          </p>
<div className="pt-2 text-on-surface-variant font-tabular-mono-dense text-tabular-mono-dense">
            • Plant Controller signed signoff<br/>
            • Continuous variance drift telemetry
          </div>
</div>
</div>
</div>
</section>
{/* Secondary Plant Visual Strip */}
<section className="w-full px-margin pb-12">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
<div className="rounded-lg overflow-hidden relative shadow-sm h-48">
<img className="w-full h-full object-cover rounded-lg" alt="Sterile pharmaceutical cleanroom packaging" src="/images/industry-pharma.jpg" loading="lazy" />
<div className="absolute inset-0 bg-gradient-to-t from-on-surface/80 via-transparent to-transparent flex items-end p-4">
<span className="font-eyebrow text-eyebrow text-surface-bright uppercase">Pharma OSD // Cleanroom Cell 02</span>
</div>
</div>
<div className="rounded-lg overflow-hidden relative shadow-sm h-48">
<img className="w-full h-full object-cover rounded-lg" alt="Chemical plant central operations control room" src="/images/company-control.jpg" loading="lazy" />
<div className="absolute inset-0 bg-gradient-to-t from-on-surface/80 via-transparent to-transparent flex items-end p-4">
<span className="font-eyebrow text-eyebrow text-surface-bright uppercase">Resin Plant // Dispatch Terminal</span>
</div>
</div>
<div className="rounded-lg overflow-hidden relative shadow-sm h-48">
<img className="w-full h-full object-cover rounded-lg" alt="High-speed converting and plastics extrusion plant" src="/images/case-apex.jpg" loading="lazy" />
<div className="absolute inset-0 bg-gradient-to-t from-on-surface/80 via-transparent to-transparent flex items-end p-4">
<span className="font-eyebrow text-eyebrow text-surface-bright uppercase">Packaging // Slitter Cell Line 07</span>
</div>
</div>
</div>
</section>
{/* Conversion CTA Banner */}
<section className="w-full py-16 px-margin bg-surface-container">
<div className="max-w-5xl mx-auto bg-surface-container-lowest p-8 lg:p-12 rounded-xl shadow-md flex flex-col md:flex-row items-center justify-between gap-8">
<div className="flex flex-col gap-3 max-w-xl">
<div className="inline-flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-secondary"></span>
<span className="font-eyebrow text-eyebrow uppercase text-secondary font-medium">
            48 PLANTS BENCHMARKED
          </span>
</div>
<h2 className="font-headline-md text-headline-md text-on-surface tracking-tight">
          Benchmark your plant against 48 active facilities.
        </h2>
<p className="font-body-default text-body-default text-on-surface-variant">
          Submit your plant’s line topology, weekly changeovers, and shift structure. Receive a customized 12-page audited payback forecast in 48 hours.
        </p>
</div>
<div className="flex flex-col sm:flex-row md:flex-col gap-3 w-full md:w-auto shrink-0">
<a className="h-11 px-6 bg-primary text-on-primary hover:bg-primary-container rounded font-body-dense text-body-dense font-medium flex items-center justify-center shadow-sm transition-colors text-center" href="/book-a-demo">
          Request Plant Feasibility Audit
        </a>
<a className="h-11 px-6 bg-surface-container text-on-surface hover:bg-surface-container-high rounded font-body-dense text-body-dense font-medium flex items-center justify-center shadow-sm transition-colors text-center" href="/case-studies">
          Download Compendium (.pdf)
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
