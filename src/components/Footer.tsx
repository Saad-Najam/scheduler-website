'use client';
import React from 'react';

const links = {
  product: [
    { label: 'Finite Capacity Engine', href: '#features' },
    { label: 'What-If Digital Twin', href: '#features' },
    { label: 'AI Bottleneck Predictor', href: '#features' },
    { label: 'ERP / MES Connectors', href: '#features' },
    { label: 'Scheduler Portal', href: 'http://localhost:5173', external: true },
  ],
  industries: [
    { label: 'Automotive OEM', href: '#solutions' },
    { label: 'Aerospace & Defense', href: '#solutions' },
    { label: 'Heavy Industrial', href: '#solutions' },
    { label: 'Electronics & SMT', href: '#solutions' },
    { label: 'Pharma & Medical', href: '#solutions' },
  ],
  company: [
    { label: 'vs PlanetTogether', href: '#comparison' },
    { label: 'ROI Calculator', href: '#roi-calculator' },
    { label: 'Whitepapers', href: '#' },
  ],
};

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">

        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 40, paddingBottom: 40, borderBottom: '1px solid rgba(255,255,255,.06)' }}>

          {/* Brand */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ width: 30, height: 30, background: '#2563eb', borderRadius: 7, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round"><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M4 10h16M10 4v16"/></svg>
              </div>
              <span style={{ fontSize: 15, fontWeight: 800, color: '#f4f4f5', letterSpacing: '-0.01em' }}>
                OptiSched<span style={{ color: '#60a5fa' }}>.AI</span>
              </span>
            </div>
            <p style={{ fontSize: 13, lineHeight: 1.7, maxWidth: 260, color: '#71717a' }}>
              Autonomous APS platform with sub-second AI scheduling, finite capacity modeling, and digital twin simulation for complex manufacturers.
            </p>
            <div className="live-indicator" style={{ fontSize: 11, color: '#22c55e' }}>
              <span className="dot-live" style={{ background: '#22c55e' }} />
              All Systems Operational · 99.99% Uptime
            </div>
          </div>

          {/* Product */}
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.08em', color: '#f4f4f5', marginBottom: 14 }}>Product</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
              {links.product.map(l => (
                <a key={l.href} href={l.href} target={(l as any).external ? '_blank' : undefined} rel={(l as any).external ? 'noreferrer' : undefined}
                  style={{ fontSize: 13, color: '#71717a', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 4, transition: 'color .15s' }}
                  onMouseOver={e => (e.target as any).style.color='#f4f4f5'}
                  onMouseOut={e => (e.target as any).style.color='#71717a'}>
                  {l.label}
                  {(l as any).external && <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15,3 21,3 21,9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>}
                </a>
              ))}
            </div>
          </div>

          {/* Industries */}
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.08em', color: '#f4f4f5', marginBottom: 14 }}>Industries</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
              {links.industries.map(l => (
                <a key={l.label} href={l.href}
                  style={{ fontSize: 13, color: '#71717a', textDecoration: 'none' }}
                  onMouseOver={e => (e.target as any).style.color='#f4f4f5'}
                  onMouseOut={e => (e.target as any).style.color='#71717a'}>
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.08em', color: '#f4f4f5', marginBottom: 14 }}>Resources</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
              {links.company.map(l => (
                <a key={l.label} href={l.href}
                  style={{ fontSize: 13, color: '#71717a', textDecoration: 'none' }}
                  onMouseOver={e => (e.target as any).style.color='#f4f4f5'}
                  onMouseOut={e => (e.target as any).style.color='#71717a'}>
                  {l.label}
                </a>
              ))}
            </div>
            <div style={{ marginTop: 16, paddingTop: 16, borderTop: '1px solid rgba(255,255,255,.06)' }}>
              <div style={{ fontSize: 11, color: '#52525b', display: 'flex', flexDirection: 'column', gap: 4 }}>
                {['SOC 2 Type II', 'ISO 27001', 'FDA 21 CFR Part 11'].map(c => (
                  <div key={c} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                    {c}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div style={{ paddingTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 10, fontSize: 12, color: '#52525b' }}>
          <span>&copy; {new Date().getFullYear()} OptiSched AI Technologies Inc. All rights reserved.</span>
          <div style={{ display: 'flex', gap: 20 }}>
            {['Privacy', 'Terms', 'Security'].map(l => (
              <span key={l} style={{ cursor: 'pointer', transition: 'color .15s' }}
                onMouseOver={e => (e.target as any).style.color='#f4f4f5'}
                onMouseOut={e => (e.target as any).style.color='#52525b'}>{l}</span>
            ))}
          </div>
        </div>

      </div>
      <style>{`
        @media(max-width:768px){footer .wrap>div:first-child{grid-template-columns:1fr 1fr!important}}
        @media(max-width:480px){footer .wrap>div:first-child{grid-template-columns:1fr!important}}
      `}</style>
    </footer>
  );
}
