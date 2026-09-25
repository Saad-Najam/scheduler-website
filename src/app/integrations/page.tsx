'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import CadenceHeader from '@/components/CadenceHeader';
import CadenceFooter from '@/components/CadenceFooter';
import CadenceDemoModal from '@/components/CadenceDemoModal';
import { FadeIn, FadeInStagger } from '@/components/Motion';

export default function Page() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [selectedCat, setSelectedCat] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen bg-surface text-on-surface flex flex-col selection:bg-primary/20 transition-colors">
      <CadenceHeader onOpenDemoModal={() => setIsDemoModalOpen(true)} />
      
      <main className="w-full pt-16 bg-surface flex-1">
        <div className="flex flex-col w-full">
{/* Top Technical Breadcrumb & Telemetry Ticker */}
<div className="w-full bg-surface-container-low border-b border-outline-variant/40 py-2 px-margin">
<div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-space-sm font-tabular-mono-dense text-tabular-mono-dense text-on-surface-variant">
<div className="flex items-center gap-space-sm">
<span className="inline-flex items-center gap-1.5 text-secondary font-medium">
<span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
          GATEWAY CLUSTER 04: ONLINE
        </span>
<span className="text-outline-variant">/</span>
<span>LATENCY: 42ms</span>
<span className="text-outline-variant">/</span>
<span className="hidden sm:inline">INGESTION THROUGHPUT: 18,420 EVT/SEC</span>
</div>
<div className="flex items-center gap-space-md text-on-surface-variant">
<span className="hidden md:inline">PROTOCOL REVISION: ISO-15745-4 COMPLIANT</span>
<span className="px-space-xs py-0.5 bg-surface-container-high rounded text-on-surface font-semibold text-[10px] tracking-wide">ZERO DOWNTIME SYNC</span>
</div>
</div>
</div>
{/* Hero & Protocol Banner */}
<section className="relative w-full bg-surface py-16 lg:py-24 px-margin border-b border-outline-variant/60">
<div className="max-w-7xl mx-auto flex flex-col gap-space-lg">
<div className="flex flex-wrap items-center gap-space-xs">
<span className="font-eyebrow text-eyebrow uppercase px-space-sm py-1 bg-primary/10 text-primary rounded font-semibold tracking-wider">
          ENTERPRISE INTEGRATIONS // BI-DIRECTIONAL DISPATCH &amp; INGESTION
        </span>
<span className="font-eyebrow text-eyebrow uppercase px-space-sm py-1 bg-surface-container text-on-surface-variant rounded">
          CONNECTOR LATENCY: &lt;100MS // 2-WAY AUDITED WRITE-BACK
        </span>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start">
<div className="lg:col-span-8 flex flex-col gap-space-md">
<h1 className="font-display text-headline-lg lg:text-display text-on-surface font-semibold tracking-tight leading-[1.08]">
            Plug Cadence directly into your ERP and shop-floor MES.
          </h1>
<p className="font-body-default text-body-default text-on-surface-variant max-w-3xl leading-relaxed">
            Eliminate manual workbook re-entry. Bi-directionally sync work orders, bill of materials (BOM), real-time machine scrap rates, and scheduled batch dispatches across your entire manufacturing stack without operational drift.
          </p>
<div className="flex flex-wrap items-center gap-space-md pt-space-xs">
<button className="h-10 px-space-lg bg-primary-container hover:bg-primary text-on-primary font-body-dense text-body-dense rounded flex items-center justify-center gap-space-xs font-medium transition-colors shadow-sm">
<span className="material-symbols-outlined text-[18px]">bolt</span>
              Request Custom Connector
            </button>
<button className="h-10 px-space-lg bg-surface hover:bg-surface-container text-on-surface font-body-dense text-body-dense border border-outline-variant rounded flex items-center justify-center gap-space-xs font-medium transition-colors">
<span className="material-symbols-outlined text-[18px]">terminal</span>
              Explore API Documentation
            </button>
</div>
</div>
<div className="lg:col-span-4 bg-surface-container-low border border-outline-variant/70 rounded-xl p- space-md p-5 flex flex-col gap-space-md">
<div className="flex items-center justify-between pb-space-xs border-b border-outline-variant/40">
<span className="font-eyebrow text-eyebrow uppercase text-on-surface-variant">Live Ingestion Telemetry</span>
<span className="font-tabular-mono-dense text-tabular-mono-dense text-secondary font-medium">99.999% Sync Sla</span>
</div>
<div className="grid grid-cols-2 gap-space-md">
<div className="flex flex-col">
<span className="font-headline-sm text-headline-sm font-semibold text-on-surface">24+</span>
<span className="font-body-dense text-body-dense text-on-surface-variant">Pre-Built Adapters</span>
</div>
<div className="flex flex-col">
<span className="font-headline-sm text-headline-sm font-semibold text-primary">&lt;100ms</span>
<span className="font-body-dense text-body-dense text-on-surface-variant">Delta Ingestion</span>
</div>
<div className="flex flex-col">
<span className="font-headline-sm text-headline-sm font-semibold text-on-surface">100%</span>
<span className="font-body-dense text-body-dense text-on-surface-variant">Idempotent Writes</span>
</div>
<div className="flex flex-col">
<span className="font-headline-sm text-headline-sm font-semibold text-on-surface">0 min</span>
<span className="font-body-dense text-body-dense text-on-surface-variant">ERP Host Downtime</span>
</div>
</div>
<div className="pt-space-xs border-t border-outline-variant/40 flex items-center gap-space-xs text-on-surface-variant font-tabular-mono-dense text-[11px]">
<span className="material-symbols-outlined text-[16px] text-primary">security</span>
<span>All connectors certified ISO 27001 &amp; SOC 2 Type II</span>
</div>
</div>
</div>
</div>
</section>
{/* Filterable Category Controls & Search Bar */}
<section className="w-full bg-surface-container-lowest border-b border-outline-variant/60 py-5 px-margin sticky top-16 z-30 shadow-xs">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-space-md">
{/* Category filter tabs */}
<div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5" id="connector-filters">
<button className="filter-tab active h-8 px-space-sm bg-primary text-on-primary rounded font-body-dense text-body-dense font-medium flex items-center gap-1.5 whitespace-nowrap transition-all" data-category="all" onClick={() => setSelectedCat('all')}>
<span>All Systems</span>
<span className="text-[11px] font-tabular-mono bg-white/20 px-1.5 py-0.2 rounded">24</span>
</button>
<button className="filter-tab h-8 px-space-sm bg-surface-container hover:bg-surface-container-high text-on-surface rounded font-body-dense text-body-dense font-medium flex items-center gap-1.5 whitespace-nowrap transition-all" data-category="erp" onClick={() => setSelectedCat('erp')}>
<span>Enterprise ERP</span>
<span className="text-[11px] font-tabular-mono bg-on-surface/10 px-1.5 py-0.2 rounded text-on-surface-variant">8</span>
</button>
<button className="filter-tab h-8 px-space-sm bg-surface-container hover:bg-surface-container-high text-on-surface rounded font-body-dense text-body-dense font-medium flex items-center gap-1.5 whitespace-nowrap transition-all" data-category="mes" onClick={() => setSelectedCat('mes')}>
<span>Shop-Floor MES &amp; SCADA</span>
<span className="text-[11px] font-tabular-mono bg-on-surface/10 px-1.5 py-0.2 rounded text-on-surface-variant">7</span>
</button>
<button className="filter-tab h-8 px-space-sm bg-surface-container hover:bg-surface-container-high text-on-surface rounded font-body-dense text-body-dense font-medium flex items-center gap-1.5 whitespace-nowrap transition-all" data-category="lake" onClick={() => setSelectedCat('lake')}>
<span>Warehouses &amp; Lakes</span>
<span className="text-[11px] font-tabular-mono bg-on-surface/10 px-1.5 py-0.2 rounded text-on-surface-variant">4</span>
</button>
<button className="filter-tab h-8 px-space-sm bg-surface-container hover:bg-surface-container-high text-on-surface rounded font-body-dense text-body-dense font-medium flex items-center gap-1.5 whitespace-nowrap transition-all" data-category="legacy" onClick={() => setSelectedCat('legacy')}>
<span>Legacy Pipelines</span>
<span className="text-[11px] font-tabular-mono bg-on-surface/10 px-1.5 py-0.2 rounded text-on-surface-variant">3</span>
</button>
<button className="filter-tab h-8 px-space-sm bg-surface-container hover:bg-surface-container-high text-on-surface rounded font-body-dense text-body-dense font-medium flex items-center gap-1.5 whitespace-nowrap transition-all" data-category="custom" onClick={() => setSelectedCat('custom')}>
<span>Custom APIs</span>
<span className="text-[11px] font-tabular-mono bg-on-surface/10 px-1.5 py-0.2 rounded text-on-surface-variant">2</span>
</button>
</div>
{/* Live search and quick protocols */}
<div className="flex items-center gap-space-sm w-full md:w-auto">
<div className="relative w-full md:w-80">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[18px]">search</span>
<input className="w-full h-9 pl-9 pr-space-md text-body-dense font-body-dense bg-surface border border-outline-variant rounded focus:outline-none focus:border-primary text-on-surface placeholder:text-outline transition-colors" id="connector-search-input" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Filter by system, protocol, RFC..." type="text"/>
</div>
</div>
</div>
</section>
{/* Featured Deep-Tier Enterprise Connectors */}
<section className="w-full py-16 sm:py-20 px-margin bg-surface">
<div className="max-w-7xl mx-auto flex flex-col gap-space-lg">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-space-xs pb-space-sm border-b border-outline-variant/60">
<div>
<span className="font-eyebrow text-eyebrow uppercase text-primary font-semibold">Native Two-Way Protocol Drivers</span>
<h2 className="font-headline-md text-headline-md font-semibold text-on-surface tracking-tight mt-0.5">
            Featured Deep-Tier Enterprise Connectors
          </h2>
</div>
<p className="font-body-dense text-body-dense text-on-surface-variant max-w-md">
          Industrial-grade connectors featuring transactional write locks, sequence rollback, and millisecond state telemetry.
        </p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-space-lg" id="featured-connectors-container">
{/* CARD 1: SAP S/4HANA */}
<div className="connector-card bg-surface-container-lowest border border-outline-variant hover:border-primary/60 transition-all rounded-xl p-6 flex flex-col justify-between gap-space-lg shadow-sm" data-tags="sap s/4hana ecc erp rfc bapi odata idoc">
<div className="flex flex-col gap-space-md">
<div className="flex items-start justify-between gap-space-md">
<div className="flex items-center gap-space-md">
<div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center text-primary font-bold font-tabular-mono text-title-md border border-outline-variant/40">
                  SAP
                </div>
<div>
<div className="flex items-center gap-space-xs">
<h3 className="font-title-lg text-title-lg font-semibold text-on-surface">SAP S/4HANA &amp; ECC 6.0</h3>
<span className="material-symbols-outlined text-secondary text-[18px]" title="SAP NetWeaver Certified">verified</span>
</div>
<span className="font-body-dense text-body-dense text-on-surface-variant">Certified Bi-Directional Enterprise Driver</span>
</div>
</div>
<span className="px-2 py-0.5 bg-secondary/10 border border-secondary/30 text-secondary text-[11px] font-tabular-mono rounded font-medium">
                Certified Standard
              </span>
</div>
{/* Tech specs grid */}
<div className="grid grid-cols-2 gap-x-4 gap-y-3 py-3 px-4 bg-surface-container-low/70 rounded-lg text-body-dense font-body-dense border border-outline-variant/30">
<div>
<span className="text-on-surface-variant text-[11px] uppercase font-eyebrow block">Protocols Supported</span>
<span className="font-tabular-mono text-on-surface font-medium">RFC / BAPI, OData Services, IDoc</span>
</div>
<div>
<span className="text-on-surface-variant text-[11px] uppercase font-eyebrow block">Sync Frequency</span>
<span className="font-tabular-mono text-on-surface font-medium">Real-Time Webhooks + 15m Delta</span>
</div>
<div>
<span className="text-on-surface-variant text-[11px] uppercase font-eyebrow block">Sync Direction</span>
<span className="font-tabular-mono text-on-surface font-medium">Bi-Directional (Orders ↔ Dispatches)</span>
</div>
<div>
<span className="text-on-surface-variant text-[11px] uppercase font-eyebrow block">Cipher &amp; Security</span>
<span className="font-tabular-mono text-on-surface font-medium">SNC / NetWeaver TLS 1.3</span>
</div>
</div>
{/* Key Mappings */}
<div className="flex flex-col gap-1.5">
<span className="font-eyebrow text-[11px] uppercase text-on-surface-variant font-medium tracking-wide">Key Transaction Mappings:</span>
<div className="flex flex-wrap gap-1.5">
<span className="px-2 py-0.5 bg-surface-container text-on-surface-variant font-tabular-mono text-[11px] rounded">CO01/CO02 (Prod Orders)</span>
<span className="px-2 py-0.5 bg-surface-container text-on-surface-variant font-tabular-mono text-[11px] rounded">CR01 (Work Centers)</span>
<span className="px-2 py-0.5 bg-surface-container text-on-surface-variant font-tabular-mono text-[11px] rounded">CA01 (Routing Tables)</span>
<span className="px-2 py-0.5 bg-surface-container text-on-surface-variant font-tabular-mono text-[11px] rounded">CO11N (Scrap &amp; Yield)</span>
</div>
</div>
</div>
<div className="flex items-center justify-between pt-space-sm border-t border-outline-variant/40">
<div className="flex items-center gap-space-xs text-on-surface-variant font-tabular-mono text-[11px]">
<span className="w-2 h-2 rounded-full bg-secondary"></span>
<span>Idempotent Outbound Queue Active</span>
</div>
<a className="text-primary hover:text-primary-container font-body-dense text-body-dense font-medium flex items-center gap-1 group" href="#">
<span>View Schema Mapping</span>
<span className="material-symbols-outlined text-[16px] group-hover:translate-x-0.5 transition-transform">arrow_forward</span>
</a>
</div>
</div>
{/* CARD 2: Oracle NetSuite */}
<div className="connector-card bg-surface-container-lowest border border-outline-variant hover:border-primary/60 transition-all rounded-xl p-6 flex flex-col justify-between gap-space-lg shadow-sm" data-tags="oracle netsuite suitecloud erp rest suitescript suitetalk">
<div className="flex flex-col gap-space-md">
<div className="flex items-start justify-between gap-space-md">
<div className="flex items-center gap-space-md">
<div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center text-primary font-bold font-tabular-mono text-title-md border border-outline-variant/40">
                  ORA
                </div>
<div>
<div className="flex items-center gap-space-xs">
<h3 className="font-title-lg text-title-lg font-semibold text-on-surface">Oracle NetSuite ERP</h3>
<span className="material-symbols-outlined text-primary text-[18px]">verified_user</span>
</div>
<span className="font-body-dense text-body-dense text-on-surface-variant">SuiteCloud Verified Native Sync</span>
</div>
</div>
<span className="px-2 py-0.5 bg-primary/10 border border-primary/30 text-primary text-[11px] font-tabular-mono rounded font-medium">
                Production Ready
              </span>
</div>
{/* Tech specs grid */}
<div className="grid grid-cols-2 gap-x-4 gap-y-3 py-3 px-4 bg-surface-container-low/70 rounded-lg text-body-dense font-body-dense border border-outline-variant/30">
<div>
<span className="text-on-surface-variant text-[11px] uppercase font-eyebrow block">Protocols Supported</span>
<span className="font-tabular-mono text-on-surface font-medium">SuiteTalk REST &amp; SuiteScript 2.1</span>
</div>
<div>
<span className="text-on-surface-variant text-[11px] uppercase font-eyebrow block">Sync Frequency</span>
<span className="font-tabular-mono text-on-surface font-medium">Sub-Second Webhooks &amp; Pollers</span>
</div>
<div>
<span className="text-on-surface-variant text-[11px] uppercase font-eyebrow block">Sync Direction</span>
<span className="font-tabular-mono text-on-surface font-medium">Full Bi-Directional Dispatches</span>
</div>
<div>
<span className="text-on-surface-variant text-[11px] uppercase font-eyebrow block">Authentication</span>
<span className="font-tabular-mono text-on-surface font-medium">TBA (Token-Based Auth) + OAuth2</span>
</div>
</div>
{/* Key Mappings */}
<div className="flex flex-col gap-1.5">
<span className="font-eyebrow text-[11px] uppercase text-on-surface-variant font-medium tracking-wide">Key Entity Mappings:</span>
<div className="flex flex-wrap gap-1.5">
<span className="px-2 py-0.5 bg-surface-container text-on-surface-variant font-tabular-mono text-[11px] rounded">Work Orders (WO)</span>
<span className="px-2 py-0.5 bg-surface-container text-on-surface-variant font-tabular-mono text-[11px] rounded">Assembly Items (BOM)</span>
<span className="px-2 py-0.5 bg-surface-container text-on-surface-variant font-tabular-mono text-[11px] rounded">Machine Resource Allocations</span>
<span className="px-2 py-0.5 bg-surface-container text-on-surface-variant font-tabular-mono text-[11px] rounded">Manufacturing Tasks</span>
</div>
</div>
</div>
<div className="flex items-center justify-between pt-space-sm border-t border-outline-variant/40">
<div className="flex items-center gap-space-xs text-on-surface-variant font-tabular-mono text-[11px]">
<span className="w-2 h-2 rounded-full bg-secondary"></span>
<span>RESTlet Concurrency Cap: 25 Streams</span>
</div>
<a className="text-primary hover:text-primary-container font-body-dense text-body-dense font-medium flex items-center gap-1 group" href="#">
<span>View Schema Mapping</span>
<span className="material-symbols-outlined text-[16px] group-hover:translate-x-0.5 transition-transform">arrow_forward</span>
</a>
</div>
</div>
{/* CARD 3: Microsoft Dynamics 365 */}
<div className="connector-card bg-surface-container-lowest border border-outline-variant hover:border-primary/60 transition-all rounded-xl p-6 flex flex-col justify-between gap-space-lg shadow-sm" data-tags="microsoft dynamics d365 supply chain dataverse azure odata erp">
<div className="flex flex-col gap-space-md">
<div className="flex items-start justify-between gap-space-md">
<div className="flex items-center gap-space-md">
<div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center text-primary font-bold font-tabular-mono text-title-md border border-outline-variant/40">
                  MSD
                </div>
<div>
<div className="flex items-center gap-space-xs">
<h3 className="font-title-lg text-title-lg font-semibold text-on-surface">Microsoft Dynamics 365 Supply Chain</h3>
</div>
<span className="font-body-dense text-body-dense text-on-surface-variant">Dual-Write Dataverse &amp; OData Integration</span>
</div>
</div>
<span className="px-2 py-0.5 bg-primary/10 border border-primary/30 text-primary text-[11px] font-tabular-mono rounded font-medium">
                Production Ready
              </span>
</div>
{/* Tech specs grid */}
<div className="grid grid-cols-2 gap-x-4 gap-y-3 py-3 px-4 bg-surface-container-low/70 rounded-lg text-body-dense font-body-dense border border-outline-variant/30">
<div>
<span className="text-on-surface-variant text-[11px] uppercase font-eyebrow block">Protocols Supported</span>
<span className="font-tabular-mono text-on-surface font-medium">Azure Service Bus &amp; OData v4</span>
</div>
<div>
<span className="text-on-surface-variant text-[11px] uppercase font-eyebrow block">Sync Frequency</span>
<span className="font-tabular-mono text-on-surface font-medium">Event Triggers &amp; Batch Queues</span>
</div>
<div>
<span className="text-on-surface-variant text-[11px] uppercase font-eyebrow block">Sync Direction</span>
<span className="font-tabular-mono text-on-surface font-medium">Dual-Write Ingestion &amp; Push</span>
</div>
<div>
<span className="text-on-surface-variant text-[11px] uppercase font-eyebrow block">Security Envelope</span>
<span className="font-tabular-mono text-on-surface font-medium">Entra ID App Registration &amp; RBAC</span>
</div>
</div>
{/* Key Mappings */}
<div className="flex flex-col gap-1.5">
<span className="font-eyebrow text-[11px] uppercase text-on-surface-variant font-medium tracking-wide">Key Entity Mappings:</span>
<div className="flex flex-wrap gap-1.5">
<span className="px-2 py-0.5 bg-surface-container text-on-surface-variant font-tabular-mono text-[11px] rounded">Production orders (ReqPO)</span>
<span className="px-2 py-0.5 bg-surface-container text-on-surface-variant font-tabular-mono text-[11px] rounded">BOM Versions (BOMTable)</span>
<span className="px-2 py-0.5 bg-surface-container text-on-surface-variant font-tabular-mono text-[11px] rounded">Route operations (ProdRoute)</span>
<span className="px-2 py-0.5 bg-surface-container text-on-surface-variant font-tabular-mono text-[11px] rounded">Terminal Time Records</span>
</div>
</div>
</div>
<div className="flex items-center justify-between pt-space-sm border-t border-outline-variant/40">
<div className="flex items-center gap-space-xs text-on-surface-variant font-tabular-mono text-[11px]">
<span className="w-2 h-2 rounded-full bg-secondary"></span>
<span>Dataverse Sync Latency: 110ms</span>
</div>
<a className="text-primary hover:text-primary-container font-body-dense text-body-dense font-medium flex items-center gap-1 group" href="#">
<span>View Schema Mapping</span>
<span className="material-symbols-outlined text-[16px] group-hover:translate-x-0.5 transition-transform">arrow_forward</span>
</a>
</div>
</div>
{/* CARD 4: Plex Smart Manufacturing (Rockwell) */}
<div className="connector-card bg-surface-container-lowest border border-outline-variant hover:border-primary/60 transition-all rounded-xl p-6 flex flex-col justify-between gap-space-lg shadow-sm" data-tags="plex rockwell mes scada shop floor manufacturing execution web services tcp">
<div className="flex flex-col gap-space-md">
<div className="flex items-start justify-between gap-space-md">
<div className="flex items-center gap-space-md">
<div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center text-primary font-bold font-tabular-mono text-title-md border border-outline-variant/40">
                  PLX
                </div>
<div>
<div className="flex items-center gap-space-xs">
<h3 className="font-title-lg text-title-lg font-semibold text-on-surface">Plex Smart Manufacturing (Rockwell)</h3>
<span className="material-symbols-outlined text-secondary text-[18px]">verified</span>
</div>
<span className="font-body-dense text-body-dense text-on-surface-variant">Shop-Floor Execution &amp; Dispatch Sync</span>
</div>
</div>
<span className="px-2 py-0.5 bg-secondary/10 border border-secondary/30 text-secondary text-[11px] font-tabular-mono rounded font-medium">
                Certified MES
              </span>
</div>
{/* Tech specs grid */}
<div className="grid grid-cols-2 gap-x-4 gap-y-3 py-3 px-4 bg-surface-container-low/70 rounded-lg text-body-dense font-body-dense border border-outline-variant/30">
<div>
<span className="text-on-surface-variant text-[11px] uppercase font-eyebrow block">Protocols Supported</span>
<span className="font-tabular-mono text-on-surface font-medium">Plex Web Services &amp; Direct TCP</span>
</div>
<div>
<span className="text-on-surface-variant text-[11px] uppercase font-eyebrow block">Sync Frequency</span>
<span className="font-tabular-mono text-on-surface font-medium">Continuous Telemetry Streaming</span>
</div>
<div>
<span className="text-on-surface-variant text-[11px] uppercase font-eyebrow block">Sync Direction</span>
<span className="font-tabular-mono text-on-surface font-medium">Two-Way (Actuals In → Sequence Out)</span>
</div>
<div>
<span className="text-on-surface-variant text-[11px] uppercase font-eyebrow block">Factory Deployment</span>
<span className="font-tabular-mono text-on-surface font-medium">Cadence Edge Daemon (On-Prem)</span>
</div>
</div>
{/* Key Mappings */}
<div className="flex flex-col gap-1.5">
<span className="font-eyebrow text-[11px] uppercase text-on-surface-variant font-medium tracking-wide">Key MES Telemetry Mappings:</span>
<div className="flex flex-wrap gap-1.5">
<span className="px-2 py-0.5 bg-surface-container text-on-surface-variant font-tabular-mono text-[11px] rounded">Line Setup Verification</span>
<span className="px-2 py-0.5 bg-surface-container text-on-surface-variant font-tabular-mono text-[11px] rounded">Container &amp; Lot Tracking</span>
<span className="px-2 py-0.5 bg-surface-container text-on-surface-variant font-tabular-mono text-[11px] rounded">Actual Piece Scrap Counts</span>
<span className="px-2 py-0.5 bg-surface-container text-on-surface-variant font-tabular-mono text-[11px] rounded">Operator Badge Certifications</span>
</div>
</div>
</div>
<div className="flex items-center justify-between pt-space-sm border-t border-outline-variant/40">
<div className="flex items-center gap-space-xs text-on-surface-variant font-tabular-mono text-[11px]">
<span className="w-2 h-2 rounded-full bg-secondary"></span>
<span>Shop-Floor Dispatches Real-Time</span>
</div>
<a className="text-primary hover:text-primary-container font-body-dense text-body-dense font-medium flex items-center gap-1 group" href="#">
<span>View Schema Mapping</span>
<span className="material-symbols-outlined text-[16px] group-hover:translate-x-0.5 transition-transform">arrow_forward</span>
</a>
</div>
</div>
</div>
</div>
</section>
{/* Bi-Directional Architecture & Deterministic Synchronization Engine Visual */}
<section className="w-full py-16 sm:py-20 px-margin bg-surface-container-low border-y border-outline-variant/60">
<div className="max-w-7xl mx-auto flex flex-col gap-space-xl">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
<div>
<span className="font-eyebrow text-eyebrow uppercase text-primary font-semibold">Zero-Drift Architecture</span>
<h2 className="font-headline-md text-headline-md font-semibold text-on-surface tracking-tight mt-1">
            Bi-Directional Shop-Floor &amp; ERP Synchronization
          </h2>
</div>
<div className="flex items-center gap-space-sm font-tabular-mono-dense text-tabular-mono-dense text-on-surface-variant">
<span className="px-2 py-1 bg-surface rounded border border-outline-variant">Delta Ingestion: &lt;60s</span>
<span className="px-2 py-1 bg-surface rounded border border-outline-variant">Conflict Queue: Auto-Reconciled</span>
</div>
</div>
{/* Architecture Pipeline Canvas */}
<div className="w-full bg-surface-container-lowest border border-outline-variant rounded-xl p-6 lg:p-8 flex flex-col gap-space-lg shadow-sm">
{/* Step Nodes Diagram */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 relative">
{/* Node 1: ERP Host Layer */}
<div className="flex flex-col gap-3 p-4 bg-surface rounded-lg border border-outline-variant/70 relative">
<div className="flex items-center justify-between">
<span className="font-eyebrow text-[10px] uppercase text-on-surface-variant font-semibold tracking-wider">01. ERP Core</span>
<span className="w-2 h-2 rounded-full bg-primary"></span>
</div>
<h4 className="font-title-md text-title-md font-semibold text-on-surface">Demand &amp; Master Data</h4>
<p className="font-body-dense text-body-dense text-on-surface-variant">
              Continuous intake of unassigned sales orders, BOM revision changes, supplier lead-time changes, and scheduled maintenance work centers.
            </p>
<div className="pt-2 border-t border-outline-variant/40 flex flex-col gap-1 font-tabular-mono text-[11px] text-on-surface-variant">
<span>SAP • Oracle • Dynamics</span>
<span className="text-secondary font-medium">↑↓ TLS 1.3 Outbound Webhook</span>
</div>
</div>
{/* Connecting Arrow 1 (Desktop) */}
<div className="hidden lg:flex items-center justify-center -mx-2 text-outline-variant">
<span className="material-symbols-outlined text-[28px] text-primary">sync_alt</span>
</div>
{/* Node 2: Cadence Ingestion Engine */}
<div className="flex flex-col gap-3 p-4 bg-surface rounded-lg border border-outline-variant/70 relative">
<div className="flex items-center justify-between">
<span className="font-eyebrow text-[10px] uppercase text-on-surface-variant font-semibold tracking-wider">02. Cadence Ingestion</span>
<span className="w-2 h-2 rounded-full bg-secondary"></span>
</div>
<h4 className="font-title-md text-title-md font-semibold text-on-surface">Data Normalize &amp; Hash</h4>
<p className="font-body-dense text-body-dense text-on-surface-variant">
              Validates schema integrity, calculates delta hashes to prevent redundant cycles, and queues production orders into solver-ready constraint graphs.
            </p>
<div className="pt-2 border-t border-outline-variant/40 flex flex-col gap-1 font-tabular-mono text-[11px] text-on-surface-variant">
<span>Buffer: Redis Cache Cluster</span>
<span className="text-primary font-medium">Dedup &amp; Transaction Lock</span>
</div>
</div>
{/* Connecting Arrow 2 (Desktop) */}
<div className="hidden lg:flex items-center justify-center -mx-2 text-outline-variant">
<span className="material-symbols-outlined text-[28px] text-primary">fast_forward</span>
</div>
{/* Node 3: CP-SAT MILP Solver Engine */}
<div className="flex flex-col gap-3 p-4 bg-primary text-on-primary rounded-lg shadow-md relative">
<div className="flex items-center justify-between">
<span className="font-eyebrow text-[10px] uppercase text-primary-fixed-dim font-semibold tracking-wider">03. Solver Core</span>
<span className="w-2 h-2 rounded-full bg-secondary-fixed animate-pulse"></span>
</div>
<h4 className="font-title-md text-title-md font-semibold text-on-primary">Deterministic Solve</h4>
<p className="font-body-dense text-body-dense text-primary-fixed leading-relaxed">
              Solves finite-capacity scheduling across hundreds of work centers in &lt;60s. Generates sequence, batch groups, and changeover-optimized starts.
            </p>
<div className="pt-2 border-t border-primary-fixed-dim/30 flex flex-col gap-1 font-tabular-mono text-[11px] text-primary-fixed">
<span>MILP Mathematical Core</span>
<span className="text-secondary-fixed font-medium">0% Resource Overcommit</span>
</div>
</div>
</div>
{/* Secondary Pipeline Tier: Dispatch to Shop Floor */}
<div className="grid grid-cols-1 lg:grid-cols-2 gap-space-md pt-space-xs border-t border-outline-variant/50">
<div className="p-4 bg-surface rounded-lg border border-outline-variant/70 flex flex-col gap-2">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary text-[20px]">send_time_extension</span>
<h4 className="font-title-md text-title-md font-semibold text-on-surface">Automated Dispatch Engine</h4>
</div>
<span className="font-tabular-mono text-[11px] text-secondary bg-secondary/10 px-2 py-0.5 rounded">Two-Way Writeback</span>
</div>
<p className="font-body-dense text-body-dense text-on-surface-variant">
              Commits scheduled run sequences back to shop-floor MES terminal screens, label printers, and HMI tablets while simultaneously writing updated confirmed start and finish timestamps back to ERP production orders (e.g., SAP CO02).
            </p>
</div>
<div className="p-4 bg-surface rounded-lg border border-outline-variant/70 flex flex-col gap-2">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-[20px]">device_hub</span>
<h4 className="font-title-md text-title-md font-semibold text-on-surface">Shop-Floor Real-Time Ingest (OPC-UA / MQTT)</h4>
</div>
<span className="font-tabular-mono text-[11px] text-primary bg-primary/10 px-2 py-0.5 rounded">&lt;100ms Telemetry</span>
</div>
<p className="font-body-dense text-body-dense text-on-surface-variant">
              Streams continuous machine cycle counts, actual line scrap percentages, downtime reason codes, and operator sign-offs. If a line drops 8% behind rate, Cadence re-computes subsequent changeovers immediately.
            </p>
</div>
</div>
{/* Deterministic Conflict Resolution Callout */}
<div className="p-4 bg-surface-container-high/60 rounded-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-md border border-outline-variant/40">
<div className="flex items-start gap-space-sm">
<span className="material-symbols-outlined text-tertiary text-[22px] shrink-0 mt-0.5">policy</span>
<div className="flex flex-col">
<span className="font-title-md text-title-md font-semibold text-on-surface">Deterministic Conflict Resolution Protocol</span>
<p className="font-body-dense text-body-dense text-on-surface-variant">
                If an ERP user cancels a sales order while a machine is actively running that batch, Cadence isolates the active coil/die, locks running lots to protect operator safety, and generates an emergency clean-out work order automatically.
              </p>
</div>
</div>
<a className="shrink-0 px-3 py-1.5 bg-surface text-on-surface border border-outline-variant hover:bg-surface-container font-body-dense text-body-dense rounded text-center transition-colors" href="#">
            Read Whitepaper
          </a>
</div>
</div>
</div>
</section>
{/* Secondary Extended Connectors Directory Grid */}
<section className="w-full py-16 sm:py-20 px-margin bg-surface">
<div className="max-w-7xl mx-auto flex flex-col gap-space-lg">
<div className="flex flex-col sm:flex-row sm:items-end justify-between gap-space-xs pb-space-sm border-b border-outline-variant/60">
<div>
<span className="font-eyebrow text-eyebrow uppercase text-primary font-semibold">Broad Ecosystem Coverage</span>
<h2 className="font-headline-md text-headline-md font-semibold text-on-surface tracking-tight mt-0.5">
            Extended Manufacturing &amp; Data Connectors
          </h2>
</div>
<span className="font-tabular-mono text-body-dense text-on-surface-variant">20 Connected Protocols Available</span>
</div>
{/* Compact 10-Item Grid */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-md" id="secondary-connectors-grid">
{/* Item 1 */}
<div className="connector-item bg-surface-container-lowest border border-outline-variant hover:border-primary/50 transition-all rounded-lg p-5 flex flex-col justify-between gap-space-md" data-tags="siemens opcenter mes mom industrial execution">
<div className="flex flex-col gap-space-xs">
<div className="flex items-center justify-between">
<span className="font-title-md text-title-md font-semibold text-on-surface">Siemens Opcenter (MES/MOM)</span>
<span className="text-[10px] font-tabular-mono uppercase px-2 py-0.5 bg-surface-container text-on-surface-variant rounded">MES</span>
</div>
<p className="font-body-dense text-body-dense text-on-surface-variant">
              Synchronizes job orders, work-in-progress (WIP) tracking, and line scrap confirmations with sub-minute validation locks.
            </p>
</div>
<div className="flex items-center justify-between text-[11px] font-tabular-mono text-on-surface-variant pt-2 border-t border-outline-variant/40">
<span>OPC-UA / MOM Services</span>
<span className="text-secondary font-medium">Certified v2304+</span>
</div>
</div>
{/* Item 2 */}
<div className="connector-item bg-surface-container-lowest border border-outline-variant hover:border-primary/50 transition-all rounded-lg p-5 flex flex-col justify-between gap-space-md" data-tags="aveva wonderware system platform scada hmi telemetry">
<div className="flex flex-col gap-space-xs">
<div className="flex items-center justify-between">
<span className="font-title-md text-title-md font-semibold text-on-surface">AVEVA Wonderware / System Platform</span>
<span className="text-[10px] font-tabular-mono uppercase px-2 py-0.5 bg-surface-container text-on-surface-variant rounded">SCADA</span>
</div>
<p className="font-body-dense text-body-dense text-on-surface-variant">
              Direct ArchestrA data streaming. Extracts live tag historization to adjust dynamic cycle runtimes based on actual equipment temperature.
            </p>
</div>
<div className="flex items-center justify-between text-[11px] font-tabular-mono text-on-surface-variant pt-2 border-t border-outline-variant/40">
<span>ArchestrA / SuiteLink</span>
<span className="text-secondary font-medium">Native Driver</span>
</div>
</div>
{/* Item 3 */}
<div className="connector-item bg-surface-container-lowest border border-outline-variant hover:border-primary/50 transition-all rounded-lg p-5 flex flex-col justify-between gap-space-md" data-tags="rockwell factorytalk mes automation plc batch">
<div className="flex flex-col gap-space-xs">
<div className="flex items-center justify-between">
<span className="font-title-md text-title-md font-semibold text-on-surface">Rockwell FactoryTalk Batch</span>
<span className="text-[10px] font-tabular-mono uppercase px-2 py-0.5 bg-surface-container text-on-surface-variant rounded">Batch MES</span>
</div>
<p className="font-body-dense text-body-dense text-on-surface-variant">
              Automated recipe allocation for bulk blending tanks, CIP (Clean-in-Place) validation schedules, and phase state verification.
            </p>
</div>
<div className="flex items-center justify-between text-[11px] font-tabular-mono text-on-surface-variant pt-2 border-t border-outline-variant/40">
<span>CIP / EtherNet/IP API</span>
<span className="text-secondary font-medium">Batch Verified</span>
</div>
</div>
{/* Item 4 */}
<div className="connector-item bg-surface-container-lowest border border-outline-variant hover:border-primary/50 transition-all rounded-lg p-5 flex flex-col justify-between gap-space-md" data-tags="odoo manufacturing mrp erp rest python">
<div className="flex flex-col gap-space-xs">
<div className="flex items-center justify-between">
<span className="font-title-md text-title-md font-semibold text-on-surface">Odoo Manufacturing ERP</span>
<span className="text-[10px] font-tabular-mono uppercase px-2 py-0.5 bg-surface-container text-on-surface-variant rounded">ERP</span>
</div>
<p className="font-body-dense text-body-dense text-on-surface-variant">
              Full sync of mrp.production orders, workcenter capacity pools, and unreserve/reserve inventory hooks for agile FMCG plants.
            </p>
</div>
<div className="flex items-center justify-between text-[11px] font-tabular-mono text-on-surface-variant pt-2 border-t border-outline-variant/40">
<span>JSON-RPC / REST API</span>
<span className="text-secondary font-medium">v14 - v17 Ready</span>
</div>
</div>
{/* Item 5 */}
<div className="connector-item bg-surface-container-lowest border border-outline-variant hover:border-primary/50 transition-all rounded-lg p-5 flex flex-col justify-between gap-space-md" data-tags="infor m3 cloudsuite industrial erp ion">
<div className="flex flex-col gap-space-xs">
<div className="flex items-center justify-between">
<span className="font-title-md text-title-md font-semibold text-on-surface">Infor M3 &amp; CloudSuite</span>
<span className="text-[10px] font-tabular-mono uppercase px-2 py-0.5 bg-surface-container text-on-surface-variant rounded">ERP</span>
</div>
<p className="font-body-dense text-body-dense text-on-surface-variant">
              Integrated via Infor ION middleware. Seamless routing of manufacturing orders (PMS100) and material allocations.
            </p>
</div>
<div className="flex items-center justify-between text-[11px] font-tabular-mono text-on-surface-variant pt-2 border-t border-outline-variant/40">
<span>Infor ION / BOD XML</span>
<span className="text-secondary font-medium">Multi-Tenant Capable</span>
</div>
</div>
{/* Item 6 */}
<div className="connector-item bg-surface-container-lowest border border-outline-variant hover:border-primary/50 transition-all rounded-lg p-5 flex flex-col justify-between gap-space-md" data-tags="epicor kinetic erp manufacturing rest odata">
<div className="flex flex-col gap-space-xs">
<div className="flex items-center justify-between">
<span className="font-title-md text-title-md font-semibold text-on-surface">Epicor Kinetic ERP</span>
<span className="text-[10px] font-tabular-mono uppercase px-2 py-0.5 bg-surface-container text-on-surface-variant rounded">ERP</span>
</div>
<p className="font-body-dense text-body-dense text-on-surface-variant">
              Direct REST v2 integration with Job Entry (JobHead), Job Operations (JobOper), and machine resource groups with zero latency.
            </p>
</div>
<div className="flex items-center justify-between text-[11px] font-tabular-mono text-on-surface-variant pt-2 border-t border-outline-variant/40">
<span>Kinetic REST v2 API</span>
<span className="text-secondary font-medium">Cloud &amp; On-Prem</span>
</div>
</div>
{/* Item 7 */}
<div className="connector-item bg-surface-container-lowest border border-outline-variant hover:border-primary/50 transition-all rounded-lg p-5 flex flex-col justify-between gap-space-md" data-tags="snowflake databricks lakehouse lake data parquet delta historic ai">
<div className="flex flex-col gap-space-xs">
<div className="flex items-center justify-between">
<span className="font-title-md text-title-md font-semibold text-on-surface">Snowflake &amp; Databricks Lakehouse</span>
<span className="text-[10px] font-tabular-mono uppercase px-2 py-0.5 bg-surface-container text-on-surface-variant rounded">Data Lake</span>
</div>
<p className="font-body-dense text-body-dense text-on-surface-variant">
              Continuous Parquet/Delta streaming of raw solver logs and run times for enterprise data science teams training machine scrap predictive models.
            </p>
</div>
<div className="flex items-center justify-between text-[11px] font-tabular-mono text-on-surface-variant pt-2 border-t border-outline-variant/40">
<span>Delta Sharing / Snowpipe</span>
<span className="text-secondary font-medium">Hourly Snapshots</span>
</div>
</div>
{/* Item 8 */}
<div className="connector-item bg-surface-container-lowest border border-outline-variant hover:border-primary/50 transition-all rounded-lg p-5 flex flex-col justify-between gap-space-md" data-tags="ignition inductive automation scada opc-ua mqtt iot telemetry">
<div className="flex flex-col gap-space-xs">
<div className="flex items-center justify-between">
<span className="font-title-md text-title-md font-semibold text-on-surface">Ignition SCADA by Inductive</span>
<span className="text-[10px] font-tabular-mono uppercase px-2 py-0.5 bg-surface-container text-on-surface-variant rounded">SCADA</span>
</div>
<p className="font-body-dense text-body-dense text-on-surface-variant">
              Live tag subscription via MQTT Sparkplug B and OPC-UA. Streams micro-stops (&lt;2 mins) to Cadence's real-time buffer.
            </p>
</div>
<div className="flex items-center justify-between text-[11px] font-tabular-mono text-on-surface-variant pt-2 border-t border-outline-variant/40">
<span>MQTT Sparkplug B / OPC</span>
<span className="text-secondary font-medium">Ignition 8.1+ Certified</span>
</div>
</div>
{/* Item 9 */}
<div className="connector-item bg-surface-container-lowest border border-outline-variant hover:border-primary/50 transition-all rounded-lg p-5 flex flex-col justify-between gap-space-md" data-tags="custom rest graphql webhook api developer gateway">
<div className="flex flex-col gap-space-xs">
<div className="flex items-center justify-between">
<span className="font-title-md text-title-md font-semibold text-on-surface">REST &amp; GraphQL Webhook Gateway</span>
<span className="text-[10px] font-tabular-mono uppercase px-2 py-0.5 bg-surface-container text-on-surface-variant rounded">Custom API</span>
</div>
<p className="font-body-dense text-body-dense text-on-surface-variant">
              High-frequency webhooks with SHA-256 HMAC payload signatures, backpressure retries, and OpenAPI 3.1 specification contracts.
            </p>
</div>
<div className="flex items-center justify-between text-[11px] font-tabular-mono text-on-surface-variant pt-2 border-t border-outline-variant/40">
<span>HTTP/2 JSON &amp; GraphQL</span>
<span className="text-secondary font-medium">Sub-50ms Response</span>
</div>
</div>
{/* Item 10 */}
<div className="connector-item bg-surface-container-lowest border border-outline-variant hover:border-primary/50 transition-all rounded-lg p-5 flex flex-col justify-between gap-space-md" data-tags="excel csv sftp spreadsheet legacy hotfolder workbook manual">
<div className="flex flex-col gap-space-xs">
<div className="flex items-center justify-between">
<span className="font-title-md text-title-md font-semibold text-on-surface">Encrypted SFTP Hotfolder Pipeline</span>
<span className="text-[10px] font-tabular-mono uppercase px-2 py-0.5 bg-surface-container text-on-surface-variant rounded">Legacy</span>
</div>
<p className="font-body-dense text-body-dense text-on-surface-variant">
              Automated ingestion daemon for legacy facilities without open APIs. Watches secure SFTP drop-zones for XLSX/CSV shift logs and batch sheets.
            </p>
</div>
<div className="flex items-center justify-between text-[11px] font-tabular-mono text-on-surface-variant pt-2 border-t border-outline-variant/40">
<span>SSH / SFTP Key-Auth</span>
<span className="text-secondary font-medium">Auto-Parsing Engine</span>
</div>
</div>
</div>
</div>
</section>
{/* Ingestion Specifications, Contract Guarantees & DMZ Relay Box */}
<section className="w-full py-16 sm:py-20 px-margin bg-surface-container-low border-t border-outline-variant/60">
<div className="max-w-7xl mx-auto flex flex-col gap-space-lg">
<div className="flex flex-col gap-1">
<span className="font-eyebrow text-eyebrow uppercase text-primary font-semibold">Reliability Protocol</span>
<h2 className="font-headline-md text-headline-md font-semibold text-on-surface tracking-tight">
          Enterprise Ingestion Contract &amp; DMZ Security Guarantees
        </h2>
<p className="font-body-dense text-body-dense text-on-surface-variant max-w-3xl">
          Engineered for zero data loss even during network partition events, high-heat factory switch reboot cycles, or ERP database patch maintenance.
        </p>
</div>
<div className="w-full bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden shadow-sm">
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse font-body-dense text-body-dense">
<thead>
<tr className="bg-surface-container-high/60 border-b border-outline-variant font-eyebrow text-[11px] uppercase text-on-surface-variant tracking-wider">
<th className="py-3 px-4">Guarantee Dimension</th>
<th className="py-3 px-4">Cadence Protocol Implementation</th>
<th className="py-3 px-4">Tolerance / SLA</th>
<th className="py-3 px-4">Audit Validation</th>
</tr>
</thead>
<tbody className="divide-y divide-outline-variant/40 font-tabular-mono-dense text-tabular-mono-dense">
<tr className="hover:bg-surface-container-low/50 transition-colors">
<td className="py-3.5 px-4 font-body-dense text-on-surface font-medium">Idempotent Transaction Execution</td>
<td className="py-3.5 px-4 text-on-surface-variant">Deterministic UUIDv5 calculated from OrderID + RevID + RoutingStepHash. Replayed packets do not duplicate lines.</td>
<td className="py-3.5 px-4 text-secondary font-semibold">0 Duplicate Records</td>
<td className="py-3.5 px-4 text-on-surface">Cryptographic Salt Log</td>
</tr>
<tr className="hover:bg-surface-container-low/50 transition-colors">
<td className="py-3.5 px-4 font-body-dense text-on-surface font-medium">Air-Gapped Factory Relay Agent</td>
<td className="py-3.5 px-4 text-on-surface-variant">Cadence Edge Daemon deploys in on-prem industrial DMZ. Connects outbound-only over TLS 1.3 via port 443. No open inbound ports required.</td>
<td className="py-3.5 px-4 text-secondary font-semibold">Zero Inbound Attack Surface</td>
<td className="py-3.5 px-4 text-on-surface">Penta-Tested / ISO 27001</td>
</tr>
<tr className="hover:bg-surface-container-low/50 transition-colors">
<td className="py-3.5 px-4 font-body-dense text-on-surface font-medium">Partition Tolerance &amp; Queue Spooling</td>
<td className="py-3.5 px-4 text-on-surface-variant">Local SQLite/WAL queue stores up to 72 hours of shop-floor dispatch updates during plant WAN disconnects. Auto-drains with sequential sequencing upon link restore.</td>
<td className="py-3.5 px-4 text-secondary font-semibold">72-Hour Offline Survivability</td>
<td className="py-3.5 px-4 text-on-surface">Automatic Resync Audit</td>
</tr>
<tr className="hover:bg-surface-container-low/50 transition-colors">
<td className="py-3.5 px-4 font-body-dense text-on-surface font-medium">Field-Level Type Coercion &amp; Validation</td>
<td className="py-3.5 px-4 text-on-surface-variant">Pre-flight schema inspection verifies machine rate unit conversions (e.g. cartons/hr vs meters/min) before constraints enter the solver mathematical matrix.</td>
<td className="py-3.5 px-4 text-secondary font-semibold">Strict Schema Enforcement</td>
<td className="py-3.5 px-4 text-on-surface">Quarantine Error Stream</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</section>
{/* Pre-Footer CTA: Custom Connector Request */}
<section className="w-full py-16 px-margin bg-surface-container-lowest border-t border-outline-variant/60">
<div className="max-w-5xl mx-auto bg-surface-container-high/40 border border-outline-variant rounded-2xl p-8 lg:p-12 flex flex-col md:flex-row items-center justify-between gap-space-xl">
<div className="flex flex-col gap-space-sm max-w-xl">
<span className="font-eyebrow text-eyebrow uppercase text-primary font-semibold">Custom Systems Engineering</span>
<h3 className="font-headline-md text-headline-md font-semibold text-on-surface tracking-tight">
          Don't see your specific MES or custom in-house ERP?
        </h3>
<p className="font-body-default text-body-default text-on-surface-variant leading-relaxed">
          Our operations research and systems integration team builds and certifies custom enterprise connectors in under 14 business days. Bring your API schemas, stored procedures, or direct database views.
        </p>
</div>
<div className="flex flex-col sm:flex-row md:flex-col gap-space-sm w-full md:w-auto shrink-0">
<a className="h-11 px-space-lg bg-primary-container hover:bg-primary text-on-primary font-body-dense text-body-dense rounded flex items-center justify-center gap-space-xs font-medium transition-colors shadow-sm whitespace-nowrap" href="/book-a-demo">
<span className="material-symbols-outlined text-[18px]">support_agent</span>
          Speak with Integration Engineer
        </a>
<a className="h-11 px-space-lg bg-surface hover:bg-surface-container text-on-surface border border-outline-variant font-body-dense text-body-dense rounded flex items-center justify-center gap-space-xs font-medium transition-colors whitespace-nowrap" href="#">
<span className="material-symbols-outlined text-[18px]">download</span>
          Download Integration Specs (.pdf)
        </a>
</div>
</div>
</section>
</div>
{/* Interactive Client-side Script for Instant Connector Search and Category Filtering */}

      </main>

      <CadenceFooter />
      <CadenceDemoModal isOpen={isDemoModalOpen} onClose={() => setIsDemoModalOpen(false)} />
    </div>
  );
}
