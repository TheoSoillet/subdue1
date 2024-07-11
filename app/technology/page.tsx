import React from 'react';
import { useId } from 'react';
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";


const words = `As the technologies evolve rapidly, startups and tech companies need to continuously design, disrupt, and transform how they differentiate themselves. Acquiring new customers can be expensive. Striking the right balance between marketing, and finance helps companies ensure sustainable business growth, and turning into a global brand in the long run.`;

const Divider: React.FC = () => {
    return (
        <div className="h-1 w-1/4 bg-[#F1D089] mb-2 mx-0 justify-left"></div> // Shortened divider
    );
};

interface StatisticCardProps {
    value: string;
    description: string;
}

const TechnologyPage: React.FC = () => {
    return (
        <div className="bg-[#131213] text-white min-h-screen ">
            <div className="h-[50rem] w-full dark:bg-[#1C1A1E] bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-[#131213] bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text pl-40 text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
        Technology
      </p>
      <div className='font-light text-white text-sm mt-20 mb-20 pl-40 pr-40'>
        <TextGenerateEffect words={words} />
      </div>
      </div>
      <div className='font-light text-white text-2xl font-medium leading-snug tracking-wide mt-20 mb-20 pl-40 pr-40'>
        <p>
        At Subdue, we help companies use marketing as a competitive differentiator not an expense. We use business strategies with a powerful combination of neuroscience, psychology, marketing, and artificial intelligence, and make sure our clients dominate the ever evolving digital landscape, while our efficient financial management systems help companies to manage their cash flow.
        </p>
      </div>
            <h1 className="text-4xl font-semibold max-md:text-4xl mb-10 pl-40 pr-40">Technology now</h1> 

            <main className="flex gap-5 max-md:flex-col max-md:gap-0 top-40 pt-100 mt-100 pl-40 pr-40">

                <section className="flex flex-col w-[31%] max-md:ml-0 max-md:w-full">
                    
                    <div className="flex flex-col px-5 font-medium text-white max-md:mt-10">
                        <Divider />
                        <div className="mt-6 text-7xl max-md:text-4xl">16.3%</div>
                        <p className="mt-8 text-xl font-light">
                        of the overall budgets goes to marketing for companies with revenues between $10 million and $100 million dollars

                        </p>
                    </div>
                </section>
                <section className="flex flex-col w-[31%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col px-5 font-medium text-white max-md:mt-10">
                        <Divider />
                        <div className="mt-6 text-7xl max-md:text-4xl">13.4%</div>
                        <p className="mt-8 text-xl font-light">
                        of the overall budgets goes to marketing for companies with revenues between $100 million and $1 Billion dollars

                        </p>
                    </div>
                </section>
                <section className="flex flex-col w-[31%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col px-5 font-medium text-white max-md:mt-10">
                        <Divider />
                        <div className="mt-6 text-7xl max-md:text-4xl">10.9%</div>
                        <p className="mt-8 text-xl font-light">
                        of the overall budgets goes to marketing for companies with revenues over $1 Billion dollars

                        </p>
                    </div>
                </section>
                
            </main>
            <div className="flex flex-col pl-40 pr-40">
            <h1 className="text-4xl font-semibold max-md:text-4xl mt-40">Our solutions</h1> 
            <FeaturesSectionDemo />
            </div>
            
        </div>
    );
};

export default TechnologyPage;

export function FeaturesSectionDemo() {
    return (
        <div className="py-5 lg:py-3"> 
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 md:gap-2 max-w-7xl mx-auto">
                {grid.map((feature) => (
                    <div
                        key={feature.title}
                        className="relative bg-gradient-to-b dark:from-neutral-900 from-neutral-100 dark:to-neutral-950 to-white p-6 rounded-3xl overflow-hidden"
                    >
                        <Grid size={20} />
                        <p className="text-base font-bold text-neutral-800 dark:text-white relative z-20">
                            {feature.title}
                        </p>
                        <p className="text-neutral-600 dark:text-neutral-400 mt-4 text-base font-normal relative z-20">
                            {feature.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

const grid = [
    {
        title: "HIPAA and SOC2 Compliant",
        description:
            "Our applications are HIPAA and SOC2 compliant, your data is safe with us, always.",
    },
    {
        title: "Automated Social Media Posting",
        description:
            "Schedule and automate your social media posts across multiple platforms to save time and maintain a consistent online presence.",
    },
    {
        title: "Advanced Analytics",
        description:
            "Gain insights into your social media performance with detailed analytics and reporting tools to measure engagement and ROI.",
    },
    {
        title: "Content Calendar",
        description:
            "Plan and organize your social media content with an intuitive calendar view, ensuring you never miss a post.",
    },
    {
        title: "Audience Targeting",
        description:
            "Reach the right audience with advanced targeting options, including demographics, interests, and behaviors.",
    },
    {
        title: "Social Listening",
        description:
            "Monitor social media conversations and trends to stay informed about what your audience is saying and respond in real-time.",
    },
    {
        title: "Customizable Templates",
        description:
            "Create stunning social media posts with our customizable templates, designed to fit your brand's unique style and voice.",
    },
    {
        title: "Collaboration Tools",
        description:
            "Work seamlessly with your team using our collaboration tools, allowing you to assign tasks, share drafts, and provide feedback in real-time.",
    },
];

export const Grid = ({
    pattern,
    size,
}: {
    pattern?: number[][];
    size?: number;
}) => {
    const p = pattern ?? [
        [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
        [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
        [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
        [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
        [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    ];
    return (
        <div className="pointer-events-none absolute left-1/2 top-0  -ml-20 -mt-2 h-full w-full [mask-image:linear-gradient(white,transparent)]">
            <div className="absolute inset-0 bg-gradient-to-r  [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] dark:from-zinc-900/30 from-zinc-100/30 to-zinc-300/30 dark:to-zinc-900/30 opacity-100">
                <GridPattern
                    width={size ?? 20}
                    height={size ?? 20}
                    x="-12"
                    y="4"
                    squares={p}
                    className="absolute inset-0 h-full w-full  mix-blend-overlay dark:fill-white/10 dark:stroke-white/10 stroke-black/10 fill-black/10"
                />
            </div>
        </div>
    );
};

export function GridPattern({ width, height, x, y, squares, ...props }: any) {
    const patternId = useId();

    return (
        <svg aria-hidden="true" {...props}>
            <defs>
                <pattern
                    id={patternId}
                    width={width}
                    height={height}
                    patternUnits="userSpaceOnUse"
                    x={x}
                    y={y}
                >
                    <path d={`M.5 ${height}V.5H${width}`} fill="none" />
                </pattern>
            </defs>
            <rect
                width="100%"
                height="100%"
                strokeWidth={0}
                fill={`url(#${patternId})`}
            />
            {squares && (
                <svg x={x} y={y} className="overflow-visible">
                    {squares.map(([x, y]: any) => (
                        <rect
                            strokeWidth="0"
                            key={`${x}-${y}`}
                            width={width + 1}
                            height={height + 1}
                            x={x * width}
                            y={y * height}
                        />
                    ))}
                </svg>
            )}
        </svg>
    );
}