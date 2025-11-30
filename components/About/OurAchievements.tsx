"use client";

import { useEffect, useRef } from "react";
import { Geist } from "next/font/google";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Trophy } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const achievements = [
  {
    icon: Trophy,
    text: "Top 100 Digital Agencies in Dubai",
  },
  {
    icon: Trophy,
    text: "100+ Five-Star Client Reviews",
  },
  {
    icon: Trophy,
    text: "5M+ AED Generated for Clients",
  },
  {
    icon: Trophy,
    text: "500K+ Qualified Leads Delivered",
  },
];

const OurAchievements = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Initialize refs array
    if (itemsRef.current.length !== achievements.length) {
      itemsRef.current = Array(achievements.length).fill(null);
    }

    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set([titleRef.current, ...itemsRef.current], {
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

      // Animate items with stagger
      itemsRef.current.forEach((item, index) => {
        if (item) {
          tl.to(
            item,
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
    <section ref={sectionRef} className="w-full py-16 md:py-24 ">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2
            ref={titleRef}
            className={`text-4xl md:text-5xl mb-12 tracking-tight text-center ${geistSans.className}`}
          >
            Our Achievements
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <div
                  key={index}
                  ref={(el) => {
                    itemsRef.current[index] = el;
                  }}
                  className="relative mx-auto w-full max-w-sm border-zinc-300 px-4 sm:px-6 md:px-8 dark:border-zinc-800"
                >
                  <div className="absolute top-4 left-0 z-0 h-px w-full bg-zinc-400 sm:top-6 md:top-8 dark:bg-zinc-700" />
                  <div className="absolute bottom-4 left-0 z-0 h-px w-full bg-zinc-400 sm:bottom-6 md:bottom-8 dark:bg-zinc-700" />
                  <div className="relative w-full border-x border-zinc-400 dark:border-zinc-700">
                    <div className="absolute z-0 grid h-full w-full items-center">
                      <section className="absolute z-0 grid h-full w-full grid-cols-2 place-content-between">
                        <div className="bg-primary my-4 size-1 -translate-x-[2.5px] rounded-full outline outline-8 outline-gray-50 sm:my-6 md:my-8 dark:outline-gray-950" />
                        <div className="bg-primary my-4 size-1 translate-x-[2.5px] place-self-end rounded-full outline outline-8 outline-gray-50 sm:my-6 md:my-8 dark:outline-gray-950" />
                        <div className="bg-primary my-4 size-1 -translate-x-[2.5px] rounded-full outline outline-8 outline-gray-50 sm:my-6 md:my-8 dark:outline-gray-950" />
                        <div className="bg-primary my-4 size-1 translate-x-[2.5px] place-self-end rounded-full outline outline-8 outline-gray-50 sm:my-6 md:my-8 dark:outline-gray-950" />
                      </section>
                    </div>
                    <div className="relative z-20 mx-auto py-8">
                      <div className="p-6 flex flex-col items-center text-center">
                        <div className="w-12 h-12 md:w-16 md:h-16 rounded-lg  flex items-center justify-center mb-4 mx-auto ">
                          <Icon className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                        </div>
                        <p
                          className={`text-gray-700 dark:text-gray-300 ${geistSans.className}`}
                        >
                          {achievement.text}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurAchievements;

