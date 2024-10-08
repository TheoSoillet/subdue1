'use client'

import React, { useEffect } from 'react';

const CalendlyWidget = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://assets.calendly.com/assets/external/widget.js';
        script.async = true;
        document.body.appendChild(script);
    }, []);

    return (
        <div className="calendly-inline-widget" data-url="https://calendly.com/sparsh-subdue/30min?hide_landing_page_details=1&hide_gdpr_banner=1&background_color=2F2F30&text_color=ffffff&primary_color=F1D089" style={{ minWidth: '320px', height: '700px' }}></div>
    );
};

const ContactPage = () => {
    return (
        <div style={{ display: 'flex', backgroundColor: '#1C1A1E', flexDirection: 'column', height: '100vh', overflow: 'auto' }}>
            <h1 className="text-6xl font-medium mt-40 text-left ml-20">
            Transform, disrupt, and <br></br>become a leader in your industry.
            </h1>
            <div style={{ display: 'flex', flex: 1 }}>
                <div className='ml-20 mr-20' style={{ flex: 1 }}>
                    <h1 className="text-8xl font-medium mt-20 mb-4 text-left" style={{ color: '#F1D089' }}>
                        1.
                    </h1>
                    <h1 className="text-5xl font-medium mt-2 mb-4 text-left">
                    Here's what a roadmap to business success looks like                   
                    </h1>
                    <p className="text-lg mb-8 font-thin pr-200 pl-200 mr-400 text-left">
                        A process built with the promise of value, and meaningful change, keeping our client's business needs in mind at every step.
                    </p>
                    <div className="flex flex-col px-14 pt-16 pb-8 max-w-screen-sm rounded-3xl bg-zinc-800 max-md:px-5">
                        <img
                            loading="lazy"
                            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/cb5d86e166c2fd34b519442f401f150b58a090e58309edcd12e95000e9a5939f?apiKey=cf2055fdb746408f86f5b90234158cc9&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/cb5d86e166c2fd34b519442f401f150b58a090e58309edcd12e95000e9a5939f?apiKey=cf2055fdb746408f86f5b90234158cc9&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/cb5d86e166c2fd34b519442f401f150b58a090e58309edcd12e95000e9a5939f?apiKey=cf2055fdb746408f86f5b90234158cc9&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/cb5d86e166c2fd34b519442f401f150b58a090e58309edcd12e95000e9a5939f?apiKey=cf2055fdb746408f86f5b90234158cc9&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/cb5d86e166c2fd34b519442f401f150b58a090e58309edcd12e95000e9a5939f?apiKey=cf2055fdb746408f86f5b90234158cc9&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/cb5d86e166c2fd34b519442f401f150b58a090e58309edcd12e95000e9a5939f?apiKey=cf2055fdb746408f86f5b90234158cc9&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/cb5d86e166c2fd34b519442f401f150b58a090e58309edcd12e95000e9a5939f?apiKey=cf2055fdb746408f86f5b90234158cc9&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/cb5d86e166c2fd34b519442f401f150b58a090e58309edcd12e95000e9a5939f?apiKey=cf2055fdb746408f86f5b90234158cc9&"
                            className="w-full aspect-[1.16] max-md:max-w-full"
                        />
                    </div>
                    <h1 className="text-8xl font-medium mt-20 mb-4 text-left" style={{ color: '#F1D089' }}>
                        2.
                    </h1>
                    <h1 className="text-5xl font-medium mt-2 mb-4 text-left">
                        A lifetime access to Subdue AI, and Subdue Business Center.
                    </h1>
                    <p className="text-lg mb-8 font-thin pr-200 pl-200 mr-4000 text-left">
                        With the advent of AI, and Web 4.0, it is our promise to keep you, and your business updated, and integrated with everything out there, no matter if you are a client or were a client of Subdue. 
                    </p>
                    <div className="flex flex-col justify-center text-white max-w-[639px] rounded-[35px]">
    <div className="flex gap-5 items-start pt-14 pl-12 w-full rounded-3xl bg-zinc-800 max-md:flex-wrap max-md:pl-5 max-md:max-w-full">
      <div className="flex flex-col grow shrink-0 self-start basis-0  mr-4 w-fit max-md:max-w-full">
        <div className="text-lg tracking-wide text-white max-md:max-w-full">
          Subdue AI
        </div>
        <div className="mt-14 text-4xl font-medium max-md:mt-10 max-md:max-w-full max-md:text-4xl">
          A one stop destination for your AI modernization needs
        </div>
        <div className="mt-11 text-xl max-md:mt-10 max-md:mr-2.5 max-md:max-w-full">
          Our AI tools helps clients automate many business processes ensuring efficiency, and smoother management.{" "}
        </div>
        <div className="justify-center self-start px-4 py-4 mt-24 text-lg mb-10 font-medium text-black bg-amber-200 rounded-[52px] max-md:px-5 max-md:mt-10">
          Coming soon
        </div>
      </div>
      
    </div>
  </div>
  <div className="flex flex-col justify-center text-white max-w-[639px] rounded-[35px] mt-10">
    <div className="flex gap-5 items-start pt-14 pl-12 w-full rounded-3xl bg-zinc-800 max-md:flex-wrap max-md:pl-5 max-md:max-w-full">
      <div className="flex flex-col grow shrink-0 self-start basis-0  mr-4 w-fit max-md:max-w-full">
        <div className="text-lg tracking-wide text-white max-md:max-w-full">
          Subdue Business Center
        </div>
        <div className="mt-14 text-4xl font-medium max-md:mt-10 max-md:max-w-full max-md:text-4xl">
        For Advanced Marketing, and Artificial Intelligence        </div>
        <div className="mt-11 text-xl max-md:mt-10 max-md:mr-2.5 max-md:max-w-full">
          An innovative initiative by Subdue, which helps our clients always stay up-to-date with latest technology, and strategies in the ever evolving business landscape.{" "}
        </div>
        <div className="justify-center self-start px-4 py-4 mt-24 text-lg mb-10 font-medium text-black bg-amber-200 rounded-[52px] max-md:px-5 max-md:mt-10">
          Coming soon
        </div>
      </div>
      
    </div>
  </div>
  <h1 className="text-8xl font-medium mt-20 mb-4 text-left" style={{ color: '#F1D089' }}>
                        3.
                    </h1>
                    <h1 className="text-5xl font-medium mt-2 mb-4 text-left">
                    Client Satisfaction Guarantee                  </h1>
                    <p className="text-lg mb-8 font-thin pr-200 mb-20 pb-4 pl-200 mr-400 text-left">
                    We offer 24/7 customer support, and meetings to our clients, as we truly care about whom we work with. 
                    </p>
                </div>
                
                <div  style={{ flex: 1, position: 'sticky', top: '0', height: '100vh', marginTop: '0px', overflow: 'hidden' }}>
                    <CalendlyWidget />
                </div>
            </div>
        </div>
    );
};

export default ContactPage;