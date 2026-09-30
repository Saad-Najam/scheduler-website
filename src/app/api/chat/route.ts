import { NextRequest, NextResponse } from 'next/server';

const SYSTEM_PROMPT = `You are the official AI Assistant for The Quantum Primes (company email: thequantumprimes@gmail.com).

About The Quantum Primes:
- We are a deep-tech industrial intelligence and operations research company engineering deterministic mathematical optimization engines and AI plant assistants.
- Flagship product: Cadence Production Scheduler (APS - Advanced Planning & Scheduling platform).

Technical Architecture of Cadence Production Scheduler:
- Product codebase location: C:\\Users\\Hp\\OneDrive\\Desktop 2\\scheduler\\scheduler-demo
- Backend: Django 6.1 REST API + Google OR-Tools CP-SAT solver running on http://localhost:8000.
- Frontend: React 19 + Vite interactive Gantt chart running on http://localhost:5173 with dual 8-hour shift shading and live conflict visualization.
- Mathematical Engine: Google OR-Tools CP-SAT (Constraint Programming - Satisfiability). Solves 1,782+ tasks across 3-month horizons in ~48 seconds with finite capacity, setup matrices, and multi-tier routing trees.
- Ingestion: Drop-and-solve Excel workbook upload (supports Jobs, Operations, Work Centers, Routing, Shifts, and Sequence-Dependent Cleanout Setup Matrices).
- Quality: 286 automated backend tests, 11 vitest frontend tests.
- Enterprise Integrations: SAP S/4HANA, Oracle NetSuite, Microsoft Dynamics 365, Plex MES, SCADA OPC-UA.
- Verified ROI: 15% WIP inventory reduction, 10% labor overtime reduction, +12% equipment OEE/utilization.

Tone & Instructions:
1. Always directly and accurately answer what the user asks.
2. For greetings (e.g. "hi", "hello", "hey"), greet them warmly and ask how you can assist with our company, the Cadence scheduler, CP-SAT solver, or plant optimization. Do NOT output a pre-canned generic lecture when asked simple greetings.
3. Be concise, technically precise, and friendly. Use clean bullet points where appropriate.
4. If the user asks about booking a demo, pricing, or getting in touch, share thequantumprimes@gmail.com and the /contact page.
5. If the user asks how to run or test the demo, explain that the scheduler demo is hosted locally at http://localhost:5173 and backend at http://localhost:8000.`;

interface ChatMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

// 1. Try Google Gemini API
async function callGemini(messages: ChatMessage[]): Promise<string | null> {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey || apiKey.trim() === '' || apiKey.includes('your-')) {
    return null;
  }

  const modelsToTry = [
    process.env.GEMINI_MODEL || 'gemini-3.5-flash',
    'gemini-flash-latest',
  ];

  // Format history for Gemini
  const contents = messages
    .filter((m) => m.role === 'user' || m.role === 'assistant')
    .map((m) => ({
      role: m.role === 'user' ? 'user' : 'model',
      parts: [{ text: m.content }],
    }));

  if (contents.length === 0) return null;

  for (const model of modelsToTry) {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;
    const requestBody = {
      system_instruction: {
        parts: [{ text: SYSTEM_PROMPT }],
      },
      contents,
      generationConfig: {
        temperature: 0.6,
        maxOutputTokens: 1000,
      },
    };

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000);

    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(requestBody),
        signal: controller.signal,
      });
      clearTimeout(timeoutId);

      if (res.ok) {
        const data = await res.json();
        const candidateText = data?.candidates?.[0]?.content?.parts?.[0]?.text;
        if (candidateText && typeof candidateText === 'string') {
          return candidateText.trim();
        }
      } else {
        const errText = await res.text();
        console.warn(`[Gemini API - ${model}] Failed status ${res.status}:`, errText);
      }
    } catch (err: unknown) {
      clearTimeout(timeoutId);
      console.warn(`[Gemini API - ${model}] Error:`, err instanceof Error ? err.message : String(err));
    }
  }

  return null;
}

// 2. Try Groq Cloud API (fallback)
async function callGroq(messages: ChatMessage[]): Promise<string | null> {
  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey || apiKey.trim() === '' || apiKey.includes('your-')) {
    return null;
  }

  // Verified active Groq models for this account
  const modelsToTry = [
    process.env.GROQ_MODEL || 'openai/gpt-oss-120b',
    'openai/gpt-oss-20b',
    'qwen/qwen3.8-27b',
    'llama-3.3-70b-versatile',
  ];

  const url = 'https://api.groq.com/openai/v1/chat/completions';
  const groqMessages = [
    { role: 'system', content: SYSTEM_PROMPT },
    ...messages.map((m) => ({
      role: m.role === 'user' ? 'user' : 'assistant',
      content: m.content,
    })),
  ];

  for (const model of modelsToTry) {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000);

    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model,
          messages: groqMessages,
          temperature: 0.6,
        }),
        signal: controller.signal,
      });
      clearTimeout(timeoutId);

      if (res.ok) {
        const data = await res.json();
        const reply = data?.choices?.[0]?.message?.content;
        if (reply && typeof reply === 'string') {
          return reply.trim();
        }
      } else {
        const errText = await res.text();
        console.warn(`[Groq API - ${model}] Failed status ${res.status}:`, errText);
      }
    } catch (err: unknown) {
      clearTimeout(timeoutId);
      console.warn(`[Groq API - ${model}] Error:`, err instanceof Error ? err.message : String(err));
    }
  }

  return null;
}

// 3. Smart local context fallback (handles greetings, specific questions, contact requests)
function generateLocalFallback(userMessage: string): string {
  const q = userMessage.trim().toLowerCase();

  // Greetings
  if (/^(hi|hello|hey|hola|greetings|good\s*(morning|afternoon|evening)|howdy)\b/i.test(q)) {
    return `Hello! Welcome to The Quantum Primes.

I'm your AI assistant for the Cadence Production Scheduler and operations research platform. How can I assist you today? 

Feel free to ask about:
• Our Google OR-Tools CP-SAT scheduling engine
• How to upload and test your factory Excel workbook
• Multi-plant routing and dual-shift modeling
• Getting in touch with our engineering team (thequantumprimes@gmail.com)`;
  }

  // Company / Who are you
  if (q.includes('who are you') || q.includes('company') || q.includes('quantum primes') || q.includes('about you')) {
    return `The Quantum Primes is a deep-tech industrial intelligence and operations research company. 

We engineer deterministic mathematical optimization engines, multi-plant supply chain architectures, and AI plant assistants to replace heuristic guesswork with exact combinatorial ground truth.

Our flagship product is the Cadence Production Scheduler. Learn more on our Company page (/company) or reach out directly at thequantumprimes@gmail.com.`;
  }

  // Production Scheduler / Product Details
  if (q.includes('scheduler') || q.includes('product') || q.includes('cadence') || q.includes('demo')) {
    return `The Cadence Production Scheduler is our flagship APS platform:
• Mathematical Engine: Google OR-Tools CP-SAT (Constraint Programming - Satisfiability).
• Architecture: Django 6.1 DRF API (port 8000) with React 19 interactive Gantt UI (port 5173).
• Performance: Solves 1,782+ tasks in ~48s with finite capacity and dual 8-hour shift modeling.
• Capabilities: Multi-tier routing trees, sequence cleanout setup matrices, raw material BOM shortfall tracking, and instant plan reload (⚡).
• Tested: 286 automated backend tests and 11 vitest tests.

You can launch the live application at http://localhost:5173.`;
  }

  // Excel Workbook Testing
  if (q.includes('excel') || q.includes('workbook') || q.includes('test') || q.includes('upload') || q.includes('data')) {
    return `You can test your factory workbook right away!
1. Launch our demo app at http://localhost:5173.
2. Select your planning horizon (1, 2, 3, or 6 months).
3. Drop your factory Excel workbook containing your Orders, Operations, Work Centers, Routing, and Shift definitions.
4. The CP-SAT solver builds a conflict-free schedule in ~45 seconds and visualizes it immediately on the interactive Gantt chart.`;
  }

  // Solver / CP-SAT
  if (q.includes('solver') || q.includes('cp-sat') || q.includes('algorithm') || q.includes('or-tools')) {
    return `Unlike legacy schedulers that rely on greedy heuristics or rigid spreadsheets, Cadence uses Google OR-Tools CP-SAT (Constraint Programming - Satisfiability).

It models machine contention, worker shifts, sequence-dependent cleanouts, and multi-stage dependencies as exact mathematical constraints—solving thousands of tasks with provable optimality.`;
  }

  // Contact / Demo / Sales / Email
  if (q.includes('contact') || q.includes('email') || q.includes('sales') || q.includes('hire') || q.includes('book') || q.includes('meeting')) {
    return `You can reach The Quantum Primes team anytime:
• Email: thequantumprimes@gmail.com
• Full inquiry form: /contact
• Local Scheduler Sandbox: http://localhost:5173

Our engineering team reviews inquiries and responds within 24 hours.`;
  }

  // ERP / MES integrations
  if (q.includes('erp') || q.includes('sap') || q.includes('mes') || q.includes('integration') || q.includes('oracle') || q.includes('netsuite')) {
    return `Cadence integrates natively with enterprise systems including SAP S/4HANA, Oracle NetSuite, Microsoft Dynamics 365, Plex MES, and SCADA OPC-UA. It acts as the mathematical finite-capacity bridge between high-level ERP orders and shop-floor execution.`;
  }

  // ROI / Savings
  if (q.includes('roi') || q.includes('saving') || q.includes('cost') || q.includes('benefit')) {
    return `Plants running on our scheduling engine achieve verified benchmarks:
• 15% WIP inventory reduction
• 10% Labor overtime reduction
• +12% Equipment capacity utilization (OEE)
• +5% Gross margin improvement through minimized sequence cleanout downtime.`;
  }

  // Polite general fallback
  return `Thank you for asking! The Quantum Primes specializes in deterministic finite-capacity production scheduling (Google OR-Tools CP-SAT) and industrial AI plant assistants.

Would you like to know more about our Cadence Scheduler product, how to test your factory Excel workbook, or would you like to speak directly with an engineer at thequantumprimes@gmail.com?`;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const messages: ChatMessage[] = Array.isArray(body?.messages) ? body.messages : [];

    const lastUserMessage = [...messages].reverse().find((m) => m.role === 'user')?.content || '';

    if (!lastUserMessage.trim()) {
      return NextResponse.json(
        { error: 'No message provided' },
        { status: 400 }
      );
    }

    // Step 1: Try Gemini API
    const geminiReply = await callGemini(messages);
    if (geminiReply) {
      return NextResponse.json({
        reply: geminiReply,
        provider: 'gemini',
      });
    }

    // Step 2: Try Groq API (fallback)
    const groqReply = await callGroq(messages);
    if (groqReply) {
      return NextResponse.json({
        reply: groqReply,
        provider: 'groq',
      });
    }

    // Step 3: Local context fallback (no API keys or quota exceeded)
    const localReply = generateLocalFallback(lastUserMessage);
    return NextResponse.json({
      reply: localReply,
      provider: 'local-fallback',
    });
  } catch (err: unknown) {
    console.error('Error in /api/chat:', err);
    return NextResponse.json(
      {
        reply: "I'm having trouble processing that right now. Please reach out to our team directly at thequantumprimes@gmail.com!",
        provider: 'error-fallback',
      },
      { status: 200 }
    );
  }
}
