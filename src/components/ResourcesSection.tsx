'use client';
import React from 'react';

const resources = [
  { type: 'Whitepaper', title: 'Sub-Second Finite Capacity Scheduling in Complex Job Shops', desc: 'Deep-dive on how OptiSched handles 10,000+ machine constraints via graph neural solvers.', pages: '24 pages' },
  { type: 'Migration Guide', title: 'Migrating From PlanetTogether to a Modern Cloud APS', desc: 'Step-by-step blueprint for transferring legacy rulesets and ERP integrations without downtime.', pages: '18 pages' },
  { type: 'Case Study', title: 'Apex Auto: 52% Setup Reduction in 3 Weeks', desc: 'OTIF improved from 81% to 99.4% across 3 automotive stamping plants.', pages: '12 pages' },
];

export default function ResourcesSection() {
  return (
    <section className="section">
      <div className="wrap">
        <div className="section-head">
          <div className="section-label">Resources</div>
          <h2 className="h2">Whitepapers & case studies</h2>
          <p className="lead" style={{ marginTop: 12 }}>Peer-reviewed technical papers and real customer benchmarks.</p>
        </div>
        <div className="grid-3">
          {resources.map(r => (
            <div key={r.title} className="card" style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.06em', color: 'var(--accent)', background: 'var(--accent-bg)', border: '1px solid var(--accent-border)', padding: '2px 9px', borderRadius: 5 }}>
                  {r.type}
                </span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--text-tertiary)" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14,2 14,8 20,8"/></svg>
              </div>
              <h4 className="h4" style={{ lineHeight: 1.45, flex: 1 }}>{r.title}</h4>
              <p className="body-sm">{r.desc}</p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 14, borderTop: '1px solid var(--border)' }}>
                <span style={{ fontSize: 11, color: 'var(--text-tertiary)', fontFamily: 'var(--font-mono)' }}>{r.pages} · PDF</span>
                <button onClick={() => alert(`Downloading: ${r.title}`)}
                  style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--accent)', fontWeight: 700, fontSize: 12, display: 'flex', alignItems: 'center', gap: 5 }}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7,10 12,15 17,10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                  Download
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
