/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            fontFamily: {
                mono: ['Rec Mono Semicasual', ...defaultTheme.fontFamily.mono],
            },
            fontSize: {
                xs: ['0.64rem', '1.6'],
                sm: ['0.8rem', '1.6'],
                base: ['1rem', '1.6'],
                lg: ['1.25rem', '1.6'],
                xl: ['1.563rem', '1.6'],
                '2xl': ['1.953rem', '1.6'],
                '3xl': ['2.441rem', '1.6'],
                '4xl': ['3.052rem', '1.6'],
                '5xl': ['3.815rem', '1.6'],
            },
        },
    },
    plugins: [require('@tailwindcss/typography')],
};
