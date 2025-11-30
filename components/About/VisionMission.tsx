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

const VisionMission = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const visionRef = useRef<HTMLDivElement>(null);
  const missionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set([visionRef.current, missionRef.current], {
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

      // Animate vision
      tl.to(visionRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
      })
        // Animate mission
        .to(
          missionRef.current,
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
    <section ref={sectionRef} className="w-full py-16 md:py-24 ">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Vision */}
          <div
            ref={visionRef}
            className="relative mx-auto w-full max-w-sm  border-zinc-300 px-4 sm:px-6 md:px-8 dark:border-zinc-800"
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
                <div className="p-6">
                  <h3
                    className={`mb-1 text-lg font-bold text-gray-900 dark:text-gray-100 ${geistSans.className}`}
                  >
                    Our Vision
                  </h3>
                  <p
                    className={`text-gray-700 dark:text-gray-300 ${geistSans.className}`}
                  >
                    To be the most trusted digital transformation partner for businesses across the Middle East,
                    recognized for turning ambitious goals into measurable achievements.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Mission */}
          <div
            ref={missionRef}
            className="relative mx-auto w-full max-w-sm  border-zinc-300 px-4 sm:px-6 md:px-8 dark:border-zinc-800"
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
                <div className="p-6">
                  <h3
                    className={`mb-1 text-lg font-bold text-gray-900 dark:text-gray-100 ${geistSans.className}`}
                  >
                    Our Mission
                  </h3>
                  <p
                    className={`text-gray-700 dark:text-gray-300 ${geistSans.className}`}
                  >
                    Empowering brands with innovative, data-driven digital solutions that accelerate growth,
                    build lasting customer relationships, and create competitive advantages in increasingly
                    digital markets.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;

