'use client';
import React from 'react';

const rows = [
  { f: 'Reschedule Engine Latency', os: '< 400ms', pt: '3–15 minutes', xl: '4–8 hrs manual' },
  { f: 'Modern Web UI + Mobile', os: true, pt: false, xl: false },
  { f: 'Simultaneous Multi-Constraint Modeling', os: true, pt: true, xl: false },
  { f: 'Real-Time Digital Twin What-If', os: true, pt: true, xl: false },
  { f: 'AI Bottleneck Predictor (Neural)', os: true, pt: false, xl: false },
  { f: 'Bi-directional Live ERP Sync', os: true, pt: 'Batch polling', xl: 'Manual CSV' },
  { f: 'Cloud SaaS Deployment', os: true, pt: 'Legacy Windows client', xl: 'File-based' },
  { f: 'Time to Value', os: '2–4 Weeks', pt: '3–6 Months', xl: 'N/A' },
];

const Tick = () => (
  <div style={{ width: 20, height: 20, borderRadius: '50%', background: '#2563eb', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: 'auto' }}>
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round"><polyline points="20,6 9,17 4,12"/></svg>
  </div>
);
const Cross = () => (
  <div style={{ width: 20, height: 20, borderRadius: '50%', background: 'var(--bg-tertiary)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: 'auto' }}>
    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="var(--text-tertiary)" strokeWidth="2.5" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
  </div>
);

export default function ComparisonMatrix() {
  return (
    <section id="comparison" className="section">
      <div className="wrap">

        <div className="section-head">
          <div className="section-label">Competitive Analysis</div>
          <h2 className="h2">How OptiSched compares</h2>
          <p className="lead" style={{ marginTop: 12 }}>
            Why manufacturers switch from PlanetTogether and spreadsheets to OptiSched.
          </p>
        </div>

        <div className="card-elevated" style={{ overflow: 'hidden', padding: 0 }}>
          <div style={{ overflowX: 'auto' }}>
            <table className="table" style={{ minWidth: 680 }}>
              <thead>
                <tr>
                  <th style={{ width: '35%' }}>Capability</th>
                  <th style={{
                    textAlign: 'center',
                    background: 'var(--accent-bg)',
                    borderLeft: '2px solid var(--blue-500)',
                    borderRight: '2px solid var(--blue-500)',
                    color: 'var(--accent)',
                  }}>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ fontSize: 13, fontWeight: 800, color: 'var(--text-primary)' }}>OptiSched APS</div>
                      <span style={{ fontSize: 9, fontWeight: 800, background: '#2563eb', color: '#fff', padding: '1px 7px', borderRadius: 4 }}>NEXT-GEN AI</span>
                    </div>
                  </th>
                  <th style={{ textAlign: 'center' }}>PlanetTogether / Legacy APS</th>
                  <th style={{ textAlign: 'center' }}>Excel / Manual</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <tr key={i}>
                    <td style={{ fontSize: 13, fontWeight: 600 }}>{row.f}</td>
                    <td style={{
                      textAlign: 'center',
                      background: 'var(--accent-bg)',
                      borderLeft: '2px solid var(--blue-500)',
                      borderRight: '2px solid var(--blue-500)',
                    }}>
                      {typeof row.os === 'boolean' ? (row.os ? <Tick /> : <Cross />) : (
                        <span style={{ fontSize: 11, fontWeight: 700, fontFamily: 'var(--font-mono)',
                          background: '#2563eb', color: '#fff', padding: '2px 9px', borderRadius: 5, display: 'inline-block' }}>
                          {row.os}
                        </span>
                      )}
                    </td>
                    <td style={{ textAlign: 'center' }}>
                      {typeof row.pt === 'boolean' ? (row.pt ? <Tick /> : <Cross />) : (
                        <span style={{ fontSize: 11, color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}>{row.pt}</span>
                      )}
                    </td>
                    <td style={{ textAlign: 'center' }}>
                      {typeof row.xl === 'boolean' ? (row.xl ? <Tick /> : <Cross />) : (
                        <span style={{ fontSize: 11, color: 'var(--text-tertiary)', fontFamily: 'var(--font-mono)' }}>{row.xl}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div style={{
            padding: '12px 22px', background: 'var(--bg-secondary)', borderTop: '1px solid var(--border)',
            display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 8,
          }}>
            <span style={{ fontSize: 12, color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: 6 }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              ISO 27001 · SOC 2 Type II · FDA 21 CFR Part 11 compliant
            </span>
            <a href="http://localhost:5173" target="_blank" rel="noreferrer"
              style={{ fontSize: 12, fontWeight: 700, color: 'var(--accent)', textDecoration: 'none' }}>
              Test portal latency yourself →
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
