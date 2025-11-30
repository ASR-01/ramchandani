

import HeroSection from "@/components/Home/Hero";
import IntroSection from "@/components/Home/IntroSection";
import ServicesOverview from "@/components/Home/ServicesOverview";
import WhyChoose from "@/components/Home/WhyChoose";
import Work from "@/components/Home/Work";
import CaseStudies from "@/components/Home/CaseStudies";
import TestimonialsComponent from "@/components/Home/Testimonials";
import CtaSection from "@/components/Home/Cta";
export default function Home() {
  return (
  <div className="w-full h-fit ">
    <HeroSection />
    <IntroSection />
    <ServicesOverview />
    <WhyChoose />
    <Work />
    <CaseStudies />
    <TestimonialsComponent />  
    <CtaSection />
    
  </div>
  );
}
