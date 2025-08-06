import { type NextRequest, NextResponse } from 'next/server';
import { writeFile, readFile, mkdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';

interface BlogComment {
  id: string;
  postSlug: string;
  postTitle: string;
  name: string;
  email: string;
  comment: string;
  timestamp: string;
  approved: boolean;
}

interface CommentsData {
  [postSlug: string]: BlogComment[];
}

const COMMENTS_FILE = path.join(process.cwd(), 'data', 'blog-comments.json');

async function ensureDataDirectory() {
  const dataDir = path.join(process.cwd(), 'data');
  if (!existsSync(dataDir)) {
    await mkdir(dataDir, { recursive: true });
  }
}

async function loadComments(): Promise<CommentsData> {
  try {
    await ensureDataDirectory();
    if (existsSync(COMMENTS_FILE)) {
      const data = await readFile(COMMENTS_FILE, 'utf-8');
      return JSON.parse(data);
    }
  } catch (error) {
    console.error('Error loading comments:', error);
  }
  return {};
}

async function saveComments(data: CommentsData): Promise<void> {
  try {
    await ensureDataDirectory();
    await writeFile(COMMENTS_FILE, JSON.stringify(data, null, 2));
  } catch (error) {
    console.error('Error saving comments:', error);
  }
}

async function sendCommentEmail(comment: BlogComment) {
  const emailSubject = `💬 New Blog Comment: ${comment.postTitle}`;

  const emailBody = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .header { background: #2563eb; color: white; padding: 20px; text-align: center; }
        .content { padding: 20px; }
        .comment-box { background: #f8f9fa; border-left: 4px solid #2563eb; padding: 20px; margin: 20px 0; }
        .meta { color: #6b7280; font-size: 14px; margin-bottom: 15px; }
      </style>
    </head>
    <body>
      <div class="header">
        <h2>💬 New Blog Comment Received</h2>
      </div>

      <div class="content">
        <h3>📝 Blog Post: ${comment.postTitle}</h3>

        <div class="meta">
          <strong>👤 Commenter:</strong> ${comment.name}<br>
          <strong>📧 Email:</strong> ${comment.email}<br>
          <strong>🕒 Date:</strong> ${new Date(comment.timestamp).toLocaleString('en-ZA', {
            timeZone: 'Africa/Johannesburg',
            dateStyle: 'full',
            timeStyle: 'short'
          })}<br>
          <strong>🆔 Comment ID:</strong> ${comment.id}
        </div>

        <div class="comment-box">
          <h4>💭 Comment:</h4>
          <p style="white-space: pre-wrap; margin: 0;">${comment.comment}</p>
        </div>

        <div style="background: #e0f2fe; border-left: 4px solid #0288d1; padding: 15px; margin: 20px 0;">
          <strong>ℹ️ Comment Status:</strong> Pending approval<br>
          <small>This comment is automatically saved but not yet visible on the website. You can review and approve it through your admin system.</small>
        </div>

        <hr style="margin: 30px 0; border: 1px solid #e5e7eb;">
        <p style="font-size: 12px; color: #6b7280;">
          💡 This comment was submitted through the blog comments section on your SuperSonic Customs website.<br>
          📧 Comment tracking system active - all comments are being recorded for moderation.
        </p>
      </div>
    </body>
    </html>
  `;

  // Store email data for logging
  const emailData = {
    to: process.env.NOTIFICATION_EMAIL || 'info@supersoniccustoms.com',
    subject: emailSubject,
    html: emailBody,
    metadata: {
      commentId: comment.id,
      postSlug: comment.postSlug,
      commenterEmail: comment.email,
      timestamp: comment.timestamp
    }
  };

  // Log email content for now
  console.log('📧 COMMENT EMAIL NOTIFICATION:', emailData);

  // TODO: Integrate with your email service when ready
}

export async function POST(request: NextRequest) {
  try {
    const { postSlug, postTitle, name, email, comment } = await request.json();

    // Validation
    if (!postSlug || !postTitle || !name || !email || !comment) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    if (!email.includes('@')) {
      return NextResponse.json(
        { error: 'Please enter a valid email address' },
        { status: 400 }
      );
    }

    if (comment.trim().length < 10) {
      return NextResponse.json(
        { error: 'Comment must be at least 10 characters long' },
        { status: 400 }
      );
    }

    // Create comment object
    const newComment: BlogComment = {
      id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
      postSlug: postSlug.trim(),
      postTitle: postTitle.trim(),
      name: name.trim(),
      email: email.trim().toLowerCase(),
      comment: comment.trim(),
      timestamp: new Date().toISOString(),
      approved: false // Comments require approval by default
    };

    // Load existing comments
    const comments = await loadComments();

    // Add comment to the post's comments array
    if (!comments[postSlug]) {
      comments[postSlug] = [];
    }
    comments[postSlug].push(newComment);

    // Save updated comments
    await saveComments(comments);

    // Send email notification
    await sendCommentEmail(newComment);

    return NextResponse.json({
      success: true,
      message: 'Comment submitted successfully and is pending approval',
      commentId: newComment.id
    });

  } catch (error) {
    console.error('Error processing comment:', error);
    return NextResponse.json(
      { error: 'Failed to submit comment' },
      { status: 500 }
    );
  }
}
