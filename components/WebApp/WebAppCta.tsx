"use client";

import { useEffect, useRef } from "react";
import { Geist } from "next/font/google";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FlowButton } from "@/components/ui/flow-button";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const WebAppCta = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set([headlineRef.current, subtextRef.current, buttonsRef.current], {
        opacity: 0,
        y: 30,
      });

      // Create timeline with ScrollTrigger
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
        defaults: { ease: "power3.out" },
      });

      // Animate headline
      tl.to(headlineRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
      })
        // Animate subtext
        .to(
          subtextRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
          },
          "-=0.4"
        )
        // Animate buttons
        .to(
          buttonsRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
          },
          "-=0.6"
        );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2
            ref={headlineRef}
            className={`text-4xl md:text-6xl mb-6 tracking-tight ${geistSans.className}`}
          >
            Let&apos;s Build Something Extraordinary
          </h2>
          <p
            ref={subtextRef}
            className={`text-lg md:text-xl text-muted-foreground mb-8 ${geistSans.className}`}
          >
            Whether you need a world-class website, a powerful mobile app, or a custom
            digital platform — we bring your ideas to life.
          </p>
          <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <FlowButton 
              text="Book a Free Consultation" 
              href="https://calendly.com/nandaniramchandani3/30min"
            />
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebAppCta;

