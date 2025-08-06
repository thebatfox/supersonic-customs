import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";
import SchemaMarkup from "@/components/schema-markup";
import FloatingRestaurantSuggestion from "@/components/FloatingRestaurantSuggestion";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://supersoniccustoms.com"),
  title: {
    default: "Supersonic Customs - Professional Soundproofing & Acoustic Treatment",
    template: "%s | Supersonic Customs"
  },
  description: "Specialist soundproofing & acoustic treatment company serving South Africa, DRC, Zambia, Mozambique & Namibia. Expert noise control solutions, sound isolation, carpentry & AV installations for residential, commercial & industrial applications.",
  keywords: [
    "soundproofing South Africa",
    "acoustic treatment",
    "noise control",
    "sound isolation",
    "acoustic panels",
    "mass loaded vinyl",
    "recording studio soundproofing",
    "industrial acoustics",
    "residential soundproofing",
    "commercial noise control",
    "AV installation",
    "acoustic carpentry",
    "room in room construction",
    "noise impact surveys",
    "active noise cancellation",
    "sound system design",
    "Cape Town acoustics",
    "Southern Africa soundproofing"
  ],
  authors: [{ name: "Supersonic Customs", url: "https://supersoniccustoms.com" }],
  creator: "Supersonic Customs",
  publisher: "Supersonic Customs",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Supersonic Customs - Professional Soundproofing & Acoustic Treatment",
    description: "Specialist soundproofing & acoustic treatment company serving Southern Africa. Expert solutions for all acoustic needs.",
    type: "website",
    locale: "en_ZA",
    siteName: "Supersonic Customs",
    countryName: "South Africa",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Supersonic Customs - Soundproofing Specialists in Southern Africa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Supersonic Customs - Professional Soundproofing & Acoustic Treatment",
    description: "Specialist soundproofing & acoustic treatment company serving Southern Africa. Expert noise control solutions & AV installations.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://supersoniccustoms.com",
  },
  category: "Professional Services",
  classification: "Acoustic Engineering & Soundproofing Services",
  other: {
    "geo.region": "ZA-WC",
    "geo.placename": "Cape Town",
    "geo.position": "-33.9249;18.4241",
    "ICBM": "-33.9249, 18.4241"
  }
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body suppressHydrationWarning className="antialiased">
        <SchemaMarkup />

        {/* Fixed Background Logo Watermark - 80% opacity */}
        <div
          style={{
            position: 'fixed',
            top: '0px',
            left: '0px',
            width: '100vw',
            height: '100vh',
            zIndex: 99999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            pointerEvents: 'none'
          }}
        >
          <div
            style={{
              width: '120vmin',
              height: '120vmin',
              backgroundImage: 'url(/watermark-logo-hq.png)',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              opacity: 0.05
            }}
          />
        </div>

        <div style={{ position: 'relative', zIndex: 10 }}>
          <ClientBody>{children}</ClientBody>
          <FloatingRestaurantSuggestion />
        </div>
      </body>
    </html>
  );
}
