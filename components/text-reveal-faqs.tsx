'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { motion } from "framer-motion";
import Link from 'next/link';
import { Geist, JetBrains_Mono } from "next/font/google";

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


export default function FAQs() {
  const faqItems = [
    {
      id: 'item-1',
      question: '1. Discovery & Strategy',
      answer: 'We dive deep into your business, audience, competitors, and goals to craft a winning roadmap.',
    },
    {
      id: 'item-2',
      question: '2. Creative Execution',
      answer: 'Our team brings the strategy to life with compelling content, stunning design, and technical excellence.',
    },
    {
      id: 'item-3',
      question: '3. Launch & Optimize',
      answer: 'We deploy campaigns, monitor performance, and continuously optimize for better results.',
    },
    {
      id: 'item-4',
      question: '4. Scale & Grow',
      answer: 'Once we find what works, we scale aggressively to maximize your growth potential.',
    },
    {
      id: 'item-5',
      question: '5. Feedback & Iteration',
      answer: 'We gather feedback, analyze results, and refine strategies to keep you ahead of the competition.',
    },
  ];


  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-8 md:gap-12">
          <div className="md:col-span-2">
            <h2 className={`text-foreground text-5xl  ${geistSans.className}`}>How We Work</h2>
            <p className={`text-muted-foreground mt-4 text-balance text-lg md:text-[16px] ${geistSans.className}`}>
              Everything you need to know about Brandora Creations
            </p>
            <p className={`text-muted-foreground mt-6 hidden md:block md:text-[16px] ${geistSans.className}`}>
              Can’t find what you’re looking for? Reach out to our{' '}
              <Link
                href="#"
                className={`text-primary font-medium hover:underline md:text-[16px] ${geistSans.className}`}
              >
                Brandora Creations support team
              </Link>{' '}
              for assistance. Contact us today to get started.
            </p>
          </div>

          <div className="md:col-span-3">
            <Accordion
              type="single"
              collapsible>
              {faqItems.map((item) => (
                <AccordionItem
                  key={item.id}
                  value={item.id}
                  className="border-b border-gray-200 dark:border-gray-600">
                  <AccordionTrigger className={`cursor-pointer text-base font-medium hover:no-underline ${jetBrainsMono.className}`}>{item.question}</AccordionTrigger>
                  <AccordionContent>
                    <BlurredStagger text={item.answer} />
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  )
}

 
export const BlurredStagger = ({
  text = "built by ruixen.com",
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