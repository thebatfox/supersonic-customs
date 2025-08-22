"use client";

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowLeft, X, ZoomIn, MonitorSpeaker } from "lucide-react";
import Link from "next/link";

// Tech & AV images - Professional audio equipment installations
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
  }
];

export default function TechAVGallery() {
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

  const openModal = (image: typeof galleryImages[0]) => {
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
      {/* Navigation Header */}
      <nav className="bg-primary text-primary-foreground py-4 px-6">
        <div className="max-w-7xl mx-auto flex items-center">
          <Button variant="ghost" size="sm" asChild className="mr-4 text-primary-foreground hover:bg-primary-foreground/20">
            <Link href="/">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </Button>
          <MonitorSpeaker className="w-5 h-5 mr-2" />
          <h1 className="text-xl font-semibold">Tech & AV Gallery</h1>
        </div>
      </nav>

      {/* Main Content */}
      <main className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <MonitorSpeaker className="w-12 h-12 text-primary mr-4" />
              <h1 className="text-4xl font-bold">Tech & AV</h1>
            </div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Audio-visual installations and technology integration solutions, from DJ setups
              to conference room systems, home theatres, and live event audio.
            </p>
          </div>

          {/* Image Grid */}
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

      {/* Modal */}
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
