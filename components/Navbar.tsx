"use client";

import * as React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";

import {Geist} from "next/font/google";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

import { useIsMobile } from "@/hooks/use-mobile";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { FlowButton } from "./ui/flow-button";

const services: { title: string; href: string; description: string }[] = [
  {
    title: "Performance Marketing",
    href: "/services/performance-marketing",
    description: "Drive results with data-driven performance marketing strategies.",
  },
  {
    title: "Social Media Management",
    href: "/services/social-media-management",
    description: "Elevate your social presence with expert strategy and content creation.",
  },
  {
    title: "SEO & LOCAL SEO",
    href: "/services/seo-local-seo",
    description: "Boost your online visibility with tailored SEO and local search strategies.",
  },
  {
    title: "WEBSITE DESIGN & DEVELOPMENT",
    href: "/services/website-design-development",
    description: "Build stunning, high-performing websites that convert visitors into customers.",
  },
  {
    title: "MOBILE APP DEVELOPMENT",
    href: "/services/mobile-app-development",
    description: "Create mobile apps that enhance user engagement and drive business growth.",
  },
  {
    title: "BRANDING & CREATIVE DESIGN",
    href: "/services/branding-creative-design",
    description: "Define your brand identity with custom logo design and creative content.",
  },
  {
    title: "REAL ESTATE MARKETING",
    href: "/services/real-estate-marketing",
    description: "Comprehensive digital marketing strategies tailored for real estate businesses.",
  },
  {
    title: "E-COMMERCE GROWTH",
    href: "/services/e-commerce-growth",
    description: "Grow your online store with integrated marketing and optimization strategies.",
  },
];

export function Navbar() {
  const isMobile = useIsMobile();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    if (!mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setServicesOpen(false);
    document.body.style.overflow = 'unset';
  };

  return (
    <nav className="border-b z-50 fixed top-0 left-0 w-full flex justify-between items-center gap-2 px-4 md:px-10 py-2 bg-white dark:bg-black border-gray-200 dark:border-gray-800">
      <Link 
        href="/" 
        className={`flex items-center gap-2 px-2 md:px-4 py-2 text-sm font-medium ${geistSans.className}`}
        onClick={closeMobileMenu}
      >
        <Image src="/logo.svg" alt="Brandora Creations" width={100} height={100} className="w-20 md:w-24 h-auto" />
      </Link>
      
      {/* Desktop Navigation */}
      <div className="hidden md:flex mx-auto px-4">
        <NavigationMenu viewport={isMobile} className="w-full">
          <NavigationMenuList className="flex-wrap justify-center gap-2">
            {/* Home */}
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <Link href="/" className="text-black dark:text-white font-medium">HOME</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            {/* About */}
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <Link href="/about" className="text-black dark:text-white font-medium">ABOUT</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            {/* Services */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-black dark:text-white font-medium">
                <Link href="/services">SERVICES</Link>
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-2 sm:w-[400px] md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-white dark:bg-black">
                  {services.map((service) => (
                    <ListItem
                      key={service.title}
                      title={service.title}
                      href={service.href}
                    >
                      {service.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <Link href="/webapp" className="text-black dark:text-white font-medium">WEB & APP DESIGN PAGE</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* Desktop Contact Button */}
      <div className="hidden md:block">
        <FlowButton href="/contact">CONTACT US</FlowButton>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center gap-2">
        <FlowButton href="/contact" className="text-xs px-3 py-1.5">CONTACT</FlowButton>
        <button
          onClick={toggleMobileMenu}
          className="p-2 rounded-md hover:bg-muted transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <>
          <div 
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={closeMobileMenu}
          />
          <div className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white dark:bg-black border-l border-gray-200 dark:border-gray-800 z-50 transform transition-transform duration-300 ease-in-out translate-x-0 overflow-y-auto shadow-xl">
            <div className="flex flex-col h-full">
              {/* Mobile Menu Header */}
              <div className="flex items-center justify-between p-4 border-b">
                <Link 
                  href="/" 
                  className={`flex items-center gap-2 ${geistSans.className}`}
                  onClick={closeMobileMenu}
                >
                  <Image src="/logo.svg" alt="Brandora Creations" width={80} height={80} />
                </Link>
                <button
                  onClick={closeMobileMenu}
                  className="p-2 rounded-md hover:bg-muted transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Mobile Menu Items */}
              <div className="flex flex-col p-4 space-y-1">
                <Link
                  href="/"
                  onClick={closeMobileMenu}
                  className={`px-4 py-3 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-black dark:text-white font-medium ${geistSans.className}`}
                >
                  HOME
                </Link>
                
                <Link
                  href="/about"
                  onClick={closeMobileMenu}
                  className={`px-4 py-3 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-black dark:text-white font-medium ${geistSans.className}`}
                >
                  ABOUT
                </Link>

                {/* Services Dropdown */}
                <div>
                  <button
                    onClick={() => setServicesOpen(!servicesOpen)}
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-black dark:text-white font-medium ${geistSans.className}`}
                  >
                    <span>SERVICES</span>
                    <ChevronDown 
                      className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} 
                    />
                  </button>
                  {servicesOpen && (
                    <div className="pl-4 mt-1 space-y-1">
                      {services.map((service) => (
                        <Link
                          key={service.title}
                          href={service.href}
                          onClick={closeMobileMenu}
                          className={`block px-4 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-sm text-black dark:text-white ${geistSans.className}`}
                        >
                          <div className="font-medium">{service.title}</div>
                          <div className="text-xs text-gray-600 dark:text-gray-400 mt-0.5">
                            {service.description}
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                <Link
                  href="/webapp"
                  onClick={closeMobileMenu}
                  className={`px-4 py-3 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-black dark:text-white font-medium ${geistSans.className}`}
                >
                  WEB & APP DESIGN PAGE
                </Link>

                <div className="pt-4 mt-4 border-t">
                  <FlowButton 
                    href="/contact" 
                    className="w-full justify-center"
                    onClick={closeMobileMenu}
                  >
                    CONTACT US
                  </FlowButton>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </nav>
  );
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href} className="block p-3 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
          <div className={`text-sm leading-none font-medium text-black dark:text-white ${geistSans.className}`}>{title}</div>
          <p className={`text-gray-600 dark:text-gray-400 line-clamp-2 text-sm leading-snug mt-1 ${geistSans.className}`}>
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
