import { type CollectionEntry, getCollection } from 'astro:content';

export type ItemWithCount = [string, number];

export const getAllProjects = async () => {
    return await getCollection('projects', ({ data }) => {
        return import.meta.env.PROD ? data.isPublished !== false : true;
    });
};

export const sortProjectsByDate = (
    projects: Array<CollectionEntry<'projects'>>
) => {
    return projects.sort(
        (a, b) => b.data.createdAt.valueOf() - a.data.createdAt.valueOf()
    );
};
