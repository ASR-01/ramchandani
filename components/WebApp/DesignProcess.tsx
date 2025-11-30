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

const processSteps = [
  {
    step: 1,
    title: "Research & Discovery",
    items: [
      "Stakeholder interviews",
      "User research and personas",
      "Competitive analysis",
      "Technical requirements gathering",
      "Content audit",
      "Goal definition",
    ],
  },
  {
    step: 2,
    title: "Information Architecture",
    items: [
      "Sitemap creation",
      "User flow mapping",
      "Content strategy",
      "Navigation structure",
      "Wireframing",
    ],
  },
  {
    step: 3,
    title: "Visual Design",
    items: [
      "Mood boards and style exploration",
      "High-fidelity mockups",
      "Design system creation",
      "Interactive prototypes",
      "Responsive design variants",
      "Micro-interaction design",
    ],
  },
  {
    step: 4,
    title: "Development Handoff",
    items: [
      "Design specifications",
      "Asset preparation",
      "Developer collaboration",
      "Quality assurance",
      "Responsive testing",
    ],
  },
  {
    step: 5,
    title: "Launch & Iteration",
    items: [
      "User testing",
      "Analytics implementation",
      "Performance monitoring",
      "Continuous optimization",
      "A/B testing",
    ],
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

const DesignProcess = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-8 md:gap-12">
          <div className="md:col-span-2">
            <h2 className={`text-foreground text-5xl  tracking-tight  ${geistSans.className}`}>Our Design Process</h2>
            <p className={`text-muted-foreground mt-4 text-balance text-lg md:text-[16px] ${geistSans.className}`}>
              A comprehensive approach to creating exceptional web experiences
            </p>
          </div>

          <div className="md:col-span-3">
            <Accordion
              type="single"
              collapsible>
              {processSteps.map((process, index) => {
                const itemId = `item-${index + 1}`;
                const answerText = process.items.join(". ");
                return (
                  <AccordionItem
                    key={itemId}
                    value={itemId}
                    className="border-b border-gray-200 dark:border-gray-600">
                    <AccordionTrigger className={`cursor-pointer text-base font-medium hover:no-underline ${jetBrainsMono.className}`}>
                      Step {process.step}: {process.title}
                    </AccordionTrigger>
                    <AccordionContent>
                      <BlurredStagger text={answerText} />
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

export default DesignProcess;

