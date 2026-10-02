'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import CadenceHeader from '@/components/CadenceHeader';
import CadenceFooter from '@/components/CadenceFooter';
import CadenceDemoModal from '@/components/CadenceDemoModal';

export default function HomePage() {
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

  const partners = [
    { name: 'SAP Gold Partner', logo: 'https://thequantumprimes.com/wp-content/uploads/2026/03/toppng.com-sap-logo-vector-512x512-1.png' },
    { name: 'Databricks', logo: 'https://thequantumprimes.com/wp-content/uploads/2026/03/Databricks_Logo.png' },
    { name: 'Snowflake', logo: 'https://thequantumprimes.com/wp-content/uploads/2026/03/HI_RES_Snowflake_Logo_Blue_1800x550.jpg' },
    { name: 'NVIDIA Omniverse', logo: 'https://thequantumprimes.com/wp-content/uploads/2026/03/957f7696-25ed-4620-843f-9b4bc05eb2d6.png' }
  ];

  const industriesList = [
    { title: 'Pharmaceutical', icon: 'medication', desc: 'Campaign sequencing, clean-in-place (CIP), and regulatory traceability.' },
    { title: 'Oil & Gas', icon: 'oil_barrel', desc: 'Downstream refinery scheduling and real-time yield optimization.' },
    { title: 'Manufacturing', icon: 'precision_manufacturing', desc: 'Finite-capacity job-shop dispatching and multi-stage routings.' },
    { title: 'Banks & Finance', icon: 'account_balance', desc: 'Unified lakehouse architectures and predictive enterprise analytics.' },
    { title: 'Food & Beverage', icon: 'restaurant', desc: 'Shelf-life decay constraints, allergen segregation, and tank churn.' },
    { title: 'Logistics & Supply', icon: 'local_shipping', desc: 'Fleet telemetry, cross-dock scheduling, and warehouse digital twins.' },
    { title: 'Consumer Packed Goods', icon: 'shopping_bag', desc: 'High-speed packaging line leveling and changeover minimization.' },
    { title: 'Aviation', icon: 'flight_takeoff', desc: 'Maintenance turnaround scheduling, component lifecycle simulation.' }
  ];

  return (
    <div className="min-h-screen bg-surface text-on-surface flex flex-col selection:bg-primary/20 transition-colors">
      <CadenceHeader onOpenDemoModal={() => setIsDemoModalOpen(true)} />

      <main className="w-full pt-16 bg-surface flex-1">
        {/* HERO SECTION WITH ANIMATED VIDEO BACKGROUND */}
        <section className="relative w-full min-h-[85vh] lg:min-h-[92vh] flex items-center justify-center overflow-hidden bg-black text-white">
          {/* Animated Background Video */}
          <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none select-none z-0">
            <video
              className="w-full h-full object-cover opacity-45 scale-105"
              src="https://thequantumprimes.com/wp-content/uploads/2026/03/office-viedo-1.mp4"
              autoPlay
              loop
              muted
              playsInline
            />
            {/* Tech Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-surface via-black/60 to-black/80" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-black/80" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 text-center flex flex-col items-center">
            {/* Brand Eyebrow */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs sm:text-sm font-mono uppercase tracking-wider mb-8 animate-fadeIn">
              <span className="w-2 h-2 rounded-full bg-primary animate-ping"></span>
              <span className="font-semibold text-primary-fixed">The Quantum Primes</span>
              <span className="text-white/40">•</span>
              <span className="text-white/80">Autonomous Industrial Intelligence</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white max-w-5xl leading-[1.08]">
              Transform Your Data Into <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-sky-300 to-emerald-400">Intelligent Decisions</span>
            </h1>

            {/* Subtitle from the original site */}
            <p className="mt-6 text-base sm:text-xl text-neutral-300 max-w-3xl leading-relaxed font-sans">
              We build AI-powered systems to entangle and unify enterprise data, converting complexity into predictive foresight, intelligent automation, and measurable competitive advantage.
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/products"
                className="h-12 px-8 bg-primary hover:bg-primary-container text-white font-medium text-sm sm:text-base rounded-xl flex items-center gap-2 transition-all shadow-xl hover:shadow-2xl hover:scale-[1.02] active:scale-95"
              >
                <span className="material-symbols-outlined text-[20px]">view_timeline</span>
                <span>Explore Products &amp; Services</span>
              </Link>
              <button
                type="button"
                onClick={() => setIsDemoModalOpen(true)}
                className="h-12 px-7 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-medium text-sm sm:text-base rounded-xl border border-white/25 flex items-center gap-2 transition-all hover:scale-[1.02]"
              >
                <span>Book Executive Briefing</span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </button>
            </div>

            {/* Partner Proof Bar */}
            <div className="mt-16 pt-10 border-t border-white/15 w-full max-w-4xl flex flex-col items-center gap-4">
              <span className="text-xs uppercase tracking-widest text-neutral-400 font-mono">
                Enterprise Ecosystems &amp; Accelerated Runtimes
              </span>
              <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 opacity-80 filter brightness-110">
                <span className="text-sm font-semibold tracking-wide text-neutral-200">SAP S/4HANA &amp; Datasphere</span>
                <span className="text-sm font-semibold tracking-wide text-neutral-200">Databricks Lakehouse</span>
                <span className="text-sm font-semibold tracking-wide text-neutral-200">Snowflake</span>
                <span className="text-sm font-semibold tracking-wide text-neutral-200">NVIDIA Omniverse</span>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: THE PROBLEM & SOLUTION CONTRAST */}
        <section className="relative w-full py-20 lg:py-28 bg-surface border-b border-outline-variant/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-flex items-center gap-2 text-primary font-mono text-xs uppercase font-semibold">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                  The Enterprise Challenge
                </div>
                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-on-surface">
                  Your Data is Growing. <br />
                  <span className="text-primary">Your Clarity isn’t.</span>
                </h2>
                <p className="font-body-default text-base sm:text-lg text-on-surface-variant leading-relaxed">
                  Enterprises today are inundated with telemetry, transaction logs, ERP records, and shop-floor signals. Yet decision makers still rely on static spreadsheets, guesswork, and lagging indicators.
                </p>
                <div className="p-6 bg-surface-container-low rounded-2xl border border-outline-variant/40 space-y-3">
                  <h3 className="font-display text-lg font-semibold text-on-surface flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-[22px]">psychology</span>
                    Transforming Business Complexity into Competitive Advantage
                  </h3>
                  <p className="text-sm text-on-surface-variant leading-relaxed">
                    We Engineer Intelligence. Design and deploy scalable AI and data systems tailored to your business objectives. From predictive modeling to full AI integration, we convert complexity into competitive advantage.
                  </p>
                </div>
                <div className="flex items-center gap-4 pt-2">
                  <Link
                    href="/company"
                    className="h-11 px-6 bg-surface-container hover:bg-surface-container-high text-on-surface font-medium text-sm rounded-xl flex items-center gap-2 border border-outline-variant/50 transition-colors"
                  >
                    <span>Read Company Philosophy</span>
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </Link>
                </div>
              </div>

              {/* Office Image Visual */}
              <div className="lg:col-span-6 relative flex items-center justify-center">
                <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl border border-outline-variant/40 bg-surface-container-low">
                  <img
                    src="https://thequantumprimes.com/wp-content/uploads/2026/03/office_no_background.png"
                    alt="The Quantum Primes Engineering Workspace"
                    className="w-full h-auto object-contain max-h-[460px] mx-auto filter drop-shadow-xl"
                  />
                  <div className="absolute bottom-4 left-4 right-4 bg-surface-container-lowest/90 backdrop-blur-md p-4 rounded-xl border border-outline-variant/40 flex items-center justify-between">
                    <div>
                      <div className="text-xs uppercase font-mono text-primary font-bold">Industrial Intelligence Core</div>
                      <div className="text-sm font-semibold text-on-surface">Applied AI • Data Fabric • APS Engine</div>
                    </div>
                    <span className="material-symbols-outlined text-secondary text-[24px]">verified</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: FLAGSHIP PRODUCT HIGHLIGHT - SCHEDULER WEBSITE */}
        <section className="relative w-full py-20 lg:py-28 bg-surface-container-low border-b border-outline-variant/30" id="scheduler-flagship">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14">
              <span className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono uppercase tracking-wider font-semibold">
                Flagship SaaS Solution
              </span>
              <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-on-surface mt-3">
                Cadence APS: Production Scheduler
              </h2>
              <p className="text-on-surface-variant font-body-default text-base sm:text-lg mt-3 leading-relaxed">
                Deterministic mathematical optimization for physical manufacturing floors. Built by The Quantum Primes, Cadence APS replaces manual scheduling chaos with provably optimal constraint-satisfying schedules.
              </p>
            </div>

            {/* Interactive Scheduler Gantt Terminal */}
            <div className="w-full bg-[#0E131A] text-[#F0F4F8] rounded-2xl shadow-2xl overflow-hidden border border-[#202938] p-5 sm:p-7 flex flex-col gap-6">
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

              {/* Bottom Feature Navigation */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                <div className="flex items-center gap-3">
                  <Link
                    href="/products"
                    className="px-5 py-2.5 bg-primary hover:bg-blue-600 text-white font-medium text-xs rounded-xl flex items-center gap-2 transition-all shadow"
                  >
                    <span>View Full Scheduler Specification</span>
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </Link>
                  <Link
                    href="/roi-calculator"
                    className="px-4 py-2.5 bg-[#1E2633] hover:bg-[#2C384B] text-white font-medium text-xs rounded-xl flex items-center gap-1.5 transition-all"
                  >
                    <span className="material-symbols-outlined text-[16px] text-emerald-400">calculate</span>
                    <span>Calculate Factory ROI</span>
                  </Link>
                </div>
                <div className="text-xs text-[#9BA8B8] font-mono">
                  Integrated with SAP, Microsoft Dynamics &amp; AVEVA MES
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: OUR SOLUTIONS ARE ENABLED BY (PARTNERS FROM LIVE SITE) */}
        <section className="relative w-full py-20 bg-surface border-b border-outline-variant/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14">
              <span className="font-eyebrow text-xs uppercase text-primary font-semibold tracking-wider">
                Enterprise Ecosystem
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-on-surface tracking-tight mt-2">
                Our Solutions Are Enabled By
              </h2>
              <p className="text-on-surface-variant font-body-default text-base mt-3 leading-relaxed">
                Partnering with top organizations, we harness data science, engineering, and digital twin technology to structure your data and foster sustainable business growth.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {partners.map((partner, idx) => (
                <div
                  key={idx}
                  className="bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant/40 shadow-sm flex flex-col items-center justify-center text-center gap-4 hover:border-primary/50 transition-all group"
                >
                  <div className="h-20 w-full flex items-center justify-center p-2">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="max-h-16 max-w-full object-contain filter group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <span className="font-display font-semibold text-sm text-on-surface">
                    {partner.name}
                  </span>
                </div>
              ))}
            </div>

            {/* Banner graphic from live site */}
            <div className="mt-14 rounded-2xl overflow-hidden border border-outline-variant/30 bg-surface-container-low shadow-md">
              <img
                src="https://thequantumprimes.com/wp-content/uploads/2026/03/6512e4b6d75aa-scaled.png"
                alt="The Quantum Primes Technology Stack"
                className="w-full h-auto object-cover max-h-[320px]"
              />
            </div>
          </div>
        </section>

        {/* SECTION 5: CRAFTED PRECISELY FOR UNMATCHED BUSINESS SUCCESS */}
        <section className="relative w-full py-20 bg-surface-container-low border-b border-outline-variant/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 space-y-6">
                <span className="font-eyebrow text-xs uppercase text-primary font-semibold tracking-wider">
                  Operational Philosophy
                </span>
                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-on-surface">
                  Crafted Precisely for Unmatched Business Success
                </h2>
                <p className="font-body-default text-base sm:text-lg text-on-surface-variant leading-relaxed">
                  We are a dedicated team focused on enhancing businesses through innovative products. We create exceptional solutions to address your business challenges. Our offerings are crafted for enterprises of all sizes, aiming to optimize performance and strategic decision making.
                </p>
                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div className="p-4 bg-surface-container-lowest rounded-xl border border-outline-variant/40">
                    <div className="text-2xl font-bold text-primary font-display">100%</div>
                    <div className="text-xs text-on-surface-variant mt-1">Constraint Satisfaction Assurance</div>
                  </div>
                  <div className="p-4 bg-surface-container-lowest rounded-xl border border-outline-variant/40">
                    <div className="text-2xl font-bold text-secondary font-display">&lt;1.2s</div>
                    <div className="text-xs text-on-surface-variant mt-1">Re-solve Latency on Live Events</div>
                  </div>
                </div>
                <div className="pt-2">
                  <Link
                    href="/contact"
                    className="h-11 px-6 bg-primary hover:bg-primary-container text-white font-medium text-sm rounded-xl inline-flex items-center gap-2 transition-all shadow"
                  >
                    <span>Get in Touch with Our Engineers</span>
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-6 flex items-center justify-center">
                <div className="rounded-2xl overflow-hidden shadow-xl border border-outline-variant/40 bg-surface-container-lowest p-4">
                  <img
                    src="https://thequantumprimes.com/wp-content/uploads/2026/03/300fc6f9-345d-466b-88d8-9d167e1aed88-e1772782989931.png"
                    alt="Digital Twin and Industrial Optimization"
                    className="w-full h-auto object-contain max-h-[440px] rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 6: TARGET INDUSTRIES FROM LIVE SITE */}
        <section className="relative w-full py-20 bg-surface border-b border-outline-variant/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14">
              <span className="font-eyebrow text-xs uppercase text-primary font-semibold tracking-wider">
                Sectors &amp; Deployments
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-on-surface tracking-tight mt-2">
                Industries We Power
              </h2>
              <p className="text-on-surface-variant font-body-default text-base mt-3 leading-relaxed">
                Specialized data pipelines, digital twins, and optimization models engineered for high-stakes enterprise environments.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {industriesList.map((ind, idx) => (
                <div
                  key={idx}
                  className="bg-surface-container-low p-6 rounded-2xl border border-outline-variant/40 hover:border-primary/40 transition-all flex flex-col justify-between group"
                >
                  <div className="space-y-3">
                    <span className="material-symbols-outlined text-primary text-[28px] group-hover:scale-110 transition-transform">
                      {ind.icon}
                    </span>
                    <h3 className="font-display font-semibold text-lg text-on-surface">
                      {ind.title}
                    </h3>
                    <p className="font-body-dense text-xs text-on-surface-variant leading-relaxed">
                      {ind.desc}
                    </p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-outline-variant/20">
                    <Link
                      href="/industries"
                      className="text-[11px] font-mono text-primary font-semibold flex items-center gap-1 group-hover:underline"
                    >
                      <span>Explore Workflows</span>
                      <span className="material-symbols-outlined text-[13px]">arrow_forward</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 7: FINAL CALL TO ACTION */}
        <section className="relative w-full py-20 bg-surface-container-low">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-on-surface">
              Begin Your Industrial Intelligence Transformation
            </h2>
            <p className="font-body-default text-base sm:text-lg text-on-surface-variant max-w-2xl mx-auto">
              Discuss your factory scheduling bottlenecks, SAP data fabric, or NVIDIA digital twin initiatives directly with our leadership and engineers.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-3">
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
                Contact The Quantum Primes
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
