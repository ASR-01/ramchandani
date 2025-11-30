"use client";

import { useEffect, useRef } from "react";
import { Geist } from "next/font/google";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MapPin, Phone, Mail, Globe, Clock } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const ContactInfo = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const contactDetails = [
    {
      icon: MapPin,
      label: "Dubai Office",
      value: "Business Bay, Bayview Tower, Dubai, UAE",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+971 525046977",
      href: "tel:+971525046977",
    },
    {
      icon: Mail,
      label: "Email",
      value: "info@brandoracreations.com",
      href: "mailto:info@brandoracreations.com",
    },
    {
      icon: Globe,
      label: "Website",
      value: "www.brandoracreations.com",
      href: "https://www.brandoracreations.com",
    },
    {
      icon: Clock,
      label: "Business Hours",
      value: "Mon–Fri: 9:00 AM – 7:00 PM",
    },
  ];

  useEffect(() => {
    // Initialize refs array
    if (cardsRef.current.length !== contactDetails.length) {
      cardsRef.current = Array(contactDetails.length).fill(null);
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
    <section ref={sectionRef} className="w-full py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2
            ref={titleRef}
            className={`text-4xl md:text-5xl mb-12 tracking-tight ${geistSans.className}`}
          >
            Contact Information
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {contactDetails.map((detail, index) => {
              const Icon = detail.icon;
              const content = (
                <div
                  ref={(el) => {
                    cardsRef.current[index] = el;
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
                      <div className="p-6">
                        <div className="w-12 h-12 md:w-12 md:h-12 rounded-lg  flex items-center justify-center mb-4 border border-primary/20">
                          <Icon className="w-6 h-6 md:w-5 md:h-5 text-primary" />
                        </div>
                        <h3
                          className={`mb-1 text-lg font-bold text-gray-900 dark:text-gray-100 ${geistSans.className}`}
                        >
                          {detail.label}
                        </h3>
                        <p
                          className={`text-gray-700 dark:text-gray-300 ${detail.href ? 'hover:text-primary transition-colors cursor-pointer' : ''} ${geistSans.className}`}
                        >
                          {detail.value}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );

              return detail.href ? (
                <a key={index} href={detail.href} className="block cursor-pointer">
                  {content}
                </a>
              ) : (
                <div key={index}>{content}</div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;

