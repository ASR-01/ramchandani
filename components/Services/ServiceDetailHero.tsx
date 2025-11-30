"use client";

import { useEffect, useRef } from "react";
import { Geist } from "next/font/google";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FlowButton } from "@/components/ui/flow-button";
import { motion } from "motion/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

interface GradientBarsProps {
  bars?: number;
  colors?: string[];
}

const GradientBars = ({
  bars = 20,
  colors = ['#e60a64', 'transparent'],
}: GradientBarsProps) => {
  const gradientStyle = `linear-gradient(to top, ${colors.join(', ')})`;

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <div 
        className="flex h-full w-full"
        style={{
          maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)',
        }}
      >
        {Array.from({ length: bars }).map((_, index) => {
          const position = index / (bars - 1);
          const center = 0.5;
          const distance = Math.abs(position - center);
          const scale = 0.3 + 0.7 * Math.pow(distance * 2, 1.2);

          return (
            <motion.div
              key={`bg-bar-${index}`}
              className="flex-1 origin-bottom"
              style={{ background: gradientStyle }}
              animate={{
                scaleY: [scale, scale + 0.1, scale],
                opacity: [1, 0.95, 1],
              }}
              transition={{
                duration: 3,
                ease: 'easeInOut',
                repeat: Infinity,
                repeatType: 'mirror',
                delay: index * 0.5,
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

interface ServiceDetailHeroProps {
  headline: string;
  overview: string;
}

const ServiceDetailHero = ({ headline, overview }: ServiceDetailHeroProps) => {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const overviewRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states - using transform and filter instead of opacity
      gsap.set([headlineRef.current, overviewRef.current, buttonRef.current], {
        y: 50,
        filter: "blur(10px)",
        scale: 0.95,
      });

      // Create scroll-triggered timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
        defaults: { 
          ease: "power3.out",
        },
      });

      // Animate headline
      tl.to(headlineRef.current, {
        y: 0,
        filter: "blur(0px)",
        scale: 1,
        duration: 1,
      })
        // Animate overview
        .to(
          overviewRef.current,
          {
            y: 0,
            filter: "blur(0px)",
            scale: 1,
            duration: 1,
          },
          "-=0.7"
        )
        // Animate button
        .to(
          buttonRef.current,
          {
            y: 0,
            filter: "blur(0px)",
            scale: 1,
            duration: 0.8,
          },
          "-=0.6"
        );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="w-full relative mb-16" ref={containerRef}>
      <GradientBars bars={20} colors={['#e2733b', 'transparent']} />
      
      <div className="flex gap-8 py-20 lg:pt-40 items-start md:items-center justify-center flex-col relative z-10 max-w-6xl mx-auto">
        <div className="flex gap-4 flex-col items-center justify-center w-full">
          {/* Headline */}
          <h1
            ref={headlineRef}
            className={`text-5xl md:text-7xl max-w-4xl tracking-tighter md:text-center font-medium ${geistSans.className}`}
          >
            {headline}
          </h1>

          {/* Overview */}
          <p
            ref={overviewRef}
            className={`text-lg md:text-xl leading-relaxed tracking-tight text-black/60 max-w-3xl md:text-center ${geistSans.className}`}
          >
            {overview}
          </p>
        </div>
        
        {/* CTA Button */}
        <div ref={buttonRef} className="flex flex-row">
          <FlowButton 
            text="Jump on a Call" 
            href="https://calendly.com/nandaniramchandani3/30min?month=2025-11"
          />
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailHero;

