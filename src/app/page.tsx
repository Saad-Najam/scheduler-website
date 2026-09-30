'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import CadenceHeader from '@/components/CadenceHeader';
import CadenceFooter from '@/components/CadenceFooter';
import CadenceDemoModal from '@/components/CadenceDemoModal';
import { FadeIn, FadeInStagger } from '@/components/Motion';

export default function Page() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [solving, setSolving] = useState(false);
  const [solved, setSolved] = useState(false);
  const [activeShift, setActiveShift] = useState<'Shift' | 'Day' | 'Hour'>('Shift');

  const handleResolve = () => {
    setSolving(true);
    setSolved(false);
    setTimeout(() => {
      setSolving(false);
      setSolved(true);
      setTimeout(() => setSolved(false), 2500);
    }, 600);
  };

  return (
    <div className="min-h-screen bg-surface text-on-surface flex flex-col selection:bg-primary/20 transition-colors">
      <CadenceHeader onOpenDemoModal={() => setIsDemoModalOpen(true)} />
      
      <main className="w-full pt-16 bg-surface flex-1">
        <div className="flex flex-col w-full">
{/* SECTION 1: HERO VIEWPORT */}
<section className="relative w-full overflow-hidden bg-surface py-20 lg:py-28">
<div className="max-w-7xl mx-auto px-margin">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start">
{/* Left Column (approx 40% width in 12-col = 5 cols) */}
<div className="lg:col-span-5 flex flex-col gap-space-lg pt-2 lg:pt-6">
            <div className="inline-flex items-center gap-2">
              <span className="font-eyebrow text-eyebrow uppercase px-2 py-0.5 rounded bg-surface-container text-primary font-medium tracking-wider">
                THE QUANTUM PRIMES // APS PLATFORM
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-secondary inline-block"></span>
              <span className="font-tabular-mono-dense text-tabular-mono-dense text-on-surface-variant">CP-SAT ENGINE ACTIVE</span>
            </div>
            <h1 className="font-display text-display text-on-surface tracking-tight leading-[1.08] font-bold">
              Buildable plans. Schedules that hold when the plant changes.
            </h1>
            <p className="font-title-md text-title-md text-on-surface-variant leading-relaxed max-w-xl">
              Advanced Planning and Scheduling built for the level of detail your plant actually runs on. Constraint-based mathematical optimization engineered by <strong className="text-on-surface">The Quantum Primes</strong>.
            </p>
            {/* CTA Row */}
            <div className="flex flex-wrap items-center gap-space-md pt-space-xs">
              <button
                type="button"
                onClick={() => setIsDemoModalOpen(true)}
                className="h-11 px-6 bg-primary hover:bg-primary-container text-white font-medium text-sm rounded-xl flex items-center justify-center transition-all shadow-md hover:shadow-lg active:scale-95"
              >
                Book a demo
              </button>
              <a
                href="http://localhost:5173"
                target="_blank"
                rel="noopener noreferrer"
                className="h-11 px-5 bg-surface-container hover:bg-surface-container-high text-on-surface font-medium text-sm rounded-xl flex items-center gap-2 transition-all border border-outline-variant/40"
              >
                <span className="material-symbols-outlined text-primary text-[18px]">launch</span>
                <span>Launch Scheduler App</span>
              </a>
              <Link
                href="/contact"
                className="h-11 px-5 bg-surface-container hover:bg-surface-container-high text-on-surface font-medium text-sm rounded-xl flex items-center gap-2 transition-all border border-outline-variant/40"
              >
                <span>Contact Us</span>
              </Link>
            </div>
            {/* Trust Subline */}
            <div className="flex items-center gap-2 pt-2 text-on-surface-variant font-body-dense text-body-dense">
              <span className="material-symbols-outlined text-secondary text-[18px]">verified</span>
              <span>A product of The Quantum Primes • Solves 40+ SKUs across 6 routing stages</span>
            </div>
{/* High-Level Telemetry Micro-Shelf */}
<div className="grid grid-cols-3 gap-space-sm pt-4 mt-2 bg-surface-container-low p-space-md rounded-xl">
<div className="flex flex-col">
<span className="font-eyebrow text-eyebrow text-on-surface-variant uppercase">Solver Status</span>
<span className="font-title-md text-title-md text-on-surface font-semibold flex items-center gap-1.5 mt-0.5">
<span className="w-2 h-2 rounded-full bg-secondary inline-block"></span>
                Optimal
              </span>
</div>
<div className="flex flex-col">
<span className="font-eyebrow text-eyebrow text-on-surface-variant uppercase">OEE Impact</span>
<span className="font-title-md text-title-md text-primary font-semibold mt-0.5">+6.4%</span>
</div>
<div className="flex flex-col">
<span className="font-eyebrow text-eyebrow text-on-surface-variant uppercase">Changeover</span>
<span className="font-title-md text-title-md text-on-surface font-semibold mt-0.5">-34%</span>
</div>
</div>
</div>
{/* Right Column (60% width = 7 cols, dense scheduler interface) */}
<div className="lg:col-span-7 relative w-full min-w-0" id="gantt-preview">
{/* Terminal / Schedule Canvas Container */}
<div className="w-full bg-[#0E131A] text-[#F0F4F8] rounded-xl shadow-xl overflow-hidden p-space-md flex flex-col gap-space-md">
{/* Top Header Toolbar */}
<div className="flex flex-wrap items-center justify-between gap-space-sm bg-[#161C26] p-space-sm rounded-lg">
<div className="flex items-center gap-space-sm">
<span className="px-2 py-1 rounded bg-[#202938] font-tabular-mono-dense text-tabular-mono-dense text-[#9BA8B8] font-medium">
                  3-Month Horizon
                </span>
<span className="px-2 py-1 rounded bg-[#202938] font-tabular-mono-dense text-tabular-mono-dense text-[#3ECF8E] flex items-center gap-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-[#3ECF8E]"></span>
                  1,782 Tasks Scheduled
                </span>
<span className="hidden sm:inline-flex px-2 py-1 rounded bg-[#202938] font-tabular-mono-dense text-tabular-mono-dense text-[#9BA8B8]">
                  CP-SAT Solver: Optimal (42s)
                </span>
</div>
<div className="flex items-center gap-1.5">
<div className="flex bg-[#202938] p-0.5 rounded text-[11px] font-tabular-mono text-[#9BA8B8]">
<button onClick={() => setActiveShift('Shift')} className={`px-2 py-0.5 rounded transition-colors ${activeShift === 'Shift' ? 'bg-[#2C384B] text-white' : 'hover:text-white text-[#9BA8B8]'}`}>Shift</button>
            <button onClick={() => setActiveShift('Day')} className={`px-2 py-0.5 rounded transition-colors ${activeShift === 'Day' ? 'bg-[#2C384B] text-white' : 'hover:text-white text-[#9BA8B8]'}`}>Day</button>
            <button onClick={() => setActiveShift('Hour')} className={`px-2 py-0.5 rounded transition-colors ${activeShift === 'Hour' ? 'bg-[#2C384B] text-white' : 'hover:text-white text-[#9BA8B8]'}`}>Hour</button>
</div>
<button
                onClick={handleResolve}
                disabled={solving}
                className="px-2.5 py-1 bg-primary text-white rounded font-body-dense text-[12px] flex items-center gap-1 hover:bg-primary-container transition-colors font-medium shadow-sm"
                id="resolve-btn"
              >
                {solving ? (
                  <>
                    <span className="material-symbols-outlined text-[14px] animate-spin">refresh</span>
                    <span>Solving...</span>
                  </>
                ) : solved ? (
                  <>
                    <span className="material-symbols-outlined text-[14px] text-secondary">check</span>
                    <span>Optimal (0.4s)</span>
                  </>
                ) : (
                  <>
                    <span className="material-symbols-outlined text-[14px]">refresh</span>
                    <span>Re-solve</span>
                  </>
                )}
              </button>
</div>
</div>
{/* Gantt Schedule Grid Canvas */}
<div className="relative w-full overflow-x-auto bg-[#121720] rounded-lg p-space-sm select-none">
<div className="min-w-[620px]">
{/* Time & Shift Markers */}
<div className="grid grid-cols-12 gap-1 mb-2 font-tabular-mono-dense text-[10px] text-[#78889B] border-b border-[#202938] pb-1">
<div className="col-span-3 text-left pl-1">LINE / ASSET</div>
<div className="col-span-3 text-center bg-[#1B2330] rounded py-0.5">SHIFT 1 (06:00 - 14:00)</div>
<div className="col-span-3 text-center bg-[#18202C] rounded py-0.5">SHIFT 2 (14:00 - 22:00)</div>
<div className="col-span-3 text-center bg-[#1B2330] rounded py-0.5">SHIFT 3 (22:00 - 06:00)</div>
</div>
{/* Lines / Tracks */}
<div className="flex flex-col gap-2 relative">
{/* Track 1: Extrusion Line 01 */}
<div className="grid grid-cols-12 gap-1 items-center h-8 bg-[#161D27] rounded px-1 group">
<div className="col-span-3 text-[12px] font-medium text-[#CFD8E3] truncate flex items-center gap-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-[#3ECF8E]"></span>
<span>Extrusion Line 01</span>
</div>
<div className="col-span-9 relative h-6 bg-[#1A222F] rounded overflow-hidden flex items-center">
{/* Task Bar Success */}
<div className="absolute left-2 w-[42%] h-5 rounded bg-[#128A5B] flex items-center justify-between px-2 text-[10px] font-tabular-mono text-white cursor-pointer transition-transform hover:scale-[1.01]" title="Batch EX-109">
<span className="truncate">EX-109 HDPE Resin</span>
<span className="text-[9px] opacity-80">98%</span>
</div>
{/* Task Bar Changeover */}
<div className="absolute left-[45%] w-[12%] h-5 rounded bg-[#4A5568] flex items-center justify-center px-1 text-[9px] font-tabular-mono text-[#CBD5E1]" title="Die Wash &amp; Swap">
<span className="truncate">Tooling 45m</span>
</div>
{/* Task Bar Next SKU */}
<div className="absolute left-[58%] w-[38%] h-5 rounded bg-[#128A5B] flex items-center justify-between px-2 text-[10px] font-tabular-mono text-white cursor-pointer" title="Batch EX-110">
<span className="truncate">EX-110 Polyprop</span>
<span className="text-[9px] opacity-80">Sched</span>
</div>
</div>
</div>
{/* Track 2: Extrusion Line 02 */}
<div className="grid grid-cols-12 gap-1 items-center h-8 bg-[#161D27] rounded px-1 group">
<div className="col-span-3 text-[12px] font-medium text-[#CFD8E3] truncate flex items-center gap-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-[#F5B544]"></span>
<span>Extrusion Line 02</span>
</div>
<div className="col-span-9 relative h-6 bg-[#1A222F] rounded overflow-hidden flex items-center">
<div className="absolute left-1 w-[28%] h-5 rounded bg-[#128A5B] flex items-center px-2 text-[10px] font-tabular-mono text-white">
<span className="truncate">EX-204 Clear Film</span>
</div>
{/* Warning / Sequence Delay */}
<div className="absolute left-[30%] w-[32%] h-5 rounded bg-[#B87400] flex items-center justify-between px-2 text-[10px] font-tabular-mono text-white cursor-pointer" title="At-Risk of Shift Spill">
<span className="truncate">EX-205 Bio-Blend</span>
<span className="text-[9px] bg-black/30 px-1 rounded">At Risk</span>
</div>
<div className="absolute left-[63%] w-[35%] h-5 rounded bg-[#128A5B] flex items-center px-2 text-[10px] font-tabular-mono text-white">
<span className="truncate">EX-206 Multi-Wall</span>
</div>
</div>
</div>
{/* Track 3: Compounding Station A */}
<div className="grid grid-cols-12 gap-1 items-center h-8 bg-[#161D27] rounded px-1 group">
<div className="col-span-3 text-[12px] font-medium text-[#CFD8E3] truncate flex items-center gap-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-[#3ECF8E]"></span>
<span>Compounding Stn A</span>
</div>
<div className="col-span-9 relative h-6 bg-[#1A222F] rounded overflow-hidden flex items-center">
<div className="absolute left-6 w-[54%] h-5 rounded bg-[#128A5B] flex items-center justify-between px-2 text-[10px] font-tabular-mono text-white">
<span className="truncate">CMP-881 Viscosity G8</span>
<span className="text-[9px] opacity-80">Active</span>
</div>
<div className="absolute left-[62%] w-[10%] h-5 rounded bg-[#4A5568] flex items-center justify-center text-[9px] font-tabular-mono text-[#CBD5E1]">
                      CIP 30m
                    </div>
<div className="absolute left-[73%] w-[24%] h-5 rounded bg-[#128A5B] flex items-center px-2 text-[10px] font-tabular-mono text-white">
<span className="truncate">CMP-882 Neutral</span>
</div>
</div>
</div>
{/* Track 4: High-Speed Filling Line 4 */}
<div className="grid grid-cols-12 gap-1 items-center h-8 bg-[#161D27] rounded px-1 group">
<div className="col-span-3 text-[12px] font-medium text-[#CFD8E3] truncate flex items-center gap-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-[#FF6B61]"></span>
<span>Filling Line 4</span>
</div>
<div className="col-span-9 relative h-6 bg-[#1A222F] rounded overflow-hidden flex items-center">
{/* Critical / Bottleneck late task */}
<div className="absolute left-2 w-[48%] h-5 rounded bg-[#C4362F] flex items-center justify-between px-2 text-[10px] font-tabular-mono text-white cursor-pointer" title="Predecessor Starved">
<span className="truncate">FL-4082 Liq Detergent 500ml</span>
<span className="text-[9px] bg-black/40 px-1 rounded">Late +45m</span>
</div>
<div className="absolute left-[52%] w-[45%] h-5 rounded bg-[#128A5B] flex items-center px-2 text-[10px] font-tabular-mono text-white">
<span className="truncate">FL-4083 Ultra Clean 1L</span>
</div>
</div>
</div>
{/* Track 5: Packaging Cell B */}
<div className="grid grid-cols-12 gap-1 items-center h-8 bg-[#161D27] rounded px-1 group">
<div className="col-span-3 text-[12px] font-medium text-[#CFD8E3] truncate flex items-center gap-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-[#3ECF8E]"></span>
<span>Packaging Cell B</span>
</div>
<div className="col-span-9 relative h-6 bg-[#1A222F] rounded overflow-hidden flex items-center">
<div className="absolute left-8 w-[25%] h-5 rounded bg-[#4A5568] flex items-center justify-center text-[9px] font-tabular-mono text-[#CBD5E1]">
                      Carton Setup
                    </div>
<div className="absolute left-[35%] w-[60%] h-5 rounded bg-[#128A5B] flex items-center justify-between px-2 text-[10px] font-tabular-mono text-white">
<span className="truncate">PKG-901 Pallet Wrap Shippers</span>
<span className="text-[9px] opacity-80">Synced</span>
</div>
</div>
</div>
{/* Simulated Dependency Connector Arrow SVG Overlay */}
<svg className="absolute inset-0 w-full h-full pointer-events-none stroke-current text-[#4C8DFF]" style={{opacity: 0.85}}>
{/* Curve from Track 3 (CMP-881) to Track 4 (FL-4082) */}
<path d="M 280 84 C 290 84, 290 114, 295 114" fill="none" strokeDasharray="3,3" strokeWidth="1.5"></path>
<polygon fill="#4C8DFF" points="297,114 293,111 293,117"></polygon>
</svg>
</div>
</div>
</div>
{/* Inspect Tooltip / Drawer Shelf */}
<div className="bg-[#18202C] p-space-sm rounded-lg flex flex-col md:flex-row md:items-center justify-between gap-2 text-[11px] font-tabular-mono">
<div className="flex items-center gap-2 flex-wrap">
<span className="px-1.5 py-0.5 rounded bg-primary/20 text-[#6BA1FF] font-semibold">SELECTED TASK</span>
<span className="text-white font-medium">SKU-4082 Liquid Detergent 500ml</span>
<span className="text-[#78889B]">• Stage 2/4</span>
<span className="text-[#78889B]">• Setup: 45m</span>
<span className="text-[#78889B]">• Run: 6h 15m</span>
</div>
<div className="flex items-center gap-2 text-[#9BA8B8]">
<span>Due: Oct 24, 18:00</span>
<span className="px-1.5 py-0.5 rounded bg-[#C4362F]/20 text-[#FF6B61] text-[10px]">Slack: -45m</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
{/* SECTION 2: MANUFACTURER LOGO STRIP */}
<section className="w-full bg-surface-container-low py-8">
<div className="max-w-7xl mx-auto px-margin">
<div className="flex flex-col md:flex-row items-center justify-between gap-space-md">
<span className="font-eyebrow text-eyebrow uppercase text-on-surface-variant tracking-widest whitespace-nowrap">
          MISSION-CRITICAL PLANTS
        </span>
<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-space-lg w-full items-center justify-items-center opacity-70">
<span className="font-eyebrow text-[13px] tracking-widest text-on-surface-variant font-bold">KRAFTEN PACKAGING</span>
<span className="font-eyebrow text-[13px] tracking-widest text-on-surface-variant font-bold">NOVABIO PHARMA</span>
<span className="font-eyebrow text-[13px] tracking-widest text-on-surface-variant font-bold">APEX CONSUMER</span>
<span className="font-eyebrow text-[13px] tracking-widest text-on-surface-variant font-bold">VORTEX BOTTLING</span>
<span className="font-eyebrow text-[13px] tracking-widest text-on-surface-variant font-bold">MERIDIAN FOODS</span>
<span className="font-eyebrow text-[13px] tracking-widest text-on-surface-variant font-bold">SOLIS CHEMICALS</span>
</div>
</div>
</div>
</section>

{/* SECTION 2.5: UNIFIED MANUFACTURING SUITE (PLAN • SCHEDULE • EXECUTE + AI) */}
<section className="w-full py-20 bg-surface-container-low border-y border-outline-variant/30">
  <div className="max-w-7xl mx-auto px-margin flex flex-col gap-space-xl">
    <div className="max-w-3xl flex flex-col gap-2">
      <span className="font-eyebrow text-eyebrow text-primary uppercase font-semibold">
        The Unified Operating System
      </span>
      <h2 className="font-headline-lg text-headline-lg text-on-surface font-semibold tracking-tight">
        Plan. Schedule. Execute. Unified in one mathematical model.
      </h2>
      <p className="font-body-default text-body-default text-on-surface-variant">
        Bad-fit ERPs, legacy schedulers, and disconnected spreadsheets leave the last mile to manual guesswork. 
        The Quantum Primes unites demand forecasting, finite-capacity constraint solving, and shop-floor execution in one closed loop.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* PLAN */}
      <div className="bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant/40 flex flex-col justify-between">
        <div>
          <div className="text-xs uppercase font-bold tracking-widest text-blue-600 mb-2">01 / PLAN</div>
          <h3 className="text-lg font-bold text-on-surface mb-2">
            Sales, Inventory &amp; Operations Planning (SIOP)
          </h3>
          <p className="text-sm text-on-surface-variant leading-relaxed">
            Aligning demand with supply through real-time multi-plant collaboration and intelligent decision support. 
            Eliminate distributor inventory distortion and promise reliable delivery dates based on real capacity.
          </p>
        </div>
        <Link href="/solutions" className="mt-4 pt-4 border-t border-surface-container text-xs font-semibold text-primary flex items-center gap-1">
          Explore SIOP Capabilities →
        </Link>
      </div>

      {/* SCHEDULE */}
      <div className="bg-surface-container-lowest p-6 rounded-2xl border border-primary/40 ring-1 ring-primary/20 flex flex-col justify-between relative shadow-sm">
        <div className="absolute -top-3 right-4 px-2 py-0.5 rounded bg-primary text-white text-[10px] font-bold uppercase tracking-wider">
          FLAGSHIP SCHEDULER
        </div>
        <div>
          <div className="text-xs uppercase font-bold tracking-widest text-primary mb-2">02 / SCHEDULE</div>
          <h3 className="text-lg font-bold text-on-surface mb-2">
            Advanced Planning &amp; Scheduling (APS)
          </h3>
          <p className="text-sm text-on-surface-variant leading-relaxed">
            Leveraging Google OR-Tools CP-SAT algorithms to deliver buildable, real-time production schedules. 
            Replan disruptions without restarting what the floor is running.
          </p>
        </div>
        <a href="#gantt-preview" className="mt-4 pt-4 border-t border-surface-container text-xs font-semibold text-primary flex items-center gap-1">
          Simulate CP-SAT Gantt →
        </a>
      </div>

      {/* EXECUTE */}
      <div className="bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant/40 flex flex-col justify-between">
        <div>
          <div className="text-xs uppercase font-bold tracking-widest text-emerald-600 mb-2">03 / EXECUTE</div>
          <h3 className="text-lg font-bold text-on-surface mb-2">
            Manufacturing Execution System (MES)
          </h3>
          <p className="text-sm text-on-surface-variant leading-relaxed">
            Predictive insights into production performance. End-to-end WIP traceability, batch genealogy, 
            operator dispatch, and regulatory compliance (IATF 16949, FDA 21 CFR Part 11).
          </p>
        </div>
        <Link href="/integrations" className="mt-4 pt-4 border-t border-surface-container text-xs font-semibold text-emerald-600 flex items-center gap-1">
          Explore MES Handshake →
        </Link>
      </div>
    </div>

    {/* AI Agent Strip: Inspired by Eyelit's Agent EyeQ */}
    <div className="bg-gradient-to-r from-surface-container-lowest via-surface-container to-surface-container-lowest p-6 sm:p-8 rounded-2xl border border-outline-variant/40 flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="flex flex-col gap-2 max-w-2xl">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-primary animate-ping"></span>
          <span className="text-xs uppercase tracking-widest font-bold text-primary">AGENTIC INDUSTRIAL AI</span>
        </div>
        <h4 className="text-lg sm:text-xl font-bold text-on-surface">
          Autonomous Industrial Agent: Observe • Reason • Act • Learn
        </h4>
        <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
          Ask plain-language questions like <em>&quot;Why is line 2 delayed, and can we still ship order 88-102 on Friday?&quot;</em> The agent reasons over live operational telemetry and proposes constraint-valid interventions with full audit logging and Caddy Mode human governance.
        </p>
      </div>
      <div className="shrink-0 flex items-center gap-3">
        <Link
          href="/contact"
          className="h-10 px-5 bg-primary hover:bg-primary-container text-white font-medium text-xs rounded-xl flex items-center justify-center transition-all shadow-sm"
        >
          Request Agent Demo
        </Link>
      </div>
    </div>
  </div>
</section>

{/* SECTION 3: PROBLEM FRAMING (SPREADSHEET FAILURE MODES) */}
<section className="w-full py-20 lg:py-28 bg-surface">
<div className="max-w-7xl mx-auto px-margin flex flex-col gap-space-xl">
<div className="max-w-2xl flex flex-col gap-2">
<span className="font-eyebrow text-eyebrow text-error uppercase font-semibold">The Production Bottleneck</span>
<h2 className="font-headline-lg text-headline-lg text-on-surface font-semibold tracking-tight">
          Why Excel and ERPs crumble on the shop floor.
        </h2>
<p className="font-body-default text-body-default text-on-surface-variant">
          Static spreadsheets treat continuous production like decoupled calendar cells. As soon as a machine overheats or a recipe clean-down runs over, the entire week’s sequence collapses.
        </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
{/* Col 1 */}
<div className="bg-surface-container-lowest p-space-xl rounded-xl shadow-sm flex flex-col gap-space-md">
<div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-on-surface">
<span className="material-symbols-outlined text-[20px]">layers</span>
</div>
<h3 className="font-title-lg text-title-lg text-on-surface font-semibold">
            Spreadsheets can't see constraints
          </h3>
<p className="font-body-default text-body-default text-on-surface-variant leading-relaxed">
            Static formulas ignore sequence-dependent clean-in-place (CIP) matrices, operator certifications, and dynamic crew availability, leading to constant line stoppages.
          </p>
</div>
{/* Col 2 */}
<div className="bg-surface-container-lowest p-space-xl rounded-xl shadow-sm flex flex-col gap-space-md">
<div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-on-surface">
<span className="material-symbols-outlined text-[20px]">memory</span>
</div>
<h3 className="font-title-lg text-title-lg text-on-surface font-semibold">
            Capacity is guessed, not calculated
          </h3>
<p className="font-body-default text-body-default text-on-surface-variant leading-relaxed">
            Without deterministic mathematical solvers, bottleneck compounding stages run blind while downstream high-speed packaging lines sit completely idle waiting for bulk release.
          </p>
</div>
{/* Col 3 */}
<div className="bg-surface-container-lowest p-space-xl rounded-xl shadow-sm flex flex-col gap-space-md">
<div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-on-surface">
<span className="material-symbols-outlined text-[20px]">published_with_changes</span>
</div>
<h3 className="font-title-lg text-title-lg text-on-surface font-semibold">
            Every changeover costs you a shift
          </h3>
<p className="font-body-default text-body-default text-on-surface-variant leading-relaxed">
            Unoptimized sequencing turns 30-minute allergen flushes into 4-hour changeover nightmares across your highest-margin lines when dark-to-light pigments run out of order.
          </p>
</div>
</div>
</div>
</section>
{/* SECTION 4: CORE CAPABILITIES (BENTO GRID) */}
<section className="w-full py-20 lg:py-28 bg-surface-container-low">
<div className="max-w-7xl mx-auto px-margin flex flex-col gap-space-xl">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
<div className="max-w-xl flex flex-col gap-2">
<span className="font-eyebrow text-eyebrow text-primary uppercase font-semibold">Deterministic Architecture</span>
<h2 className="font-headline-lg text-headline-lg text-on-surface font-semibold tracking-tight">
            Engineered for physical factory realities.
          </h2>
</div>
<div className="font-body-dense text-body-dense text-on-surface-variant">
          6-Stage Mathematical Allocation &amp; Dispatch
        </div>
</div>
{/* Bento 12-Column Grid */}
<div className="grid grid-cols-1 md:grid-cols-12 gap-space-md">
{/* Bento Card 1 (Span 7): Constraint Solver CP-SAT Simulator */}
<div className="md:col-span-7 bg-surface-container-lowest p-space-xl rounded-xl shadow-sm flex flex-col justify-between gap-space-lg">
<div className="flex flex-col gap-space-xs">
<div className="flex items-center justify-between">
<span className="font-eyebrow text-eyebrow uppercase text-primary font-medium">Solver Matrix</span>
<span className="font-tabular-mono-dense text-tabular-mono-dense text-secondary bg-secondary-container/40 px-2 py-0.5 rounded">
                MILP Optimal
              </span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">Constraint solver (CP-SAT)</h3>
<p className="font-body-default text-body-default text-on-surface-variant max-w-lg">
              Evaluates hundreds of thousands of line-product combinations against hard mechanical limits and labor laws in seconds.
            </p>
</div>
{/* Interactive Simulator Widget */}
<div className="bg-surface-container p-space-md rounded-lg flex flex-col gap-space-md">
<div className="grid grid-cols-1 sm:grid-cols-3 gap-space-sm text-on-surface font-tabular-mono-dense text-tabular-mono-dense">
<div className="bg-surface-container-lowest p-space-sm rounded">
<div className="text-on-surface-variant uppercase text-[10px]">Max Run Time</div>
<div className="font-bold text-[14px] mt-0.5">18.5 hrs / batch</div>
</div>
<div className="bg-surface-container-lowest p-space-sm rounded">
<div className="text-on-surface-variant uppercase text-[10px]">CIP Penalty</div>
<div className="font-bold text-[14px] mt-0.5">90 mins wash</div>
</div>
<div className="bg-surface-container-lowest p-space-sm rounded">
<div className="text-on-surface-variant uppercase text-[10px]">Labor Constraint</div>
<div className="font-bold text-[14px] mt-0.5">Grade 3 Certified</div>
</div>
</div>
<div className="flex items-center justify-between font-tabular-mono-dense text-tabular-mono-dense pt-1 border-t border-outline-variant/30">
<span className="text-on-surface-variant flex items-center gap-1.5">
<span className="material-symbols-outlined text-[15px] text-primary">tune</span>
                Objective: Minimize total changeover hours
              </span>
<span className="text-secondary font-bold">100% Feasible</span>
</div>
</div>
</div>
{/* Bento Card 2 (Span 5): Interactive Gantt */}
<div className="md:col-span-5 bg-surface-container-lowest p-space-xl rounded-xl shadow-sm flex flex-col justify-between gap-space-lg">
<div className="flex flex-col gap-space-xs">
<span className="font-eyebrow text-eyebrow uppercase text-primary font-medium">Visual Telemetry</span>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">Interactive Gantt</h3>
<p className="font-body-default text-body-default text-on-surface-variant">
              Live drag-and-drop handles with shift boundary snap and downstream ripple mitigation.
            </p>
</div>
{/* Gantt Drag Mockup Graphic */}
<div className="bg-surface-container p-space-md rounded-lg flex flex-col gap-2 font-tabular-mono-dense text-[11px]">
<div className="flex items-center justify-between text-on-surface-variant">
<span>Auto-Routing Engine</span>
<span className="text-primary font-semibold">Snapped to Shift 1</span>
</div>
<div className="w-full bg-surface-container-high h-7 rounded flex items-center px-2 relative overflow-hidden">
<div className="h-5 bg-primary rounded px-2 text-on-primary flex items-center gap-1 shadow-sm text-[10px] w-3/4">
<span className="material-symbols-outlined text-[12px]">drag_indicator</span>
<span className="truncate">Batch LOT-9912 (Drag to re-align)</span>
</div>
</div>
<div className="flex items-center gap-2 text-[10px] text-on-surface-variant">
<span className="material-symbols-outlined text-[13px] text-secondary">link</span>
<span>4 Predecessors locked | 0 schedule breaches</span>
</div>
</div>
</div>
{/* Bento Card 3 (Span 4): Capacity & Utilization */}
<div className="md:col-span-4 bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col justify-between gap-space-md">
<div className="flex flex-col gap-1">
<span className="font-eyebrow text-eyebrow uppercase text-on-surface-variant">Asset Telemetry</span>
<h3 className="font-title-lg text-title-lg text-on-surface font-semibold">Capacity &amp; utilization</h3>
<p className="font-body-dense text-body-dense text-on-surface-variant">
              Line-by-line mechanical utilization meter bars based on true shift work schedules.
            </p>
</div>
<div className="flex flex-col gap-2.5 font-tabular-mono-dense text-tabular-mono-dense pt-2">
<div className="flex flex-col gap-1">
<div className="flex justify-between text-on-surface">
<span>Extrusion Lines</span>
<span className="font-bold">94.2%</span>
</div>
<div className="w-full bg-surface-container h-2 rounded-full overflow-hidden">
<div className="bg-primary h-full rounded-full" style={{width: '94.2%'}}></div>
</div>
</div>
<div className="flex flex-col gap-1">
<div className="flex justify-between text-on-surface">
<span>Filling Cells</span>
<span className="font-bold">88.5%</span>
</div>
<div className="w-full bg-surface-container h-2 rounded-full overflow-hidden">
<div className="bg-secondary h-full rounded-full" style={{width: '88.5%'}}></div>
</div>
</div>
<div className="flex flex-col gap-1">
<div className="flex justify-between text-on-surface">
<span>Packaging Units</span>
<span className="font-bold">71.0%</span>
</div>
<div className="w-full bg-surface-container h-2 rounded-full overflow-hidden">
<div className="bg-outline h-full rounded-full" style={{width: '71.0%'}}></div>
</div>
</div>
</div>
</div>
{/* Bento Card 4 (Span 4): Changeover Optimization Heatmap */}
<div className="md:col-span-4 bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col justify-between gap-space-md">
<div className="flex flex-col gap-1">
<span className="font-eyebrow text-eyebrow uppercase text-on-surface-variant">Sequence Matrix</span>
<h3 className="font-title-lg text-title-lg text-on-surface font-semibold">Changeover matrix</h3>
<p className="font-body-dense text-body-dense text-on-surface-variant">
              Optimizes sequence to cut washdowns by up to 38% across color, flavor, or pack sizes.
            </p>
</div>
{/* Heatmap Mini Grid */}
<div className="bg-surface-container p-2.5 rounded-lg flex flex-col gap-1 font-tabular-mono-dense text-[10px] overflow-x-auto">
<div className="min-w-[200px]">
<div className="grid grid-cols-4 gap-1 text-center text-on-surface-variant font-bold">
<div>FROM\TO</div><div>SKU A</div><div>SKU B</div><div>SKU C</div>
</div>
<div className="grid grid-cols-4 gap-1 text-center items-center">
<div className="text-left font-bold text-on-surface-variant">SKU A</div>
<div className="bg-surface-container-highest p-1 rounded text-on-surface">0m</div>
<div className="bg-secondary/20 text-secondary p-1 rounded font-semibold">20m</div>
<div className="bg-error/20 text-error p-1 rounded font-semibold">120m</div>
</div>
<div className="grid grid-cols-4 gap-1 text-center items-center">
<div className="text-left font-bold text-on-surface-variant">SKU B</div>
<div className="bg-secondary/20 text-secondary p-1 rounded font-semibold">25m</div>
<div className="bg-surface-container-highest p-1 rounded text-on-surface">0m</div>
<div className="bg-secondary/20 text-secondary p-1 rounded font-semibold">30m</div>
</div>
<div className="grid grid-cols-4 gap-1 text-center items-center">
<div className="text-left font-bold text-on-surface-variant">SKU C</div>
<div className="bg-error/20 text-error p-1 rounded font-semibold">110m</div>
<div className="bg-secondary/20 text-secondary p-1 rounded font-semibold">15m</div>
<div className="bg-surface-container-highest p-1 rounded text-on-surface">0m</div>
</div>
</div>
</div>
</div>
{/* Bento Card 5 (Span 4): Multi-Plant Routing */}
<div className="md:col-span-4 bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col justify-between gap-space-md">
<div className="flex flex-col gap-1">
<span className="font-eyebrow text-eyebrow uppercase text-on-surface-variant">Enterprise Network</span>
<h3 className="font-title-lg text-title-lg text-on-surface font-semibold">Multi-plant routing</h3>
<p className="font-body-dense text-body-dense text-on-surface-variant">
              Synchronize multi-site batch transfer from Plant 1 bulk synthesis to Plant 2 fill line.
            </p>
</div>
<div className="bg-surface-container p-2.5 rounded-lg flex flex-col gap-2 font-tabular-mono-dense text-[11px]">
<div className="flex items-center justify-between text-on-surface">
<span className="flex items-center gap-1.5 font-medium">
<span className="material-symbols-outlined text-[15px] text-primary">domain</span>
                Plant 01 (Compounding)
              </span>
<span className="text-secondary font-semibold">Dispatched</span>
</div>
<div className="pl-4 flex items-center gap-2 text-on-surface-variant text-[10px]">
<span className="material-symbols-outlined text-[14px]">south</span>
<span>Inter-facility bulk tanker transfer (4.2 hrs)</span>
</div>
<div className="flex items-center justify-between text-on-surface">
<span className="flex items-center gap-1.5 font-medium">
<span className="material-symbols-outlined text-[15px] text-secondary">domain</span>
                Plant 02 (Aseptic Pack)
              </span>
<span className="text-on-surface-variant font-semibold">Ready 08:30</span>
</div>
</div>
</div>
{/* Bento Card 6 (Span 12): Wide Scenario Simulation Banner */}
<div className="md:col-span-12 bg-surface-container-lowest p-space-xl rounded-xl shadow-sm flex flex-col lg:flex-row items-start lg:items-center justify-between gap-space-lg">
<div className="max-w-xl flex flex-col gap-space-xs">
<div className="inline-flex items-center gap-2 font-eyebrow text-eyebrow text-primary uppercase font-medium">
<span>What-If Sandbox</span>
<span className="w-1 h-1 rounded-full bg-primary"></span>
<span>Non-Destructive Branching</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
              Live scenario simulation &amp; branch comparison
            </h3>
<p className="font-body-default text-body-default text-on-surface-variant">
              Stress-test unplanned maintenance or order surges before pushing assignments to production floor tablets.
            </p>
</div>
<div className="w-full lg:w-auto flex-1 max-w-xl bg-surface-container p-space-md rounded-lg flex flex-col gap-space-sm font-tabular-mono-dense text-tabular-mono-dense">
<div className="grid grid-cols-2 gap-space-md border-b border-outline-variant/40 pb-2">
<div className="flex flex-col">
<span className="text-on-surface-variant text-[10px] uppercase font-bold">Branch A: Live Base Plan</span>
<span className="text-on-surface font-bold text-[14px] mt-0.5">99.2% SLA Met</span>
<span className="text-secondary text-[11px]">0 Late Orders</span>
</div>
<div className="flex flex-col">
<span className="text-primary text-[10px] uppercase font-bold">Branch B: Line 3 Down (What-If)</span>
<span className="text-on-surface font-bold text-[14px] mt-0.5">96.8% SLA Met</span>
<span className="text-tertiary text-[11px]">Re-routed to Line 4 (+1.2h)</span>
</div>
</div>
<div className="flex items-center justify-between text-[11px] text-on-surface-variant pt-1">
<span>Solved across 1,782 constraints in 3.8s</span>
<button className="text-primary font-bold hover:underline flex items-center gap-1">
<span>Promote Branch B to Floor</span>
<span className="material-symbols-outlined text-[14px]">arrow_forward</span>
</button>
</div>
</div>
</div>
</div>
</div>
</section>
{/* SECTION 5: HOW IT WORKS (4-STEP WORKFLOW) */}
<section className="w-full py-20 lg:py-28 bg-surface">
<div className="max-w-7xl mx-auto px-margin flex flex-col gap-space-xl">
<div className="max-w-2xl flex flex-col gap-2">
<span className="font-eyebrow text-eyebrow text-primary uppercase font-semibold">Execution Pipeline</span>
<h2 className="font-headline-lg text-headline-lg text-on-surface font-semibold tracking-tight">
          From dirty workbooks to executable line schedules.
        </h2>
<p className="font-body-default text-body-default text-on-surface-variant">
          Cadence integrates with your current ERP and MES layers without requiring month-long plant shutdowns.
        </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md">
{/* Step 1 */}
<div className="bg-surface-container-low p-space-lg rounded-xl flex flex-col justify-between gap-space-md border-l-4 border-primary">
<div className="flex flex-col gap-2">
<span className="font-tabular-mono text-title-md text-primary font-bold">01</span>
<h3 className="font-title-lg text-title-lg text-on-surface font-semibold">Connect your data</h3>
<p className="font-body-dense text-body-dense text-on-surface-variant">
              Continuous ingestion of demand orders, recipes, bill of materials (BOM), and inventory levels from SAP, NetSuite, or Excel workbooks.
            </p>
</div>
<div className="text-[11px] font-tabular-mono-dense text-on-surface-variant bg-surface-container px-2 py-1 rounded">
            Ingestion: Sub-second delta
          </div>
</div>
{/* Step 2 */}
<div className="bg-surface-container-low p-space-lg rounded-xl flex flex-col justify-between gap-space-md border-l-4 border-outline-variant">
<div className="flex flex-col gap-2">
<span className="font-tabular-mono text-title-md text-on-surface-variant font-bold">02</span>
<h3 className="font-title-lg text-title-lg text-on-surface font-semibold">Model your constraints</h3>
<p className="font-body-dense text-body-dense text-on-surface-variant">
              Map shift rotations, machine speeds, allergen matrices, tooling availability, and buffer holding tanks into deterministic rules.
            </p>
</div>
<div className="text-[11px] font-tabular-mono-dense text-on-surface-variant bg-surface-container px-2 py-1 rounded">
            Rules: 400+ shop floor checks
          </div>
</div>
{/* Step 3 */}
<div className="bg-surface-container-low p-space-lg rounded-xl flex flex-col justify-between gap-space-md border-l-4 border-outline-variant">
<div className="flex flex-col gap-2">
<span className="font-tabular-mono text-title-md text-on-surface-variant font-bold">03</span>
<h3 className="font-title-lg text-title-lg text-on-surface font-semibold">Solve the horizon</h3>
<p className="font-body-dense text-body-dense text-on-surface-variant">
              CP-SAT solver engine resolves over 1,800 operations in &lt;60s, maximizing OEE and minimizing total clean-down hours.
            </p>
</div>
<div className="text-[11px] font-tabular-mono-dense text-on-surface-variant bg-surface-container px-2 py-1 rounded">
            Solver: CP-SAT MILP Engine
          </div>
</div>
{/* Step 4 */}
<div className="bg-surface-container-low p-space-lg rounded-xl flex flex-col justify-between gap-space-md border-l-4 border-outline-variant">
<div className="flex flex-col gap-2">
<span className="font-tabular-mono text-title-md text-on-surface-variant font-bold">04</span>
<h3 className="font-title-lg text-title-lg text-on-surface font-semibold">Publish &amp; re-plan</h3>
<p className="font-body-dense text-body-dense text-on-surface-variant">
              Dispatch directly to line supervisors and tablet dispatch terminals. Re-anchor downstream runs automatically if a batch runs late.
            </p>
</div>
<div className="text-[11px] font-tabular-mono-dense text-on-surface-variant bg-surface-container px-2 py-1 rounded">
            Dispatch: Live floor sync
          </div>
</div>
</div>
</div>
</section>
{/* SECTION 6: OPERATIONAL EFFICIENCIES & ROI (INSPIRED BY EYELIT BENCHMARKS) */}
<section className="w-full bg-surface-container-high py-16">
  <div className="max-w-7xl mx-auto px-margin">
    <div className="text-center max-w-2xl mx-auto mb-10">
      <span className="font-eyebrow text-eyebrow uppercase text-primary font-semibold tracking-wider">
        PROVEN OPERATIONAL METRICS
      </span>
      <h3 className="text-2xl sm:text-3xl font-bold text-on-surface mt-1">
        Achieve measurable plant efficiencies and rapid ROI.
      </h3>
    </div>
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-space-md">
      <div className="flex flex-col gap-1 p-space-md bg-surface-container-lowest rounded-xl shadow-sm text-center">
        <span className="font-headline-lg text-headline-lg font-bold text-primary tracking-tight font-tabular-mono">
          15%
        </span>
        <span className="font-eyebrow text-eyebrow text-on-surface uppercase font-semibold">
          Inventory Reduction
        </span>
        <span className="font-body-dense text-[12px] text-on-surface-variant">
          WIP buffer &amp; safety stock
        </span>
      </div>

      <div className="flex flex-col gap-1 p-space-md bg-surface-container-lowest rounded-xl shadow-sm text-center">
        <span className="font-headline-lg text-headline-lg font-bold text-secondary tracking-tight font-tabular-mono">
          10%
        </span>
        <span className="font-eyebrow text-eyebrow text-on-surface uppercase font-semibold">
          Labor Cost Reduction
        </span>
        <span className="font-body-dense text-[12px] text-on-surface-variant">
          Less overtime &amp; idle shifts
        </span>
      </div>

      <div className="flex flex-col gap-1 p-space-md bg-surface-container-lowest rounded-xl shadow-sm text-center">
        <span className="font-headline-lg text-headline-lg font-bold text-on-surface tracking-tight font-tabular-mono">
          +12%
        </span>
        <span className="font-eyebrow text-eyebrow text-on-surface uppercase font-semibold">
          Capacity Utilization
        </span>
        <span className="font-body-dense text-[12px] text-on-surface-variant">
          Bottleneck equipment OEE
        </span>
      </div>

      <div className="flex flex-col gap-1 p-space-md bg-surface-container-lowest rounded-xl shadow-sm text-center">
        <span className="font-headline-lg text-headline-lg font-bold text-primary tracking-tight font-tabular-mono">
          4%
        </span>
        <span className="font-eyebrow text-eyebrow text-on-surface uppercase font-semibold">
          Asset Growth Control
        </span>
        <span className="font-body-dense text-[12px] text-on-surface-variant">
          Defer CapEx expansions
        </span>
      </div>

      <div className="flex flex-col gap-1 p-space-md bg-surface-container-lowest rounded-xl shadow-sm text-center">
        <span className="font-headline-lg text-headline-lg font-bold text-secondary tracking-tight font-tabular-mono">
          +5%
        </span>
        <span className="font-eyebrow text-eyebrow text-on-surface uppercase font-semibold">
          Gross Margins
        </span>
        <span className="font-body-dense text-[12px] text-on-surface-variant">
          Optimized product sequences
        </span>
      </div>

      <div className="flex flex-col gap-1 p-space-md bg-surface-container-lowest rounded-xl shadow-sm text-center">
        <span className="font-headline-lg text-headline-lg font-bold text-on-surface tracking-tight font-tabular-mono">
          &lt; 45s
        </span>
        <span className="font-eyebrow text-eyebrow text-on-surface uppercase font-semibold">
          CP-SAT Solve Speed
        </span>
        <span className="font-body-dense text-[12px] text-on-surface-variant">
          594–1,782 discrete tasks
        </span>
      </div>
    </div>
  </div>
</section>
{/* SECTION 7: DEEP-DIVE SPLIT SECTIONS (50/50 ALTERNATING) */}
<section className="w-full py-20 lg:py-28 bg-surface flex flex-col gap-space-xl">
{/* Row 1: Complex Multi-Stage */}
<div className="max-w-7xl mx-auto px-margin">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
<div className="lg:col-span-6 flex flex-col gap-space-md">
<span className="font-eyebrow text-eyebrow text-primary uppercase font-semibold">Stage Synchronization</span>
<h2 className="font-headline-lg text-headline-lg text-on-surface font-semibold tracking-tight">
            Engineered for complex multi-stage manufacturing.
          </h2>
<p className="font-body-default text-body-default text-on-surface-variant leading-relaxed">
            Most schedulers treat each line as an isolated island. Cadence natively models upstream tanks, holding time ceilings, intermediate buffers, and secondary packaging lines in a unified dependency graph.
          </p>
<div className="flex flex-col gap-space-sm pt-2">
<div className="flex items-start gap-3">
<span className="material-symbols-outlined text-secondary text-[20px] shrink-0 mt-0.5">check_circle</span>
<div className="flex flex-col">
<span className="font-title-md text-title-md text-on-surface font-semibold">Bulk tank holding limits</span>
<span className="font-body-dense text-body-dense text-on-surface-variant">Enforce max 24h stability windows before product spoils in holding vessels.</span>
</div>
</div>
<div className="flex items-start gap-3">
<span className="material-symbols-outlined text-secondary text-[20px] shrink-0 mt-0.5">check_circle</span>
<div className="flex flex-col">
<span className="font-title-md text-title-md text-on-surface font-semibold">Allergen &amp; color staging</span>
<span className="font-body-dense text-body-dense text-on-surface-variant">Automatically group non-allergenic batches to avoid redundant steam washdowns.</span>
</div>
</div>
<div className="flex items-start gap-3">
<span className="material-symbols-outlined text-secondary text-[20px] shrink-0 mt-0.5">check_circle</span>
<div className="flex flex-col">
<span className="font-title-md text-title-md text-on-surface font-semibold">Multi-tool synchronization</span>
<span className="font-body-dense text-body-dense text-on-surface-variant">Lock shared die sets, molds, and lab technician rosters to prevent conflicting assignments.</span>
</div>
</div>
</div>
</div>
<div className="lg:col-span-6">
<div className="w-full bg-surface-container-lowest p-space-xl rounded-xl shadow-md flex flex-col gap-space-md">
<div className="flex items-center justify-between border-b border-outline-variant/30 pb-2">
<span className="font-title-md text-title-md font-semibold text-on-surface">Compounding to Fill Rate Telemetry</span>
<span className="font-tabular-mono-dense text-tabular-mono-dense text-on-surface-variant">Live Gating</span>
</div>
{/* Inline SVG Chart: Multi-stage capacity wave */}
<div className="w-full h-48 py-2">
<svg className="w-full h-full" viewBox="0 0 400 160">
{/* Grid Lines */}
<line className="text-surface-container" stroke="currentColor" strokeWidth="1" x1="0" x2="400" y1="40" y2="40"></line>
<line className="text-surface-container" stroke="currentColor" strokeWidth="1" x1="0" x2="400" y1="80" y2="80"></line>
<line className="text-surface-container" stroke="currentColor" strokeWidth="1" x1="0" x2="400" y1="120" y2="120"></line>
{/* Compounding Curve */}
<path d="M 0 130 Q 80 50, 160 80 T 320 60 T 400 90" fill="none" stroke="#0049cc" strokeWidth="2.5"></path>
{/* Filling Synchronized Curve */}
<path d="M 40 140 Q 120 70, 200 90 T 360 70 T 400 110" fill="none" stroke="#006c45" strokeDasharray="4,4" strokeWidth="2.5"></path>
{/* Critical Threshold Indicator */}
<circle cx="200" cy="90" fill="#006c45" r="4"></circle>
<text className="text-[10px] font-tabular-mono fill-current text-secondary" x="210" y="85">Optimal Infeed Rate (98%)</text>
</svg>
</div>
<div className="grid grid-cols-2 gap-space-sm font-tabular-mono-dense text-tabular-mono-dense bg-surface-container-low p-space-sm rounded">
<div>
<span className="text-on-surface-variant">UPSTREAM FEED:</span>
<span className="font-bold text-primary ml-1">940 L/hr</span>
</div>
<div>
<span className="text-on-surface-variant">PACKAGING SINK:</span>
<span className="font-bold text-secondary ml-1">935 L/hr (Balanced)</span>
</div>
</div>
</div>
</div>
</div>
</div>
{/* Row 2: Instant Re-solve */}
<div className="max-w-7xl mx-auto px-margin pt-12">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
<div className="lg:col-span-6 order-2 lg:order-1">
<div className="w-full bg-surface-container-lowest p-space-xl rounded-xl shadow-md flex flex-col gap-space-md">
<div className="flex items-center justify-between border-b border-outline-variant/30 pb-2">
<span className="font-title-md text-title-md font-semibold text-on-surface">Dynamic Re-Anchor Simulator</span>
<span className="font-tabular-mono-dense text-tabular-mono-dense text-error bg-error-container/40 px-2 py-0.5 rounded">
                Line 02 Jam (+2.2h)
              </span>
</div>
<div className="flex flex-col gap-space-sm font-tabular-mono-dense text-[12px]">
<div className="flex items-center justify-between text-on-surface-variant">
<span>EVENT: Bearing Failure on Line 02 at 11:20</span>
<span className="text-on-surface font-semibold">T-Zero</span>
</div>
{/* Diagram of shift compress */}
<div className="bg-surface-container p-space-sm rounded-lg flex flex-col gap-2">
<div className="flex items-center justify-between text-[11px] text-on-surface">
<span className="text-error font-medium">Original Plan (Breached Due Dates):</span>
<span>4 Orders late</span>
</div>
<div className="w-full bg-error-container h-4 rounded overflow-hidden relative">
<div className="absolute left-0 top-0 bottom-0 bg-error w-3/5"></div>
</div>
<div className="flex items-center justify-between text-[11px] text-on-surface mt-2">
<span className="text-secondary font-medium">Cadence Auto-Compressed Solution:</span>
<span className="font-bold text-secondary">0 Orders late (Re-sequenced)</span>
</div>
<div className="w-full bg-secondary-container h-4 rounded overflow-hidden relative">
<div className="absolute left-0 top-0 bottom-0 bg-secondary w-full"></div>
</div>
</div>
<div className="flex items-center justify-between text-[11px] text-on-surface-variant pt-1">
<span>Solver re-assigned 18 runs to Line 04</span>
<span className="font-semibold text-primary">Calculation: 1.4 seconds</span>
</div>
</div>
</div>
</div>
<div className="lg:col-span-6 order-1 lg:order-2 flex flex-col gap-space-md">
<span className="font-eyebrow text-eyebrow text-primary uppercase font-semibold">Live Shop-Floor Dispatch</span>
<h2 className="font-headline-lg text-headline-lg text-on-surface font-semibold tracking-tight">
            Instant re-solve when the real plant deviates.
          </h2>
<p className="font-body-default text-body-default text-on-surface-variant leading-relaxed">
            When mechanical downtime, missing raw ingredients, or hot rush orders hit your plant floor, Cadence lets you anchor the currently running jobs and re-optimize the entire future horizon in seconds.
          </p>
<div className="flex flex-col gap-space-xs font-body-dense text-body-dense text-on-surface-variant">
<p>• Zero disruption to line operators already mid-cycle</p>
<p>• Locks locked setup times while fluidly moving unstarted jobs</p>
<p>• Immediate alerts to dispatch supervisors with clear shift delta summaries</p>
</div>
</div>
</div>
</div>
</section>
{/* SECTION 8: HIGH-TRUST TESTIMONIAL */}
<section className="w-full py-20 lg:py-28 bg-surface-container-low">
<div className="max-w-5xl mx-auto px-margin">
<div className="bg-surface-container-lowest p-space-xl rounded-2xl shadow-sm flex flex-col gap-space-lg">
<span className="material-symbols-outlined text-primary text-[36px]">format_quote</span>
<blockquote className="font-headline-md text-headline-md text-on-surface font-medium leading-tight">
          "Cadence replaced our 40-tab scheduling spreadsheet. We eliminated 14 hours of weekly planning scramble and recovered 6% overall plant throughput in our first month."
        </blockquote>
<div className="flex flex-wrap items-center justify-between gap-space-md pt-space-sm border-t border-outline-variant/30">
<div className="flex items-center gap-space-md">
<div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary/30 shrink-0 shadow-sm">
              <img
                src="/images/avatar-marcus.jpg"
                alt="Marcus Vance, VP of Supply Chain & Operations"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
<div className="flex flex-col">
<span className="font-title-md text-title-md text-on-surface font-semibold">Marcus Vance</span>
<span className="font-body-dense text-body-dense text-on-surface-variant">VP of Supply Chain &amp; Operations, TetraBio Nutrition</span>
</div>
</div>
<div className="flex items-center gap-3 bg-surface-container pl-2 pr-4 py-1.5 rounded-full font-tabular-mono-dense text-tabular-mono-dense text-on-surface-variant border border-outline-variant/40">
<img src="/images/case-tetrabio.jpg" alt="TetraBio Nutrition Facility" className="w-6 h-6 rounded-full object-cover" />
<div className="flex items-center gap-1.5">
<span className="w-2 h-2 rounded-full bg-secondary"></span>
<span>3 Plants • 180 SKUs • Audited Facility</span>
</div>
</div>
</div>
</div>
</div>
</section>
{/* SECTION 9: INTEGRATIONS PREVIEW (5x2 GRID) */}
<section className="w-full py-20 lg:py-28 bg-surface">
<div className="max-w-7xl mx-auto px-margin flex flex-col items-center gap-space-xl">
<div className="text-center max-w-xl flex flex-col gap-2">
<span className="font-eyebrow text-eyebrow text-primary uppercase font-semibold">Connectivity Architecture</span>
<h2 className="font-headline-lg text-headline-lg text-on-surface font-semibold tracking-tight">
          Plug into your existing enterprise stack.
        </h2>
<p className="font-body-default text-body-default text-on-surface-variant">
          Cadence syncs production orders and actual scrap rates bi-directionally without requiring ERP replacements.
        </p>
</div>
{/* 5x2 Grid of Integration Tiles */}
<div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-space-md">
<div className="bg-surface-container-lowest p-space-md rounded-lg shadow-sm flex flex-col items-center text-center gap-2 hover:bg-surface-container-low transition-all duration-200 hover:-translate-y-1 hover:shadow-md hover:border-primary/40 border border-outline-variant/40">
<span className="material-symbols-outlined text-[28px] text-primary">database</span>
<span className="font-title-md text-[15px] font-semibold text-on-surface">SAP S/4HANA</span>
<span className="font-eyebrow text-[10px] text-on-surface-variant uppercase">Bi-Directional RFC</span>
</div>
<div className="bg-surface-container-lowest p-space-md rounded-lg shadow-sm flex flex-col items-center text-center gap-2 hover:bg-surface-container-low transition-all duration-200 hover:-translate-y-1 hover:shadow-md hover:border-primary/40 border border-outline-variant/40">
<span className="material-symbols-outlined text-[28px] text-primary">cloud_sync</span>
<span className="font-title-md text-[15px] font-semibold text-on-surface">Oracle NetSuite</span>
<span className="font-eyebrow text-[10px] text-on-surface-variant uppercase">REST Web Services</span>
</div>
<div className="bg-surface-container-lowest p-space-md rounded-lg shadow-sm flex flex-col items-center text-center gap-2 hover:bg-surface-container-low transition-all duration-200 hover:-translate-y-1 hover:shadow-md hover:border-primary/40 border border-outline-variant/40">
<span className="material-symbols-outlined text-[28px] text-primary">view_quilt</span>
<span className="font-title-md text-[15px] font-semibold text-on-surface">MS Dynamics 365</span>
<span className="font-eyebrow text-[10px] text-on-surface-variant uppercase">OData Entity Sync</span>
</div>
<div className="bg-surface-container-lowest p-space-md rounded-lg shadow-sm flex flex-col items-center text-center gap-2 hover:bg-surface-container-low transition-all duration-200 hover:-translate-y-1 hover:shadow-md hover:border-primary/40 border border-outline-variant/40">
<span className="material-symbols-outlined text-[28px] text-primary">hub</span>
<span className="font-title-md text-[15px] font-semibold text-on-surface">Odoo ERP</span>
<span className="font-eyebrow text-[10px] text-on-surface-variant uppercase">XML-RPC Connector</span>
</div>
<div className="bg-surface-container-lowest p-space-md rounded-lg shadow-sm flex flex-col items-center text-center gap-2 hover:bg-surface-container-low transition-all duration-200 hover:-translate-y-1 hover:shadow-md hover:border-primary/40 border border-outline-variant/40">
<span className="material-symbols-outlined text-[28px] text-primary">precision_manufacturing</span>
<span className="font-title-md text-[15px] font-semibold text-on-surface">Plex MES</span>
<span className="font-eyebrow text-[10px] text-on-surface-variant uppercase">Floor Dispatch Pipe</span>
</div>
<div className="bg-surface-container-lowest p-space-md rounded-lg shadow-sm flex flex-col items-center text-center gap-2 hover:bg-surface-container-low transition-all duration-200 hover:-translate-y-1 hover:shadow-md hover:border-primary/40 border border-outline-variant/40">
<span className="material-symbols-outlined text-[28px] text-primary">table_chart</span>
<span className="font-title-md text-[15px] font-semibold text-on-surface">Excel Workbooks</span>
<span className="font-eyebrow text-[10px] text-on-surface-variant uppercase">Automated Ingest</span>
</div>
<div className="bg-surface-container-lowest p-space-md rounded-lg shadow-sm flex flex-col items-center text-center gap-2 hover:bg-surface-container-low transition-all duration-200 hover:-translate-y-1 hover:shadow-md hover:border-primary/40 border border-outline-variant/40">
<span className="material-symbols-outlined text-[28px] text-primary">file_download</span>
<span className="font-title-md text-[15px] font-semibold text-on-surface">CSV / Flat Files</span>
<span className="font-eyebrow text-[10px] text-on-surface-variant uppercase">SFTP Hotfolder</span>
</div>
<div className="bg-surface-container-lowest p-space-md rounded-lg shadow-sm flex flex-col items-center text-center gap-2 hover:bg-surface-container-low transition-all duration-200 hover:-translate-y-1 hover:shadow-md hover:border-primary/40 border border-outline-variant/40">
<span className="material-symbols-outlined text-[28px] text-primary">api</span>
<span className="font-title-md text-[15px] font-semibold text-on-surface">REST API</span>
<span className="font-eyebrow text-[10px] text-on-surface-variant uppercase">OpenAPI v3 Telemetry</span>
</div>
<div className="bg-surface-container-lowest p-space-md rounded-lg shadow-sm flex flex-col items-center text-center gap-2 hover:bg-surface-container-low transition-all duration-200 hover:-translate-y-1 hover:shadow-md hover:border-primary/40 border border-outline-variant/40">
<span className="material-symbols-outlined text-[28px] text-primary">monitoring</span>
<span className="font-title-md text-[15px] font-semibold text-on-surface">Microsoft Power BI</span>
<span className="font-eyebrow text-[10px] text-on-surface-variant uppercase">DirectQuery Export</span>
</div>
<div className="bg-surface-container-lowest p-space-md rounded-lg shadow-sm flex flex-col items-center text-center gap-2 hover:bg-surface-container-low transition-all duration-200 hover:-translate-y-1 hover:shadow-md hover:border-primary/40 border border-outline-variant/40">
<span className="material-symbols-outlined text-[28px] text-primary">dataset</span>
<span className="font-title-md text-[15px] font-semibold text-on-surface">Databricks Lake</span>
<span className="font-eyebrow text-[10px] text-on-surface-variant uppercase">Delta Lake Live Sync</span>
</div>
</div>
<a className="font-body-dense text-body-dense text-primary font-semibold hover:underline flex items-center gap-1" href="/docs">
<span>View all 24+ native ERP &amp; MES connectors</span>
<span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</a>
</div>
</section>
{/* SECTION 10: FINAL CALL TO ACTION (INSPIRED BY EYELIT) */}
<section className="w-full py-20 lg:py-28 bg-surface-container-low">
<div className="max-w-5xl mx-auto px-margin">
<div className="bg-surface-container-lowest p-space-xl lg:p-16 rounded-3xl shadow-lg border border-outline-variant/40 flex flex-col items-center text-center gap-space-lg">
<span className="font-eyebrow text-eyebrow uppercase text-primary font-semibold tracking-widest">
  THE QUANTUM PRIMES // GET STARTED
</span>
<h2 className="font-headline-lg text-headline-lg text-on-surface font-bold max-w-2xl leading-tight">
  Bring us the line nobody can schedule. We'll show you a plan you can build.
</h2>
<p className="font-body-default text-body-default text-on-surface-variant max-w-xl">
  Avoid another year of decisions made in silos, alerts with no explanation, and your best planners buried in spreadsheets. Let The Quantum Primes model your plant's real constraints.
</p>
<div className="flex flex-wrap items-center justify-center gap-space-md pt-2">
  <Link
    className="h-12 px-8 bg-primary hover:bg-primary-container text-white font-medium text-sm rounded-xl flex items-center justify-center shadow-md transition-all active:scale-95"
    href="/contact"
  >
    Contact The Quantum Primes
  </Link>
  <a
    className="h-12 px-6 bg-surface-container hover:bg-surface-container-high text-on-surface font-medium text-sm rounded-xl flex items-center justify-center gap-2 transition-colors border border-outline-variant/40"
    href="http://localhost:5173"
    target="_blank"
    rel="noopener noreferrer"
  >
    <span className="material-symbols-outlined text-primary text-[18px]">launch</span>
    <span>Launch Scheduler Demo (5173)</span>
  </a>
</div>
<div className="flex items-center gap-3 pt-2 text-on-surface-variant font-body-dense text-xs">
  <span className="inline-flex items-center gap-1 text-primary">
    <span className="material-symbols-outlined text-[16px]">mail</span>
    thequantumprimes@gmail.com
  </span>
  <span>•</span>
  <span>We test against your own facility Excel workbook</span>
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
