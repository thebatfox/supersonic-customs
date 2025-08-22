"use client";

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowLeft, X, ZoomIn, Volume2 } from "lucide-react";
import Link from "next/link";

interface GalleryImage {
  id: number;
  src: string;
  title: string;
  description: string;
}

// Your acoustic panel project images - add your images here
const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: '/gallery/acoustic-panels/ceiling-acoustic-baffles.jpg',
    title: 'Ceiling Acoustic Baffles',
    description: 'Professional suspended acoustic baffles with decorative pendant lighting in restaurant setting'
  },
  {
    id: 2,
    src: '/gallery/acoustic-panels/suspended-ceiling-panels.jpg',
    title: 'Suspended Ceiling Panels',
    description: 'Modern acoustic ceiling treatment with integrated lighting design'
  },
  {
    id: 3,
    src: '/gallery/acoustic-panels/decorative-lounge-treatment.jpg',
    title: 'Decorative Lounge Treatment',
    description: 'Sophisticated acoustic wall treatment with artistic lighting in premium lounge area'
  },
  {
    id: 4,
    src: '/gallery/acoustic-panels/artistic-acoustic-panels.jpg',
    title: 'Artistic Acoustic Panels',
    description: 'Large-scale acoustic art panels combining sound treatment with visual appeal'
  },
  {
    id: 5,
    src: '/gallery/acoustic-panels/entertainment-room-treatment.jpg',
    title: 'Entertainment Room Treatment',
    description: 'Home cinema acoustic panels with strategic placement for optimal sound experience'
  },
  {
    id: 6,
    src: '/gallery/acoustic-panels/geometric-ceiling-design.jpg',
    title: 'Geometric Ceiling Design',
    description: 'Professional suspended acoustic panels in geometric ceiling configuration'
  },
  {
    id: 7,
    src: '/gallery/acoustic-panels/panel-fabric-detail.jpg',
    title: 'Acoustic Panel Fabric Detail',
    description: 'Close-up view of high-quality acoustic fabric and wooden frame construction'
  },
  {
    id: 8,
    src: '/gallery/acoustic-panels/ceiling-installation-work.jpg',
    title: 'Professional Installation Work',
    description: 'SuperSonic technician installing acoustic ceiling panels with precision'
  },
  {
    id: 9,
    src: '/gallery/acoustic-panels/restaurant-ceiling-treatment.jpg',
    title: 'Restaurant Ceiling Treatment',
    description: 'Comprehensive acoustic ceiling solution for fine dining establishment'
  },
  {
    id: 10,
    src: '/gallery/acoustic-panels/dining-acoustic-lighting.jpg',
    title: 'Dining Area Acoustic Lighting',
    description: 'Integrated acoustic treatment with custom lighting design for restaurant ambiance'
  },
  {
    id: 11,
    src: '/gallery/acoustic-panels/ceiling-framework-detail.jpg',
    title: 'Ceiling Framework Detail',
    description: 'Behind-the-scenes view of acoustic panel installation framework and structure'
  },
  {
    id: 12,
    src: '/gallery/acoustic-panels/panel-installation-process.jpg',
    title: 'Panel Installation Process',
    description: 'Professional installation of acoustic ceiling panels in commercial space'
  },
  {
    id: 13,
    src: '/gallery/acoustic-panels/large-dining-installation.jpg',
    title: 'Large Dining Installation',
    description: 'Comprehensive acoustic treatment for large restaurant dining area'
  },
  {
    id: 14,
    src: '/gallery/acoustic-panels/corporate-exhibition-panel.jpg',
    title: 'Corporate Exhibition Panel',
    description: 'Large-scale branded acoustic installation for corporate environment'
  },
  {
    id: 15,
    src: '/gallery/acoustic-panels/modular-acoustic-wall.jpg',
    title: 'Modular Acoustic Wall System',
    description: 'Grid-based acoustic panel wall system with wooden frames and fabric inserts'
  },
  {
    id: 16,
    src: '/gallery/acoustic-panels/architectural-ceiling-panels.jpg',
    title: 'Architectural Ceiling Panels',
    description: 'Professional acoustic ceiling panels with elegant chandelier integration'
  },
  {
    id: 17,
    src: '/gallery/acoustic-panels/decorative-ceiling-lighting.jpg',
    title: 'Decorative Ceiling Lighting',
    description: 'Custom acoustic ceiling treatment with integrated decorative lighting features'
  }
];

export default function AcousticPanelsGallery() {
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
      {/* Navigation Header */}
      <nav className="bg-primary text-primary-foreground py-4 px-6">
        <div className="max-w-7xl mx-auto flex items-center">
          <Button variant="ghost" size="sm" asChild className="mr-4 text-primary-foreground hover:bg-primary-foreground/20">
            <Link href="/">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </Button>
          <Volume2 className="w-5 h-5 mr-2" />
          <h1 className="text-xl font-semibold">Acoustic Panels Gallery</h1>
        </div>
      </nav>

      {/* Main Content */}
      <main className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Volume2 className="w-12 h-12 text-primary mr-4" />
              <h1 className="text-4xl font-bold">Acoustic Panels</h1>
            </div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Professional acoustic treatment solutions featuring sound absorption panels,
              decorative acoustic treatments, and custom designed sound control systems.
            </p>
          </div>

          {/* Image Grid */}
          {galleryImages.length > 0 ? (
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
          ) : (
            <div className="text-center py-16">
              <Volume2 className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">No Images Yet</h3>
              <p className="text-muted-foreground mb-6">
                Upload your acoustic panel project images to showcase your work.
              </p>
            </div>
          )}


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
