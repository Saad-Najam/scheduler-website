'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import CadenceHeader from '@/components/CadenceHeader';
import CadenceFooter from '@/components/CadenceFooter';
import CadenceDemoModal from '@/components/CadenceDemoModal';
import { FadeIn, FadeInStagger, FadeInItem } from '@/components/Motion';

type IndustryKey = 'fmcg' | 'pharma' | 'dairy' | 'chem' | 'converting';

interface IndustryData {
  title: string;
  badge: string;
  subtitle: string;
  linesInfo: string;
  solverTime: string;
  image: string;
  facilityLabel: string;
  metrics: {
    label: string;
    icon: string;
    val: string;
    color: string;
    sub: string;
    desc: string;
  }[];
  challenges: {
    title: string;
    desc: string;
    icon: string;
  }[];
  solutions: {
    title: string;
    desc: string;
    icon: string;
    codeTag?: string;
  }[];
  matrixTitle: string;
  matrixHeaders: string[];
  matrixRows: {
    name: string;
    cells: { text: string; bg: string; color: string }[];
    recommendation: string;
  }[];
}

const industries: Record<IndustryKey, IndustryData> = {
  fmcg: {
    title: 'FMCG & Packaged Goods',
    badge: 'FMCG // HIGH-MIX DIVERSE SKU PACKAGING',
    subtitle: 'High-Mix Packaging Lines & Directional Allergen Cycles',
    linesInfo: '16 Lines / 420 SKUs',
    solverTime: '4.2s',
    image: '/images/industry-fmcg.jpg',
    facilityLabel: 'High-Speed Automated Packaging Line',
    metrics: [
      {
        label: 'Sanitation Efficiency',
        icon: 'cleaning_services',
        val: '-42.6%',
        color: 'text-secondary',
        sub: 'Allergen Washdown Non-Productive Hours',
        desc: 'Matrix transition sequencing isolates allergen-heavy SKUs to tail-end runs before weekly deep flushes.',
      },
      {
        label: 'Bottleneck Asset Yield',
        icon: 'speed',
        val: '+14.8%',
        color: 'text-primary',
        sub: 'Bottleneck Line Net Throughput',
        desc: 'Continuous cartoner and case-packer utilization maintained via dynamic buffer staging and pace synchronization.',
      },
      {
        label: 'Financial Impact',
        icon: 'savings',
        val: '$840,000',
        color: 'text-tertiary',
        sub: 'Annual Recaptured Capacity / Facility',
        desc: 'Direct labor overtime reduction combined with reclaimed operational shifts without capital expansion.',
      },
    ],
    challenges: [
      {
        title: 'Sequence-Dependent Allergen Matrices',
        desc: 'Transitions between vanilla, caramel, and nut-loaded recipes require sanitation from 15m dry purge to 4h caustic CIP. Heuristic tools sequence blindly, triggering repeated daily wash shutdowns.',
        icon: 'shuffle',
      },
      {
        title: 'High-Speed Line Starvation',
        desc: 'Packaging lines running 800 packs/min sit idle waiting for upstream batch kettles and cooling tunnels, creating shock waves across cartoning cells.',
        icon: 'hourglass_empty',
      },
      {
        title: 'Changeover Crew Contention',
        desc: 'Only 2 certified mechanical technicians serve 8 parallel packaging lines. Simultaneous changeovers delay line restarts by up to 130 minutes.',
        icon: 'group_off',
      },
      {
        title: 'Intermediate WIP Expiration Limits',
        desc: 'Semi-processed intermediate pastes hold a strict 4-hour shelf-life in holding hoppers. Downstream micro-stops cause entire 1,200 kg batch dumps.',
        icon: 'timer_off',
      },
    ],
    solutions: [
      {
        title: 'N×N Directional Hamiltonian Sub-Tours',
        desc: 'Models changeover costs as an asymmetrical Traveling Salesperson Problem using AddCircuit(). Batches sequence from light to allergen-heavy, compressing global sanitation time by over 40%.',
        icon: 'route',
        codeTag: 'AddCircuit()',
      },
      {
        title: 'Discrete Reservoir Balance Constraints',
        desc: 'Syncs batch cookers with continuous fillers via piecewise continuous mass conservation bounds. Fillers never starve; cooker discharges match dynamic hopper depletion.',
        icon: 'sync_alt',
      },
      {
        title: 'Disjunctive Secondary Resource Bounds',
        desc: 'Changeover tasks require simultaneous line locking and technician pool allocation using AddCumulative(capacity=2). Line shutdowns are systematically staggered.',
        icon: 'engineering',
        codeTag: 'AddCumulative()',
      },
      {
        title: 'Interval Dwell-Time Bounding',
        desc: 'Applies rigid upper-bound distance constraints between cooking completion and filler intake (IntEnd - IntStart ≤ 240m). The solver guarantees zero WIP scrap dumps.',
        icon: 'lock_clock',
        codeTag: 'IntEnd - IntStart ≤ 240m',
      },
    ],
    matrixTitle: 'Allergen Directional Washdown Cost Matrix',
    matrixHeaders: ['FROM / TO SKU', 'SKU-A (Vanilla)', 'SKU-B (Caramel)', 'SKU-C (Milk Choc)', 'SKU-D (Peanut)', 'SKU-E (Dark Choc)', 'Solver Recommendation'],
    matrixRows: [
      {
        name: 'SKU-A (Pure Vanilla)',
        cells: [
          { text: '0m', bg: 'bg-surface-container', color: 'text-outline' },
          { text: '15m (Dry)', bg: 'bg-secondary/15', color: 'text-secondary font-semibold' },
          { text: '25m (Dry)', bg: 'bg-secondary/15', color: 'text-secondary font-semibold' },
          { text: '45m (Water)', bg: 'bg-tertiary/15', color: 'text-tertiary font-semibold' },
          { text: '30m (Dry)', bg: 'bg-tertiary/15', color: 'text-tertiary font-semibold' },
        ],
        recommendation: 'Optimal initial sequence start',
      },
      {
        name: 'SKU-B (Salted Caramel)',
        cells: [
          { text: '60m (Hot CIP)', bg: 'bg-tertiary/15', color: 'text-tertiary font-semibold' },
          { text: '0m', bg: 'bg-surface-container', color: 'text-outline' },
          { text: '15m (Dry)', bg: 'bg-secondary/15', color: 'text-secondary font-semibold' },
          { text: '45m (Water)', bg: 'bg-tertiary/15', color: 'text-tertiary font-semibold' },
          { text: '20m (Dry)', bg: 'bg-secondary/15', color: 'text-secondary font-semibold' },
        ],
        recommendation: 'Route to SKU-C (+15m)',
      },
      {
        name: 'SKU-C (Milk Chocolate)',
        cells: [
          { text: '180m (Caustic)', bg: 'bg-error/15', color: 'text-error font-semibold' },
          { text: '90m (Caustic)', bg: 'bg-tertiary/15', color: 'text-tertiary font-semibold' },
          { text: '0m', bg: 'bg-surface-container', color: 'text-outline' },
          { text: '20m (Dry)', bg: 'bg-secondary/15', color: 'text-secondary font-semibold' },
          { text: '15m (Dry)', bg: 'bg-secondary/15', color: 'text-secondary font-semibold' },
        ],
        recommendation: 'Route to SKU-E (+15m)',
      },
      {
        name: 'SKU-D (Peanut Butter Nut)',
        cells: [
          { text: '240m (Full CIP)', bg: 'bg-error/20', color: 'text-error font-bold' },
          { text: '240m (Full CIP)', bg: 'bg-error/20', color: 'text-error font-bold' },
          { text: '240m (Full CIP)', bg: 'bg-error/20', color: 'text-error font-bold' },
          { text: '0m', bg: 'bg-surface-container', color: 'text-outline' },
          { text: '240m (Full CIP)', bg: 'bg-error/20', color: 'text-error font-bold' },
        ],
        recommendation: 'Terminal shift batch before deep flush',
      },
    ],
  },
  pharma: {
    title: 'Pharma & Life Sciences (GMP)',
    badge: 'PHARMA // GMP STERILE FORMULATION & CLEANROOM',
    subtitle: 'Sterile Compounding, Cleanroom Validation & Lyophilization',
    linesInfo: '12 Cleanrooms / 85 Compounds',
    solverTime: '3.8s',
    image: '/images/industry-pharma.jpg',
    facilityLabel: 'Validated cGMP Cleanroom Formulation',
    metrics: [
      {
        label: 'GMP Hold Violations',
        icon: 'verified',
        val: '0 Breaches',
        color: 'text-secondary',
        sub: '100% Sterile Window Compliance',
        desc: 'Rigid interval constraints guarantee that compounded vials reach lyophilizers before maximum sterile holding decay.',
      },
      {
        label: 'Autoclave Batch Density',
        icon: 'stacked_bar_chart',
        val: '+28.4%',
        color: 'text-primary',
        sub: 'Sterilization Bin Utilization',
        desc: 'Exact knapsack bin-packing algorithms maximize vial volume per autoclave sterilization cycle.',
      },
      {
        label: 'Reclaimed Campaign Value',
        icon: 'payments',
        val: '$1,420,000',
        color: 'text-tertiary',
        sub: 'Annual Waste & Scrapped Batches Prevented',
        desc: 'Eliminates discarded active pharmaceutical ingredients caused by downstream autoclave line delays.',
      },
    ],
    challenges: [
      {
        title: 'Tight Sterile Holding Time Limits',
        desc: 'Liquid formulations spoil if not frozen or sterilized within strict 4-to-6 hour windows, risking $200k+ batch write-offs.',
        icon: 'alarm',
      },
      {
        title: 'Campaign Size Regulatory Limits',
        desc: 'FDA validation requires maximum allowable batch runs before compulsory deep sterilization and HEPA swab validation.',
        icon: 'gavel',
      },
      {
        title: 'Lyophilizer Cycle Imbalances',
        desc: 'Freeze dryers operate on 48-hour continuous cycles while formulation mixers run in 4-hour pulses, creating acute bottleneck buffers.',
        icon: 'ac_unit',
      },
      {
        title: 'Qualified Personnel Dependencies',
        desc: 'Sterile sampling requires certified QA personnel present at exact stage transitions, causing frequent micro-delays.',
        icon: 'badge',
      },
    ],
    solutions: [
      {
        title: 'Hard Window Disjunctive Constraints',
        desc: 'Enforces strict upper bounds on transfer times between formulation vessels and sterile filling isolators with zero buffer leakage.',
        icon: 'timer',
        codeTag: 'AddInterval()',
      },
      {
        title: 'Multi-Batch Lyophilizer Packing',
        desc: 'Coordinates multiple parallel formulation reactors to fill freeze dryer trays simultaneously, eliminating partial-load wasted runs.',
        icon: 'view_module',
      },
      {
        title: 'Automated Regulatory Campaign Reset',
        desc: 'Enforces mandatory line purge after exact SKU run quantities, automatically generating auditable compliance manifests.',
        icon: 'rule',
        codeTag: 'AddCumulative()',
      },
      {
        title: 'Deterministic QA Shift Pairing',
        desc: 'Binds authorized QA signoff intervals directly into the mathematical job graph, ensuring seamless inspection handoffs.',
        icon: 'verified_user',
      },
    ],
    matrixTitle: 'Cross-Contamination & Sterility Cleanout Matrix',
    matrixHeaders: ['COMPOUND CLASS', 'Class A (Saline)', 'Class B (Antibiotic)', 'Class C (Biologic)', 'Class D (Cytotoxic)', 'Solver Recommendation'],
    matrixRows: [
      {
        name: 'Class A (Saline Diluent)',
        cells: [
          { text: '0m', bg: 'bg-surface-container', color: 'text-outline' },
          { text: '45m (WFI Flush)', bg: 'bg-secondary/15', color: 'text-secondary font-semibold' },
          { text: '60m (SIP Rinse)', bg: 'bg-tertiary/15', color: 'text-tertiary font-semibold' },
          { text: '180m (Decontamination)', bg: 'bg-error/15', color: 'text-error font-semibold' },
        ],
        recommendation: 'Optimal campaign opener',
      },
      {
        name: 'Class B (Antibiotic)',
        cells: [
          { text: '120m (Deactivation)', bg: 'bg-error/15', color: 'text-error font-semibold' },
          { text: '0m', bg: 'bg-surface-container', color: 'text-outline' },
          { text: '90m (SIP Rinse)', bg: 'bg-tertiary/15', color: 'text-tertiary font-semibold' },
          { text: '180m (Decontamination)', bg: 'bg-error/15', color: 'text-error font-semibold' },
        ],
        recommendation: 'Sequence to Class C',
      },
      {
        name: 'Class D (Cytotoxic Active)',
        cells: [
          { text: '360m (Toxic Wash)', bg: 'bg-error/25', color: 'text-error font-bold' },
          { text: '360m (Toxic Wash)', bg: 'bg-error/25', color: 'text-error font-bold' },
          { text: '360m (Toxic Wash)', bg: 'bg-error/25', color: 'text-error font-bold' },
          { text: '0m', bg: 'bg-surface-container', color: 'text-outline' },
        ],
        recommendation: 'Lock to campaign finish before facility swab',
      },
    ],
  },
  dairy: {
    title: 'Food & Beverage / Dairy',
    badge: 'FOOD & BEVERAGE // PERISHABLE COLD CHAIN',
    subtitle: 'Pasteurization Loops, Cheese Vats & Dynamic Silo Buffers',
    linesInfo: '18 Lines / 210 SKUs',
    solverTime: '3.4s',
    image: '/images/industry-dairy.jpg',
    facilityLabel: 'Continuous Hygienic CIP Pasteurization Plant',
    metrics: [
      {
        label: 'Caustic CIP Waste',
        icon: 'water_drop',
        val: '-38.2%',
        color: 'text-secondary',
        sub: 'Clean-In-Place Cycle Water & Acid',
        desc: 'Sequences lighter dairy fats before heavy creams, avoiding deep caustic line sanitations between shifts.',
      },
      {
        label: 'Intake Spoilage',
        icon: 'agriculture',
        val: '0 Gallons',
        color: 'text-primary',
        sub: 'Raw Milk Holding Decay Prevented',
        desc: 'Dynamically routes incoming tanker loads straight to active separator circuits without buffer overflow.',
      },
      {
        label: 'Pasteurizer OEE',
        icon: 'thermostat',
        val: '+12.4%',
        color: 'text-tertiary',
        sub: 'HTST Continuous Run Uptime',
        desc: 'Maintains constant thermal equilibrium, minimizing disruptive shutdowns and temperature recalibration delays.',
      },
    ],
    challenges: [
      {
        title: '48-Hour Raw Milk Expiration',
        desc: 'Incoming raw dairy tankers arrive continuously; milk holding silos must empty and sanitize within rigid biological expiry windows.',
        icon: 'local_shipping',
      },
      {
        title: 'Thermal Pasteurizer Fouling',
        desc: 'High-heat thermal processing burns milk proteins onto heat exchanger plates over time, degrading efficiency after 10 hours.',
        icon: 'heat_pump',
      },
      {
        title: 'Shared Multi-Tank CIP Loops',
        desc: 'Only 3 automated clean-in-place skids serve 14 storage tanks and 6 bottling lines, causing severe sanitizing traffic jams.',
        icon: 'plumbing',
      },
      {
        title: 'Fat & Allergen Progression',
        desc: 'Running skim milk after chocolate or almond milk requires a 2-hour caustic chemical washdown; poor sequencing paralyzes lines.',
        icon: 'science',
      },
    ],
    solutions: [
      {
        title: 'Dynamic Silo Fluid Conservation',
        desc: 'Continuous differential balance equations schedule HTST pasteurization runs directly against milk tanker arrival schedules.',
        icon: 'water',
        codeTag: 'ReservoirConstraint()',
      },
      {
        title: 'Fouling-Aware Sequence Pacing',
        desc: 'Models thermal efficiency decay as an accumulated workload function, systematically scheduling mini-rinses at lowest-impact slots.',
        icon: 'equalizer',
      },
      {
        title: 'Multi-Resource CIP Reservation Graph',
        desc: 'Locks CIP skid circuits, transfer pipes, and drain valves simultaneously, preventing chemical collision and line idling.',
        icon: 'alt_route',
        codeTag: 'AddCumulative()',
      },
      {
        title: 'Fat-Gradient Ascending Dispatch',
        desc: 'Guarantees batches sequence strictly from lowest fat to highest fat (Skim → 2% → Whole → Heavy Cream → Chocolate).',
        icon: 'trending_up',
      },
    ],
    matrixTitle: 'Dairy Cleanout & Fat Transition Matrix',
    matrixHeaders: ['FROM / TO PRODUCT', 'Skim Milk', 'Whole Milk', 'Cream 35%', 'Chocolate Milk', 'Solver Recommendation'],
    matrixRows: [
      {
        name: 'Skim Milk (0% Fat)',
        cells: [
          { text: '0m', bg: 'bg-surface-container', color: 'text-outline' },
          { text: '10m (Water Push)', bg: 'bg-secondary/15', color: 'text-secondary font-semibold' },
          { text: '20m (Water Push)', bg: 'bg-secondary/15', color: 'text-secondary font-semibold' },
          { text: '35m (Flush)', bg: 'bg-tertiary/15', color: 'text-tertiary font-semibold' },
        ],
        recommendation: 'Optimal sequence opener',
      },
      {
        name: 'Whole Milk (3.5% Fat)',
        cells: [
          { text: '45m (Hot CIP)', bg: 'bg-tertiary/15', color: 'text-tertiary font-semibold' },
          { text: '0m', bg: 'bg-surface-container', color: 'text-outline' },
          { text: '15m (Water Push)', bg: 'bg-secondary/15', color: 'text-secondary font-semibold' },
          { text: '30m (Flush)', bg: 'bg-tertiary/15', color: 'text-tertiary font-semibold' },
        ],
        recommendation: 'Forward to Cream',
      },
      {
        name: 'Chocolate Milk (Sugar/Cocoa)',
        cells: [
          { text: '120m (Caustic CIP)', bg: 'bg-error/20', color: 'text-error font-bold' },
          { text: '120m (Caustic CIP)', bg: 'bg-error/20', color: 'text-error font-bold' },
          { text: '120m (Caustic CIP)', bg: 'bg-error/20', color: 'text-error font-bold' },
          { text: '0m', bg: 'bg-surface-container', color: 'text-outline' },
        ],
        recommendation: 'Run at shift conclusion before sanitation',
      },
    ],
  },
  chem: {
    title: 'Chemicals & Continuous Resins',
    badge: 'CHEMICALS // EXOTHERMIC REACTORS & BATCH POLYMERS',
    subtitle: 'Viscosity Gradients, Exothermic Dwell & Hazard Segregation',
    linesInfo: '10 Reactors / 160 Formulations',
    solverTime: '4.8s',
    image: '/images/industry-chemicals.jpg',
    facilityLabel: 'Continuous Polymer & Resin Reactor Facility',
    metrics: [
      {
        label: 'Hazard Flush Waste',
        icon: 'delete_sweep',
        val: '-51.0%',
        color: 'text-secondary',
        sub: 'Solvent Neutralization Volume Saved',
        desc: 'Sequencing formulations along compatible chemical matrix ladders minimizes toxic solvent rinses.',
      },
      {
        label: 'Reactor Turnaround',
        icon: 'cached',
        val: '+22.5%',
        color: 'text-primary',
        sub: 'Annual Vessel Cycle Capacity',
        desc: 'Coordinates cooling jacket dwell times with raw reagent pre-heating to compress batch idle states.',
      },
      {
        label: 'Hazardous Waste Cost',
        icon: 'eco',
        val: '-$620,000',
        color: 'text-tertiary',
        sub: 'Neutralization & Disposal Expenses',
        desc: 'Substantial savings in chemical waste destruction and environmental compliance fees.',
      },
    ],
    challenges: [
      {
        title: 'Viscosity & Color Contamination',
        desc: 'Dark pigments and high-viscosity resins adhere to reactor walls; cleaning takes 8+ hours if not sequenced progressively.',
        icon: 'invert_colors',
      },
      {
        title: 'Exothermic Cooling Jacket Delays',
        desc: 'Reactors must cool down following exothermic polymerizations before loading sensitive monomer catalysts.',
        icon: 'thermostat_down',
      },
      {
        title: 'Incompatible Chemistry Separation',
        desc: 'Certain acid/alkaline recipes cannot run back-to-back without full passivation to prevent dangerous chemical reactions.',
        icon: 'warning',
      },
      {
        title: 'Storage Tank Holding Capacities',
        desc: 'Finished bulk resin tanks have finite volume; reactor dumps are delayed if downstream tanker pumping lags.',
        icon: 'storage',
      },
    ],
    solutions: [
      {
        title: 'Viscosity Delta Traveling Salesman TSP',
        desc: 'Formulates polymer job batches on a cost graph that penalizes high-to-low viscosity and dark-to-light pigment transitions.',
        icon: 'timeline',
        codeTag: 'AddCircuit()',
      },
      {
        title: 'Piecewise Cooling Decay Curves',
        desc: 'Calculates heat dissipation curves dynamically, unlocking reactors the exact minute safe introduction temperatures are met.',
        icon: 'device_thermostat',
      },
      {
        title: 'Strict Disjunctive Passivation Bounds',
        desc: 'Injects mandatory chemical neutralizer intervals between incompatible recipe families, eliminating cross-reaction risks.',
        icon: 'security',
      },
      {
        title: 'Tanker Pumping Schedule Synchronization',
        desc: 'Coordinates batch drop times with bulk liquid carrier dispatch schedules to keep holding tanks fluid.',
        icon: 'local_shipping',
      },
    ],
    matrixTitle: 'Polymer Transition & Solvent Flush Matrix',
    matrixHeaders: ['FROM / TO RESIN', 'Clear Base (Visc 10)', 'Semi-Gloss (Visc 40)', 'Enamel (Visc 120)', 'Black Tar (Visc 500)', 'Solver Recommendation'],
    matrixRows: [
      {
        name: 'Clear Base Resin',
        cells: [
          { text: '0m', bg: 'bg-surface-container', color: 'text-outline' },
          { text: '15m (Rinse)', bg: 'bg-secondary/15', color: 'text-secondary font-semibold' },
          { text: '30m (Purge)', bg: 'bg-secondary/15', color: 'text-secondary font-semibold' },
          { text: '45m (Flush)', bg: 'bg-tertiary/15', color: 'text-tertiary font-semibold' },
        ],
        recommendation: 'Optimal cycle anchor',
      },
      {
        name: 'Semi-Gloss Formulation',
        cells: [
          { text: '120m (Solvent CIP)', bg: 'bg-tertiary/15', color: 'text-tertiary font-semibold' },
          { text: '0m', bg: 'bg-surface-container', color: 'text-outline' },
          { text: '20m (Rinse)', bg: 'bg-secondary/15', color: 'text-secondary font-semibold' },
          { text: '30m (Flush)', bg: 'bg-secondary/15', color: 'text-secondary font-semibold' },
        ],
        recommendation: 'Advance to Enamel',
      },
      {
        name: 'Black Tar Pitch',
        cells: [
          { text: '360m (Deep Solvent)', bg: 'bg-error/20', color: 'text-error font-bold' },
          { text: '300m (Deep Solvent)', bg: 'bg-error/20', color: 'text-error font-bold' },
          { text: '240m (Solvent CIP)', bg: 'bg-error/15', color: 'text-error font-semibold' },
          { text: '0m', bg: 'bg-surface-container', color: 'text-outline' },
        ],
        recommendation: 'Terminal weekly campaign batch',
      },
    ],
  },
  converting: {
    title: 'Precision Converting & Packaging',
    badge: 'CONVERTING // DIE CUTTING, SLITTING & EXTRUSION',
    subtitle: 'Multi-Spindle Tooling, Web Width Knapsack & Slitter Changes',
    linesInfo: '14 Slitters / 520 Formats',
    solverTime: '3.6s',
    image: '/images/industry-converting.jpg',
    facilityLabel: 'High-Speed Precision Web Slitting & Die Press',
    metrics: [
      {
        label: 'Die Setup Downtime',
        icon: 'precision_manufacturing',
        val: '-46.5%',
        color: 'text-secondary',
        sub: 'Tooling Cylinder & Die Swaps',
        desc: 'Clusters orders with identical die teeth and blade repeat patterns to prevent unnecessary tooling teardowns.',
      },
      {
        label: 'Trim Waste Reduction',
        icon: 'content_cut',
        val: '-28.0%',
        color: 'text-primary',
        sub: 'Web Edge & Splice Scrap Reclaimed',
        desc: 'Exact 1D/2D knapsack pattern matching groups slitting widths to maximize raw parent roll edge-to-edge yield.',
      },
      {
        label: 'Effective Capacity',
        icon: 'upgrade',
        val: '+18.2%',
        color: 'text-tertiary',
        sub: 'Reclaimed Line Running Hours',
        desc: 'Allows packaging plants to fulfill rush jobs without rescheduling parent film extrusion schedules.',
      },
    ],
    challenges: [
      {
        title: 'Frequent Slitter Blade Adjustments',
        desc: 'Manual knife repositioning for custom web widths takes 45-90 minutes per SKU run, draining machine availability.',
        icon: 'straighten',
      },
      {
        title: 'Master Roll Width Mismatches',
        desc: 'Poor order grouping causes excessive edge trim scrap (up to 12% raw film lost per master roll).',
        icon: 'layers_clear',
      },
      {
        title: 'Heavy Magnetic Cylinder Swaps',
        desc: 'Rotary die cylinders weigh over 80kg; changing cylinders requires overhead hoist cranes and 2 operators.',
        icon: 'build',
      },
      {
        title: 'Core Size & Turret Synchrony',
        desc: 'Switching between 3-inch and 6-inch cardboard winding cores halts continuous web rewinders.',
        icon: 'sync_problem',
      },
    ],
    solutions: [
      {
        title: 'Continuous 1D Knapsack Slit Combiner',
        desc: 'Optimizes order combinations across the master web width simultaneously, minimizing edge-trim scrap to under 1.8%.',
        icon: 'view_week',
        codeTag: 'KnapsackSolver()',
      },
      {
        title: 'Tooling Repeat Match Clustering',
        desc: 'Groups work orders with identical cylinder circumference repeats, reducing mechanical die swaps by over 50%.',
        icon: 'repeat',
      },
      {
        title: 'Crane & Hoist Resource Locking',
        desc: 'Enforces cumulative constraint bounds on shared overhead hoists to prevent multiple lines jamming during die swaps.',
        icon: 'handyman',
        codeTag: 'AddCumulative()',
      },
      {
        title: 'Core Size Campaign Partitioning',
        desc: 'Schedules jobs in batches matching winder spindle core dimensions to avoid mid-shift winder rebuilds.',
        icon: 'view_agenda',
      },
    ],
    matrixTitle: 'Slitter Die & Knife Width Transition Matrix',
    matrixHeaders: ['FROM / TO FORMAT', 'Width 250mm', 'Width 500mm', 'Width 750mm', 'Custom Die 1200mm', 'Solver Recommendation'],
    matrixRows: [
      {
        name: 'Width 250mm (Standard)',
        cells: [
          { text: '0m', bg: 'bg-surface-container', color: 'text-outline' },
          { text: '15m (Knife shift)', bg: 'bg-secondary/15', color: 'text-secondary font-semibold' },
          { text: '30m (Knife shift)', bg: 'bg-secondary/15', color: 'text-secondary font-semibold' },
          { text: '75m (Cylinder swap)', bg: 'bg-error/15', color: 'text-error font-semibold' },
        ],
        recommendation: 'Optimal web starter',
      },
      {
        name: 'Width 500mm (Double)',
        cells: [
          { text: '20m (Knife shift)', bg: 'bg-secondary/15', color: 'text-secondary font-semibold' },
          { text: '0m', bg: 'bg-surface-container', color: 'text-outline' },
          { text: '15m (Knife shift)', bg: 'bg-secondary/15', color: 'text-secondary font-semibold' },
          { text: '75m (Cylinder swap)', bg: 'bg-error/15', color: 'text-error font-semibold' },
        ],
        recommendation: 'Route to 750mm',
      },
      {
        name: 'Custom Die 1200mm',
        cells: [
          { text: '90m (Teardown)', bg: 'bg-error/20', color: 'text-error font-bold' },
          { text: '90m (Teardown)', bg: 'bg-error/20', color: 'text-error font-bold' },
          { text: '90m (Teardown)', bg: 'bg-error/20', color: 'text-error font-bold' },
          { text: '0m', bg: 'bg-surface-container', color: 'text-outline' },
        ],
        recommendation: 'Cluster all 1200mm orders into single campaign',
      },
    ],
  },
};

export default function IndustriesPage() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<IndustryKey>('fmcg');

  const cur = industries[activeTab];

  return (
    <div className="min-h-screen bg-surface text-on-surface flex flex-col selection:bg-primary/20 transition-colors">
      <CadenceHeader onOpenDemoModal={() => setIsDemoModalOpen(true)} />

      <main className="w-full pt-16 bg-surface flex-1">
        {/* Hero Section - Clean, Spacious, Well-Padded */}
        <section className="w-full relative overflow-hidden bg-surface py-16 sm:py-20 lg:py-24 border-b border-outline-variant/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-8">
            <FadeIn>
              <div className="flex flex-col gap-4 max-w-4xl">
                <div className="inline-flex items-center gap-2 self-start px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary font-eyebrow text-xs uppercase tracking-wider font-semibold">
                  <span className="w-2 h-2 rounded-full bg-secondary inline-block animate-pulse"></span>
                  <span>Target Manufacturing Industries · CP-SAT Discrete Time Active</span>
                </div>

                <h1 className="font-display font-bold text-3xl sm:text-5xl lg:text-6xl text-on-surface tracking-tight leading-[1.1]">
                  Target Industries &amp; Specialized Manufacturing Topologies.
                </h1>

                <p className="text-base sm:text-lg text-on-surface-variant max-w-3xl leading-relaxed mt-1">
                  Discover how the Cadence APS platform solves shop-floor constraints across our target manufacturing industries — from multi-hour caustic CIP washdowns in FMCG and Food &amp; Beverage to strict cleanroom sterile holding decay in Pharmaceuticals, polymer viscosities in Chemicals, and high-speed converting tooling.
                </p>
              </div>
            </FadeIn>

            {/* Interactive Vertical Switcher Nav - Spacious Pills with Smooth Active State */}
            <FadeIn delay={0.1}>
              <div className="w-full bg-surface-container p-2 rounded-2xl flex items-center gap-2 overflow-x-auto border border-outline-variant/50 shadow-inner">
                <button
                  onClick={() => setActiveTab('fmcg')}
                  className={`px-4 sm:px-5 py-3 rounded-xl font-medium text-sm flex items-center gap-2.5 transition-all whitespace-nowrap ${
                    activeTab === 'fmcg'
                      ? 'bg-surface text-primary shadow-sm font-semibold'
                      : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high'
                  }`}
                  type="button"
                >
                  <span className="material-symbols-outlined text-[18px]">conveyor_belt</span>
                  <span>FMCG & Packaged Goods</span>
                </button>

                <button
                  onClick={() => setActiveTab('pharma')}
                  className={`px-4 sm:px-5 py-3 rounded-xl font-medium text-sm flex items-center gap-2.5 transition-all whitespace-nowrap ${
                    activeTab === 'pharma'
                      ? 'bg-surface text-primary shadow-sm font-semibold'
                      : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high'
                  }`}
                  type="button"
                >
                  <span className="material-symbols-outlined text-[18px]">vaccines</span>
                  <span>Pharma & Life Sciences</span>
                </button>

                <button
                  onClick={() => setActiveTab('dairy')}
                  className={`px-4 sm:px-5 py-3 rounded-xl font-medium text-sm flex items-center gap-2.5 transition-all whitespace-nowrap ${
                    activeTab === 'dairy'
                      ? 'bg-surface text-primary shadow-sm font-semibold'
                      : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high'
                  }`}
                  type="button"
                >
                  <span className="material-symbols-outlined text-[18px]">water_bottle</span>
                  <span>Food & Dairy</span>
                </button>

                <button
                  onClick={() => setActiveTab('chem')}
                  className={`px-4 sm:px-5 py-3 rounded-xl font-medium text-sm flex items-center gap-2.5 transition-all whitespace-nowrap ${
                    activeTab === 'chem'
                      ? 'bg-surface text-primary shadow-sm font-semibold'
                      : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high'
                  }`}
                  type="button"
                >
                  <span className="material-symbols-outlined text-[18px]">science</span>
                  <span>Chemicals & Resins</span>
                </button>

                <button
                  onClick={() => setActiveTab('converting')}
                  className={`px-4 sm:px-5 py-3 rounded-xl font-medium text-sm flex items-center gap-2.5 transition-all whitespace-nowrap ${
                    activeTab === 'converting'
                      ? 'bg-surface text-primary shadow-sm font-semibold'
                      : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high'
                  }`}
                  type="button"
                >
                  <span className="material-symbols-outlined text-[18px]">view_column</span>
                  <span>Precision Converting</span>
                </button>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Dynamic Vertical Showcase Section */}
        <AnimatePresence mode="wait">
          <motion.section
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="w-full bg-surface-container-lowest py-16 sm:py-20 lg:py-24"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12 lg:gap-16">
              {/* Header with Badges and Solve Time */}
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 pb-6 border-b border-outline-variant/40">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-3">
                    <span className="font-eyebrow text-xs uppercase px-2.5 py-1 rounded-md bg-primary text-white font-semibold">
                      Featured Vertical
                    </span>
                    <span className="font-mono text-xs text-on-surface-variant">
                      {cur.badge}
                    </span>
                  </div>
                  <h2 className="font-display font-bold text-2xl sm:text-4xl text-on-surface tracking-tight">
                    {cur.subtitle}
                  </h2>
                </div>

                <div className="flex items-center gap-3 flex-wrap">
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-surface-container rounded-lg font-mono text-xs text-on-surface border border-outline-variant/40">
                    <span className="material-symbols-outlined text-[16px] text-primary">hub</span>
                    <span>{cur.linesInfo}</span>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-surface-container rounded-lg font-mono text-xs text-secondary border border-outline-variant/40">
                    <span className="material-symbols-outlined text-[16px]">check_circle</span>
                    <span>CP-SAT Solved in <strong>{cur.solverTime}</strong></span>
                  </div>
                </div>
              </div>

              {/* Industry Facility Imagery Banner - Purposeful & Atmospheric */}
              <div className="relative w-full h-52 sm:h-64 lg:h-72 rounded-2xl overflow-hidden border border-outline-variant/50 shadow-md group">
                <img
                  src={cur.image}
                  alt={cur.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-95 dark:brightness-90"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent flex flex-col justify-end p-6 sm:p-8">
                  <div className="flex items-center justify-between gap-4 flex-wrap">
                    <div className="flex items-center gap-2.5 text-white text-xs font-mono">
                      <span className="w-2.5 h-2.5 rounded-full bg-secondary animate-pulse"></span>
                      <span className="uppercase tracking-wider font-semibold">{cur.facilityLabel}</span>
                    </div>
                    <span className="text-[11px] font-mono text-white/90 bg-black/50 px-3 py-1 rounded-md backdrop-blur-md border border-white/15">
                      CP-SAT Active Topology
                    </span>
                  </div>
                </div>
              </div>

              {/* 3 Telemetry Metrics Cards - Spacious & Elegant */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {cur.metrics.map((m, idx) => (
                  <div
                    key={idx}
                    className="p-6 sm:p-8 bg-surface-container-low border border-outline-variant/50 rounded-2xl flex flex-col gap-3 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-primary/40"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs text-on-surface-variant uppercase tracking-wider font-medium">
                        {m.label}
                      </span>
                      <span className="material-symbols-outlined text-[22px] text-primary opacity-80">
                        {m.icon}
                      </span>
                    </div>
                    <div className={`font-display text-4xl sm:text-5xl tracking-tight font-extrabold ${m.color}`}>
                      {m.val}
                    </div>
                    <span className="font-mono text-xs text-on-surface font-medium">
                      {m.sub}
                    </span>
                    <p className="text-sm text-on-surface-variant leading-relaxed pt-1">
                      {m.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* Comparative Architecture: Challenge vs Solution */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 min-w-0">
                {/* Challenge Column */}
                <div className="p-6 sm:p-8 bg-surface-container rounded-2xl flex flex-col gap-6 border border-outline-variant/50 shadow-sm">
                  <div className="flex items-center justify-between pb-2 border-b border-outline-variant/40">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-error text-[22px]">warning</span>
                      <h3 className="font-display font-semibold text-xl text-on-surface">The Plant Floor Challenge</h3>
                    </div>
                    <span className="font-mono text-xs text-error bg-error/10 px-2.5 py-0.5 rounded-full uppercase font-semibold">
                      Physical Bottlenecks
                    </span>
                  </div>

                  <div className="space-y-4">
                    {cur.challenges.map((c, idx) => (
                      <div key={idx} className="p-4 bg-surface-container-lowest rounded-xl border border-outline-variant/30 shadow-sm">
                        <div className="flex items-center gap-2 text-on-surface font-semibold text-base mb-1">
                          <span className="material-symbols-outlined text-[18px] text-error">{c.icon}</span>
                          <span>{c.title}</span>
                        </div>
                        <p className="text-sm text-on-surface-variant leading-relaxed pl-6">
                          {c.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Solution Column */}
                <div className="p-6 sm:p-8 bg-surface-container-low rounded-2xl flex flex-col gap-6 border border-outline-variant/50 shadow-sm">
                  <div className="flex items-center justify-between pb-2 border-b border-outline-variant/40">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary text-[22px]">functions</span>
                      <h3 className="font-display font-semibold text-xl text-on-surface">How Cadence Solves It</h3>
                    </div>
                    <span className="font-mono text-xs text-primary bg-primary/10 px-2.5 py-0.5 rounded-full uppercase font-semibold">
                      Exact CP-SAT Formulation
                    </span>
                  </div>

                  <div className="space-y-4">
                    {cur.solutions.map((s, idx) => (
                      <div key={idx} className="p-4 bg-surface-container-lowest rounded-xl border border-outline-variant/30 shadow-sm">
                        <div className="flex items-center gap-2 text-on-surface font-semibold text-base mb-1">
                          <span className="material-symbols-outlined text-[18px] text-primary">{s.icon}</span>
                          <span>{s.title}</span>
                        </div>
                        <p className="text-sm text-on-surface-variant leading-relaxed pl-6">
                          {s.desc}
                        </p>
                        {s.codeTag && (
                          <div className="pl-6 mt-2">
                            <code className="font-mono text-xs text-primary bg-primary/10 px-2 py-0.5 rounded">
                              {s.codeTag}
                            </code>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Interactive Matrix Visual Grid */}
              <div className="p-6 sm:p-8 bg-surface-container-low border border-outline-variant/50 rounded-2xl flex flex-col gap-6 shadow-sm">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <span className="font-mono text-xs text-primary uppercase font-semibold tracking-wider">
                      Interactive Sequence Matrix
                    </span>
                    <h4 className="font-display font-bold text-xl text-on-surface mt-1">
                      {cur.matrixTitle}
                    </h4>
                    <p className="text-sm text-on-surface-variant mt-1">
                      Hover transition cells to inspect changeover durations, flush penalties, and optimal solver dispatch routes.
                    </p>
                  </div>
                  <div className="flex items-center gap-4 text-xs font-mono text-on-surface-variant flex-wrap">
                    <span className="inline-flex items-center gap-1.5">
                      <span className="w-3 h-3 rounded bg-secondary/30 inline-block"></span>
                      <span>Minimal Delta</span>
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <span className="w-3 h-3 rounded bg-tertiary/30 inline-block"></span>
                      <span>Moderate Cleanout</span>
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <span className="w-3 h-3 rounded bg-error/30 inline-block"></span>
                      <span>Deep Wash / CIP</span>
                    </span>
                  </div>
                </div>

                <div className="overflow-x-auto rounded-xl border border-outline-variant/40">
                  <table className="w-full text-left font-mono text-xs">
                    <thead>
                      <tr className="text-on-surface-variant uppercase bg-surface-container border-b border-outline-variant/40">
                        {cur.matrixHeaders.map((h, idx) => (
                          <th key={idx} className={`p-3 font-semibold ${idx > 0 ? 'text-center' : ''}`}>
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-outline-variant/30">
                      {cur.matrixRows.map((row, idx) => (
                        <tr key={idx} className="hover:bg-surface-container transition-colors">
                          <td className="p-3 font-medium text-on-surface bg-surface-container/50">
                            {row.name}
                          </td>
                          {row.cells.map((cell, cIdx) => (
                            <td key={cIdx} className={`p-3 text-center ${cell.bg} ${cell.color}`}>
                              {cell.text}
                            </td>
                          ))}
                          <td className="p-3 text-center text-primary font-medium">
                            {row.recommendation}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Bottom CTA Banner */}
              <div className="p-8 sm:p-12 rounded-2xl bg-surface-container border border-outline-variant/50 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex flex-col gap-2 max-w-xl">
                  <h3 className="font-display font-bold text-2xl text-on-surface">
                    Run the solver on your plant topology
                  </h3>
                  <p className="text-sm text-on-surface-variant">
                    Send us your changeover matrix and work orders workbook. We will return an optimal schedule comparison in 24 hours.
                  </p>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  <button
                    onClick={() => setIsDemoModalOpen(true)}
                    className="h-11 px-6 bg-primary hover:bg-primary-container text-white font-medium text-sm rounded-xl shadow-md transition-all active:scale-95"
                    type="button"
                  >
                    Schedule Topology Pilot
                  </button>
                  <Link
                    href="/roi-calculator"
                    className="h-11 px-5 bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-medium text-sm rounded-xl transition-all flex items-center"
                  >
                    Calculate Plant ROI
                  </Link>
                </div>
              </div>
            </div>
          </motion.section>
        </AnimatePresence>
      </main>

      <CadenceFooter />
      <CadenceDemoModal isOpen={isDemoModalOpen} onClose={() => setIsDemoModalOpen(false)} />
    </div>
  );
}
