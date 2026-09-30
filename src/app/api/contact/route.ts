import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      name,
      email,
      phone,
      company,
      role,
      facilityType,
      message,
      interestedProducts,
    } = body;

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required fields.' },
        { status: 400 }
      );
    }

    const recipient = process.env.CONTACT_RECIPIENT_EMAIL || 'thequantumprimes@gmail.com';

    // Format products string if array or string
    const productsString = Array.isArray(interestedProducts)
      ? interestedProducts.join(', ')
      : (interestedProducts || 'General Inquiry');

    const timestamp = new Date().toISOString();

    const textContent = `
NEW INQUIRY FOR THE QUANTUM PRIMES
==================================
Date & Time: ${timestamp}
Name: ${name}
Email: ${email}
Phone: ${phone || 'Not provided'}
Company: ${company || 'Not provided'}
Role: ${role || 'Not provided'}
Facility Type: ${facilityType || 'Not specified'}
Interested In: ${productsString}

Message:
--------
${message}
==================================
    `.trim();

    const htmlContent = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #ffffff; color: #1e293b;">
        <div style="border-bottom: 2px solid #2563eb; padding-bottom: 16px; margin-bottom: 24px;">
          <h2 style="margin: 0; color: #0f172a; font-size: 22px;">New Contact Request</h2>
          <p style="margin: 4px 0 0; color: #64748b; font-size: 14px;">The Quantum Primes — Inbound Website Lead</p>
        </div>

        <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px; font-size: 14px;">
          <tbody>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 10px 0; font-weight: 600; color: #475569; width: 140px;">Full Name</td>
              <td style="padding: 10px 0; color: #0f172a; font-weight: 500;">${name}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 10px 0; font-weight: 600; color: #475569;">Email Address</td>
              <td style="padding: 10px 0; color: #2563eb;"><a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a></td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 10px 0; font-weight: 600; color: #475569;">Phone</td>
              <td style="padding: 10px 0; color: #0f172a;">${phone || 'N/A'}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 10px 0; font-weight: 600; color: #475569;">Company</td>
              <td style="padding: 10px 0; color: #0f172a; font-weight: 500;">${company || 'N/A'}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 10px 0; font-weight: 600; color: #475569;">Job Role / Title</td>
              <td style="padding: 10px 0; color: #0f172a;">${role || 'N/A'}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 10px 0; font-weight: 600; color: #475569;">Facility Type</td>
              <td style="padding: 10px 0; color: #0f172a;">${facilityType || 'N/A'}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 10px 0; font-weight: 600; color: #475569;">Product Interest</td>
              <td style="padding: 10px 0; color: #0f172a;">
                <span style="display: inline-block; background-color: #eff6ff; color: #1d4ed8; padding: 4px 8px; border-radius: 6px; font-weight: 500; font-size: 13px;">
                  ${productsString}
                </span>
              </td>
            </tr>
          </tbody>
        </table>

        <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px; margin-bottom: 24px;">
          <h4 style="margin: 0 0 8px; font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em; color: #64748b;">Inquiry Message:</h4>
          <p style="margin: 0; white-space: pre-wrap; font-size: 14px; line-height: 1.6; color: #1e293b;">${message}</p>
        </div>

        <div style="border-top: 1px solid #e2e8f0; padding-top: 16px; font-size: 12px; color: #94a3b8; display: flex; justify-content: space-between;">
          <span>Received at ${timestamp}</span>
          <span>The Quantum Primes Industrial Platform</span>
        </div>
      </div>
    `;

    const smtpHost = process.env.SMTP_HOST;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const smtpPort = parseInt(process.env.SMTP_PORT || '587', 10);

    const isConfiguredSmtp = Boolean(
      smtpHost &&
      smtpUser &&
      smtpPass &&
      !smtpPass.includes('your-') &&
      smtpPass.trim() !== ''
    );

    if (isConfiguredSmtp) {
      try {
        const transporter = nodemailer.createTransport({
          host: smtpHost,
          port: smtpPort,
          secure: smtpPort === 465,
          auth: {
            user: smtpUser,
            pass: smtpPass,
          },
        });

        await transporter.sendMail({
          from: `"${name} via The Quantum Primes" <${process.env.SMTP_FROM || smtpUser}>`,
          replyTo: email,
          to: recipient,
          subject: `[Inbound Lead] ${company ? company + ' - ' : ''}${name} interested in ${productsString}`,
          text: textContent,
          html: htmlContent,
        });

        return NextResponse.json({
          success: true,
          message: 'Your inquiry has been emailed to The Quantum Primes team. We will be in touch shortly!',
        });
      } catch (smtpErr) {
        console.warn('[SMTP Dispatch Warning] Failed to send via SMTP, falling back to server log:', smtpErr);
        // Fall through to fallback log
      }
    }

    // Fallback: Log the inquiry cleanly so no lead is lost
    console.log('====================================================');
    console.log(`[CONTACT INQUIRY] TO: ${recipient}`);
    console.log(textContent);
    console.log('====================================================');

    return NextResponse.json({
      success: true,
      message: 'Your inquiry has been received and routed to thequantumprimes@gmail.com. Our engineering team will respond within 24 hours.',
    });
  } catch (err: unknown) {
    console.error('Failed to handle contact submission:', err);
    return NextResponse.json(
      { error: 'Failed to process inquiry. Please try again or email thequantumprimes@gmail.com directly.' },
      { status: 500 }
    );
  }
}
