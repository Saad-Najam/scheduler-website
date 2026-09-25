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
{/* Telemetry Bar */}
<div className="w-full bg-surface-container-low py-2 px-margin">
<div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-xs font-tabular-mono-dense text-tabular-mono-dense text-on-surface-variant">
<div className="flex items-center gap-space-xs flex-wrap">
<span className="inline-block w-2 h-2 rounded-full bg-secondary"></span>
<span className="font-medium text-on-surface">SPEC_V9.8</span>
<span className="text-outline">/</span>
<span>CADENCE CP-SAT CORE ARCHITECTURE</span>
<span className="text-outline">/</span>
<span className="bg-surface-container px-1.5 py-0.5 rounded text-on-surface">LATENCY &lt;60S GUARANTEE</span>
</div>
<div className="flex items-center gap-space-sm self-end sm:self-auto">
<span className="text-secondary font-medium flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">verified</span>
          PIPELINE: DETERMINISTIC FEASIBILITY VERIFIED
        </span>
<span className="hidden md:inline text-outline">|</span>
<span className="hidden md:inline">NODE CLUSTER: 64-CORE AMD EPYC 9654</span>
</div>
</div>
</div>
{/* Hero Section */}
<section className="w-full py-16 px-margin">
<div className="max-w-7xl mx-auto flex flex-col gap-space-xl">
<div className="flex flex-col gap-space-md max-w-4xl">
<div className="flex items-center gap-space-xs">
<span className="font-eyebrow text-eyebrow uppercase bg-primary-fixed text-on-primary-fixed px-2 py-0.5 rounded font-medium">Mathematical Model Specification</span>
<span className="font-eyebrow text-eyebrow uppercase text-on-surface-variant">// MILP &amp; CP FORMULATION</span>
</div>
<h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
          How Cadence turns dirty workbooks into mathematically proven line schedules.
        </h1>
<p className="font-body-default text-body-default text-on-surface-variant max-w-3xl leading-relaxed">
          A transparent breakdown of our finite-capacity modeling pipeline — from continuous ERP ingestion and MILP constraint formulation to sub-60-second CP-SAT convergence and shop-floor dispatch.
        </p>
<div className="flex flex-wrap items-center gap-space-md pt-space-xs">
<a className="h-10 px-space-lg bg-primary-container hover:bg-primary text-on-primary font-body-dense text-body-dense rounded flex items-center justify-center font-medium shadow-sm transition-colors" href="#">
            Schedule Technical Deep Dive
          </a>
<a className="h-10 px-space-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-body-dense text-body-dense rounded flex items-center justify-center font-medium shadow-sm transition-colors" href="#">
            Explore API Documentation
          </a>
</div>
</div>
{/* Quick Specs Band */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md pt-space-sm">
<div className="bg-surface-container-lowest p-space-md rounded-lg shadow-sm flex flex-col gap-1">
<span className="font-eyebrow text-eyebrow uppercase text-on-surface-variant">Core Engine</span>
<span className="font-tabular-mono text-tabular-mono font-medium text-on-surface">Google OR-Tools CP-SAT v9.8</span>
<span className="font-tabular-mono-dense text-tabular-mono-dense text-secondary">Branch-and-bound parallel threads</span>
</div>
<div className="bg-surface-container-lowest p-space-md rounded-lg shadow-sm flex flex-col gap-1">
<span className="font-eyebrow text-eyebrow uppercase text-on-surface-variant">Model Formulation</span>
<span className="font-tabular-mono text-tabular-mono font-medium text-on-surface">MILP + CP Hybrid Topology</span>
<span className="font-tabular-mono-dense text-tabular-mono-dense text-on-surface-variant">Continuous reservoir &amp; non-overlap</span>
</div>
<div className="bg-surface-container-lowest p-space-md rounded-lg shadow-sm flex flex-col gap-1">
<span className="font-eyebrow text-eyebrow uppercase text-on-surface-variant">Convergence Window</span>
<span className="font-tabular-mono text-tabular-mono font-medium text-on-surface">&lt; 60s @ 0.00% Opt Gap</span>
<span className="font-tabular-mono-dense text-tabular-mono-dense text-secondary">Strict deterministic cutoff bounds</span>
</div>
<div className="bg-surface-container-lowest p-space-md rounded-lg shadow-sm flex flex-col gap-1">
<span className="font-eyebrow text-eyebrow uppercase text-on-surface-variant">Host Runtime</span>
<span className="font-tabular-mono text-tabular-mono font-medium text-on-surface">Air-Gapped or Single VPC</span>
<span className="font-tabular-mono-dense text-tabular-mono-dense text-on-surface-variant">Zero external telemetry leakage</span>
</div>
</div>
</div>
</section>
{/* Section 1: The 4-Stage Core Solver Loop */}
<section className="w-full py-16 bg-surface-container-low px-margin">
<div className="max-w-7xl mx-auto flex flex-col gap-space-xl">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
<div className="flex flex-col gap-space-xs">
<span className="font-eyebrow text-eyebrow uppercase text-primary font-medium">// Execution Sequence</span>
<h2 className="font-headline-md text-headline-md text-on-surface tracking-tight">The 4-Stage Deterministic Core Loop</h2>
<p className="font-body-dense text-body-dense text-on-surface-variant max-w-xl">
            From fragmented ERP tables to sub-second floor synchronicity through parallel mathematical compilation.
          </p>
</div>
<div className="flex items-center gap-space-xs bg-surface-container px-space-md py-1.5 rounded text-on-surface-variant font-tabular-mono-dense text-tabular-mono-dense">
<span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
<span>PIPELINE PARALLELISM: 16 SUB-SOLVERS</span>
</div>
</div>
{/* Pipeline Cards */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md">
{/* Stage 01 */}
<div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col justify-between gap-space-lg relative overflow-hidden">
<div className="flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<span className="font-eyebrow text-eyebrow uppercase text-primary font-semibold">STAGE 01</span>
<span className="material-symbols-outlined text-outline text-[20px]">database</span>
</div>
<div className="flex flex-col gap-1">
<h3 className="font-title-md text-title-md text-on-surface font-semibold">Topology Ingestion</h3>
<p className="font-body-dense text-body-dense text-on-surface-variant leading-relaxed">
                Aggregates multi-level BOM trees, routing matrices, shift rosters, and clean-in-place matrix tables from legacy ERPs.
              </p>
</div>
</div>
<div className="bg-surface-container-low p-space-sm rounded flex flex-col gap-1 font-tabular-mono-dense text-tabular-mono-dense">
<span className="text-outline uppercase text-[10px]">Sources Parsed</span>
<div className="flex items-center gap-2 text-on-surface">
<span className="px-1.5 py-0.5 bg-surface-container rounded">SAP S/4HANA</span>
<span className="px-1.5 py-0.5 bg-surface-container rounded">NetSuite</span>
<span className="px-1.5 py-0.5 bg-surface-container rounded">XLSX / CSV</span>
</div>
<span className="text-secondary mt-1 flex items-center gap-1 text-[10px]">
<span className="material-symbols-outlined text-[12px]">check_circle</span> Pre-validation schema check: PASSED
            </span>
</div>
</div>
{/* Stage 02 */}
<div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col justify-between gap-space-lg relative overflow-hidden">
<div className="flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<span className="font-eyebrow text-eyebrow uppercase text-primary font-semibold">STAGE 02</span>
<span className="material-symbols-outlined text-outline text-[20px]">account_tree</span>
</div>
<div className="flex flex-col gap-1">
<h3 className="font-title-md text-title-md text-on-surface font-semibold">Constraint Translation</h3>
<p className="font-body-dense text-body-dense text-on-surface-variant leading-relaxed">
                Transforms non-linear human plant rules into discrete variables: reservoir bounds, setup distance circuits, and no-overlap domains.
              </p>
</div>
</div>
<div className="bg-surface-container-low p-space-sm rounded flex flex-col gap-1 font-tabular-mono-dense text-tabular-mono-dense">
<span className="text-outline uppercase text-[10px]">Compiled Primitives</span>
<div className="text-on-surface font-medium">AddNoOverlap(), AddCircuit()</div>
<div className="text-on-surface-variant">AddCumulative(), ReservoirBound</div>
<span className="text-primary mt-1 text-[10px]">Matrix Size: 24,000 booleans</span>
</div>
</div>
{/* Stage 03 */}
<div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col justify-between gap-space-lg relative overflow-hidden">
<div className="flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<span className="font-eyebrow text-eyebrow uppercase text-primary font-semibold">STAGE 03</span>
<span className="material-symbols-outlined text-outline text-[20px]">memory</span>
</div>
<div className="flex flex-col gap-1">
<h3 className="font-title-md text-title-md text-on-surface font-semibold">CP-SAT Convergence</h3>
<p className="font-body-dense text-body-dense text-on-surface-variant leading-relaxed">
                64 parallel workers run SAT conflict-driven clause learning, LP relaxations, and Large Neighborhood Search heuristics.
              </p>
</div>
</div>
<div className="bg-surface-container-low p-space-sm rounded flex flex-col gap-1 font-tabular-mono-dense text-tabular-mono-dense">
<span className="text-outline uppercase text-[10px]">Performance Bounds</span>
<div className="flex justify-between text-on-surface">
<span>Time to feasible:</span>
<span className="font-medium text-secondary">1.2s</span>
</div>
<div className="flex justify-between text-on-surface">
<span>Optimal proven:</span>
<span className="font-medium">42.8s</span>
</div>
<span className="text-secondary mt-1 text-[10px]">Optimality Gap: 0.00% Target</span>
</div>
</div>
{/* Stage 04 */}
<div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col justify-between gap-space-lg relative overflow-hidden">
<div className="flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<span className="font-eyebrow text-eyebrow uppercase text-primary font-semibold">STAGE 04</span>
<span className="material-symbols-outlined text-outline text-[20px]">sync_alt</span>
</div>
<div className="flex flex-col gap-1">
<h3 className="font-title-md text-title-md text-on-surface font-semibold">Dynamic Floor Sync</h3>
<p className="font-body-dense text-body-dense text-on-surface-variant leading-relaxed">
                Dispatches job tickets directly to floor tablets. Sub-second WebSocket pipes return micro-stoppages for automated LNS warm starts.
              </p>
</div>
</div>
<div className="bg-surface-container-low p-space-sm rounded flex flex-col gap-1 font-tabular-mono-dense text-tabular-mono-dense">
<span className="text-outline uppercase text-[10px]">Floor Telemetry</span>
<div className="flex justify-between text-on-surface">
<span>WebSocket PubSub:</span>
<span className="font-medium text-secondary">&lt; 40ms</span>
</div>
<div className="flex justify-between text-on-surface">
<span>Re-anchor LNS:</span>
<span className="font-medium">1.8s warm-start</span>
</div>
<span className="text-primary mt-1 text-[10px]">Direct ERP back-sync: Active</span>
</div>
</div>
</div>
</div>
</section>
{/* Section 2: Mathematical Formulation Deep Dive */}
<section className="w-full py-20 px-margin">
<div className="max-w-7xl mx-auto flex flex-col gap-space-xl">
<div className="flex flex-col gap-space-xs max-w-3xl">
<span className="font-eyebrow text-eyebrow uppercase text-primary font-medium">// Rigorous Formulation</span>
<h2 className="font-headline-md text-headline-md text-on-surface tracking-tight">The Mathematical Anatomy of the Cadence Engine</h2>
<p className="font-body-dense text-body-dense text-on-surface-variant leading-relaxed">
          Why traditional greedy priority rules fail on modern factories: heuristic dispatchers optimize the immediate next job, creating massive compounding bottleneck cascades downstream. Cadence evaluates all discrete line decisions concurrently over an entire planning horizon.
        </p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">
{/* Left: Explanatory Breakdown */}
<div className="lg:col-span-5 flex flex-col gap-space-lg">
<div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col gap-space-md">
<h3 className="font-title-md text-title-md text-on-surface font-medium">Objective Function Minimization</h3>
<p className="font-body-dense text-body-dense text-on-surface-variant leading-relaxed">
              The engine balances four strictly quantified cost dimensions into a single objective vector, completely eliminating manual planner guesswork:
            </p>
<div className="space-y-space-sm font-body-dense text-body-dense">
<div className="p-space-sm bg-surface-container-low rounded flex items-start gap-space-sm">
<span className="font-tabular-mono-dense text-tabular-mono-dense text-primary font-bold">01</span>
<div>
<div className="font-medium text-on-surface">Sequence-Dependent Changeover Cost</div>
<div className="text-on-surface-variant text-[12px]">Minimizes sanitation (CIP) duration, color light-to-dark sequencing, and tool swap overhead.</div>
</div>
</div>
<div className="p-space-sm bg-surface-container-low rounded flex items-start gap-space-sm">
<span className="font-tabular-mono-dense text-tabular-mono-dense text-primary font-bold">02</span>
<div>
<div className="font-medium text-on-surface">Buffer Decay &amp; Expiration Spoilage</div>
<div className="text-on-surface-variant text-[12px]">Penalizes batch dwell times in intermediary storage tanks beyond perishable viability thresholds.</div>
</div>
</div>
<div className="p-space-sm bg-surface-container-low rounded flex items-start gap-space-sm">
<span className="font-tabular-mono-dense text-tabular-mono-dense text-primary font-bold">03</span>
<div>
<div className="font-medium text-on-surface">Customer SLA Tardiness Penalties</div>
<div className="text-on-surface-variant text-[12px]">Exponential penalty curvature mapped against enterprise promise dates to prioritize key account fulfillments.</div>
</div>
</div>
<div className="p-space-sm bg-surface-container-low rounded flex items-start gap-space-sm">
<span className="font-tabular-mono-dense text-tabular-mono-dense text-primary font-bold">04</span>
<div>
<div className="font-medium text-on-surface">Overtime &amp; Shift Differential Drag</div>
<div className="text-on-surface-variant text-[12px]">Prevents unnecessary premium weekend staffing allocations when line smoothing can absorb peaks.</div>
</div>
</div>
</div>
</div>
<div className="bg-surface-container-low p-space-md rounded-lg flex items-center justify-between font-tabular-mono-dense text-tabular-mono-dense text-on-surface-variant">
<span>PEAK MEMORY: 2.1 GB / 10K NODES</span>
<span className="text-secondary font-medium">BRANCH DEPTH: 1,400+ ITER/SEC</span>
</div>
</div>
{/* Right: Code Block / CP-SAT Formulation */}
<div className="lg:col-span-7 bg-inverse-surface rounded-xl p-space-lg shadow-md text-inverse-on-surface flex flex-col gap-space-md overflow-hidden">
<div className="flex items-center justify-between text-outline-variant font-tabular-mono-dense text-tabular-mono-dense pb-space-sm">
<div className="flex items-center gap-2">
<span className="w-3 h-3 rounded-full bg-error"></span>
<span className="w-3 h-3 rounded-full bg-tertiary-fixed-dim"></span>
<span className="w-3 h-3 rounded-full bg-secondary"></span>
<span className="ml-2 text-inverse-on-surface font-medium">cadence_core_cpsat_solver.py</span>
</div>
<span>PYTHON 3.11 // OR-TOOLS 9.8</span>
</div>
<pre className="font-tabular-mono text-tabular-mono-dense text-primary-fixed-dim overflow-x-auto leading-relaxed p- space-xs"><code><span className="text-outline"># 1. Initialize Parallel SAT Constraint Model</span>
<span className="text-primary-fixed">model</span> = cp_model.CpModel()

<span className="text-outline"># 2. Finite Machine Intervals &amp; Non-Overlap Primitive</span>
<span className="text-primary-fixed">task_intervals</span> = [
    model.NewIntervalVar(start[i], duration[i], end[i], <span className="text-secondary-fixed">f'run_&#123;i&#125;_line_&#123;m&#125;'</span>)
    <span className="text-primary-fixed">for</span> i <span className="text-primary-fixed">in</span> tasks <span className="text-primary-fixed">if</span> assigned[i, m]
]
model.AddNoOverlap(task_intervals)

<span className="text-outline"># 3. Sequence-Dependent Changeover Circuit Graph</span>
<span className="text-outline"># Solves Traveling Salesperson Sub-Circuit for Matrix Transitions</span>
<span className="text-primary-fixed">circuit_arcs</span> = []
<span className="text-primary-fixed">for</span> i <span className="text-primary-fixed">in</span> tasks:
    <span className="text-primary-fixed">for</span> j <span className="text-primary-fixed">in</span> tasks:
        <span className="text-primary-fixed">if</span> i != j:
            circuit_arcs.append((i, j, transition_active[i, j]))
model.AddCircuit(circuit_arcs)

<span className="text-outline"># 4. Holding Tank Reservoir Capacity (Continuous Formulation)</span>
model.AddReservoirConstraint(
    time_points=transfer_times,
    demands=mass_flow_rates,
    min_level=0,
    max_level=MAX_HOLDING_TANK_CAPACITY_LITERS
)

<span className="text-outline"># 5. Objective Vector Minimization</span>
model.Minimize(
    sum(setup_matrix[i][j] * transition_active[i, j] <span className="text-primary-fixed">for</span> i, j <span className="text-primary-fixed">in</span> arcs) +
    sum(SLA_PENALTY_WEIGHT * tardiness[k] <span className="text-primary-fixed">for</span> k <span className="text-primary-fixed">in</span> orders) +
    sum(HOLDING_DECAY_RATE * hold_duration[b] <span className="text-primary-fixed">for</span> b <span className="text-primary-fixed">in</span> perishable_batches)
)</code></pre>
<div className="pt-space-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-xs font-tabular-mono-dense text-tabular-mono-dense text-inverse-on-surface">
<span className="text-secondary-fixed flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">bolt</span>
              LNS (Large Neighborhood Search) heuristic worker engaged
            </span>
<span className="text-primary-fixed">64 threads concurrent</span>
</div>
</div>
</div>
</div>
</section>
{/* Section 3: Complex Industrial Topologies Supported */}
<section className="w-full py-16 bg-surface-container-low px-margin">
<div className="max-w-7xl mx-auto flex flex-col gap-space-xl">
<div className="flex flex-col gap-space-xs max-w-3xl">
<span className="font-eyebrow text-eyebrow uppercase text-primary font-medium">// Plant Architecture Flexibility</span>
<h2 className="font-headline-md text-headline-md text-on-surface tracking-tight">Industrial Topologies Handled Deterministically</h2>
<p className="font-body-dense text-body-dense text-on-surface-variant leading-relaxed">
          Plants are not clean academic queuing problems. Cadence incorporates the full operational mess of modern shop floors natively into its constraint graphs.
        </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
{/* Topology 1 */}
<div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col justify-between gap-space-lg">
<div className="flex flex-col gap-space-md">
<div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[24px]">water_drop</span>
</div>
<div className="flex flex-col gap-space-xs">
<h3 className="font-title-md text-title-md text-on-surface font-semibold">Continuous-to-Discrete Coupled Units</h3>
<p className="font-body-dense text-body-dense text-on-surface-variant leading-relaxed">
                Bulk fluid processing (reactors, brew kettles, mixing tanks) paired directly into high-speed discrete packaging lines with zero room for intermediate inventory buildup.
              </p>
</div>
{/* Interactive Visual Indicator */}
<div className="bg-surface-container-low p-space-md rounded flex flex-col gap-2 font-tabular-mono-dense text-tabular-mono-dense">
<div className="flex justify-between items-center text-on-surface">
<span>BUFFER TANK #04 RESIDENCE:</span>
<span className="text-error font-medium">MAX 4.0 HRS</span>
</div>
<div className="w-full bg-surface-container h-2 rounded overflow-hidden">
<div className="bg-tertiary h-full w-3/4"></div>
</div>
<span className="text-[10px] text-on-surface-variant">Cadence forces downstream canning run to lock before hold tank shelf-life expires.</span>
</div>
</div>
<span className="font-eyebrow text-eyebrow uppercase text-primary font-medium">Cumulative Reservoir Bound</span>
</div>
{/* Topology 2 */}
<div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col justify-between gap-space-lg">
<div className="flex flex-col gap-space-md">
<div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[24px]">cleaning_services</span>
</div>
<div className="flex flex-col gap-space-xs">
<h3 className="font-title-md text-title-md text-on-surface font-semibold">Asymmetric Allergen &amp; CIP Matrices</h3>
<p className="font-body-dense text-body-dense text-on-surface-variant leading-relaxed">
                Running Product A before Product B requires a 15-minute flush, but reversing the sequence triggers a mandatory 6-hour caustic chemical washdown and swab test.
              </p>
</div>
{/* Matrix graphic */}
<div className="bg-surface-container-low p-space-md rounded flex flex-col gap-1.5 font-tabular-mono-dense text-tabular-mono-dense">
<div className="flex justify-between text-[11px] text-on-surface pb-1">
<span>TRANSITION:</span>
<span>DURATION</span>
</div>
<div className="flex justify-between text-secondary">
<span>Vanilla -&gt; Chocolate:</span>
<span className="font-medium">15 min CIP</span>
</div>
<div className="flex justify-between text-error">
<span>Peanut Cream -&gt; Plain:</span>
<span className="font-medium">240 min Allergen Wash</span>
</div>
<span className="text-[10px] text-on-surface-variant mt-1">O(1) matrix lookup integrated natively into AddCircuit() TSP arcs.</span>
</div>
</div>
<span className="font-eyebrow text-eyebrow uppercase text-primary font-medium">Circuit Distance Optimizer</span>
</div>
{/* Topology 3 */}
<div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col justify-between gap-space-lg">
<div className="flex flex-col gap-space-md">
<div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[24px]">construction</span>
</div>
<div className="flex flex-col gap-space-xs">
<h3 className="font-title-md text-title-md text-on-surface font-semibold">Tooling Contention &amp; Crew Certs</h3>
<p className="font-body-dense text-body-dense text-on-surface-variant leading-relaxed">
                Four independent packaging machines share only two specialized blister seal dies, and changeovers strictly require a Level-3 certified electro-mechanic on shift.
              </p>
</div>
<div className="bg-surface-container-low p-space-md rounded flex flex-col gap-2 font-tabular-mono-dense text-tabular-mono-dense">
<div className="flex justify-between text-on-surface">
<span>MOLD DIE #B7 CAPACITY:</span>
<span className="text-secondary font-medium">2 / 2 ALLOCATED</span>
</div>
<div className="flex justify-between text-on-surface">
<span>CERTIFIED CREW POOL:</span>
<span className="text-on-surface-variant">SHIFT A (1 TECH AVAILABLE)</span>
</div>
<span className="text-[10px] text-on-surface-variant">Prevents impossible schedules where two machines schedule concurrent setups.</span>
</div>
</div>
<span className="font-eyebrow text-eyebrow uppercase text-primary font-medium">Multi-Resource Disjunctive Bounds</span>
</div>
</div>
</div>
</section>
{/* Section 4: Sub-Second Dynamic Rescheduling (The Ripple Engine) */}
<section className="w-full py-20 px-margin">
<div className="max-w-7xl mx-auto flex flex-col gap-space-xl">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
<div className="flex flex-col gap-space-xs max-w-2xl">
<span className="font-eyebrow text-eyebrow uppercase text-primary font-medium">// Shop Floor Telemetry Response</span>
<h2 className="font-headline-md text-headline-md text-on-surface tracking-tight">Sub-Second Rescheduling: The Ripple Engine</h2>
<p className="font-body-dense text-body-dense text-on-surface-variant leading-relaxed">
            What happens when Line 2 suffers an unpredicted hydraulic seal burst at 10:14 AM? Here is how Cadence repairs the schedule without throwing the factory into chaos.
          </p>
</div>
<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col gap-1 font-tabular-mono-dense text-tabular-mono-dense">
<span className="text-outline uppercase text-[10px]">Benchmark Telemetry</span>
<span className="text-headline-sm font-headline-sm text-primary font-semibold">1.8 SECONDS</span>
<span className="text-on-surface-variant">Average Re-Anchor Latency (1,400 active tasks)</span>
</div>
</div>
{/* Real-Time Control Room Telemetry Visual */}
        <div className="relative w-full h-48 sm:h-64 rounded-2xl overflow-hidden border border-outline-variant/50 shadow-md group">
          <img
            src="/images/company-control.jpg"
            alt="Central plant operations control room and telemetry dispatch"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-90 dark:brightness-85"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent flex items-end p-6 sm:p-8">
            <div className="flex items-center justify-between w-full flex-wrap gap-4 text-white">
              <div className="flex items-center gap-2 font-mono text-xs">
                <span className="w-2.5 h-2.5 rounded-full bg-secondary animate-pulse"></span>
                <span className="font-semibold uppercase tracking-wider">Live Plant SCADA Pipe // Line 02 Micro-Anchor</span>
              </div>
              <span className="text-[11px] font-mono text-white/90 bg-black/50 px-3 py-1 rounded-md backdrop-blur-md border border-white/15">
                Latency: 1.8s
              </span>
            </div>
          </div>
        </div>

        {/* Rescheduling Step Flow */}
<div className="grid grid-cols-1 md:grid-cols-4 gap-space-md">
{/* Step 1 */}
<div className="bg-surface-container-lowest p-space-md rounded-lg shadow-sm flex flex-col gap-space-sm">
<div className="flex items-center justify-between text-error font-tabular-mono-dense text-tabular-mono-dense">
<span className="font-semibold">T-00:00.00</span>
<span className="material-symbols-outlined text-[18px]">report_problem</span>
</div>
<div className="font-title-md text-title-md text-on-surface font-medium">Floor Micro-Stoppage</div>
<p className="font-body-dense text-body-dense text-on-surface-variant leading-relaxed">
            Operator taps "Line Fault" on floor tablet. Sensor detects conveyor belt jam on Packaging Line 2. Downtime estimate: 90 mins.
          </p>
</div>
{/* Step 2 */}
<div className="bg-surface-container-lowest p-space-md rounded-lg shadow-sm flex flex-col gap-space-sm">
<div className="flex items-center justify-between text-on-surface-variant font-tabular-mono-dense text-tabular-mono-dense">
<span className="font-semibold">T-00:00.12</span>
<span className="material-symbols-outlined text-[18px]">lock</span>
</div>
<div className="font-title-md text-title-md text-on-surface font-medium">T-Zero State Freezing</div>
<p className="font-body-dense text-body-dense text-on-surface-variant leading-relaxed">
            All tasks currently running or completed before 10:14 AM are instantly pinned as immutable truth. The past is never rescheduled.
          </p>
</div>
{/* Step 3 */}
<div className="bg-surface-container-lowest p-space-md rounded-lg shadow-sm flex flex-col gap-space-sm">
<div className="flex items-center justify-between text-primary font-tabular-mono-dense text-tabular-mono-dense">
<span className="font-semibold">T-00:01.40</span>
<span className="material-symbols-outlined text-[18px]">psychology</span>
</div>
<div className="font-title-md text-title-md text-on-surface font-medium">Warm-Start LNS Optimization</div>
<p className="font-body-dense text-body-dense text-on-surface-variant leading-relaxed">
            Rather than solving from scratch, Cadence injects the previous feasible solution into CP-SAT, only mutating affected downstream nodes.
          </p>
</div>
{/* Step 4 */}
<div className="bg-surface-container-lowest p-space-md rounded-lg shadow-sm flex flex-col gap-space-sm">
<div className="flex items-center justify-between text-secondary font-tabular-mono-dense text-tabular-mono-dense">
<span className="font-semibold">T-00:01.82</span>
<span className="material-symbols-outlined text-[18px]">broadcast_on_personal</span>
</div>
<div className="font-title-md text-title-md text-on-surface font-medium">Clean Floor Dispatch</div>
<p className="font-body-dense text-body-dense text-on-surface-variant leading-relaxed">
            Downstream lines reroute batches dynamically. Operators receive updated queues with zero manual spreadsheet triage required.
          </p>
</div>
</div>
</div>
</section>
{/* Section 5: Security, Ingestion & Architecture */}
<section className="w-full py-16 bg-surface-container-low px-margin">
<div className="max-w-7xl mx-auto flex flex-col gap-space-xl">
<div className="flex flex-col gap-space-xs max-w-3xl">
<span className="font-eyebrow text-eyebrow uppercase text-primary font-medium">// Enterprise Assurance</span>
<h2 className="font-headline-md text-headline-md text-on-surface tracking-tight">Security &amp; Deployment Boundaries</h2>
<p className="font-body-dense text-body-dense text-on-surface-variant leading-relaxed">
          Production schedules reveal proprietary manufacturing formulations, customer orders, and asset bottlenecks. Cadence enforces complete data sovereignty.
        </p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md">
<div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col gap-space-sm">
<div className="w-8 h-8 rounded bg-surface-container flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[20px]">shield</span>
</div>
<h3 className="font-title-md text-title-md text-on-surface font-medium">Single-Tenant / Air-Gapped</h3>
<p className="font-body-dense text-body-dense text-on-surface-variant leading-relaxed">
            Deploy Cadence within your dedicated AWS GovCloud or Azure VPC, or air-gapped on bare metal factory Kubernetes clusters.
          </p>
</div>
<div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col gap-space-sm">
<div className="w-8 h-8 rounded bg-surface-container flex items-center justify-center text-secondary">
<span className="material-symbols-outlined text-[20px]">lock_reset</span>
</div>
<h3 className="font-title-md text-title-md text-on-surface font-medium">Zero External LLM Training</h3>
<p className="font-body-dense text-body-dense text-on-surface-variant leading-relaxed">
            Cadence utilizes deterministic CP-SAT mathematical solvers — not public LLM APIs. Your recipes and capacities are never fed to foundation models.
          </p>
</div>
<div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col gap-space-sm">
<div className="w-8 h-8 rounded bg-surface-container flex items-center justify-center text-tertiary">
<span className="material-symbols-outlined text-[20px]">verified_user</span>
</div>
<h3 className="font-title-md text-title-md text-on-surface font-medium">SOC 2 Type II &amp; ISO 27001</h3>
<p className="font-body-dense text-body-dense text-on-surface-variant leading-relaxed">
            Audited continuous compliance. AES-256 encryption at rest, TLS 1.3 in transit with granular role-based permissions down to line operators.
          </p>
</div>
<div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col gap-space-sm">
<div className="w-8 h-8 rounded bg-surface-container flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[20px]">api</span>
</div>
<h3 className="font-title-md text-title-md text-on-surface font-medium">Sub-100ms Ingestion APIs</h3>
<p className="font-body-dense text-body-dense text-on-surface-variant leading-relaxed">
            Pre-built bidirectional connectors for SAP S/4HANA (IDocs/OData), Oracle Cloud SCM, and headless webhooks for custom MES/SCADA integration.
          </p>
</div>
</div>
</div>
</section>
{/* Pre-Footer CTA Section */}
<section className="w-full py-20 px-margin">
<div className="max-w-5xl mx-auto bg-surface-container-lowest p-space-xl rounded-xl shadow-md flex flex-col items-center text-center gap-space-lg">
<div className="flex items-center gap-space-xs font-eyebrow text-eyebrow uppercase text-primary">
<span className="material-symbols-outlined text-[16px]">science</span>
<span>Deterministic Proof-of-Concept</span>
</div>
<div className="flex flex-col gap-space-xs max-w-2xl">
<h2 className="font-headline-md text-headline-md text-on-surface tracking-tight">
          Benchmark your line topology against the CP-SAT engine.
        </h2>
<p className="font-body-default text-body-default text-on-surface-variant leading-relaxed">
          Provide an anonymized sample shift workbook (.xlsx) or line changeover matrix. Our operations research engineering team will generate a mathematically verified constraint proof within 24 hours.
        </p>
</div>
<div className="flex flex-col sm:flex-row items-center gap-space-md w-full sm:w-auto">
<a className="w-full sm:w-auto h-11 px-space-xl bg-primary-container hover:bg-primary text-on-primary font-body-dense text-body-dense rounded flex items-center justify-center font-medium shadow-sm transition-colors" href="#">
          Book Technical Evaluation
        </a>
<a className="w-full sm:w-auto h-11 px-space-xl bg-surface-container hover:bg-surface-container-high text-on-surface font-body-dense text-body-dense rounded flex items-center justify-center font-medium shadow-sm transition-colors" href="#">
          Download Solver Architecture Spec (PDF)
        </a>
</div>
<div className="flex items-center gap-space-md text-on-surface-variant font-tabular-mono-dense text-tabular-mono-dense pt-space-xs">
<span className="flex items-center gap-1">
<span className="material-symbols-outlined text-[14px] text-secondary">check</span> NDA Protected
        </span>
<span>•</span>
<span className="flex items-center gap-1">
<span className="material-symbols-outlined text-[14px] text-secondary">check</span> Zero Code Changes Required
        </span>
<span>•</span>
<span className="flex items-center gap-1">
<span className="material-symbols-outlined text-[14px] text-secondary">check</span> 24h Turnaround
        </span>
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
