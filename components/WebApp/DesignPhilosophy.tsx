'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { Geist } from 'next/font/google';
import { ArrowRight, Users, Smartphone, Zap, TrendingUp, Accessibility } from 'lucide-react';

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
          <h4 className={cn('mb-2 text-xl md:text-2xl  tracking-tight', geistSans.className)}>
            {title}
          </h4>
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

const approaches = [
  {
    title: 'User-Centered Design',
    description:
      'We start by understanding your users—their needs, behaviors, pain points, and goals. Every design decision is rooted in real user insights.',
    icon: <Users className="size-6" />,
    size: 'large' as const,
  },
  {
    title: 'Mobile-First Thinking',
    description:
      'With 70%+ of web traffic coming from mobile devices, we design for small screens first, then scale up—ensuring flawless experiences everywhere.',
    icon: <Smartphone className="size-6" />,
    size: 'medium' as const,
  },
  {
    title: 'Performance Obsessed',
    description:
      'Beautiful design means nothing if it loads slowly. We optimize every asset for blazing-fast performance without visual compromise.',
    icon: <Zap className="size-6" />,
    size: 'medium' as const,
  },
  {
    title: 'Conversion Focused',
    description:
      "Every element is strategically placed to guide users toward taking action—whether that's making a purchase, booking a call, or signing up.",
    icon: <TrendingUp className="size-6" />,
    size: 'small' as const,
  },
  {
    title: 'Accessibility Matters',
    description:
      'We build inclusive experiences that work for everyone, following WCAG guidelines and best practices.',
    icon: <Accessibility className="size-6" />,
    size: 'large' as const,
  },
];

const DesignPhilosophy = () => {
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
            className={cn('text-4xl md:text-5xl mb-4 tracking-tight', geistSans.className)}
          >
            Our Design Philosophy
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            className={cn('text-xl md:text-2xl text-primary mb-12', geistSans.className)}
          >
            Beauty Meets Functionality
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
            className={cn('text-lg md:text-[16px] leading-relaxed text-muted-foreground mb-12 max-w-3xl', geistSans.className)}
          >
            Great design isn&apos;t just about aesthetics—it&apos;s about creating intuitive experiences that guide
            users toward desired actions. Every pixel, every interaction, every animation serves a
            purpose: to make your digital presence more effective.
          </motion.p>

          <div>
            <motion.h3
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
              className={cn('text-2xl md:text-3xl mb-8 tracking-tight', geistSans.className)}
            >
              Our Approach:
            </motion.h3>
            <motion.div
              className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
            >
              {approaches.map((approach, i) => (
                <BentoGridItem
                  key={i}
                  title={approach.title}
                  description={approach.description}
                  icon={approach.icon}
                  size={approach.size}
                  className={cn(
                    approach.size === 'large'
                      ? 'col-span-4'
                      : approach.size === 'medium'
                        ? 'col-span-3'
                        : 'col-span-2',
                    'h-full',
                  )}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignPhilosophy;

