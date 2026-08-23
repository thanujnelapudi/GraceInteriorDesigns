export interface CategoryInfo {
  slug: string;
  name: string;
  description: string;
  bgImage: string;
  startingPrice: string;
  averageTime: string;
}

export const CATEGORIES: Record<string, CategoryInfo> = {
  'floral-arts': {
    slug: 'floral-arts',
    name: 'Floral Arts',
    description: 'Elegantly detailed botanical, floral, and nature-inspired wall paintings customized with luxury metallic accents and rich textures.',
    bgImage: '/images/Floral/WhatsApp Image 2026-08-14 at 10.13.46 AM (1).jpeg',
    startingPrice: '₹18,000+',
    averageTime: '3 – 5 Days'
  },
  'wall-murals': {
    slug: 'wall-murals',
    name: 'Wall Murals',
    description: 'Bespoke hand-painted and sculpted murals that transform large architectural walls into immersive, iconic centerpieces.',
    bgImage: '/images/Murals/WhatsApp Image 2026-08-14 at 10.15.39 AM.jpeg',
    startingPrice: '₹25,000+',
    averageTime: '5 – 8 Days'
  },
  'school-art': {
    slug: 'school-art',
    name: 'School & Educational Art',
    description: 'Inspiring educational murals, imaginative classroom themes, and creative illustrations crafted to brighten learning spaces.',
    bgImage: '/images/School/WhatsApp Image 2026-08-14 at 10.31.38 AM.jpeg',
    startingPrice: '₹15,000+',
    averageTime: '3 – 6 Days'
  },
  'wall-art': {
    slug: 'wall-art',
    name: 'Wall Art & Paintings',
    description: 'Modern geometric, textured, thematic, and traditional wall paintings designed to elevate homes, villas, and commercial interiors.',
    bgImage: '/images/Wall art/WhatsApp Image 2026-08-14 at 10.18.17 AM.jpeg',
    startingPrice: '₹12,000+',
    averageTime: '2 – 4 Days'
  }
};
