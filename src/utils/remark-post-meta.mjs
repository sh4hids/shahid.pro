import getReadingTime from 'reading-time';
import { toString } from 'mdast-util-to-string';

export function remarkPostMeta() {
    return function (tree, { data }) {
        const textOnPage = toString(tree);
        const readingTime = getReadingTime(textOnPage);
        data.astro.frontmatter.excerpt = `${textOnPage.split(' ').slice(0, 28).join(' ').replace(/\.$/, '')}...`;
        data.astro.frontmatter.minutesRead = readingTime.text;
    };
}
