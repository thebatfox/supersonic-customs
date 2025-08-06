"use client";

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowLeft, X, ZoomIn, Music } from "lucide-react";
import Link from "next/link";

interface GalleryImage {
  id: number;
  src: string;
  title: string;
  description: string;
}

// Night club project images - spectacular LED and acoustic installations
const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: '/gallery/night-clubs/led-cube-ceiling-system.jpg',
    title: 'LED Cube Ceiling System',
    description: 'Advanced LED cube ceiling installation with dynamic color-changing capabilities and immersive purple/blue lighting effects'
  },
  {
    id: 2,
    src: '/gallery/night-clubs/multi-level-club-led-display.jpg',
    title: 'Multi-Level Club LED Display',
    description: 'Complex multi-level nightclub featuring comprehensive LED strip installations, screens, and colorful acoustic mesh integration'
  },
  {
    id: 3,
    src: '/gallery/night-clubs/led-ceiling-geometric-patterns.jpg',
    title: 'LED Ceiling Geometric Patterns',
    description: 'Sophisticated LED ceiling design featuring geometric patterns with integrated lighting and professional acoustic treatment'
  },
  {
    id: 4,
    src: '/gallery/night-clubs/halo-nightclub-main-floor.jpg',
    title: 'HALO Nightclub Main Floor',
    description: 'Stunning HALO nightclub main floor with comprehensive LED ceiling installation and blue circular floor lighting patterns'
  },
  {
    id: 5,
    src: '/gallery/night-clubs/vip-led-wall-lounge.jpg',
    title: 'VIP LED Wall Lounge',
    description: 'Premium VIP lounge area featuring large-scale LED wall display system with comfortable seating and atmospheric lighting'
  },
  {
    id: 6,
    src: '/gallery/night-clubs/premium-bar-acoustic-display.jpg',
    title: 'Premium Bar Acoustic Display',
    description: 'Luxury bar installation featuring premium spirits display with integrated acoustic speakers and sophisticated lighting design'
  },
  {
    id: 7,
    src: '/gallery/night-clubs/motivational-neon-signage.jpg',
    title: 'Motivational Neon Signage',
    description: 'Custom neon signage "Don\'t be shy Let it happen" with purple LED cube integration and atmospheric lighting effects'
  },
  {
    id: 8,
    src: '/gallery/night-clubs/vip-installation-work-progress.jpg',
    title: 'VIP Installation Work Progress',
    description: 'Professional installation team working on VIP seating area acoustic treatment and decorative wall installations'
  },
  {
    id: 9,
    src: '/gallery/night-clubs/professional-audio-rack-system.jpg',
    title: 'Professional Audio Rack System',
    description: 'High-end professional audio equipment rack installation with blue ambient lighting and precision amplifier systems'
  },
  {
    id: 10,
    src: '/gallery/night-clubs/supersonic-fabric-installation.jpg',
    title: 'SuperSonic Fabric Installation',
    description: 'SuperSonic Customs team member working on acoustic fabric installation with decorative celebrity photo backdrop'
  },
  {
    id: 11,
    src: '/gallery/night-clubs/luxury-bar-speaker-integration.jpg',
    title: 'Luxury Bar Speaker Integration',
    description: 'Premium bar area with luxury spirits display and professional acoustic speaker integration for optimal sound quality'
  },
  {
    id: 12,
    src: '/gallery/night-clubs/geometric-lounge-acoustic-panels.jpg',
    title: 'Geometric Lounge Acoustic Panels',
    description: 'Modern lounge seating area featuring geometric acoustic wall patterns and comfortable curved seating with wood accents'
  },
  {
    id: 13,
    src: '/gallery/night-clubs/dj-setup-green-lighting.jpg',
    title: 'Professional DJ Setup with Green Lighting',
    description: 'State-of-the-art Pioneer DJ mixing console with professional equipment and atmospheric green lighting effects'
  },
  {
    id: 14,
    src: '/gallery/night-clubs/chain-curtain-led-installation.jpg',
    title: 'Chain Curtain LED Installation',
    description: 'Innovative chain curtain installation with integrated LED lighting effects and decorative acoustic treatment'
  },
  {
    id: 15,
    src: '/gallery/night-clubs/chain-curtain-construction.jpg',
    title: 'Chain Curtain Construction',
    description: 'Behind-the-scenes construction work on chain curtain bar installation with blue LED lighting integration'
  },
  {
    id: 16,
    src: '/gallery/night-clubs/red-bull-acoustic-treatment.jpg',
    title: 'Red Bull Acoustic Treatment',
    description: 'Professional Red Bull branded acoustic speaker installation with warm ambient lighting in brick-wall setting'
  },
  {
    id: 17,
    src: '/gallery/night-clubs/chevron-bar-living-wall.jpg',
    title: 'Chevron Bar with Living Wall',
    description: 'Stunning green chevron pattern bar design with integrated living wall installation and warm decorative lighting'
  },
  {
    id: 18,
    src: '/gallery/night-clubs/artistic-staircase-projection.jpg',
    title: 'Artistic Staircase Projection',
    description: 'Creative staircase installation featuring artistic projection mapping with colorful visual effects and modern design'
  },
  {
    id: 19,
    src: '/gallery/night-clubs/vip-living-wall-seating.jpg',
    title: 'VIP Living Wall Seating',
    description: 'Exclusive VIP seating area with comprehensive living wall installation and luxurious blue seating with copper accents'
  },
  {
    id: 20,
    src: '/gallery/night-clubs/artistic-photo-collage-ceiling.jpg',
    title: 'Artistic Photo Collage Ceiling',
    description: 'Creative ceiling installation featuring comprehensive artistic photo collage with integrated lighting and acoustic design'
  },
  {
    id: 21,
    src: '/gallery/night-clubs/nightclub-purple-lighting-display.jpg',
    title: 'Nightclub Purple Lighting Display',
    description: 'Stunning purple LED lighting display creating atmospheric ambiance with dynamic color effects and professional sound integration'
  },
  {
    id: 22,
    src: '/gallery/night-clubs/luxurious-lounge-acoustic-seating.jpg',
    title: 'Luxurious Lounge Acoustic Seating',
    description: 'Premium lounge seating area with sophisticated acoustic treatment and elegant interior design for exclusive nightclub experience'
  },
  {
    id: 23,
    src: '/gallery/night-clubs/modern-nightclub-acoustic-installation.jpg',
    title: 'Modern Nightclub Acoustic Installation',
    description: 'Contemporary nightclub featuring comprehensive acoustic installation with stylish interior design and professional sound optimization'
  },
  {
    id: 24,
    src: '/gallery/night-clubs/vip-acoustic-wall-treatment.jpg',
    title: 'VIP Acoustic Wall Treatment',
    description: 'Exclusive VIP area with specialized acoustic wall treatment featuring geometric patterns and premium sound control materials'
  },
  {
    id: 25,
    src: '/gallery/night-clubs/sophisticated-bar-acoustic-design.jpg',
    title: 'Sophisticated Bar Acoustic Design',
    description: 'Elegant bar area with sophisticated acoustic design elements, premium lighting, and professional sound treatment integration'
  },
  {
    id: 26,
    src: '/gallery/night-clubs/blue-ambient-nightclub-lighting.jpg',
    title: 'Blue Ambient Nightclub Lighting',
    description: 'Atmospheric blue ambient lighting installation creating immersive nightclub environment with integrated acoustic solutions'
  },
  {
    id: 27,
    src: '/gallery/night-clubs/elegant-bar-counter-installation.jpg',
    title: 'Elegant Bar Counter Installation',
    description: 'Refined bar counter installation featuring elegant design with integrated acoustic treatment and professional lighting systems'
  },
  {
    id: 28,
    src: '/gallery/night-clubs/premium-club-acoustic-panels.jpg',
    title: 'Premium Club Acoustic Panels',
    description: 'High-end acoustic panel installation in premium nightclub setting with sophisticated design and optimal sound performance'
  },
  {
    id: 29,
    src: '/gallery/night-clubs/atmospheric-club-interior-design.jpg',
    title: 'Atmospheric Club Interior Design',
    description: 'Comprehensive club interior design featuring atmospheric lighting, acoustic treatments, and immersive entertainment environment'
  },
  {
    id: 30,
    src: '/gallery/night-clubs/entertainment-venue-acoustic-treatment.jpg',
    title: 'Entertainment Venue Acoustic Treatment',
    description: 'Professional entertainment venue with complete acoustic treatment installation for optimal sound quality and noise control'
  },
  {
    id: 31,
    src: '/gallery/night-clubs/club-acoustic-ceiling-installation.jpg',
    title: 'Club Acoustic Ceiling Installation',
    description: 'Specialized club acoustic ceiling installation featuring sound-absorbing materials and integrated lighting for enhanced ambiance'
  },
  {
    id: 32,
    src: '/gallery/night-clubs/advanced-nightclub-sound-system.jpg',
    title: 'Advanced Nightclub Sound System',
    description: 'State-of-the-art nightclub sound system installation with professional-grade equipment and comprehensive acoustic optimization'
  },
  {
    id: 33,
    src: '/gallery/night-clubs/professional-club-acoustic-setup.jpg',
    title: 'Professional Club Acoustic Setup',
    description: 'Professional-grade club acoustic setup featuring advanced sound treatment and specialized equipment for optimal audio performance'
  },
  {
    id: 34,
    src: '/gallery/night-clubs/immersive-club-lighting-acoustics.jpg',
    title: 'Immersive Club Lighting & Acoustics',
    description: 'Immersive nightclub installation combining dynamic lighting effects with professional acoustic treatment for complete sensory experience'
  },
  {
    id: 35,
    src: '/gallery/night-clubs/cutting-edge-nightclub-interior.jpg',
    title: 'Cutting-Edge Nightclub Interior',
    description: 'Modern cutting-edge nightclub interior design featuring innovative acoustic solutions and contemporary entertainment technology'
  },
  {
    id: 36,
    src: '/gallery/night-clubs/dramatic-club-ambiance-lighting.jpg',
    title: 'Dramatic Club Ambiance Lighting',
    description: 'Dramatic ambiance lighting installation creating captivating atmosphere with integrated acoustic treatment and sound optimization'
  },
  {
    id: 37,
    src: '/gallery/night-clubs/contemporary-club-acoustic-design.jpg',
    title: 'Contemporary Club Acoustic Design',
    description: 'Contemporary club featuring innovative acoustic design with modern aesthetics and professional sound treatment solutions'
  },
  {
    id: 38,
    src: '/gallery/night-clubs/elite-club-sound-treatment.jpg',
    title: 'Elite Club Sound Treatment',
    description: 'Elite nightclub with premium sound treatment installation featuring luxury finishes and state-of-the-art acoustic technology'
  },
  {
    id: 39,
    src: '/gallery/night-clubs/high-end-club-acoustic-installation.jpg',
    title: 'High-End Club Acoustic Installation',
    description: 'High-end club acoustic installation showcasing superior sound quality and sophisticated acoustic engineering for premium venues'
  }
];

export default function NightClubsGallery() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const openModal = (image: GalleryImage) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeModal();
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="bg-primary text-primary-foreground py-4 px-6">
        <div className="max-w-7xl mx-auto flex items-center">
          <Button variant="ghost" size="sm" asChild className="mr-4 text-primary-foreground hover:bg-primary-foreground/20">
            <Link href="/">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </Button>
          <Music className="w-5 h-5 mr-2" />
          <h1 className="text-xl font-semibold">Night Clubs Gallery</h1>
        </div>
      </nav>

      <main className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Music className="w-12 h-12 text-primary mr-4" />
              <h1 className="text-4xl font-bold">Night Clubs</h1>
            </div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Entertainment venue audio systems and soundproofing solutions for nightclubs,
              bars, and music venues creating immersive sound experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image) => (
              <div
                key={image.id}
                className="group relative bg-card rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
                onClick={() => openModal(image)}
              >
                <div className="aspect-[4/3] relative overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
                <div className="p-4">
                  <input
                    type="text"
                    placeholder={`Image ${image.id}`}
                    className="w-full text-sm font-semibold bg-transparent border-none outline-none text-foreground placeholder:text-muted-foreground"
                    readOnly
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <div className="relative max-w-5xl max-h-[90vh] w-full">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="relative">
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              />
            </div>

            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
              <h3 className="text-white text-xl font-semibold mb-2">{selectedImage.title}</h3>
              <p className="text-gray-200">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
