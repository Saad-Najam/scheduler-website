'use client';

import React, { useState } from 'react';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CadenceDemoModal({ isOpen, onClose }: DemoModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    plantLines: '5-15 lines',
    erp: 'SAP S/4HANA',
    notes: '',
  });

  React.useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      // simulate auto-close or reset after 4s
    }, 4000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto bg-surface-container-lowest border border-outline-variant rounded-2xl shadow-2xl p-6 sm:p-8 text-on-surface"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-lg flex items-center justify-center bg-surface-container text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors"
          type="button"
        >
          <span className="material-symbols-outlined text-[20px]">close</span>
        </button>

        {!submitted ? (
          <div>
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="font-eyebrow text-eyebrow uppercase px-2 py-0.5 rounded bg-surface-container text-primary font-medium">
                TECHNICAL PILOT
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-secondary inline-block"></span>
              <span className="font-tabular-mono-dense text-tabular-mono-dense text-on-surface-variant">
                CP-SAT WORKBOOK BENCHMARK
              </span>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold mb-2">
              Book a 30-Minute Solver Evaluation
            </h3>
            <p className="font-body-dense text-body-dense text-on-surface-variant mb-6">
              We will load your facility's real line routing constraints and changeover matrix to benchmark makespan reduction against your current schedule.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-eyebrow text-eyebrow uppercase text-on-surface-variant mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Marcus Vance"
                    className="w-full h-10 px-3 rounded-lg border border-outline-variant bg-surface text-on-surface font-body-dense text-[14px] focus:outline-none focus:border-primary"
                  />
                </div>
                <div>
                  <label className="block font-eyebrow text-eyebrow uppercase text-on-surface-variant mb-1">
                    Work Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@plant.com"
                    className="w-full h-10 px-3 rounded-lg border border-outline-variant bg-surface text-on-surface font-body-dense text-[14px] focus:outline-none focus:border-primary"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-eyebrow text-eyebrow uppercase text-on-surface-variant mb-1">
                    Company / Facility
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="TetraBio Packaging"
                    className="w-full h-10 px-3 rounded-lg border border-outline-variant bg-surface text-on-surface font-body-dense text-[14px] focus:outline-none focus:border-primary"
                  />
                </div>
                <div>
                  <label className="block font-eyebrow text-eyebrow uppercase text-on-surface-variant mb-1">
                    Active Production Lines
                  </label>
                  <select
                    value={formData.plantLines}
                    onChange={(e) => setFormData({ ...formData, plantLines: e.target.value })}
                    className="w-full h-10 px-3 rounded-lg border border-outline-variant bg-surface text-on-surface font-body-dense text-[14px] focus:outline-none focus:border-primary"
                  >
                    <option>1-4 lines (Pilot)</option>
                    <option>5-15 lines (Standard plant)</option>
                    <option>16-40 lines (High capacity)</option>
                    <option>40+ lines (Multi-plant campus)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-eyebrow text-eyebrow uppercase text-on-surface-variant mb-1">
                  Current ERP or Scheduling Tool
                </label>
                <select
                  value={formData.erp}
                  onChange={(e) => setFormData({ ...formData, erp: e.target.value })}
                  className="w-full h-10 px-3 rounded-lg border border-outline-variant bg-surface text-on-surface font-body-dense text-[14px] focus:outline-none focus:border-primary"
                >
                  <option>SAP S/4HANA or ECC</option>
                  <option>Oracle NetSuite</option>
                  <option>Microsoft Dynamics 365</option>
                  <option>Plex MES / Infor</option>
                  <option>Excel Workbooks / Google Sheets</option>
                  <option>PlanetTogether / Preactor / Asprova</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full h-11 bg-primary hover:bg-primary-container text-white font-medium rounded-lg shadow-sm transition-all flex items-center justify-center gap-2"
                >
                  <span className="material-symbols-outlined text-[18px]">calendar_month</span>
                  Confirm Technical Benchmark Session
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-6 flex flex-col items-center gap-3">
            <div className="w-14 h-14 rounded-full bg-secondary/15 flex items-center justify-center text-secondary mb-2">
              <span className="material-symbols-outlined text-[32px]">check_circle</span>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
              Evaluation Request Received
            </h3>
            <p className="font-body-dense text-body-dense text-on-surface-variant max-w-sm">
              Our operations research engineering team will send you the secure workbook ingestion template and calendar invitation within 2 hours.
            </p>
            <button
              onClick={onClose}
              className="mt-4 px-6 py-2 bg-surface-container hover:bg-surface-container-high rounded-lg text-on-surface font-medium transition-colors"
            >
              Close Window
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
