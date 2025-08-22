---
title: 'Create a Multi-Variant Astro Component with Tailwind CSS'
slug: '2025/08/22/create-a-multivariant-astro-component-with-tailwind-css'
isPublished: true
publishedAt: '2025-08-22T03:13:35.910Z'
tags:
    - 'astro'
    - 'tailwindcss'
metaInfo:
    description: 'Guide to build a multi-variant Astro component with Tailwind CSS.'
---

Recently, I updated my portfolio website and switched from Gatsby to Astro. In my previous Gatsby site, I had some reusable components with multiple variants. I would also like to have the same feature on my Astro site. So, I was researching how to do that. I found a GitHub repository by one of the Master Tailwind teachers, Simon, where he showed how to design a reusable multi-variant React component.

I ported the same idea to my Astro site. I followed the following steps to build a reusable Text (Typography) component.

## Utils to combine styles

We will have a few predefined styles for different variants of our components. A user can also provide tailwind classes to customize our component. To do this, we need two packages.

```sh
npm i clsx tailwind-merge
```

We need to create a utility function to combine our component classes with user-defined classes by using these two packages.

```ts
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}
```

## Variants

First, we need to define our variants as an object where the key and value will be the same. We also need an object with HTML elements mapping.

```ts
const variantStyles = {
    body: 'body',
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    h5: 'h5',
    h6: 'h6',
    label1: 'label1',
    label2: 'label2',
    display: 'display',
} as const;
```

```ts
const TextElements = {
    p: 'p',
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    h5: 'h5',
    h6: 'h6',
    span: 'span',
} as const;
```

We need another function that will return the related HTML element based on our selected variant. For example, if we select the variant `body`, this function will return `p`.

```ts
function getTextElement(variant: keyof typeof TextVariants) {
    if (variant === TextVariants.h1) {
        return 'h1';
    }

    if (variant === TextVariants.h2) {
        return 'h2';
    }

    if (variant === TextVariants.h3) {
        return 'h3';
    }

    if (variant === TextVariants.h4) {
        return 'h4';
    }

    if (variant === TextVariants.h5) {
        return 'h5';
    }

    if (variant === TextVariants.h6) {
        return 'h6';
    }

    return 'p';
}
```

## Styling

Now we need to define the common styles in some variables and the different variant styles in an object.

```ts
const baseClasses = 'pt-4';
const headingClasses =
    'pt-4 md:pt-6 font-bold text-fg-1 leading-snug text-pretty';

const variantClasses: Record<keyof typeof TextVariants, string> = {
    label2: 'text-xs font-bold leading-snug',
    label1: 'text-sm font-bold leading-snug',
    body: 'text-base font-normal leading-relaxed',
    h6: `text-base ${headingClasses}`,
    h5: `text-lg ${headingClasses}`,
    h4: `text-xl ${headingClasses}`,
    h3: `text-2xl ${headingClasses}`,
    h2: `text-3xl ${headingClasses}`,
    h1: `text-4xl ${headingClasses}`,
    display: `text-5xl ${headingClasses}`,
};
```

If we combine all the above steps, our overall component will look like the following.

```astro
---
import type { HTMLAttributes } from 'astro/types';
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

const TextVariants = {
    body: 'body',
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    h5: 'h5',
    h6: 'h6',
    label1: 'label1',
    label2: 'label2',
    display: 'display',
} as const;

const TextElements = {
    p: 'p',
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    h5: 'h5',
    h6: 'h6',
    span: 'span',
} as const;

interface Props extends HTMLAttributes<keyof typeof TextElements> {
    variant?: keyof typeof TextVariants;
    element?: keyof typeof TextElements;
}

const { variant = TextVariants.body, element, ...rest } = Astro.props;

function getTextElement(variant: keyof typeof TextVariants) {
    if (variant === TextVariants.h1) {
        return 'h1';
    }

    if (variant === TextVariants.h2) {
        return 'h2';
    }

    if (variant === TextVariants.h3) {
        return 'h3';
    }

    if (variant === TextVariants.h4) {
        return 'h4';
    }

    if (variant === TextVariants.h5) {
        return 'h5';
    }

    if (variant === TextVariants.h6) {
        return 'h6';
    }

    return 'p';
}

const TextElement = (element ||
    getTextElement(variant)) as keyof typeof TextElements;

const baseClasses = 'pt-4';
const headingClasses =
    'pt-4 md:pt-6 font-bold text-fg-1 leading-snug text-pretty';

const variantClasses: Record<keyof typeof TextVariants, string> = {
    label2: 'text-xs font-bold leading-snug',
    label1: 'text-sm font-bold leading-snug',
    body: 'text-base font-normal leading-relaxed',
    h6: `text-base ${headingClasses}`,
    h5: `text-lg ${headingClasses}`,
    h4: `text-xl ${headingClasses}`,
    h3: `text-2xl ${headingClasses}`,
    h2: `text-3xl ${headingClasses}`,
    h1: `text-4xl ${headingClasses}`,
    display: `text-5xl ${headingClasses}`,
};
---

<TextElement class={cn(baseClasses, variantClasses[variant], rest.class)}>
    <slot />
</TextElement>
```
