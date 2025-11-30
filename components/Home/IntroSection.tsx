"use client";

import { useEffect, useRef } from "react";
import { Geist, JetBrains_Mono } from "next/font/google";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

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

const stats = [
  { value: "200%", label: "Average ROI Increase" },
  { value: "95%", label: "Client Retention Rate" },
  { value: "150+", label: "Projects Delivered" },
  { value: "4.9/5", label: "Client Satisfaction" },
];

const IntroSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const statValueRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Initialize refs array
    if (statValueRefs.current.length !== stats.length) {
      statValueRefs.current = Array(stats.length).fill(null);
    }
    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set([headlineRef.current, descriptionRef.current, statsRef.current], {
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
        // Animate description
        .to(
          descriptionRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
          },
          "-=0.4"
        )
        // Animate stats container
        .to(
          statsRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
          },
          "-=0.6"
        );

      // Animate counting numbers when scrolled into view
      statValueRefs.current.forEach((ref, index) => {
        if (!ref) return;

        const stat = stats[index];
        const value = stat.value;

        // Extract numeric value
        let targetValue = 0;
        let suffix = "";

        if (value.includes("%")) {
          targetValue = parseFloat(value);
          suffix = "%";
        } else if (value.includes("+")) {
          targetValue = parseFloat(value);
          suffix = "+";
        } else if (value.includes("/")) {
          // Handle 4.9/5 format
          const parts = value.split("/");
          targetValue = parseFloat(parts[0]);
          suffix = `/5`;
        } else {
          targetValue = parseFloat(value);
        }

        // Get the parent stat card element
        const statCard = ref.parentElement;

        // Animate counting with ScrollTrigger
        const obj = { value: 0 };
        gsap.to(obj, {
          value: targetValue,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: statCard || statsRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
          onUpdate: () => {
            if (value.includes("/")) {
              ref.textContent = `${obj.value.toFixed(1)}${suffix}`;
            } else {
              ref.textContent = `${Math.floor(obj.value)}${suffix}`;
            }
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="w-full pb-20 ">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-8 items-center justify-center max-w-5xl mx-auto">
          {/* Headline */}
          <h1
            ref={headlineRef}
            className={`text-4xl max-w-3xl lg:text-6xl tracking-tight text-left ${geistSans.className}`}
          >
            Your Growth Partner in the Digital Age
          </h1>

          {/* Description */}
          <p
            ref={descriptionRef}
            className={`text-lg md:text-[16px] leading-relaxed  text-muted-foreground text-left max-w-3xl ${geistSans.className}`}
          >
            At <span className=" text-black">Brandora Creations</span>, we don&apos;t just market—we engineer growth. As a
            full-service digital marketing agency based in Dubai, we combine strategic
            thinking, creative innovation, and cutting-edge technology to help businesses
            scale faster and smarter.
            <br />
            <br />
            Whether you need to dominate social media, rank #1 on Google, or build a
            website that converts—we&apos;ve got you covered.
          </p>

          {/* Stats Section */}
          <div
            ref={statsRef}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 w-full mt-8"
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-6 rounded-lg border bg-card"
              >
                <div
                  ref={(el) => {
                    statValueRefs.current[index] = el;
                  }}
                  className={`text-3xl md:text-4xl font-bold ${jetBrainsMono.className} mb-2`}
                >
                  {(() => {
                    // Show initial value for animatable numbers
                    const value = stat.value;
                    if (value.includes("%")) return "0%";
                    if (value.includes("+")) return "0+";
                    if (value.includes("/")) return "0.0/5";
                    return "0";
                  })()}
                </div>
                <div
                  className={`text-sm md:text-base text-muted-foreground text-center ${geistSans.className}`}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroSection;
