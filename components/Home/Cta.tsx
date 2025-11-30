"use client";

import { cn } from "@/lib/utils";
import { ReactNode, useEffect, useRef } from "react";
import { JetBrains_Mono, Geist } from "next/font/google";
import { FlowButton } from "@/components/ui/flow-button";

interface HorizontalMarqueeProps {
  children: ReactNode;
  pauseOnHover?: boolean;
  reverse?: boolean;
  className?: string;
  speed?: number;
}

const jetBrainsMono = JetBrains_Mono({
 variable: "--font-jetbrains-mono",
 subsets: ["latin"],
 weight: ["400", "500", "600", "700"],
}) ;

const geistSans = Geist({
 variable: "--font-geist-sans",
 subsets: ["latin"],
 weight: ["400", "500", "600", "700"],
});
function HorizontalMarquee({
  children,
  pauseOnHover = false,
  reverse = false,
  className,
  speed = 40,
}: HorizontalMarqueeProps) {
  return (
    <div
      className={cn(
        "group flex overflow-hidden",
        className
      )}
      style={
        {
          "--duration": `${speed}s`,
        } as React.CSSProperties
      }
    >
      <div
        className={cn(
          "flex shrink-0 animate-marquee",
          reverse && "[animation-direction:reverse]",
          pauseOnHover && "group-hover:[animation-play-state:paused]"
        )}
      >
        {children}
      </div>
      <div
        className={cn(
          "flex shrink-0 animate-marquee",
          reverse && "[animation-direction:reverse]",
          pauseOnHover && "group-hover:[animation-play-state:paused]"
        )}
        aria-hidden="true"
      >
        {children}
      </div>
    </div>
  );
}

const marqueeItems = [
  "Digital Marketing Agencies",
  "Founders & Execs",
  "E-commerce Businesses",
  "Health & Wellness Brands",
  "Real Estate Agents",
];

const CtaSection = () => {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const marqueeContainer = marqueeRef.current;
    if (!marqueeContainer) return;

    const updateOpacity = () => {
      const items = marqueeContainer.querySelectorAll('.marquee-item-horizontal');
      const containerRect = marqueeContainer.getBoundingClientRect();
      const centerX = containerRect.left + containerRect.width / 2;

      items.forEach((item) => {
        const itemRect = item.getBoundingClientRect();
        const itemCenterX = itemRect.left + itemRect.width / 2;
        const distance = Math.abs(centerX - itemCenterX);
        const maxDistance = containerRect.width / 2;
        const normalizedDistance = Math.min(distance / maxDistance, 1);
        const opacity = 1 - normalizedDistance * 0.75;
        (item as HTMLElement).style.opacity = opacity.toString();
      });
    };

    const animationFrame = () => {
      updateOpacity();
      requestAnimationFrame(animationFrame);
    };

    const frame = requestAnimationFrame(animationFrame);

    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div className="h-fit  bg-background text-foreground flex py-20 md:justify-center px-4 overflow-hidden">
      <div className="w-full animate-fade-in-up">
        <div className="flex flex-col gap-12 lg:gap-16">
          {/* Top Content */}
          <div className="space-y-8 md:max-w-3xl mx-0 md:mx-auto text-left md:text-center  ">
            <h1 className={`text-4xl md:text-6xl lg:text-7xl leading-tight tracking-tight text-foreground animate-fade-in-up [animation-delay:200ms] ${geistSans.className}`}>
            Ready to Transform Your Business?
            </h1>
            <p className={`text-sm  md:text-[16px] text-muted-foreground leading-relaxed animate-fade-in-up [animation-delay:400ms] ${geistSans.className}`}>
            Book a free 30-minute strategy session with our experts. We&apos;ll analyze your current
marketing, identify growth opportunities, and show you exactly how we can help.

            </p>
            <div className="flex flex-row gap-3 md:gap-4 justify-start md:justify-center animate-fade-in-up [animation-delay:600ms] flex-wrap md:flex-nowrap">
              <FlowButton text="Contact Us" href="/contact" />
              <FlowButton text="Book a Free Strategy Session" href="https://calendly.com/nandaniramchandani3/30min?month=2025-11" />
            </div>
          </div>

          {/* Bottom Marquee */}
          <div ref={marqueeRef} className="relative w-full animate-fade-in-up [animation-delay:800ms]">
            <div className="relative">
              <HorizontalMarquee speed={30}>
                {marqueeItems.map((item, idx) => (
                  <div
                    key={idx}
                    className={`text-4xl md:text-5xl lg:text-5xl text-black/30  font-light tracking-tight px-12 marquee-item-horizontal whitespace-nowrap ${jetBrainsMono.className}`}
                  >
                    {item}
                  </div>
                ))}
              </HorizontalMarquee>
              
              {/* Left vignette */}
                <div className={`pointer-events-none absolute top-0 left-0 bottom-0 w-64 bg-gradient-to-r from-background via-background/50 to-transparent z-10 ${geistSans.className}`}></div>
              
              {/* Right vignette */}
              <div className={`pointer-events-none absolute top-0 right-0 bottom-0 w-64 bg-gradient-to-l from-background via-background/50 to-transparent z-10 ${geistSans.className}`}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CtaSection