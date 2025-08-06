import { type NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      name,
      email,
      projectType,
      noiseSource,
      goals,
      location,
      details
    } = body;

    // Validate required fields
    if (!name || !email || !projectType || !noiseSource || !goals) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Send email
    const { data, error } = await resend.emails.send({
      from: 'Questionnaire <noreply@supersoniccustoms.com>',
      to: ['info@supersoniccustoms.com'],
      subject: `New Project Questionnaire - ${projectType}`,
      html: `
        <h2>New Project Questionnaire Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Project Type:</strong> ${projectType}</p>
        <p><strong>Primary Noise Source:</strong> ${noiseSource}</p>
        <p><strong>Project Goals:</strong> ${goals}</p>
        <p><strong>Location:</strong> ${location || 'Not provided'}</p>

        ${details ? `
        <p><strong>Additional Details:</strong></p>
        <p>${details.replace(/\n/g, '<br>')}</p>
        ` : ''}

        <hr>
        <p><em>This questionnaire was submitted from the Supersonic Customs website.</em></p>
      `,
    });

    if (error) {
      console.error('Email sending failed:', error);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: 'Questionnaire submitted successfully', id: data?.id },
      { status: 200 }
    );
  } catch (error) {
    console.error('Questionnaire form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
