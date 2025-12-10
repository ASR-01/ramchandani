"use client";

import { useEffect, useRef } from "react";
import {
  TrendingUp,
  AppWindow,
  Figma,
  UsersRound, 
  Globe,
  Building2,
  ArrowRight,
} from "lucide-react";
import { Geist, JetBrains_Mono } from "next/font/google";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { FlowButton } from "@/components/ui/flow-button";
import Link from "next/link";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
}

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
}) ;

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const services = [
 {
   Icon: TrendingUp,
   name: "Performance Marketing",
   description:
     "Scale your business faster with high-ROI performance marketing. We plan, execute, and optimize results-driven campaigns across Google Ads, Meta Ads, TikTok Ads, LinkedIn Ads and more. From laser-focused targeting to continuous A/B testing, we ensure every rupee spent drives measurable growth, conversions, and profitability.",

  subDescription:
    "From laser-focused targeting to continuous A/B testing, we ensure every rupee spent drives measurable growth, conversions, and profitability.",
   href: "/services/performance-marketing",
   cta: "Learn more",
   background: <div className="absolute -top-20 -right-20 opacity-60" />,
   className:
     "lg:row-start-1 lg:row-end-3 lg:col-start-1 lg:col-end-2",
   color: "bg-gradient-to-br from-[#454ADE]/10 via-[#454ADE]/5 to-transparent",
   iconColor: "text-[#454ADE]",
   borderColor: "border-[#454ADE]/20",
 },
 {
   Icon: UsersRound,
   name: "Social Media Management",
   description:
     "Build a powerful brand presence with strategic content, consistent posting, and deep audience understanding. We create scroll-stopping creatives, manage your day-to-day social media operations, track analytics, and grow your community with proven social media strategies tailored to your business goals.",

  subDescription:
    "We create scroll-stopping creatives, manage your day-to-day social media operations, track analytics, and grow your community with proven social media strategies tailored to your business goals.",
     href: "/services/social-media-management",
   cta: "Learn more",
   background: <div className="absolute -top-20 -right-20 opacity-60" />,
   className:
     "lg:row-start-1 lg:row-end-2 lg:col-start-2 lg:col-end-3",
   color: "bg-gradient-to-br from-[#FFCFE1]/20 via-[#FFCFE1]/10 to-transparent",
   iconColor: "text-[#E60A64]",
   borderColor: "border-[#FFCFE1]/30",
 },
 {
   Icon: Globe,
   name: "SEO & Local SEO",
   description:
     "Increase organic visibility and rank higher for the keywords your customers are actively searching. Our SEO strategy includes technical optimization, on-page SEO, high-authority backlinks, local search dominance, and content creation. Perfect for local businesses, service providers, and companies wanting consistent inbound leads.",

  subDescription:
    "Increase organic visibility and rank higher for the keywords your customers are actively searching. Our SEO strategy includes technical optimization, on-page SEO, high-authority backlinks, local search dominance, and content creation. Perfect for local businesses, service providers, and companies wanting consistent inbound leads.",
   href: "/services/seo-local-seo",
   cta: "Learn more",
   background: <div className="absolute -top-20 -right-20 opacity-60" />,
   className:
     "lg:row-start-2 lg:row-end-3 lg:col-start-2 lg:col-end-3",
   color: "bg-gradient-to-br from-[#D9EAE3]/20 via-[#D9EAE3]/10 to-transparent",
   iconColor: "text-[#36D399]",
   borderColor: "border-[#D9EAE3]/30",
 },
 {
   Icon: AppWindow,
   name: "Website & App Development",
   description:
     "Get high-performance websites and apps built with modern technologies like Next.js, React, Node.js, and React Native. We focus on speed, UI/UX, conversion principles, and clean code to deliver digital products that help your business grow. From landing pages to full-scale applications—we build it all.",

  subDescription:
    "Get high-performance websites and apps built with modern technologies like Next.js, React, Node.js, and React Native. We focus on speed, UI/UX, conversion principles, and clean code to deliver digital products that help your business grow. From landing pages to full-scale applications—we build it all.",
   href: "/services/website-app-development",
   cta: "Learn more",
   background: <div className="absolute -top-20 -right-20 opacity-60" />,
   className:
     "lg:row-start-3 lg:row-end-4 lg:col-start-2 lg:col-end-3",
   color: "bg-gradient-to-br from-[#DADBF8]/20 via-[#DADBF8]/10 to-transparent",
   iconColor: "text-[#3ABFF8]",
   borderColor: "border-[#DADBF8]/30",
 },
 {
   Icon: Figma,
   name: "Branding & Design",
   description:
     "Stand out in your industry with a powerful brand identity. We craft logos, color palettes, brand guidelines, and complete visual systems that communicate your brand's personality. Every design we create is strategic, memorable, and built to elevate how your audience perceives your business.",

  subDescription:
    "Stand out in your industry with a powerful brand identity. We craft logos, color palettes, brand guidelines, and complete visual systems that communicate your brand's personality. Every design we create is strategic, memorable, and built to elevate how your audience perceives your business.",
   href: "/services/branding-design",
   cta: "Learn more",
   background: <div className="absolute -top-20 -right-20 opacity-60" />,
   className:
     "lg:row-start-1 lg:row-end-2 lg:col-start-3 lg:col-end-4",
   color: "bg-gradient-to-br from-[#FFFCE5]/30 via-[#FFFCE5]/15 to-transparent",
   iconColor: "text-[#FBBD23]",
   borderColor: "border-[#FFFCE5]/40",
 },
 {
   Icon: Building2,
   name: "Real Estate & E-commerce Solutions",
   description:
     "Unlock specialized solutions designed for two of the fastest-growing industries: Real Estate and E-Commerce. From high-intent lead generation for property developers to sales-driven funnels for online stores, we craft systems that increase visibility, conversions, and revenue through data-backed digital strategies.",

  subDescription:
    "Unlock specialized solutions designed for two of the fastest-growing industries: Real Estate and E-Commerce. From high-intent lead generation for property developers to sales-driven funnels for online stores, we craft systems that increase visibility, conversions, and revenue through data-backed digital strategies.",
   href: "/services/real-estate-e-commerce-solutions",
   cta: "Learn more",
   background: <div className="absolute -top-20 -right-20 opacity-60" />,
   className:
     "lg:row-start-2 lg:row-end-4 lg:col-start-3 lg:col-end-4",
   color: "bg-gradient-to-br from-[#DADBF8]/20 via-[#DADBF8]/10 to-transparent",
   iconColor: "text-[#454ADE]",
   borderColor: "border-[#DADBF8]/30",
 },
];


const ServicesOverview = () => {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const panelsContainerRef = useRef<HTMLDivElement>(null);
  const panelsSectionRef = useRef<HTMLDivElement>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    if (!panelsContainerRef.current || !panelsSectionRef.current) return;

    const container = panelsContainerRef.current;
    const section = panelsSectionRef.current;

    // Calculate the total width needed
    const totalWidth = services.length * 100; // Each panel is 100vw
    const numPanels = services.length;

    // Set the container width
    gsap.set(container, {
      width: `${totalWidth}vw`,
    });

    // Create snap points array - one for each panel
    const snapPoints: number[] = [];
    for (let i = 0; i < numPanels; i++) {
      snapPoints.push(i / (numPanels - 1));
    }

    // Calculate scroll distance - each panel should take exactly one viewport height
    // We need (numPanels - 1) transitions, each taking one viewport height
    const calculateScrollDistance = () => {
      // Each panel transition takes exactly one viewport height
      // Using innerHeight ensures consistent behavior
      const vh = window.innerHeight || 800; // Fallback for SSR
      // Each panel takes one full viewport height to transition
      return vh * (numPanels - 1);
    };

    // Create horizontal scroll animation
    const scrollTween = gsap.to(container, {
      x: () => {
        const maxScroll = -(totalWidth - 100); // Total width minus one viewport
        return `${maxScroll}vw`;
      },
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: () => `+=${calculateScrollDistance()}px`,
        pin: true,
        scrub: 1.5, // Smooth scrubbing with lag
        snap: {
          snapTo: (progress) => {
            // Calculate which panel we should be at
            const segment = 1 / (numPanels - 1);
            const panelIndex = Math.round(progress / segment);
            const targetProgress = panelIndex * segment;
            
            // Only snap if very close to target (prevents jumping)
            const distance = Math.abs(progress - targetProgress);
            const threshold = segment * 0.12; // 12% threshold
            
            if (distance < threshold) {
              return Math.max(0, Math.min(1, targetProgress));
            }
            // Don't snap - allow free scrolling
            return progress;
          },
          duration: { min: 0.6, max: 1.0 },
          delay: 0.8,
          ease: "power3.inOut",
          inertia: false, // Disable inertia to prevent unwanted movement
        },
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });

    tweenRef.current = scrollTween;

    // Cleanup
    return () => {
      scrollTween.kill();
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === section) {
          trigger.kill();
        }
      });
    };
  }, []);

  return (
    <div className="w-full overflow-x-hidden">
      {/* Intro Section */}
      <section
        id="intro"
        className="h-fit flex flex-col justify-center items-center px-4"
      >
        <h2
          ref={headlineRef}
          className={`text-4xl max-w-3xl lg:text-6xl tracking-tight text-center ${geistSans.className}`}
        >
          Everything Your Brand Needs to Thrive Online
        </h2>
        
      </section>

      {/* Horizontal Scrolling Panels */}
      <section ref={panelsSectionRef} id="panels" className="relative">
        <div
          ref={panelsContainerRef}
          id="panels-container"
          className="h-screen flex flex-nowrap"
        >
          {services.map((service, index) => (
            <article
              key={service.name}
              id={`panel-${index + 1}`}
              className="panel h-screen shrink-0 relative overflow-hidden"
              style={{ width: "100vw" }}
            >
              {/* Large Background Number */}
              <div className="absolute inset-0 flex items-center justify-end pr-8 lg:pr-16 pointer-events-none">
                <h2
                  className={`text-[15rem] lg:text-[25rem] xl:text-[35rem] font-bold select-none leading-none ${jetBrainsMono.className}`}
                  style={{
                    color: service.iconColor === "text-[#454ADE]" ? "rgba(69, 74, 222, 0.05)" :
                           service.iconColor === "text-[#E60A64]" ? "rgba(230, 10, 100, 0.05)" :
                           service.iconColor === "text-[#36D399]" ? "rgba(54, 211, 153, 0.05)" :
                           service.iconColor === "text-[#3ABFF8]" ? "rgba(58, 191, 248, 0.05)" :
                           service.iconColor === "text-[#FBBD23]" ? "rgba(251, 189, 35, 0.05)" :
                           "rgba(0, 0, 0, 0.05)"
                  }}
                >
                  {String(index + 1).padStart(2, "0")}
                </h2>
              </div>

              {/* Content Container */}
              <div className="h-full flex items-center justify-center  lg:px-8">
                <div className={`group w-full max-w-4xl overflow-hidden rounded-2xl bg-card px-4 `}>
                  <div>{service.background}</div>
                  <div className="relative z-10 flex flex-col gap-6">
                  <div className={`w-16 h-16 rounded-xl border ${service.borderColor} shadow-xs flex items-center justify-center bg-background/50 backdrop-blur-sm`}>
                    <service.Icon className={`w-8 h-8 ${service.iconColor}`} />
                  </div>
                  <h3
                    className={`text-3xl lg:text-6xl  ${geistSans.className}`}
                  >
                    {service.name}
                  </h3>
                  
                  <p
                    className={`  text-lg md:text-[16px] max-w-3xl text-muted-foreground leading-relaxed ${geistSans.className}`}
                  > 
                    {service.description}
                  </p>

                  <p
                    className={`text-[16px] hidden md:block max-w-3xl text-muted-foreground leading-relaxed ${geistSans.className}`}
                  >
                    {service.subDescription}
                  </p>
                  <Link
                    href={service.href}
                    className={`text-[16px] font-medium flex items-center gap-2 w-fit text-primary hover:text-primary/80 transition-colors ${geistSans.className}`}
                  >
                    {service.cta}
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                 
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Bottom Section */}
      <section className="h-fit flex flex-col justify-center items-center px-4">
      <h2 className={`text-4xl mb-8 ${geistSans.className}`}>
            Ready to Get Started?
          </h2>
        <div className="text-center">
          
          <FlowButton 
            text="Explore All Services" 
            href="/services"
          />
        </div>
      </section>
    </div>
  );
};

export default ServicesOverview;
