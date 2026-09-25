'use client';
import React, { useState } from 'react';

const features = [
  {
    id: 'capacity',
    icon: '▦',
    title: 'Finite Capacity Scheduling',
    subtitle: 'Core Engine v4.0',
    headline: 'Never overbook your shop floor',
    desc: "Unlike MRP systems that assume infinite resources, OptiSched knows exactly what's available — machines, tooling, labor certifications, fixturing — and schedules everything simultaneously.",
    points: [
      'Multi-resource constraints resolved simultaneously',
      'Attribute-based sequencing minimizes setup waste',
      'Dynamic shift calendars with maintenance reservations',
      'Material availability pegging with ERP purchase orders',
    ],
    metric1: { v: '45%', l: 'Setup Reduction' },
    metric2: { v: '99.8%', l: 'OTIF Rate' },
  },
  {
    id: 'twin',
    icon: '⟳',
    title: 'What-If Digital Twin',
    subtitle: 'Scenario Modeling',
    headline: 'Test every decision before you make it',
    desc: 'Run parallel simulations for machine breakdowns, rush orders, or supply shortages. Compare OEE, WIP cost, and late hours side-by-side. Then publish the winning schedule with one click.',
    points: [
      'Side-by-side KPI comparison across multiple scenarios',
      'Full rollback and audit trail for every schedule change',
      'Automated scenario scoring by margin and customer priority',
      'Export to PDF, Excel, or direct shop floor tablets',
    ],
    metric1: { v: '<400ms', l: 'Scenario Calculation' },
    metric2: { v: '10×', l: 'Faster Decisions' },
  },
  {
    id: 'ai',
    icon: '◈',
    title: 'AI Bottleneck Predictor',
    subtitle: 'Neural AI Engine',
    headline: 'Spot tomorrow\'s problems today',
    desc: 'Machine learning models continuously watch order flow velocity and automatically flag queue buildup 48 hours before it becomes a late delivery.',
    points: [
      'Predictive queue depth forecasting per work center',
      'Automated changeover clustering for similar materials',
      'Smart buffer sizing via Theory of Constraints rules',
      'Natural language daily schedule brief generation',
    ],
    metric1: { v: '98.6%', l: 'Predictive Accuracy' },
    metric2: { v: '−62%', l: 'Unplanned Idle' },
  },
  {
    id: 'erp',
    icon: '⇄',
    title: 'Live ERP / MES Sync',
    subtitle: 'Enterprise Connectors',
    headline: 'Your entire stack, fully synchronized',
    desc: 'Bi-directional real-time sync keeps sales orders, schedule priorities, and shop floor actuals in perfect alignment — automatically, without data entry delays.',
    points: [
      'Native SAP S/4HANA, NetSuite, and Dynamics 365 adapters',
      'Sub-200ms REST & GraphQL webhook pipeline',
      'Field-level conflict resolution and validation',
      'Mobile barcode scan for operator job tracking',
    ],
    metric1: { v: '<200ms', l: 'Sync Latency' },
    metric2: { v: '45+', l: 'Connectors Built' },
  },
];

export default function FeatureShowcase() {
  const [active, setActive] = useState(features[0].id);
  const feat = features.find(f => f.id === active)!;

  return (
    <section id="features" className="section section-alt">
      <div className="wrap">

        <div className="section-head">
          <div className="section-label">Product Capabilities</div>
          <h2 className="h2">Built for high-complexity manufacturing</h2>
          <p className="lead" style={{ marginTop: 12 }}>
            Everything legacy APS promised — re-engineered with AI speed and a modern interface.
          </p>
        </div>

        {/* Tab row */}
        <div className="grid-4" style={{ marginBottom: 28 }}>
          {features.map(f => (
            <button key={f.id} onClick={() => setActive(f.id)}
              className={`ftab${f.id === active ? ' active' : ''}`}>
              <div style={{
                width: 28, height: 28, borderRadius: 7, marginBottom: 6,
                background: f.id === active ? 'var(--blue-600)' : 'var(--bg-tertiary)',
                color: f.id === active ? '#fff' : 'var(--text-tertiary)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 14, fontWeight: 700,
              }}>
                {f.icon}
              </div>
              <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--text-primary)', lineHeight: 1.3 }}>
                {f.title}
              </div>
              <div className="caption" style={{ fontSize: 10, color: f.id === active ? 'var(--accent)' : 'var(--text-tertiary)' }}>
                {f.subtitle}
              </div>
            </button>
          ))}
        </div>

        {/* Detail panel */}
        <div className="card-elevated" style={{ padding: '36px 40px' }}>
          <div className="grid-2" style={{ gap: 48, alignItems: 'start' }}>

            <div>
              <div className="section-label" style={{ marginBottom: 14 }}>Module Specification</div>
              <h3 className="h3" style={{ fontSize: 24, marginBottom: 14 }}>{feat.headline}</h3>
              <p className="lead" style={{ fontSize: 14, marginBottom: 24 }}>{feat.desc}</p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 9, marginBottom: 28 }}>
                {feat.points.map(p => (
                  <li key={p} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2.5" strokeLinecap="round" style={{ marginTop: 2, flexShrink: 0 }}><polyline points="20,6 9,17 4,12"/></svg>
                    <span className="body-sm" style={{ color: 'var(--text-secondary)' }}>{p}</span>
                  </li>
                ))}
              </ul>
              <div style={{ display: 'flex', gap: 32, paddingTop: 20, borderTop: '1px solid var(--border)' }}>
                <div>
                  <div style={{ fontSize: 28, fontWeight: 800, color: 'var(--accent)', letterSpacing: '-0.03em' }}>{feat.metric1.v}</div>
                  <div className="body-sm" style={{ marginTop: 2, color: 'var(--text-tertiary)', fontWeight: 600 }}>{feat.metric1.l}</div>
                </div>
                <div>
                  <div style={{ fontSize: 28, fontWeight: 800, color: 'var(--accent)', letterSpacing: '-0.03em' }}>{feat.metric2.v}</div>
                  <div className="body-sm" style={{ marginTop: 2, color: 'var(--text-tertiary)', fontWeight: 600 }}>{feat.metric2.l}</div>
                </div>
              </div>
            </div>

            <div style={{ background: 'var(--bg-secondary)', borderRadius: 12, border: '1px solid var(--border)', padding: 22 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: 14, borderBottom: '1px solid var(--border)', marginBottom: 14 }}>
                <span className="caption">{feat.title} · Live Monitor</span>
                <div className="live-indicator" style={{ color: 'var(--green-600)' }}>
                  <span className="dot-live" /> Live
                </div>
              </div>
              {[
                { label: 'Active Work Centers', value: '48 Facilities' },
                { label: 'Scheduled Work Orders', value: '12,490 Orders' },
                { label: 'Constraint Violations', value: '0 Detected', green: true },
                { label: 'AI Reschedule Events Today', value: '1,847 Events' },
              ].map(row => (
                <div key={row.label} style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  padding: '10px 12px', borderRadius: 7, marginBottom: 6,
                  background: 'var(--surface)', border: '1px solid var(--border)',
                }}>
                  <span className="body-sm" style={{ fontWeight: 500 }}>{row.label}</span>
                  <span style={{
                    fontSize: 12, fontWeight: 700, fontFamily: 'var(--font-mono)',
                    color: (row as any).green ? 'var(--green-600)' : 'var(--text-primary)',
                  }}>{row.value}</span>
                </div>
              ))}
              <a href="http://localhost:5173" target="_blank" rel="noreferrer"
                className="btn btn-primary btn-sm"
                style={{ display: 'flex', width: '100%', marginTop: 14, justifyContent: 'center' }}>
                Explore in Portal →
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
