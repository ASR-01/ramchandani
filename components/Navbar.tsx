"use client";

import * as React from "react";
import Link from "next/link";

import {Geist} from "next/font/google";
import Image from "next/image";

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
    title: " E-COMMERCE GROWTH",
    href: "/services/e-commerce-growth",
    description: "Grow your online store with integrated marketing and optimization strategies.",
  },
];

export function Navbar() {
  const isMobile = useIsMobile();

  return (
    <nav className="border-b z-50 absolute top-0 left-0 w-full flex justify-between items-center gap-2 px-10 py-2">
      <Link href="/" className={`flex items-center gap-2 px-4 py-2 text-sm font-medium  ${geistSans.className}`}>
       <Image src="/logo.svg" alt="Brandora Creations" width={100} height={100} />
      </Link>
      <div className="hidden md:block mx-auto px-4">
        <NavigationMenu viewport={isMobile} className="w-full ">
          <NavigationMenuList className="flex-wrap justify-center gap-2">
            {/* Home */}
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <Link href="/">HOME</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            {/* About */}
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <Link href="/about">ABOUT</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            {/* Services */}
            <NavigationMenuItem>
              <NavigationMenuTrigger>
               <Link href="/services">SERVICES</Link>
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-2 sm:w-[400px] md:w-[500px] md:grid-cols-2 lg:w-[600px]">
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
                <Link href="/webapp">WEB & APP DESIGN PAGE</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div> 
      <FlowButton href="/contact" >CONTACT US</FlowButton>
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
        <Link href={href}>
          <div className={`text-sm leading-none font-medium ${geistSans.className}`}>{title}</div>
          <p className={`text-muted-foreground line-clamp-2 text-sm leading-snug ${geistSans.className}`}>
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
