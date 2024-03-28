export const BrandNames = {
    aws: 'AWS',
    github: 'GitHub',
    javascript: 'JavaScript',
} as const;

export function replaceAll(text: string, correctWords: Record<string, string>) {
    const pattern = new RegExp(Object.keys(correctWords).join('|'), 'gi');

    return text.replace(pattern, function (matched) {
        return correctWords[matched.toLowerCase()];
    });
}
