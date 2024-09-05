import { html } from 'satori-html';

export const commonMarkup = () => html`
    <div tw="flex h-full w-full bg-[#18181b] text-[#f4f4f5] relative">
        <div tw="flex flex-col mx-auto my-auto max-w-3xl">
            <div
                tw="flex flex-col w-full text-[#a1a1aa] items-center justify-center border-b "
            >
                <svg
                    width="178"
                    height="208"
                    viewBox="0 0 178 208"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="mb-4 h-16 w-16"
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
                            <rect width="177.273" height="208" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
                <span>www.shahid.pro</span>
            </div>
            <h2
                tw="text-[40px] font-bold pt-2 leading-snug flex justify-center"
            >
                Shahidul Islam Majumder
            </h2>
            <h3 tw="flex justify-center -mt-2">
                Full Stack JavaScript Developer
            </h3>
            <h4 tw="text-[#a1a1aa] flex justify-center -mt-2">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                    class="top-0.25 mr-2"
                >
                    <path
                        d="M128,64a40,40,0,1,0,40,40A40,40,0,0,0,128,64Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,128,128Zm0-112a88.1,88.1,0,0,0-88,88c0,31.4,14.51,64.68,42,96.25a254.19,254.19,0,0,0,41.45,38.3,8,8,0,0,0,9.18,0A254.19,254.19,0,0,0,174,200.25c27.45-31.57,42-64.85,42-96.25A88.1,88.1,0,0,0,128,16Zm0,206c-16.53-13-72-60.75-72-118a72,72,0,0,1,144,0C200,161.23,144.53,209,128,222Z"
                    ></path>
                </svg>
                Feni, Bangladesh
            </h4>
        </div>
    </div>
`;
