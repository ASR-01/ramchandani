"use client";

import { useEffect, useRef } from "react";
import { Geist, JetBrains_Mono } from "next/font/google";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Service } from "@/lib/services-data";
import ServiceDetailHero from "./ServiceDetailHero";

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

interface ServiceDetailProps {
  service: Service;
}

const BlurredStagger = ({
  text = "",
}: {
  text: string;
}) => {
  const headingText = text;
 
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.015,
      },
    },
  };
 
  const letterAnimation = {
    hidden: {
      opacity: 0,
      filter: "blur(10px)",
    },
    show: {
      opacity: 1,
      filter: "blur(0px)",
    },
  };
 
  return (
    <>
      <div className="w-full">
        <motion.p
          variants={container}
          initial="hidden"
          animate="show"
          className={`text-base leading-relaxed break-words whitespace-normal ${geistSans.className}`}
        >
          {headingText.split("").map((char, index) => (
            <motion.span
              key={index}
              variants={letterAnimation}
              transition={{ duration: 0.3 }}
              className={`inline-block ${jetBrainsMono.className}`}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.p>
      </div>
    </>
  );
};

const ServiceDetail = ({ service }: ServiceDetailProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const totalSections = [
      service.whatWeDeliver,
      service.ourProcess,
      service.results,
      service.whatMakesDifferent,
      service.perfectFor,
      service.monthlyDeliverables,
      service.whatIncluded,
      service.packageOptions,
    ].filter(Boolean).length;

    if (sectionsRef.current.length !== totalSections) {
      sectionsRef.current = Array(totalSections).fill(null);
    }

    const ctx = gsap.context(() => {
      // Create timeline with ScrollTrigger for sections
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
        defaults: { ease: "power3.out" },
      });

      // Animate sections with stagger
      sectionsRef.current.forEach((section, index) => {
        if (section) {
          gsap.set(section, {
            opacity: 0,
            y: 30,
          });
          tl.to(
            section,
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
  }, [service]);

  let sectionIndex = 0;

  return (
    <section ref={sectionRef} className="w-full">
      <div className="container mx-auto">
        {/* Hero Section */}
        <ServiceDetailHero 
          headline={service.headline}
          overview={service.overview}
        />

        <div className="relative z-10 max-w-6xl mx-auto">
          {/* What We Deliver */}
          {service.whatWeDeliver && service.whatWeDeliver.length > 0 && (
            <div
              ref={(el) => {
                sectionsRef.current[sectionIndex++] = el;
              }}
              className="mb-16"
            >
              <h2
                className={`text-3xl md:text-4xl mb-8 tracking-tight ${geistSans.className}`}
              >
                What We Deliver
              </h2>
              <div className="space-y-8">
                {service.whatWeDeliver.map((feature, index) => (
                  <div
                    key={index}
                    className="bg-card border border-border rounded-xl p-6 md:p-8"
                  >
                    <h3
                      className={`text-xl md:text-2xl mb-4 tracking-tight ${geistSans.className}`}
                    >
                      {feature.title}
                    </h3>
                    <ul className="space-y-2">
                      {feature.items.map((item, itemIndex) => (
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
                ))}
              </div>
            </div>
          )}

          {/* Our Process */}
          {service.ourProcess && service.ourProcess.length > 0 && (
            <div
              ref={(el) => {
                sectionsRef.current[sectionIndex++] = el;
              }}
              className="mb-16"
            >
              <h2
                className={`text-foreground text-5xl tracking-tight mb-4 ${geistSans.className}`}
              >
                Our Process
              </h2>
              <div className="mt-8">
                <Accordion
                  type="single"
                  collapsible>
                  {service.ourProcess.map((process, index) => {
                    const itemId = `process-item-${index + 1}`;
                    return (
                      <AccordionItem
                        key={itemId}
                        value={itemId}
                        className="border-b border-gray-200 dark:border-gray-600">
                        <AccordionTrigger className={`cursor-pointer text-base font-medium hover:no-underline ${jetBrainsMono.className}`}>
                          Step {process.step}: {process.title}
                        </AccordionTrigger>
                        <AccordionContent>
                          <BlurredStagger text={process.description} />
                        </AccordionContent>
                      </AccordionItem>
                    );
                  })}
                </Accordion>
              </div>
            </div>
          )}

          {/* Results */}
          {service.results && service.results.length > 0 && (
            <div
              ref={(el) => {
                sectionsRef.current[sectionIndex++] = el;
              }}
              className="mb-16"
            >
              <h2
                className={`text-3xl md:text-4xl mb-8 tracking-tight ${geistSans.className}`}
              >
                Results You Can Expect
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.results.map((result, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 bg-card border border-border rounded-lg p-4"
                  >
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span
                      className={`text-base md:text-[16px] text-muted-foreground ${geistSans.className}`}
                    >
                      {result.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* What Makes Different */}
          {service.whatMakesDifferent && service.whatMakesDifferent.length > 0 && (
            <div
              ref={(el) => {
                sectionsRef.current[sectionIndex++] = el;
              }}
              className="mb-16"
            >
              <h2
                className={`text-3xl md:text-4xl mb-8 tracking-tight ${geistSans.className}`}
              >
                What Makes Our {service.name} Different
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.whatMakesDifferent.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 bg-card border border-border rounded-lg p-4"
                  >
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span
                      className={`text-base md:text-[16px] text-muted-foreground ${geistSans.className}`}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Perfect For */}
          {service.perfectFor && service.perfectFor.length > 0 && (
            <div
              ref={(el) => {
                sectionsRef.current[sectionIndex++] = el;
              }}
              className="mb-16"
            >
              <h2
                className={`text-3xl md:text-4xl mb-8 tracking-tight ${geistSans.className}`}
              >
                Perfect For
              </h2>
              <div className="flex flex-wrap gap-3">
                {service.perfectFor.map((item, index) => (
                  <span
                    key={index}
                    className={`inline-block px-4 py-2 bg-muted rounded-lg text-sm md:text-base text-muted-foreground border border-border ${geistSans.className}`}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Monthly Deliverables */}
          {service.monthlyDeliverables && service.monthlyDeliverables.length > 0 && (
            <div
              ref={(el) => {
                sectionsRef.current[sectionIndex++] = el;
              }}
              className="mb-16"
            >
              <h2
                className={`text-3xl md:text-4xl mb-8 tracking-tight ${geistSans.className}`}
              >
                Monthly Deliverables
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.monthlyDeliverables.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 bg-card border border-border rounded-lg p-4"
                  >
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span
                      className={`text-base md:text-[16px] text-muted-foreground ${geistSans.className}`}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* What's Included */}
          {service.whatIncluded && service.whatIncluded.length > 0 && (
            <div
              ref={(el) => {
                sectionsRef.current[sectionIndex++] = el;
              }}
              className="mb-16"
            >
              <h2
                className={`text-3xl md:text-4xl mb-8 tracking-tight ${geistSans.className}`}
              >
                What&apos;s Included
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.whatIncluded.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 bg-card border border-border rounded-lg p-4"
                  >
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span
                      className={`text-base md:text-[16px] text-muted-foreground ${geistSans.className}`}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Package Options */}
          {service.packageOptions && service.packageOptions.length > 0 && (
            <div
              ref={(el) => {
                sectionsRef.current[sectionIndex++] = el;
              }}
              className="mb-16"
            >
              <h2
                className={`text-3xl md:text-4xl mb-8 tracking-tight ${geistSans.className}`}
              >
                Package Options
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {service.packageOptions.map((pkg, index) => (
                  <div
                    key={index}
                    className="group relative bg-card border border-border rounded-xl p-6 md:p-8 hover:shadow-lg transition-shadow duration-300 overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative z-10">
                      <h3
                        className={`text-xl md:text-2xl mb-2 tracking-tight ${geistSans.className}`}
                      >
                        {pkg.name}
                      </h3>
                      <p
                        className={`text-2xl md:text-3xl font-bold text-primary mb-6 ${geistSans.className}`}
                      >
                        {pkg.price}
                      </p>
                      <ul className="space-y-3">
                        {pkg.features.map((feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className={`flex items-start gap-3 text-sm md:text-[16px] text-muted-foreground ${geistSans.className}`}
                          >
                            <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Investment & Timeline */}
          {(service.investment || service.timeline) && (
            <div className="bg-muted/30 border border-border rounded-xl p-6 md:p-8">
              {service.investment && (
                <div className="mb-6">
                  <h3
                    className={`text-xl md:text-2xl mb-2 tracking-tight ${geistSans.className}`}
                  >
                    Investment
                  </h3>
                  <p
                    className={`text-lg md:text-xl text-muted-foreground ${geistSans.className}`}
                  >
                    {service.investment}
                  </p>
                </div>
              )}
              {service.timeline && (
                <div>
                  <h3
                    className={`text-xl md:text-2xl mb-2 tracking-tight ${geistSans.className}`}
                  >
                    Timeline
                  </h3>
                  <p
                    className={`text-lg md:text-xl text-muted-foreground ${geistSans.className}`}
                  >
                    {service.timeline}
                  </p>
                </div>
              )}
            </div>
          )}
          </div>
      </div>
    </section>
  );
};

export default ServiceDetail;

