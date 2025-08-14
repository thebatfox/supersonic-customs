"use client";

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowLeft, X, ZoomIn } from "lucide-react";
import Link from "next/link";

// Gallery images - only uploaded SuperSonic Customs project work
const galleryImages = [
  {
    id: 1,
    src: '/gallery/tech-av/funktion-one-amplifier-rack.jpg',
    title: 'Funktion-One Professional Amplifier Rack',
    description: 'High-end Funktion-One F800 and F600 series amplifiers with networked audio processing units, featuring precision signal management and professional purple accent lighting'
  },
  {
    id: 2,
    src: '/gallery/tech-av/dj-booth-professional-setup.jpg',
    title: 'Professional DJ Booth Installation',
    description: 'Complete DJ setup with professional turntables, high-quality monitoring speakers, and integrated LED lighting system in entertainment venue environment'
  },
  {
    id: 3,
    src: '/gallery/tech-av/audio-equipment-backend.jpg',
    title: 'Audio Equipment Backend Installation',
    description: 'Professional Crown and CDI power amplifiers backend installation showing proper cable management, cooling systems, and professional audio infrastructure'
  },
  {
    id: 4,
    src: '/gallery/restaurants/fine-dining-acoustic-panels.jpg',
    title: 'Fine Dining Acoustic Treatment',
    description: 'Elegant acoustic wall panels with decorative lighting for upscale restaurant ambiance'
  },
  {
    id: 5,
    src: '/gallery/restaurants/supersonic-installation-work.jpg',
    title: 'SuperSonic Installation Team',
    description: 'Professional installation work by certified SuperSonic technicians'
  },
  {
    id: 6,
    src: '/gallery/restaurants/wooden-acoustic-lighting.jpg',
    title: 'Decorative Acoustic Lighting',
    description: 'Custom wooden acoustic light fixtures combining function and aesthetics'
  },
  {
    id: 7,
    src: '/gallery/restaurants/ceiling-acoustic-baffles.jpg',
    title: 'Ceiling Acoustic Baffles',
    description: 'Professional suspended acoustic panels in geometric ceiling design'
  },
  {
    id: 8,
    src: '/gallery/restaurants/lounge-acoustic-treatment.jpg',
    title: 'Lounge Acoustic Treatment',
    description: 'Sophisticated acoustic solutions for bar and lounge areas'
  },
  {
    id: 9,
    src: '/gallery/restaurants/team-installation.jpg',
    title: 'Professional Installation',
    description: 'SuperSonic team executing complex restaurant acoustic installation'
  },
  {
    id: 10,
    src: '/gallery/acoustic-panels/ceiling-acoustic-baffles.jpg',
    title: 'Ceiling Acoustic Baffles',
    description: 'Professional suspended acoustic baffles with decorative pendant lighting'
  },
  {
    id: 11,
    src: '/gallery/acoustic-panels/artistic-acoustic-panels.jpg',
    title: 'Artistic Acoustic Panels',
    description: 'Large-scale acoustic art panels combining sound treatment with visual appeal'
  },
  {
    id: 12,
    src: '/gallery/acoustic-panels/modular-acoustic-wall.jpg',
    title: 'Modular Acoustic Wall System',
    description: 'Grid-based acoustic panel wall system with wooden frames and fabric inserts'
  },
  {
    id: 13,
    src: '/gallery/acoustic-panels/ceiling-installation-work.jpg',
    title: 'Professional Installation Work',
    description: 'SuperSonic technician installing acoustic ceiling panels with precision'
  },
  {
    id: 14,
    src: '/gallery/acoustic-panels/architectural-ceiling-panels.jpg',
    title: 'Architectural Ceiling Panels',
    description: 'Professional acoustic ceiling panels with elegant chandelier integration'
  },
  {
    id: 15,
    src: '/gallery/night-clubs/halo-nightclub-led-ceiling.jpg',
    title: 'HALO Nightclub LED Ceiling',
    description: 'Comprehensive LED ceiling installation at HALO nightclub with geometric pattern displays'
  },
  {
    id: 16,
    src: '/gallery/night-clubs/supersonic-branded-technician.jpg',
    title: 'SuperSonic Branded Technician',
    description: 'SuperSonic Customs technician performing professional installation work in nightclub'
  },
  {
    id: 17,
    src: '/gallery/night-clubs/led-staircase-installation.jpg',
    title: 'LED Staircase Installation',
    description: 'Dramatic LED-lit staircase with artistic projection mapping and colorful visual effects'
  },
  {
    id: 18,
    src: '/gallery/night-clubs/vip-lounge-living-wall.jpg',
    title: 'VIP Lounge Living Wall',
    description: 'Luxury VIP seating area with living wall installation and integrated acoustic treatment'
  },
  {
    id: 19,
    src: '/gallery/night-clubs/complex-lighting-installation.jpg',
    title: 'Complex Lighting Installation',
    description: 'Advanced multi-zone lighting system with colorful LED strips and professional audio integration'
  }
];

export default function ImageGalleryPage() {
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

  const openModal = (image: typeof galleryImages[0]) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  // Handle escape key to close modal
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeModal();
    }
  };

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
          <h1 className="text-xl font-semibold">Image Gallery</h1>
        </div>
      </nav>

      {/* Main Content */}
      <main className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Project Images</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Browse through our collection of completed acoustic projects. Click on any image to view it in full size.
            </p>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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
                  <h3 className="font-semibold text-sm mb-1 text-foreground line-clamp-1">{image.title}</h3>
                  <p className="text-xs text-muted-foreground line-clamp-2">{image.description}</p>
                </div>
              </div>
            ))}
          </div>


        </div>
      </main>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <div className="relative max-w-5xl max-h-[90vh] w-full">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Image */}
            <div className="relative">
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              />
            </div>

            {/* Image Info */}
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
