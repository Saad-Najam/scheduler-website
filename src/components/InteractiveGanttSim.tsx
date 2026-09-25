'use client';
import React, { useState } from 'react';

type Scenario = 'normal' | 'breakdown' | 'rush';

export default function InteractiveGanttSim() {
  const [scenario, setScenario] = useState<Scenario>('normal');
  const [loading, setLoading] = useState(false);
  const [ran, setRan] = useState(false);

  const trigger = () => {
    setLoading(true); setRan(false);
    setTimeout(() => { setLoading(false); setRan(true); }, 800);
  };

  const changeScenario = (s: Scenario) => { setScenario(s); setRan(false); };

  type Alert = { text: string; badge: string; color: string; bg: string; border: string; };
  const alerts: Record<Scenario, { before: Alert; after: Alert }> = {
    normal: {
      before: { text: 'BASELINE — All work centers within finite capacity constraints.', badge: 'OEE: 89.4%', color: '#16a34a', bg: 'var(--green-50)', border: 'rgba(22,163,74,.2)' },
      after: { text: 'SCHEDULE VERIFIED — 0 constraint violations. All orders on track.', badge: 'OTIF: 99.8%', color: '#16a34a', bg: 'var(--green-50)', border: 'rgba(22,163,74,.2)' },
    },
    breakdown: {
      before: { text: 'ALERT — CNC Mill-02 hydraulic pump failure. WO-4402 blocked at 10:15 AM.', badge: 'Bottleneck Detected', color: '#b91c1c', bg: 'var(--red-50)', border: 'rgba(185,28,28,.2)' },
      after: { text: 'RESOLVED — WO-4402 rerouted to CNC Mill-04 in 140ms. Zero delivery impact.', badge: 'OEE Recovered: 88.2%', color: '#2563eb', bg: 'var(--blue-50)', border: 'rgba(37,99,235,.2)' },
    },
    rush: {
      before: { text: 'PRIORITY ORDER — WO-9901 (Tesla Housing) required by 14:00. Conflicts detected.', badge: 'Capacity Conflict', color: '#b45309', bg: 'var(--amber-50)', border: 'rgba(180,83,9,.2)' },
      after: { text: 'INSERTED — WO-9901 slotted with WO-8810 grouping. Changeover saved: 45 min.', badge: 'On-Time Confirmed', color: '#4338ca', bg: '#eef2ff', border: 'rgba(67,56,202,.2)' },
    },
  };

  const a = ran ? alerts[scenario].after : alerts[scenario].before;

  const rows = [
    {
      label: 'Stamping Press 500T',
      bars: scenario === 'breakdown' && !ran
        ? [{ label: 'WO-1044 Metal Enclosure', w: '44%', color: '#2563eb' }, { label: 'Buffer', w: '50%', color: '#e5e7eb', textColor: '#9ca3af' }]
        : [{ label: 'WO-1044 Metal Enclosure', w: '44%', color: '#2563eb' }, { label: 'WO-1045 Side Panels', w: '34%', color: '#0891b2' }],
    },
    {
      label: 'CNC Mill-02',
      bars: scenario === 'breakdown' && !ran
        ? [{ label: '⚠ FAULT — Hydraulic Pump Overheat', w: '94%', color: '#b91c1c' }]
        : scenario === 'rush' && ran
        ? [{ label: '★ WO-9901 RUSH — Tesla Housing', w: '34%', color: '#d97706' }, { label: 'WO-4402 Engine Block', w: '54%', color: '#7c3aed' }]
        : [{ label: 'WO-4402 Engine Block', w: '58%', color: '#7c3aed' }, { label: 'WO-4405 Transmission', w: '34%', color: '#6366f1' }],
    },
    {
      label: 'CNC Mill-04',
      bars: scenario === 'breakdown' && ran
        ? [{ label: 'WO-3301 Bracket', w: '36%', color: '#14b8a6' }, { label: '★ WO-4402 Rerouted', w: '56%', color: '#2563eb' }]
        : [{ label: 'WO-3301 Support Bracket', w: '38%', color: '#14b8a6' }, { label: 'Buffer (4.2 hrs)', w: '48%', color: '#e5e7eb', textColor: '#9ca3af' }],
    },
  ];

  return (
    <section id="interactive-demo" className="section">
      <div className="wrap">

        <div className="section-head">
          <div className="section-label">Live Engine Simulator</div>
          <h2 className="h2">Test the scheduling engine</h2>
          <p className="lead" style={{ marginTop: 12 }}>
            Trigger real manufacturing disruptions and watch the AI auto-reschedule in under 400ms.
          </p>
        </div>

        <div className="card-elevated" style={{ padding: 28 }}>

          {/* Controls */}
          <div style={{
            display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center',
            justifyContent: 'space-between', paddingBottom: 20,
            borderBottom: '1px solid var(--border)', marginBottom: 20,
          }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, alignItems: 'center' }}>
              <span className="caption">Scenario:</span>
              {([
                { k: 'normal', label: 'Normal Operations', color: '#16a34a' },
                { k: 'breakdown', label: 'Machine Failure', color: '#b91c1c' },
                { k: 'rush', label: 'Rush Order Insert', color: '#b45309' },
              ] as any[]).map(s => (
                <button key={s.k} onClick={() => changeScenario(s.k as Scenario)}
                  className="btn btn-sm"
                  style={{
                    background: scenario === s.k ? s.color : 'transparent',
                    color: scenario === s.k ? '#fff' : 'var(--text-secondary)',
                    border: `1px solid ${scenario === s.k ? s.color : 'var(--border)'}`,
                    fontWeight: 600,
                  }}>
                  {s.label}
                </button>
              ))}
            </div>
            <button onClick={trigger} disabled={loading} className="btn btn-primary btn-sm">
              {loading
                ? <><span className="animate-spin" style={{ display: 'inline-block' }}>↻</span>&nbsp;Optimizing...</>
                : '⚡ Run AI Reschedule'
              }
            </button>
          </div>

          {/* Alert bar */}
          <div style={{
            display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 10,
            padding: '10px 14px', borderRadius: 8, marginBottom: 20,
            background: a.bg, border: `1px solid ${a.border}`,
          }}>
            <span style={{ fontSize: 12, fontWeight: 600, color: a.color, fontFamily: 'var(--font-mono)' }}>
              {a.text}
            </span>
            <span style={{ fontSize: 10, fontWeight: 800, background: a.color, color: '#fff', padding: '2px 9px', borderRadius: 5 }}>
              {a.badge}
            </span>
          </div>

          {/* Gantt rows */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {rows.map(row => (
              <div key={row.label}>
                <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--text-secondary)', marginBottom: 5 }}>
                  {row.label}
                </div>
                <div style={{
                  height: 32, display: 'flex', gap: 3, padding: '3px 3px',
                  background: 'var(--bg-secondary)', borderRadius: 7,
                  border: '1px solid var(--border)',
                }}>
                  {row.bars.map((b: any, i: number) => (
                    <div key={i} className="gantt-bar"
                      style={{ width: b.w, background: b.color, color: b.textColor || '#fff', fontSize: 10, borderRadius: 5 }}>
                      {b.label}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 18, paddingTop: 14, borderTop: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8, fontSize: 12 }}>
            <span style={{ color: 'var(--text-tertiary)' }}>✓ Material availability verified via SAP ERP connector</span>
            <a href="http://localhost:5173" target="_blank" rel="noreferrer"
              style={{ color: 'var(--accent)', fontWeight: 700, textDecoration: 'none', fontSize: 12 }}>
              Open Full Gantt Editor →
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
