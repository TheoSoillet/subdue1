import React from "react";
import { Tabs } from "@/components/ui/tabs";
import GoogleGeminiEffectDemo from "@/app/gemini/page";
import StickyScrollRevealDemo from "../components/ui/sticky";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center pt-2 bg-[#1C1A1E] text-white">
      <div className="flex flex-col items-center justify-center text-left w-full w-[120vw]">
        <div className="flex flex-col items-center justify-center text-center w-full max-w-6xl pr-250">
          <div className="flex w-full">
            <div className="w-2/3 flex flex-col items-start justify-center">
              <h1 className="text-6xl font-medium  mt-56 mb-4 text-left">
              Turning good marketing teams great, and great the best.
              </h1>
              <p className="text-lg mb-8 font-thin pr-200 pl-200 mr-400 text-left">
                Lorem ipsum this is a text that needs to be fill. A small explanation of what we do or a preview of a process.
              </p>
              <div className="flex space-x-4 pt-2">
                <button className="bg-[#F1D089] text-black px-4 py-2 rounded-full">
                  Learn the process
                </button>
                <button className="bg-transparent border border-white text-white px-4 py-2 rounded-full">
                  Contact us
                </button>
              </div>
            </div>
            <div className="w-1/2"></div>
          </div>
        </div>
        
        <div className="flex flex-col items-center justify-center text-center w-full max-w-6xl pr-250 mt-20">
          <h1 className="text-6xl font-bold mt-40 mb-4">How we do it</h1>
          <p className="text-lg mb-8 font-thin pr-200 pl-200 mr-400">
            This is not magic. It's a combination of neuroscience and AI.
          </p>
          <StickyScrollRevealDemo />
        </div>
      </div>
    </main>
  );
}