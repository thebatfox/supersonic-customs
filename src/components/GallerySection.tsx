"use client";

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Volume2, Utensils, Music, GraduationCap, Building2, Factory, MonitorSpeaker, Sparkles } from 'lucide-react';
import Link from 'next/link';

const galleryCategories = [
  {
    id: 'acoustic-panels',
    title: 'Acoustic Panels',
    description: 'Professional acoustic treatment and sound absorption solutions',
    icon: Volume2,
    href: '/gallery/acoustic-panels'
  },
  {
    id: 'restaurants',
    title: 'Restaurants',
    description: 'Dining area sound management and acoustic comfort',
    icon: Utensils,
    href: '/gallery/restaurants'
  },
  {
    id: 'night-clubs',
    title: 'Night Clubs',
    description: 'Entertainment venue audio systems and soundproofing',
    icon: Music,
    href: '/gallery/night-clubs'
  },
  {
    id: 'schools-worship',
    title: 'Schools & Houses of Worship',
    description: 'Educational and spiritual facility acoustics',
    icon: GraduationCap,
    href: '/gallery/schools-worship'
  },
  {
    id: 'commercial-spaces',
    title: 'Commercial Spaces',
    description: 'Office buildings and business environment acoustics',
    icon: Building2,
    href: '/gallery/commercial-spaces'
  },
  {
    id: 'industrial-machinery',
    title: 'Industrial & Machinery',
    description: 'Factory noise control and equipment sound management',
    icon: Factory,
    href: '/gallery/industrial-machinery'
  },
  {
    id: 'tech-av',
    title: 'Tech & AV',
    description: 'Audio-visual installations and technology integration',
    icon: MonitorSpeaker,
    href: '/gallery/tech-av'
  },
  {
    id: 'fun-projects',
    title: 'Fun Projects',
    description: 'Creative and unique acoustic installations',
    icon: Sparkles,
    href: '/gallery/fun-projects'
  }
];

export default function GallerySection() {
  return (
    <section id="gallery" className="py-20 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Project <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Gallery</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Explore our portfolio of successful acoustic projects across various industries.
            Each category showcases our commitment to excellence and attention to detail.
          </p>
        </div>

        {/* Gallery Category Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {galleryCategories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Card key={category.id} className="group relative bg-gray-900 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-700 hover:border-blue-500">
                <Link href={category.href}>
                  <div className="p-8 text-center">
                    <div className="flex items-center justify-center h-20 mb-6">
                      <div className="transition-transform duration-300 group-hover:scale-110">
                        <IconComponent className="w-16 h-16 text-blue-400 group-hover:text-blue-300" />
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                      {category.title}
                    </h3>

                    <p className="text-gray-400 text-sm leading-relaxed mb-6">
                      {category.description}
                    </p>

                    <Button
                      variant="outline"
                      size="sm"
                      className="border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white transition-all duration-300"
                    >
                      View Gallery
                    </Button>
                  </div>
                </Link>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
