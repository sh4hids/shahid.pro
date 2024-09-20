import { z } from 'astro:content';

export const cheatsheetSchema = z.object({
    title: z.string(),
    description: z.string(),
    isPublished: z.boolean().default(false),
    publishedAt: z.string().transform((str) => new Date(str)),
});
