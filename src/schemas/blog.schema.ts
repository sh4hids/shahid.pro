import { z } from 'astro:content';

export const blogSchema = z.object({
    title: z.string(),
    description: z.string(),
    isPublished: z.boolean().default(false),
    createdAt: z.string().transform((str) => new Date(str)),
    updatedAt: z.string().transform((str) => new Date(str)),
    tags: z.array(z.string()).optional(),
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
