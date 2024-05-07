import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import { remarkPostMeta } from './src/utils/remark-post-meta.mjs';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
    site: 'https://shahid.pro/',
    integrations: [
        tailwind({
            applyBaseStyles: false,
        }),
        react(),
    ],
    markdown: {
        remarkPlugins: [remarkPostMeta],
    },
});
