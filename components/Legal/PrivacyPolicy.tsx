"use client";

import { useEffect, useRef } from "react";
import { Geist } from "next/font/google";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Shield, Mail } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const PrivacyPolicy = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const informationCollected = [
    "Name",
    "Email",
    "Phone number",
    "Business information",
    "Website usage data",
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set([titleRef.current, contentRef.current], {
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
        // Animate content
        .to(
          contentRef.current,
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
    <section ref={sectionRef} className="w-full py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20">
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <h1
              ref={titleRef}
              className={`text-4xl md:text-6xl tracking-tight ${geistSans.className}`}
            >
              Privacy Policy
            </h1>
          </div>

          {/* Content */}
          <div ref={contentRef} className="space-y-8">
            <div>
              <p
                className={`text-lg md:text-xl leading-relaxed text-muted-foreground ${geistSans.className}`}
              >
                At Brandora Creations, we value your privacy.
              </p>
            </div>

            <div>
              <p
                className={`text-base md:text-[16px] leading-relaxed text-muted-foreground mb-4 ${geistSans.className}`}
              >
                We collect and process personal data only to deliver our services, improve user experience,
                and communicate with you regarding your inquiries or projects.
              </p>
            </div>

            <div>
              <h2
                className={`text-2xl md:text-3xl mb-4 tracking-tight ${geistSans.className}`}
              >
                Information collected includes:
              </h2>
              <ul className="space-y-3">
                {informationCollected.map((item, index) => (
                  <li
                    key={index}
                    className={`flex items-start gap-3 text-base md:text-[16px] text-muted-foreground ${geistSans.className}`}
                  >
                    <span className="text-primary mt-1">●</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p
                className={`text-base md:text-[16px] leading-relaxed text-muted-foreground ${geistSans.className}`}
              >
                We do not sell or share your data with third parties, except for trusted service providers
                assisting in delivering our services.
              </p>
            </div>

            <div className="bg-muted/30 border border-border rounded-xl p-6 md:p-8">
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3
                    className={`text-xl md:text-2xl mb-2 tracking-tight ${geistSans.className}`}
                  >
                    Your Rights
                  </h3>
                  <p
                    className={`text-base md:text-[16px] leading-relaxed text-muted-foreground ${geistSans.className}`}
                  >
                    You can request deletion or modification of your data anytime by contacting:
                  </p>
                  <a
                    href="mailto:privacy@brandoracreations.com"
                    className={`text-base md:text-lg text-primary hover:underline mt-2 inline-block ${geistSans.className}`}
                  >
                    privacy@brandoracreations.com
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-border">
              <p
                className={`text-sm md:text-base text-muted-foreground ${geistSans.className}`}
              >
                Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;

