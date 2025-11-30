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

const teamMembers = [
  {
    name: "Amr Mohamed Fayez Radi",
    role: "Founder & Creative Director",
    description: "Visionary strategist leading brand identity, social media direction, and digital growth. Expert in delivering clean, modern, and effective brand experiences that stand out.",
  },
  {
    name: "Nandani Ramchandani",
    role: "Design & Content Lead",
    description: "Specializes in creative design, brand visuals, and content development. Ensures every creative piece — from logos to social posts — speaks the brand's language.",
  },
  {
    name: "Vipul Mahawar",
    role: "Tech & Development Lead",
    description: "Handles websites, landing pages, user experience, and technical execution. Brings ideas to life with clean code, smooth functionality, and performance-driven builds.",
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
                className="group relative bg-card border border-border rounded-xl p-6 md:p-8 hover:shadow-lg transition-shadow duration-300 overflow-hidden"
              >
                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Content */}
                <div className="relative z-10">
                  <h3
                    className={`text-xl md:text-2xl mb-2 tracking-tight ${geistSans.className}`}
                  >
                    {member.name}
                  </h3>
                  <p
                    className={`text-base md:text-lg text-primary mb-4 ${geistSans.className}`}
                  >
                    {member.role}
                  </p>
                  <p
                    className={`text-sm md:text-[16px] leading-relaxed text-muted-foreground ${geistSans.className}`}
                  >
                    {member.description}
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

export default CoreTeam;

