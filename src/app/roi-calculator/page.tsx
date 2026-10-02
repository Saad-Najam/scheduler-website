'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import CadenceHeader from '@/components/CadenceHeader';
import CadenceFooter from '@/components/CadenceFooter';
import CadenceDemoModal from '@/components/CadenceDemoModal';
import { FadeIn, FadeInStagger } from '@/components/Motion';

export default function RoiCalculatorPage() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [lines, setLines] = useState(12);
  const [shifts, setShifts] = useState(3);
  const [changeovers, setChangeovers] = useState(8);
  const [hourlyCost, setHourlyCost] = useState(3500);

  // Math model
  const totalChangeoversYear = lines * changeovers * 52;
  const avgHoursPerChangeover = 1.75;
  const totalChangeoverHours = totalChangeoversYear * avgHoursPerChangeover;
  const reductionRate = 0.34; // 34% reduction with CP-SAT solver
  const hoursReclaimed = Math.round(totalChangeoverHours * reductionRate);
  const annualSavings = hoursReclaimed * hourlyCost;
  const pilotCost = 45000;
  const paybackMonths = Math.max(0.8, Number(((pilotCost / annualSavings) * 12).toFixed(1)));
  // Annual operating hours per facility: lines * 52 weeks * 5 days/wk * shifts * 8 hrs/shift
  const totalOperatingHoursYear = lines * 52 * 5 * shifts * 8;
  const oeeGain = ((hoursReclaimed / totalOperatingHoursYear) * 100).toFixed(1);

  return (
    <div className="min-h-screen bg-surface text-on-surface flex flex-col selection:bg-primary/20 transition-colors">
      <CadenceHeader onOpenDemoModal={() => setIsDemoModalOpen(true)} />

      <main className="w-full pt-16 bg-surface flex-1">
        {/* Header Billboard */}
        <section className="w-full bg-surface border-b border-outline-variant/30 py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-6">
            <FadeIn>
              <div className="inline-flex items-center gap-2 self-start px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary font-mono text-xs uppercase tracking-wider font-semibold">
                <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
                <span>FINANCIAL RECOVERY MODEL · DOWNTIME COST AUDIT</span>
              </div>
              <h1 className="font-display font-bold text-3xl sm:text-5xl lg:text-6xl text-on-surface tracking-tight mt-3">
                Quantify the bottom-line cost of schedule fiction.
              </h1>
              <p className="text-base sm:text-lg text-on-surface-variant max-w-3xl leading-relaxed mt-2">
                Unoptimized changeover sequences, line starvation, and shift scramble directly destroy production OEE. Use our operational financial model to quantify annual recovered capacity and payback timeline.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Interactive Calculator Matrix */}
        <section className="w-full py-16 sm:py-20 lg:py-24 bg-surface-container-lowest">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Controls: Sliders (5 cols) */}
            <div className="lg:col-span-5 p-6 sm:p-8 bg-surface-container border border-outline-variant/50 rounded-2xl shadow-sm flex flex-col gap-8">
              <div className="border-b border-outline-variant/40 pb-4">
                <h3 className="font-display font-bold text-xl text-on-surface">
                  Plant Operational Parameters
                </h3>
                <p className="text-xs text-on-surface-variant mt-1">
                  Adjust sliders to match your facility topology.
                </p>
              </div>

              {/* Slider 1: Lines */}
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium text-on-surface">
                    Active Production Lines
                  </label>
                  <span className="font-mono text-sm font-bold text-primary px-2.5 py-0.5 rounded-md bg-surface border border-outline-variant/40">
                    {lines} Lines
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="40"
                  value={lines}
                  onChange={(e) => setLines(Number(e.target.value))}
                  className="w-full h-2 bg-surface-container-high rounded-lg appearance-none cursor-pointer accent-primary"
                />
                <div className="flex justify-between text-[11px] font-mono text-on-surface-variant">
                  <span>1 line (pilot)</span>
                  <span>20 lines</span>
                  <span>40 lines (campus)</span>
                </div>
              </div>

              {/* Slider 2: Shifts per Day */}
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium text-on-surface">
                    Daily Operating Shifts
                  </label>
                  <span className="font-mono text-sm font-bold text-primary px-2.5 py-0.5 rounded-md bg-surface border border-outline-variant/40">
                    {shifts} Shifts / Day
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="3"
                  value={shifts}
                  onChange={(e) => setShifts(Number(e.target.value))}
                  className="w-full h-2 bg-surface-container-high rounded-lg appearance-none cursor-pointer accent-primary"
                />
                <div className="flex justify-between text-[11px] font-mono text-on-surface-variant">
                  <span>1 Shift (8h)</span>
                  <span>2 Shifts (16h)</span>
                  <span>3 Shifts (24/7)</span>
                </div>
              </div>

              {/* Slider 3: Changeovers per Week */}
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium text-on-surface">
                    Weekly Changeovers / Line
                  </label>
                  <span className="font-mono text-sm font-bold text-primary px-2.5 py-0.5 rounded-md bg-surface border border-outline-variant/40">
                    {changeovers} Cleanouts / Wk
                  </span>
                </div>
                <input
                  type="range"
                  min="2"
                  max="25"
                  value={changeovers}
                  onChange={(e) => setChangeovers(Number(e.target.value))}
                  className="w-full h-2 bg-surface-container-high rounded-lg appearance-none cursor-pointer accent-primary"
                />
                <div className="flex justify-between text-[11px] font-mono text-on-surface-variant">
                  <span>2 cleanouts</span>
                  <span>12 cleanouts</span>
                  <span>25 (High mix)</span>
                </div>
              </div>

              {/* Slider 4: Hourly Downtime Cost */}
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium text-on-surface">
                    Line Downtime Cost / Hour
                  </label>
                  <span className="font-mono text-sm font-bold text-tertiary px-2.5 py-0.5 rounded-md bg-surface border border-outline-variant/40">
                    ${hourlyCost.toLocaleString()} / hr
                  </span>
                </div>
                <input
                  type="range"
                  min="500"
                  max="15000"
                  step="250"
                  value={hourlyCost}
                  onChange={(e) => setHourlyCost(Number(e.target.value))}
                  className="w-full h-2 bg-surface-container-high rounded-lg appearance-none cursor-pointer accent-primary"
                />
                <div className="flex justify-between text-[11px] font-mono text-on-surface-variant">
                  <span>$500/hr</span>
                  <span>$7,500/hr</span>
                  <span>$15,000/hr</span>
                </div>
              </div>
            </div>

            {/* Right Output: Impact Cards (7 cols) */}
            <div className="lg:col-span-7 flex flex-col gap-8">
              {/* Primary Payback Highlight Box */}
              <div className="p-8 sm:p-10 bg-surface-container-low border border-outline-variant/50 rounded-2xl shadow-md flex flex-col gap-6">
                <div className="flex items-center justify-between border-b border-outline-variant/40 pb-4">
                  <span className="font-mono text-xs uppercase tracking-wider text-on-surface-variant font-semibold">
                    BENCHMARK PAYBACK TIMELINE
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary/15 text-secondary font-mono text-xs font-bold">
                    <span className="w-2 h-2 rounded-full bg-secondary"></span>
                    Verified Plant Benchmark
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div>
                    <span className="font-mono text-xs text-on-surface-variant uppercase">
                      Annual Cost Saved
                    </span>
                    <div className="font-display font-black text-3xl sm:text-4xl text-primary mt-1">
                      ${annualSavings.toLocaleString()}
                    </div>
                    <span className="text-xs text-on-surface-variant mt-1 block">
                      Direct downtime waste recovered
                    </span>
                  </div>

                  <div>
                    <span className="font-mono text-xs text-on-surface-variant uppercase">
                      Payback Horizon
                    </span>
                    <div className="font-display font-black text-3xl sm:text-4xl text-secondary mt-1">
                      {paybackMonths} Mo
                    </div>
                    <span className="text-xs text-on-surface-variant mt-1 block">
                      Full pilot investment recovered
                    </span>
                  </div>

                  <div>
                    <span className="font-mono text-xs text-on-surface-variant uppercase">
                      Net Capacity Freed
                    </span>
                    <div className="font-display font-black text-3xl sm:text-4xl text-on-surface mt-1">
                      +{hoursReclaimed}h
                    </div>
                    <span className="text-xs text-on-surface-variant mt-1 block">
                      Reclaimed line hours / year
                    </span>
                  </div>
                </div>
              </div>

              {/* Sub-Metric Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-6 bg-surface-container rounded-2xl border border-outline-variant/40 flex flex-col gap-2">
                  <div className="flex items-center justify-between text-xs font-mono text-on-surface-variant">
                    <span>OEE YIELD RECOVERY</span>
                    <span className="material-symbols-outlined text-primary text-[18px]">trending_up</span>
                  </div>
                  <div className="font-display font-bold text-3xl text-on-surface">
                    +{oeeGain}%
                  </div>
                  <p className="text-xs text-on-surface-variant mt-1">
                    Equivalent to gaining an extra operational shift every month without new capital equipment.
                  </p>
                </div>

                <div className="p-6 bg-surface-container rounded-2xl border border-outline-variant/40 flex flex-col gap-2">
                  <div className="flex items-center justify-between text-xs font-mono text-on-surface-variant">
                    <span>WEEKLY TIME SAVED / SCHEDULER</span>
                    <span className="material-symbols-outlined text-secondary text-[18px]">schedule</span>
                  </div>
                  <div className="font-display font-bold text-3xl text-on-surface">
                    14.5 Hours
                  </div>
                  <p className="text-xs text-on-surface-variant mt-1">
                    Manual spreadsheet firefighting eliminated; master production schedulers focus on strategic exception handling.
                  </p>
                </div>
              </div>

              {/* CTA Action Banner */}
              <div className="p-6 sm:p-8 bg-surface-container border border-outline-variant/50 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h4 className="font-display font-bold text-lg text-on-surface">
                    Verify this calculation on your own work orders
                  </h4>
                  <p className="text-xs text-on-surface-variant mt-0.5">
                    We will ingest 1 month of your plant production logs and provide an exact audit report.
                  </p>
                </div>
                <button
                  onClick={() => setIsDemoModalOpen(true)}
                  className="h-10 px-5 bg-primary hover:bg-primary-container text-white text-xs font-medium rounded-xl transition-all shadow-sm shrink-0 active:scale-95"
                  type="button"
                >
                  Book Data Audit
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <CadenceFooter />
      <CadenceDemoModal isOpen={isDemoModalOpen} onClose={() => setIsDemoModalOpen(false)} />
    </div>
  );
}
