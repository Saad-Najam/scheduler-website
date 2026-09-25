'use client';
import React from 'react';

export default function PortalBridgeBanner() {
  return (
    <section style={{ background: 'var(--bg-secondary)', borderBottom: '1px solid var(--border)', padding: '20px 0' }}>
      <div className="wrap">
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 20, flexWrap: 'wrap',
          padding: '20px 28px', background: 'var(--surface)', border: '1px solid var(--border)',
          borderRadius: 14, boxShadow: 'var(--shadow-sm)',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <div style={{ width: 40, height: 40, borderRadius: 10, background: '#2563eb',
              display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', flexShrink: 0 }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polygon points="5,3 19,12 5,21 5,3"/></svg>
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 3 }}>
                <h4 className="h4" style={{ fontSize: 15 }}>Live scheduler portal is ready</h4>
                <div className="live-indicator" style={{ fontSize: 11, color: 'var(--green-600)' }}>
                  <span className="dot-live" /> Available now
                </div>
              </div>
              <p className="body-sm">
                Full Gantt editor, sample manufacturing data, what-if scenarios, and finite capacity analysis.
              </p>
            </div>
          </div>
          <a href="http://localhost:5173" target="_blank" rel="noreferrer" className="btn btn-primary btn-md" style={{ flexShrink: 0 }}>
            Open Scheduler Portal →
          </a>
        </div>
      </div>
    </section>
  );
}
