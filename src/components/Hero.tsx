'use client';
import React from 'react';

interface HeroProps { onOpenDemoModal: () => void; }

const stats = [
  { value: '99.8%', label: 'On-Time Delivery', color: '#2563eb' },
  { value: '< 400ms', label: 'Reschedule Latency', color: '#16a34a' },
  { value: '+35%', label: 'OEE Improvement', color: '#d97706' },
  { value: '−50%', label: 'Work-In-Progress', color: '#7c3aed' },
];

export default function Hero({ onOpenDemoModal }: HeroProps) {
  return (
    <section style={{
      paddingTop: 112, paddingBottom: 72,
      background: 'var(--bg)',
      borderBottom: '1px solid var(--border)',
    }}>
      {/* Subtle grid */}
      <div style={{
        position: 'absolute', left: 0, right: 0, top: 0, bottom: 0, overflow: 'hidden', pointerEvents: 'none',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          opacity: 0.4,
          maskImage: 'radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)',
        }} />
      </div>

      <div className="wrap" style={{ position: 'relative', textAlign: 'center' }}>

        {/* Pill label */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 28 }}>
          <div className="badge badge-blue">
            <span className="dot-live" />
            Advanced Planning & Scheduling Software — APS Pro 4.0
          </div>
        </div>

        {/* Headline */}
        <h1 className="h1" style={{ maxWidth: 720, margin: '0 auto 20px' }}>
          Production scheduling that thinks faster than your shop floor disruptions
        </h1>

        {/* Subtext */}
        <p className="lead" style={{ maxWidth: 540, margin: '0 auto 36px' }}>
          Finite capacity scheduling, AI-powered what-if modeling, and real-time ERP sync — built for manufacturers who can't afford to wait minutes for a reschedule.
        </p>

        {/* CTAs */}
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 56 }}>
          <button onClick={onOpenDemoModal} className="btn btn-primary btn-lg">
            Book a Live Demo
          </button>
          <a href="http://localhost:5173" target="_blank" rel="noreferrer" className="btn btn-secondary btn-lg">
            <span className="dot-live" />
            Open Scheduler Portal
          </a>
        </div>

        {/* Social proof line */}
        <p className="caption" style={{ marginBottom: 20 }}>
          Trusted by automotive, aerospace, and industrial manufacturers — replacing PlanetTogether and Excel
        </p>

        {/* Stats */}
        <div style={{
          display: 'flex', gap: 0, justifyContent: 'center', flexWrap: 'wrap',
          border: '1px solid var(--border)', borderRadius: 14, background: 'var(--surface)',
          boxShadow: 'var(--shadow-md)', overflow: 'hidden', maxWidth: 720, margin: '0 auto 64px',
        }}>
          {stats.map((s, i) => (
            <div key={s.label} style={{
              flex: 1, minWidth: 140, padding: '20px 24px', textAlign: 'center',
              borderRight: i < stats.length - 1 ? '1px solid var(--border)' : 'none',
            }}>
              <div style={{ fontSize: 26, fontWeight: 800, color: s.color, letterSpacing: '-0.03em' }}>
                {s.value}
              </div>
              <div className="body-sm" style={{ marginTop: 4, fontWeight: 500 }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Product screenshot */}
        <div style={{
          border: '1px solid var(--border)', borderRadius: 16,
          overflow: 'hidden', boxShadow: 'var(--shadow-xl)',
          background: 'var(--surface)', textAlign: 'left',
        }}>
          {/* Window bar */}
          <div style={{
            padding: '11px 16px',
            background: 'var(--bg-secondary)',
            borderBottom: '1px solid var(--border)',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          }}>
            <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
              <div style={{ display: 'flex', gap: 6 }}>
                {['#F87171','#FBBF24','#34D399'].map(c => (
                  <div key={c} style={{ width: 11, height: 11, borderRadius: '50%', background: c }} />
                ))}
              </div>
              <span className="caption" style={{ marginLeft: 10, letterSpacing: 0, textTransform: 'none', fontSize: 12 }}>
                OptiSched Core Solver v4.8 — Detroit Assembly Plant #01
              </span>
            </div>
            <div className="live-indicator" style={{ color: 'var(--green-600)' }}>
              <span className="dot-live" />
              Auto-Optimization Active
            </div>
          </div>

          {/* Dashboard content */}
          <div style={{ display: 'grid', gridTemplateColumns: '280px 1fr', minHeight: 260 }}>

            {/* Left sidebar */}
            <div style={{ padding: 20, borderRight: '1px solid var(--border)', display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div>
                <div className="caption" style={{ marginBottom: 10 }}>Work Center Load</div>
                {[
                  { label: 'CNC Milling', pct: 88, color: '#22c55e' },
                  { label: 'Welding Cell B', pct: 94, color: '#f59e0b' },
                  { label: 'Hydraulic Press', pct: 72, color: '#3b82f6' },
                  { label: 'Paint Line', pct: 61, color: '#8b5cf6' },
                ].map(w => (
                  <div key={w.label} style={{ marginBottom: 8 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, fontWeight: 600, marginBottom: 4, color: 'var(--text-secondary)' }}>
                      <span>{w.label}</span>
                      <span style={{ color: w.color, fontFamily: 'var(--font-mono)' }}>{w.pct}%</span>
                    </div>
                    <div className="progress-bar">
                      <div className="progress-fill" style={{ width: `${w.pct}%`, background: w.color }} />
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ padding: 12, borderRadius: 8, background: 'var(--accent-bg)', border: '1px solid var(--accent-border)' }}>
                <div className="caption" style={{ color: 'var(--accent)', marginBottom: 4 }}>Solver Status</div>
                <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--text-primary)' }}>14,280 constraints</div>
                <div className="body-sm" style={{ fontSize: 11 }}>processed in 0.14s</div>
              </div>
            </div>

            {/* Gantt chart area */}
            <div style={{ padding: 20 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
                <div className="h4">Schedule — Shift 01</div>
                <div style={{ display: 'flex', gap: 8, fontSize: 11 }}>
                  {['Mon','Tue','Wed','Thu','Fri'].map(d => (
                    <span key={d} style={{ color: 'var(--text-tertiary)', fontWeight: 600 }}>{d}</span>
                  ))}
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {[
                  {
                    label: 'Stamping Press 500T',
                    bars: [
                      { label: 'WO-9082 Chassis', w: '48%', color: '#2563eb' },
                      { label: 'WO-9083 Bracket', w: '29%', color: '#16a34a' },
                      { label: 'Setup', w: '10%', color: '#d97706', opacity: 0.7 },
                    ]
                  },
                  {
                    label: '5-Axis CNC Mill',
                    bars: [
                      { label: 'WO-9101 Turbine', w: '38%', color: '#7c3aed' },
                      { label: 'WO-9104 Housing', w: '52%', color: '#0891b2' },
                    ]
                  },
                  {
                    label: 'Robot Welding Cell',
                    bars: [
                      { label: 'WO-8801 Frame', w: '55%', color: '#be185d' },
                      { label: 'WO-8802 Panel', w: '33%', color: '#6366f1' },
                    ]
                  },
                ].map(row => (
                  <div key={row.label}>
                    <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--text-secondary)', marginBottom: 4 }}>
                      {row.label}
                    </div>
                    <div style={{
                      display: 'flex', gap: 3, height: 28,
                      background: 'var(--bg-secondary)', borderRadius: 6,
                      padding: '3px 3px', border: '1px solid var(--border)',
                    }}>
                      {row.bars.map((b, i) => (
                        <div key={i} className="gantt-bar"
                          style={{ width: b.w, background: b.color, opacity: (b as any).opacity || 1, fontSize: 10 }}>
                          {b.label}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: 14, paddingTop: 12, borderTop: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', fontSize: 11, color: 'var(--text-tertiary)' }}>
                <span>✓ Material availability confirmed via SAP S/4HANA</span>
                <a href="http://localhost:5173" target="_blank" rel="noreferrer"
                  style={{ color: 'var(--accent)', fontWeight: 700, textDecoration: 'none' }}>
                  Open full scheduler →
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
