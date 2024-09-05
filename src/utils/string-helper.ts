export const BrandNames = {
    aws: 'AWS',
    s3: 'S3',
    github: 'GitHub',
    javascript: 'JavaScript',
    gatsby: 'Gatsby',
} as const;

export function replaceAll(text: string, correctWords: Record<string, string>) {
    const pattern = new RegExp(Object.keys(correctWords).join('|'), 'gi');

    return text.replace(pattern, function (matched) {
        return correctWords[matched.toLowerCase()];
    });
}

export function generateSlug(text: string) {
    return `${text
        .trim()
        // eslint-disable-next-line no-useless-escape
        .replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '')
        .replace(/\s+/g, '-')
        .toLowerCase()}`;
}
