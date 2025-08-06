import { Button } from "@/components/ui/button";
import { ArrowLeft, ImageIcon } from "lucide-react";
import Link from "next/link";

interface GalleryHoldingPageProps {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

export default function GalleryHoldingPage({ title, description, icon: IconComponent }: GalleryHoldingPageProps) {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Header */}
      <nav className="bg-primary text-primary-foreground py-4 px-6">
        <div className="max-w-7xl mx-auto flex items-center">
          <Button variant="ghost" size="sm" asChild className="mr-4 text-primary-foreground hover:bg-primary-foreground/20">
            <Link href="/">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </Button>
          <IconComponent className="w-5 h-5 mr-2" />
          <h1 className="text-xl font-semibold">{title} Gallery</h1>
        </div>
      </nav>

      {/* Main Content */}
      <main className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <IconComponent className="w-12 h-12 text-primary mr-4" />
              <h1 className="text-4xl font-bold">{title}</h1>
            </div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {description}
            </p>
          </div>

          {/* Holding Message */}
          <div className="text-center py-20">
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-12 max-w-2xl mx-auto border border-primary/20">
              <ImageIcon className="w-24 h-24 text-primary mx-auto mb-6 opacity-50" />
              <h2 className="text-3xl font-bold text-primary mb-4">
                New images incoming
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Watch this space
              </p>
              <div className="w-full bg-muted rounded-full h-2 mb-4">
                <div className="bg-primary h-2 rounded-full animate-pulse" style={{ width: '60%' }} />
              </div>
              <p className="text-sm text-muted-foreground">
                We're preparing stunning project images for this category
              </p>
            </div>
          </div>

          {/* Upload Instructions */}
          <div className="mt-16 text-center">
            <div className="bg-muted p-8 rounded-lg max-w-2xl mx-auto">
              <h3 className="text-xl font-semibold mb-4">Coming Soon</h3>
              <p className="text-muted-foreground">
                This gallery will showcase our latest {title.toLowerCase()} projects.
                Check back soon for inspiring acoustic solutions and professional installations.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
