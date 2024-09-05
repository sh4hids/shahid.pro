import { z } from 'astro:content';

export const plantSchema = z.object({
    name: z.string(),
    fileName: z.string(),
    isPublished: z.boolean().default(false),
    createdAt: z.string().transform((str) => new Date(str)),
    updatedAt: z.string().transform((str) => new Date(str)),
});
