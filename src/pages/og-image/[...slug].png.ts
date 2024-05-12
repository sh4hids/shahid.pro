import { Resvg } from '@resvg/resvg-js';
import type { APIContext, InferGetStaticPropsType } from 'astro';
import { format } from 'date-fns';
import { readFileSync } from 'fs';
import satori, { type SatoriOptions } from 'satori';
import { html } from 'satori-html';

import { siteConfig } from '@/config';
import { getAllPosts } from '@/data';

const fontFilePath = `${process.cwd()}/public/fonts/RecMonoSemicasual-Bold.ttf`;
const fontFile = readFileSync(fontFilePath);

const ogOptions: SatoriOptions = {
    // debug: true,
    fonts: [
        {
            data: fontFile,
            name: 'Rec Mono Semicasual',
            style: 'normal',
            weight: 400,
        },
        // {
        //     data: Buffer.from(RobotoMonoBold),
        //     name: 'Roboto Mono',
        //     style: 'normal',
        //     weight: 700,
        // },
    ],
    height: 630,
    width: 1200,
};

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
const markup = (title: string, publishedAt: Date, minutesRead: string) => html`
    <div tw="flex h-full w-full bg-[#18181b] text-[#f4f4f5] relative">
        <div tw="flex flex-col mx-auto my-auto max-w-3xl">
            <div tw="flex gap-6 text-[#a1a1aa]">
                <ul>
                    <li>
                        <svg
                            width="178"
                            height="208"
                            viewBox="0 0 178 208"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            class="mr-2 h-4 w-4"
                        >
                            <g clip-path="url(#clip0_443_283)">
                                <path
                                    d="M132.99 44.3299L118.205 59.1143L88.6131 29.5223L73.2045 75.7477L0 88.6595L88.6598 0L132.99 44.3299Z"
                                    fill="#4F46E5"
                                />
                                <path
                                    d="M0 88.6597L125.598 66.5065L177.273 118.182L51.6754 140.335L0 88.6597Z"
                                    fill="#818CF8"
                                />
                                <path
                                    d="M44.2833 162.512L59.0678 147.727L88.6597 177.319L104.068 131.093L177.273 118.182L88.6132 206.842L44.2833 162.512Z"
                                    fill="#4F46E5"
                                />
                            </g>
                            <defs>
                                <clipPath id="clip0_443_283">
                                    <rect
                                        width="177.273"
                                        height="208"
                                        fill="white"
                                    />
                                </clipPath>
                            </defs>
                        </svg>

                        SHAHID.PRO

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            viewBox="0 0 256 256"
                            class="top-0.25 mx-2"
                        >
                            <path
                                d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"
                            ></path>
                        </svg>
                    </li>
                    <li>
                        Home

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            viewBox="0 0 256 256"
                            class="top-0.25 mx-2"
                        >
                            <path
                                d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"
                            ></path>
                        </svg>
                    </li>
                    <li>Blog</li>
                </ul>
            </div>
            <h2 tw="text-[40px] font-bold pt-6 leading-snug">${title}</h2>
            <div class="flex gap-6 pt-4 text-[#a1a1aa]">
                <div class="flex items-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 256 256"
                        class="relative -top-0.5 mr-2"
                    >
                        <path
                            d="M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,48v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80H48V48ZM208,208H48V96H208V208Zm-96-88v64a8,8,0,0,1-16,0V132.94l-4.42,2.22a8,8,0,0,1-7.16-14.32l16-8A8,8,0,0,1,112,120Zm59.16,30.45L152,176h16a8,8,0,0,1,0,16H136a8,8,0,0,1-6.4-12.8l28.78-38.37A8,8,0,1,0,145.07,132a8,8,0,1,1-13.85-8A24,24,0,0,1,176,136,23.76,23.76,0,0,1,171.16,150.45Z"
                        ></path>
                    </svg>
                    ${format(publishedAt, 'MMMM dd, yyyy')}
                </div>
                <div class="ml-6 flex items-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 256 256"
                        class="relative -top-0.5 mr-2"
                    >
                        <path
                            d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48A8,8,0,0,1,192,128Z"
                        ></path>
                    </svg>
                    ${minutesRead}
                </div>
            </div>
        </div>
    </div>
`;

type Props = InferGetStaticPropsType<typeof getStaticPaths>;

export async function GET(context: APIContext) {
    const { publishedAt, title, minutesRead } = context.props as Props;

    const svg = await satori(
        markup(title, publishedAt, minutesRead),
        ogOptions
    );
    const png = new Resvg(svg).render().asPng();
    return new Response(png, {
        headers: {
            'Cache-Control': 'public, max-age=31536000, immutable',
            'Content-Type': 'image/png',
        },
    });
}

export async function getStaticPaths() {
    const posts = await getAllPosts();
    const formatted = [];
    for (const post of posts) {
        const { remarkPluginFrontmatter } = await post.render();
        formatted.push({
            params: { slug: post.slug },
            props: {
                publishedAt: post.data.publishedAt,
                title: post.data.title,
                minutesRead: remarkPluginFrontmatter.minutesRead + '',
            },
        });
    }
    return formatted;
}
