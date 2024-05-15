import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';

import { remarkPostMeta } from './src/utils/remark-post-meta.mjs';

// https://astro.build/config
export default defineConfig({
    site: 'https://shahid.pro',
    integrations: [
        tailwind({
            applyBaseStyles: false,
        }),
        react(),
        sitemap(),
    ],
    markdown: {
        remarkPlugins: [remarkPostMeta],
    },
});
