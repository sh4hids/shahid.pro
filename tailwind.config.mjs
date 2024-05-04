/** @type {import('tailwindcss').Config} */

import defaultTheme from 'tailwindcss/defaultTheme';
import plugin from 'tailwindcss/plugin';

export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    darkMode: ['class', '[data-theme="dark"]'],
    corePlugins: {
        aspectRatio: false,
        touchAction: false,
        ringOffsetWidth: false,
        ringOffsetColor: false,
        scrollSnapType: false,
        borderOpacity: false,
        textOpacity: false,
        fontVariantNumeric: false,
    },
    theme: {
        extend: {
            colors: {
                'surface-0': 'rgb(var(--theme-bg-0) / <alpha-value>)',
                'surface-1': 'rgb(var(--theme-bg-1) / <alpha-value>)',
                'surface-2': 'rgb(var(--theme-bg-2) / <alpha-value>)',
                'fg-0': 'rgb(var(--theme-fg-0) / <alpha-value>)',
                'fg-1': 'rgb(var(--theme-fg-1) / <alpha-value>)',
                'fg-2': 'rgb(var(--theme-fg-2) / <alpha-value>)',
                'accent-0': 'rgb(var(--theme-accent-0) / <alpha-value>)',
                'accent-1': 'rgb(var(--theme-accent-1) / <alpha-value>)',
                primary: 'rgb(var(--theme-primary) / <alpha-value>)',
                brand: {
                    50: '#EEF2FF',
                    100: '#E0E7FF',
                    200: '#C7D2FE',
                    300: '#A5B4FC',
                    400: '#818CF8',
                    500: '#6366F1',
                    600: '#4F46E5',
                    700: '#4338CA',
                    800: '#3730A3',
                    900: '#312E81',
                    950: '#1E1B4B',
                },
            },
            fontFamily: {
                mono: ['Rec Mono Semicasual', ...defaultTheme.fontFamily.mono],
            },
            fontSize: {
                xs: ['0.64rem', defaultTheme.lineHeight.relaxed],
                sm: ['0.8rem', defaultTheme.lineHeight.relaxed],
                base: ['1rem', defaultTheme.lineHeight.relaxed],
                lg: ['1.25rem', defaultTheme.lineHeight.relaxed],
                xl: ['1.563rem', defaultTheme.lineHeight.relaxed],
                '2xl': ['1.953rem', defaultTheme.lineHeight.relaxed],
                '3xl': ['2.441rem', defaultTheme.lineHeight.relaxed],
                '4xl': ['3.052rem', defaultTheme.lineHeight.relaxed],
                '5xl': ['3.815rem', defaultTheme.lineHeight.relaxed],
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
        plugin(function ({ addBase, theme }) {
            addBase({
                p: {
                    fontSize: theme('fontSize.base'),
                    lineHeight: theme('lineHeight.relaxed'),
                },
                h1: {
                    fontSize: theme('fontSize.4xl'),
                    lineHeight: theme('lineHeight.snug'),
                },
                h2: {
                    fontSize: theme('fontSize.3xl'),
                    lineHeight: theme('lineHeight.snug'),
                },
                h3: {
                    fontSize: theme('fontSize.2xl'),
                    lineHeight: theme('lineHeight.snug'),
                },
                h4: {
                    fontSize: theme('fontSize.xl'),
                    lineHeight: theme('lineHeight.snug'),
                },
                h5: {
                    fontSize: theme('fontSize.lg'),
                    lineHeight: theme('lineHeight.snug'),
                },
                h6: {
                    fontSize: theme('fontSize.base'),
                    lineHeight: theme('lineHeight.snug'),
                },
            });
        }),
    ],
};
