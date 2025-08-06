"use client";

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowLeft, X, ZoomIn, GraduationCap } from "lucide-react";
import Link from "next/link";

interface GalleryImage {
  id: number;
  src: string;
  title: string;
  description: string;
}

// Schools & Houses of Worship project images
const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: '/gallery/schools-worship/school-classroom-ceiling-installation.jpg',
    title: 'School Classroom Ceiling Installation',
    description: 'Professional acoustic ceiling panel installation in modern school classroom with integrated projector and lighting systems'
  },
  {
    id: 2,
    src: '/gallery/schools-worship/supersonic-team-classroom-acoustic-work.jpg',
    title: 'SuperSonic Team Classroom Acoustic Work',
    description: 'SuperSonic Customs technicians installing acoustic flooring and wall treatments in colorful school classroom environment'
  },
  {
    id: 3,
    src: '/gallery/schools-worship/classroom-acoustic-panel-installation.jpg',
    title: 'Classroom Acoustic Panel Installation',
    description: 'Detailed classroom acoustic installation showing ceiling work and wall panel treatments for optimal learning environment acoustics'
  },
  {
    id: 4,
    src: '/gallery/schools-worship/school-ceiling-acoustic-treatment.jpg',
    title: 'School Ceiling Acoustic Treatment',
    description: 'Comprehensive ceiling acoustic treatment installation in school classroom with white panels and integrated AV equipment'
  },
  {
    id: 5,
    src: '/gallery/schools-worship/church-sanctuary-pipe-organ-acoustics.jpg',
    title: 'Church Sanctuary Pipe Organ Acoustics',
    description: 'Stunning church sanctuary featuring traditional pipe organ with comprehensive acoustic panel treatment and wooden pews'
  },
  {
    id: 6,
    src: '/gallery/schools-worship/classroom-acoustic-installation-progress.jpg',
    title: 'Classroom Acoustic Installation Progress',
    description: 'SuperSonic technician working on classroom acoustic installation with focus on proper sound treatment and learning environment optimization'
  },
  {
    id: 7,
    src: '/gallery/schools-worship/church-sanctuary-acoustic-panels.jpg',
    title: 'Church Sanctuary Acoustic Panels',
    description: 'Beautiful church sanctuary interior with strategically placed acoustic panels, blue drapes, and wooden furnishings for optimal worship acoustics'
  },
  {
    id: 8,
    src: '/gallery/schools-worship/church-interior-acoustic-treatment.jpg',
    title: 'Church Interior Acoustic Treatment',
    description: 'Elegant church interior showcasing comprehensive acoustic treatment with white panels, decorative elements, and traditional wooden architecture'
  },
  {
    id: 9,
    src: '/gallery/schools-worship/church-sanctuary-balcony-view.jpg',
    title: 'Church Sanctuary Balcony View',
    description: 'Impressive view from church balcony showing complete acoustic installation with pipe organ integration and sanctuary seating'
  },
  {
    id: 10,
    src: '/gallery/schools-worship/church-complete-acoustic-installation.jpg',
    title: 'Church Complete Acoustic Installation',
    description: 'Comprehensive church sanctuary acoustic treatment featuring multiple levels, organ integration, and optimized worship space acoustics'
  },
  {
    id: 11,
    src: '/gallery/schools-worship/acoustic-wood-paneling-seating-area.jpg',
    title: 'Acoustic Wood Paneling Seating Area',
    description: 'Sophisticated acoustic wood paneling installation in church seating area with comfortable chairs and decorative carpet for enhanced sound control'
  }
];

export default function SchoolsWorshipGallery() {
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
          <GraduationCap className="w-5 h-5 mr-2" />
          <h1 className="text-xl font-semibold">Schools & Houses of Worship Gallery</h1>
        </div>
      </nav>

      <main className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <GraduationCap className="w-12 h-12 text-primary mr-4" />
              <h1 className="text-4xl font-bold">Schools & Houses of Worship</h1>
            </div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Educational and spiritual facility acoustics designed for clear speech,
              music performance, and creating inspiring learning and worship environments.
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
