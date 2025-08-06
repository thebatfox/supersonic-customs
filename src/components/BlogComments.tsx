"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { MessageCircle, Send, User, Mail, MessageSquare } from 'lucide-react';

interface BlogCommentsProps {
  postSlug: string;
  postTitle: string;
}

export default function BlogComments({ postSlug, postTitle }: BlogCommentsProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !comment.trim()) {
      alert('Please fill in all fields.');
      return;
    }

    if (!email.includes('@')) {
      alert('Please enter a valid email address.');
      return;
    }

    if (comment.trim().length < 10) {
      alert('Comment must be at least 10 characters long.');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/blog-comment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          postSlug,
          postTitle,
          name: name.trim(),
          email: email.trim(),
          comment: comment.trim()
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setIsSubmitted(true);
        // Reset form
        setName('');
        setEmail('');
        setComment('');
      } else {
        throw new Error(result.error || 'Failed to submit comment');
      }
    } catch (error) {
      console.error('Error submitting comment:', error);
      alert('Sorry, there was an error submitting your comment. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <Card className="border-green-200 bg-green-50 dark:bg-green-900/20">
        <CardContent className="p-8 text-center">
          <div className="w-16 h-16 bg-green-100 dark:bg-green-800 rounded-full flex items-center justify-center mx-auto mb-4">
            <MessageCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
          </div>
          <h3 className="text-xl font-semibold text-green-800 dark:text-green-300 mb-2">
            Thank You for Your Comment!
          </h3>
          <p className="text-green-700 dark:text-green-400 mb-4">
            Your comment has been submitted successfully and is pending approval.
            We appreciate your engagement with our content!
          </p>
          <Button
            variant="outline"
            onClick={() => setIsSubmitted(false)}
            className="border-green-300 text-green-700 hover:bg-green-100 dark:border-green-600 dark:text-green-400"
          >
            Submit Another Comment
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border-2 border-primary/20">
      <CardHeader className="pb-4">
        <div className="flex items-center">
          <MessageSquare className="w-6 h-6 text-primary mr-3" />
          <div>
            <CardTitle className="text-2xl">Share Your Thoughts</CardTitle>
            <CardDescription className="text-base mt-1">
              We'd love to hear your questions, experiences, or insights about this topic.
              Your comment helps build our community of acoustic professionals and enthusiasts.
            </CardDescription>
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                <User className="w-4 h-4 inline mr-1" />
                Your Name *
              </label>
              <Input
                id="name"
                type="text"
                placeholder="Enter your full name..."
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="h-12"
                disabled={isSubmitting}
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                <Mail className="w-4 h-4 inline mr-1" />
                Email Address *
              </label>
              <Input
                id="email"
                type="email"
                placeholder="your.email@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12"
                disabled={isSubmitting}
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="comment" className="block text-sm font-medium text-foreground mb-2">
              <MessageCircle className="w-4 h-4 inline mr-1" />
              Your Comment *
            </label>
            <Textarea
              id="comment"
              placeholder="Share your thoughts, questions, or experiences related to this article... (minimum 10 characters)"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="min-h-32 resize-y"
              disabled={isSubmitting}
              required
            />
            <div className="text-xs text-muted-foreground mt-1">
              {comment.length}/10 minimum characters
            </div>
          </div>

          <div className="bg-muted/50 rounded-lg p-4">
            <p className="text-sm text-muted-foreground">
              <strong>📧 Privacy Note:</strong> Your email will not be published or shared.
              We only use it to notify you of replies and for moderation purposes.
              Comments are reviewed before appearing on the site.
            </p>
          </div>

          <div className="flex gap-4">
            <Button
              type="submit"
              disabled={isSubmitting || !name.trim() || !email.trim() || comment.trim().length < 10}
              className="flex-1 h-12 text-base font-medium"
            >
              {isSubmitting ? (
                'Submitting Comment...'
              ) : (
                <>
                  <Send className="w-4 h-4 mr-2" />
                  Submit Comment
                </>
              )}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
