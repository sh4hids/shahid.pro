import { defineCollection } from 'astro:content';

import { plantSchema, postSchema, projectSchema } from '@/schemas';

const projectCollection = defineCollection({
    type: 'data',
    schema: projectSchema,
});

const postCollection = defineCollection({
    type: 'content',
    schema: postSchema,
});

const plantCollection = defineCollection({
    type: 'data',
    schema: plantSchema,
});

export const collections = {
    projects: projectCollection,
    blog: postCollection,
    plants: plantCollection,
};
