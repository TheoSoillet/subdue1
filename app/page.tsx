import { AmbientColor } from "@/components/ambient-color";
import { AnimatedSvg } from "@/components/animated-svg";
import { Container } from "@/components/container";
import { CTA } from "@/components/cta";
import { FAQs } from "@/components/faqs";
import { Features } from "@/components/features";
import { FeatureIconContainer } from "@/components/features/feature-icon-container";
import { Heading } from "@/components/heading";
import { Hero } from "@/components/hero";
import { PricingGrid } from "@/components/pricing-grid";
import { Subheading } from "@/components/subheading";
import { Testimonials } from "@/components/testimonials";
import { TestimonialsSlider } from "@/components/testimonials/slider";
import { Tools } from "@/components/tools";
import { IconQuestionMark } from "@tabler/icons-react";

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <AmbientColor />
      <div className="pt-20">
      <Hero />
      </div>
      <Features />
      <Tools />
      <Testimonials />


      <div className="py-10 sm:py-40">
        <FeatureIconContainer className="flex justify-center items-center overflow-hidden">
        <IconQuestionMark className="h-6 w-6 text-[#F1D089]" />
        </FeatureIconContainer>
       
        <FAQs />
      </div>
    </div>
  );
}
