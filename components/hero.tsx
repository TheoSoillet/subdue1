"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { Button } from "./button";
import { CONSTANTS } from "@/constants/links";

import { cn } from "@/lib/utils";
import { useCalEmbed } from "@/hooks/useCalEmbed";

export function Hero() {
  const calOptions = useCalEmbed({
    namespace: CONSTANTS.CALCOM_NAMESPACE,
    styles: {
      branding: {
        brandColor: CONSTANTS.CALCOM_BRAND_COLOR,
      },
    },
    hideEventTypeDetails: CONSTANTS.CALCOM_HIDE_EVENT_TYPE_DETAILS,
    layout: CONSTANTS.CALCOM_LAYOUT,
  });

  return (
    <div className="w-full bg-gray-50 dark:bg-neutral-950 relative overflow-hidden">
      <div className="relative pb-4 flex flex-col items-center justify-center overflow-hidden px-8  md:px-8 ">
        <div className="relative flex flex-col items-center justify-center  mt-20 ">
          <Badge
            onClick={() => {
              console.log("clicked");
            }}
          >
            Advisor of Harvard Business Review
          </Badge>
          <h1 className="text-3xl md:text-4xl lg:text-7xl tracking-tight font-bold mt-4 mb-8relative text-center text-zinc-700 dark:text-white max-w-6xl mx-auto pr-20 ">
            Your digital marketing plan{" "}
            <span className="relative bg-clip-text text-transparent bg-gradient-to-b from-[#F1D089] to-[#F1D089] z-10">
              designed for success 
            </span>{" "}
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="inline-block h-14 w-14 stroke-[#F1D089] stroke-[1px]"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <motion.path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <motion.path
                  initial={{
                    pathLength: 0,
                    fill: "#F1D089",
                    opacity: 0,
                  }}
                  animate={{
                    pathLength: 1,
                    fill: "#F1D089",
                    opacity: 1,
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "linear",
                    repeatDelay: 0.5,
                  }}
                  d="M13 3l0 7l6 0l-8 11l0 -7l-6 0l8 -11"
                />
              </svg>
            </span>
          </h1>
          <h2 className="relative font-regular text-base md:text-xl text-zinc-5000 dark:text-zinc-200 tracking-wide mb-8 mt-8 text-center max-w-xl mx-auto antialiased">
            Let us combine neuroscience and AI to create a personalized digital marketing plan for your business.
          </h2>
        </div>
        <div className="relative z-10 group mb-10">
        <Button
              data-cal-namespace={calOptions.namespace}
              data-cal-link={CONSTANTS.CALCOM_LINK}
              data-cal-config={`{"layout":"${calOptions.layout}"}`}
              as="button"
              variant="primary"
              className="hidden md:block bg-white text-black"
            >
              Book a call
            </Button>
        </div>
        <LogoCloudMarquee />
      </div>
    </div>
  );
}



export const FeaturedImages = ({
  className,
  containerClassName,
}: {
  textClassName?: string;
  className?: string;
  showStars?: boolean;
  containerClassName?: string;
}) => {
  const images = [
    {
      name: "John Doe",
      src: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
    },
    {
      name: "Robert Johnson",
      src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    {
      name: "Jane Smith",
      src: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    {
      name: "Emily Davis",
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    {
      name: "Tyler Durden",
      src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
    },
    {
      name: "Dora",
      src: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
    },
  ];
  return (
    <div className={cn("flex flex-col items-center ", containerClassName)}>
      <div
        className={cn(
          "flex flex-col sm:flex-row items-center justify-center mb-2",
          className
        )}
      >
        <div className="flex flex-row items-center mb-4 sm:mb-0">
          {images.map((image, idx) => (
            <div className="-mr-4  relative group" key={image.name}>
              <div>
                <motion.div
                  whileHover={{
                    scale: 1.05,
                    zIndex: 30,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                  className="rounded-full overflow-hidden border-2  border-neutral-200  relative"
                >
                  <Image
                    height={100}
                    width={100}
                    src={image.src}
                    alt={image.name}
                    className="object-cover object-top  md:h-14 md:w-14 h-8 w-8 "
                  />
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export function LogoCloudMarquee() {
  const logos = [
    
    {
      name: "Spotify",
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/d5c3d8cccfbe35de0b01a1f102dfb1175a916e09d35c8c85cff7911d11c1c92b?placeholderIfAbsent=true&apiKey=cf2055fdb746408f86f5b90234158cc9&",
    },
    {
      name: "Netflix",
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/e4aa4513a9067ac9c6aa821c1a7b04e4090452dad7afcd06ffac7f74e21041ec?placeholderIfAbsent=true&apiKey=cf2055fdb746408f86f5b90234158cc9&",
    },
    {
      name: "Adobe",
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/73bfc5b03cd09f7946f6f68e4cd5b5fc016e2f1053e1eb66d75264ccd3d16c90?placeholderIfAbsent=true&apiKey=cf2055fdb746408f86f5b90234158cc9&",
    },

    {
      name: "Path",
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/5227f8c2e332a8954e55c37b83017ef636f3b647fbff2f4f6e62eb24f60bb603?placeholderIfAbsent=true&apiKey=cf2055fdb746408f86f5b90234158cc9&",
    },
    
  ];

  return (
    <div className="relative ">
      <p className="text-center text-base text-neutral-700 font-sans dark:text-neutral-300 mt-4">
        Trusted by other businesses
      </p>

      <div className="flex gap-10 h-20 flex-wrap justify-center md:gap-40 relative  w-full mt-4 md:mt-2 max-w-4xl mx-auto [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
        <Marquee pauseOnHover direction="left" speed={30}>
          {logos.map((logo, idx) => (
            <Image
              key={logo.name + "second"}
              src={logo.src}
              alt={logo.name}
              width="100"
              height="100"
              className=" md:w-40 w-32 object-contain filter mx-0 md:mx-10 "
            />
          ))}
        </Marquee>
      </div>
    </div>
  );
}

const Logo = () => {
  return (
    <Link
      href="/"
      className="font-normal flex space-x-2 items-center text-sm mr-4  text-black px-2 py-1  relative z-20"
    >
      <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm" />
      <span className="font-medium text-black dark:text-white">DevStudio</span>
    </Link>
  );
};

export const Badge: React.FC<
  { children: React.ReactNode } & React.ComponentPropsWithoutRef<"button">
> = ({ children, ...props }) => {
  return (
    <button
      {...props}
      className="bg-neutral-50 dark:bg-neutral-700 no-underline group cursor-pointer relative md:shadow-2xl shadow-zinc-900 rounded-full p-px text-[10px] sm:text-xs font-semibold leading-6  text-neutral-700 dark:text-neutral-300 inline-block w-fit mx-auto"
    >
      <span className="absolute inset-0 overflow-hidden rounded-full">
        <span className="absolute inset-0 rounded-full  opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </span>
      <div className="relative flex space-x-2 items-center z-10 rounded-full bg-neutral-100 dark:bg-neutral-800 py-1.5 px-4 ring-1 ring-white/10 ">
        <span>{children}</span>
        <svg
          fill="none"
          height="16"
          viewBox="0 0 24 24"
          width="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.75 8.75L14.25 12L10.75 15.25"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
        </svg>
      </div>
      <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-neutral-400/0 via-neutral-400/90 to-neutral-400/0 transition-opacity duration-500 group-hover:opacity-40" />
    </button>
  );
};