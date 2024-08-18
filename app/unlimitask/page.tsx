"use client";
import { cn } from "@/lib/utils";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { Outfit } from "next/font/google";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export function CenteredAroundTestimonials() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const [movedOut, setMovedOut] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log(latest);
    setMovedOut(parseFloat(latest.toFixed(2)) > 0.04);
  });

  const TestimonialCard = ({
    testimonial,
    direction,
    rotate,
    className,
  }: {
    testimonial: Testimonial;
    direction?: "left" | "right";
    rotate?: number;
    className?: string;
  }) => {
    return (
      <motion.div
        layoutId={`testimonial-${testimonial.name}`}
        key={String(movedOut)}
        className={cn(
          "flex absolute items-center gap-2 z-10 p-4 rounded-md bg-white dark:bg-neutral-800 shadow-lg opacity-20 lg:opacity-100",
          className
        )}
        animate={{
          y: movedOut ? 10 : 0,
          x: movedOut
            ? direction === "left"
              ? -0
              : direction === "right"
              ? 0
              : 0
            : 0,
          rotate: testimonial.rotate ?? 20,
        }}
        transition={{
          type: "spring",
          stiffness: 50,
          damping: 20,
        }}
      >
        <Image
          src={testimonial.src}
          alt={testimonial.name}
          width={50}
          height={50}
          className="rounded-full"
        />
        <div>
          <h3 className="text-neutral-800 dark:text-neutral-200 text-xs md:text-base">
            {testimonial.name}
          </h3>
          <p className="max-w-md text-[10px] md:text-sm text-neutral-600 dark:text-neutral-400">
            {testimonial.quote}
          </p>
        </div>
      </motion.div>
    );
  };
  return (
    <div ref={containerRef} className="relative overflow-hidden w-full mt-[-50px]">
      <TestimonialCard
        testimonial={testimonials[0]}
        className="top-20 -left-10"
        direction="left"
      />
      <TestimonialCard
        testimonial={testimonials[1]}
        className="top-1/2 -translate-y-1/2 -left-10"
        direction="left"
      />
      <TestimonialCard
        testimonial={testimonials[2]}
        className="top-20 -right-10"
        direction="right"
      />
      <TestimonialCard
        testimonial={testimonials[3]}
        className="bottom-20 -left-10"
        direction="left"
      />
      <TestimonialCard
        testimonial={testimonials[4]}
        className="bottom-1/2 -translate-y-1/2 -right-10"
        direction="right"
      />
      <TestimonialCard
        testimonial={testimonials[5]}
        className="bottom-20 -right-10"
        direction="right"
      />
      <div className="h-screen px-4 md:px-8 flex flex-col items-center justify-center bg-gray-50 dark:bg-neutral-900 relative overflow-hidden">
        <div className="absolute inset-0 h-full w-full bg-white dark:bg-neutral-900 z-30 opacity-80 md:opacity-0" />
        <Image
          src="https://assets.aceternity.com/pro/logos/aceternity-ui.png"
          alt="Aceternity Logo"
          width={100}
          height={100}
          className="w-40 object-contain aspect-square filter dark:invert relative z-50"
        />
        <h1
          className={cn(
            "text-lg sm:text-2xl text-center relative z-50 md:text-4xl lg:text-7xl max-w-5xl mt-10 mx-auto font-semibold text-neutral-700 dark:text-neutral-100",
            outfit.className
          )}
        >
          Join the biggest Image Generation Hackathon ever
        </h1>

        <form className="bg-white relative z-50 dark:bg-neutral-950 dark:border-neutral-800 flex rounded-full max-w-xl mx-auto w-full px-2 py-1.5 mt-10 border border-neutral-100 shadow-[0px_1px_3px_0px_rgba(0,0,0,0.15)_inset] ">
          <input
            type="text"
            placeholder="Enter your email"
            className="border-none ring-0 focus:ring-0 focus:outline-none bg-transparent w-full dark:text-white text-black text-sm"
          />
          <button className="bg-black dark:bg-white dark:text-black text-white text-sm px-4 py-1 rounded-full shadow-[0px_-1px_0px_0px_#FFFFFF40_inset,_0px_1px_0px_0px_#FFFFFF40_inset]">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

interface Testimonial {
  src: string;
  quote: string;
  name: string;
  designation?: string;
  rotate?: number;
}

export const testimonials: Testimonial[] = [
  {
    name: "Manu Arora",
    quote: "Fantastic AI, highly recommend it.",
    src: "https://i.pravatar.cc/150?img=1",
    designation: "Tech Innovator & Entrepreneur",
    rotate: -20,
  },
  {
    name: "Tyler Durden",
    quote: "AI revolutionized my business model.",
    src: "https://i.pravatar.cc/150?img=2",
    designation: "Creative Director & Business Owner",
    rotate: -10,
  },
  {
    name: "Alice Johnson",
    quote: "Transformed the way I work!",
    src: "https://i.pravatar.cc/150?img=3",
    designation: "Senior Software Engineer",
    rotate: 20,
  },
  {
    name: "Bob Smith",
    quote: "Absolutely revolutionary, a game-changer.",
    src: "https://i.pravatar.cc/150?img=4",
    designation: "Industry Analyst",
    rotate: -10,
  },
  {
    name: "Cathy Lee",
    quote: "Improved my work efficiency and daily life.",
    src: "https://i.pravatar.cc/150?img=5",
    designation: "Product Manager",
    rotate: 10,
  },
  {
    name: "David Wright",
    quote: "It's like having a superpower!",
    src: "https://i.pravatar.cc/150?img=6",
    designation: "Research Scientist",
    rotate: 20,
  },
];

export default CenteredAroundTestimonials;