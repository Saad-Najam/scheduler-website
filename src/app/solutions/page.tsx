'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import CadenceHeader from '@/components/CadenceHeader';
import CadenceFooter from '@/components/CadenceFooter';
import CadenceDemoModal from '@/components/CadenceDemoModal';
import { FadeIn, FadeInStagger } from '@/components/Motion';

export default function SolutionsPage() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  const pillars = [
    {
      num: '01',
      title: 'Plan and schedule in one unified model.',
      subtitle: 'Turn forecasts and orders into plans your capacity can actually support.',
      bullets: [
        'Turn volatile forecasts and firm orders into plans your actual factory capacity can support without fiction.',
        'Spot bottlenecks days, weeks, or months ahead with combined rough-cut and detailed finite capacity analysis.',
        'Schedule every machine, tooling fixture, certified crew, and resource down to the individual operation, across one plant or many.'
      ],
      icon: 'account_tree',
      badge: 'UNIFIED MODEL'
    },
    {
      num: '02',
      title: 'Absorb change without restarting the plant.',
      subtitle: 'Replan around shop-floor disruptions without upending what the floor is running.',
      bullets: [
        'Dynamic sub-second re-anchoring when line breakdowns, rush jobs, or raw material delays strike.',
        'Test multi-variable what-if scenarios against real plant KPIs without touching the live production dispatch.',
        'Give enterprise customers accurate, reliable delivery dates that come directly from the mathematically verified plan.'
      ],
      icon: 'sync_alt',
      badge: 'DYNAMIC RESILIENCE'
    },
    {
      num: '03',
      title: 'Visibility your master planners will actually use.',
      subtitle: 'See demand, real capacity, and projected inventory in one cohesive view.',
      bullets: [
        'Unify demand forecasts, machine availability, and projected buffer inventory in one interactive interface.',
        'Drill directly into late orders, starved work centers, or holding limits to identify the root cause in seconds.',
        'Configure your own operational KPIs (OEE, setup hours, makespan) and stream them live to Microsoft Power BI and MES.'
      ],
      icon: 'visibility',
      badge: 'ACTIONABLE TELEMETRY'
    },
    {
      num: '04',
      title: 'Built to deploy rapidly, and built to stay current.',
      subtitle: 'Configure operational rules yourself with no-code ease and zero custom technical debt.',
      bullets: [
        'Configure changes yourself through intuitive rulesets—no code and no costly custom developer cycles.',
        'Deploy in any major cloud VPC or on-premises in air-gapped sovereign clusters, scaling compute only while solver runs.',
        'Connect seamlessly to SAP S/4HANA, Oracle NetSuite, Microsoft Dynamics 365, Plex MES, and the rest of your industrial stack.'
      ],
      icon: 'tune',
      badge: 'NO-CODE & AIR-GAPPED'
    }
  ];

  const coreDifferentiators = [
    {
      title: 'Capacity & Attribute-Based',
      icon: 'dataset',
      desc: 'Model machine capacity, raw material availability, labor certifications, tooling fixtures, and shop-floor business rules together in one model, in one mathematical run.'
    },
    {
      title: 'Down to the Most Minute Relevant Detail',
      icon: 'precision_manufacturing',
      desc: 'Capture every constraint that decides whether a plan is buildable on the factory floor—cleanout matrices, operator pool contention, and holding tank decay—and filter out the noise.'
    },
    {
      title: 'Ready for Any Level of Mix & Variety',
      icon: 'alt_route',
      desc: 'Handle everything from high-speed FMCG packaging to fully engineered-to-order (ETO) custom machinery, where every single order is unique, with no stable demand forecast required.'
    },
    {
      title: 'Maximum Memory in Plans & Schedules',
      icon: 'history_toggle_off',
      desc: 'Keep as much of the prior plan as possible when plant conditions change, so a reschedule does not wreak havoc on the floor or destabilize downstream supplier commitments.'
    }
  ];

  const agentVerificationSteps = [
    { cmd: 'mes.lot.getStatus(4471)', target: 'MES', status: 'Passed', detail: 'Real-time lot status check & machine state' },
    { cmd: 'mes.hold.list(4471)', target: 'MES', status: 'Passed', detail: 'Inspect hold reason & cleanroom qualification' },
    { cmd: 'aps.schedule.simulate(Line-04)', target: 'APS', status: 'Simulated', detail: 'Evaluate CP-SAT warm-start alternative dispatch' },
    { cmd: 'siop.commit.check(88-102)', target: 'SIOP', status: 'Verified', detail: 'Customer delivery commitment guaranteed' },
  ];

  const caseStudies = [
    {
      tag: 'OPERATIONAL EXCELLENCE',
      title: '8 Steps to Improve Plant Performance',
      desc: 'How advanced finite-capacity scheduling eliminates hidden changeover waste and reclaims up to 14.8% net throughput without CapEx expansion.',
      metric: '+14.8% Throughput',
      link: '/case-studies'
    },
    {
      tag: 'EXECUTIVE BENCHMARK',
      title: 'Essential KPIs for World-Class Factory Performance',
      desc: 'The top 6 operational indicators leading plant managers monitor: OEE recovery, sequence adherence, setup reduction, and inventory velocity.',
      metric: '34% Less Changeover',
      link: '/case-studies'
    },
    {
      tag: 'DIGITAL TRANSFORMATION',
      title: 'Why Are You Still Using Spreadsheets for Production Scheduling?',
      desc: 'The true financial cost of schedule fiction—spreadsheet fragility, planner burnout, and unconstrained production queues.',
      metric: '14.5 hrs/wk Saved',
      link: '/roi-calculator'
    },
    {
      tag: 'MULTI-STAGE SYNCHRONIZATION',
      title: 'Multi-Zone Sequencing Across Multi-Tier Routing Chains',
      desc: 'Eliminating buffer starvation between upstream batch synthesis vessels and downstream high-speed packaging lines in complex discrete plants.',
      metric: '0 Batch Dumps',
      link: '/case-studies'
    }
  ];

  return (
    <div className="min-h-screen bg-surface text-on-surface flex flex-col selection:bg-primary/20 transition-colors">
      <CadenceHeader onOpenDemoModal={() => setIsDemoModalOpen(true)} />

      <main className="w-full pt-16 bg-surface flex-1">
        {/* SECTION 1: HERO VIEWPORT - Eyelit APS Style */}
        <section className="relative w-full overflow-hidden bg-surface py-16 sm:py-20 lg:py-28 border-b border-outline-variant/30">
          <div className="max-w-7xl mx-auto px-margin">
            <FadeIn>
              <div className="flex flex-col gap-6 max-w-4xl">
                {/* Eyebrow & Badges */}
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="font-eyebrow text-eyebrow uppercase px-3 py-1 rounded bg-primary/10 text-primary font-semibold tracking-wider">
                    ADVANCED PLANNING &amp; SCHEDULING (APS)
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary inline-block"></span>
                  <span className="font-tabular-mono-dense text-tabular-mono-dense text-on-surface-variant">
                    ENTERPRISE APS PLATFORM
                  </span>
                </div>

                {/* Main Headline from Eyelit APS */}
                <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl text-on-surface tracking-tight leading-[1.08] font-bold">
                  Buildable plans. Schedules that hold when the plant changes.
                </h1>

                {/* Subtitle from Eyelit APS */}
                <p className="font-title-md text-title-md text-on-surface-variant leading-relaxed max-w-3xl">
                  Advanced Planning and Scheduling built for the level of detail your plant actually runs on. One integrated system, from the capacity plan months out to the schedule your floor runs today.
                </p>

                {/* CTA Row */}
                <div className="flex flex-wrap items-center gap-space-md pt-2">
                  <button
                    type="button"
                    onClick={() => setIsDemoModalOpen(true)}
                    className="h-11 px-6 bg-primary hover:bg-primary-container text-white font-medium text-sm rounded-xl flex items-center justify-center transition-all shadow-md hover:shadow-lg active:scale-95"
                  >
                    Request a Demo
                  </button>
                  <a
                    href="#how-it-works-eyelit"
                    className="h-11 px-5 bg-surface-container hover:bg-surface-container-high text-on-surface font-medium text-sm rounded-xl flex items-center gap-2 transition-all border border-outline-variant/40"
                  >
                    <span>See How It Works</span>
                    <span className="material-symbols-outlined text-[18px]">arrow_downward</span>
                  </a>
                  <Link
                    href="/roi-calculator"
                    className="h-11 px-5 bg-surface-container hover:bg-surface-container-high text-on-surface font-medium text-sm rounded-xl flex items-center gap-2 transition-all border border-outline-variant/40"
                  >
                    <span>Calculate Plant ROI</span>
                  </Link>
                </div>

                {/* Integrated Suite Strip: MES • APS • SIOP */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 mt-4 border-t border-outline-variant/30">
                  <div className="p-3 bg-surface-container-low rounded-xl border border-outline-variant/40 flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
                    <div>
                      <div className="text-[11px] font-mono text-on-surface-variant uppercase">SIOP</div>
                      <div className="text-xs font-semibold text-on-surface">Demand &amp; Supply Align</div>
                    </div>
                  </div>
                  <div className="p-3 bg-surface-container-low rounded-xl border border-primary/40 ring-1 ring-primary/20 flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-primary"></span>
                    <div>
                      <div className="text-[11px] font-mono text-primary uppercase font-bold">APS CORE</div>
                      <div className="text-xs font-semibold text-on-surface">Finite Capacity Solve</div>
                    </div>
                  </div>
                  <div className="p-3 bg-surface-container-low rounded-xl border border-outline-variant/40 flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-secondary"></span>
                    <div>
                      <div className="text-[11px] font-mono text-on-surface-variant uppercase">MES</div>
                      <div className="text-xs font-semibold text-on-surface">Shop-Floor Execution</div>
                    </div>
                  </div>
                  <div className="p-3 bg-surface-container-low rounded-xl border border-outline-variant/40 flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                    <div>
                      <div className="text-[11px] font-mono text-on-surface-variant uppercase">INDUSTRIAL AI</div>
                      <div className="text-xs font-semibold text-on-surface">Autonomous Agent</div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* SECTION 2: THE DAILY PROBLEM CALLOUT */}
        <section className="w-full py-16 sm:py-20 bg-surface-container-low border-b border-outline-variant/30">
          <div className="max-w-7xl mx-auto px-margin flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="max-w-2xl flex flex-col gap-3">
              <span className="font-eyebrow text-eyebrow text-error uppercase font-semibold">
                THE SPREADSHEET BOTTLENECK
              </span>
              <h2 className="font-display font-bold text-2xl sm:text-4xl text-on-surface tracking-tight">
                Every day, someone on your team rebuilds the schedule by hand.
              </h2>
              <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed">
                Static spreadsheets treat continuous production like decoupled calendar cells. As soon as a machine overheats, an operator calls in sick, or a clean-down runs over, the entire week’s sequence collapses. Planners spend hours firefighting instead of optimizing.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 shrink-0 w-full sm:w-auto">
              <div className="p-4 bg-surface-container-lowest rounded-xl border border-outline-variant/40 text-center">
                <div className="font-display font-bold text-2xl text-primary">Cloud-Native</div>
                <div className="text-[11px] text-on-surface-variant mt-0.5">Scale compute on-demand</div>
              </div>
              <div className="p-4 bg-surface-container-lowest rounded-xl border border-outline-variant/40 text-center">
                <div className="font-display font-bold text-2xl text-secondary">No / Low Code</div>
                <div className="text-[11px] text-on-surface-variant mt-0.5">Configurable rulesets</div>
              </div>
              <div className="p-4 bg-surface-container-lowest rounded-xl border border-outline-variant/40 text-center">
                <div className="font-display font-bold text-2xl text-on-surface">Future-Safe</div>
                <div className="text-[11px] text-on-surface-variant mt-0.5">Air-gapped &amp; SOC 2</div>
              </div>
              <div className="p-4 bg-surface-container-lowest rounded-xl border border-outline-variant/40 text-center">
                <div className="font-display font-bold text-2xl text-primary">Full Suite</div>
                <div className="text-[11px] text-on-surface-variant mt-0.5">SIOP + APS + MES</div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: 4-STAGE CORE WORKFLOW (Eyelit 01-04 Pillars) */}
        <section id="how-it-works-eyelit" className="w-full py-20 lg:py-28 bg-surface border-b border-outline-variant/30">
          <div className="max-w-7xl mx-auto px-margin flex flex-col gap-16">
            <div className="max-w-3xl flex flex-col gap-3">
              <span className="font-eyebrow text-eyebrow text-primary uppercase font-semibold">
                END-TO-END CAPABILITIES
              </span>
              <h2 className="font-display font-bold text-2xl sm:text-4xl text-on-surface tracking-tight">
                Our APS keeps your schedule buildable when the plant changes.
              </h2>
              <p className="text-base text-on-surface-variant leading-relaxed">
                One system, from the rough-cut capacity plan months out to the shift schedule your floor runs today.
              </p>
            </div>

            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {pillars.map((p, idx) => (
                <div
                  key={idx}
                  className="p-8 rounded-2xl bg-surface-container-lowest border border-outline-variant/50 shadow-sm flex flex-col justify-between gap-6 hover:shadow-md hover:border-primary/40 transition-all duration-300"
                >
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-2xl font-bold text-primary">{p.num}</span>
                        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                          <span className="material-symbols-outlined text-[20px]">{p.icon}</span>
                        </div>
                      </div>
                      <span className="font-mono text-[10px] uppercase tracking-wider px-2.5 py-1 rounded bg-surface border border-outline-variant/40 text-on-surface-variant font-medium">
                        {p.badge}
                      </span>
                    </div>

                    <div>
                      <h3 className="font-display font-bold text-xl text-on-surface">
                        {p.title}
                      </h3>
                      <p className="text-sm font-medium text-primary mt-1">
                        {p.subtitle}
                      </p>
                    </div>

                    <div className="space-y-2.5 pt-2 border-t border-outline-variant/30">
                      {p.bullets.map((b, bIdx) => (
                        <div key={bIdx} className="flex items-start gap-2.5 text-xs text-on-surface-variant leading-relaxed">
                          <span className="material-symbols-outlined text-secondary text-[16px] shrink-0 mt-0.5">check_circle</span>
                          <span>{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-outline-variant/30 flex items-center justify-between">
                    <button
                      onClick={() => setIsDemoModalOpen(true)}
                      className="text-xs font-semibold text-primary hover:underline flex items-center gap-1"
                    >
                      <span>Explore this capability</span>
                      <span className="material-symbols-outlined text-[15px]">arrow_forward</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4: AGENT CONNECTIVE TISSUE & REAL-TIME EXECUTION (Eyelit Agent EyeQ Style) */}
        <section className="w-full py-20 bg-surface-container-low border-b border-outline-variant/30">
          <div className="max-w-7xl mx-auto px-margin flex flex-col gap-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left Column: Autonomous Agent Explanation */}
              <div className="lg:col-span-6 flex flex-col gap-6">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-secondary animate-pulse"></span>
                  <span className="font-eyebrow text-eyebrow uppercase text-primary font-semibold">
                    AUTONOMOUS INDUSTRIAL REASONING
                  </span>
                </div>

                <h2 className="font-display font-bold text-2xl sm:text-4xl text-on-surface tracking-tight">
                  Industrial AI Agent as the connective tissue.
                </h2>

                <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed">
                  Reduce the manual effort behind interpreting and adjusting a complex schedule, so planners spend more time acting on it. Paired with your MES, the plan you build here stays honest no matter what the floor reports back.
                </p>

                <div className="space-y-3 pt-2">
                  <div className="p-4 bg-surface-container-lowest rounded-xl border border-outline-variant/40 flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary text-[20px] shrink-0 mt-0.5">psychology</span>
                    <div>
                      <div className="text-xs font-semibold text-on-surface">You act on the agent’s suggestions. It drafts, you decide.</div>
                      <div className="text-xs text-on-surface-variant mt-0.5">Drafts dispositions, root-cause analyses, and schedule changes for engineer review. Surfaces relevant operational data on demand—no rigid dashboards to build.</div>
                    </div>
                  </div>

                  <div className="p-4 bg-surface-container-lowest rounded-xl border border-outline-variant/40 flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary text-[20px] shrink-0 mt-0.5">verified_user</span>
                    <div>
                      <div className="text-xs font-semibold text-on-surface">Strict Caddy Mode Human Governance</div>
                      <div className="text-xs text-on-surface-variant mt-0.5">Accelerates routine work for experienced operators and walks junior planners through unfamiliar line constraints with full audit logging.</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Simulated Live Agent Trace (Eyelit Command Trace UI) */}
              <div className="lg:col-span-6">
                <div className="bg-[#0E131A] text-[#F0F4F8] rounded-2xl p-6 shadow-xl border border-outline-variant/30 flex flex-col gap-5 font-mono text-xs">
                  <div className="flex items-center justify-between border-b border-[#202938] pb-3">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#3ECF8E] animate-pulse"></span>
                      <span className="text-[#9BA8B8] uppercase text-[11px]">Industrial Agent Telemetry Trace</span>
                    </div>
                    <span className="text-[10px] bg-[#161C26] px-2 py-0.5 rounded text-[#3ECF8E]">LIVE RE-ANCHOR</span>
                  </div>

                  <div className="text-[#9BA8B8] leading-relaxed">
                    Checking hold reason, then machine capacity, then customer commit window...
                  </div>

                  <div className="space-y-2.5">
                    {agentVerificationSteps.map((s, idx) => (
                      <div key={idx} className="bg-[#161C26] p-3 rounded-lg border border-[#202938] flex items-center justify-between gap-3">
                        <div className="flex items-center gap-2.5">
                          <span className="text-[#3ECF8E] font-bold">✓</span>
                          <span className="text-white font-semibold">{s.cmd}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] text-[#9BA8B8] hidden sm:inline">{s.detail}</span>
                          <span className="px-2 py-0.5 rounded bg-[#202938] text-[10px] text-[#4C8DFF] font-bold">
                            {s.target}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-2 border-t border-[#202938] text-[#9BA8B8] text-[11px] flex items-center justify-between">
                    <span>Only quality-gated runs are kept, so the agent gets more consistent over time.</span>
                    <span className="text-[#3ECF8E] font-bold">0.4s</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5: 4 CORE DIFFERENTIATORS (From Eyelit APS) */}
        <section className="w-full py-20 lg:py-28 bg-surface border-b border-outline-variant/30">
          <div className="max-w-7xl mx-auto px-margin flex flex-col gap-12">
            <div className="max-w-3xl flex flex-col gap-2">
              <span className="font-eyebrow text-eyebrow text-primary uppercase font-semibold">
                WHY IT SUCCEEDS
              </span>
              <h2 className="font-display font-bold text-2xl sm:text-4xl text-on-surface tracking-tight">
                A planning and scheduling platform for complex, multi-plant discrete manufacturers.
              </h2>
              <p className="text-sm sm:text-base text-on-surface-variant">
                It models every constraint that decides whether a plan is buildable. Then it solves them together, in one run.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {coreDifferentiators.map((diff, idx) => (
                <div
                  key={idx}
                  className="p-6 bg-surface-container-lowest rounded-2xl border border-outline-variant/50 shadow-sm flex flex-col gap-4 hover:border-primary/40 transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-[24px]">{diff.icon}</span>
                  </div>
                  <h3 className="font-display font-bold text-base text-on-surface">
                    {diff.title}
                  </h3>
                  <p className="text-xs text-on-surface-variant leading-relaxed">
                    {diff.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 6: PRACTICAL OUTCOMES & CASE STUDIES (Eyelit Resource Grid) */}
        <section className="w-full py-20 bg-surface-container-low border-b border-outline-variant/30">
          <div className="max-w-7xl mx-auto px-margin flex flex-col gap-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div className="max-w-2xl flex flex-col gap-2">
                <span className="font-eyebrow text-eyebrow text-primary uppercase font-semibold">
                  PROVEN OPERATIONAL OUTCOMES
                </span>
                <h2 className="font-display font-bold text-2xl sm:text-4xl text-on-surface tracking-tight">
                  Case studies and practical outcomes from complex manufacturing floors.
                </h2>
              </div>
              <Link
                href="/case-studies"
                className="text-xs font-semibold text-primary hover:underline flex items-center gap-1 shrink-0"
              >
                <span>View all case studies</span>
                <span className="material-symbols-outlined text-[15px]">arrow_forward</span>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {caseStudies.map((cs, idx) => (
                <div
                  key={idx}
                  className="p-6 bg-surface-container-lowest rounded-2xl border border-outline-variant/50 shadow-sm flex flex-col justify-between gap-4 hover:shadow-md transition-all"
                >
                  <div className="flex flex-col gap-2.5">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-primary font-bold">
                      {cs.tag}
                    </span>
                    <h3 className="font-display font-bold text-base text-on-surface leading-snug">
                      {cs.title}
                    </h3>
                    <p className="text-xs text-on-surface-variant leading-relaxed">
                      {cs.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-outline-variant/40 flex items-center justify-between text-xs">
                    <span className="font-mono font-bold text-secondary">{cs.metric}</span>
                    <Link href={cs.link} className="font-semibold text-primary hover:underline">
                      Read more →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 7: SKEPTICISM CHALLENGE BILLBOARD (From Eyelit APS) */}
        <section className="w-full py-20 lg:py-24 bg-surface text-center">
          <div className="max-w-4xl mx-auto px-margin flex flex-col items-center gap-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary font-mono text-xs uppercase tracking-wider font-semibold">
              <span className="material-symbols-outlined text-[16px]">verified</span>
              <span>NO RISK EVALUATION · FACTORY DATA PROOF</span>
            </div>

            <h2 className="font-display font-bold text-3xl sm:text-5xl text-on-surface tracking-tight">
              Bring us the line nobody can schedule.
            </h2>
            <p className="text-base sm:text-lg text-primary font-medium">
              We’ll show you a plan you can build.
            </p>

            <div className="p-6 sm:p-8 bg-surface-container-lowest rounded-2xl border border-outline-variant/50 text-left max-w-2xl my-2">
              <h3 className="font-display font-bold text-lg text-on-surface mb-2">
                We understand why you’re skeptical.
              </h3>
              <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                You’ve heard that this would be fixed before, and it didn’t hold up on the shop floor. This category has a long history of promising more than it delivers, and it can take a year to find out you chose wrong. The proof that matters most is a plant that looks like yours, and we will walk you through a live CP-SAT solve on your actual line data during the technical evaluation.
              </p>
            </div>

            <div className="flex items-center gap-4 flex-wrap justify-center pt-2">
              <button
                type="button"
                onClick={() => setIsDemoModalOpen(true)}
                className="h-11 px-6 bg-primary hover:bg-primary-container text-white font-medium text-sm rounded-xl flex items-center justify-center transition-all shadow-md active:scale-95"
              >
                Request a Demo
              </button>
              <Link
                href="/contact"
                className="h-11 px-6 bg-surface-container hover:bg-surface-container-high text-on-surface font-medium text-sm rounded-xl flex items-center justify-center transition-all border border-outline-variant/40 active:scale-95"
              >
                Contact Engineering Desk
              </Link>
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
