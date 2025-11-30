"use client";

import { useEffect, useRef } from "react";
import { Geist, JetBrains_Mono } from "next/font/google";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";
import Link from "next/link";



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

const caseStudies = [
  {
    id: 1,
    title: "Dubai Real Estate Agency",
    metrics: [
      { value: "847", label: "qualified leads in 90 days" },
      { value: "62%", label: "reduced cost per lead" },
      { value: "4.2X", label: "ROAS" },
    ],
  },
  {
    id: 2,
    title: "E-commerce Fashion Brand",
    metrics: [
      { value: "AED 45K → AED 180K", label: "scaled monthly revenue" },
      { value: "3.8X", label: "return on ad spend" },
      { value: "12,500+", label: "orders" },
    ],
  },
  {
    id: 3,
    title: "Healthcare Clinic Chain",
    metrics: [
      { value: "340%", label: "increased website traffic" },
      { value: "#1", label: "ranked for 27 key search terms" },
      { value: "150+", label: "patient bookings monthly" },
    ],
  },
];

const CaseStudies = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const linkRef = useRef<HTMLDivElement>(null);
  const metricValueRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Helper function to get initial display value
  const getInitialValue = (originalValue: string): string => {
    // Skip animation for ranges, rankings, or non-numeric values
    if (
      originalValue.includes("→") ||
      originalValue.startsWith("#") ||
      originalValue.includes("AED")
    ) {
      return originalValue;
    }
    // Return "0" or appropriate starting value
    if (originalValue.includes("%")) return "0%";
    if (originalValue.includes("X")) {
      if (originalValue.includes(".")) return "0.0X";
      return "0X";
    }
    if (originalValue.includes("+")) return "0+";
    return "0";
  };

  // Helper function to parse and animate numbers
  const animateNumber = (
    element: HTMLDivElement,
    originalValue: string
  ) => {
    // Skip if it's a range, ranking, or non-numeric value
    if (
      originalValue.includes("→") ||
      originalValue.startsWith("#") ||
      originalValue.includes("AED")
    ) {
      return;
    }

    let targetValue = 0;
    let suffix = "";
    let isDecimal = false;
    let decimalPlaces = 0;

    // Extract numeric value and suffix
    if (originalValue.includes("%")) {
      targetValue = parseFloat(originalValue.replace("%", ""));
      suffix = "%";
    } else if (originalValue.includes("X")) {
      targetValue = parseFloat(originalValue.replace("X", ""));
      suffix = "X";
      isDecimal = originalValue.includes(".");
      if (isDecimal) {
        decimalPlaces = originalValue.split(".")[1]?.replace("X", "").length || 1;
      }
    } else if (originalValue.includes("+")) {
      const numStr = originalValue.replace(/,/g, "").replace("+", "");
      targetValue = parseFloat(numStr);
      suffix = "+";
      if (originalValue.includes(",")) {
        // Format with commas
        const formatNumber = (num: number) => {
          return num.toLocaleString("en-US");
        };
        const obj = { value: 0 };
        gsap.to(obj, {
          value: targetValue,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: element.closest(".metric-item"),
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
          onUpdate: () => {
            element.textContent = `${formatNumber(Math.floor(obj.value))}${suffix}`;
          },
        });
        return;
      }
    } else {
      // Simple number
      const numStr = originalValue.replace(/,/g, "");
      targetValue = parseFloat(numStr);
      if (originalValue.includes(",")) {
        const formatNumber = (num: number) => {
          return num.toLocaleString("en-US");
        };
        const obj = { value: 0 };
        gsap.to(obj, {
          value: targetValue,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: element.closest(".metric-item"),
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
          onUpdate: () => {
            element.textContent = formatNumber(Math.floor(obj.value));
          },
        });
        return;
      }
    }

    // Animate the number
    const obj = { value: 0 };
    gsap.to(obj, {
      value: targetValue,
      duration: 2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: element.closest(".metric-item"),
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
      onUpdate: () => {
        if (isDecimal) {
          element.textContent = `${obj.value.toFixed(decimalPlaces)}${suffix}`;
        } else {
          element.textContent = `${Math.floor(obj.value)}${suffix}`;
        }
      },
    });
  };

  useEffect(() => {
    // Initialize refs array
    if (cardsRef.current.length !== caseStudies.length) {
      cardsRef.current = Array(caseStudies.length).fill(null);
    }

    // Calculate total number of metrics
    const totalMetrics = caseStudies.reduce(
      (sum, study) => sum + study.metrics.length,
      0
    );
    if (metricValueRefs.current.length !== totalMetrics) {
      metricValueRefs.current = Array(totalMetrics).fill(null);
    }

    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set([headlineRef.current, ...cardsRef.current, linkRef.current], {
        opacity: 0,
        y: 50,
      });

      // Create timeline for initial animations
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
      });

      // Animate cards with stagger
      cardsRef.current.forEach((card, index) => {
        if (card) {
          tl.to(
            card,
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
            },
            index === 0 ? "-=0.4" : "-=0.6"
          );

          // Animate metrics within each card
          const metrics = card.querySelectorAll(".metric-item");
          gsap.fromTo(
            metrics,
            {
              opacity: 0,
              x: -20,
            },
            {
              opacity: 1,
              x: 0,
              duration: 0.6,
              stagger: 0.1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
                toggleActions: "play none none reverse",
              },
            }
          );

          // Animate numbers in metrics
          const metricValues = card.querySelectorAll(".metric-value");
          metricValues.forEach((valueEl) => {
            const element = valueEl as HTMLDivElement;
            const originalValue = element.getAttribute("data-value") || "";
            if (originalValue) {
              // Set initial value
              const initialValue = getInitialValue(originalValue);
              element.textContent = initialValue;
              // Animate to target value
              animateNumber(element, originalValue);
            }
          });
        }
      });

      // Animate link
      tl.to(
        linkRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
        },
        "-=0.4"
      );

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
    <section
      ref={sectionRef}
      className="w-full py-16 md:py-24 bg-background"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Headline */}
          <h2
            ref={headlineRef}
            className={`text-4xl md:text-[40px]  mb-4 ${geistSans.className}`}
          >
            Real Results for Real Businesses
          </h2>

          {/* Case Study Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-12">
            {caseStudies.map((study, index) => (
              <div
                key={study.id}
                ref={(el) => {
                  cardsRef.current[index] = el;
                }}
                className="group relative bg-card border border-gray-200 dark:border-gray-800 rounded-xl p-6 md:p-8 hover:shadow-lg transition-shadow duration-300 overflow-hidden"
              >
                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Content */}
                <div className="relative z-10">
                  {/* Title */}
                  <h3
                    className={`text-xl md:text-[20px]  mb-6 ${geistSans.className}`}
                  >
                    {study.title}
                  </h3>

                  {/* Metrics */}
                  <div className="space-y-4">
                    {study.metrics.map((metric, metricIndex) => {
                      const globalIndex =
                        caseStudies
                          .slice(0, index)
                          .reduce((sum, s) => sum + s.metrics.length, 0) +
                        metricIndex;
                      return (
                        <div
                          key={metricIndex}
                          className="metric-item flex flex-col gap-1"
                        >
                          <div
                            ref={(el) => {
                              metricValueRefs.current[globalIndex] = el;
                            }}
                            className={`metric-value text-2xl md:text-[20px] ${jetBrainsMono.className}`}
                            data-value={metric.value}
                          >
                            {(() => {
                              // Show initial value for animatable numbers, original for non-animatable
                              if (
                                metric.value.includes("→") ||
                                metric.value.startsWith("#") ||
                                metric.value.includes("AED")
                              ) {
                                return metric.value;
                              }
                              if (metric.value.includes("%")) return "0%";
                              if (metric.value.includes("X")) {
                                if (metric.value.includes(".")) return "0.0X";
                                return "0X";
                              }
                              if (metric.value.includes("+")) return "0+";
                              return "0";
                            })()}
                          </div>
                          <div
                            className={`text-sm md:text-[16px] text-muted-foreground ${geistSans.className}`}
                          >
                            {metric.label}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Decorative element */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            ))}
          </div>

          {/* View All Link */}
          <div ref={linkRef} className="mt-12 flex justify-center">
            <Link
              href="/case-studies"
              className={`group inline-flex items-center gap-2 text-primary font-medium hover:text-primary/80 transition-colors ${geistSans.className} text-base md:text-lg`}
            >
              View All Case Studies
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
