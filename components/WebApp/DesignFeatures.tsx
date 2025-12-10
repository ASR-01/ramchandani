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
    <section ref={sectionRef} className="w-full py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2
            ref={titleRef}
            className={`text-4xl md:text-5xl mb-12 tracking-tight ${geistSans.className}`}
          >
            Design Features That Set Us Apart
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                ref={(el) => {
                  cardsRef.current[index] = el;
                }}
                className="group relative border-primary/10 bg-card hover:border-primary/30 flex h-full cursor-pointer flex-col justify-between overflow-hidden rounded-xl border px-6 pt-6 pb-10 shadow-md transition-all duration-500 hover:shadow-lg"
              >
                {/* Grid pattern background */}
                <div className="absolute top-0 -right-1/2 z-0 size-full cursor-pointer bg-[linear-gradient(to_right,#3d16165e_1px,transparent_1px),linear-gradient(to_bottom,#3d16165e_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] bg-[size:24px_24px]"></div>

                {/* Content */}
                <div className="relative z-10 flex h-full flex-col justify-between">
                  <div>
                    <div className="flex items-start gap-3 mb-4">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <h3
                        className={`text-xl md:text-2xl tracking-tight ${geistSans.className}`}
                      >
                        {feature.title}
                      </h3>
                    </div>
                    <p
                      className={`text-base md:text-[16px] leading-relaxed text-muted-foreground mb-3 ${geistSans.className}`}
                    >
                      {feature.description}
                    </p>
                  </div>
                </div>

                {/* Bottom gradient effect */}
                <div className="from-primary to-primary/30 absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r blur-2xl transition-all duration-500 group-hover:blur-lg" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignFeatures;

