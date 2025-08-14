"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { X, ChevronLeft, ChevronRight, ArrowLeft, Upload } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

// Project data (in a real app, this would come from a database or API)
const projectData: Record<string, {
  title: string;
  category: string;
  description: string;
  images: string[];
}> = {
  "recording-studio-soundproofing": {
    title: "Recording Studio Soundproofing",
    category: "Studio",
    description: "Complete acoustic treatment for professional recording studio with floating floors and isolated walls.",
    images: [] // You'll add your images here
  },
  "home-theatre-acoustic-design": {
    title: "Home Theatre Acoustic Design",
    category: "Residential",
    description: "Custom home theatre with optimised acoustics and soundproofing for the ultimate viewing experience.",
    images: [] // You'll add your images here
  },
  "office-noise-control": {
    title: "Office Noise Control",
    category: "Commercial",
    description: "Open office acoustic treatment to reduce noise distractions and improve productivity.",
    images: [] // You'll add your images here
  },
  "industrial-machinery-enclosure": {
    title: "Industrial Machinery Enclosure",
    category: "Industrial",
    description: "Custom acoustic enclosure for manufacturing equipment reducing noise by 35dB.",
    images: [] // You'll add your images here
  },
  "restaurant-acoustic-treatment": {
    title: "Restaurant Acoustic Treatment",
    category: "Commercial",
    description: "Elegant acoustic panels and ceiling treatment to control reverberation in dining areas.",
    images: [] // You'll add your images here
  },
  "broadcast-studio-construction": {
    title: "Broadcast Studio Construction",
    category: "Studio",
    description: "Room-in-room construction for radio broadcast studio with complete isolation.",
    images: [] // You'll add your images here
  },
  "custom-acoustic-furniture-design": {
    title: "Custom Acoustic Furniture Design",
    category: "Carpentry",
    description: "Handcrafted acoustic furniture combining sound absorption with elegant design for modern office spaces.",
    images: [] // You'll add your images here
  },
  "bespoke-studio-booth-construction": {
    title: "Bespoke Studio Booth Construction",
    category: "Carpentry",
    description: "Custom-built recording booth with precision carpentry and integrated acoustic treatment materials.",
    images: [] // You'll add your images here
  },
  "conference-room-av-installation": {
    title: "Conference Room AV Installation",
    category: "AV Installation",
    description: "Complete audio-visual system installation for corporate boardroom with wireless presentation capabilities.",
    images: [] // You'll add your images here
  },
  "home-theatre-av-setup": {
    title: "Home Theatre AV Setup",
    category: "AV Installation",
    description: "Premium home cinema installation with 7.1 surround sound system and 4K projection technology.",
    images: [] // You'll add your images here
  },
  "church-audio-system-integration": {
    title: "Church Audio System Integration",
    category: "AV Installation",
    description: "Large-scale audio system installation for worship facility with distributed speaker arrays and mixing console.",
    images: [] // You'll add your images here
  },
  "custom-reception-desk-acoustic-features": {
    title: "Custom Reception Desk with Acoustic Features",
    category: "Carpentry",
    description: "Handcrafted reception desk incorporating hidden acoustic panels and cable management for clean aesthetics.",
    images: [] // You'll add your images here
  }
};

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default function ProjectGallery({ params }: Props) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [slug, setSlug] = useState<string>("");

  // Handle async params
  React.useEffect(() => {
    params.then((resolvedParams) => {
      setSlug(resolvedParams.slug);
    });
  }, [params]);

  const project = slug ? projectData[slug] : null;

  if (!slug) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Loading...</h1>
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
          <Link href="/">
            <Button>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const openModal = (index: number) => {
    setSelectedImage(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % project.images.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? project.images.length - 1 : selectedImage - 1);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-primary text-primary-foreground py-6 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <Link href="/#gallery">
              <Button variant="secondary" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Gallery
              </Button>
            </Link>
            <div className="text-center">
              <h1 className="text-3xl font-bold">{project.title}</h1>
              <div className="inline-block px-3 py-1 bg-primary-foreground/20 rounded-full text-sm mt-2">
                {project.category}
              </div>
            </div>
            <div /> {/* Spacer for center alignment */}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-8">
          <p className="text-lg text-muted-foreground leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Image Upload Section (for when images are empty) */}
        {project.images.length === 0 && (
          <Card className="mb-8">
            <CardContent className="p-8 text-center">
              <Upload className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">No Images Available</h3>
              <p className="text-muted-foreground mb-4">
                Images for this project will be uploaded soon. This gallery will display thumbnails of project photos that can be clicked to enlarge.
              </p>
              <div className="text-sm text-muted-foreground">
                <p><strong>Planned Features:</strong></p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>Thumbnail grid layout</li>
                  <li>Click to enlarge images</li>
                  <li>Navigation between images</li>
                  <li>High-resolution image viewing</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Thumbnail Grid */}
        {project.images.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
            {project.images.map((image, index) => (
              <div
                key={image}
                className="aspect-square bg-gray-900 rounded-lg overflow-hidden cursor-pointer hover:ring-2 hover:ring-primary transition-all duration-300"
                onClick={() => openModal(index)}
              >
                <img
                  src={image}
                  alt={`${project.title} - Image ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        )}

        {/* Placeholder grid when no images */}
        {project.images.length === 0 && (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div
                key={i}
                className="aspect-square bg-gray-900 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-700"
              >
                <Upload className="w-8 h-8 text-gray-600" />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Image Modal */}
      {selectedImage !== null && project.images.length > 0 && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative max-w-6xl w-full h-full flex items-center justify-center">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 w-12 h-12 bg-black/70 hover:bg-black/90 text-white rounded-full flex items-center justify-center transition-colors duration-300"
            >
              <X size={24} />
            </button>

            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-black/70 hover:bg-black/90 text-white rounded-full flex items-center justify-center transition-colors duration-300"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-black/70 hover:bg-black/90 text-white rounded-full flex items-center justify-center transition-colors duration-300"
            >
              <ChevronRight size={24} />
            </button>

            <div className="max-w-full max-h-full">
              <img
                src={project.images[selectedImage]}
                alt={`${project.title} - Image ${selectedImage + 1}`}
                className="max-w-full max-h-full object-contain"
              />
            </div>

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-full">
              {selectedImage + 1} of {project.images.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
