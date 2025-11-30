"use client";

import { useEffect, useRef } from "react";
import { Geist, JetBrains_Mono } from "next/font/google";
import Link from "next/link";
import { 
  Instagram, 
  Linkedin, 
  Facebook, 
  Youtube,
  Mail,
  Phone
} from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const FooterComponent = () => {
  const footerRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!footerRef.current) return;

    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set(sectionRefs.current.filter(Boolean), {
        opacity: 0,
        y: 30,
      });

      // Create timeline with scroll trigger
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 85%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
        defaults: { ease: "power3.out" },
      });

      // Animate sections with stagger
      sectionRefs.current.forEach((section, index) => {
        if (section) {
          tl.to(
            section,
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
            },
            index === 0 ? 0 : "-=0.4"
          );
        }
      });
    });

    return () => ctx.revert();
  }, []);

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms & Conditions", href: "/terms-conditions" },
  ];

  const services = [
    "Performance Marketing",
    "Social Media",
    "SEO",
    "Web Development",
    "App Development",
    "Branding",
    "Real Estate Marketing",
    "E-commerce Solutions",
  ];

  const socialLinks = [
    { name: "Instagram", icon: Instagram, href: "#" },
    { name: "LinkedIn", icon: Linkedin, href: "#" },
    { name: "Facebook", icon: Facebook, href: "#" },
    { name: "TikTok", icon: Youtube, href: "#" }, // Using Youtube icon as placeholder for TikTok
    { name: "YouTube", icon: Youtube, href: "#" },
  ];

  return (
    <footer
      ref={footerRef}
      className="w-full bg-background border-t border-border"
    >
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 lg:gap-16">
          {/* Brand Section */}
          <div
            ref={(el) => {
              sectionRefs.current[0] = el;
            }}
            className="space-y-4"
          >
            <h3
              className={`text-2xl md:text-3xl tracking-tight ${geistSans.className}`}
            >
              Brandora Creations
            </h3>
            <p
              className={`text-sm md:text-[16px] text-muted-foreground leading-relaxed ${geistSans.className}`}
            >
              Digital Marketing & Creative Agency in Dubai
            </p>
          </div>

          {/* Quick Links Section */}
          <div
            ref={(el) => {
              sectionRefs.current[1] = el;
            }}
            className="space-y-4"
          >
            <h4
              className={`text-lg font-semibold tracking-tight mb-4 ${geistSans.className}`}
            >
              Quick Links
            </h4>
            <div className="flex flex-wrap items-center gap-x-2 gap-y-2">
              {quickLinks.map((link, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Link
                    href={link.href}
                    className={`group text-sm md:text-base text-muted-foreground hover:text-foreground transition-all duration-300 whitespace-nowrap ${jetBrainsMono.className}`}
                  >
                    <span className="group-hover:translate-x-0.5 inline-block transition-transform duration-300">
                      {link.name}
                    </span>
                  </Link>
                  {index < quickLinks.length - 1 && (
                    <span className="text-muted-foreground/30">{","}</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Services Section */}
          <div
            ref={(el) => {
              sectionRefs.current[2] = el;
            }}
            className="space-y-4"
          >
            <h4
              className={`text-lg font-semibold tracking-tight mb-4 ${geistSans.className}`}
            >
              Services
            </h4>
            <div className="flex flex-wrap items-center gap-x-2 gap-y-2">
              {services.map((service, index) => (
                <div key={index} className="flex items-center gap-2">
                  <a
                    href="#"
                    className={`group text-sm md:text-base text-muted-foreground hover:text-foreground transition-all duration-300 whitespace-nowrap ${jetBrainsMono.className}`}
                  >
                    <span className="group-hover:translate-x-0.5 inline-block transition-transform duration-300">
                      {service}
                    </span>
                  </a>
                  {index < services.length - 1 && (
                    <span className="text-muted-foreground/30">{","}</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Contact Section */}
          <div
            ref={(el) => {
              sectionRefs.current[3] = el;
            }}
            className="space-y-4"
          >
            <h4
              className={`text-lg font-semibold tracking-tight mb-4 ${geistSans.className}`}
            >
              Contact
            </h4>
            <div className="space-y-3">
              <a
                href="mailto:info@brandoracreations.com"
                className={`group flex items-center gap-3 text-sm md:text-base text-muted-foreground hover:text-foreground transition-all duration-300 ${jetBrainsMono.className}`}
              >
                <Mail className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                <span>info@brandoracreations.com</span>
              </a>
              <a
                href="tel:+971"
                className={`group flex items-center gap-3 text-sm md:text-base text-muted-foreground hover:text-foreground transition-all duration-300 ${jetBrainsMono.className}`}
              >
                <Phone className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                <span>+971 56 565 6565</span>
              </a>
            </div>

            {/* Social Media Icons */}
            <div className="pt-4">
              <h5
                className={`text-sm font-medium mb-3 text-muted-foreground ${geistSans.className}`}
              >
                Follow Us
              </h5>
              <div className="flex flex-wrap items-center gap-2">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      aria-label={social.name}
                      className="group relative p-2 rounded-md bg-muted hover:bg-foreground hover:text-background transition-all duration-300"
                    >
                      <Icon className="w-4 h-4 md:w-5 md:h-5 group-hover:scale-110 transition-transform duration-300" />
                      <span className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 bg-foreground text-background text-xs px-2 py-1 rounded whitespace-nowrap transition-opacity duration-300 pointer-events-none">
                        {social.name}
                      </span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div
          ref={(el) => {
            sectionRefs.current[4] = el;
          }}
          className="mt-12 md:mt-16 pt-8 border-t border-border"
        >
          <p
            className={`text-center text-sm md:text-base text-muted-foreground ${jetBrainsMono.className}`}
          >
            Copyright © 2025 Brandora Creations. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;