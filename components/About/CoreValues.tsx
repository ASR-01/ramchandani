  'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { Geist } from 'next/font/google';
import { ArrowRight, Target, Lightbulb, Eye, Zap, Handshake } from 'lucide-react';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

interface BentoGridItemProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
  size?: 'small' | 'medium' | 'large';
}

const BentoGridItem = ({
  title,
  description,
  icon,
  className,
  size = 'small',
}: BentoGridItemProps) => {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring' as const, damping: 25 },
    },
  };

  return (
    <motion.div
      variants={variants}
      className={cn(
        'group border-primary/10 bg-card hover:border-primary/30 relative flex h-full cursor-pointer flex-col justify-between overflow-hidden rounded-xl border px-6 pt-6 pb-10 shadow-md transition-all duration-500 hover:shadow-lg',
        className,
      )}
    >
      <div className="absolute top-0 -right-1/2 z-0 size-full cursor-pointer bg-[linear-gradient(to_right,#3d16165e_1px,transparent_1px),linear-gradient(to_bottom,#3d16165e_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] bg-[size:24px_24px]"></div>
    
      <div className="relative z-10 flex h-full flex-col justify-between">
        <div>
          {/* <div className="bg-primary/10 text-primary shadow-primary/10 group-hover:bg-primary/20 group-hover:shadow-primary/20 mb-4 flex h-12 w-12 items-center justify-center rounded-full shadow transition-all duration-500">
            {icon}
          </div> */}
          <h3 className={cn('mb-2 text-xl md:text-2xl tracking-tight', geistSans.className)}>
            {title}
          </h3>
          <p className={cn('text-muted-foreground text-base md:text-[16px] leading-relaxed', geistSans.className)}>
            {description}
          </p>
        </div>
        <div className="text-primary mt-4 flex items-center text-sm">
          <span className="mr-1">Learn more</span>
          <ArrowRight className="size-4 transition-all duration-500 group-hover:translate-x-2" />
        </div>
      </div>
      <div className="from-primary to-primary/30 absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r blur-2xl transition-all duration-500 group-hover:blur-lg" />
    </motion.div>
  );
};

const coreValues = [
  {
    title: 'Results-Driven Excellence',
    description:
      "We're obsessed with performance. Every strategy, every creative decision, every optimization is focused on delivering tangible business outcomes.",
    icon: <Target className="size-6" />,
    size: 'large' as const,
  },
  {
    title: 'Innovation & Adaptation',
    description:
      'The digital landscape never stops evolving—neither do we. We stay ahead of trends, test new platforms, and constantly refine our approach.',
    icon: <Lightbulb className="size-6" />,
    size: 'medium' as const,
  },
  {
    title: 'Radical Transparency',
    description:
      'No smoke and mirrors. No inflated metrics. We provide honest insights, clear reporting, and straightforward communication always.',
    icon: <Eye className="size-6" />,
    size: 'medium' as const,
  },
  {
    title: 'Speed with Precision',
    description:
      'We move fast without cutting corners. Agile execution meets meticulous quality control in everything we deliver.',
    icon: <Zap className="size-6" />,
    size: 'small' as const,
  },
  {
    title: 'Partnership Mentality',
    description:
      'Your success is our success. We invest in understanding your business as deeply as you do, becoming true partners in your growth journey.',
    icon: <Handshake className="size-6" />,
    size: 'large' as const,
  },
];

export default function CoreValues() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  return (
    <section className="w-full py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className={cn('text-4xl md:text-5xl mb-12 tracking-tight', geistSans.className)}
          >
            Our Core Values
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {coreValues.map((value, i) => (
              <BentoGridItem
                key={i}
                title={value.title}
                description={value.description}
                icon={value.icon}
                size={value.size}
                className={cn(
                  value.size === 'large'
                    ? 'col-span-4'
                    : value.size === 'medium'
                      ? 'col-span-3'
                      : 'col-span-2',
                  'h-full',
                )}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

