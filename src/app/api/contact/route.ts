import { type NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

async function sendViaFormspree(formData: { name: string; email: string; phone: string; subject: string; message: string }) {
  const formspreeEndpoint = process.env.FORMSPREE_ENDPOINT;
  if (!formspreeEndpoint) {
    throw new Error('Formspree endpoint not configured');
  }

  const response = await fetch(formspreeEndpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      subject: formData.subject,
      message: formData.message,
      _replyto: formData.email,
      _subject: `Contact Form: ${formData.subject}`,
    }),
  });

  if (!response.ok) {
    throw new Error(`Formspree request failed: ${response.status}`);
  }

  return await response.json();
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    const formData = { name, email, phone, subject, message };
    let emailSent = false;
    let emailMethod = 'none';

    // Try Resend first
    if (process.env.RESEND_API_KEY && process.env.RESEND_API_KEY !== 'your_actual_resend_api_key_here') {
      try {
        const { data, error } = await resend.emails.send({
          from: 'Contact Form <noreply@supersoniccustoms.co.za>',
          to: ['info@supersonicafrica.co.za'],
          replyTo: email,
          subject: `Contact Form: ${subject}`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #2b3a99; border-bottom: 2px solid #2b3a99; padding-bottom: 10px;">
                New Contact Form Submission
              </h2>

              <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <p style="margin: 8px 0;"><strong>Name:</strong> ${name}</p>
                <p style="margin: 8px 0;"><strong>Email:</strong> ${email}</p>
                <p style="margin: 8px 0;"><strong>Phone:</strong> ${phone || 'Not provided'}</p>
                <p style="margin: 8px 0;"><strong>Subject:</strong> ${subject}</p>
              </div>

              <div style="margin: 20px 0;">
                <p><strong>Message:</strong></p>
                <div style="background-color: #ffffff; padding: 15px; border-left: 4px solid #2b3a99; margin: 10px 0;">
                  ${message.replace(/\n/g, '<br>')}
                </div>
              </div>

              <hr style="border: none; border-top: 1px solid #dee2e6; margin: 30px 0;">
              <p style="color: #6c757d; font-size: 14px; text-align: center;">
                <em>This message was sent from the Supersonic Customs website contact form at ${new Date().toLocaleString()}</em>
              </p>
            </div>
          `,
        });

        if (error) {
          console.error('Resend email failed:', error);
        } else {
          emailSent = true;
          emailMethod = 'resend';
          console.log('Email sent via Resend:', { name, email, subject, id: data?.id });
        }
      } catch (error) {
        console.error('Resend error:', error);
      }
    }

    // Try Formspree as backup if Resend failed
    if (!emailSent && process.env.FORMSPREE_ENDPOINT) {
      try {
        await sendViaFormspree(formData);
        emailSent = true;
        emailMethod = 'formspree';
        console.log('Email sent via Formspree:', { name, email, subject });
      } catch (error) {
        console.error('Formspree error:', error);
      }
    }

    // Always log the form submission
    console.log('Contact form submission received:', {
      ...formData,
      timestamp: new Date().toISOString(),
      emailSent,
      emailMethod
    });

    // Always return success to user (don't expose email service issues)
    return NextResponse.json(
      {
        message: 'Thank you for your message! We will get back to you within 24 hours.',
        emailSent,
        method: emailMethod
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form error:', error);

    // Log the submission attempt even on error
    try {
      const body = await request.json();
      console.log('Contact form submission (error occurred):', {
        ...body,
        timestamp: new Date().toISOString(),
        error: error instanceof Error ? error.message : 'Unknown error'
      });
    } catch (parseError) {
      console.error('Could not parse request body:', parseError);
    }

    // Still return success to avoid confusing users
    return NextResponse.json(
      { message: 'Thank you for your message! We will get back to you soon.' },
      { status: 200 }
    );
  }
}
