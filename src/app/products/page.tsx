'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import CadenceHeader from '@/components/CadenceHeader';
import CadenceFooter from '@/components/CadenceFooter';
import CadenceDemoModal from '@/components/CadenceDemoModal';

export default function ProductsServicesPage() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [activeShift, setActiveShift] = useState<'Shift' | 'Day' | 'Hour'>('Shift');
  const [solving, setSolving] = useState(false);
  const [solved, setSolved] = useState(false);

  const handleResolve = () => {
    setSolving(true);
    setSolved(false);
    setTimeout(() => {
      setSolving(false);
      setSolved(true);
      setTimeout(() => setSolved(false), 2500);
    }, 600);
  };

  const services = [
    {
      title: 'SAP Business Data Cloud',
      category: 'Enterprise Integration',
      desc: 'Provide consulting, implementation, and integration services for SAP Business Data Cloud, a fully managed SaaS platform that unifies and governs enterprise SAP data while seamlessly connecting with third-party data sources. This enables business leaders to access contextualized insights and make faster, more impactful decisions.',
      icon: 'database',
      image: 'https://thequantumprimes.com/wp-content/uploads/2026/03/95da47bd-bd80-4891-b027-fcc3694ab38e.png',
      badge: 'SAP Gold Standard'
    },
    {
      title: 'SAP Datasphere Implementation',
      category: 'Data Fabric',
      desc: 'We enable enterprises to unlock the full potential of SAP Datasphere through end to end consulting and implementation services. Our solutions allow organizations to reuse semantic definitions from SAP systems, harmonize diverse datasets into a unified business model, and provide scalable access to trusted data across cloud and on premise environments.',
      icon: 'hub',
      image: 'https://thequantumprimes.com/wp-content/uploads/2026/03/b24554d4-7d9c-43bd-a914-d289bfe145b9-e1772797072862.png',
      badge: 'Semantic Harmonization'
    },
    {
      title: 'SAP Analytics Cloud (SAC)',
      category: 'Business Intelligence & Planning',
      desc: 'Implementation and integration services for SAP Analytics Cloud, a SaaS platform from SAP that unifies business intelligence, augmented analytics, and enterprise planning in a single environment. It enables organizations to visualize data, build interactive dashboards, and run predictive scenarios using embedded AI and machine learning, helping teams uncover insights and make faster, data-driven decisions.',
      icon: 'insights',
      image: 'https://thequantumprimes.com/wp-content/uploads/2026/03/c0783492-8cde-4535-b86e-21e3461431d0-e1772708724239.png',
      badge: 'Augmented Analytics'
    },
    {
      title: 'Databricks Data Intelligence Platform',
      category: 'Lakehouse & Generative AI',
      desc: 'Databricks Data Intelligence Platform, enabling organizations to unify data, analytics, and AI on an open lakehouse architecture. The platform provides a scalable foundation for data engineering, ETL, data warehousing, advanced analytics, and generative AI, powered by an intelligent engine that understands enterprise data and governance. This enables organizations to accelerate innovation and transform data into AI-driven business value.',
      icon: 'neurology',
      image: 'https://thequantumprimes.com/wp-content/uploads/2026/03/Databricks_Logo.png',
      badge: 'Open Lakehouse'
    },
    {
      title: 'Digital Twins Powered by NVIDIA Omniverse',
      category: 'Simulation & Virtual Factory',
      desc: 'Our company specializes in developing cutting-edge digital twin solutions tailored to your industry and setup. Powered by NVIDIA Omniverse, a real-time, physically accurate simulation platform built on USD (Universal Scene Description), we help you create and optimize virtual replicas of your assets, operations, and infrastructure. Our digital twin services simulate and optimize factory operations, including warehouse logistics and production workflows to test, iterate, and refine processes before physical implementation.',
      icon: 'view_in_ar',
      image: 'https://thequantumprimes.com/wp-content/uploads/2026/03/957f7696-25ed-4620-843f-9b4bc05eb2d6.png',
      badge: 'NVIDIA Omniverse'
    }
  ];

  return (
    <div className="min-h-screen bg-surface text-on-surface flex flex-col selection:bg-primary/20 transition-colors">
      <CadenceHeader onOpenDemoModal={() => setIsDemoModalOpen(true)} />

      <main className="w-full pt-16 bg-surface flex-1">
        {/* Top Hero Banner */}
        <section className="relative w-full overflow-hidden bg-surface-container-low py-16 lg:py-24 border-b border-outline-variant/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono uppercase tracking-wider font-semibold">
                <span className="w-2 h-2 rounded-full bg-primary animate-ping"></span>
                The Quantum Primes Portfolio
              </div>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-on-surface">
                Products &amp; Enterprise Services
              </h1>
              <p className="font-body-default text-lg sm:text-xl text-on-surface-variant leading-relaxed">
                From deterministic manufacturing schedule optimization to enterprise SAP data lakes and NVIDIA Omniverse digital twins — we design adaptive systems that turn complex enterprise data into predictive foresight.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
                <a
                  href="#flagship-scheduler"
                  className="h-11 px-6 bg-primary hover:bg-primary-container text-white font-medium text-sm rounded-xl flex items-center gap-2 transition-all shadow-md hover:shadow-lg"
                >
                  <span className="material-symbols-outlined text-[18px]">view_timeline</span>
                  <span>Explore Cadence APS Scheduler</span>
                </a>
                <a
                  href="#enterprise-services"
                  className="h-11 px-6 bg-surface-container hover:bg-surface-container-high text-on-surface font-medium text-sm rounded-xl flex items-center gap-2 transition-all border border-outline-variant/50"
                >
                  <span className="material-symbols-outlined text-[18px]">hub</span>
                  <span>Enterprise Data &amp; AI Services</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FLAGSHIP PRODUCT SECTION: CADENCE APS SCHEDULER */}
        <section id="flagship-scheduler" className="relative w-full py-20 lg:py-28 bg-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Flagship Header */}
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-12 border-b border-outline-variant/40">
              <div>
                <div className="inline-flex items-center gap-2 text-primary font-mono text-xs uppercase font-semibold mb-2">
                  <span className="w-2 h-2 rounded-full bg-secondary"></span>
                  Flagship Enterprise Product
                </div>
                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-on-surface tracking-tight">
                  Cadence APS: Advanced Production Scheduler
                </h2>
                <p className="text-on-surface-variant font-body-default text-base sm:text-lg max-w-3xl mt-3">
                  A deterministic, constraint-satisfaction mathematical scheduling engine built for discrete manufacturing. Replaces spreadsheet guesswork with mathematically provable optimal sequencing across multi-stage routings, tooling, shifts, and cleanings.
                </p>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <button
                  type="button"
                  onClick={() => setIsDemoModalOpen(true)}
                  className="h-11 px-5 bg-primary hover:bg-primary-container text-white font-medium text-sm rounded-xl flex items-center gap-2 transition-all shadow"
                >
                  <span className="material-symbols-outlined text-[18px]">event</span>
                  <span>Book Product Demo</span>
                </button>
                <a
                  href="http://localhost:5173"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-11 px-5 bg-surface-container hover:bg-surface-container-high text-on-surface font-medium text-sm rounded-xl flex items-center gap-2 transition-all border border-outline-variant/40"
                >
                  <span className="material-symbols-outlined text-primary text-[18px]">launch</span>
                  <span>Open Full Scheduler</span>
                </a>
              </div>
            </div>

            {/* Interactive Scheduler Gantt Preview */}
            <div className="mt-12 w-full bg-[#0E131A] text-[#F0F4F8] rounded-2xl shadow-2xl overflow-hidden border border-[#202938] p-5 sm:p-7 flex flex-col gap-6">
              <div className="flex flex-wrap items-center justify-between gap-4 bg-[#161C26] p-4 rounded-xl border border-[#263244]">
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="px-3 py-1 rounded bg-[#202938] font-mono text-xs text-[#9BA8B8] font-medium">
                    3-Month Schedule Horizon
                  </span>
                  <span className="px-3 py-1 rounded bg-[#202938] font-mono text-xs text-[#3ECF8E] flex items-center gap-1.5 font-medium">
                    <span className="w-2 h-2 rounded-full bg-[#3ECF8E] animate-pulse"></span>
                    1,782 Tasks Scheduled
                  </span>
                  <span className="hidden md:inline-flex px-3 py-1 rounded bg-[#202938] font-mono text-xs text-[#9BA8B8]">
                    Solver Engine: Google OR-Tools CP-SAT (Optimal)
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex bg-[#202938] p-1 rounded-lg text-xs font-mono text-[#9BA8B8]">
                    <button
                      onClick={() => setActiveShift('Shift')}
                      className={`px-3 py-1 rounded transition-colors ${activeShift === 'Shift' ? 'bg-[#2C384B] text-white font-medium' : 'hover:text-white'}`}
                    >
                      Shift
                    </button>
                    <button
                      onClick={() => setActiveShift('Day')}
                      className={`px-3 py-1 rounded transition-colors ${activeShift === 'Day' ? 'bg-[#2C384B] text-white font-medium' : 'hover:text-white'}`}
                    >
                      Day
                    </button>
                    <button
                      onClick={() => setActiveShift('Hour')}
                      className={`px-3 py-1 rounded transition-colors ${activeShift === 'Hour' ? 'bg-[#2C384B] text-white font-medium' : 'hover:text-white'}`}
                    >
                      Hour
                    </button>
                  </div>
                  <button
                    onClick={handleResolve}
                    disabled={solving}
                    className="px-4 py-1.5 bg-primary text-white rounded-lg font-sans text-xs flex items-center gap-2 hover:bg-blue-600 transition-all font-medium shadow"
                  >
                    {solving ? (
                      <>
                        <span className="material-symbols-outlined text-[16px] animate-spin">refresh</span>
                        <span>Solving...</span>
                      </>
                    ) : solved ? (
                      <>
                        <span className="material-symbols-outlined text-[16px] text-emerald-400">check</span>
                        <span>Optimal (0.4s)</span>
                      </>
                    ) : (
                      <>
                        <span className="material-symbols-outlined text-[16px]">refresh</span>
                        <span>Re-solve Engine</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Gantt Matrix Grid */}
              <div className="relative w-full overflow-x-auto bg-[#121720] rounded-xl p-4 select-none border border-[#1E2633]">
                <div className="min-w-[700px] flex flex-col gap-3 font-mono text-xs">
                  {/* Timeline Header */}
                  <div className="grid grid-cols-12 gap-2 text-[#6C7D93] text-[11px] pb-2 border-b border-[#202938]">
                    <div className="col-span-3 font-semibold uppercase">Work Center / Machine</div>
                    <div className="col-span-3 text-center">Shift 1 (06:00 - 14:00)</div>
                    <div className="col-span-3 text-center">Shift 2 (14:00 - 22:00)</div>
                    <div className="col-span-3 text-center">Shift 3 (22:00 - 06:00)</div>
                  </div>

                  {/* Line 1 */}
                  <div className="grid grid-cols-12 gap-2 items-center py-1">
                    <div className="col-span-3 text-[#D1DAE5] font-medium flex items-center gap-2">
                      <span className="w-2 h-2 rounded bg-blue-500"></span>
                      Extruder-01 (Line A)
                    </div>
                    <div className="col-span-9 grid grid-cols-9 gap-1 h-9 bg-[#171E2B] rounded-lg p-1">
                      <div className="col-span-4 bg-blue-600/80 hover:bg-blue-500 rounded flex items-center justify-center text-[10px] text-white font-medium px-2 truncate transition-colors">
                        Batch #A-402 (Polymer A)
                      </div>
                      <div className="col-span-1 bg-amber-500/40 rounded flex items-center justify-center text-[9px] text-amber-200">
                        CIP
                      </div>
                      <div className="col-span-4 bg-emerald-600/80 hover:bg-emerald-500 rounded flex items-center justify-center text-[10px] text-white font-medium px-2 truncate transition-colors">
                        Batch #A-403 (High Density)
                      </div>
                    </div>
                  </div>

                  {/* Line 2 */}
                  <div className="grid grid-cols-12 gap-2 items-center py-1">
                    <div className="col-span-3 text-[#D1DAE5] font-medium flex items-center gap-2">
                      <span className="w-2 h-2 rounded bg-indigo-500"></span>
                      Blender Unit 04
                    </div>
                    <div className="col-span-9 grid grid-cols-9 gap-1 h-9 bg-[#171E2B] rounded-lg p-1">
                      <div className="col-span-5 bg-indigo-600/80 hover:bg-indigo-500 rounded flex items-center justify-center text-[10px] text-white font-medium px-2 truncate transition-colors">
                        Mixing Run 104 (5,000L)
                      </div>
                      <div className="col-span-4 bg-cyan-600/80 hover:bg-cyan-500 rounded flex items-center justify-center text-[10px] text-white font-medium px-2 truncate transition-colors">
                        Sterilization &amp; Pre-heat
                      </div>
                    </div>
                  </div>

                  {/* Line 3 */}
                  <div className="grid grid-cols-12 gap-2 items-center py-1">
                    <div className="col-span-3 text-[#D1DAE5] font-medium flex items-center gap-2">
                      <span className="w-2 h-2 rounded bg-purple-500"></span>
                      High-Speed Pack 02
                    </div>
                    <div className="col-span-9 grid grid-cols-9 gap-1 h-9 bg-[#171E2B] rounded-lg p-1">
                      <div className="col-span-3 bg-purple-600/80 hover:bg-purple-500 rounded flex items-center justify-center text-[10px] text-white font-medium px-2 truncate transition-colors">
                        SKU-7801 (Cartons)
                      </div>
                      <div className="col-span-2 bg-amber-500/30 rounded flex items-center justify-center text-[9px] text-amber-300">
                        Die Change
                      </div>
                      <div className="col-span-4 bg-violet-600/80 hover:bg-violet-500 rounded flex items-center justify-center text-[10px] text-white font-medium px-2 truncate transition-colors">
                        SKU-9920 (Export Pouch)
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Feature Pills */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-2">
                <div className="bg-[#161C26] p-3.5 rounded-xl border border-[#202938]">
                  <div className="text-[11px] text-[#9BA8B8] uppercase font-mono">Setup Time Reduced</div>
                  <div className="text-xl font-bold text-white mt-1">-34% Changeover</div>
                </div>
                <div className="bg-[#161C26] p-3.5 rounded-xl border border-[#202938]">
                  <div className="text-[11px] text-[#9BA8B8] uppercase font-mono">OEE Plant Lift</div>
                  <div className="text-xl font-bold text-emerald-400 mt-1">+6.4% Efficiency</div>
                </div>
                <div className="bg-[#161C26] p-3.5 rounded-xl border border-[#202938]">
                  <div className="text-[11px] text-[#9BA8B8] uppercase font-mono">Solve Latency</div>
                  <div className="text-xl font-bold text-blue-400 mt-1">&lt;1.2s Real-Time</div>
                </div>
                <div className="bg-[#161C26] p-3.5 rounded-xl border border-[#202938]">
                  <div className="text-[11px] text-[#9BA8B8] uppercase font-mono">Delivery On-Time (OTIF)</div>
                  <div className="text-xl font-bold text-white mt-1">99.4% Adherence</div>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-2 text-xs text-[#9BA8B8]">
                <span>Compatible with SAP S/4HANA, Microsoft Dynamics 365, Oracle NetSuite, and OPC-UA MES.</span>
                <div className="flex items-center gap-3">
                  <Link href="/features" className="text-primary hover:underline font-medium">Explore 6 Core Modules →</Link>
                  <Link href="/roi-calculator" className="text-emerald-400 hover:underline font-medium">Calculate Plant Savings →</Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ENTERPRISE SERVICES SECTION */}
        <section id="enterprise-services" className="relative w-full py-20 bg-surface-container-low border-t border-outline-variant/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
              <span className="font-eyebrow text-xs uppercase text-primary font-semibold tracking-wider">
                Enterprise Cloud &amp; Applied AI Services
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-on-surface tracking-tight mt-2">
                Modern Data Architectures &amp; Industrial Intelligence
              </h2>
              <p className="text-on-surface-variant font-body-default text-base mt-4 leading-relaxed">
                Consulting, implementation, and engineering services to entangle your corporate systems, eliminate data silos, and power real-time predictive operations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((svc, idx) => (
                <div
                  key={idx}
                  className="bg-surface-container-lowest rounded-2xl p-6 sm:p-7 border border-outline-variant/50 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                        <span className="material-symbols-outlined text-[15px]">{svc.icon}</span>
                        {svc.badge}
                      </span>
                      <span className="text-xs text-on-surface-variant font-mono">{svc.category}</span>
                    </div>

                    {svc.image && (
                      <div className="h-28 w-full rounded-xl bg-surface-container-low p-3 flex items-center justify-center overflow-hidden border border-outline-variant/30">
                        <img
                          src={svc.image}
                          alt={svc.title}
                          className="max-h-full max-w-full object-contain filter group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )}

                    <h3 className="font-display text-xl font-semibold text-on-surface group-hover:text-primary transition-colors">
                      {svc.title}
                    </h3>
                    <p className="font-body-dense text-sm text-on-surface-variant leading-relaxed">
                      {svc.desc}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-outline-variant/30 flex items-center justify-between">
                    <Link
                      href="/contact"
                      className="text-xs font-semibold text-primary group-hover:text-primary-container flex items-center gap-1"
                    >
                      <span>Inquire About Implementation</span>
                      <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BOTTOM CTA BANNER */}
        <section className="relative w-full py-16 bg-surface border-t border-outline-variant/40">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-on-surface">
              Ready to Upgrade Your Manufacturing &amp; Data Infrastructure?
            </h2>
            <p className="font-body-default text-base sm:text-lg text-on-surface-variant max-w-2xl mx-auto">
              Schedule an executive briefing or schedule model demo with our operations research specialists.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <button
                type="button"
                onClick={() => setIsDemoModalOpen(true)}
                className="h-12 px-8 bg-primary hover:bg-primary-container text-white font-medium text-sm rounded-xl shadow-lg transition-all"
              >
                Book Cadence APS Demo
              </button>
              <Link
                href="/contact"
                className="h-12 px-8 bg-surface-container hover:bg-surface-container-high text-on-surface font-medium text-sm rounded-xl border border-outline-variant/50 transition-all flex items-center"
              >
                Contact Consulting Team
              </Link>
            </div>
          </div>
        </section>
      </main>

      <CadenceFooter />
      <CadenceDemoModal isOpen={isDemoModalOpen} onClose={() => setIsDemoModalOpen(false)} />
    </div>
  );
}
