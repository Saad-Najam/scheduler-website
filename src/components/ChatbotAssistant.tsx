'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

interface Message {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  timestamp: string;
  isLeadCapture?: boolean;
  provider?: string;
}

export default function ChatbotAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [leadEmail, setLeadEmail] = useState('');
  const [leadSubmitted, setLeadSubmitted] = useState(false);
  const [leadLoading, setLeadLoading] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const initialMessages: Message[] = [
    {
      id: 'm-1',
      sender: 'assistant',
      text: "Hi — you've reached The Quantum Primes team! I am your AI assistant. Send your question and I'll guide you through our company, products, and scheduling technology.",
      timestamp: 'Just now',
    },
    {
      id: 'm-2',
      sender: 'assistant',
      text: "Don't have time to wait for a response? Leave your email below and our engineering team will get in touch directly.",
      timestamp: 'Just now',
      isLeadCapture: true,
    }
  ];

  const [messages, setMessages] = useState<Message[]>(initialMessages);

  const quickChips = [
    'What does The Quantum Primes do?',
    'Tell me about the Scheduler features & capabilities',
    'How do I test our factory Excel workbook?',
    'What solver does Cadence use?',
    'How do I contact sales or book a demo?',
  ];

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener('open-quantum-chat', handleOpen);

    if (typeof window !== 'undefined' && window.location.hash === '#chat') {
      setIsOpen(true);
    }

    return () => {
      window.removeEventListener('open-quantum-chat', handleOpen);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen, isTyping]);

  const handleLeadSubmit = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!leadEmail.trim() || !leadEmail.includes('@')) return;

    setLeadLoading(true);
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: 'Chat Visitor',
          email: leadEmail,
          message: 'Chatbot quick lead capture from website visitor',
          facilityType: 'Website Inquiry',
          interestedProducts: ['Production Scheduler (Cadence APS)'],
        }),
      });

      setLeadSubmitted(true);
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now().toString(),
          sender: 'assistant',
          text: `Thank you! We've sent your email (${leadEmail}) to thequantumprimes@gmail.com. An engineer will reach out to you shortly. In the meantime, feel free to ask me anything!`,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
    } catch {
      setLeadSubmitted(true);
    } finally {
      setLeadLoading(false);
    }
  };

  const answerQuery = (q: string): string => {
    const lower = q.toLowerCase();

    // 0. Greetings
    if (/^(hi|hello|hey|hola|greetings|good\s*(morning|afternoon|evening)|howdy)\b/i.test(lower)) {
      return "Hello! Welcome to The Quantum Primes.\n\nI'm your AI assistant for the Cadence Production Scheduler. How can I help you today? You can ask about our Google OR-Tools CP-SAT finite-capacity solver, uploading Excel workbooks, multi-plant routing, or getting in touch with our team.";
    }

    // 1. Company
    if (lower.includes('company') || lower.includes('quantum primes') || lower.includes('who are you') || lower.includes('about')) {
      return "The Quantum Primes is a deep-tech industrial intelligence and operations research company. We engineer deterministic mathematical optimization engines, multi-plant supply chain architectures, and AI plant assistants. Our mission is to replace heuristic guesswork with exact combinatorial ground truth. You can learn more on our Company page or reach us at thequantumprimes@gmail.com.";
    }

    // 2. Production Scheduler Product
    if (lower.includes('scheduler') || lower.includes('cadence') || lower.includes('product') || lower.includes('demo')) {
      return "Our flagship product is the Cadence Production Scheduler. It features:\n• Backend: Django 6.1 REST API + Google OR-Tools CP-SAT solver (running on port 8000).\n• Frontend: React 19 + Vite interactive Gantt with shift shading (running on port 5173).\n• Capabilities: Finite-capacity multi-plant routing, dual 8-hr shift modeling, 1-6 month planning horizons (up to 3,564 tasks), raw material BOM shortfall costing, instant plan reload (⚡), and scenario re-solving.\n• Validation: Tested with 286 automated backend tests and 11 vitest frontend tests.";
    }

    // 3. Testing Excel Workbook
    if (lower.includes('excel') || lower.includes('workbook') || lower.includes('upload') || lower.includes('data') || lower.includes('test')) {
      return "You can test your factory workbook right away! In our scheduler demo sandbox (running at http://localhost:5173):\n1. Select a planning horizon (1, 2, 3, or 6 months).\n2. Drop your factory Excel workbook (with orders, SKUs, and stage routing) onto the upload zone.\n3. The CP-SAT solver builds a complete, conflict-free schedule in ~45 seconds and renders it on the interactive Gantt.";
    }

    // 4. Solver / CP-SAT
    if (lower.includes('solver') || lower.includes('cp-sat') || lower.includes('or-tools') || lower.includes('algorithm') || lower.includes('math')) {
      return "Unlike legacy schedulers that use greedy heuristics or spreadsheets, Cadence uses Google OR-Tools CP-SAT (Constraint Programming - Satisfiability). It models machine contention, worker shifts, sequence-dependent cleanouts, and multi-stage dependencies as exact mathematical constraints. Solves 1,782 tasks in ~48s with provable optimality!";
    }

    // 5. Contact / Demo / Sales / Email
    if (lower.includes('contact') || lower.includes('email') || lower.includes('book') || lower.includes('hire') || lower.includes('sales')) {
      return "You can get in touch with The Quantum Primes team in several ways:\n• Email us directly: thequantumprimes@gmail.com\n• Visit our Contact page (/contact) for a detailed plant evaluation inquiry\n• Launch the local scheduler demo at http://localhost:5173\nWe respond to all plant inquiries within 24 hours.";
    }

    // 6. ERP Integration / MES / SIOP
    if (lower.includes('erp') || lower.includes('sap') || lower.includes('mes') || lower.includes('siop') || lower.includes('integration') || lower.includes('oracle')) {
      return "Cadence natively integrates with your existing enterprise stack, including SAP S/4HANA, Oracle NetSuite, Microsoft Dynamics 365, Plex MES, and SCADA OPC-UA. It acts as the mathematical scheduling engine between enterprise ERP orders and shop-floor execution.";
    }

    // 7. ROI & Efficiencies
    if (lower.includes('roi') || lower.includes('cost') || lower.includes('saving') || lower.includes('benefit') || lower.includes('metric')) {
      return "Plants powered by our platform achieve verified operational ROI:\n• 15% Inventory reduction (WIP & buffer stock)\n• 10% Labor cost reduction (overtime & idle time reduction)\n• +12% Capacity utilization & equipment OEE\n• 4% Capital asset growth control\n• +5% Gross margin improvement through optimized sequencing.";
    }

    // Default friendly answer
    return `That's a great question about our platform! The Quantum Primes engineers mathematically optimal finite-capacity production schedules and plant AI. If you'd like to explore this specifically for your plant lines, leave your email above or reach us directly at thequantumprimes@gmail.com. What else would you like to know?`;
  };

  const handleSend = async (textToSend?: string) => {
    const q = textToSend || input;
    if (!q.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: q,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    const nextMessages = [...messages, userMsg];
    setMessages(nextMessages);
    setInput('');
    setIsTyping(true);

    try {
      // Call backend API which evaluates Gemini -> Grok -> Local smart fallback
      const historyPayload = nextMessages
        .filter((m) => !m.isLeadCapture)
        .map((m) => ({
          role: m.sender === 'user' ? 'user' : 'assistant',
          content: m.text,
        }));

      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: historyPayload }),
      });

      if (res.ok) {
        const data = await res.json();
        const replyText = data.reply || answerQuery(q);
        setMessages((prev) => [
          ...prev,
          {
            id: (Date.now() + 1).toString(),
            sender: 'assistant',
            text: replyText,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            provider: data.provider,
          },
        ]);
      } else {
        throw new Error('Chat API call failed');
      }
    } catch {
      // Fallback gracefully to local knowledge base
      const fallbackReply = answerQuery(q);
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          sender: 'assistant',
          text: fallbackReply,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          provider: 'local-fallback',
        },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <>
      {/* Floating Toggle Button & Pill (Bottom-Right) */}
      <div className="fixed bottom-6 right-6 z-[99999] pointer-events-auto flex items-center gap-3">
        {!isOpen && (
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="flex items-center gap-2 bg-white dark:bg-[#1E293B] text-slate-800 dark:text-slate-100 text-xs font-semibold px-3.5 py-2 rounded-full shadow-lg border border-slate-200 dark:border-slate-700 hover:shadow-xl hover:scale-105 transition-all cursor-pointer select-none active:scale-95"
            title="Open AI Assistant"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Ask Quantum AI</span>
          </button>
        )}

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className={`w-14 h-14 rounded-full flex items-center justify-center text-white shadow-2xl transition-all duration-300 active:scale-95 cursor-pointer ${
            isOpen
              ? 'bg-[#0F172A] hover:bg-[#1E293B] rotate-90 ring-4 ring-slate-400/20'
              : 'bg-gradient-to-tr from-[#0284C7] to-[#2563EB] hover:scale-105 shadow-blue-500/40 ring-4 ring-blue-400/20'
          }`}
          aria-label={isOpen ? 'Close chat' : 'Open chat assistant'}
        >
          {isOpen ? (
            <span className="material-symbols-outlined text-[26px]">close</span>
          ) : (
            <div className="relative flex items-center justify-center pointer-events-none">
              <span className="material-symbols-outlined text-[28px]">chat_bubble</span>
              <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-400 border-2 border-white rounded-full"></span>
            </div>
          )}
        </button>
      </div>

      {/* Chat Window Panel */}
      {isOpen && (
        <div className="fixed bottom-24 right-4 sm:right-6 z-[99999] w-[94vw] sm:w-[410px] h-[580px] max-h-[82vh] bg-white dark:bg-[#0c1017] border border-slate-200 dark:border-slate-800 shadow-2xl rounded-2xl flex flex-col overflow-hidden transition-all duration-200 pointer-events-auto">
          {/* Header Bar (Styled like the uploaded reference) */}
          <div className="bg-gradient-to-r from-[#0284C7] to-[#2563EB] text-white p-4 flex items-center justify-between shadow-md">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white font-bold text-sm">
                  QP
                </div>
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-400 border-2 border-[#0284C7] rounded-full"></span>
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-sm leading-tight">The Quantum Primes</span>
                <span className="text-[11px] text-blue-100 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-300"></span>
                  AI Assistant · Online
                </span>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={() => setMessages(initialMessages)}
                className="w-8 h-8 rounded-full flex items-center justify-center text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                title="Reset conversation"
              >
                <span className="material-symbols-outlined text-[18px]">restart_alt</span>
              </button>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full flex items-center justify-center text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Close"
              >
                <span className="material-symbols-outlined text-[18px]">close</span>
              </button>
            </div>
          </div>

          {/* Sub-header Notice */}
          <div className="py-1.5 px-4 bg-surface-container-low border-b border-outline-variant/30 text-center text-[11px] text-on-surface-variant font-medium">
            We typically reply instantly · Powered by The Quantum Primes
          </div>

          {/* Messages Stream */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3.5">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                {/* Assistant Name Label */}
                {msg.sender === 'assistant' && (
                  <div className="flex items-center gap-1.5 mb-1 px-1 text-[11px] font-semibold text-on-surface-variant">
                    <span className="w-4 h-4 rounded-full bg-primary/20 text-primary flex items-center justify-center text-[9px] font-bold">
                      QP
                    </span>
                    <span>Quantum Assistant</span>
                    {msg.provider && msg.provider !== 'local-fallback' && (
                      <span className="text-[9px] px-1.5 py-0.2 rounded-full bg-primary/10 text-primary font-mono uppercase">
                        {msg.provider}
                      </span>
                    )}
                  </div>
                )}

                {/* Message Bubble */}
                <div
                  className={`p-3.5 rounded-2xl text-xs sm:text-[13px] leading-relaxed max-w-[88%] whitespace-pre-line ${
                    msg.sender === 'user'
                      ? 'bg-[#0284C7] text-white rounded-br-none shadow-sm'
                      : 'bg-surface-container-low text-on-surface border border-outline-variant/40 rounded-tl-none'
                  }`}
                >
                  <p>{msg.text}</p>

                  {/* Lead Capture Card (Matching the user screenshot) */}
                  {msg.isLeadCapture && !leadSubmitted && (
                    <form onSubmit={handleLeadSubmit} className="mt-3 pt-3 border-t border-outline-variant/30 flex flex-col gap-2">
                      <div className="relative flex items-center">
                        <input
                          type="email"
                          required
                          value={leadEmail}
                          onChange={(e) => setLeadEmail(e.target.value)}
                          placeholder="Enter your email address"
                          className="w-full h-9 pl-3 pr-10 rounded-xl bg-surface border border-outline-variant text-xs text-on-surface placeholder:text-on-surface-variant/60 focus:outline-none focus:ring-1 focus:ring-primary"
                        />
                        <button
                          type="submit"
                          disabled={leadLoading}
                          className="absolute right-1.5 w-7 h-7 rounded-lg bg-primary hover:bg-primary-container text-white flex items-center justify-center transition-all disabled:opacity-50"
                          title="Submit email"
                        >
                          <span className="material-symbols-outlined text-[15px]">send</span>
                        </button>
                      </div>
                      <span className="text-[10px] text-on-surface-variant">
                        Direct delivery to <strong>thequantumprimes@gmail.com</strong>
                      </span>
                    </form>
                  )}

                  {msg.isLeadCapture && leadSubmitted && (
                    <div className="mt-2 p-2 rounded-lg bg-emerald-500/10 text-emerald-600 text-[11px] flex items-center gap-1.5 font-medium">
                      <span className="material-symbols-outlined text-[15px]">check_circle</span>
                      <span>Email noted! We will reach out soon.</span>
                    </div>
                  )}
                </div>

                <span className="text-[10px] text-on-surface-variant/70 mt-1 px-1">
                  {msg.timestamp}
                </span>
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center gap-1.5 p-3 bg-surface-container-low rounded-2xl w-fit text-xs text-on-surface-variant">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-bounce"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-bounce [animation-delay:0.2s]"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-bounce [animation-delay:0.4s]"></span>
                <span className="text-[11px] ml-1">Quantum Assistant is typing...</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Question Chips */}
          <div className="px-3 py-2 bg-surface-container-low/60 border-t border-outline-variant/30 flex items-center gap-1.5 overflow-x-auto no-scrollbar">
            {quickChips.map((chip, i) => (
              <button
                key={i}
                type="button"
                onClick={() => handleSend(chip)}
                className="shrink-0 px-2.5 py-1 rounded-full bg-surface hover:bg-surface-container text-[11px] text-on-surface hover:text-primary border border-outline-variant/40 transition-colors whitespace-nowrap"
              >
                {chip}
              </button>
            ))}
          </div>

          {/* Bottom Chat Input Bar (Matching screenshot) */}
          <div className="p-3 bg-surface-container-low border-t border-outline-variant">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="flex items-center gap-2 bg-surface rounded-full border border-outline-variant px-3 py-1.5 focus-within:border-primary focus-within:ring-1 focus-within:ring-primary transition-all"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Write a message..."
                className="flex-1 bg-transparent text-xs sm:text-[13px] text-on-surface placeholder:text-on-surface-variant/60 focus:outline-none py-1"
              />

              <button
                type="button"
                onClick={() => handleSend('Tell me how to get in touch')}
                className="text-on-surface-variant hover:text-primary transition-colors p-1"
                title="Quick Contact"
              >
                <span className="material-symbols-outlined text-[18px]">help_outline</span>
              </button>

              <button
                type="submit"
                disabled={!input.trim() || isTyping}
                className="w-7 h-7 rounded-full bg-[#0284C7] hover:bg-[#0369A1] text-white flex items-center justify-center transition-all disabled:opacity-40 disabled:hover:bg-[#0284C7] active:scale-95 shrink-0"
                aria-label="Send message"
              >
                <span className="material-symbols-outlined text-[15px]">send</span>
              </button>
            </form>

            <div className="flex items-center justify-between text-[10px] text-on-surface-variant mt-2 px-1">
              <span>Contact: <strong>thequantumprimes@gmail.com</strong></span>
              <Link href="/contact" className="text-primary hover:underline font-medium">
                Full Contact Form →
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
