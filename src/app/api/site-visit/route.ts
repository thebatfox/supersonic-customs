import { type NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      name,
      email,
      phone,
      preferredDate,
      preferredTime,
      location,
      projectType,
      details
    } = body;

    // Validate required fields
    if (!name || !email || !phone || !preferredDate || !preferredTime || !location || !projectType) {
      return NextResponse.json(
        { error: 'Please fill in all required fields' },
        { status: 400 }
      );
    }

    // Format the date for better readability
    const formattedDate = new Date(preferredDate).toLocaleDateString('en-ZA', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'Site Visit Booking <noreply@supersoniccustoms.com>',
      to: ['info@supersoniccustoms.com'],
      subject: `New Site Visit Request - ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2b3a99; border-bottom: 2px solid #2b3a99; padding-bottom: 10px;">
            New Site Visit Request
          </h2>

          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #333;">Contact Information</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
          </div>

          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #333;">Appointment Details</h3>
            <p><strong>Preferred Date:</strong> ${formattedDate}</p>
            <p><strong>Preferred Time:</strong> ${preferredTime}</p>
            <p><strong>Site Location:</strong> ${location}</p>
            <p><strong>Project Type:</strong> ${projectType.charAt(0).toUpperCase() + projectType.slice(1)}</p>
          </div>

          ${details ? `
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #333;">Project Description</h3>
            <p>${details}</p>
          </div>
          ` : ''}

          <div style="background: #e7f3ff; padding: 15px; border-radius: 8px; border-left: 4px solid #2b3a99;">
            <p style="margin: 0;"><strong>Action Required:</strong> Please contact the client within 24 hours to confirm the site visit appointment.</p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send email. Please try again.' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: 'Site visit request submitted successfully' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Site visit API error:', error);
    return NextResponse.json(
      { error: 'Internal server error. Please try again.' },
      { status: 500 }
    );
  }
}
