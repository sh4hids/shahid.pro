import { z } from 'astro:content';

export const postSchema = z.object({
    title: z.string(),
    isPublished: z.boolean().default(false),
    publishedAt: z.string().transform((str) => new Date(str)),
    tags: z.array(z.string()).optional().default([]),
    metaInfo: z
        .object({
            description: z.string(),
            coverImage: z
                .object({
                    src: z.string(),
                    alt: z.string(),
                })
                .optional(),
        })
        .strict(),
});
