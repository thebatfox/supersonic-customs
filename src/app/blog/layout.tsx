import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Expert Acoustic Blog | SuperSonic Customs',
  description: 'Professional insights on soundproofing, acoustic treatment, and noise control solutions from South Africa\'s leading acoustic specialists.',
  keywords: ['acoustic blog', 'soundproofing tips', 'noise control', 'acoustic treatment', 'professional acoustics'],
  openGraph: {
    title: 'Expert Acoustic Blog | SuperSonic Customs',
    description: 'Professional insights on soundproofing, acoustic treatment, and noise control solutions.',
    type: 'website',
    url: 'https://supersoniccustoms.co.za/blog',
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
