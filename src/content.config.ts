import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const works = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/works' }),
  schema: z.object({
    id: z.string(),
    title: z.string(),
    category: z.enum([
      'floral-arts',
      'wall-murals',
      'school-art',
      'wall-art'
    ]),
    description: z.string(),
    priceRange: z.string(),
    timeRange: z.string(),
    images: z.array(z.string()),
    featured: z.boolean().default(false),
    // Fields for the Project Modal & Detail Views
    wallSize: z.string().optional(),
    surface: z.string().optional(),
    suitableSpace: z.string().optional(),
    materials: z.array(z.string()).optional(),
    // Case study narrative fields (for featured editorial work)
    location: z.string().optional(),
    challenge: z.string().optional(),
    solution: z.string().optional(),
    result: z.string().optional(),
  })
});

export const collections = { works };
