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

const designCategories = [
  {
    title: "Websites",
    items: [
      "Corporate and business websites",
      "E-commerce stores",
      "Portfolio and agency sites",
      "Landing pages and microsites",
      "Membership and subscription sites",
      "Real estate platforms",
      "Healthcare portals",
      "Educational platforms",
    ],
  },
  {
    title: "Mobile Applications",
    items: [
      "Consumer apps (iOS/Android)",
      "Business productivity apps",
      "E-commerce apps",
      "Social platforms",
      "On-demand service apps",
      "Healthcare and fitness apps",
      "Real estate apps",
    ],
  },
  {
    title: "Web Applications",
    items: [
      "SaaS platforms",
      "Internal business tools",
      "CRM and management systems",
      "Dashboards and analytics platforms",
      "Booking and scheduling systems",
    ],
  },
];

const WhatWeDesign = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Initialize refs array
    if (cardsRef.current.length !== designCategories.length) {
      cardsRef.current = Array(designCategories.length).fill(null);
    }

    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set([titleRef.current, ...cardsRef.current], {
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
      });

      // Animate cards with stagger
      cardsRef.current.forEach((card, index) => {
        if (card) {
          tl.to(
            card,
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
            },
            index === 0 ? "-=0.4" : "-=0.5"
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2
            ref={titleRef}
            className={`text-4xl md:text-5xl mb-12 tracking-tight ${geistSans.className}`}
          >
            What We Design
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {designCategories.map((category, index) => (
              <div
                key={index}
                ref={(el) => {
                  cardsRef.current[index] = el;
                }}
                className="group relative bg-card border border-border rounded-xl p-6 md:p-8 hover:shadow-lg transition-shadow duration-300 overflow-hidden"
              >
                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Content */}
                <div className="relative z-10">
                  <h3
                    className={`text-xl md:text-2xl mb-6 tracking-tight ${geistSans.className}`}
                  >
                    {category.title}
                  </h3>
                  <ul className="space-y-3">
                    {category.items.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className={`flex items-start gap-3 text-base md:text-[16px] text-muted-foreground ${geistSans.className}`}
                      >
                        <span className="text-primary mt-1">●</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Decorative element */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDesign;

