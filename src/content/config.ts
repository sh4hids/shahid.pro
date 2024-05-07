import { defineCollection } from 'astro:content';
import { projectSchema, postSchema } from '@/schemas';

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
