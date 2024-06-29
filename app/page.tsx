import React from "react";
import { Tabs } from "@/components/ui/tabs";
import BentoPage from "@/app/bento/page";


export default function Home() {

  const tabs = [
    {
      title: "Product",
      value: "product",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Product Tab</p>
          
        </div>
      ),
    },
    {
      title: "Services",
      value: "services",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Services tab</p>
          
        </div>
      ),
    },
    {
      title: "Playground",
      value: "playground",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Playground tab</p>
          
        </div>
      ),
    },
    {
      title: "Content",
      value: "content",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Content tab</p>
          
        </div>
      ),
    },
    {
      title: "Random",
      value: "random",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Random tab</p>
          
        </div>
      ),
    },
  ];
  return (
    <main className="flex min-h-screen flex-col items-center justify-center pt-2 bg-[#1C1A1E] text-white">
      <div className="flex flex-col items-center justify-center text-center w-full max-w-6xl">
        <h1 className="text-6xl font-bold mt-40 mb-4">
          Specialization in neuroscience <br></br>marketing & A.I optimization
        </h1>
        <p className="text-lg mb-8">
          Lorem ipsum this is a text that needs to be fill. A small explanation of what we do or a preview of a process.
        </p>
        <div className="flex space-x-4">
          <a
            href="#"
            className="bg-[#F1D089] text-black px-6 py-3 rounded-full font-semibold flex items-center space-x-2"
          >
            <span>Learn the process</span>
            <span>→</span>
          </a>
          <a
            href="#"
            className="border border-white text-white px-6 py-3 rounded-full font-semibold flex items-center space-x-2"
          >
            <span>Contact us</span>
            <span>→</span>
          </a>
        </div>
        
        <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
      <Tabs tabs={tabs} />
    </div>
    <div className="flex flex-col items-center justify-center text-center w-full max-w-6xl pr-250">
      <h1 className="text-6xl font-bold mt-40 mb-4">How we do it</h1>
      <p className="text-lg mb-8 font-thin pr-200 pl-200 mr-400 ">
        This is not magic. It's a combination of neuroscience and AI. 

      </p>
      <BentoPage />
    </div>
      </div>
    </main>
  );
}