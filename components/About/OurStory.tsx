"use client";

import { useEffect, useRef } from "react";
import { Geist } from "next/font/google";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const OurStory = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set([titleRef.current, contentRef.current], {
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

      // Animate title
      tl.to(titleRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
      })
        // Animate content
        .to(
          contentRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
          },
          "-=0.4"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2
            ref={titleRef}
            className={`text-4xl md:text-5xl mb-8 tracking-tight ${geistSans.className}`}
          >
            Our Story
          </h2>
          <div ref={contentRef} className="space-y-6">
            <div>
              <h3
                className={`text-2xl md:text-3xl mb-4 tracking-tight ${geistSans.className}`}
              >
                Who We Are
              </h3>
              <p
                className={`text-lg md:text-[16px] leading-relaxed text-muted-foreground ${geistSans.className}`}
              >
                Brandora Creations was born from a simple belief: businesses deserve marketing partners
                who genuinely care about their success.
              </p>
            </div>
            <p
              className={`text-lg md:text-[16px] leading-relaxed text-muted-foreground ${geistSans.className}`}
            >
              Founded in the heart of Dubai, we&apos;ve grown from a passionate startup to a full-service digital
              powerhouse serving clients across UAE and beyond. Our team brings together seasoned
              marketers, creative visionaries, technical experts, and strategic thinkers—all united by one
              mission: helping businesses thrive in the digital age.
            </p>
            <p
              className={`text-lg md:text-[16px] leading-relaxed text-muted-foreground ${geistSans.className}`}
            >
              What makes us different? We don&apos;t believe in cookie-cutter solutions. Every business is
              unique, every market has its nuances, and every campaign we create is custom-built to
              deliver maximum impact for your specific goals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;

