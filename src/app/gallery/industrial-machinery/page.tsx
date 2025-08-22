"use client";

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowLeft, X, ZoomIn, Factory } from "lucide-react";
import Link from "next/link";

interface GalleryImage {
  id: number;
  src: string;
  title: string;
  description: string;
}

// Industrial & machinery project images
const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: '/gallery/industrial-machinery/acoustic-equipment-enclosure.jpg',
    title: 'Acoustic Equipment Enclosure',
    description: 'Custom-built white acoustic enclosure for industrial equipment with sound-dampening panels and ventilation access'
  },
  {
    id: 2,
    src: '/gallery/industrial-machinery/industrial-ceiling-acoustic-panels.jpg',
    title: 'Industrial Ceiling Acoustic Panels',
    description: 'Professional acoustic ceiling panel installation in industrial facility with metal framework and sound absorption'
  },
  {
    id: 3,
    src: '/gallery/industrial-machinery/generator-acoustic-enclosure-system.jpg',
    title: 'Generator Acoustic Enclosure System',
    description: 'Complete generator noise control system with weatherproof acoustic enclosure and exhaust stack integration'
  },
  {
    id: 4,
    src: '/gallery/industrial-machinery/wooden-acoustic-barrier-fence.jpg',
    title: 'Wooden Acoustic Barrier Fence',
    description: 'Large-scale wooden acoustic barrier installation for industrial noise mitigation and perimeter sound control'
  },
  {
    id: 5,
    src: '/gallery/industrial-machinery/stairwell-acoustic-wall-panels.jpg',
    title: 'Stairwell Acoustic Wall Panels',
    description: 'Industrial stairwell acoustic treatment with dark sound-absorbing panels for noise reduction in high-traffic areas'
  },
  {
    id: 6,
    src: '/gallery/industrial-machinery/generator-enclosure-industrial-yard.jpg',
    title: 'Generator Enclosure - Industrial Yard',
    description: 'Heavy-duty generator acoustic enclosure installed in industrial facility courtyard with proper ventilation systems'
  },
  {
    id: 7,
    src: '/gallery/industrial-machinery/building-acoustic-barrier-ventilation.jpg',
    title: 'Building Acoustic Barrier with Ventilation',
    description: 'Specialized acoustic barrier installation on building exterior with integrated ventilation pipe and noise control'
  },
  {
    id: 8,
    src: '/gallery/industrial-machinery/industrial-acoustic-ceiling-framework.jpg',
    title: 'Industrial Acoustic Ceiling Framework',
    description: 'Complex industrial acoustic ceiling installation with metal framework, lighting integration, and comprehensive sound treatment'
  },
  {
    id: 9,
    src: '/gallery/industrial-machinery/residential-generator-acoustic-housing.jpg',
    title: 'Residential Generator Acoustic Housing',
    description: 'Residential generator noise control solution with custom acoustic housing and weatherproof enclosure design'
  },
  {
    id: 10,
    src: '/gallery/industrial-machinery/pool-equipment-acoustic-decking.jpg',
    title: 'Pool Equipment Acoustic Decking',
    description: 'Innovative pool equipment noise control with wooden acoustic decking and integrated equipment housing system'
  }
];

export default function IndustrialMachineryGallery() {
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
          <Factory className="w-5 h-5 mr-2" />
          <h1 className="text-xl font-semibold">Industrial & Machinery Gallery</h1>
        </div>
      </nav>

      <main className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Factory className="w-12 h-12 text-primary mr-4" />
              <h1 className="text-4xl font-bold">Industrial & Machinery</h1>
            </div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Factory noise control and equipment sound management solutions, including
              acoustic enclosures, vibration isolation, and industrial barriers.
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
