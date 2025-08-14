export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  slug: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Recording Studio Soundproofing',
    category: 'Studio',
    description: 'Complete acoustic treatment for professional recording studio with floating floors and isolated walls.',
    slug: 'recording-studio-soundproofing'
  },
  {
    id: 2,
    title: 'Home Theatre Acoustic Design',
    category: 'Residential',
    description: 'Custom home theatre with optimised acoustics and soundproofing for the ultimate viewing experience.',
    slug: 'home-theatre-acoustic-design'
  },
  {
    id: 3,
    title: 'Office Noise Control',
    category: 'Commercial',
    description: 'Open office acoustic treatment to reduce noise distractions and improve productivity.',
    slug: 'office-noise-control'
  },
  {
    id: 4,
    title: 'Industrial Machinery Enclosure',
    category: 'Industrial',
    description: 'Custom acoustic enclosure for manufacturing equipment reducing noise by 35dB.',
    slug: 'industrial-machinery-enclosure'
  },
  {
    id: 5,
    title: 'Restaurant Acoustic Treatment',
    category: 'Commercial',
    description: 'Elegant acoustic panels and ceiling treatment to control reverberation in dining areas.',
    slug: 'restaurant-acoustic-treatment'
  },
  {
    id: 6,
    title: 'Broadcast Studio Construction',
    category: 'Studio',
    description: 'Room-in-room construction for radio broadcast studio with complete isolation.',
    slug: 'broadcast-studio-construction'
  },
  {
    id: 7,
    title: 'Custom Acoustic Furniture Design',
    category: 'Carpentry',
    description: 'Handcrafted acoustic furniture combining sound absorption with elegant design for modern office spaces.',
    slug: 'custom-acoustic-furniture-design'
  },
  {
    id: 8,
    title: 'Bespoke Studio Booth Construction',
    category: 'Carpentry',
    description: 'Custom-built recording booth with precision carpentry and integrated acoustic treatment materials.',
    slug: 'bespoke-studio-booth-construction'
  },
  {
    id: 9,
    title: 'Conference Room AV Installation',
    category: 'AV Installation',
    description: 'Complete audio-visual system installation for corporate boardroom with wireless presentation capabilities.',
    slug: 'conference-room-av-installation'
  },
  {
    id: 10,
    title: 'Home Theatre AV Setup',
    category: 'AV Installation',
    description: 'Premium home cinema installation with 7.1 surround sound system and 4K projection technology.',
    slug: 'home-theatre-av-setup'
  },
  {
    id: 11,
    title: 'Church Audio System Integration',
    category: 'AV Installation',
    description: 'Large-scale audio system installation for worship facility with distributed speaker arrays and mixing console.',
    slug: 'church-audio-system-integration'
  },
  {
    id: 12,
    title: 'Custom Reception Desk with Acoustic Features',
    category: 'Carpentry',
    description: 'Handcrafted reception desk incorporating hidden acoustic panels and cable management for clean aesthetics.',
    slug: 'custom-reception-desk-acoustic-features'
  }
];

export const categories = ['All', 'Studio', 'Residential', 'Commercial', 'Industrial', 'Carpentry', 'AV Installation', 'Entertainment venues'];

export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
  features: string[];
}

export const services: Service[] = [
  {
    id: 'soundproofing',
    icon: 'Shield',
    title: 'Soundproofing',
    description: 'Professional noise isolation using mass, sealing, and decoupling techniques to block unwanted sound transmission.',
    features: ['Mass Loaded Vinyl', 'Acoustic Sealing', 'Decoupling Systems']
  },
  {
    id: 'acoustic-treatment',
    icon: 'Volume2',
    title: 'Acoustic Treatment',
    description: 'Echo control and sound quality improvement using absorption and diffusion materials.',
    features: ['Acoustic Panels', 'Sound Diffusers', 'Bass Traps']
  },
  {
    id: 'noise-vibration-control',
    icon: 'Settings',
    title: 'Noise & Vibration Control',
    description: 'Specialized solutions for industrial machinery and equipment noise control.',
    features: ['Vibration Isolation', 'Machine Enclosures', 'Industrial Barriers']
  },
  {
    id: 'anc',
    icon: 'Zap',
    title: 'ANC',
    description: 'Cutting-edge active noise control systems that use electronic processing to cancel unwanted sounds in real-time.',
    features: ['Real-time Processing', 'Digital Signal Processing', 'Smart Cancellation']
  },
  {
    id: 'sound-system-design',
    icon: 'Speaker',
    title: 'Sound System Design',
    description: 'Professional audio system specification and design services for optimal sound distribution and quality.',
    features: ['System Design', 'Equipment Specification', 'Performance Optimization']
  },
  {
    id: 'noise-impact-surveys',
    icon: 'ClipboardCheck',
    title: 'Noise Impact Surveys',
    description: 'Comprehensive noise impact assessments and compliance surveys to meet regulatory requirements.',
    features: ['Environmental Assessment', 'Regulatory Compliance', 'Impact Analysis']
  },
  {
    id: 'room-in-room',
    icon: 'HomeIcon',
    title: 'Room-in-Room Construction',
    description: 'Complete isolated room construction for maximum sound isolation and acoustic control.',
    features: ['Complete Isolation', 'Custom Construction', 'Floating Systems']
  },
  {
    id: 'carpentry-manufacturing',
    icon: 'Hammer',
    title: 'Carpentry & Custom Manufacturing',
    description: 'Expert carpentry and custom manufacturing services for specialized acoustic installations and furniture.',
    features: ['Custom Acoustic Furniture', 'Specialized Installations', 'Bespoke Solutions']
  },
  {
    id: 'av-tech-supply',
    icon: 'Monitor',
    title: 'AV Tech Supply & Install',
    description: 'Complete audio-visual technology supply and installation services for professional and residential applications.',
    features: ['Professional AV Equipment', 'Installation & Setup', 'System Integration']
  }
];
