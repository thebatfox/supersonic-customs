import { type NextRequest, NextResponse } from 'next/server';
import { writeFile, readFile, mkdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';

interface RestaurantSuggestion {
  name: string;
  count: number;
  lastSuggested: string;
  timestamps: string[];
}

interface SuggestionsData {
  [key: string]: RestaurantSuggestion;
}

const SUGGESTIONS_FILE = path.join(process.cwd(), 'data', 'restaurant-suggestions.json');

async function ensureDataDirectory() {
  const dataDir = path.join(process.cwd(), 'data');
  if (!existsSync(dataDir)) {
    await mkdir(dataDir, { recursive: true });
  }
}

async function loadSuggestions(): Promise<SuggestionsData> {
  try {
    await ensureDataDirectory();
    if (existsSync(SUGGESTIONS_FILE)) {
      const data = await readFile(SUGGESTIONS_FILE, 'utf-8');
      return JSON.parse(data);
    }
  } catch (error) {
    console.error('Error loading suggestions:', error);
  }
  return {};
}

async function saveSuggestions(data: SuggestionsData): Promise<void> {
  try {
    await ensureDataDirectory();
    await writeFile(SUGGESTIONS_FILE, JSON.stringify(data, null, 2));
  } catch (error) {
    console.error('Error saving suggestions:', error);
  }
}

async function sendEmail(restaurantName: string, count: number, isNew: boolean) {
  const emailSubject = isNew
    ? `🆕 New Restaurant Suggestion: ${restaurantName}`
    : `🔄 Restaurant Suggestion (${count}x): ${restaurantName}`;

  const emailBody = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .header { background: #2563eb; color: white; padding: 20px; text-align: center; }
        .content { padding: 20px; }
        .highlight { background: #f3f4f6; padding: 15px; border-radius: 8px; margin: 15px 0; }
        .count-badge { background: ${isNew ? '#10b981' : '#f59e0b'}; color: white; padding: 5px 10px; border-radius: 15px; font-size: 12px; }
      </style>
    </head>
    <body>
      <div class="header">
        <h2>🎯 Restaurant Suggestion from SuperSonic Customs Website</h2>
      </div>

      <div class="content">
        <div class="highlight">
          <h3>📍 ${restaurantName}</h3>
          <p><span class="count-badge">${isNew ? 'NEW SUGGESTION' : `SUGGESTED ${count} TIMES`}</span></p>
        </div>

        <p><strong>🕒 Date:</strong> ${new Date().toLocaleString('en-ZA', {
          timeZone: 'Africa/Johannesburg',
          dateStyle: 'full',
          timeStyle: 'short'
        })}</p>

        <p><strong>📊 Status:</strong> ${isNew ? '✨ First time suggestion' : `🔥 Previously suggested ${count-1} time(s)`}</p>

        ${count > 1 ? `
          <div style="background: #fef3c7; border-left: 4px solid #f59e0b; padding: 15px; margin: 20px 0;">
            <strong>⚡ High Interest Alert!</strong><br>
            This venue has been suggested <strong>${count} times</strong>, indicating strong potential demand for acoustic services. Consider prioritizing outreach to this establishment.
          </div>
        ` : ''}

        ${count >= 3 ? `
          <div style="background: #fee2e2; border-left: 4px solid #dc2626; padding: 15px; margin: 20px 0;">
            <strong>🚨 Priority Venue!</strong><br>
            With ${count} suggestions, this venue should be contacted immediately for acoustic consultation opportunities.
          </div>
        ` : ''}

        <hr style="margin: 30px 0; border: 1px solid #e5e7eb;">
        <p style="font-size: 12px; color: #6b7280;">
          💡 This suggestion was submitted through the floating suggestion form on your SuperSonic Customs website.<br>
          📧 Suggestion tracking system active - all duplicates are being counted automatically.
        </p>
      </div>
    </body>
    </html>
  `;

  // Store email data for logging and future email service integration
  const emailData = {
    to: process.env.NOTIFICATION_EMAIL || 'info@supersoniccustoms.com',
    subject: emailSubject,
    html: emailBody,
    metadata: {
      restaurant: restaurantName,
      count,
      isNew,
      timestamp: new Date().toISOString()
    }
  };

  // Log email content for now - you can integrate with email service later
  console.log('📧 EMAIL NOTIFICATION:', emailData);

  // TODO: Integrate with your email service
  // Example with Resend (when you're ready):
  /*
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);

    const result = await resend.emails.send({
      from: 'suggestions@supersoniccustoms.com',
      to: emailData.to,
      subject: emailData.subject,
      html: emailData.html,
    });

    console.log('✅ Email sent successfully:', result);
  } catch (error) {
    console.error('❌ Email send failed:', error);
  }
  */
}

export async function POST(request: NextRequest) {
  try {
    const { restaurantName } = await request.json();

    if (!restaurantName || !restaurantName.trim()) {
      return NextResponse.json(
        { error: 'Restaurant name is required' },
        { status: 400 }
      );
    }

    const cleanName = restaurantName.trim();
    const timestamp = new Date().toISOString();

    // Load existing suggestions
    const suggestions = await loadSuggestions();

    // Update or create suggestion record
    const key = cleanName.toLowerCase();
    const isNew = !suggestions[key];

    if (suggestions[key]) {
      suggestions[key].count += 1;
      suggestions[key].lastSuggested = timestamp;
      suggestions[key].timestamps.push(timestamp);
    } else {
      suggestions[key] = {
        name: cleanName,
        count: 1,
        lastSuggested: timestamp,
        timestamps: [timestamp]
      };
    }

    // Save updated suggestions
    await saveSuggestions(suggestions);

    // Send email notification
    await sendEmail(cleanName, suggestions[key].count, isNew);

    return NextResponse.json({
      success: true,
      message: 'Suggestion recorded successfully',
      count: suggestions[key].count,
      isNew
    });

  } catch (error) {
    console.error('Error processing suggestion:', error);
    return NextResponse.json(
      { error: 'Failed to process suggestion' },
      { status: 500 }
    );
  }
}
