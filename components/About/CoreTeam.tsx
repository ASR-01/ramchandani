"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Geist } from "next/font/google";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const teamMembers = [
  {
    name: "Amr Mohamed Fayez Radi",
    role: "Founder & Creative Director",
    description: "Visionary strategist leading brand identity, social media direction, and digital growth. Expert in delivering clean, modern, and effective brand experiences that stand out.",
    image: "/director.jpeg",
  },
  {
    name: "Nandani Ramchandani",
    role: "Design & Content Lead",
    description: "Specializes in creative design, brand visuals, and content development. Ensures every creative piece — from logos to social posts — speaks the brand's language.",
    image: "/marketing.jpeg",
  },
  {
    name: "Vipul Mahawar",
    role: "Tech & Development Lead",
    description: "Handles websites, landing pages, user experience, and technical execution. Brings ideas to life with clean code, smooth functionality, and performance-driven builds.",
    image: "/tech.jpeg",
  },
];

const CoreTeam = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Initialize refs array
    if (cardsRef.current.length !== teamMembers.length) {
      cardsRef.current = Array(teamMembers.length).fill(null);
    }

    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set([titleRef.current, subtitleRef.current, ...cardsRef.current], {
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
        // Animate subtitle
        .to(
          subtitleRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
          },
          "-=0.4"
        );

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
            className={`text-4xl md:text-5xl mb-4 tracking-tight text-center ${geistSans.className}`}
          >
            Our Core Team
          </h2>
          <p
            ref={subtitleRef}
            className={`text-lg md:text-xl text-muted-foreground text-center mb-12 max-w-2xl mx-auto ${geistSans.className}`}
          >
            The Minds Behind Brandora Creations
          </p>
          <p
            className={`text-base md:text-[16px] text-muted-foreground text-center mb-12 max-w-2xl mx-auto ${geistSans.className}`}
          >
            A small, dedicated team that works like a powerhouse — skilled, reliable, and focused
            entirely on your brand&apos;s success.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                ref={(el) => {
                  cardsRef.current[index] = el;
                }}
                className={cn(
                  "group border-primary/10 bg-card hover:border-primary/30 relative flex h-full cursor-pointer flex-col overflow-hidden rounded-xl border px-6 pt-6 pb-8 shadow-md transition-all duration-500 hover:shadow-lg"
                )}
              >
                {/* Decorative grid pattern */}
                <div className="absolute top-0 -right-1/2 z-0 size-full cursor-pointer bg-[linear-gradient(to_right,#3d16165e_1px,transparent_1px),linear-gradient(to_bottom,#3d16165e_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] bg-[size:24px_24px]"></div>
                
                {/* Content */}
                <div className="relative z-10 flex h-full flex-col">
                  {/* Image */}
                  <div className="relative w-full h-64 mb-6 rounded-lg overflow-hidden bg-muted">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover object-[center_15%] group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    {/* Image overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  {/* Text Content */}
                  <div className="flex-1 flex flex-col">
                    <h3
                      className={cn(
                        "text-xl md:text-2xl mb-2 tracking-tight",
                        geistSans.className
                      )}
                    >
                      {member.name}
                    </h3>
                    <p
                      className={cn(
                        "text-base md:text-lg text-primary mb-4 font-medium",
                        geistSans.className
                      )}
                    >
                      {member.role}
                    </p>
                    <p
                      className={cn(
                        "text-sm md:text-[16px] leading-relaxed text-muted-foreground",
                        geistSans.className
                      )}
                    >
                      {member.description}
                    </p>
                  </div>
                </div>

                {/* Bottom gradient accent */}
                <div className="from-primary to-primary/30 absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r blur-2xl transition-all duration-500 group-hover:blur-lg" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreTeam;

