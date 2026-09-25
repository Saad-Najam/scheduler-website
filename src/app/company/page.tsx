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
{/* Telemetry Bar / Sub-header Meta Track */}
<div className="w-full bg-surface-container-low px-margin py-2.5">
<div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-space-xs text-on-surface-variant font-eyebrow text-eyebrow uppercase tracking-widest">
<div className="flex items-center gap-space-sm flex-wrap">
<span className="inline-flex items-center gap-1.5 text-primary font-semibold">
<span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
          COMPANY // OPERATIONS RESEARCH LAB &amp; INDUSTRIAL ADVISORY
        </span>
<span className="text-outline-variant hidden sm:inline">•</span>
<span className="text-on-surface-variant">FOUNDED 2022</span>
</div>
<div className="flex items-center gap-space-md text-on-surface-variant">
<span className="inline-flex items-center gap-1">
<span className="material-symbols-outlined text-[14px] text-outline">location_on</span>
          SAN FRANCISCO, CA &amp; ZÜRICH, CH
        </span>
<span className="text-outline-variant">•</span>
<span className="text-secondary font-medium">48 GLOBAL PLANTS POWERED</span>
</div>
</div>
</div>
{/* Hero Section */}
<section className="relative w-full overflow-hidden px-margin pt-12 pb-16">
{/* Subtle architectural canvas grid backdrop */}
<div className="absolute inset-0 bg-gradient-to-b from-surface-container-low via-surface to-surface pointer-events-none -z-10"></div>
<div className="absolute -top-32 right-0 w-96 h-96 bg-primary-container/10 rounded-full blur-3xl pointer-events-none -z-10"></div>
<div className="max-w-7xl mx-auto flex flex-col gap-space-xl">
{/* Eyebrow & Status Flag */}
<div className="flex flex-wrap items-center gap-space-sm">
<span className="inline-flex items-center gap-1.5 px-space-sm py-1 rounded bg-primary-fixed text-on-primary-fixed font-eyebrow text-eyebrow uppercase font-medium">
<span className="material-symbols-outlined text-[13px]">terminal</span>
          OUR MISSION // DETERMINISTIC INDUSTRIAL COMPUTING
        </span>
<span className="inline-flex items-center gap-1 px-space-sm py-1 rounded bg-surface-container text-on-surface-variant font-tabular-mono-dense text-tabular-mono-dense">
<span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
          MILP &amp; CP-SAT HYBRID KERNEL
        </span>
</div>
{/* Main Headline & Subtitle */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start">
<div className="lg:col-span-8 flex flex-col gap-space-md">
<h1 className="font-display text-headline-lg lg:text-display text-on-surface tracking-tight leading-[1.08]">
            Replacing heuristic schedule fiction with <span className="text-primary-container inline-block underline decoration-primary/20 decoration-2 underline-offset-8">mathematical ground truth.</span>
</h1>
<p className="font-body-default text-title-md text-on-surface-variant leading-relaxed pt-space-xs max-w-3xl">
            Modern factories run on physics, chemistry, and human labor — yet production schedules have been managed on static spreadsheets and flawed linear heuristics for forty years. Cadence was founded by operations research scientists and plant automation veterans to bring exact combinatorial optimization to the physical economy.
          </p>
</div>
{/* Terminal-inspired solver execution card */}
<div className="lg:col-span-4 bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col gap-space-sm">
<div className="flex items-center justify-between pb-space-xs border-b border-surface-container">
<div className="flex items-center gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-surface-container-high"></div>
<div className="w-2.5 h-2.5 rounded-full bg-surface-container-high"></div>
<div className="w-2.5 h-2.5 rounded-full bg-surface-container-high"></div>
<span className="font-eyebrow text-eyebrow text-on-surface-variant ml-2 uppercase">solver_kernel.log</span>
</div>
<span className="font-tabular-mono-dense text-tabular-mono-dense text-secondary">OPTIMAL</span>
</div>
<div className="font-tabular-mono-dense text-tabular-mono-dense text-on-surface-variant space-y-1 py-1">
<p><span className="text-outline">&gt;</span> <span className="text-primary font-medium">BRANCH_AND_BOUND</span> init (threads: 64)</p>
<p><span className="text-outline">&gt;</span> 428,190 decision vars loaded</p>
<p><span className="text-outline">&gt;</span> 1,294,011 disjunctive constraints</p>
<p><span className="text-outline">&gt;</span> Gap: <span className="text-secondary font-medium">0.000%</span> (provably optimal)</p>
<p className="text-on-surface font-medium pt-1"><span className="text-outline">&gt;</span> Dispatched: 14 lines, 0 SLA penalties</p>
</div>
<div className="pt-space-xs flex items-center justify-between text-on-surface-variant font-eyebrow text-eyebrow uppercase bg-surface-container-low px-2 py-1.5 rounded">
<span>Convergence: 418ms</span>
<span className="text-primary font-semibold">100% Deterministic</span>
</div>
</div>
</div>
{/* Primary Metric Strip (4 Columns) */}
<div className="grid grid-cols-2 md:grid-cols-4 gap-space-md pt-space-md">
{/* Metric 1 */}
<div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col gap-space-xs hover:bg-surface-container-low transition-colors">
<span className="font-eyebrow text-eyebrow uppercase text-on-surface-variant tracking-wider">Active Enterprise Plants</span>
<div className="flex items-baseline gap-space-xs">
<span className="font-headline-lg text-headline-lg text-on-surface font-semibold tracking-tight">48</span>
<span className="font-eyebrow text-eyebrow text-secondary font-medium">+14 YoY</span>
</div>
<p className="font-body-dense text-body-dense text-on-surface-variant pt-space-xs">Continuous &amp; high-mix discrete global sites</p>
</div>
{/* Metric 2 */}
<div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col gap-space-xs hover:bg-surface-container-low transition-colors">
<span className="font-eyebrow text-eyebrow uppercase text-on-surface-variant tracking-wider">Direct Margin Recaptured</span>
<div className="flex items-baseline gap-space-xs">
<span className="font-headline-lg text-headline-lg text-primary font-semibold tracking-tight">$18.4M</span>
<span className="material-symbols-outlined text-[18px] text-primary">trending_up</span>
</div>
<p className="font-body-dense text-body-dense text-on-surface-variant pt-space-xs">Through eliminated clean-in-place waste</p>
</div>
{/* Metric 3 */}
<div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col gap-space-xs hover:bg-surface-container-low transition-colors">
<span className="font-eyebrow text-eyebrow uppercase text-on-surface-variant tracking-wider">Mathematical Proof</span>
<div className="flex items-baseline gap-space-xs">
<span className="font-headline-lg text-headline-lg text-secondary font-semibold tracking-tight">100%</span>
<span className="font-eyebrow text-eyebrow text-on-surface-variant">Deterministic</span>
</div>
<p className="font-body-dense text-body-dense text-on-surface-variant pt-space-xs">Zero linear heuristic approximation</p>
</div>
{/* Metric 4 */}
<div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col gap-space-xs hover:bg-surface-container-low transition-colors">
<span className="font-eyebrow text-eyebrow uppercase text-on-surface-variant tracking-wider">Median Convergence</span>
<div className="flex items-baseline gap-space-xs">
<span className="font-headline-lg text-headline-lg text-on-surface font-semibold tracking-tight">418<span className="text-title-lg font-normal text-on-surface-variant">ms</span></span>
<span className="font-eyebrow text-eyebrow text-primary">p99 &lt; 1.2s</span>
</div>
<p className="font-body-dense text-body-dense text-on-surface-variant pt-space-xs">Real-time shop floor re-dispatch rate</p>
</div>
</div>
</div>
</section>
{/* Engineering Philosophy: 3 Core Tenets */}
<section className="w-full px-margin py-16 bg-surface-container-low">
<div className="max-w-7xl mx-auto flex flex-col gap-space-xl">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
<div className="max-w-2xl flex flex-col gap-space-xs">
<span className="font-eyebrow text-eyebrow uppercase text-primary tracking-widest font-semibold">Engineering Philosophy // Non-Negotiable Axioms</span>
<h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">Three principles of deterministic dispatching</h2>
</div>
<p className="font-body-dense text-body-dense text-on-surface-variant max-w-md">
          Industrial production systems collapse when mathematical models diverge from thermal, chemical, and human limits on the shop floor.
        </p>
</div>
{/* Bento Cards Grid for 3 Tenets */}
<div className="grid grid-cols-1 lg:grid-cols-3 gap-space-lg">
{/* Tenet 01 */}
<div className="bg-surface-container-lowest p-space-xl rounded-xl shadow-sm flex flex-col justify-between gap-space-lg hover:shadow-md transition-shadow">
<div className="flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<span className="px-space-sm py-1 rounded bg-surface-container font-tabular-mono-dense text-tabular-mono-dense text-on-surface-variant font-medium">TENET 01</span>
<span className="material-symbols-outlined text-primary text-[28px]">thermostat</span>
</div>
<h3 className="font-title-lg text-title-lg text-on-surface font-semibold">Physics Over Averages</h3>
<p className="font-body-default text-body-default text-on-surface-variant leading-relaxed">
              Standard APS systems treat changeovers as fixed static averages. In reality, washdowns and setups are sequence-dependent, non-linear, and governed by thermodynamic and chemical decay. We model the physical plant as it actually exists.
            </p>
</div>
{/* Visual proof diagram snippet */}
<div className="bg-surface-container-low p-space-md rounded-lg flex flex-col gap-space-xs">
<div className="flex justify-between items-center text-on-surface-variant font-eyebrow text-eyebrow uppercase">
<span>Dynamic Matrix vs Fixed Avg</span>
<span className="text-error font-medium">-44% CIP Dwell</span>
</div>
<div className="w-full bg-surface-container h-2 rounded-full overflow-hidden flex">
<div className="bg-error h-full" style={{width: '70%'}}></div>
<div className="bg-primary-container h-full" style={{width: '30%'}}></div>
</div>
<div className="flex justify-between text-on-surface-variant font-tabular-mono-dense text-tabular-mono-dense pt-1">
<span>Standard APS: 120m avg</span>
<span className="text-primary font-medium">Cadence: 68m exact</span>
</div>
</div>
</div>
{/* Tenet 02 */}
<div className="bg-surface-container-lowest p-space-xl rounded-xl shadow-sm flex flex-col justify-between gap-space-lg hover:shadow-md transition-shadow">
<div className="flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<span className="px-space-sm py-1 rounded bg-surface-container font-tabular-mono-dense text-tabular-mono-dense text-on-surface-variant font-medium">TENET 02</span>
<span className="material-symbols-outlined text-secondary text-[28px]">verified</span>
</div>
<h3 className="font-title-lg text-title-lg text-on-surface font-semibold">Zero Schedule Fiction</h3>
<p className="font-body-default text-body-default text-on-surface-variant leading-relaxed">
              A schedule that cannot be executed on the factory floor is an expensive hallucination. Every dispatch produced by Cadence respects secondary crew pools, buffer holding dwell-times, and tooling contention as hard disjunctive constraints.
            </p>
</div>
{/* Constraint execution snippet */}
<div className="bg-surface-container-low p-space-md rounded-lg flex flex-col gap-space-xs">
<div className="flex justify-between items-center text-on-surface-variant font-eyebrow text-eyebrow uppercase">
<span>Hard Constraint Validation</span>
<span className="text-secondary font-medium">0 Infeasibilities</span>
</div>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-1.5 pt-1 font-tabular-mono-dense text-tabular-mono-dense text-center">
<div className="bg-surface-container py-1 rounded text-on-surface">CIP Crews ✓</div>
<div className="bg-surface-container py-1 rounded text-on-surface">Tooling ✓</div>
<div className="bg-surface-container py-1 rounded text-on-surface">Tanks ✓</div>
</div>
</div>
</div>
{/* Tenet 03 */}
<div className="bg-surface-container-lowest p-space-xl rounded-xl shadow-sm flex flex-col justify-between gap-space-lg hover:shadow-md transition-shadow">
<div className="flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<span className="px-space-sm py-1 rounded bg-surface-container font-tabular-mono-dense text-tabular-mono-dense text-on-surface-variant font-medium">TENET 03</span>
<span className="material-symbols-outlined text-primary text-[28px]">lock</span>
</div>
<h3 className="font-title-lg text-title-lg text-on-surface font-semibold">Air-Gapped Sovereignty</h3>
<p className="font-body-default text-body-default text-on-surface-variant leading-relaxed">
              Manufacturing intellectual property and proprietary formulation recipes must never leave plant boundaries or train third-party models. We engineer sovereign, zero-ingress computational engines built for the world's most critical supply chains.
            </p>
</div>
{/* Sovereign architecture snippet */}
<div className="bg-surface-container-low p-space-md rounded-lg flex flex-col gap-space-xs">
<div className="flex justify-between items-center text-on-surface-variant font-eyebrow text-eyebrow uppercase">
<span>Security Perimeter</span>
<span className="text-primary font-medium">Zero-Ingress</span>
</div>
<div className="flex items-center gap-space-xs text-on-surface-variant font-tabular-mono-dense text-tabular-mono-dense pt-1">
<span className="material-symbols-outlined text-[16px] text-secondary">security</span>
<span>On-Premise or VPC Single-Tenant Isolated</span>
</div>
</div>
</div>
</div>
</div>
</section>
{/* Operations Research Leadership & Scientific Board */}
<section className="w-full px-margin py-16 bg-surface">
<div className="max-w-7xl mx-auto flex flex-col gap-space-xl">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
<div className="max-w-2xl flex flex-col gap-space-xs">
<span className="font-eyebrow text-eyebrow uppercase text-primary tracking-widest font-semibold">Leadership &amp; Advisory // Operations Research Lab</span>
<h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">Scientists and plant operators, not generic SaaS executives</h2>
</div>
<div className="flex items-center gap-space-sm">
<span className="font-tabular-mono-dense text-tabular-mono-dense text-on-surface-variant">Combined 70+ peer-reviewed OR publications</span>
</div>
</div>
{/* Profile Cards Grid (4 Persons) */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-lg">
{/* Dr. Elena Vance */}
<div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md group hover:bg-surface-container-low transition-colors">
<div className="relative w-full aspect-square rounded-lg overflow-hidden bg-surface-container">
<img className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 transition-all duration-300" alt="Dr. Elena Vance, Co-Founder & Chief Scientist" src="/images/avatar-elena.jpg" loading="lazy" />
<div className="absolute bottom-2 left-2 bg-inverse-surface/85 backdrop-blur-sm text-inverse-on-surface font-eyebrow text-eyebrow px-2 py-0.5 rounded">
              EX-MIT ORC
            </div>
</div>
<div className="flex flex-col gap-1">
<h3 className="font-title-md text-title-md text-on-surface font-semibold">Dr. Elena Vance, Ph.D.</h3>
<span className="font-eyebrow text-eyebrow text-primary uppercase">Co-Founder &amp; Chief Scientist</span>
<p className="font-body-dense text-body-dense text-on-surface-variant pt-2 leading-normal">
              Former Principal Research Scientist in Discrete Optimization at MIT. Author of 14 foundational papers on CP-SAT and Branch-and-Bound algorithms for NP-hard disjunctive scheduling.
            </p>
</div>
<div className="mt-auto pt-space-xs flex items-center gap-1.5 text-outline text-eyebrow font-eyebrow">
<span className="material-symbols-outlined text-[14px]">menu_book</span>
<span>14 Papers Indexed</span>
</div>
</div>
{/* Marcus Sterling */}
<div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md group hover:bg-surface-container-low transition-colors">
<div className="relative w-full aspect-square rounded-lg overflow-hidden bg-surface-container">
<img className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 transition-all duration-300" alt="Marcus Sterling, Co-Founder & CEO" src="/images/avatar-marcus.jpg" loading="lazy" />
<div className="absolute bottom-2 left-2 bg-inverse-surface/85 backdrop-blur-sm text-inverse-on-surface font-eyebrow text-eyebrow px-2 py-0.5 rounded">
              18 YRS PLANT OPS
            </div>
</div>
<div className="flex flex-col gap-1">
<h3 className="font-title-md text-title-md text-on-surface font-semibold">Marcus Sterling</h3>
<span className="font-eyebrow text-eyebrow text-primary uppercase">Co-Founder &amp; CEO</span>
<p className="font-body-dense text-body-dense text-on-surface-variant pt-2 leading-normal">
              Former VP of Global Manufacturing Engineering at Fortune 50 CPG. Directed 18 years of operations across high-speed packaging, aseptic lines, and high-mix beverage facilities.
            </p>
</div>
<div className="mt-auto pt-space-xs flex items-center gap-1.5 text-outline text-eyebrow font-eyebrow">
<span className="material-symbols-outlined text-[14px]">factory</span>
<span>Ex-Global VP Ops</span>
</div>
</div>
{/* Dr. Aris Thorne */}
<div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md group hover:bg-surface-container-low transition-colors">
<div className="relative w-full aspect-square rounded-lg overflow-hidden bg-surface-container">
<img className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 transition-all duration-300" alt="Dr. Aris Thorne, Head of Industrial Systems" src="/images/avatar-david.jpg" loading="lazy" />
<div className="absolute bottom-2 left-2 bg-inverse-surface/85 backdrop-blur-sm text-inverse-on-surface font-eyebrow text-eyebrow px-2 py-0.5 rounded">
              EX-SIEMENS
            </div>
</div>
<div className="flex flex-col gap-1">
<h3 className="font-title-md text-title-md text-on-surface font-semibold">Dr. Aris Thorne</h3>
<span className="font-eyebrow text-eyebrow text-primary uppercase">Head of Industrial Systems</span>
<p className="font-body-dense text-body-dense text-on-surface-variant pt-2 leading-normal">
              Former Lead Automation Architect at Siemens Industrial Software. Specialized in ISA-95 protocol bridges, edge telemetry ingestion, and real-time bidirectional MES synchronization.
            </p>
</div>
<div className="mt-auto pt-space-xs flex items-center gap-1.5 text-outline text-eyebrow font-eyebrow">
<span className="material-symbols-outlined text-[14px]">hub</span>
<span>ISA-95 Committee</span>
</div>
</div>
{/* Prof. Henrik Lindqvist */}
<div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md group hover:bg-surface-container-low transition-colors">
<div className="relative w-full aspect-square rounded-lg overflow-hidden bg-surface-container">
<img className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 transition-all duration-300" alt="Prof. Henrik Lindqvist, Scientific Advisor" src="/images/avatar-sarah.jpg" loading="lazy" />
<div className="absolute bottom-2 left-2 bg-inverse-surface/85 backdrop-blur-sm text-inverse-on-surface font-eyebrow text-eyebrow px-2 py-0.5 rounded">
              ETH ZÜRICH
            </div>
</div>
<div className="flex flex-col gap-1">
<h3 className="font-title-md text-title-md text-on-surface font-semibold">Prof. Henrik Lindqvist</h3>
<span className="font-eyebrow text-eyebrow text-primary uppercase">Scientific Advisor</span>
<p className="font-body-dense text-body-dense text-on-surface-variant pt-2 leading-normal">
              Chair of Combinatorial Optimization at ETH Zürich. Recipient of the Beale-Orchard-Hays Prize for Excellence in Computational Mathematical Programming.
            </p>
</div>
<div className="mt-auto pt-space-xs flex items-center gap-1.5 text-outline text-eyebrow font-eyebrow">
<span className="material-symbols-outlined text-[14px]">military_tech</span>
<span>Beale-Orchard-Hays Prize</span>
</div>
</div>
</div>
</div>
</section>
{/* Industrial Pedigree & Backed by Global Leaders */}
<section className="w-full px-margin py-16 sm:py-20 bg-surface-container-low">
<div className="max-w-7xl mx-auto flex flex-col gap-space-lg">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm pb-space-sm border-b border-outline-variant/60">
<span className="font-eyebrow text-eyebrow uppercase text-on-surface-variant font-medium tracking-wider">
          BACKED BY PREMIER INDUSTRIAL DEEP-TECH VENTURES &amp; MANUFACTURING OPERATORS
        </span>
<span className="font-tabular-mono-dense text-tabular-mono-dense text-primary font-medium">SERIES A // $32M TOTAL CAPITAL</span>
</div>
{/* Investors & Industrial Partners Strip */}
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-space-md items-center text-center">
<div className="p-space-md rounded-lg bg-surface-container-lowest shadow-sm flex flex-col items-center justify-center">
<span className="font-title-md text-title-md font-bold tracking-tight text-on-surface">FOUNDRY</span>
<span className="font-eyebrow text-eyebrow text-on-surface-variant">Capital</span>
</div>
<div className="p-space-md rounded-lg bg-surface-container-lowest shadow-sm flex flex-col items-center justify-center">
<span className="font-title-md text-title-md font-bold tracking-tight text-on-surface">INDUSTRIAL</span>
<span className="font-eyebrow text-eyebrow text-on-surface-variant">Ventures EU</span>
</div>
<div className="p-space-md rounded-lg bg-surface-container-lowest shadow-sm flex flex-col items-center justify-center">
<span className="font-title-md text-title-md font-bold tracking-tight text-on-surface">ECLIPSE</span>
<span className="font-eyebrow text-eyebrow text-on-surface-variant">Physical Economy</span>
</div>
<div className="p-space-md rounded-lg bg-surface-container-lowest shadow-sm flex flex-col items-center justify-center">
<span className="font-title-md text-title-md font-bold tracking-tight text-on-surface">SCALE-TECH</span>
<span className="font-eyebrow text-eyebrow text-on-surface-variant">Manufacturing Fund</span>
</div>
<div className="col-span-2 md:col-span-4 lg:col-span-1 p-space-md rounded-lg bg-surface-container-lowest shadow-sm flex flex-col items-center justify-center">
<span className="font-title-md text-title-md font-bold tracking-tight text-primary">OPERATOR</span>
<span className="font-eyebrow text-eyebrow text-on-surface-variant">Syndicate Angels</span>
</div>
</div>
</div>
</section>
{/* Factory Visit & Plant Immersion Culture */}
<section className="w-full px-margin py-16 bg-surface">
<div className="max-w-7xl mx-auto flex flex-col gap-space-xl">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
<div className="lg:col-span-6 flex flex-col gap-space-md">
<span className="font-eyebrow text-eyebrow uppercase text-primary tracking-widest font-semibold">
            ENGINEERING METHODOLOGY // GROUND-TRUTH EMPIRICISM
          </span>
<h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight leading-tight">
            Built on the factory floor, not in an ivory tower
          </h2>
<p className="font-body-default text-body-default text-on-surface-variant leading-relaxed">
            Our optimization scientists and software engineers spend a mandatory minimum of <strong>two weeks per quarter</strong> wearing steel-toed boots in customer facilities. We stand beside line operators, observe manual changeover handoffs, audit dirty SCADA telemetry logs, and analyze cold clean-in-place cycles before writing a single line of solver logic.
          </p>
<div className="flex flex-col gap-space-sm pt-space-xs font-body-dense text-body-dense text-on-surface">
<div className="flex items-center gap-space-sm">
<span className="material-symbols-outlined text-secondary text-[20px]">check_circle</span>
<span>Direct operator shadow sessions on live packaging &amp; formulation runs</span>
</div>
<div className="flex items-center gap-space-sm">
<span className="material-symbols-outlined text-secondary text-[20px]">check_circle</span>
<span>Sensor drift reconciliation across legacy Rockwell &amp; Siemens PLCs</span>
</div>
<div className="flex items-center gap-space-sm">
<span className="material-symbols-outlined text-secondary text-[20px]">check_circle</span>
<span>Shop-floor dispatch usability validation under noisy, high-pressure shift change</span>
</div>
</div>
</div>
{/* 3 Factory Badges / Photo Showcase */}
<div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-3 gap-space-md">
{/* Plant 1: Chicago */}
<div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm flex flex-col">
<div className="h-44 w-full relative bg-surface-container">
<img className="w-full h-full object-cover" alt="Industrial beverage canning facility in Chicago" src="/images/case-tetrabio.jpg" loading="lazy" />
<span className="absolute top-2 right-2 bg-surface/90 backdrop-blur-sm text-on-surface font-eyebrow text-eyebrow px-2 py-0.5 rounded font-medium">
                USA
              </span>
</div>
<div className="p-space-md flex flex-col gap-1">
<span className="font-title-md text-title-md text-on-surface font-semibold">Chicago, IL</span>
<span className="font-eyebrow text-eyebrow text-on-surface-variant uppercase">Aseptic Beverage Plant</span>
<p className="font-tabular-mono-dense text-tabular-mono-dense text-secondary pt-1">4 Lines // 1,400 cans/min</p>
</div>
</div>
{/* Plant 2: Basel */}
<div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm flex flex-col">
<div className="h-44 w-full relative bg-surface-container">
<img className="w-full h-full object-cover" alt="Pharmaceutical cleanroom sterile production line in Basel" src="/images/industry-pharma.jpg" loading="lazy" />
<span className="absolute top-2 right-2 bg-surface/90 backdrop-blur-sm text-on-surface font-eyebrow text-eyebrow px-2 py-0.5 rounded font-medium">
                SUI
              </span>
</div>
<div className="p-space-md flex flex-col gap-1">
<span className="font-title-md text-title-md text-on-surface font-semibold">Basel, CH</span>
<span className="font-eyebrow text-eyebrow text-on-surface-variant uppercase">Sterile Bio-Formulation</span>
<p className="font-tabular-mono-dense text-tabular-mono-dense text-secondary pt-1">GMP Class A/B Cleanroom</p>
</div>
</div>
{/* Plant 3: Munich */}
<div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm flex flex-col">
<div className="h-44 w-full relative bg-surface-container">
<img className="w-full h-full object-cover" alt="Precision manufacturing and converting facility in Munich" src="/images/industry-converting.jpg" loading="lazy" />
<span className="absolute top-2 right-2 bg-surface/90 backdrop-blur-sm text-on-surface font-eyebrow text-eyebrow px-2 py-0.5 rounded font-medium">
                GER
              </span>
</div>
<div className="p-space-md flex flex-col gap-1">
<span className="font-title-md text-title-md text-on-surface font-semibold">Munich, DE</span>
<span className="font-eyebrow text-eyebrow text-on-surface-variant uppercase">Precision Converting</span>
<p className="font-tabular-mono-dense text-tabular-mono-dense text-secondary pt-1">Multi-Tier Disjunctive Cut</p>
</div>
</div>
</div>
</div>
</div>
</section>
{/* Careers / Open Engineering Roles */}
<section className="w-full px-margin py-16 bg-surface-container-low">
<div className="max-w-7xl mx-auto flex flex-col gap-space-xl">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
<div className="max-w-2xl flex flex-col gap-space-xs">
<span className="font-eyebrow text-eyebrow uppercase text-primary tracking-widest font-semibold">
            OPEN ROLES // JOIN THE OPERATIONS RESEARCH KERNEL TEAM
          </span>
<h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
            Solve computationally hard industrial problems
          </h2>
</div>
<span className="font-tabular-mono-dense text-tabular-mono-dense text-on-surface-variant">
          Kernel written in modern C++20, Rust, and WebGL
        </span>
</div>
{/* Roles Stack */}
<div className="flex flex-col gap-space-md">
{/* Role 1 */}
<div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-space-md hover:bg-surface hover:shadow-md transition-all">
<div className="flex flex-col gap-space-xs">
<div className="flex items-center gap-space-sm flex-wrap">
<span className="px-space-xs py-0.5 rounded bg-primary-fixed text-on-primary-fixed font-eyebrow text-eyebrow uppercase">OR Kernel</span>
<span className="px-space-xs py-0.5 rounded bg-surface-container text-on-surface-variant font-tabular-mono-dense text-tabular-mono-dense">C++20 / CP-SAT</span>
<span className="font-eyebrow text-eyebrow text-secondary">FULL-TIME</span>
</div>
<h3 className="font-title-lg text-title-lg text-on-surface font-semibold">
              Staff Combinatorial Optimization Engineer
            </h3>
<p className="font-body-dense text-body-dense text-on-surface-variant max-w-3xl">
              Design cutting planes, domain-specific propagator heuristics, and primal decompositions for high-cardinality disjunctive sequencing on industrial packaging lines.
            </p>
</div>
<div className="flex items-center gap-space-md flex-shrink-0">
<div className="flex flex-col md:text-right">
<span className="font-eyebrow text-eyebrow uppercase text-on-surface">San Francisco / Remote</span>
<span className="font-tabular-mono-dense text-tabular-mono-dense text-on-surface-variant">$220K - $280K • 0.35% - 0.70%</span>
</div>
<a className="h-9 px-space-md bg-surface-container text-on-surface hover:bg-primary hover:text-on-primary font-body-dense text-body-dense rounded flex items-center justify-center transition-colors font-medium" href="#">
              Apply
            </a>
</div>
</div>
{/* Role 2 */}
<div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-space-md hover:bg-surface hover:shadow-md transition-all">
<div className="flex flex-col gap-space-xs">
<div className="flex items-center gap-space-sm flex-wrap">
<span className="px-space-xs py-0.5 rounded bg-secondary-container text-on-secondary-container font-eyebrow text-eyebrow uppercase">Plant Edge</span>
<span className="px-space-xs py-0.5 rounded bg-surface-container text-on-surface-variant font-tabular-mono-dense text-tabular-mono-dense">SAP S/4HANA / OPC-UA</span>
<span className="font-eyebrow text-eyebrow text-secondary">FULL-TIME</span>
</div>
<h3 className="font-title-lg text-title-lg text-on-surface font-semibold">
              Lead Industrial Integration Architect
            </h3>
<p className="font-body-dense text-body-dense text-on-surface-variant max-w-3xl">
              Build zero-latency bi-directional bridges between customer ERPs (SAP S/4HANA, PP-DS), plant-floor MES solutions, and our local edge solver daemons.
            </p>
</div>
<div className="flex items-center gap-space-md flex-shrink-0">
<div className="flex flex-col md:text-right">
<span className="font-eyebrow text-eyebrow uppercase text-on-surface">Zürich / Remote</span>
<span className="font-tabular-mono-dense text-tabular-mono-dense text-on-surface-variant">190K CHF - 240K CHF • Equity</span>
</div>
<a className="h-9 px-space-md bg-surface-container text-on-surface hover:bg-primary hover:text-on-primary font-body-dense text-body-dense rounded flex items-center justify-center transition-colors font-medium" href="#">
              Apply
            </a>
</div>
</div>
{/* Role 3 */}
<div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-space-md hover:bg-surface hover:shadow-md transition-all">
<div className="flex flex-col gap-space-xs">
<div className="flex items-center gap-space-sm flex-wrap">
<span className="px-space-xs py-0.5 rounded bg-tertiary-fixed text-on-tertiary-fixed font-eyebrow text-eyebrow uppercase">Visual Systems</span>
<span className="px-space-xs py-0.5 rounded bg-surface-container text-on-surface-variant font-tabular-mono-dense text-tabular-mono-dense">Canvas API / Web Workers</span>
<span className="font-eyebrow text-eyebrow text-secondary">FULL-TIME</span>
</div>
<h3 className="font-title-lg text-title-lg text-on-surface font-semibold">
              Senior Frontend Systems Engineer (Gantt Engine)
            </h3>
<p className="font-body-dense text-body-dense text-on-surface-variant max-w-3xl">
              Architect our 60fps virtualization engine capable of rendering 50,000+ interactive job blocks, real-time buffer lines, and live drag-and-drop MILP re-computation.
            </p>
</div>
<div className="flex items-center gap-space-md flex-shrink-0">
<div className="flex flex-col md:text-right">
<span className="font-eyebrow text-eyebrow uppercase text-on-surface">Remote (Worldwide)</span>
<span className="font-tabular-mono-dense text-tabular-mono-dense text-on-surface-variant">$180K - $230K • 0.20% - 0.45%</span>
</div>
<a className="h-9 px-space-md bg-surface-container text-on-surface hover:bg-primary hover:text-on-primary font-body-dense text-body-dense rounded flex items-center justify-center transition-colors font-medium" href="#">
              Apply
            </a>
</div>
</div>
</div>
</div>
</section>
{/* Bottom CTA: Technical Exchange with Research Team */}
<section className="w-full px-margin py-20 bg-surface">
<div className="max-w-7xl mx-auto">
<div className="relative rounded-2xl bg-inverse-surface text-inverse-on-surface p-space-xl lg:p-16 overflow-hidden shadow-xl">
{/* Subtle technical grid background effect */}
<div className="absolute inset-0 opacity-10 pointer-events-none bg-gradient-to-r from-primary via-transparent to-primary"></div>
<div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-space-xl">
<div className="max-w-2xl flex flex-col gap-space-md">
<div className="inline-flex items-center gap-2 font-eyebrow text-eyebrow uppercase tracking-widest text-inverse-primary">
<span className="w-2 h-2 rounded-full bg-secondary"></span>
              PEER-LEVEL OPERATIONS RESEARCH ADVISORY
            </div>
<h2 className="font-display text-headline-lg lg:text-headline-lg font-bold tracking-tight text-inverse-on-surface">
              Schedule a Technical Exchange with Our Research Team
            </h2>
<p className="font-body-default text-title-md text-outline-variant leading-relaxed">
              No sales slide decks. Meet directly with our operations research scientists and systems engineers to formulate your plant's hardest bottleneck constraints into mathematical models.
            </p>
</div>
<div className="flex flex-col sm:flex-row lg:flex-col gap-space-md flex-shrink-0">
<a className="h-12 px-space-xl bg-primary-container hover:bg-primary text-on-primary font-body-default text-body-default rounded-lg flex items-center justify-center transition-colors font-medium shadow-sm" href="/book-a-demo">
<span className="material-symbols-outlined text-[20px] mr-2">calculate</span>
              Request Technical Exchange
            </a>
<a className="h-12 px-space-xl bg-surface-container-high/20 hover:bg-surface-container-high/30 text-inverse-on-surface font-body-default text-body-default rounded-lg flex items-center justify-center transition-colors font-medium" href="/case-studies">
<span className="material-symbols-outlined text-[20px] mr-2">description</span>
              Read Our Published Papers (.pdf)
            </a>
</div>
</div>
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
