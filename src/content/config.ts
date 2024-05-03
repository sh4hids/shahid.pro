import { defineCollection } from 'astro:content';
import { projectSchema, blogSchema } from '@/schemas';

const projectCollection = defineCollection({
    type: 'data',
    schema: projectSchema,
});

const blogCollection = defineCollection({
    type: 'content',
    schema: blogSchema,
});

export const collections = {
    projects: projectCollection,
    blog: blogCollection,
};
