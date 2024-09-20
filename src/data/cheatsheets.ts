import { getCollection } from 'astro:content';

export const getAllCheatsheets = async () => {
    return await getCollection('cheatsheets', ({ data }) => {
        return import.meta.env.PROD ? data.isPublished !== false : true;
    });
};
