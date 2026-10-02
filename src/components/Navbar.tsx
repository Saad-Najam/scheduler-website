'use client';
import React, { useState, useEffect } from 'react';
import { useTheme } from '@/context/ThemeContext';

const SVG = {
  logo: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round"><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M4 10h16M10 4v16"/></svg>,
  moon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>,
  sun: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>,
  external: <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15,3 21,3 21,9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>,
  menu: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>,
  close: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>,
};

const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'Industries', href: '#industries' },
  { label: 'ROI Calculator', href: '#roi-calculator' },
  { label: 'Integrations', href: '#integrations' },
];

interface NavbarProps { onOpenDemoModal: () => void; }

export default function Navbar({ onOpenDemoModal }: NavbarProps) {
  const [stuck, setStuck] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const fn = () => setStuck(window.scrollY > 10);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <header className={`topbar${stuck ? ' stuck' : ''}`}>
      <div className="topbar-inner">

        {/* Logo */}
        <a href="/" className="logo-mark">
          <div className="logo-icon">{SVG.logo}</div>
          <div className="logo-text">
            OptiSched
            <span className="logo-badge">APS</span>
          </div>
        </a>

        {/* Desktop nav */}
        <ul className="nav-menu">
          {navLinks.map(l => (
            <li key={l.href}>
              <a href={l.href} className="nav-item">{l.label}</a>
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="nav-actions">

          <button onClick={toggleTheme} className="btn btn-ghost btn-xs" aria-label="Toggle theme">
            {theme === 'light' ? SVG.moon : SVG.sun}
          </button>

          <a href="http://localhost:5173" target="_blank" rel="noreferrer"
            className="btn btn-secondary btn-xs" style={{ color: 'var(--accent)', fontWeight: 700 }}>
            <span className="dot-live" />
            Portal
            {SVG.external}
          </a>

          <button onClick={onOpenDemoModal} className="btn btn-primary btn-sm">
            Book a Demo
          </button>

          {/* Mobile hamburger */}
          <button
            className="btn btn-ghost btn-xs"
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{ display: 'none' }}
            id="mob-burger"
            aria-label="Menu"
          >
            {mobileOpen ? SVG.close : SVG.menu}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <nav style={{
          background: 'var(--surface)', borderBottom: '1px solid var(--border)',
          padding: '12px 20px 16px',
        }}>
          {navLinks.map(l => (
            <a key={l.href} href={l.href}
              onClick={() => setMobileOpen(false)}
              style={{ display: 'block', padding: '10px 8px', fontSize: 14, fontWeight: 500,
                color: 'var(--text-secondary)', textDecoration: 'none', borderBottom: '1px solid var(--border)' }}>
              {l.label}
            </a>
          ))}
          <div style={{ display: 'flex', gap: 10, marginTop: 14 }}>
            <a href="http://localhost:5173" target="_blank" rel="noreferrer"
              className="btn btn-secondary btn-sm" style={{ flex: 1 }}>Visit Portal</a>
            <button onClick={() => { setMobileOpen(false); onOpenDemoModal(); }}
              className="btn btn-primary btn-sm" style={{ flex: 1 }}>Book Demo</button>
          </div>
        </nav>
      )}

      <style>{`@media(max-width:900px){#mob-burger{display:flex!important}}`}</style>
    </header>
  );
}
