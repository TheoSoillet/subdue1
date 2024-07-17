'use client'
import React from 'react';
import Link from 'next/link';



  

const ResourcesPage = () => {
    return (
        <div >
            <div className='pl-10' style={{ display: 'flex', backgroundColor: '#1C1A1E', flexDirection: 'column', height: '100vh', overflow: 'auto' }}>
            <h1 className="text-6xl font-medium mt-40 text-left mb-20 text-center">
                Resources
            </h1>
           
            
        
        <div className="flex flex-col px-3 ml-20 mb-40 pt-3 pb-8 text-sm font-medium bg-white rounded-3xl max-w-[318px]">
    <img
      loading="lazy"
      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/540343bbb5ebc32b0ef0c0001fc0807042d3c93707808388b5d0cbbd0e9fe95c?apiKey=cf2055fdb746408f86f5b90234158cc9&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/540343bbb5ebc32b0ef0c0001fc0807042d3c93707808388b5d0cbbd0e9fe95c?apiKey=cf2055fdb746408f86f5b90234158cc9&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/540343bbb5ebc32b0ef0c0001fc0807042d3c93707808388b5d0cbbd0e9fe95c?apiKey=cf2055fdb746408f86f5b90234158cc9&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/540343bbb5ebc32b0ef0c0001fc0807042d3c93707808388b5d0cbbd0e9fe95c?apiKey=cf2055fdb746408f86f5b90234158cc9&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/540343bbb5ebc32b0ef0c0001fc0807042d3c93707808388b5d0cbbd0e9fe95c?apiKey=cf2055fdb746408f86f5b90234158cc9&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/540343bbb5ebc32b0ef0c0001fc0807042d3c93707808388b5d0cbbd0e9fe95c?apiKey=cf2055fdb746408f86f5b90234158cc9&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/540343bbb5ebc32b0ef0c0001fc0807042d3c93707808388b5d0cbbd0e9fe95c?apiKey=cf2055fdb746408f86f5b90234158cc9&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/540343bbb5ebc32b0ef0c0001fc0807042d3c93707808388b5d0cbbd0e9fe95c?apiKey=cf2055fdb746408f86f5b90234158cc9&"
      className="w-full aspect-[1.75]"
    />
    <div className="self-center mt-8 text-2xl font-bold text-black">
      Transforming a B2B Cloud Company into a Global Brand
    </div>
    <div className="self-start mt-5 mr-2.5 leading-5 text-zinc-600">
      Our client, a B2B cloud company, had ambitious goals: to expand beyond
      their local market, launch innovative digital products, and enhance
      their brand presence. They sought a comprehensive digital transformation
      to achieve these objectives.
    </div>
    <div className="flex gap-5 self-center mt-12 w-full leading-[135%] max-w-[274px]">
      <div className="flex-auto my-auto text-zinc-500">28th June, 2024</div>
      <Link href="/case-study-231113">
        <div className="justify-center px-5 py-3 text-center text-white bg-black rounded-xl">
          Read more
        </div>
      </Link>
    </div>
  </div>
        </div>
        </div>
      
    );
};

export default ResourcesPage;