import { z } from 'astro:content';

export const projectSchema = z.object({
    name: z.string(),
    description: z.string(),
    url: z.string().url(),
    isPublished: z.boolean().default(false),
    github: z.string().url().optional(),
    createdAt: z.string().transform((str) => new Date(str)),
    updatedAt: z.string().transform((str) => new Date(str)),
});
