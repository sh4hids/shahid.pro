export type SiteConfig = {
    author: string;
    title: string;
    description: string;
    lang: string;
    ogLocale: string;
    date: {
        locale: string | string[] | undefined;
        options: Intl.DateTimeFormatOptions;
    };
};

export type SiteMeta = {
    title: string;
    description?: string;
    ogImage?: string | undefined;
    createdAt?: string | undefined;
    updatedAt?: string | undefined;
};

export const siteConfig: SiteConfig = {
    // Used as both a meta property (src/components/BaseHead.astro L:31 + L:49) & the generated satori png (src/pages/og-image/[slug].png.ts)
    author: 'Shahidul Islam Majumder',
    // Meta property used to construct the meta title property, found in src/components/BaseHead.astro L:11
    title: 'Shahidul Islam Majumder',
    // Meta property used as the default description meta property
    description:
        'Portfolio website of Shahidul Islam Majumder, a full stack software engineer from Feni, Bangladesh.',
    // HTML lang property, found in src/layouts/Base.astro L:18
    lang: 'en',
    // Meta property, found in src/components/BaseHead.astro L:42
    ogLocale: 'en_US',
    // Date.prototype.toLocaleDateString() parameters, found in src/utils/date.ts.
    date: {
        locale: 'en-US',
        options: {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
        },
    },
};

export const PAGE_SIZE = 10;
