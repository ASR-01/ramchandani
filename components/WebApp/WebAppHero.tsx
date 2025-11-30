"use client";

import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { FlowButton } from "@/components/ui/flow-button";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "motion/react";
import {Geist,JetBrains_Mono} from "next/font/google";

gsap.registerPlugin(ScrollTrigger);

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
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

  const WebAppHero = () => {
  const badgeRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const badgeGradientBorderRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states - using transform and filter instead of opacity
      gsap.set([badgeRef.current, titleRef.current, descriptionRef.current, buttonRef.current], {
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

      // Animate badge - fade in, slide in, blur in
      tl.to(badgeRef.current, {
        y: 0,
        filter: "blur(0px)",
        scale: 1,
        duration: 0.8,
      })
        // Animate title
        .to(
          titleRef.current,
          {
            y: 0,
            filter: "blur(0px)",
            scale: 1,
            duration: 1,
          },
          "-=0.5"
        )
        // Animate description
        .to(
          descriptionRef.current,
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

  // Background clip-path column animation
  useEffect(() => {
    if (!backgroundRef.current) return;

    const background = backgroundRef.current;
    const columns = 12; // Number of columns for the clip animation

    const ctx = gsap.context(() => {
      // Animate clip-path column by column from left to right
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
        defaults: {
          ease: "power2.out",
        },
      });

      // Animate revealing columns from left to right
      for (let i = 0; i <= columns; i++) {
        const revealPercent = (i / columns) * 100;
        
        tl.to(background, {
          clipPath: `inset(0 ${100 - revealPercent}% 0 0)`,
          duration: 0.15,
        }, i * 0.03);
      }
    });

    return () => ctx.revert();
  }, []);

  // Animated gradient borders
  useEffect(() => {
    if (!badgeGradientBorderRef.current) return;

    const badgeBorder = badgeGradientBorderRef.current;

    // Create animated gradient border for badge button
    gsap.to(badgeBorder, {
      backgroundPosition: "200% 0",
      duration: 3,
      ease: "none",
      repeat: -1,
    });
  }, []);

  // Animated marquee
  useEffect(() => {
    if (!marqueeRef.current) return;

    const marquee = marqueeRef.current;
    const firstItem = marquee.querySelector("h2") as HTMLElement;
    
    if (!firstItem) return;

    // Calculate the width of one item (including margin)
    const itemWidth = firstItem.offsetWidth + 32; // 32px for mx-4 (16px on each side)

    // Create seamless infinite marquee animation using timeline
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ repeat: -1, ease: "none" });
      
      tl.to(marquee, {
        x: -itemWidth,
        duration: 20,
      }).set(marquee, { x: 0 });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="w-full relative" ref={containerRef}>
      <div className="container mx-auto">
      <GradientBars bars={20} colors={['#e2733b', 'transparent']} />
      

        <div className="flex gap-8 py-20 lg:pt-40 px-4 items-start md:items-center justify-center flex-col relative z-10">
          <div ref={badgeRef} className="hidden md:block">
            
          </div>
          <div className="flex gap-4 flex-col items-center justify-center">
            <h1
              ref={titleRef}

              className={`text-5xl md:text-7xl max-w-3xl tracking-tighter md:text-center font-medium ${geistSans.className}`}
            >
             Custom Web Apps That Scale with Your Business
            </h1>
            <p
              ref={descriptionRef}
              className={`text-lg md:text-xl leading-relaxed tracking-tight text-black/60 max-w-2xl md:text-center ${geistSans.className}`}
            >
            Transform your business with tailor-made web applications that automate workflows, streamline operations, and drive growth.


            </p>
          </div>
          <div ref={buttonRef} className="flex flex-row">
            <FlowButton 
              text="Jump on a Call" 
              href="https://calendly.com/nandaniramchandani3/30min?month=2025-11"
            />
          </div>

         
        </div>
      </div>
    </div>
  );
};

export default WebAppHero;

