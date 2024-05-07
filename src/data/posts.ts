import { type CollectionEntry, getCollection } from 'astro:content';
import type { ItemWithCount } from './projects';
import { generateSlug } from '@/utils/string-helper';

export const getAllPosts = async () => {
    return await getCollection('blog', ({ data }) => {
        return import.meta.env.PROD ? data.isPublished !== false : true;
    });
};

export const sortPostByDate = (posts: Array<CollectionEntry<'blog'>>) => {
    return posts.sort(
        (a, b) => b.data.publishedAt.valueOf() - a.data.publishedAt.valueOf()
    );
};

export const getAllTags = (posts: Array<CollectionEntry<'blog'>>) => {
    return posts.flatMap((post) => [...post.data.tags]);
};

export const getUniqueTags = (posts: Array<CollectionEntry<'blog'>>) => {
    return [...new Set(getAllTags(posts))];
};

export const getUniqueTagsWithCount = (
    posts: Array<CollectionEntry<'blog'>>
): Array<ItemWithCount> => {
    return [
        ...getAllTags(posts).reduce(
            (acc, t) => acc.set(t, (acc.get(t) || 0) + 1),
            new Map<string, number>()
        ),
    ];
};

export const getAllPostsByTag = (
    posts: Array<CollectionEntry<'blog'>>,
    tagSlug: string
) => {
    return posts.filter((post) =>
        post.data.tags?.some((tag) => generateSlug(tag) === tagSlug)
    );
};
