'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import CadenceHeader from '@/components/CadenceHeader';
import CadenceFooter from '@/components/CadenceFooter';
import { FadeIn, FadeInStagger } from '@/components/Motion';


export default function Page() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-surface text-on-surface flex flex-col selection:bg-primary/20 transition-colors">
      <CadenceHeader onOpenDemoModal={() => setIsDemoModalOpen(true)} />
      
      <main className="w-full pt-16 bg-surface flex-1">
        <div className="flex flex-col w-full">
{/* Top Progress & Technical Navigation Context Strip */}
<section className="w-full bg-surface border-b border-outline-variant py-space-sm">
<div className="max-w-7xl mx-auto px-margin flex flex-wrap items-center justify-between gap-space-md font-tabular-mono-dense text-tabular-mono-dense text-on-surface-variant">
<div className="flex items-center gap-space-sm">
<span className="inline-flex items-center justify-center px-1.5 py-0.5 rounded bg-surface-container font-eyebrow text-eyebrow uppercase text-primary font-medium tracking-wide">STAGE 01</span>
<span className="text-on-surface font-medium">DISPATCH PILOT INTAKE</span>
<span className="text-outline">/</span>
<span>REVISION 4.19</span>
<span className="text-outline">/</span>
<span className="text-secondary inline-flex items-center gap-1 font-medium">
<span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> SOLVER QUEUE ACTIVE
        </span>
</div>
<div className="flex items-center gap-space-lg">
<span className="hidden md:inline-flex items-center gap-1 text-on-surface-variant">
<span className="material-symbols-outlined text-[14px]">lock</span> AES-256 AIR-GAPPED WORKBOOK INGESTION
        </span>
<span className="text-outline">|</span>
<span className="text-on-surface font-medium">CP-SAT ENGINE V9.8</span>
</div>
</div>
</section>
{/* Main Hero & Intake Section */}
<section className="w-full bg-surface pt-space-xl pb-16">
<div className="max-w-7xl mx-auto px-margin">
{/* Section Header */}
<div className="max-w-4xl mb-12">
<div className="font-eyebrow text-eyebrow text-outline uppercase tracking-[0.08em] mb-space-xs flex items-center gap-2">
<span className="w-2 h-2 rounded-xs bg-primary inline-block"></span>
          PILOT PROVISIONING &amp; WORKBOOK INGESTION
        </div>
<h1 className="font-headline-lg text-headline-lg text-on-surface font-semibold tracking-tight text-balance mb-space-md">
          Schedule a 30-minute technical evaluation on your plant data.
        </h1>
<p className="font-body-default text-body-default text-on-surface-variant max-w-3xl leading-relaxed">
          Meet directly with an operations research engineer. Bring your changeover logs, routing trees, and shift calendars — we will configure a live CP-SAT model of your primary bottleneck line in real time.
        </p>
</div>
{/* Two-Column Grid */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
{/* Left Column: Enterprise Intake Form (7 Cols) */}
<div className="lg:col-span-7 bg-surface-container-lowest border border-outline-variant rounded-xl p-space-xl shadow-sm">
<div className="flex items-center justify-between pb-space-md border-b border-outline-variant mb-space-lg">
<div className="flex items-center gap-space-sm">
<span className="material-symbols-outlined text-primary text-[20px]">terminal</span>
<span className="font-title-md text-title-md font-semibold text-on-surface">Plant Topology &amp; Line Constraint Intake</span>
</div>
<span className="font-tabular-mono-dense text-tabular-mono-dense text-outline">FORM REF: CAD-EVAL-2025</span>
</div>
<form className="flex flex-col gap-space-lg" id="evaluation-intake-form" onSubmit={(e) => e.preventDefault()}>
{/* Name (First & Last) */}
<div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
<div className="flex flex-col gap-1.5">
<label className="font-body-dense text-body-dense font-medium text-on-surface flex items-center justify-between" htmlFor="first-name">
<span>First Name</span>
<span className="font-tabular-mono-dense text-tabular-mono-dense text-outline">REQ</span>
</label>
<input className="h-10 px-space-md rounded bg-surface border border-outline-variant focus:border-primary focus:outline-none text-body-dense text-on-surface transition-all placeholder:text-outline font-body-dense" id="first-name" name="first_name" placeholder="e.g. Marcus" required type="text"/>
</div>
<div className="flex flex-col gap-1.5">
<label className="font-body-dense text-body-dense font-medium text-on-surface flex items-center justify-between" htmlFor="last-name">
<span>Last Name</span>
<span className="font-tabular-mono-dense text-tabular-mono-dense text-outline">REQ</span>
</label>
<input className="h-10 px-space-md rounded bg-surface border border-outline-variant focus:border-primary focus:outline-none text-body-dense text-on-surface transition-all placeholder:text-outline font-body-dense" id="last-name" name="last_name" placeholder="e.g. Vance" required type="text"/>
</div>
</div>
{/* Work Email with Live Indicator */}
<div className="flex flex-col gap-1.5">
<div className="flex items-center justify-between">
<label className="font-body-dense text-body-dense font-medium text-on-surface" htmlFor="work-email">Corporate Manufacturing Email</label>
<span className="font-tabular-mono-dense text-tabular-mono-dense text-secondary flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">verified</span> Work Domain Preferred
                </span>
</div>
<div className="relative flex items-center">
<input className="w-full h-10 pl-space-md pr-24 rounded bg-surface border border-outline-variant focus:border-primary focus:outline-none text-body-dense text-on-surface transition-all placeholder:text-outline font-body-dense" id="work-email" name="work_email" placeholder="name@company.com" required type="email"/>
<span className="absolute right-3 font-eyebrow text-eyebrow text-outline uppercase tracking-wider">TLS 1.3</span>
</div>
</div>
{/* Company Name & HQ */}
<div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
<div className="flex flex-col gap-1.5">
<label className="font-body-dense text-body-dense font-medium text-on-surface" htmlFor="company-name">Operating Company Name</label>
<input className="h-10 px-space-md rounded bg-surface border border-outline-variant focus:border-primary focus:outline-none text-body-dense text-on-surface transition-all placeholder:text-outline font-body-dense" id="company-name" name="company_name" placeholder="e.g. Apex Industrial CPG" required type="text"/>
</div>
<div className="flex flex-col gap-1.5">
<label className="font-body-dense text-body-dense font-medium text-on-surface" htmlFor="headquarters">Headquarters / Plant Location</label>
<input className="h-10 px-space-md rounded bg-surface border border-outline-variant focus:border-primary focus:outline-none text-body-dense text-on-surface transition-all placeholder:text-outline font-body-dense" id="headquarters" name="headquarters" placeholder="e.g. Chicago, IL / Rotterdam, NL" type="text"/>
</div>
</div>
{/* Facility Count Segmented Selector */}
<div className="flex flex-col gap-2">
<label className="font-body-dense text-body-dense font-medium text-on-surface flex items-center justify-between">
<span>Total Manufacturing Facilities in Scope</span>
<span className="font-tabular-mono-dense text-tabular-mono-dense text-outline">PILOT HORIZON</span>
</label>
<div className="grid grid-cols-2 sm:grid-cols-4 gap-2" role="radiogroup">
<label className="flex flex-col items-center justify-center p-2.5 rounded border border-outline-variant bg-surface hover:bg-surface-container-low cursor-pointer transition-colors text-center text-on-surface has-[:checked]:border-primary has-[:checked]:bg-surface-container-low has-[:checked]:text-primary">
<input defaultChecked className="sr-only" name="facility_count" type="radio" value="1"/>
<span className="font-title-md text-title-md font-semibold mb-0.5">1 Site</span>
<span className="font-tabular-mono-dense text-[10px] text-outline uppercase">Bottleneck Focus</span>
</label>
<label className="flex flex-col items-center justify-center p-2.5 rounded border border-outline-variant bg-surface hover:bg-surface-container-low cursor-pointer transition-colors text-center text-on-surface has-[:checked]:border-primary has-[:checked]:bg-surface-container-low has-[:checked]:text-primary">
<input className="sr-only" name="facility_count" type="radio" value="2-5"/>
<span className="font-title-md text-title-md font-semibold mb-0.5">2–5 Sites</span>
<span className="font-tabular-mono-dense text-[10px] text-outline uppercase">Regional Multi</span>
</label>
<label className="flex flex-col items-center justify-center p-2.5 rounded border border-outline-variant bg-surface hover:bg-surface-container-low cursor-pointer transition-colors text-center text-on-surface has-[:checked]:border-primary has-[:checked]:bg-surface-container-low has-[:checked]:text-primary">
<input className="sr-only" name="facility_count" type="radio" value="6-20"/>
<span className="font-title-md text-title-md font-semibold mb-0.5">6–20 Sites</span>
<span className="font-tabular-mono-dense text-[10px] text-outline uppercase">Enterprise Fleet</span>
</label>
<label className="flex flex-col items-center justify-center p-2.5 rounded border border-outline-variant bg-surface hover:bg-surface-container-low cursor-pointer transition-colors text-center text-on-surface has-[:checked]:border-primary has-[:checked]:bg-surface-container-low has-[:checked]:text-primary">
<input className="sr-only" name="facility_count" type="radio" value="20+"/>
<span className="font-title-md text-title-md font-semibold mb-0.5">20+ Sites</span>
<span className="font-tabular-mono-dense text-[10px] text-outline uppercase">Global Fleet</span>
</label>
</div>
</div>
{/* Industry & Topology Dropdown */}
<div className="flex flex-col gap-1.5">
<label className="font-body-dense text-body-dense font-medium text-on-surface" htmlFor="industry-select">Primary Industry &amp; Line Topology</label>
<div className="relative">
<select className="w-full h-10 px-space-md rounded bg-surface border border-outline-variant focus:border-primary focus:outline-none text-body-dense text-on-surface transition-all appearance-none cursor-pointer font-body-dense" id="industry-select" name="industry" required>
<option disabled  value="">Select operating manufacturing vertical...</option>
<option value="fnb">Food &amp; Beverage / Beverage Bottling &amp; Canning</option>
<option value="pharma">Pharmaceutical Formulation, Cleanroom &amp; Packaging</option>
<option value="cpg">Consumer Packaged Goods (High-Speed FMCG Lines)</option>
<option value="converting">Precision Converting, Slitting, Film &amp; Extrusion</option>
<option value="automotive">Automotive Tier 1 Assembly &amp; Robotic Workcells</option>
<option value="chemicals">Chemical, Continuous Polymerization &amp; Batch Reactor</option>
<option value="other">Discrete Industrial Machinery / Other Precision Fabrication</option>
</select>
<span className="material-symbols-outlined absolute right-3 top-2.5 text-[20px] pointer-events-none text-outline">expand_more</span>
</div>
</div>
{/* Primary Operational Bottlenecks (Multi-Select Chips) */}
<div className="flex flex-col gap-2">
<div className="flex items-center justify-between">
<label className="font-body-dense text-body-dense font-medium text-on-surface">Select Primary Operational Bottlenecks</label>
<span className="font-tabular-mono-dense text-tabular-mono-dense text-outline">MULTI-SELECT</span>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-body-dense">
<label className="flex items-start gap-2.5 p-2.5 rounded border border-outline-variant bg-surface hover:bg-surface-container-low cursor-pointer transition-colors has-[:checked]:border-primary has-[:checked]:bg-surface-container-low">
<input defaultChecked className="mt-0.5 rounded-xs text-primary focus:ring-0 border-outline" name="bottlenecks" type="checkbox" value="cip_washdowns"/>
<div className="flex flex-col">
<span className="font-medium text-on-surface leading-snug">Sequence-dependent CIP washdowns</span>
<span className="font-tabular-mono-dense text-[11px] text-on-surface-variant">Allergen gating &amp; color flushes</span>
</div>
</label>
<label className="flex items-start gap-2.5 p-2.5 rounded border border-outline-variant bg-surface hover:bg-surface-container-low cursor-pointer transition-colors has-[:checked]:border-primary has-[:checked]:bg-surface-container-low">
<input className="mt-0.5 rounded-xs text-primary focus:ring-0 border-outline" name="bottlenecks" type="checkbox" value="holding_tanks"/>
<div className="flex flex-col">
<span className="font-medium text-on-surface leading-snug">Intermediate holding tank ceilings</span>
<span className="font-tabular-mono-dense text-[11px] text-on-surface-variant">Decay windows &amp; buffer limits</span>
</div>
</label>
<label className="flex items-start gap-2.5 p-2.5 rounded border border-outline-variant bg-surface hover:bg-surface-container-low cursor-pointer transition-colors has-[:checked]:border-primary has-[:checked]:bg-surface-container-low">
<input defaultChecked className="mt-0.5 rounded-xs text-primary focus:ring-0 border-outline" name="bottlenecks" type="checkbox" value="line_coupling"/>
<div className="flex flex-col">
<span className="font-medium text-on-surface leading-snug">Multi-stage line coupling &amp; sync</span>
<span className="font-tabular-mono-dense text-[11px] text-on-surface-variant">Filler-to-cartoner interlocks</span>
</div>
</label>
<label className="flex items-start gap-2.5 p-2.5 rounded border border-outline-variant bg-surface hover:bg-surface-container-low cursor-pointer transition-colors has-[:checked]:border-primary has-[:checked]:bg-surface-container-low">
<input className="mt-0.5 rounded-xs text-primary focus:ring-0 border-outline" name="bottlenecks" type="checkbox" value="tooling_contention"/>
<div className="flex flex-col">
<span className="font-medium text-on-surface leading-snug">Operator &amp; die tooling contention</span>
<span className="font-tabular-mono-dense text-[11px] text-on-surface-variant">Limited certified changeover crews</span>
</div>
</label>
<label className="sm:col-span-2 flex items-start gap-2.5 p-2.5 rounded border border-outline-variant bg-surface hover:bg-surface-container-low cursor-pointer transition-colors has-[:checked]:border-primary has-[:checked]:bg-surface-container-low">
<input className="mt-0.5 rounded-xs text-primary focus:ring-0 border-outline" name="bottlenecks" type="checkbox" value="micro_stoppages"/>
<div className="flex flex-col">
<span className="font-medium text-on-surface leading-snug">Frequent unscheduled micro-stoppages</span>
<span className="font-tabular-mono-dense text-[11px] text-on-surface-variant">Cascading shift dispatch drift requiring dynamic rescheduling</span>
</div>
</label>
</div>
</div>
{/* Primary ERP / MES Infrastructure */}
<div className="flex flex-col gap-1.5">
<label className="font-body-dense text-body-dense font-medium text-on-surface" htmlFor="erp-system">Existing ERP / MES Infrastructure</label>
<div className="relative">
<select className="w-full h-10 px-space-md rounded bg-surface border border-outline-variant focus:border-primary focus:outline-none text-body-dense text-on-surface transition-all appearance-none cursor-pointer font-body-dense" id="erp-system" name="erp_system" required>
<option disabled  value="">Select system of record...</option>
<option value="sap_s4">SAP S/4HANA (PP/DS or standard PP)</option>
<option value="sap_ecc">SAP ECC 6.0</option>
<option value="netsuite">Oracle NetSuite / JD Edwards</option>
<option value="dynamics">Microsoft Dynamics 365 Supply Chain</option>
<option value="plex">Plex Systems MES / Rockwell</option>
<option value="spreadsheets">Legacy Excel / Custom Macro Workbooks</option>
<option value="custom_sql">Internal Postgres / SQL Server MES Bridge</option>
</select>
<span className="material-symbols-outlined absolute right-3 top-2.5 text-[20px] pointer-events-none text-outline">expand_more</span>
</div>
</div>
{/* Optional Facility Notes & Shift Constraints */}
<div className="flex flex-col gap-1.5">
<div className="flex items-center justify-between">
<label className="font-body-dense text-body-dense font-medium text-on-surface" htmlFor="shift-notes">Bottleneck Line Notes &amp; Shift Boundary Constraints</label>
<span className="font-tabular-mono-dense text-tabular-mono-dense text-outline">OPTIONAL</span>
</div>
<textarea className="w-full p-space-md rounded bg-surface border border-outline-variant focus:border-primary focus:outline-none text-body-dense text-on-surface transition-all placeholder:text-outline font-body-dense resize-y" id="shift-notes" name="notes" placeholder="e.g. 3 shifts/day, 42 active SKUs on Line 2, allergen washdown requires 4.5h sanitization cycle, mold swaps limited to Shift 1 technician availability..." rows={3}></textarea>
</div>
{/* File Upload Dropzone for Sample Workbook */}
<div className="flex flex-col gap-1.5">
<label className="font-body-dense text-body-dense font-medium text-on-surface flex items-center justify-between">
<span>Attach Sample Workbook or Routing Export</span>
<span className="font-tabular-mono-dense text-tabular-mono-dense text-secondary">ENCRYPTED AT REST</span>
</label>
<div className="border border-dashed border-outline-variant rounded-lg p-space-md bg-surface flex items-center justify-between hover:bg-surface-container-low transition-colors cursor-pointer">
<div className="flex items-center gap-space-md">
<div className="w-10 h-10 rounded bg-surface-container flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[20px]">upload_file</span>
</div>
<div className="flex flex-col">
<span className="font-body-dense text-body-dense font-medium text-on-surface">Drag &amp; drop .xlsx, .csv, or SAP export</span>
<span className="font-tabular-mono-dense text-tabular-mono-dense text-outline">Sanitized BOMs or mock routings accepted (max 45MB)</span>
</div>
</div>
<button className="px-space-md py-1.5 rounded border border-outline-variant bg-surface-container-lowest hover:bg-surface-container font-tabular-mono-dense text-tabular-mono-dense text-on-surface transition-colors" type="button">
                  Browse Files
                </button>
</div>
</div>
{/* Submission Action */}
<div className="pt-space-xs flex flex-col gap-3">
<button className="w-full h-11 bg-primary hover:bg-on-primary-fixed-variant text-on-primary rounded font-body-dense text-body-dense font-medium flex items-center justify-center gap-space-sm transition-all shadow-sm" type="submit">
<span>Request Technical Evaluation &amp; Solver Pilot</span>
<span className="material-symbols-outlined text-[18px]">arrow_forward</span>
</button>
<div className="flex items-center justify-center gap-2 text-outline font-tabular-mono-dense text-tabular-mono-dense text-center">
<span className="material-symbols-outlined text-[14px]">verified_user</span>
<span>Strict mutual NDA executed automatically upon scheduling. Zero lock-in. No credit card required.</span>
</div>
</div>
{/* Success Banner (Hidden by default) */}
<div className="hidden p-space-md rounded bg-secondary-container text-on-secondary-fixed flex items-start gap-space-sm" id="success-notification">
<span className="material-symbols-outlined text-secondary text-[20px] shrink-0 mt-0.5">check_circle</span>
<div className="flex flex-col">
<span className="font-title-md text-title-md font-semibold">Evaluation Request Logged to Queue</span>
<span className="font-body-dense text-body-dense mt-0.5">An Operations Research Engineer will review your line topology and send a calendar invitation with a dedicated sandbox container within 4 business hours.</span>
</div>
</div>
</form>
</div>
{/* Right Column: Pipeline Architecture & Security Safeguards (5 Cols) */}
<div className="lg:col-span-5 flex flex-col gap-space-lg">
{/* What Happens Next Card */}
<div className="bg-surface-container-low border border-outline-variant rounded-xl p-space-xl shadow-sm flex flex-col">
<div className="flex items-center justify-between pb-space-sm border-b border-outline-variant mb-space-lg">
<h2 className="font-title-lg text-title-lg font-semibold text-on-surface">What happens next</h2>
<span className="font-eyebrow text-eyebrow uppercase text-primary font-medium tracking-wider">30-MIN PROTOCOL</span>
</div>
{/* Chronological Steps */}
<div className="flex flex-col gap-space-lg relative">
{/* Timeline vertical hairline connecting items */}
<div className="absolute left-4 top-4 bottom-6 w-px bg-outline-variant -z-0"></div>
{/* Step 01 */}
<div className="relative flex items-start gap-space-md z-10">
<div className="w-8 h-8 rounded bg-surface-container-lowest border border-outline-variant flex items-center justify-center font-tabular-mono text-tabular-mono font-semibold text-primary shrink-0 shadow-xs">
                  01
                </div>
<div className="flex flex-col pt-0.5">
<h3 className="font-title-md text-title-md font-semibold text-on-surface">Pre-call data sanity check</h3>
<p className="font-body-dense text-body-dense text-on-surface-variant mt-1 leading-relaxed">
                    Upload or email your sample shift workbook, routing table, or SKU matrix (.xlsx, .csv, or SAP export). Our industrial modeling team parses asset constraints within 24 hours.
                  </p>
<div className="mt-2 inline-flex items-center gap-1.5 font-tabular-mono-dense text-tabular-mono-dense text-outline">
<span className="material-symbols-outlined text-[13px]">check</span> BOM &amp; Changeover Matrix Ingestion
                  </div>
</div>
</div>
{/* Step 02 */}
<div className="relative flex items-start gap-space-md z-10">
<div className="w-8 h-8 rounded bg-surface-container-lowest border border-outline-variant flex items-center justify-center font-tabular-mono text-tabular-mono font-semibold text-primary shrink-0 shadow-xs">
                  02
                </div>
<div className="flex flex-col pt-0.5">
<h3 className="font-title-md text-title-md font-semibold text-on-surface">30-min live solver configuration</h3>
<p className="font-body-dense text-body-dense text-on-surface-variant mt-1 leading-relaxed">
                    We walk through your live bottleneck line on an interactive Gantt canvas. We simulate a machine stoppage, trigger sequence-dependent washdowns, and re-solve in &lt;60 seconds.
                  </p>
<div className="mt-2 inline-flex items-center gap-1.5 font-tabular-mono-dense text-tabular-mono-dense text-secondary">
<span className="material-symbols-outlined text-[13px]">bolt</span> Sub-Minute MILP Re-calculation
                  </div>
</div>
</div>
{/* Step 03 */}
<div className="relative flex items-start gap-space-md z-10">
<div className="w-8 h-8 rounded bg-surface-container-lowest border border-outline-variant flex items-center justify-center font-tabular-mono text-tabular-mono font-semibold text-primary shrink-0 shadow-xs">
                  03
                </div>
<div className="flex flex-col pt-0.5">
<h3 className="font-title-md text-title-md font-semibold text-on-surface">Deterministic feasibility report</h3>
<p className="font-body-dense text-body-dense text-on-surface-variant mt-1 leading-relaxed">
                    Receive a quantified comparative scorecard: changeover loss reduction (-34% avg benchmark), throughput recovery, and capital payback timeframe.
                  </p>
<div className="mt-2 inline-flex items-center gap-1.5 font-tabular-mono-dense text-tabular-mono-dense text-outline">
<span className="material-symbols-outlined text-[13px]">summarize</span> Plant-Ready C-Suite Deck
                  </div>
</div>
</div>
</div>
</div>
{/* Enterprise Security Safeguards (Technical Box) */}
<div className="bg-surface-container rounded-xl p-space-lg border border-outline-variant flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-on-surface text-[18px]">security</span>
<span className="font-title-md text-title-md font-semibold text-on-surface">Enterprise Security Safeguards</span>
</div>
<span className="font-tabular-mono-dense text-[10px] px-1.5 py-0.5 rounded bg-surface-container-high text-on-surface-variant font-medium">COMPLIANT</span>
</div>
<p className="font-body-dense text-body-dense text-on-surface-variant leading-relaxed">
              Industrial scheduling data contains proprietary formulations, capacity bottlenecks, and margin structures. We treat client workbooks as Tier-0 cryptographic assets.
            </p>
<div className="grid grid-cols-1 gap-2 pt-1 font-tabular-mono text-tabular-mono text-on-surface">
<div className="flex items-center gap-2 p-2 rounded bg-surface-container-lowest border border-outline-variant">
<span className="material-symbols-outlined text-secondary text-[16px]">verified</span>
<span>SOC 2 Type II Certified &amp; ISO/IEC 27001</span>
</div>
<div className="flex items-center gap-2 p-2 rounded bg-surface-container-lowest border border-outline-variant">
<span className="material-symbols-outlined text-secondary text-[16px]">cloud_sync</span>
<span>Air-gapped on-prem or isolated AWS/Azure VPC</span>
</div>
<div className="flex items-center gap-2 p-2 rounded bg-surface-container-lowest border border-outline-variant">
<span className="material-symbols-outlined text-secondary text-[16px]">key</span>
<span>End-to-end AES-256 encrypted data ingestion</span>
</div>
<div className="flex items-center gap-2 p-2 rounded bg-surface-container-lowest border border-outline-variant">
<span className="material-symbols-outlined text-secondary text-[16px]">shield_person</span>
<span>Zero training on proprietary plant recipes or BOMs</span>
</div>
</div>
</div>
{/* Direct Industrial Advisory Links */}
<div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-space-md flex items-center justify-between">
<div className="flex flex-col">
<span className="font-eyebrow text-eyebrow text-outline uppercase">Industrial Operations Desk</span>
<a className="font-body-dense text-body-dense text-primary font-medium hover:underline" href="mailto:engineering@cadence-aps.com">
                engineering@cadence-aps.com
              </a>
</div>
<div className="text-right flex flex-col items-end">
<span className="font-eyebrow text-eyebrow text-outline uppercase">Direct Advisory</span>
<span className="font-tabular-mono-dense text-tabular-mono-dense text-on-surface">+1 (800) 419-CADENCE</span>
</div>
</div>
</div>
</div>
</div>
</section>
{/* Verified Plant Scale Metrics & Benchmarks (Hairline Separated) */}
<section className="w-full bg-surface-container-lowest border-y border-outline-variant py-16 sm:py-20">
<div className="max-w-7xl mx-auto px-margin">
{/* Top Metrics Shelf */}
<div className="grid grid-cols-1 sm:grid-cols-3 gap-space-lg mb-12">
<div className="flex flex-col p-space-lg rounded-xl bg-surface border border-outline-variant">
<span className="font-eyebrow text-eyebrow text-outline uppercase tracking-wider mb-1">EXECUTION BENCHMARK</span>
<div className="font-headline-lg text-headline-lg font-semibold text-on-surface tracking-tight mb-1">1,782+</div>
<div className="font-body-dense text-body-dense text-on-surface-variant">Operations &amp; changeover tasks solved per typical shift horizon</div>
<div className="mt-3 flex items-center gap-1 font-tabular-mono-dense text-tabular-mono-dense text-secondary">
<span className="material-symbols-outlined text-[14px]">trending_up</span> 100% discrete line feasibility
          </div>
</div>
<div className="flex flex-col p-space-lg rounded-xl bg-surface border border-outline-variant">
<span className="font-eyebrow text-eyebrow text-outline uppercase tracking-wider mb-1">SOLVER PERFORMANCE</span>
<div className="font-headline-lg text-headline-lg font-semibold text-primary tracking-tight mb-1">&lt;60s</div>
<div className="font-body-dense text-body-dense text-on-surface-variant">Deterministic mathematical MILP solve threshold for full-plant models</div>
<div className="mt-3 flex items-center gap-1 font-tabular-mono-dense text-tabular-mono-dense text-outline">
<span className="material-symbols-outlined text-[14px]">timer</span> Compared to 4.2h manual planning
          </div>
</div>
<div className="flex flex-col p-space-lg rounded-xl bg-surface border border-outline-variant">
<span className="font-eyebrow text-eyebrow text-outline uppercase tracking-wider mb-1">RELIABILITY RECORD</span>
<div className="font-headline-lg text-headline-lg font-semibold text-secondary tracking-tight mb-1">0</div>
<div className="font-body-dense text-body-dense text-on-surface-variant">Line stoppages originating from infeasible schedules or tank overflows</div>
<div className="mt-3 flex items-center gap-1 font-tabular-mono-dense text-tabular-mono-dense text-secondary">
<span className="material-symbols-outlined text-[14px]">verified</span> 99.98% dispatch compliance
          </div>
</div>
</div>
{/* Customer Proof Quote & Operations Engineering Context */}
<div className="bg-surface-container-low border border-outline-variant rounded-xl p-space-xl flex flex-col lg:flex-row items-start lg:items-center justify-between gap-space-xl">
<div className="max-w-3xl flex flex-col gap-space-sm">
<div className="flex items-center gap-1 text-tertiary">
<span className="material-symbols-outlined text-[18px]">format_quote</span>
<span className="font-eyebrow text-eyebrow uppercase tracking-wider text-outline">OPERATIONS BENCHMARK VERIFICATION</span>
</div>
<blockquote className="font-title-lg text-title-lg text-on-surface font-medium leading-relaxed">
            “In our 30-minute technical evaluation, Cadence ingested our exact 42-SKU beverage canning matrix. Within 40 seconds, it identified an unexploited staging sequence that eliminated 3.8 hours of allergen washdowns every single week.”
          </blockquote>
<div className="flex flex-wrap items-center gap-space-sm text-body-dense text-on-surface-variant pt-space-xs font-tabular-mono-dense">
<span className="font-semibold text-on-surface">VP of Global Manufacturing Operations</span>
<span className="text-outline">•</span>
<span>Fortune 200 Beverage &amp; Aseptic Packaging Fleet</span>
<span className="text-outline">•</span>
<span className="text-primary font-medium">14 Active Sites Deployed</span>
</div>
</div>
<div className="flex flex-col items-start lg:items-end gap-2 shrink-0 border-t lg:border-t-0 lg:border-l border-outline-variant pt-4 lg:pt-0 lg:pl-8">
<span className="font-eyebrow text-eyebrow uppercase text-outline">READY TO VALIDATE YOUR DATA?</span>
<a className="h-9 px-space-md rounded bg-surface border border-outline-variant hover:bg-surface-container text-on-surface font-body-dense text-body-dense flex items-center gap-2 font-medium transition-colors" href="#evaluation-intake-form">
<span>Scroll to Intake Form</span>
<span className="material-symbols-outlined text-[16px]">arrow_upward</span>
</a>
</div>
</div>
</div>
</section>
{/* Technical FAQ & Ingestion Requirements Minimalist Drawer */}
<section className="w-full bg-surface py-16">
<div className="max-w-7xl mx-auto px-margin">
<div className="flex items-center justify-between mb-8 pb-space-sm border-b border-outline-variant">
<div>
<span className="font-eyebrow text-eyebrow text-outline uppercase tracking-wider">PREPARATION GUIDELINES</span>
<h2 className="font-title-lg text-title-lg font-semibold text-on-surface mt-1">Workbook &amp; Data Ingestion Standards</h2>
</div>
<span className="font-tabular-mono-dense text-tabular-mono-dense text-outline">DOCS REF: SPEC-INGEST-V4</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
<div className="p-space-lg rounded-2xl border border-outline-variant/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-primary/40 bg-surface-container-lowest">
<div className="font-tabular-mono text-tabular-mono text-primary font-medium mb-1">01 / CHANGE-OVER MATRICES</div>
<h4 className="font-title-md text-title-md font-medium text-on-surface mb-2">Sequence-Dependent Cleanings</h4>
<p className="font-body-dense text-body-dense text-on-surface-variant leading-relaxed">
            Pairwise changeover duration arrays between allergens, pack formats, or flavors. If you do not have a formal matrix, our parser auto-reconstructs historical changeover deltas from MES shift logs.
          </p>
</div>
<div className="p-space-lg rounded-2xl border border-outline-variant/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-primary/40 bg-surface-container-lowest">
<div className="font-tabular-mono text-tabular-mono text-primary font-medium mb-1">02 / ROUTING TREES</div>
<h4 className="font-title-md text-title-md font-medium text-on-surface mb-2">Multi-stage Asset Allocations</h4>
<p className="font-body-dense text-body-dense text-on-surface-variant leading-relaxed">
            Inter-machine routing constraints (e.g. Cooker A feeding Holding Tanks 1–4, routed into Fillers 1 or 2). Cadence models both discrete assembly and continuous liquid transfer networks.
          </p>
</div>
<div className="p-space-lg rounded-2xl border border-outline-variant/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-primary/40 bg-surface-container-lowest">
<div className="font-tabular-mono text-tabular-mono text-primary font-medium mb-1">03 / CREW &amp; TOOLING</div>
<h4 className="font-title-md text-title-md font-medium text-on-surface mb-2">Secondary Resource Limitations</h4>
<p className="font-body-dense text-body-dense text-on-surface-variant leading-relaxed">
            Operator availability by shift tier, specialized tooling dies, or sterilization skid contention. The CP-SAT solver accounts for shared secondary labor to prevent unexecutable plans.
          </p>
</div>
</div>
</div>
</section>
</div>
      </main>

      <CadenceFooter />
      
    </div>
  );
}
