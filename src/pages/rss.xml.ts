import rss from '@astrojs/rss';

import { siteConfig } from '@/config';
import { getAllPosts, sortPostByDate } from '@/data';

export const GET = async () => {
    const posts = await getAllPosts();
    const sortedPosts = sortPostByDate(posts);

    return rss({
        title: siteConfig.title,
        description: siteConfig.description,
        site: import.meta.env.SITE,
        items: sortedPosts.map((post) => ({
            title: post.data.title,
            description: post.data.metaInfo.description,
            pubDate: post.data.publishedAt,
            link: `blog/${post.slug}`,
        })),
    });
};
