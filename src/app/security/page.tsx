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
{/* Top Telemetry & Security Header */}
<section className="w-full bg-surface-container-low py-16 sm:py-20 px-margin">
<div className="max-w-7xl mx-auto flex flex-col gap-space-lg">
{/* Monospace Telemetry Badges */}
<div className="flex flex-wrap items-center gap-space-sm font-eyebrow text-eyebrow text-on-surface-variant uppercase tracking-wider">
<span className="inline-flex items-center gap-1.5 px-space-sm py-1 bg-surface-container-highest text-primary font-medium rounded">
<span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
          SECURITY PROTOCOL // REV 2025.4
        </span>
<span className="text-outline-variant">/</span>
<span className="px-space-sm py-1 bg-surface-container-highest text-secondary font-medium rounded">
          ISO-27001 &amp; SOC 2 TYPE II AUDITED
        </span>
<span className="text-outline-variant">/</span>
<span className="px-space-sm py-1 bg-surface-container-highest text-on-surface font-medium rounded">
          AIR-GAPPED RELAY AGENTS // ZERO CLOUD INGRESS
        </span>
</div>
{/* Main Section Heading */}
<div className="flex flex-col lg:flex-row lg:items-end justify-between gap-space-xl">
<div className="max-w-3xl flex flex-col gap-space-sm">
<h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight font-semibold">
            Air-gapped factory execution. Zero cloud ingress. Bank-grade manufacturing security.
          </h1>
<p className="font-body-default text-body-default text-on-surface-variant leading-relaxed">
            Designed from first principles for mission-critical industrial networks, regulated defense contractors, and pharmaceutical cGMP facilities where production schedules, recipe formulation, and capacity envelopes can never leave the plant perimeter.
          </p>
</div>
<div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-space-sm shrink-0">
<a className="h-10 px-space-lg bg-primary-container text-on-primary font-body-dense text-body-dense rounded flex items-center justify-center gap-2 font-medium shadow-sm hover:bg-primary transition-colors" href="#audit-pack">
<span className="material-symbols-outlined text-[18px]">verified_user</span>
            Request Compliance Dossier
          </a>
<a className="h-10 px-space-lg bg-surface-container text-on-surface font-body-dense text-body-dense rounded flex items-center justify-center gap-2 font-medium hover:bg-surface-container-high transition-colors" href="#purdue-model">
<span className="material-symbols-outlined text-[18px]">lan</span>
            Inspect ISA-95 Flow
          </a>
</div>
</div>
</div>
</section>
{/* Executive Security Metrics Strip */}
<section className="w-full bg-surface py-16 sm:py-20 px-margin">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md">
{/* Metric 1 */}
<div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col justify-between">
<div>
<div className="flex items-center justify-between pb-space-sm">
<span className="font-eyebrow text-eyebrow uppercase text-on-surface-variant">Boundary Ingress</span>
<span className="material-symbols-outlined text-secondary text-[20px]">format_image_left</span>
</div>
<div className="font-headline-md text-headline-md text-on-surface font-semibold tracking-tight">0 Ports</div>
<div className="font-eyebrow text-eyebrow text-secondary uppercase pt-1">Strict Egress Only</div>
</div>
<p className="font-body-dense text-body-dense text-on-surface-variant pt-space-md">
            Relay daemons push deterministic state packets outbound over TLS 1.3 to DMZ. No inbound ports open to factory subnet.
          </p>
</div>
{/* Metric 2 */}
<div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col justify-between">
<div>
<div className="flex items-center justify-between pb-space-sm">
<span className="font-eyebrow text-eyebrow uppercase text-on-surface-variant">Trust Assurance</span>
<span className="material-symbols-outlined text-primary text-[20px]">workspace_premium</span>
</div>
<div className="font-headline-md text-headline-md text-on-surface font-semibold tracking-tight">SOC 2 Type II</div>
<div className="font-eyebrow text-eyebrow text-primary uppercase pt-1">All 5 Trust Criteria</div>
</div>
<p className="font-body-dense text-body-dense text-on-surface-variant pt-space-md">
            Continuous real-time evidence synthesis audited by Schellman covering Security, Availability, Privacy, Processing Integrity, Confidentiality.
          </p>
</div>
{/* Metric 3 */}
<div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col justify-between">
<div>
<div className="flex items-center justify-between pb-space-sm">
<span className="font-eyebrow text-eyebrow uppercase text-on-surface-variant">Pharma Standard</span>
<span className="material-symbols-outlined text-tertiary-container text-[20px]">fact_check</span>
</div>
<div className="font-headline-md text-headline-md text-on-surface font-semibold tracking-tight">21 CFR Part 11</div>
<div className="font-eyebrow text-eyebrow text-tertiary-container uppercase pt-1">ALCOA+ Compliant</div>
</div>
<p className="font-body-dense text-body-dense text-on-surface-variant pt-space-md">
            SHA-256 sealed dispatches, dual-signatory approvals, immutable append-only audit journals, and compliant batch changeover logging.
          </p>
</div>
{/* Metric 4 */}
<div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col justify-between">
<div>
<div className="flex items-center justify-between pb-space-sm">
<span className="font-eyebrow text-eyebrow uppercase text-on-surface-variant">IP Isolation</span>
<span className="material-symbols-outlined text-secondary text-[20px]">lock_reset</span>
</div>
<div className="font-headline-md text-headline-md text-on-surface font-semibold tracking-tight">0% Model Training</div>
<div className="font-eyebrow text-eyebrow text-secondary uppercase pt-1">Isolated Mathematical Kernel</div>
</div>
<p className="font-body-dense text-body-dense text-on-surface-variant pt-space-md">
            Combinatorial MILP heuristics execute in isolated volatile memory. Zero proprietary recipe or routing data feeds shared AI models.
          </p>
</div>
</div>
</div>
</section>
{/* Deployment Topologies Section */}
<section className="w-full bg-surface-container-low py-16 px-margin">
<div className="max-w-7xl mx-auto flex flex-col gap-space-xl">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
<div className="max-w-2xl flex flex-col gap-space-xs">
<span className="font-eyebrow text-eyebrow uppercase text-primary tracking-wider">Topological Flexibility</span>
<h2 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
            Three enterprise deployment tiers, engineered for zero compromise
          </h2>
<p className="font-body-dense text-body-dense text-on-surface-variant">
            From regulated defense manufacturing to global consumer packaged goods, deploy Cadence exactly where your security envelope demands.
          </p>
</div>
<div className="inline-flex p-1 bg-surface-container rounded-lg self-start md:self-auto">
<button className="px-3 py-1.5 rounded text-body-dense font-medium bg-surface-container-lowest text-on-surface shadow-sm" id="topology-filter-all">All Topologies</button>
<button className="px-3 py-1.5 rounded text-body-dense font-medium text-on-surface-variant hover:text-on-surface" id="topology-filter-airgap">Air-Gapped Only</button>
</div>
</div>
{/* Topologies Grid */}
<div className="grid grid-cols-1 lg:grid-cols-3 gap-space-lg">
{/* Topology 1 */}
<div className="bg-surface-container-lowest rounded-xl p-space-xl shadow-sm flex flex-col justify-between topology-card" data-tier="cloud">
<div className="flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<span className="font-eyebrow text-eyebrow uppercase px-2 py-0.5 rounded bg-surface-container text-on-surface-variant">Tier 01 // SaaS</span>
<span className="font-tabular-mono-dense text-tabular-mono-dense text-primary font-medium">SOC 2 TYPE II</span>
</div>
<div>
<h3 className="font-title-lg text-title-lg text-on-surface font-semibold">Multi-Tenant Enterprise Cloud</h3>
<p className="font-body-dense text-body-dense text-on-surface-variant mt-1">
                Hyperscale cloud isolation with dedicated encryption containers and localized database schemas.
              </p>
</div>
<div className="bg-surface-container p-space-md rounded-lg flex flex-col gap-space-xs my-space-xs">
<div className="font-eyebrow text-eyebrow uppercase text-on-surface-variant">Network Boundary</div>
<div className="font-tabular-mono text-tabular-mono text-on-surface font-medium">AWS / Azure GovCloud (FedRAMP High)</div>
</div>
<ul className="flex flex-col gap-space-sm font-body-dense text-body-dense text-on-surface-variant">
<li className="flex items-start gap-2">
<span className="material-symbols-outlined text-secondary text-[18px] shrink-0 mt-0.5">check_circle</span>
<span>Customer-managed KMS keys with hourly automatic rotation</span>
</li>
<li className="flex items-start gap-2">
<span className="material-symbols-outlined text-secondary text-[18px] shrink-0 mt-0.5">check_circle</span>
<span>Separate schema &amp; database-level tenant isolation</span>
</li>
<li className="flex items-start gap-2">
<span className="material-symbols-outlined text-secondary text-[18px] shrink-0 mt-0.5">check_circle</span>
<span>Continuous RPO &lt; 60s, RTO &lt; 15m automated disaster recovery</span>
</li>
<li className="flex items-start gap-2">
<span className="material-symbols-outlined text-secondary text-[18px] shrink-0 mt-0.5">check_circle</span>
<span>Automated weekly compliance snapshot exports via API</span>
</li>
</ul>
</div>
<div className="pt-space-lg mt-space-md">
<span className="font-eyebrow text-eyebrow uppercase text-on-surface-variant block mb-1">Target Persona</span>
<span className="font-body-dense text-body-dense text-on-surface font-medium">Multi-site Food &amp; Packaging networks</span>
</div>
</div>
{/* Topology 2 */}
<div className="bg-surface-container-lowest rounded-xl p-space-xl shadow-sm flex flex-col justify-between topology-card" data-tier="vpc">
<div className="flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<span className="font-eyebrow text-eyebrow uppercase px-2 py-0.5 rounded bg-primary-fixed text-on-primary-fixed font-medium">Tier 02 // VPC</span>
<span className="font-tabular-mono-dense text-tabular-mono-dense text-secondary font-medium">PRIVATE PEERING</span>
</div>
<div>
<h3 className="font-title-lg text-title-lg text-on-surface font-semibold">Dedicated Single-Tenant VPC</h3>
<p className="font-body-dense text-body-dense text-on-surface-variant mt-1">
                Zero public IP addresses. Solvers and databases provisioned inside your private cloud boundary.
              </p>
</div>
<div className="bg-surface-container p-space-md rounded-lg flex flex-col gap-space-xs my-space-xs">
<div className="font-eyebrow text-eyebrow uppercase text-on-surface-variant">Network Boundary</div>
<div className="font-tabular-mono text-tabular-mono text-on-surface font-medium">AWS PrivateLink / Azure ExpressRoute</div>
</div>
<ul className="flex flex-col gap-space-sm font-body-dense text-body-dense text-on-surface-variant">
<li className="flex items-start gap-2">
<span className="material-symbols-outlined text-secondary text-[18px] shrink-0 mt-0.5">check_circle</span>
<span>Direct integration with internal corporate DNS &amp; SSO gateways</span>
</li>
<li className="flex items-start gap-2">
<span className="material-symbols-outlined text-secondary text-[18px] shrink-0 mt-0.5">check_circle</span>
<span>Dedicated CPU clusters for MILP and constraint solvers</span>
</li>
<li className="flex items-start gap-2">
<span className="material-symbols-outlined text-secondary text-[18px] shrink-0 mt-0.5">check_circle</span>
<span>Zero external egress; traffic pinned to corporate perimeter</span>
</li>
<li className="flex items-start gap-2">
<span className="material-symbols-outlined text-secondary text-[18px] shrink-0 mt-0.5">check_circle</span>
<span>SIEM streaming (Splunk, Datadog, Sentinel) out-of-the-box</span>
</li>
</ul>
</div>
<div className="pt-space-lg mt-space-md">
<span className="font-eyebrow text-eyebrow uppercase text-on-surface-variant block mb-1">Target Persona</span>
<span className="font-body-dense text-body-dense text-on-surface font-medium">Specialty Chemical &amp; Tier 1 Auto component hubs</span>
</div>
</div>
{/* Topology 3 */}
<div className="bg-surface-container-lowest rounded-xl p-space-xl shadow-sm flex flex-col justify-between topology-card" data-tier="airgap">
<div className="flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<span className="font-eyebrow text-eyebrow uppercase px-2 py-0.5 rounded bg-secondary text-on-secondary font-medium">Tier 03 // Air-Gap</span>
<span className="font-tabular-mono-dense text-tabular-mono-dense text-secondary font-medium">100% DISCONNECTED</span>
</div>
<div>
<h3 className="font-title-lg text-title-lg text-on-surface font-semibold">Fully Air-Gapped On-Premises</h3>
<p className="font-body-dense text-body-dense text-on-surface-variant mt-1">
                Self-contained, sovereign software bundles running entirely inside physical plant data rooms.
              </p>
</div>
<div className="bg-surface-container p-space-md rounded-lg flex flex-col gap-space-xs my-space-xs">
<div className="font-eyebrow text-eyebrow uppercase text-on-surface-variant">Network Boundary</div>
<div className="font-tabular-mono text-tabular-mono text-on-surface font-medium">Bare-Metal / VMware ESXi / k3s (Offline)</div>
</div>
<ul className="flex flex-col gap-space-sm font-body-dense text-body-dense text-on-surface-variant">
<li className="flex items-start gap-2">
<span className="material-symbols-outlined text-secondary text-[18px] shrink-0 mt-0.5">check_circle</span>
<span>Zero outbound WAN connectivity required or permitted</span>
</li>
<li className="flex items-start gap-2">
<span className="material-symbols-outlined text-secondary text-[18px] shrink-0 mt-0.5">check_circle</span>
<span>Cryptographically signed offline binary update tarballs</span>
</li>
<li className="flex items-start gap-2">
<span className="material-symbols-outlined text-secondary text-[18px] shrink-0 mt-0.5">check_circle</span>
<span>Direct ISA-95 Level 3 SCADA, OPC-UA, and Historian links</span>
</li>
<li className="flex items-start gap-2">
<span className="material-symbols-outlined text-secondary text-[18px] shrink-0 mt-0.5">check_circle</span>
<span>Full ITAR &amp; CMMC 2.0 Level 2 compliant enclave</span>
</li>
</ul>
</div>
<div className="pt-space-lg mt-space-md">
<span className="font-eyebrow text-eyebrow uppercase text-on-surface-variant block mb-1">Target Persona</span>
<span className="font-body-dense text-body-dense text-on-surface font-medium">Pharma cGMP cleanrooms &amp; Aerospace defense plants</span>
</div>
</div>
</div>
</div>
</section>
{/* Interactive OT/IT Network Segmentation (Purdue Model / ISA-95) */}
<section className="w-full bg-surface py-16 px-margin" id="purdue-model">
<div className="max-w-7xl mx-auto flex flex-col gap-space-xl">
<div className="flex flex-col gap-space-xs max-w-3xl">
<span className="font-eyebrow text-eyebrow uppercase text-primary tracking-wider">Industrial Architecture</span>
<h2 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
          ISA-95 &amp; Purdue Model network segmentation
        </h2>
<p className="font-body-dense text-body-dense text-on-surface-variant">
          Cadence separates corporate ERP enterprise networks from shop floor programmable logic through non-routable DMZ relay agents. No TCP socket ever spans across Level 4 directly down to Level 2.
        </p>
</div>
{/* Enterprise Air-Gapped Datacenter Context Banner */}
        <div className="relative w-full h-44 sm:h-52 rounded-xl overflow-hidden border border-outline-variant/40 shadow-sm mb-6">
          <img
            src="/images/security-datacenter.jpg"
            alt="Sovereign high-density enterprise air-gapped datacenter infrastructure"
            className="w-full h-full object-cover brightness-75 contrast-125"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-surface/95 via-surface/60 to-transparent flex items-center p-6 sm:p-8">
            <div className="max-w-lg flex flex-col gap-1.5">
              <div className="flex items-center gap-2 text-secondary font-mono text-xs">
                <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
                <span className="uppercase tracking-wider font-semibold">Zero-Trust Physical Node</span>
              </div>
              <h3 className="font-display font-bold text-lg sm:text-xl text-on-surface">
                Sovereign Air-Gapped Plant Deployment
              </h3>
              <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                Dedicated on-premise Kubernetes clusters running inside your physical plant firewalls with zero external cloud dependencies.
              </p>
            </div>
          </div>
        </div>

        {/* Purdue Architecture Diagram Display */}
<div className="w-full bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md">
{/* Purdue Levels Visual Stack */}
<div className="flex flex-col gap-space-sm">
{/* Level 4: Enterprise Network */}
<div className="p-space-lg bg-surface-container rounded-lg flex flex-col md:flex-row items-start md:items-center justify-between gap-space-md hover:bg-surface-container-high transition-colors">
<div className="flex items-center gap-space-md">
<div className="w-10 h-10 rounded bg-surface-container-lowest flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-primary text-[22px]">domain</span>
</div>
<div>
<div className="flex items-center gap-2">
<span className="font-eyebrow text-eyebrow px-2 py-0.5 rounded bg-surface-container-lowest text-on-surface font-semibold">LEVEL 4</span>
<span className="font-title-md text-title-md text-on-surface font-semibold">Enterprise IT &amp; ERP</span>
</div>
<p className="font-body-dense text-body-dense text-on-surface-variant">SAP S/4HANA, Oracle NetSuite, Microsoft Dynamics 365, Corporate Active Directory</p>
</div>
</div>
<div className="flex items-center gap-space-sm font-tabular-mono-dense text-tabular-mono-dense text-on-surface-variant">
<span className="px-2 py-1 rounded bg-surface-container-lowest">REST / OData v4</span>
<span className="px-2 py-1 rounded bg-surface-container-lowest">TLS 1.3 Outbound</span>
</div>
</div>
{/* Flow indicator downward with encryption telemetry */}
<div className="flex items-center justify-center py-1">
<div className="flex items-center gap-2 font-tabular-mono-dense text-tabular-mono-dense text-primary bg-primary-fixed/40 px-3 py-1 rounded-full">
<span className="material-symbols-outlined text-[14px]">south</span>
<span>Encrypted Work Order Sync via Ephemeral JWT (Zero inbound ERP ports)</span>
<span className="material-symbols-outlined text-[14px]">lock</span>
</div>
</div>
{/* Level 3.5: DMZ Industrial Boundary */}
<div className="p-space-lg bg-surface-container-high rounded-lg flex flex-col md:flex-row items-start md:items-center justify-between gap-space-md shadow-sm">
<div className="flex items-center gap-space-md">
<div className="w-10 h-10 rounded bg-primary text-on-primary flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-[22px]">router</span>
</div>
<div>
<div className="flex items-center gap-2">
<span className="font-eyebrow text-eyebrow px-2 py-0.5 rounded bg-primary text-on-primary font-semibold">LEVEL 3.5</span>
<span className="font-title-md text-title-md text-on-surface font-semibold">Cadence DMZ Relay Daemon</span>
</div>
<p className="font-body-dense text-body-dense text-on-surface-variant">Isolated unidirectional message broker with mTLS mutual certificate authentication</p>
</div>
</div>
<div className="flex items-center gap-space-xs font-tabular-mono-dense text-tabular-mono-dense">
<span className="px-2 py-1 rounded bg-surface-container-lowest text-secondary font-medium flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                AIR-GAP COMPLIANT
              </span>
<span className="px-2 py-1 rounded bg-surface-container-lowest text-on-surface">Egress Only</span>
</div>
</div>
{/* Flow indicator downward */}
<div className="flex items-center justify-center py-1">
<div className="flex items-center gap-2 font-tabular-mono-dense text-tabular-mono-dense text-secondary bg-secondary-container/40 px-3 py-1 rounded-full">
<span className="material-symbols-outlined text-[14px]">south</span>
<span>Proprietary Binary RPC Protocol // Rate-limited non-routable traffic</span>
<span className="material-symbols-outlined text-[14px]">verified</span>
</div>
</div>
{/* Level 3: Manufacturing Operations & Cadence Kernel */}
<div className="p-space-lg bg-surface-container rounded-lg flex flex-col md:flex-row items-start md:items-center justify-between gap-space-md hover:bg-surface-container-high transition-colors">
<div className="flex items-center gap-space-md">
<div className="w-10 h-10 rounded bg-surface-container-lowest flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-primary text-[22px]">memory</span>
</div>
<div>
<div className="flex items-center gap-2">
<span className="font-eyebrow text-eyebrow px-2 py-0.5 rounded bg-surface-container-lowest text-on-surface font-semibold">LEVEL 3</span>
<span className="font-title-md text-title-md text-on-surface font-semibold">Cadence Constraint Solver &amp; Plant Dispatch</span>
</div>
<p className="font-body-dense text-body-dense text-on-surface-variant">In-memory CP-SAT kernel, line sequencing engine, finite capacity allocation matrix</p>
</div>
</div>
<div className="flex items-center gap-space-sm font-tabular-mono-dense text-tabular-mono-dense text-on-surface-variant">
<span className="px-2 py-1 rounded bg-surface-container-lowest">RAM Resident</span>
<span className="px-2 py-1 rounded bg-surface-container-lowest">Zero Disk Logs</span>
</div>
</div>
{/* Flow indicator downward */}
<div className="flex items-center justify-center py-1">
<div className="flex items-center gap-2 font-tabular-mono-dense text-tabular-mono-dense text-on-surface-variant bg-surface-container px-3 py-1 rounded-full">
<span className="material-symbols-outlined text-[14px]">south</span>
<span>Shop-Floor Real-Time Dispatch Instructions &amp; Machine States</span>
</div>
</div>
{/* Level 2 & 1: Control & Sensing Subnet */}
<div className="p-space-lg bg-surface-container-low rounded-lg flex flex-col md:flex-row items-start md:items-center justify-between gap-space-md">
<div className="flex items-center gap-space-md">
<div className="w-10 h-10 rounded bg-surface-container-lowest flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-on-surface-variant text-[22px]">precision_manufacturing</span>
</div>
<div>
<div className="flex items-center gap-2">
<span className="font-eyebrow text-eyebrow px-2 py-0.5 rounded bg-surface-container-lowest text-on-surface font-semibold">LEVEL 2 &amp; 1</span>
<span className="font-title-md text-title-md text-on-surface font-semibold">SCADA, PLC, Edge Terminals &amp; MES</span>
</div>
<p className="font-body-dense text-body-dense text-on-surface-variant">OPC-UA binary tags, MQTT Sparkplug B telemetry, operator touchscreens, Allen-Bradley &amp; Siemens PLCs</p>
</div>
</div>
<div className="flex items-center gap-space-sm font-tabular-mono-dense text-tabular-mono-dense text-on-surface-variant">
<span className="px-2 py-1 rounded bg-surface-container-lowest">Sub-second Sync</span>
<span className="px-2 py-1 rounded bg-surface-container-lowest">Local VLAN Only</span>
</div>
</div>
</div>
{/* Architecture Callout Footer */}
<div className="p-space-md bg-surface-container rounded flex items-center justify-between flex-wrap gap-space-sm text-body-dense">
<div className="flex items-center gap-2 text-on-surface">
<span className="material-symbols-outlined text-secondary text-[20px]">check_circle</span>
<span className="font-medium">Physical Plant Safety Guarantee:</span>
<span className="text-on-surface-variant">Solver calculates optimal schedule bounds, but machine safety interlocks are physically enforced at Level 1 PLC hardware.</span>
</div>
<span className="font-tabular-mono-dense text-tabular-mono-dense text-primary font-medium">IEC 62443 CERTIFIED PATTERN</span>
</div>
</div>
</div>
</section>
{/* Compliance & Regulatory Matrix */}
<section className="w-full bg-surface-container-low py-16 px-margin">
<div className="max-w-7xl mx-auto flex flex-col gap-space-xl">
<div className="flex flex-col gap-space-xs max-w-3xl">
<span className="font-eyebrow text-eyebrow uppercase text-primary tracking-wider">Independent Validations</span>
<h2 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
          Comprehensive regulatory compliance matrix
        </h2>
<p className="font-body-dense text-body-dense text-on-surface-variant">
          Cadence provides complete transparency with continuous auditing, strict data residency pinning, and verifiable compliance artifacts.
        </p>
</div>
{/* Tabular Specification Card */}
<div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden">
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-surface-container text-on-surface-variant font-eyebrow text-eyebrow uppercase tracking-wider">
<th className="py-3 px-4">Standard / Framework</th>
<th className="py-3 px-4">Auditing Scope</th>
<th className="py-3 px-4">Certification Status</th>
<th className="py-3 px-4">Primary Enforcement Mechanism</th>
<th className="py-3 px-4 text-right">Audit Artifact</th>
</tr>
</thead>
<tbody className="divide-y divide-surface-container font-body-dense text-body-dense text-on-surface">
{/* Row 1 */}
<tr className="hover:bg-surface-container-low transition-colors">
<td className="py-3.5 px-4 font-medium flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-[18px]">verified</span>
                  SOC 2 Type II
                </td>
<td className="py-3.5 px-4 text-on-surface-variant">Security, Availability, Processing Integrity, Confidentiality &amp; Privacy</td>
<td className="py-3.5 px-4">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-secondary-container/30 text-on-secondary-container font-tabular-mono-dense text-tabular-mono-dense font-medium">
<span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> Active / Clean Opinion
                  </span>
</td>
<td className="py-3.5 px-4 font-tabular-mono text-tabular-mono text-on-surface-variant">Audited by Schellman (Continuous automated testing)</td>
<td className="py-3.5 px-4 text-right">
<a className="text-primary hover:underline font-tabular-mono text-tabular-mono inline-flex items-center gap-1 font-medium" href="#audit-pack">
<span>Download Report</span>
<span className="material-symbols-outlined text-[14px]">arrow_forward</span>
</a>
</td>
</tr>
{/* Row 2 */}
<tr className="hover:bg-surface-container-low transition-colors">
<td className="py-3.5 px-4 font-medium flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-[18px]">verified</span>
                  ISO/IEC 27001:2022
                </td>
<td className="py-3.5 px-4 text-on-surface-variant">Information Security Management System (ISMS) &amp; Cloud Operations</td>
<td className="py-3.5 px-4">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-secondary-container/30 text-on-secondary-container font-tabular-mono-dense text-tabular-mono-dense font-medium">
<span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> Certified (AJA Registrars)
                  </span>
</td>
<td className="py-3.5 px-4 font-tabular-mono text-tabular-mono text-on-surface-variant">Annual re-certification + quarterly surveillance checks</td>
<td className="py-3.5 px-4 text-right">
<a className="text-primary hover:underline font-tabular-mono text-tabular-mono inline-flex items-center gap-1 font-medium" href="#audit-pack">
<span>Certificate (.pdf)</span>
<span className="material-symbols-outlined text-[14px]">arrow_forward</span>
</a>
</td>
</tr>
{/* Row 3 */}
<tr className="hover:bg-surface-container-low transition-colors">
<td className="py-3.5 px-4 font-medium flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-[18px]">verified</span>
                  FDA 21 CFR Part 11 &amp; EU Annex 11
                </td>
<td className="py-3.5 px-4 text-on-surface-variant">Electronic records, dual signatures, and immutable plant dispatch audits</td>
<td className="py-3.5 px-4">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-secondary-container/30 text-on-secondary-container font-tabular-mono-dense text-tabular-mono-dense font-medium">
<span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> Validated cGMP Enclave
                  </span>
</td>
<td className="py-3.5 px-4 font-tabular-mono text-tabular-mono text-on-surface-variant">ALCOA+ principles, cryptographic non-repudiation stamps</td>
<td className="py-3.5 px-4 text-right">
<a className="text-primary hover:underline font-tabular-mono text-tabular-mono inline-flex items-center gap-1 font-medium" href="#audit-pack">
<span>Validation Whitepaper</span>
<span className="material-symbols-outlined text-[14px]">arrow_forward</span>
</a>
</td>
</tr>
{/* Row 4 */}
<tr className="hover:bg-surface-container-low transition-colors">
<td className="py-3.5 px-4 font-medium flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-[18px]">verified</span>
                  GDPR &amp; CCPA Sovereignty
                </td>
<td className="py-3.5 px-4 text-on-surface-variant">Operator shift rosters, personnel credential data, zero cross-border sync</td>
<td className="py-3.5 px-4">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-secondary-container/30 text-on-secondary-container font-tabular-mono-dense text-tabular-mono-dense font-medium">
<span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> 100% Region Pinned
                  </span>
</td>
<td className="py-3.5 px-4 font-tabular-mono text-tabular-mono text-on-surface-variant">EU-only / US-only database residency with localized backups</td>
<td className="py-3.5 px-4 text-right">
<a className="text-primary hover:underline font-tabular-mono text-tabular-mono inline-flex items-center gap-1 font-medium" href="#audit-pack">
<span>DPA Template</span>
<span className="material-symbols-outlined text-[14px]">arrow_forward</span>
</a>
</td>
</tr>
{/* Row 5 */}
<tr className="hover:bg-surface-container-low transition-colors">
<td className="py-3.5 px-4 font-medium flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-[18px]">verified</span>
                  ITAR &amp; CMMC 2.0 Level 2
                </td>
<td className="py-3.5 px-4 text-on-surface-variant">Controlled Unclassified Information (CUI) &amp; Aerospace Defense articles</td>
<td className="py-3.5 px-4">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-surface-container-highest text-on-surface font-tabular-mono-dense text-tabular-mono-dense font-medium">
<span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Ready / GovCloud Enclave
                  </span>
</td>
<td className="py-3.5 px-4 font-tabular-mono text-tabular-mono text-on-surface-variant">DFARS 252.204-7012 aligned, US Persons-only clearance support</td>
<td className="py-3.5 px-4 text-right">
<a className="text-primary hover:underline font-tabular-mono text-tabular-mono inline-flex items-center gap-1 font-medium" href="#audit-pack">
<span>ITAR Attestation</span>
<span className="material-symbols-outlined text-[14px]">arrow_forward</span>
</a>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</section>
{/* Security Governance & Data Handling Contract (4-Card Grid) */}
<section className="w-full bg-surface py-16 px-margin">
<div className="max-w-7xl mx-auto flex flex-col gap-space-xl">
<div className="flex flex-col gap-space-xs max-w-3xl">
<span className="font-eyebrow text-eyebrow uppercase text-primary tracking-wider">Operational Safeguards</span>
<h2 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
          Strict data handling contract &amp; technical governance
        </h2>
<p className="font-body-dense text-body-dense text-on-surface-variant">
          How Cadence handles cryptographic keying, identity verification, memory isolation, and continuous external threat penetration testing.
        </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg">
{/* Card 1 */}
<div className="bg-surface-container-lowest p-space-xl rounded-xl shadow-sm flex flex-col gap-space-md">
<div className="w-10 h-10 rounded bg-surface-container flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[24px]">vpn_key</span>
</div>
<div>
<span className="font-eyebrow text-eyebrow text-on-surface-variant uppercase">01 // Key Governance</span>
<h3 className="font-title-lg text-title-lg text-on-surface font-semibold mt-1">Cryptographic Key Management (BYOK)</h3>
</div>
<p className="font-body-dense text-body-dense text-on-surface-variant leading-relaxed">
            Take full custody of cryptographic secrets. Cadence supports Bring Your Own Key (BYOK) via AWS KMS, Azure Key Vault, or HashiCorp Vault. Data is encrypted in-flight with TLS 1.3 and at-rest using customer-held AES-256 keys. Revoke key access instantly to render all solver datastores permanently unreadable.
          </p>
<div className="mt-auto pt-space-sm flex items-center gap-space-sm text-on-surface-variant font-tabular-mono-dense text-tabular-mono-dense">
<span className="px-2 py-0.5 rounded bg-surface-container">AWS KMS</span>
<span className="px-2 py-0.5 rounded bg-surface-container">Azure Key Vault</span>
<span className="px-2 py-0.5 rounded bg-surface-container">HashiCorp Vault</span>
</div>
</div>
{/* Card 2 */}
<div className="bg-surface-container-lowest p-space-xl rounded-xl shadow-sm flex flex-col gap-space-md">
<div className="w-10 h-10 rounded bg-surface-container flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[24px]">badge</span>
</div>
<div>
<span className="font-eyebrow text-eyebrow text-on-surface-variant uppercase">02 // Access Control</span>
<h3 className="font-title-lg text-title-lg text-on-surface font-semibold mt-1">Role-Based Access Control &amp; SAML 2.0 SSO</h3>
</div>
<p className="font-body-dense text-body-dense text-on-surface-variant leading-relaxed">
            Synchronize enterprise directories seamlessly via Okta, Microsoft Entra ID, PingIdentity, or CyberArk. Enforce granular permissions down to specific production cells and lines: Plant Controller, Master Scheduler, Floor Dispatcher, Maintenance Tech, or Read-Only Operator. SCIM 2.0 automated provisioning included.
          </p>
<div className="mt-auto pt-space-sm flex items-center gap-space-sm text-on-surface-variant font-tabular-mono-dense text-tabular-mono-dense">
<span className="px-2 py-0.5 rounded bg-surface-container">SAML 2.0</span>
<span className="px-2 py-0.5 rounded bg-surface-container">OIDC</span>
<span className="px-2 py-0.5 rounded bg-surface-container">SCIM 2.0 Automated Deprovisioning</span>
</div>
</div>
{/* Card 3 */}
<div className="bg-surface-container-lowest p-space-xl rounded-xl shadow-sm flex flex-col gap-space-md">
<div className="w-10 h-10 rounded bg-surface-container flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[24px]">memory_alt</span>
</div>
<div>
<span className="font-eyebrow text-eyebrow text-on-surface-variant uppercase">03 // Ephemeral Execution</span>
<h3 className="font-title-lg text-title-lg text-on-surface font-semibold mt-1">Ephemeral In-Memory Solving Kernel</h3>
</div>
<p className="font-body-dense text-body-dense text-on-surface-variant leading-relaxed">
            Manufacturing capacity variables, machine setup matrices, and formulation rules solve purely inside volatile RAM. Once optimal dispatches are computed and emitted to shop floor MES systems, raw scratch variables and intermediate solver branches are purged from memory, leaving zero residual exposure footprint on local storage.
          </p>
<div className="mt-auto pt-space-sm flex items-center gap-space-sm text-on-surface-variant font-tabular-mono-dense text-tabular-mono-dense">
<span className="px-2 py-0.5 rounded bg-surface-container">Zero Disk Write</span>
<span className="px-2 py-0.5 rounded bg-surface-container">Volatile Scratchspace</span>
<span className="px-2 py-0.5 rounded bg-surface-container">Immediate Flush</span>
</div>
</div>
{/* Card 4 */}
<div className="bg-surface-container-lowest p-space-xl rounded-xl shadow-sm flex flex-col gap-space-md">
<div className="w-10 h-10 rounded bg-surface-container flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[24px]">security</span>
</div>
<div>
<span className="font-eyebrow text-eyebrow text-on-surface-variant uppercase">04 // Threat Audits</span>
<h3 className="font-title-lg text-title-lg text-on-surface font-semibold mt-1">Quarterly Grey-Box Penetration Testing</h3>
</div>
<p className="font-body-dense text-body-dense text-on-surface-variant leading-relaxed">
            Independent security research teams conduct recurring grey-box assessments against cloud endpoints, DMZ relay daemons, and client runtimes. We operate a coordinated vulnerability disclosure program with strict SLAs: P1 vulnerabilities triaged within 4 hours, hotfixes dispatched within 24 hours.
          </p>
<div className="mt-auto pt-space-sm flex items-center gap-space-sm text-on-surface-variant font-tabular-mono-dense text-tabular-mono-dense">
<span className="px-2 py-0.5 rounded bg-surface-container">Bishop Fox Assessed</span>
<span className="px-2 py-0.5 rounded bg-surface-container">Public CVE Program</span>
<span className="px-2 py-0.5 rounded bg-surface-container">SLA &lt; 24h Hotfix</span>
</div>
</div>
</div>
</div>
</section>
{/* Security Whitepaper & Audit Pack CTA Section */}
<section className="w-full bg-surface-container-low py-16 px-margin" id="audit-pack">
<div className="max-w-7xl mx-auto">
<div className="bg-surface-container-lowest rounded-xl p-space-xl md:p-12 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-space-xl">
<div className="max-w-2xl flex flex-col gap-space-sm">
<div className="flex items-center gap-2 font-eyebrow text-eyebrow uppercase text-primary font-medium">
<span className="material-symbols-outlined text-[16px]">lock</span>
            Confidential Enterprise Compliance Pack
          </div>
<h2 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
            Evaluate our latest SOC 2 Type II audit, penetration tests, and ISA-95 architecture blueprints.
          </h2>
<p className="font-body-dense text-body-dense text-on-surface-variant">
            Full compliance dossiers are dispatched instantly via automated DocuSign mutual NDA. Includes complete third-party auditor opinions, ISO-27001 certificate annexes, and air-gapped deployment schematics.
          </p>
<div className="pt-space-xs font-tabular-mono-dense text-tabular-mono-dense text-on-surface-variant flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-secondary inline-block"></span>
<span>Automated dispatch enabled // Average delivery time: 4 minutes</span>
</div>
</div>
<div className="w-full lg:w-auto flex flex-col sm:flex-row lg:flex-col gap-space-sm shrink-0">
<button className="h-11 px-space-lg bg-primary-container hover:bg-primary text-on-primary font-body-dense text-body-dense rounded flex items-center justify-center gap-2 font-medium shadow-sm transition-colors whitespace-nowrap" id="cta-nda-button" type="button">
<span className="material-symbols-outlined text-[18px]">verified_user</span>
            Request SOC 2 Audit Report &amp; Pen Test
          </button>
<a className="h-11 px-space-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-body-dense text-body-dense rounded flex items-center justify-center gap-2 font-medium transition-colors whitespace-nowrap" href="#">
<span className="material-symbols-outlined text-[18px]">download</span>
            Download OT Whitepaper (.pdf)
          </a>
</div>
</div>
</div>
</section>
{/* Interactive Modal Mockup for Audit Pack Request */}
<div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center p-4 hidden" id="nda-modal">
<div className="bg-surface-container-lowest rounded-xl max-w-lg w-full p-space-xl shadow-xl flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-[22px]">verified_user</span>
<h3 className="font-title-md text-title-md font-semibold text-on-surface">Request Security Audit Dossier</h3>
</div>
<button className="text-on-surface-variant hover:text-on-surface" id="close-modal-btn" type="button">
<span className="material-symbols-outlined text-[20px]">close</span>
</button>
</div>
<p className="font-body-dense text-body-dense text-on-surface-variant">
        Please provide your corporate enterprise email address. An automated mutual NDA will be delivered to your inbox for instant cryptographic signing.
      </p>
<form className="flex flex-col gap-space-sm" id="audit-request-form" onSubmit={(e) => e.preventDefault()}>
<div>
<label className="block font-eyebrow text-eyebrow uppercase text-on-surface-variant mb-1">Work Email</label>
<input className="w-full h-10 px-3 rounded bg-surface-container-low text-on-surface font-body-dense text-body-dense focus:outline-none focus:ring-1 focus:ring-primary" placeholder="vp-manufacturing@enterprise.com" required type="email"/>
</div>
<div>
<label className="block font-eyebrow text-eyebrow uppercase text-on-surface-variant mb-1">Company / Facility Name</label>
<input className="w-full h-10 px-3 rounded bg-surface-container-low text-on-surface font-body-dense text-body-dense focus:outline-none focus:ring-1 focus:ring-primary" placeholder="Precision Industrial Corp" required type="text"/>
</div>
<div>
<label className="block font-eyebrow text-eyebrow uppercase text-on-surface-variant mb-1">Deployment Architecture of Interest</label>
<select className="w-full h-10 px-3 rounded bg-surface-container-low text-on-surface font-body-dense text-body-dense focus:outline-none focus:ring-1 focus:ring-primary">
<option>Fully Air-Gapped On-Premises</option>
<option>Dedicated Single-Tenant VPC</option>
<option>Multi-Tenant Enterprise Cloud</option>
</select>
</div>
<button className="mt-space-sm h-10 bg-primary-container hover:bg-primary text-on-primary font-body-dense text-body-dense rounded font-medium transition-colors" type="submit">
          Dispatch via DocuSign
        </button>
</form>
</div>
</div>

</div>
      </main>

      <CadenceFooter />
      <CadenceDemoModal isOpen={isDemoModalOpen} onClose={() => setIsDemoModalOpen(false)} />
    </div>
  );
}
