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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {packages.map((pkg, index) => (
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
                          className={`flex items-start gap-3 text-sm md:text-[16px] text-muted-foreground leading-relaxed ${geistSans.className}`}
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

export default DesignPackages;

