import React from "react";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "@/components/ui/text-reveal-card";





export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      
      <div className="flex items-center justify-center bg-[#0E0E10] h-[40rem] rounded-2xl w-full">
      <TextRevealCard
        text="Your business struggles"
        revealText="Subdue has solutions"
      >
        <TextRevealCardTitle>
          Interaction example #1
        </TextRevealCardTitle>
        <TextRevealCardDescription>
          Hover over the text.
         
        </TextRevealCardDescription>
      </TextRevealCard>
    </div>

      
    </main>
  );
}
