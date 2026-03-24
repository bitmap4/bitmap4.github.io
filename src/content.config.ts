import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tech: z.array(z.string()).optional(),
    github: z.string().url().optional(),
    website: z.string().url().optional(),
    report: z.string().url().optional(),
    order: z.number(),
    featured: z.boolean().optional().default(false),
  }),
});

const research = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tech: z.array(z.string()).optional(),
    github: z.string().url().optional(),
    report: z.string().url().optional(),
    order: z.number(),
  }),
});

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string(),
    tech: z.array(z.string()).optional(),
  }),
});

export const collections = { projects, research, blog };
