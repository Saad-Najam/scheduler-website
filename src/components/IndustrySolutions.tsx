'use client';
import React from 'react';

const industries = [
  { title: 'Automotive & Mobility', metric: '99.9% JIT Sync',
    desc: 'Just-in-time sequencing for OEM stamping presses, robotic welding cells, and model-mix assembly lines.',
    tags: ['Stamping', 'Robotics', 'Paint Shop', 'JIT'], color: '#2563eb',
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="5" cy="17" r="2"/><circle cx="17" cy="17" r="2"/><path d="M4.5 17H3V13l3-4h7l3 4v4h-1.5M8 13h4"/></svg>,
  },
  { title: 'Aerospace & Defense', metric: '−40% Lead Time',
    desc: 'AS9100 compliance, high-mix low-volume precision machining, and multi-tier sub-assembly pegging.',
    tags: ['AS9100', 'Titanium CNC', 'FAA'], color: '#4f46e5',
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 2l3 7h7l-5.5 4 2 7L12 16l-6.5 4 2-7L2 9h7z"/></svg>,
  },
  { title: 'Heavy Industrial Machinery', metric: '32% WIP Reduction',
    desc: 'Multi-level BOM leveling, long-lead casting scheduling, and engineer-to-order workflows.',
    tags: ['Multi-BOM', 'Castings', 'ETO'], color: '#0891b2',
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>,
  },
  { title: 'Electronics & SMT', metric: '+28% Utilization',
    desc: 'SMT line balancing, feeder setup optimization, and silicon batch grouping for yield maximization.',
    tags: ['SMT Lines', 'PCB', 'Feeder Setup'], color: '#7c3aed',
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/></svg>,
  },
  { title: 'FMCG & Packaging', metric: '55% Faster Changeovers',
    desc: 'High-speed changeover minimization, liquid filling sequences, and allergen sanitization windows.',
    tags: ['High-Speed Lines', 'Cleandown', 'FMCG'], color: '#b45309',
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27,6.96 12,12.01 20.73,6.96"/></svg>,
  },
  { title: 'Pharma & Medical Devices', metric: '100% FDA Compliance',
    desc: 'FDA 21 CFR Part 11 compliant batch scheduling, cleanroom campaign planning, and expiry management.',
    tags: ['FDA CFR 21', 'Cleanroom', 'Batch'], color: '#0d9488',
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M8.5 2h7a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-7a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="10" y1="10" x2="14" y2="10"/></svg>,
  },
];

export default function IndustrySolutions() {
  return (
    <section id="industries" className="section section-alt">
      <div className="wrap">

        <div className="section-head">
          <div className="section-label">Target Industries</div>
          <h2 className="h2">Engineered for your shop floor</h2>
          <p className="lead" style={{ marginTop: 12 }}>
            Every sector has unique constraints. OptiSched ships pre-configured constraint models tailored for your target industry.
          </p>
        </div>

        <div className="grid-3">
          {industries.map(ind => (
            <div key={ind.title} className="card" style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div style={{
                  width: 40, height: 40, borderRadius: 10,
                  background: ind.color, color: '#fff',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  boxShadow: `0 4px 10px ${ind.color}40`,
                }}>
                  {ind.icon}
                </div>
                <span style={{
                  fontSize: 10, fontWeight: 700, fontFamily: 'var(--font-mono)',
                  color: ind.color, background: `${ind.color}12`,
                  border: `1px solid ${ind.color}28`, padding: '2px 9px', borderRadius: 99,
                }}>{ind.metric}</span>
              </div>
              <div>
                <h3 className="h4" style={{ marginBottom: 6 }}>{ind.title}</h3>
                <p className="body-sm">{ind.desc}</p>
              </div>
              <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', paddingTop: 12, borderTop: '1px solid var(--border)', marginTop: 'auto' }}>
                {ind.tags.map(t => <span key={t} className="tag">{t}</span>)}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
