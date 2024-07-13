import React from 'react';
import { useId } from 'react';

const grid = [
    {
        title: "Customer Centric Approach",
        description:
            "We create emotional mapping, and resonance in campaigns by leveraging neuromarketing to deliver high impact promotional campaigns.",
    },
    {
        title: "High Quality Business Audits",
        description:
            "Our high-quality business audits exactly identify industry opportunities, strengths, and weaknesses, and help build a roadmap for success.",
    },
    {
        title: "Integrated Marketing Strategy",
        description:
            "A multidisciplinary approach using our marketing expertise, insights, AI, and neuromarketing creates an effective integrated marketing strategy tailored to the now.",
    },
    {
        title: "B2B Strategic Framework",
        description:
            "We use behavioral drivers, and Marketing synergy for Neuroscience driven content, and data driven decision making. AI for smart automation, and to increase the efficiency of employees.",
    },
    {
        title: "B2C Strategic Framework",
        description:
            "A conversion-centric framework: Fostering connections beyond the superficial, and crafting engaging narratives is the recipe for success in B2C businesses.",
    },
    {
        title: "Brand Strategy",
        description:
            "Our brand strategy combines science and creativity that leaves a lasting brand impression, and drives customer loyalty.",
    },
    {
        title: "Global Strategy",
        description:
            "Recommending new markets to expand business, we take into account the past, present, future of the business landscape, cultural awareness, scalability, and stability.",
    },
    {
        title: "Customer Relationship Management (CRM)",
        description:
            "Post sales management, and remarketing are the two main drivers for long term growth, and sustainability of the company.",
    },
];

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