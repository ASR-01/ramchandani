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

const packages = [
  {
    name: "E-commerce Store",
    price: "From AED 5,000",
    features: [
      "Product catalog setup",
      "Shopping cart and checkout",
      "Secure payment gateway integration",
      "Order & inventory management",
      "Customer accounts",
      "SEO foundation",
      "Mobile-optimized design",
      "Email & SMS notifications",
      "Shipping integrations",
    ],
    timeline: "2–3 weeks timeline",
  },
  {
    name: "Custom Web Application",
    price: "Starting from AED 15,000",
    features: [
      "Bespoke functionality",
      "Advanced dashboards & analytics",
      "Custom workflows",
      "API integrations",
      "User management system",
      "Cloud deployment",
      "Scalable architecture",
      "Full documentation",
    ],
    timeline: "4–10 weeks timeline",
  },
];

const DesignPackages = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Initialize refs array
    if (cardsRef.current.length !== packages.length) {
      cardsRef.current = Array(packages.length).fill(null);
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
            Design Packages
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {packages.map((pkg, index) => (
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
                    className={`text-2xl md:text-3xl mb-2 tracking-tight ${geistSans.className}`}
                  >
                    {pkg.name}
                  </h3>
                  <p
                    className={`text-2xl md:text-3xl font-bold text-primary mb-6 ${geistSans.className}`}
                  >
                    {pkg.price}
                  </p>
                  <ul className="space-y-3 mb-6">
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
                  <p
                    className={`text-base md:text-[16px] text-muted-foreground ${geistSans.className}`}
                  >
                    {pkg.timeline}
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

export default DesignPackages;

