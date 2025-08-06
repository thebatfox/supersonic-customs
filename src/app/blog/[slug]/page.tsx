import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { ArrowLeft, Calendar, Clock, User, Share2, BookOpen, ChevronRight } from 'lucide-react';
import { getBlogPost, blogPosts } from '@/data/blog-posts';
import BlogComments from '@/components/BlogComments';

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return {
      title: 'Post Not Found | SuperSonic Customs',
      description: 'The requested blog post could not be found.',
    };
  }

  return {
    title: post.seo.title,
    description: post.seo.description,
    keywords: post.seo.keywords,
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.publishDate,
      authors: [post.author],
      url: `https://supersoniccustoms.co.za/blog/${post.slug}`,
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts
    .filter(p => p.id !== post.id && (p.category === post.category || p.tags.some(tag => post.tags.includes(tag))))
    .slice(0, 3);

  // Convert markdown-style content to HTML-like structure
  const formatContent = (content: string) => {
    return content
      .split('\n')
      .map((line, index) => {
        const key = `${post.id}-${index}-${line.substring(0, 20).replace(/\W/g, '')}`;

        // Handle headers
        if (line.startsWith('# ')) {
          return <h1 key={key} className="text-4xl font-bold mb-6 mt-8 first:mt-0">{line.substring(2)}</h1>;
        }
        if (line.startsWith('## ')) {
          return <h2 key={key} className="text-2xl font-bold mb-4 mt-8">{line.substring(3)}</h2>;
        }
        if (line.startsWith('### ')) {
          return <h3 key={key} className="text-xl font-semibold mb-3 mt-6">{line.substring(4)}</h3>;
        }
        if (line.startsWith('#### ')) {
          return <h4 key={key} className="text-lg font-semibold mb-2 mt-4">{line.substring(5)}</h4>;
        }

        // Handle bold text
        if (line.startsWith('**') && line.endsWith('**')) {
          return <p key={key} className="font-bold mb-2">{line.substring(2, line.length - 2)}</p>;
        }

        // Handle bullet points
        if (line.startsWith('- ')) {
          return <li key={key} className="ml-6 mb-1 list-disc">{line.substring(2)}</li>;
        }

        // Handle empty lines
        if (line.trim() === '') {
          return <br key={key} />;
        }

        // Regular paragraphs
        if (line.trim()) {
          return <p key={key} className="mb-4 leading-relaxed">{line}</p>;
        }

        return null;
      })
      .filter(Boolean);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Header */}
      <nav className="bg-primary text-primary-foreground py-4 px-6">
        <div className="max-w-7xl mx-auto flex items-center">
          <Button variant="ghost" size="sm" asChild className="mr-4 text-primary-foreground hover:bg-primary-foreground/20">
            <Link href="/blog">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>
          </Button>
          <BookOpen className="w-5 h-5 mr-2" />
          <h1 className="text-xl font-semibold">Expert Article</h1>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary/10 to-primary/5 py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <Badge variant="secondary" className="text-sm">{post.category}</Badge>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {new Date(post.publishDate).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {post.readTime} min read
              </div>
              <div className="flex items-center gap-1">
                <User className="w-4 h-4" />
                {post.author}
              </div>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            {post.title}
          </h1>

          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            {post.excerpt}
          </p>

          <div className="flex items-center gap-2 mb-6">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" className="gap-2">
              <Share2 className="w-4 h-4" />
              Share Article
            </Button>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <main className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <article className="prose prose-lg max-w-none">
            <div className="bg-gradient-to-br from-muted/50 to-muted/20 rounded-lg p-8 mb-8 flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-12 h-12 text-primary" />
                </div>
                <p className="text-muted-foreground">Article Image Coming Soon</p>
              </div>
            </div>

            <div className="text-foreground">
              {formatContent(post.content)}
            </div>
          </article>

          <Separator className="my-12" />

          {/* CTA Section */}
          <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8 mb-12">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Improve Your Acoustics?</h3>
              <p className="text-lg text-muted-foreground mb-6">
                Get expert advice and custom solutions from South Africa's leading acoustic specialists.
              </p>
              <div className="flex justify-center">
                <Button size="lg" asChild className="w-96 h-14 text-lg font-semibold">
                  <Link href="/contact">Get Free Consultation*</Link>
                </Button>
              </div>
            </div>
          </div>

          <Separator className="my-12" />

          {/* Comments Section */}
          <div className="mb-12">
            <BlogComments postSlug={post.slug} postTitle={post.title} />
          </div>

          {/* Related Articles */}
          {relatedPosts.length > 0 && (
            <div>
              <h3 className="text-2xl font-bold mb-6">Related Articles</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <Link
                    key={relatedPost.id}
                    href={`/blog/${relatedPost.slug}`}
                    className="group block"
                  >
                    <div className="bg-card rounded-lg p-6 border hover:shadow-lg transition-all duration-300">
                      <div className="flex items-center gap-2 mb-3">
                        <Badge variant="secondary" className="text-xs">{relatedPost.category}</Badge>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Clock className="w-3 h-3" />
                          {relatedPost.readTime} min
                        </div>
                      </div>
                      <h4 className="font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                        {relatedPost.title}
                      </h4>
                      <p className="text-sm text-muted-foreground line-clamp-3 mb-3">
                        {relatedPost.excerpt}
                      </p>
                      <div className="flex items-center text-sm text-primary group-hover:text-primary-dark transition-colors">
                        Read More
                        <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
