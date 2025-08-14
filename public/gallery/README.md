# Gallery Images Folder Structure

This folder contains all images for the website's specialized galleries.

## Folder Organization

```
gallery/
├── acoustic-panels/     # Acoustic treatment and sound absorption solutions
├── restaurants/         # Dining area sound management and acoustic comfort
├── night-clubs/         # Entertainment venue audio systems and soundproofing
├── schools-worship/     # Educational and spiritual facility acoustics
├── commercial-spaces/   # Office buildings and business environment acoustics
├── industrial-machinery/ # Factory noise control and equipment sound management
└── tech-av/            # Audio-visual installations and technology integration
```

## Gallery Pages

Each folder corresponds to a dedicated gallery page:

- `/gallery/acoustic-panels` - Professional acoustic panels and treatments
- `/gallery/restaurants` - Restaurant and dining establishment projects
- `/gallery/night-clubs` - Nightclub and entertainment venue installations
- `/gallery/schools-worship` - Educational institutions and houses of worship
- `/gallery/commercial-spaces` - Office buildings and commercial projects
- `/gallery/industrial-machinery` - Industrial noise control and machinery projects
- `/gallery/tech-av` - Technology and audio-visual installations

## Adding Images

1. **Upload your images** to the appropriate subfolder based on project type
2. **Use descriptive filenames** like:
   - `acoustic-panels-studio-installation.jpg`
   - `restaurant-dining-room-treatment.jpg`
   - `nightclub-dj-booth-setup.jpg`

3. **Recommended specifications:**
   - Format: JPG, PNG, or WebP
   - Size: 800x600px (4:3 aspect ratio) for consistency
   - File size: Under 500KB for optimal loading

## Updating Gallery Pages

After uploading images, update the corresponding gallery page:
`/src/app/gallery/[category]/page.tsx`

Example image entry:
```javascript
{
  id: 1,
  src: '/gallery/acoustic-panels/studio-treatment.jpg',
  title: 'Recording Studio Acoustic Treatment',
  description: 'Professional acoustic panels and bass traps installation'
}
```

## Tips

- Keep filenames descriptive and URL-friendly (no spaces, use hyphens)
- Organize by project type for easier management
- Compress images before uploading for better performance
- Include before/after shots when possible
