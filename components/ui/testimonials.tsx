"use client";

import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { User } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Geist, JetBrains_Mono } from "next/font/google";
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

function Testimonials() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const testimonials = [
    {
      rating: "⭐⭐⭐⭐⭐",
      quote: "Brandora transformed our digital presence completely. Within 3 months, we were generating more leads than we could handle. Their team is professional, responsive, and delivers real results.",
      name: "Ahmed Al Mansouri",
      title: "CEO",
      company: "Skyline Properties Dubai",
      initials: "AM",
    },
    {
      rating: "⭐⭐⭐⭐⭐",
      quote: "Finally, an agency that understands both creativity and performance. Our social media engagement increased 5X and our online sales tripled. Couldn't be happier!",
      name: "Sara Khan",
      title: "Founder",
      company: "Luxe Fashion Store",
      initials: "SK",
    },
    {
      rating: "⭐⭐⭐⭐⭐",
      quote: "Working with Brandora has been game-changing. They rebuilt our website, optimized our SEO, and now we're ranking above competitors who've been around for years.",
      name: "David Richardson",
      title: "Marketing Director",
      company: "Gulf Medical Center",
      initials: "DR",
    },
  ];

  useEffect(() => {
    if (!api) {
      return;
    }

    setTimeout(() => {
      if (api.selectedScrollSnap() + 1 === api.scrollSnapList().length) {
        setCurrent(0);
        api.scrollTo(0);
      } else {
        api.scrollNext();
        setCurrent(current + 1);
      }
    }, 4000);
  }, [api, current]);

  return (
    <div className="w-full">
      <div className="container mx-auto">
        <div className="flex flex-col gap-10">
          <h2 className={`text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular text-left ${geistSans.className}`}>
            Trusted by thousands of businesses worldwide
          </h2>
          <Carousel setApi={setApi} className="w-full">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem className="lg:basis-1/2" key={index}>
                  <div className="bg-muted rounded-md h-full lg:col-span-2 p-6 aspect-video flex justify-between flex-col">
                    <User className="w-8 h-8 stroke-1" />
                    <div className="flex flex-col gap-4">
                      <div className="flex flex-col gap-2">
                        <div className="text-lg">{testimonial.rating}</div>
                        <p className={`text-muted-foreground max-w-xs text-base ${jetBrainsMono.className}`}>
                          {testimonial.quote}
                        </p>
                      </div>
                      <p className={`flex flex-row gap-2 text-sm items-center ${jetBrainsMono.className}`}>
                        <span className="text-muted-foreground">By</span>{" "}
                        <Avatar className="h-6 w-6">
                          <AvatarImage src="" />
                          <AvatarFallback>{testimonial.initials}</AvatarFallback>
                        </Avatar>
                        <span className={`${jetBrainsMono.className}`}>
                          {testimonial.name}, {testimonial.title}, {testimonial.company}
                        </span>
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export { Testimonials };
