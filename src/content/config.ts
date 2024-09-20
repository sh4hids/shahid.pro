import { defineCollection } from 'astro:content';

import {
    cheatsheetSchema,
    plantSchema,
    postSchema,
    projectSchema,
} from '@/schemas';

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

const cheatsheetCollection = defineCollection({
    type: 'content',
    schema: cheatsheetSchema,
});

export const collections = {
    projects: projectCollection,
    blog: postCollection,
    plants: plantCollection,
    cheatsheets: cheatsheetCollection,
};
