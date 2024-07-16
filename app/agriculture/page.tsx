import React from 'react';
import { useId } from 'react';
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { FeaturesSectionDemo } from "@/components/AgricultureSolutions"; 



const words = `Agricultural marketing plays a central role in linking farmers, agri-product companies with consumers, ensuring supply chain efficiency, providing valuable insights about consumer preferences, strategic pricing, and driving business growth for B2C Agribusinesses.';

const Divider: React.FC = () => {
    return (
        <div className="h-1 w-1/4 bg-[#F1D089] mb-2 mx-0 justify-left"></div> 
    );
};

interface StatisticCardProps {
    value: string;
    description: string;
}

const AgriculturePage: React.FC = () => {
    return (
        <div className="bg-[#131213] text-white min-h-screen ">
            <div className="h-[50rem] w-full dark:bg-[#1C1A1E] bg-white  dark:bg-grid-white/[0.12] bg-grid-black/[0.2] relative flex items-center justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-[#131213] bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div> 
      <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text pl-40 text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
        Agriculture
      </p>
      <div className='font-light text-white text-sm mt-20 mb-20 pl-40 pr-40'>
        <TextGenerateEffect words={words} />
      </div>
      </div>
      <div className='font-light text-white text-2xl font-medium leading-snug tracking-wide mt-20 mb-20 pl-40 pr-40'>
        <p>
        At Subdue, we help agribusiness companies use marketing as a competitive differentiator not an expense. We use business strategies with a powerful combination of neuroscience, psychology, marketing, and artificial intelligence, and make sure our clients dominate the ever evolving digital landscape of B2C product selling, while our efficient financial management systems help companies to manage their cash flow.
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

export default AgriculturePage;

