'use client';
import React, { useState } from 'react';

interface DemoModalProps { isOpen: boolean; onClose: () => void; }

const inputStyle: React.CSSProperties = {
  width: '100%', padding: '9px 13px', borderRadius: 8,
  border: '1px solid var(--border)', background: 'var(--bg-secondary)',
  color: 'var(--text-primary)', fontFamily: 'inherit', fontSize: 13,
  outline: 'none',
};

export default function DemoModal({ isOpen, onClose }: DemoModalProps) {
  const [done, setDone] = useState(false);
  const [f, setF] = useState({ name: '', email: '', company: '', size: '25–50 Machines', date: '' });

  if (!isOpen) return null;

  return (
    <div className="overlay" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()} style={{ maxWidth: 520 }}>

        {/* Header */}
        <div style={{ padding: '20px 24px', borderBottom: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h3 className="h4">Book a live demo</h3>
            <p className="body-sm" style={{ marginTop: 2 }}>One-on-one session with a senior APS engineer</p>
          </div>
          <button onClick={onClose} className="btn btn-ghost btn-xs">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>

        <div style={{ padding: '24px' }}>
          {done ? (
            <div style={{ textAlign: 'center', padding: '20px 0' }}>
              <div style={{
                width: 52, height: 52, borderRadius: '50%',
                background: 'var(--green-50)', border: '1px solid rgba(22,163,74,.25)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                margin: '0 auto 16px', color: '#16a34a',
              }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="20,6 9,17 4,12"/></svg>
              </div>
              <h4 className="h3" style={{ marginBottom: 8 }}>You're booked</h4>
              <p className="body-sm" style={{ marginBottom: 24 }}>
                We'll reach out to <strong>{f.email || 'your email'}</strong> within 1 business hour to confirm your session details for <strong>{f.company || 'your company'}</strong>.
              </p>
              <div style={{ display: 'flex', gap: 10, justifyContent: 'center' }}>
                <a href="http://localhost:5173" target="_blank" rel="noreferrer" className="btn btn-primary btn-sm">
                  Open Scheduler Portal →
                </a>
                <button onClick={() => { setDone(false); onClose(); }} className="btn btn-secondary btn-sm">
                  Close
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={e => { e.preventDefault(); setDone(true); }}>
              <div className="grid-2" style={{ gap: 14, marginBottom: 14 }}>
                <div>
                  <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: 'var(--text-secondary)', marginBottom: 5 }}>Full Name *</label>
                  <input required placeholder="Sarah Jenkins" value={f.name}
                    onChange={e => setF({...f, name: e.target.value})} style={inputStyle} />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: 'var(--text-secondary)', marginBottom: 5 }}>Work Email *</label>
                  <input type="email" required placeholder="sarah@company.com" value={f.email}
                    onChange={e => setF({...f, email: e.target.value})} style={inputStyle} />
                </div>
              </div>
              <div style={{ marginBottom: 14 }}>
                <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: 'var(--text-secondary)', marginBottom: 5 }}>Company Name *</label>
                <input required placeholder="Apex Auto Components Inc." value={f.company}
                  onChange={e => setF({...f, company: e.target.value})} style={inputStyle} />
              </div>
              <div className="grid-2" style={{ gap: 14, marginBottom: 20 }}>
                <div>
                  <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: 'var(--text-secondary)', marginBottom: 5 }}>Plant Capacity</label>
                  <select value={f.size} onChange={e => setF({...f, size: e.target.value})} style={inputStyle}>
                    <option>Under 15 Machines</option>
                    <option>25–50 Machines</option>
                    <option>50–150 Machines</option>
                    <option>150+ Multi-Plant</option>
                  </select>
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: 'var(--text-secondary)', marginBottom: 5 }}>Preferred Date</label>
                  <input type="date" value={f.date} onChange={e => setF({...f, date: e.target.value})} style={inputStyle} />
                </div>
              </div>

              <button type="submit" className="btn btn-primary btn-md" style={{ width: '100%', justifyContent: 'center' }}>
                Book Demo Session
              </button>
              <p className="caption" style={{ textAlign: 'center', marginTop: 14, letterSpacing: 0, textTransform: 'none' }}>
                NDA protected · Zero commitment · SOC 2 Type II certified
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
