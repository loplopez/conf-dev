import { defineCollection, z } from 'astro:content';

const speakers = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    affiliation: z.string(),
    category: z.enum(['Keynote', 'Breaking Boundaries']),
    talkTitle: z.string().optional(),
    field: z.string().optional(),
    photo: z.string().optional(), // path under /public, e.g. /speakers/vespignani.jpg
    order: z.number().default(99),
    featured: z.boolean().default(false),
  }),
});

const satellites = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    organizers: z.array(z.string()),
    date: z.string(),
    room: z.string(),
    topic: z.string(),
    order: z.number().default(99),
  }),
});

export const collections = { speakers, satellites };
