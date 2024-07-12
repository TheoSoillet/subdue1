"use client";

import React, { useRef } from 'react';
import Image from 'next/image';

const CareersPage = () => {
    const openRolesRef = useRef<HTMLDivElement>(null);

    const scrollToOpenRoles = () => {
        openRolesRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="flex flex-col px-5 bg-[#131213] text-base leading-[57px] pl-60 pr-60 pt-60">
            <div className="self-center text-5xl font-medium text-center text-white leading-[57px] max-md:max-w-full max-md:text-4xl max-md:leading-10">
                Participate in advanced business growth
            </div>
            <div className="self-center mt-6 text-xl text-center text-white max-md:mt-10">
                We are looking for talented individuals from a number of different backgrounds
            </div>
            <div className="justify-center self-center px-12 py-3 mt-12 text-lg font-medium text-center text-black bg-[#F1D089] rounded-3xl cursor-pointer max-md:px-5 max-md:mt-10" onClick={scrollToOpenRoles}>
                View open roles
            </div>
            <div className="flex flex-col items-center px-16 mt-20 w-full text-xl text-white max-md:px-5 max-md:mt-10 max-md:max-w-full">
                <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/a6228be10de9b8371ab70b0e9b0278d036b64fdc7c0b0bf20172ac4fdff9a1d1?apiKey=cf2055fdb746408f86f5b90234158cc9&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/a6228be10de9b8371ab70b0e9b0278d036b64fdc7c0b0bf20172ac4fdff9a1d1?apiKey=cf2055fdb746408f86f5b90234158cc9&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a6228be10de9b8371ab70b0e9b0278d036b64fdc7c0b0bf20172ac4fdff9a1d1?apiKey=cf2055fdb746408f86f5b90234158cc9&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/a6228be10de9b8371ab70b0e9b0278d036b64fdc7c0b0bf20172ac4fdff9a1d1?apiKey=cf2055fdb746408f86f5b90234158cc9&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/a6228be10de9b8371ab70b0e9b0278d036b64fdc7c0b0bf20172ac4fdff9a1d1?apiKey=cf2055fdb746408f86f5b90234158cc9&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a6228be10de9b8371ab70b0e9b0278d036b64fdc7c0b0bf20172ac4fdff9a1d1?apiKey=cf2055fdb746408f86f5b90234158cc9&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/a6228be10de9b8371ab70b0e9b0278d036b64fdc7c0b0bf20172ac4fdff9a1d1?apiKey=cf2055fdb746408f86f5b90234158cc9&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/a6228be10de9b8371ab70b0e9b0278d036b64fdc7c0b0bf20172ac4fdff9a1d1?apiKey=cf2055fdb746408f86f5b90234158cc9&"
                    className="self-stretch w-full aspect-[1.85] max-md:max-w-full"
                />
                <div className='pl-200 pr-200'>
                <div className="mt-16 text-3xl font-medium text-center leading-10 text-left max-md:mt-10 max-md:max-w-full">
                    We develop marketing strategies with a deep respect for <br></br>diverse experiences and perspectives.
                </div>
                <div className='text-left pr-100 pl-100 mr-20 ml-20'>

                <div className="mt-20 text-lg font-medium text-left max-md:mt-10" style={{ textAlign: 'left' }}>
                    Neuroscience & AI Focus
                </div>
                <div className="mt-2 text-left font-thin max-md:max-w-full pl-100">
                    We are committed to leveraging the power of neuroscience and AI to drive marketing growth that will have a massive positive impact on our clients' futures. Anything that doesn’t help with that is out of scope.
                </div>
                <div className="mt-12 text-lg font-medium text-left max-md:mt-10" style={{ textAlign: 'left' }}>
                    Intense & Scrappy
                </div>
                <div className="mt-2 text-left max-md:max-w-full font-thin ">
                    Achieving exceptional marketing growth requires hard work (often on unglamorous tasks) and urgency; everything (that we choose to do) is important. Be unpretentious and do what works; find the best ideas wherever they come from.
                    <br />
                    <br />
                    Be unpretentious and do what works; find the best ideas wherever they come from.
                    <br />
                </div>
                <div className="mt-12 text-lg font-medium text-left max-md:mt-10" style={{ textAlign: 'left' }}>
                    Scale
                </div>
                <div className="mt-2 text-left max-md:mt-10 max-md:max-w-full font-thin ">
                    We believe that scale—in our models, our systems, ourselves, our processes, and our ambitions—is magic. When in doubt, scale it up.
                </div>
                <div className="mt-11 text-xl font-medium text-left max-md:mt-10" style={{ textAlign: 'left' }}>
                    Make Something People Love
                </div>
                <div className="mt-2 text-left max-md:max-w-full font-thin ">
                    Our strategies and solutions should have a transformatively positive effect on our clients' businesses.
                </div>
                </div>
                </div>
                <div ref={openRolesRef} className="mt-24 text-3xl font-medium text-center leading-[57.77px] max-md:mt-10 max-md:text-4xl">
                    Open roles
                </div>
            
            </div>
            <div className="flex gap-5 px-7 py-4 mt-16 w-full bg-neutral-800 max-md:flex-wrap max-md:px-5 max-md:mt-10 max-md:max-w-full">
                <div className="flex flex-1 gap-5">
                    <div className="flex-auto text-white">Position Name Test</div>
                    <div className="text-stone-300">Type</div>
                </div>
                <div className="flex flex-1 gap-5 justify-between self-start">
                    <div className="text-zinc-500">Flexible</div>
                    <div className="text-amber-200">Apply now</div>
                </div>
            </div>
            <div className="flex gap-5 items-start px-7 py-4 mt-3.5 w-full bg-neutral-800 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
                <div className="flex flex-1 gap-5">
                    <div className="flex-auto text-white">Position Name Test</div>
                    <div className="text-stone-300">Type</div>
                </div>
                <div className="flex flex-1 gap-5 justify-between">
                    <div className="text-zinc-500">Flexible</div>
                    <div className="text-amber-200">Apply now</div>
                </div>
            </div>
            <div className="flex gap-5 px-7 py-4 mt-3.5 w-full bg-neutral-800 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
                <div className="flex flex-1 gap-5">
                    <div className="flex-auto text-white">Position Name Test</div>
                    <div className="text-stone-300">Type</div>
                </div>
                <div className="flex flex-1 gap-5 justify-between self-start">
                    <div className="text-zinc-500">Flexible</div>
                    <div className="text-amber-200">Apply now</div>
                </div>
            </div>
            <div className="flex gap-5 items-start px-7 py-4 mt-3.5 w-full bg-neutral-800 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
                <div className="flex flex-1 gap-5">
                    <div className="flex-auto text-white">Position Name Test</div>
                    <div className="text-stone-300">Type</div>
                </div>
                <div className="flex flex-1 gap-5 justify-between">
                    <div className="text-zinc-500">Flexible</div>
                    <div className="text-amber-200">Apply now</div>
                </div>
            </div>
        </div>
    );
};

export default CareersPage;
