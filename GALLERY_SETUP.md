# Gallery System Setup Guide

## Overview
The website now uses an icon-based gallery system where:
1. Main gallery shows icons for each project category
2. Clicking an icon opens a dedicated page with project thumbnails
3. Clicking thumbnails enlarges the images in a modal

## Adding Images to Projects

### 1. Upload Images to Public Directory
Create project folders in the `public` directory:
```
public/
├── gallery/
│   ├── recording-studio-soundproofing/
│   │   ├── image1.jpg
│   │   ├── image2.jpg
│   │   └── image3.jpg
│   ├── home-theatre-acoustic-design/
│   │   ├── image1.jpg
│   │   └── image2.jpg
│   └── ... (other projects)
```

### 2. Update Project Data
Edit `/src/app/gallery/[slug]/page.tsx` and add image paths to the `projectData` object:

```typescript
"recording-studio-soundproofing": {
  title: "Recording Studio Soundproofing",
  category: "Studio",
  description: "Complete acoustic treatment for professional recording studio...",
  images: [
    "/gallery/recording-studio-soundproofing/image1.jpg",
    "/gallery/recording-studio-soundproofing/image2.jpg",
    "/gallery/recording-studio-soundproofing/image3.jpg"
  ]
},
```

## Available Projects

### Studio Projects
1. **recording-studio-soundproofing** - Recording Studio Soundproofing
2. **broadcast-studio-construction** - Broadcast Studio Construction

### Residential Projects
1. **home-theatre-acoustic-design** - Home Theatre Acoustic Design

### Commercial Projects
1. **office-noise-control** - Office Noise Control
2. **restaurant-acoustic-treatment** - Restaurant Acoustic Treatment

### Industrial Projects
1. **industrial-machinery-enclosure** - Industrial Machinery Enclosure

### Carpentry Projects
1. **custom-acoustic-furniture-design** - Custom Acoustic Furniture Design
2. **bespoke-studio-booth-construction** - Bespoke Studio Booth Construction
3. **custom-reception-desk-acoustic-features** - Custom Reception Desk with Acoustic Features

### AV Installation Projects
1. **conference-room-av-installation** - Conference Room AV Installation
2. **home-theatre-av-setup** - Home Theatre AV Setup
3. **church-audio-system-integration** - Church Audio System Integration

## Image Requirements

### Recommended Specifications
- **Format**: JPG, PNG, or WebP
- **Resolution**: Minimum 1920x1080, recommended 2560x1440 or higher
- **File Size**: Under 2MB per image for optimal loading
- **Aspect Ratio**: Mixed ratios supported, but 16:9 or 4:3 work best

### Image Naming Convention
Use descriptive names:
- `before-treatment.jpg`
- `acoustic-panels-installation.jpg`
- `completed-studio.jpg`
- `detail-foam-corner.jpg`

## Gallery Features

### Current Features ✅
- **Icon-based main gallery** with category filtering
- **Dedicated project pages** with full descriptions
- **Thumbnail grid layout** for easy browsing
- **Modal image viewer** with navigation controls
- **Responsive design** for all devices
- **SEO optimized** with structured data

### Planned Enhancements
- **Image upload interface** for easy management
- **Image metadata** (captions, dates, project details)
- **Before/after comparisons**
- **Project progress galleries**
- **Client testimonials** per project

## Testing Your Images

1. **Add images** to the appropriate project folder in `public/gallery/`
2. **Update project data** in `/src/app/gallery/[slug]/page.tsx`
3. **Test navigation** from main gallery to project page
4. **Verify thumbnails** display correctly
5. **Test modal enlargement** functionality

## Example Project Setup

To add images to "Recording Studio Soundproofing":

1. Create folder: `public/gallery/recording-studio-soundproofing/`
2. Add images: `studio-before.jpg`, `foam-installation.jpg`, `completed-studio.jpg`
3. Update project data:
```typescript
"recording-studio-soundproofing": {
  // ... existing data
  images: [
    "/gallery/recording-studio-soundproofing/studio-before.jpg",
    "/gallery/recording-studio-soundproofing/foam-installation.jpg",
    "/gallery/recording-studio-soundproofing/completed-studio.jpg"
  ]
}
```

## Bulk Image Processing

For multiple projects:
1. **Resize images** to consistent dimensions using tools like:
   - Adobe Photoshop (batch processing)
   - ImageMagick (command line)
   - Online tools like TinyPNG
2. **Optimize file sizes** for web delivery
3. **Organize by project** in separate folders
4. **Use consistent naming** across all projects

## Need Help?

The gallery system is now ready for your project images. Simply follow the steps above to populate each project with high-quality photos that showcase your acoustic work!
