"use client";

import { useEffect, useRef } from "react";
import { Geist } from "next/font/google";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FileText } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const TermsConditions = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

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
              <FileText className="w-8 h-8 text-primary" />
            </div>
            <h1
              ref={titleRef}
              className={`text-4xl md:text-6xl tracking-tight ${geistSans.className}`}
            >
              Terms & Conditions
            </h1>
          </div>

          {/* Content */}
          <div ref={contentRef} className="space-y-8">
            <div>
              <p
                className={`text-base md:text-[16px] leading-relaxed text-muted-foreground ${geistSans.className}`}
              >
                By accessing Brandora Creations&apos; website, you agree to our terms of service. All content,
                designs, and branding materials are owned by Brandora Creations and may not be copied or
                distributed without consent.
              </p>
            </div>

            <div>
              <h2
                className={`text-2xl md:text-3xl mb-4 tracking-tight ${geistSans.className}`}
              >
                Project Terms
              </h2>
              <p
                className={`text-base md:text-[16px] leading-relaxed text-muted-foreground ${geistSans.className}`}
              >
                Project timelines, pricing, and deliverables will be defined in the service agreement shared
                with the client before project initiation. Payments must be made according to the billing
                schedule provided.
              </p>
            </div>

            <div>
              <h2
                className={`text-2xl md:text-3xl mb-4 tracking-tight ${geistSans.className}`}
              >
                Service Modifications
              </h2>
              <p
                className={`text-base md:text-[16px] leading-relaxed text-muted-foreground ${geistSans.className}`}
              >
                Brandora Creations reserves the right to update, modify, or discontinue services or website
                content at any time.
              </p>
            </div>

            <div className="bg-muted/30 border border-border rounded-xl p-6 md:p-8">
              <h3
                className={`text-xl md:text-2xl mb-4 tracking-tight ${geistSans.className}`}
              >
                Questions?
              </h3>
              <p
                className={`text-base md:text-[16px] leading-relaxed text-muted-foreground ${geistSans.className}`}
              >
                If you have any questions about these Terms & Conditions, please contact us at{" "}
                <a
                  href="mailto:info@brandoracreations.com"
                  className="text-primary hover:underline"
                >
                  info@brandoracreations.com
                </a>
              </p>
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

export default TermsConditions;

