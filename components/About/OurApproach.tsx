"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { motion } from "framer-motion";
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

const approachSteps = [
  {
    number: "1",
    title: "Deep Research & Insights",
    description: "We don't guess—we know. Comprehensive market research, competitor analysis, and audience profiling inform every decision.",
  },
  {
    number: "2",
    title: "Custom Strategy Development",
    description: "One-size-fits-all is one-size-fails-all. We craft bespoke strategies aligned with your unique business objectives.",
  },
  {
    number: "3",
    title: "Agile Execution",
    description: "Rapid implementation with continuous testing, learning, and optimization throughout the campaign lifecycle.",
  },
  {
    number: "4",
    title: "Transparent Reporting",
    description: "Clear dashboards, regular check-ins, and detailed analytics keep you informed and in control.",
  },
  {
    number: "5",
    title: "Continuous Improvement",
    description: "We never settle. Constant A/B testing, performance analysis, and strategic refinement ensure sustained growth.",
  },
];

const BlurredStagger = ({
  text = "",
}: {
  text: string;
}) => {
  const headingText = text;
 
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.015,
      },
    },
  };
 
  const letterAnimation = {
    hidden: {
      opacity: 0,
      filter: "blur(10px)",
    },
    show: {
      opacity: 1,
      filter: "blur(0px)",
    },
  };
 
  return (
    <>
      <div className="w-full">
        <motion.p
          variants={container}
          initial="hidden"
          animate="show"
          className={`text-base leading-relaxed break-words whitespace-normal ${geistSans.className}`}
        >
          {headingText.split("").map((char, index) => (
            <motion.span
              key={index}
              variants={letterAnimation}
              transition={{ duration: 0.3 }}
              className={`inline-block ${jetBrainsMono.className}`}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.p>
      </div>
    </>
  );
};

const OurApproach = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-8 md:gap-12">
          <div className="md:col-span-2">
            <h2 className={`text-foreground text-5xl  tracking-tight  ${geistSans.className}`}>Our Approach</h2>
            <p className={`text-muted-foreground mt-4 text-balance text-lg md:text-[16px] ${geistSans.className}`}>
              How We Deliver Excellence
            </p>
          </div>

          <div className="md:col-span-3">
            <Accordion
              type="single"
              collapsible>
              {approachSteps.map((step, index) => {
                const itemId = `item-${index + 1}`;
                return (
                  <AccordionItem
                    key={itemId}
                    value={itemId}
                    className="border-b border-gray-200 dark:border-gray-600">
                    <AccordionTrigger className={`cursor-pointer text-base font-medium hover:no-underline ${jetBrainsMono.className}`}>
                      Step {step.number}: {step.title}
                    </AccordionTrigger>
                    <AccordionContent>
                      <BlurredStagger text={step.description} />
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurApproach;

