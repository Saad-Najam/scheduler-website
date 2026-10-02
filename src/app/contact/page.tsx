'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import CadenceHeader from '@/components/CadenceHeader';
import CadenceFooter from '@/components/CadenceFooter';
import CadenceDemoModal from '@/components/CadenceDemoModal';

export default function ContactPage() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    role: 'Plant Manager',
    facilityType: 'FMCG & Packaged Goods',
    message: '',
    interestedProducts: ['Cadence APS (Production Scheduler)'],
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [responseMsg, setResponseMsg] = useState('');

  const productOptions = [
    'Cadence APS (Production Scheduler)',
    'SIOP (Sales, Inventory & Operations Planning)',
    'MES (Manufacturing Execution System)',
    'Agentic AI Scheduling Assistant',
    'ERP / SAP Connectors',
  ];

  const handleProductToggle = (prod: string) => {
    setFormData((prev) => {
      const exists = prev.interestedProducts.includes(prod);
      if (exists) {
        return {
          ...prev,
          interestedProducts: prev.interestedProducts.filter((p) => p !== prod),
        };
      } else {
        return {
          ...prev,
          interestedProducts: [...prev.interestedProducts, prod],
        };
      }
    });
  };

  const handleGmailCompose = () => {
    const subject = encodeURIComponent(`Inquiry from ${formData.name || 'Plant Leader'} (${formData.company || 'Manufacturing'})`);
    const body = encodeURIComponent(
      `Hello The Quantum Primes team,\n\n` +
      `My Name: ${formData.name}\n` +
      `Company: ${formData.company}\n` +
      `Work Email: ${formData.email}\n` +
      `Phone: ${formData.phone}\n` +
      `Role: ${formData.role}\n` +
      `Facility Type: ${formData.facilityType}\n` +
      `Interested In: ${formData.interestedProducts.join(', ')}\n\n` +
      `Message / Plant Challenge:\n${formData.message}\n`
    );
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=thequantumprimes@gmail.com&su=${subject}&body=${body}`;
    window.open(gmailUrl, '_blank');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setResponseMsg('');

    try {
      // Check if Web3Forms key is configured (Option A zero-config)
      const web3FormsKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

      if (web3FormsKey) {
        // Direct zero-config client-side submission to Web3Forms
        const res = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
          body: JSON.stringify({
            access_key: web3FormsKey,
            subject: `New Lead: ${formData.name} (${formData.company || 'Enterprise'})`,
            from_name: formData.name,
            replyto: formData.email,
            to: 'thequantumprimes@gmail.com',
            ...formData,
            interestedProducts: formData.interestedProducts.join(', '),
          }),
        });

        const data = await res.json();
        if (!data.success) {
          throw new Error(data.message || 'Web3Forms submission failed');
        }
      } else {
        // Fallback to internal API route
        const res = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });

        const data = await res.json();
        if (!res.ok) {
          throw new Error(data.error || 'Failed to submit form.');
        }
      }

      setStatus('success');
      setResponseMsg(
        'Your inquiry has been successfully sent to thequantumprimes@gmail.com! An operations research engineer will review your plant parameters and respond within 24 hours.'
      );
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        role: 'Plant Manager',
        facilityType: 'FMCG & Packaged Goods',
        message: '',
        interestedProducts: ['Cadence APS (Production Scheduler)'],
      });
    } catch (err: unknown) {
      setStatus('error');
      const errText = err instanceof Error ? err.message : 'An error occurred. Please try again or email us directly.';
      setResponseMsg(errText);
    }
  };

  return (
    <div className="min-h-screen bg-surface text-on-surface flex flex-col selection:bg-primary/20 transition-colors">
      <CadenceHeader onOpenDemoModal={() => setIsDemoModalOpen(true)} />

      <main className="w-full pt-16 bg-surface flex-1">
        {/* Top Eyebrow Strip */}
        <div className="w-full bg-surface-container-low px-4 sm:px-6 lg:px-8 py-2.5 border-b border-outline-variant/30">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-on-surface-variant font-eyebrow text-[11px] uppercase tracking-widest">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="inline-flex items-center gap-1.5 text-primary font-semibold">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                THE QUANTUM PRIMES // ENTERPRISE CONTACT DESK
              </span>
              <span className="text-outline-variant hidden sm:inline">•</span>
              <span className="text-on-surface-variant">INQUIRY INBOX: thequantumprimes@gmail.com</span>
            </div>
            <div className="flex items-center gap-4 text-on-surface-variant">
              <span className="text-secondary font-medium">AVERAGE RESPONSE TIME: &lt; 24 HOURS</span>
            </div>
          </div>
        </div>

        {/* Main Header */}
        <section className="relative w-full overflow-hidden px-4 sm:px-6 lg:px-8 pt-12 pb-16">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Left Column: Context & Company Value Props */}
              <div className="lg:col-span-5 flex flex-col gap-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-primary/10 text-primary font-eyebrow text-xs uppercase font-medium mb-3">
                    <span className="material-symbols-outlined text-[14px]">mail</span>
                    Get in Touch
                  </div>
                  <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-on-surface tracking-tight leading-tight">
                    Bring us the line nobody can schedule.
                  </h1>
                  <p className="font-body-default text-base sm:text-lg text-on-surface-variant leading-relaxed mt-4">
                    The Quantum Primes engineers mathematically optimal production schedules for complex factories.
                    Connect with our team to model your plant's constraints, explore our CP-SAT scheduler product, or test a factory workbook.
                  </p>
                </div>

                {/* Direct Contact Card */}
                <div className="bg-surface-container-low p-6 rounded-2xl border border-outline-variant/40 flex flex-col gap-4">
                  <h3 className="font-eyebrow text-xs uppercase tracking-wider text-on-surface-variant font-semibold">
                    Direct Contact Channels
                  </h3>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-[18px]">email</span>
                    </div>
                    <div>
                      <div className="text-xs text-on-surface-variant">Corporate & Support Email</div>
                      <a
                        href="mailto:thequantumprimes@gmail.com"
                        className="text-sm font-semibold text-primary hover:underline"
                      >
                        thequantumprimes@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-[18px]">terminal</span>
                    </div>
                    <div>
                      <div className="text-xs text-on-surface-variant">Live Product Sandbox</div>
                      <a
                        href="http://localhost:5173"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-semibold text-on-surface hover:text-primary flex items-center gap-1"
                      >
                        <span>Launch Local Scheduler Engine</span>
                        <span className="material-symbols-outlined text-[14px]">launch</span>
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-surface-container-high text-on-surface flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-[18px]">schedule</span>
                    </div>
                    <div>
                      <div className="text-xs text-on-surface-variant">Engineering Consultations</div>
                      <div className="text-sm text-on-surface">
                        Monday – Friday, 8:00 AM – 6:00 PM EST
                      </div>
                    </div>
                  </div>
                </div>

                {/* Proven Efficiency Shelf */}
                <div className="bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant/40">
                  <h4 className="font-eyebrow text-xs uppercase tracking-wider text-on-surface-variant font-semibold mb-3">
                    Target Operational Payback
                  </h4>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div className="p-3 bg-surface-container-low rounded-xl">
                      <div className="text-primary font-bold text-lg">15%</div>
                      <div className="text-xs text-on-surface-variant">Inventory Reduction</div>
                    </div>
                    <div className="p-3 bg-surface-container-low rounded-xl">
                      <div className="text-secondary font-bold text-lg">10%</div>
                      <div className="text-xs text-on-surface-variant">Labor Cost Reduction</div>
                    </div>
                    <div className="p-3 bg-surface-container-low rounded-xl">
                      <div className="text-on-surface font-bold text-lg">+12%</div>
                      <div className="text-xs text-on-surface-variant">Capacity Utilization</div>
                    </div>
                    <div className="p-3 bg-surface-container-low rounded-xl">
                      <div className="text-primary font-bold text-lg">&lt; 45s</div>
                      <div className="text-xs text-on-surface-variant">CP-SAT Solve Speed</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Contact Form */}
              <div className="lg:col-span-7">
                <div className="bg-surface-container-lowest p-6 sm:p-8 rounded-2xl border border-outline-variant/50 shadow-lg">
                  <h2 className="text-xl sm:text-2xl font-bold text-on-surface mb-2">
                    Send an Inquiry to The Quantum Primes
                  </h2>
                  <p className="text-sm text-on-surface-variant mb-6">
                    Fill out the form below. Inquiries are instantly routed to{' '}
                    <span className="font-semibold text-primary">thequantumprimes@gmail.com</span>.
                  </p>

                  {status === 'success' && (
                    <div className="mb-6 p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200 text-sm flex items-start gap-3">
                      <span className="material-symbols-outlined text-emerald-600 dark:text-emerald-400 text-xl shrink-0 mt-0.5">
                        check_circle
                      </span>
                      <div>
                        <div className="font-semibold mb-1">Message Sent Successfully</div>
                        <div>{responseMsg}</div>
                      </div>
                    </div>
                  )}

                  {status === 'error' && (
                    <div className="mb-6 p-4 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-300 dark:border-rose-800 text-rose-900 dark:text-rose-200 text-sm flex items-start gap-3">
                      <span className="material-symbols-outlined text-rose-600 dark:text-rose-400 text-xl shrink-0 mt-0.5">
                        error
                      </span>
                      <div>
                        <div className="font-semibold mb-1">Transmission Issue</div>
                        <div>{responseMsg}</div>
                      </div>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name */}
                      <div>
                        <label className="block text-xs font-semibold text-on-surface-variant uppercase tracking-wider mb-1.5">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. John Doe"
                          className="w-full h-11 px-3.5 rounded-xl border border-outline-variant bg-surface text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary text-sm"
                        />
                      </div>

                      {/* Work Email */}
                      <div>
                        <label className="block text-xs font-semibold text-on-surface-variant uppercase tracking-wider mb-1.5">
                          Business Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="john@company.com"
                          className="w-full h-11 px-3.5 rounded-xl border border-outline-variant bg-surface text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary text-sm"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Company */}
                      <div>
                        <label className="block text-xs font-semibold text-on-surface-variant uppercase tracking-wider mb-1.5">
                          Company / Plant Name
                        </label>
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder="e.g. Global Foods Corp"
                          className="w-full h-11 px-3.5 rounded-xl border border-outline-variant bg-surface text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary text-sm"
                        />
                      </div>

                      {/* Phone */}
                      <div>
                        <label className="block text-xs font-semibold text-on-surface-variant uppercase tracking-wider mb-1.5">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+1 (555) 000-0000"
                          className="w-full h-11 px-3.5 rounded-xl border border-outline-variant bg-surface text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary text-sm"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Role */}
                      <div>
                        <label className="block text-xs font-semibold text-on-surface-variant uppercase tracking-wider mb-1.5">
                          Your Role
                        </label>
                        <select
                          value={formData.role}
                          onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                          className="w-full h-11 px-3.5 rounded-xl border border-outline-variant bg-surface text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary text-sm"
                        >
                          <option value="Plant Manager">Plant Manager / Director</option>
                          <option value="Production Planner">Master Scheduler / Planner</option>
                          <option value="VP Manufacturing">VP of Supply Chain / Operations</option>
                          <option value="Operations Research">Operations Research / Data Scientist</option>
                          <option value="IT Director">Enterprise IT / ERP Architect</option>
                          <option value="Other">Other / Consultant</option>
                        </select>
                      </div>

                      {/* Facility Type */}
                      <div>
                        <label className="block text-xs font-semibold text-on-surface-variant uppercase tracking-wider mb-1.5">
                          Manufacturing Environment
                        </label>
                        <select
                          value={formData.facilityType}
                          onChange={(e) => setFormData({ ...formData, facilityType: e.target.value })}
                          className="w-full h-11 px-3.5 rounded-xl border border-outline-variant bg-surface text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary text-sm"
                        >
                          <option value="FMCG & Packaged Goods">FMCG & Packaged Goods</option>
                          <option value="Food & Beverage">Food & Beverage (Allergen Matrices)</option>
                          <option value="Semiconductor & Electronics">Semiconductor & Electronics</option>
                          <option value="Automotive & Industrial">Automotive & Heavy Industrial</option>
                          <option value="Pharma & Medical Device">Pharma & Medical Devices</option>
                          <option value="Battery & Solar">Battery & Clean Tech</option>
                          <option value="Chemicals & Continuous">Chemicals & Continuous Processing</option>
                          <option value="Multi-Plant Enterprise">Multi-Plant Enterprise Network</option>
                        </select>
                      </div>
                    </div>

                    {/* Interested In Pills */}
                    <div>
                      <label className="block text-xs font-semibold text-on-surface-variant uppercase tracking-wider mb-2">
                        Features &amp; Capabilities of Interest (Select all that apply)
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {productOptions.map((prod) => {
                          const isSelected = formData.interestedProducts.includes(prod);
                          return (
                            <button
                              key={prod}
                              type="button"
                              onClick={() => handleProductToggle(prod)}
                              className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
                                isSelected
                                  ? 'bg-primary text-white border-primary'
                                  : 'bg-surface-container hover:bg-surface-container-high text-on-surface border-outline-variant/40'
                              }`}
                            >
                              {isSelected ? '✓ ' : '+ '}
                              {prod}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-xs font-semibold text-on-surface-variant uppercase tracking-wider mb-1.5">
                        Specific Constraints or Plant Challenge *
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Describe your factory bottlenecks, number of stages/SKUs, shift patterns, or scheduling requirements..."
                        className="w-full p-3.5 rounded-xl border border-outline-variant bg-surface text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary text-sm leading-relaxed"
                      />
                    </div>

                    {/* Submit Button & Direct Email */}
                    <div className="pt-2 flex flex-col gap-3">
                      <div className="flex flex-wrap items-center gap-3">
                        <button
                          type="submit"
                          disabled={status === 'loading'}
                          className="w-full sm:w-auto px-8 h-12 bg-primary hover:bg-primary-container text-white font-medium text-sm rounded-xl flex items-center justify-center gap-2 transition-all shadow-md hover:shadow-lg disabled:opacity-70 active:scale-95"
                        >
                          {status === 'loading' ? (
                            <>
                              <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                              <span>Transmitting Inquiry...</span>
                            </>
                          ) : (
                            <>
                              <span>Submit Online Form</span>
                              <span className="material-symbols-outlined text-[18px]">send</span>
                            </>
                          )}
                        </button>

                        <button
                          type="button"
                          onClick={handleGmailCompose}
                          className="w-full sm:w-auto px-5 h-12 bg-surface-container hover:bg-surface-container-high text-on-surface font-medium text-sm rounded-xl flex items-center justify-center gap-2 transition-all border border-outline-variant/50 active:scale-95"
                          title="Open directly in Gmail with all your filled parameters pre-populated"
                        >
                          <span className="material-symbols-outlined text-primary text-[18px]">mail</span>
                          <span>Open in Gmail App</span>
                        </button>
                      </div>

                      <p className="text-xs text-on-surface-variant">
                        Submissions route directly to{' '}
                        <strong className="text-on-surface">thequantumprimes@gmail.com</strong> with zero mail server setup required.
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="w-full py-16 bg-surface-container-low border-t border-outline-variant/40">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-on-surface text-center mb-8">
              Frequently Asked Questions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant/30">
                <h4 className="font-semibold text-base text-on-surface mb-2">
                  Can we test our own factory workbook?
                </h4>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  Yes. You can drop your Excel workbook (with orders, SKUs, routing stages, and equipment capacity) into our Production Scheduler demo sandbox. The CP-SAT engine will generate a complete constraint-satisfying plan in under 45 seconds.
                </p>
              </div>

              <div className="bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant/30">
                <h4 className="font-semibold text-base text-on-surface mb-2">
                  How does Cadence integrate with our existing ERP?
                </h4>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  The Quantum Primes provides pre-built REST API endpoints and bi-directional connectors for SAP S/4HANA, NetSuite, Oracle Fusion, Microsoft Dynamics 365, and Plex. Production orders sync in real-time.
                </p>
              </div>

              <div className="bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant/30">
                <h4 className="font-semibold text-base text-on-surface mb-2">
                  What is the difference between heuristic schedulers and CP-SAT?
                </h4>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  Legacy heuristic schedulers use greedy dispatch rules that generate infeasible plans when disruptions happen. Google OR-Tools CP-SAT explores the combinatorial space mathematically, guaranteeing constraint satisfaction and optimal makespan.
                </p>
              </div>

              <div className="bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant/30">
                <h4 className="font-semibold text-base text-on-surface mb-2">
                  Can we deploy on-premises or air-gapped?
                </h4>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  Yes. The entire scheduler backend (Django + OR-Tools) and React Gantt frontend run completely self-contained in Docker containers without requiring any external internet egress.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <CadenceFooter />
      <CadenceDemoModal isOpen={isDemoModalOpen} onClose={() => setIsDemoModalOpen(false)} />
    </div>
  );
}
