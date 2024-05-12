import { defineCollection } from 'astro:content';

import { postSchema, projectSchema } from '@/schemas';

const projectCollection = defineCollection({
    type: 'data',
    schema: projectSchema,
});

const postCollection = defineCollection({
    type: 'content',
    schema: postSchema,
});

export const collections = {
    projects: projectCollection,
    blog: postCollection,
};
