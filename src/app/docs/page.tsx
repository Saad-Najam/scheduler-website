'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import CadenceHeader from '@/components/CadenceHeader';
import CadenceFooter from '@/components/CadenceFooter';
import CadenceDemoModal from '@/components/CadenceDemoModal';
import { FadeIn, FadeInStagger } from '@/components/Motion';

type Lang = 'curl' | 'python' | 'node' | 'go';

const snippets: Record<Lang, string> = {
  curl: `curl -X POST https://api.cadence-aps.com/v2/schedules/solve \\
  -H "Authorization: Bearer cad_live_8f3d10a29b4e76c1" \\
  -H "Content-Type: application/json" \\
  -H "Idempotency-Key: idemp_94b1a8d0-e187-4b72" \\
  -d '{
    "plant_id": "plt_us_east_cincinnati_04",
    "horizon_hours": 168,
    "objective": "MINIMIZE_CHANGEOVER_TIME",
    "relaxation_strategy": "STRICT_DISJUNCTIVE",
    "work_orders": [
      {
        "order_id": "wo_90214",
        "sku_code": "SKU-BEV-CITRUS-500ML",
        "batch_units": 48000,
        "earliest_start": "2025-05-12T06:00:00Z",
        "hard_due_date": "2025-05-15T18:00:00Z",
        "eligible_line_ids": ["LINE-04-BOTTLING", "LINE-05-BOTTLING"]
      },
      {
        "order_id": "wo_90215",
        "sku_code": "SKU-BEV-BERRY-ALLERGEN-500ML",
        "batch_units": 36000,
        "earliest_start": "2025-05-12T06:00:00Z",
        "hard_due_date": "2025-05-16T12:00:00Z",
        "eligible_line_ids": ["LINE-04-BOTTLING"]
      }
    ]
  }'`,
  python: `from cadence_aps import CadenceClient

client = CadenceClient(api_key="cad_live_8f3d10a29b4e76c1")

# Trigger synchronous CP-SAT optimization solve
schedule = client.schedules.solve(
    plant_id="plt_us_east_cincinnati_04",
    horizon_hours=168,
    objective="MINIMIZE_CHANGEOVER_TIME",
    work_orders=[
        {
            "order_id": "wo_90214",
            "sku_code": "SKU-BEV-CITRUS-500ML",
            "batch_units": 48000,
            "eligible_lines": ["LINE-04-BOTTLING", "LINE-05-BOTTLING"]
        },
        {
            "order_id": "wo_90215",
            "sku_code": "SKU-BEV-BERRY-ALLERGEN-500ML",
            "batch_units": 36000,
            "eligible_lines": ["LINE-04-BOTTLING"]
        }
    ]
)

print(f"Optimal solution found in {schedule.wall_time_ms}ms")
for dispatch in schedule.dispatches:
    print(f"[{dispatch.scheduled_start}] Line: {dispatch.line_id} -> {dispatch.order_id}")`,
  node: `import { CadenceAPS } from '@cadence-aps/sdk';

const cadence = new CadenceAPS({
  apiKey: process.env.CADENCE_API_KEY
});

async function runOptimization() {
  const result = await cadence.schedules.solve({
    plantId: 'plt_us_east_cincinnati_04',
    horizonHours: 168,
    objective: 'MINIMIZE_CHANGEOVER_TIME',
    workOrders: [
      {
        orderId: 'wo_90214',
        skuCode: 'SKU-BEV-CITRUS-500ML',
        batchUnits: 48000,
        eligibleLineIds: ['LINE-04-BOTTLING']
      }
    ]
  });

  console.log(\`Solve Status: \${result.solveStatus} in \${result.solverWallTimeMs}ms\`);
}`,
  go: `package main

import (
  "context"
  "fmt"
  "github.com/cadence-aps/cadence-go"
)

func main() {
  client := cadence.NewClient("cad_live_8f3d10a29b4e76c1")
  
  resp, err := client.Schedules.Solve(context.Background(), &cadence.SolveRequest{
    PlantID:      "plt_us_east_cincinnati_04",
    HorizonHours: 168,
    Objective:    cadence.ObjectiveMinimizeChangeover,
  })
  if err != nil {
    panic(err)
  }
  
  fmt.Printf("Optimal schedule %s solved in %d ms\n", resp.ScheduleID, resp.WallTimeMs)
}`
};

const sampleResponse = `{
  "schedule_id": "sch_8f9a2b1c_7749",
  "solve_status": "OPTIMAL",
  "solver_wall_time_ms": 418.2,
  "total_changeover_hours_reclaimed": 34.6,
  "makespan_hours": 142.5,
  "deterministic_seed": 42,
  "dispatches": [
    {
      "order_id": "wo_90214",
      "line_id": "LINE-04-BOTTLING",
      "sequence_index": 1,
      "scheduled_start": "2025-05-12T06:00:00Z",
      "scheduled_end": "2025-05-13T14:30:00Z",
      "changeover_prior_mins": 0,
      "washout_code": "NONE"
    },
    {
      "order_id": "wo_90215",
      "line_id": "LINE-04-BOTTLING",
      "sequence_index": 2,
      "scheduled_start": "2025-05-13T16:00:00Z",
      "scheduled_end": "2025-05-14T20:45:00Z",
      "changeover_prior_mins": 90,
      "washout_code": "CIP_ALLERGEN_LEVEL_3"
    }
  ]
}`;

export default function DocsPage() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState<Lang>('curl');
  const [copied, setCopied] = useState(false);
  const [activeNav, setActiveNav] = useState('solve');
  const [isSimulating, setIsSimulating] = useState(false);
  const [simulated, setSimulated] = useState(true);

  const handleCopy = () => {
    navigator.clipboard.writeText(snippets[selectedLang]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const runSimulation = () => {
    setIsSimulating(true);
    setTimeout(() => {
      setIsSimulating(false);
      setSimulated(true);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-surface text-on-surface flex flex-col selection:bg-primary/20 transition-colors">
      <CadenceHeader onOpenDemoModal={() => setIsDemoModalOpen(true)} />

      <main className="w-full pt-16 bg-surface flex-1">
        {/* Clean, Spacious Billboard Header */}
        <section className="w-full bg-surface border-b border-outline-variant/30 py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-6">
            <FadeIn>
              <div className="flex items-center gap-3 flex-wrap">
                <span className="font-mono text-xs uppercase px-2.5 py-1 rounded-md bg-surface-container text-on-surface-variant font-medium border border-outline-variant/40">
                  API Reference v2.4
                </span>
                <span className="font-mono text-xs text-secondary bg-secondary/10 px-2.5 py-1 rounded-md border border-secondary/20">
                  Engine: OR-Tools CP-SAT 9.9
                </span>
                <span className="font-mono text-xs text-on-surface-variant flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-secondary inline-block animate-pulse"></span>
                  Region: AWS US-East (DirectConnect)
                </span>
              </div>
            </FadeIn>

            <FadeIn delay={0.05}>
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                <div className="max-w-3xl flex flex-col gap-3">
                  <h1 className="font-display font-bold text-3xl sm:text-5xl text-on-surface tracking-tight leading-tight">
                    Deterministic CP-SAT Scheduling Engine API
                  </h1>
                  <p className="text-base sm:text-lg text-on-surface-variant leading-relaxed">
                    Programmatically model multi-stage disjunctive production constraints, execute finite-capacity mixed-integer solver runs, stream real-time Gantt mutation events over Server-Sent Events, and push verified line dispatches directly to SAP S/4HANA and MES endpoints.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0">
                  <div className="p-3.5 rounded-xl bg-surface-container border border-outline-variant/40 flex items-center justify-between gap-6">
                    <span className="font-mono text-xs text-on-surface-variant uppercase">Base URL</span>
                    <span className="font-mono text-xs text-primary font-semibold">https://api.cadence-aps.com/v2</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-surface-container border border-outline-variant/40 flex items-center justify-between gap-6">
                    <span className="font-mono text-xs text-on-surface-variant uppercase">Determinism</span>
                    <span className="font-mono text-xs text-secondary font-semibold">SEED: FIXED_42 (Bit-Identical)</span>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Spacious 2-Column Documentation Matrix */}
        <section className="w-full py-12 lg:py-16 bg-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Sticky Sidebar (approx 260px = 3 cols) */}
            <aside className="lg:col-span-3 flex flex-col gap-6 lg:sticky lg:top-24 max-h-[calc(100vh-8rem)] overflow-y-auto pr-2">
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-2.5 text-[18px] text-outline pointer-events-none">
                  search
                </span>
                <input
                  type="text"
                  placeholder="Search schemas & routes..."
                  className="w-full h-10 pl-10 pr-4 bg-surface-container rounded-xl border border-outline-variant/40 text-xs text-on-surface placeholder:text-outline focus:outline-none focus:border-primary focus:bg-surface-container-lowest transition-all"
                />
              </div>

              <div className="flex flex-col gap-5 text-sm">
                <div>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-on-surface-variant font-semibold px-2 block mb-2">
                    Getting Started
                  </span>
                  <div className="flex flex-col gap-1">
                    <button
                      onClick={() => setActiveNav('quickstart')}
                      className={`text-left px-3 py-2 rounded-lg text-xs font-medium transition-all ${
                        activeNav === 'quickstart' ? 'bg-primary/10 text-primary font-semibold' : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container'
                      }`}
                    >
                      Quickstart Overview (5m)
                    </button>
                    <button
                      onClick={() => setActiveNav('auth')}
                      className={`text-left px-3 py-2 rounded-lg text-xs font-medium transition-all ${
                        activeNav === 'auth' ? 'bg-primary/10 text-primary font-semibold' : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container'
                      }`}
                    >
                      Authentication & Bearer Tokens
                    </button>
                    <button
                      onClick={() => setActiveNav('rates')}
                      className={`text-left px-3 py-2 rounded-lg text-xs font-medium transition-all ${
                        activeNav === 'rates' ? 'bg-primary/10 text-primary font-semibold' : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container'
                      }`}
                    >
                      Rate Limits (100 rps / tenant)
                    </button>
                  </div>
                </div>

                <div>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-on-surface-variant font-semibold px-2 block mb-2">
                    Core Solver Endpoints
                  </span>
                  <div className="flex flex-col gap-1">
                    <button
                      onClick={() => setActiveNav('solve')}
                      className={`text-left px-3 py-2 rounded-lg text-xs font-medium transition-all flex items-center justify-between ${
                        activeNav === 'solve' ? 'bg-primary text-white font-semibold shadow-sm' : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container'
                      }`}
                    >
                      <span>POST /v2/schedules/solve</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                    </button>
                    <button
                      onClick={() => setActiveNav('stream')}
                      className={`text-left px-3 py-2 rounded-lg text-xs font-medium transition-all ${
                        activeNav === 'stream' ? 'bg-primary/10 text-primary font-semibold' : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container'
                      }`}
                    >
                      SSE /v2/schedules/stream
                    </button>
                    <button
                      onClick={() => setActiveNav('changeovers')}
                      className={`text-left px-3 py-2 rounded-lg text-xs font-medium transition-all ${
                        activeNav === 'changeovers' ? 'bg-primary/10 text-primary font-semibold' : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container'
                      }`}
                    >
                      POST /v2/changeovers/matrix
                    </button>
                    <button
                      onClick={() => setActiveNav('dispatches')}
                      className={`text-left px-3 py-2 rounded-lg text-xs font-medium transition-all ${
                        activeNav === 'dispatches' ? 'bg-primary/10 text-primary font-semibold' : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container'
                      }`}
                    >
                      POST /v2/dispatches/commit
                    </button>
                  </div>
                </div>

                <div>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-on-surface-variant font-semibold px-2 block mb-2">
                    SDKs & Libraries
                  </span>
                  <div className="flex flex-col gap-1 text-xs text-on-surface-variant px-3 py-1">
                    <span className="hover:text-primary cursor-pointer py-1">Python (cadence-aps)</span>
                    <span className="hover:text-primary cursor-pointer py-1">Node.js / TypeScript</span>
                    <span className="hover:text-primary cursor-pointer py-1">Go SDK</span>
                    <span className="hover:text-primary cursor-pointer py-1">SAP RFC Adapter</span>
                  </div>
                </div>
              </div>
            </aside>

            {/* Right Main Content Area (9 cols) - Uncluttered, Readable, Well-Spaced */}
            <div className="lg:col-span-9 flex flex-col gap-10 min-w-0">
              {/* Endpoint Billboard Card */}
              <div className="p-6 sm:p-8 bg-surface-container-lowest border border-outline-variant/50 rounded-2xl shadow-sm flex flex-col gap-5">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 rounded-lg bg-primary text-white font-mono text-xs font-bold">
                      POST
                    </span>
                    <span className="font-mono text-sm sm:text-base font-semibold text-on-surface">
                      https://api.cadence-aps.com/v2/schedules/solve
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[11px] px-2.5 py-0.5 rounded-full bg-secondary/15 text-secondary font-semibold">
                      PRODUCTION READY
                    </span>
                    <span className="font-mono text-[11px] px-2.5 py-0.5 rounded-full bg-surface-container text-on-surface-variant">
                      TLS 1.3
                    </span>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed">
                  Initiates an asynchronous or synchronous disjunctive constraint-programming solve across designated plant bottleneck lines. Evaluates sequence-dependent changeovers, WIP buffer hold timers, and preventative maintenance blackouts using the parallelized Google OR-Tools CP-SAT deterministic kernel.
                </p>

                <div className="flex items-center gap-6 pt-2 border-t border-outline-variant/30 text-xs font-mono text-on-surface-variant flex-wrap">
                  <span className="flex items-center gap-1.5 text-secondary font-medium">
                    <span className="material-symbols-outlined text-[16px]">verified</span>
                    Deterministic Reproducibility Guaranteed
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[16px] text-primary">timer</span>
                    Solver Timeout Configurable (10s – 300s)
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[16px] text-outline">key</span>
                    Required Header: Idempotency-Key
                  </span>
                </div>
              </div>

              {/* Code Snippet & Live Console Section */}
              <div className="rounded-2xl border border-outline-variant/50 bg-[#0E131A] text-[#F0F4F8] shadow-xl overflow-hidden flex flex-col">
                {/* Console Top Toolbar */}
                <div className="px-6 py-4 bg-[#161C26] border-b border-[#202938] flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FF6B61]"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-[#F5B544]"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-[#3ECF8E]"></span>
                    <span className="ml-3 font-mono text-xs text-[#9BA8B8]">REQUEST PAYLOAD SPECIFICATION</span>
                  </div>

                  <div className="flex items-center gap-2">
                    {/* Language Switcher Tabs */}
                    <div className="flex bg-[#202938] p-1 rounded-lg text-xs font-mono text-[#9BA8B8]">
                      {(['curl', 'python', 'node', 'go'] as Lang[]).map((l) => (
                        <button
                          key={l}
                          onClick={() => setSelectedLang(l)}
                          className={`px-3 py-1 rounded-md transition-all uppercase ${
                            selectedLang === l ? 'bg-primary text-white font-semibold shadow-sm' : 'hover:text-white'
                          }`}
                        >
                          {l}
                        </button>
                      ))}
                    </div>

                    <button
                      onClick={handleCopy}
                      className="px-3 py-1.5 rounded-lg bg-[#202938] hover:bg-[#2C384B] text-xs font-mono text-[#CFD8E3] flex items-center gap-1.5 transition-all"
                    >
                      <span className="material-symbols-outlined text-[14px]">
                        {copied ? 'check' : 'content_copy'}
                      </span>
                      <span>{copied ? 'Copied!' : 'Copy'}</span>
                    </button>
                  </div>
                </div>

                {/* Request Code Block */}
                <div className="p-6 overflow-x-auto font-mono text-xs leading-relaxed max-h-[360px] overflow-y-auto">
                  <pre className="text-[#CFD8E3]">
                    <code>{snippets[selectedLang]}</code>
                  </pre>
                </div>

                {/* Simulation Trigger Bar */}
                <div className="px-6 py-3.5 bg-[#121720] border-t border-[#202938] flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#3ECF8E]"></span>
                    <span className="font-mono text-xs text-[#3ECF8E] font-medium">
                      200 OK · Optimal Result Returned in 418.2ms
                    </span>
                  </div>

                  <button
                    onClick={runSimulation}
                    disabled={isSimulating}
                    className="px-4 py-1.5 bg-primary hover:bg-primary-container text-white rounded-lg text-xs font-mono font-medium flex items-center gap-2 transition-all"
                  >
                    <span className="material-symbols-outlined text-[15px] animate-spin" style={{ display: isSimulating ? 'inline-block' : 'none' }}>
                      refresh
                    </span>
                    <span>{isSimulating ? 'Solving CP-SAT Model...' : 'Simulate API Call'}</span>
                  </button>
                </div>

                {/* Response Code Block */}
                {simulated && (
                  <div className="p-6 bg-[#0B0F15] border-t border-[#1B222E] overflow-x-auto font-mono text-xs leading-relaxed max-h-[300px] overflow-y-auto">
                    <div className="text-[11px] text-[#78889B] mb-2 uppercase tracking-wider">
                      Response Payload (application/json)
                    </div>
                    <pre className="text-[#3ECF8E] overflow-x-auto">
                      <code>{sampleResponse}</code>
                    </pre>
                  </div>
                )}
              </div>

              {/* Request Parameters Definition Table */}
              <div className="p-6 sm:p-8 bg-surface-container-lowest border border-outline-variant/50 rounded-2xl shadow-sm flex flex-col gap-6">
                <div>
                  <h3 className="font-display font-semibold text-xl text-on-surface">
                    Request Body Parameters
                  </h3>
                  <p className="text-sm text-on-surface-variant mt-1">
                    All parameters adhere to strict JSON schema validation.
                  </p>
                </div>

                <div className="overflow-x-auto rounded-xl border border-outline-variant/40">
                  <table className="w-full text-left font-mono text-xs">
                    <thead>
                      <tr className="bg-surface-container text-on-surface-variant uppercase border-b border-outline-variant/40">
                        <th className="p-3.5">Field</th>
                        <th className="p-3.5">Type</th>
                        <th className="p-3.5">Requirement</th>
                        <th className="p-3.5">Description</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-outline-variant/30">
                      <tr className="hover:bg-surface-container transition-colors">
                        <td className="p-3.5 font-semibold text-primary">plant_id</td>
                        <td className="p-3.5 text-on-surface-variant">string (UUIDv4)</td>
                        <td className="p-3.5"><span className="px-2 py-0.5 rounded bg-error/15 text-error font-bold">REQUIRED</span></td>
                        <td className="p-3.5 text-on-surface font-sans text-xs">Canonical factory identifier configured in your Cadence instance.</td>
                      </tr>
                      <tr className="hover:bg-surface-container transition-colors">
                        <td className="p-3.5 font-semibold text-primary">horizon_hours</td>
                        <td className="p-3.5 text-on-surface-variant">integer (24–720)</td>
                        <td className="p-3.5"><span className="px-2 py-0.5 rounded bg-surface-container text-on-surface-variant">OPTIONAL (168)</span></td>
                        <td className="p-3.5 text-on-surface font-sans text-xs">Rolling temporal schedule horizon in hours. Supports up to 30 continuous days.</td>
                      </tr>
                      <tr className="hover:bg-surface-container transition-colors">
                        <td className="p-3.5 font-semibold text-primary">objective</td>
                        <td className="p-3.5 text-on-surface-variant">enum</td>
                        <td className="p-3.5"><span className="px-2 py-0.5 rounded bg-error/15 text-error font-bold">REQUIRED</span></td>
                        <td className="p-3.5 text-on-surface font-sans text-xs">Target objective: MINIMIZE_CHANGEOVER_TIME, MINIMIZE_MAKESPAN, or BALANCED_OEE.</td>
                      </tr>
                      <tr className="hover:bg-surface-container transition-colors">
                        <td className="p-3.5 font-semibold text-primary">work_orders</td>
                        <td className="p-3.5 text-on-surface-variant">array [object]</td>
                        <td className="p-3.5"><span className="px-2 py-0.5 rounded bg-error/15 text-error font-bold">REQUIRED</span></td>
                        <td className="p-3.5 text-on-surface font-sans text-xs">Array of production work orders containing SKU codes, batch units, and due dates.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Server-Sent Events & Real-time Webhooks Section */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-surface-container-low border border-outline-variant/40 rounded-2xl flex flex-col gap-3">
                  <div className="flex items-center gap-2 text-primary font-semibold text-base">
                    <span className="material-symbols-outlined">stream</span>
                    <span>Real-Time SSE Event Stream</span>
                  </div>
                  <p className="text-sm text-on-surface-variant leading-relaxed">
                    Subscribe to <code className="font-mono text-xs bg-surface-container px-1.5 py-0.5 rounded">/v2/schedules/stream</code> to receive sub-second solver state mutations and live Gantt block dispatches as the CP-SAT engine explores branches.
                  </p>
                </div>

                <div className="p-6 bg-surface-container-low border border-outline-variant/40 rounded-2xl flex flex-col gap-3">
                  <div className="flex items-center gap-2 text-secondary font-semibold text-base">
                    <span className="material-symbols-outlined">webhook</span>
                    <span>HMAC-Signed Webhooks</span>
                  </div>
                  <p className="text-sm text-on-surface-variant leading-relaxed">
                    Configure webhooks for events like <code className="font-mono text-xs bg-surface-container px-1.5 py-0.5 rounded">schedule.optimal</code>, <code className="font-mono text-xs bg-surface-container px-1.5 py-0.5 rounded">line.bottleneck_alert</code>, and <code className="font-mono text-xs bg-surface-container px-1.5 py-0.5 rounded">dispatch.committed</code> to trigger downstream MES automation.
                  </p>
                </div>
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
