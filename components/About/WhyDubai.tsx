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

const industries = [
  "Real Estate",
  "E-commerce",
  "Healthcare",
  "Hospitality",
  "Education",
  "Professional Services",
  "Technology",
  "Retail",
  "Food & Beverage",
];

const WhyDubai = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const contentRef = useRef<HTMLParagraphElement>(null);
  const industriesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set([titleRef.current, subtitleRef.current, contentRef.current, industriesRef.current], {
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

      // Animate elements
      tl.to(titleRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
      })
        .to(
          subtitleRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
          },
          "-=0.4"
        )
        .to(
          contentRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
          },
          "-=0.6"
        )
        .to(
          industriesRef.current,
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
        <div className="max-w-4xl mx-auto">
          <h2
            ref={titleRef}
            className={`text-4xl md:text-5xl mb-4 tracking-tight ${geistSans.className}`}
          >
            Why Dubai Businesses Trust Us
          </h2>
          <p
            ref={subtitleRef}
            className={`text-xl md:text-2xl text-primary mb-6 ${geistSans.className}`}
          >
            Local Expertise, Global Standards
          </p>
          <p
            ref={contentRef}
            className={`text-lg md:text-[16px] leading-relaxed text-muted-foreground mb-8 ${geistSans.className}`}
          >
            Based in Dubai, we understand the unique dynamics of the UAE market—from cultural
            considerations to consumer behavior patterns to regulatory requirements. We combine this
            local intelligence with international best practices to deliver world-class marketing that
            resonates with your audience.
          </p>

          <div ref={industriesRef}>
            <p
              className={`text-base md:text-lg mb-4 font-medium ${geistSans.className}`}
            >
              Industries We Serve:
            </p>
            <div className="flex flex-wrap gap-2 md:gap-3">
              {industries.map((industry, index) => (
                <span
                  key={index}
                  className={`inline-block px-4 py-2 bg-muted rounded-lg text-sm md:text-base text-muted-foreground border border-border ${geistSans.className}`}
                >
                  {industry}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyDubai;

