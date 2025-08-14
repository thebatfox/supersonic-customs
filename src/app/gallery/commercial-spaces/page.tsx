"use client";

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowLeft, X, ZoomIn, Building2 } from "lucide-react";
import Link from "next/link";

interface GalleryImage {
  id: number;
  src: string;
  title: string;
  description: string;
}

// Commercial Spaces project images
const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: '/gallery/commercial-spaces/modern-office-phone-booths.jpg',
    title: 'Modern Office Phone Booths',
    description: 'Contemporary office space featuring wooden acoustic phone booths with hanging plants and modern carpet design for privacy and noise control'
  },
  {
    id: 2,
    src: '/gallery/commercial-spaces/wooden-doorway-library-entrance.jpg',
    title: 'Wooden Doorway Library Entrance',
    description: 'Elegant wooden doorway entrance leading to library space with extensive book collection and acoustic treatment for quiet environment'
  },
  {
    id: 3,
    src: '/gallery/commercial-spaces/office-space-exposed-ceiling.jpg',
    title: 'Office Space with Exposed Ceiling',
    description: 'Modern office environment with exposed ceiling acoustic treatment, TV wall installation, and professional striped carpet flooring'
  },
  {
    id: 4,
    src: '/gallery/commercial-spaces/supersonic-ceiling-installation.jpg',
    title: 'SuperSonic Ceiling Installation',
    description: 'SuperSonic Customs team members working on professional acoustic ceiling installation in modern office with large windows'
  },
  {
    id: 5,
    src: '/gallery/commercial-spaces/acoustic-wall-panels-backlighting.jpg',
    title: 'Acoustic Wall Panels with Backlighting',
    description: 'Sophisticated acoustic wall panel installation with integrated LED backlighting creating modern workspace ambiance and sound control'
  },
  {
    id: 6,
    src: '/gallery/commercial-spaces/great-idea-office-workspace.jpg',
    title: 'Creative Office Workspace',
    description: 'Inspirational office workspace featuring "great idea" wall graphics, modern desk setup, and acoustic treatments for enhanced productivity'
  },
  {
    id: 7,
    src: '/gallery/commercial-spaces/geometric-acoustic-panel-wall.jpg',
    title: 'Geometric Acoustic Panel Wall',
    description: 'Impressive geometric acoustic panel wall installation with grid pattern design providing both visual appeal and superior sound absorption'
  },
  {
    id: 8,
    src: '/gallery/commercial-spaces/wooden-slat-living-wall.jpg',
    title: 'Wooden Slat Wall with Living Elements',
    description: 'Modern office featuring wooden slat wall treatment combined with living wall installation and motivational messaging for enhanced workspace environment'
  },
  {
    id: 9,
    src: '/gallery/commercial-spaces/restaurant-pendant-lighting.jpg',
    title: 'Restaurant Pendant Lighting',
    description: 'Commercial restaurant space with acoustic ceiling treatment, elegant pendant lighting, and professional dining environment design'
  },
  {
    id: 10,
    src: '/gallery/commercial-spaces/luxury-restaurant-interior.jpg',
    title: 'Luxury Restaurant Interior',
    description: 'High-end restaurant interior featuring coffered ceiling with acoustic treatment, elegant furnishings, and sophisticated dining atmosphere'
  },
  {
    id: 11,
    src: '/gallery/commercial-spaces/rustic-restaurant-bar.jpg',
    title: 'Rustic Restaurant & Bar',
    description: 'Charming restaurant and bar area with exposed wooden beam ceiling, acoustic treatments, and rustic design elements creating warm ambiance'
  },
  {
    id: 12,
    src: '/gallery/commercial-spaces/staircase-acoustic-treatment.jpg',
    title: 'Staircase Acoustic Treatment',
    description: 'Professional staircase area with comprehensive acoustic wall treatment, modern railings, and integrated lighting for noise control'
  },
  {
    id: 13,
    src: '/gallery/commercial-spaces/meeting-room-artwork.jpg',
    title: 'Meeting Room with Architectural Artwork',
    description: 'Professional meeting room featuring acoustic treatments, architectural artwork, and conference table setup for optimal business communication'
  },
  {
    id: 14,
    src: '/gallery/commercial-spaces/conference-room-coffered-ceiling.jpg',
    title: 'Conference Room Coffered Ceiling',
    description: 'Large conference room with sophisticated coffered ceiling acoustic treatment, professional lighting, and comprehensive meeting space design'
  },
  {
    id: 15,
    src: '/gallery/commercial-spaces/marble-wall-office-lounge.jpg',
    title: 'Marble Wall Office Lounge',
    description: 'Modern office lounge area featuring marble-pattern acoustic wall treatment, contemporary seating, and professional interior design'
  },
  {
    id: 16,
    src: '/gallery/commercial-spaces/open-office-workspace.jpg',
    title: 'Open Office Workspace',
    description: 'Open office environment with acoustic desk partitions, modern workstations, and sound management solutions for collaborative workspace'
  },
  {
    id: 17,
    src: '/gallery/commercial-spaces/medical-office-gradient-wall.jpg',
    title: 'Medical Office with Gradient Wall Art',
    description: 'Modern medical office featuring custom gradient wall art in green-pink tones with professional cabinetry and acoustic treatment for patient comfort'
  },
  {
    id: 18,
    src: '/gallery/commercial-spaces/conference-room-historical-artwork.jpg',
    title: 'Conference Room with Historical Artwork',
    description: 'Professional conference room featuring da Vinci-style historical artwork, wooden conference table, and acoustic wall treatments for optimal meeting environment'
  },
  {
    id: 19,
    src: '/gallery/commercial-spaces/brick-office-acoustic-partition.jpg',
    title: 'Brick Office with Acoustic Partition',
    description: 'Industrial-style office space with exposed brick walls and large gray acoustic partition system for noise control and workspace division'
  }
];

export default function CommercialSpacesGallery() {
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
          <Building2 className="w-5 h-5 mr-2" />
          <h1 className="text-xl font-semibold">Commercial Spaces Gallery</h1>
        </div>
      </nav>

      <main className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Building2 className="w-12 h-12 text-primary mr-4" />
              <h1 className="text-4xl font-bold">Commercial Spaces</h1>
            </div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Office buildings and business environment acoustics designed to enhance
              productivity, communication, and create professional working environments.
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
