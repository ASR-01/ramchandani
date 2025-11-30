"use client";

import { useEffect, useRef } from "react";
import { Geist } from "next/font/google";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Check } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const features = [
  {
    title: "Stunning Visual Aesthetics",
    description: "Clean, modern designs that reflect your brand personality and appeal to your target audience.",
  },
  {
    title: "Seamless Interactions",
    description: "Smooth animations, intuitive navigation, and delightful micro-interactions that enhance user experience.",
  },
  {
    title: "Responsive Excellence",
    description: "Flawless experiences across all devices—from 320px mobile screens to 4K desktop displays.",
  },
  {
    title: "Fast Loading Speed",
    description: "Optimized images, clean code, and performance best practices ensure instant page loads.",
  },
  {
    title: "SEO-Friendly Structure",
    description: "Semantic HTML, proper heading hierarchy, and technical optimization for better search visibility.",
  },
  {
    title: "Conversion Optimization",
    description: "Strategic placement of CTAs, trust signals, social proof, and persuasive copy that drives action.",
  },
  {
    title: "Security & Reliability",
    description: "SSL encryption, secure authentication, regular backups, and proactive monitoring.",
  },
];

const DesignFeatures = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Initialize refs array
    if (cardsRef.current.length !== features.length) {
      cardsRef.current = Array(features.length).fill(null);
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

      // Hover animations for cards
      cardsRef.current.forEach((card) => {
        if (!card) return;

        const handleMouseEnter = () => {
          gsap.to(card, {
            y: -8,
            scale: 1.02,
            duration: 0.3,
            ease: "power2.out",
          });
        };

        const handleMouseLeave = () => {
          gsap.to(card, {
            y: 0,
            scale: 1,
            duration: 0.3,
            ease: "power2.out",
          });
        };

        card.addEventListener("mouseenter", handleMouseEnter);
        card.addEventListener("mouseleave", handleMouseLeave);

        return () => {
          card.removeEventListener("mouseenter", handleMouseEnter);
          card.removeEventListener("mouseleave", handleMouseLeave);
        };
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
            Design Features That Set Us Apart
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {features.map((feature, index) => (
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
                  <div className="flex items-start gap-3 mb-4">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <h3
                      className={`text-xl md:text-2xl tracking-tight ${geistSans.className}`}
                    >
                      {feature.title}
                    </h3>
                  </div>
                  <p
                    className={`text-base md:text-[16px] leading-relaxed text-muted-foreground ${geistSans.className}`}
                  >
                    {feature.description}
                  </p>
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

export default DesignFeatures;

