'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { Geist } from 'next/font/google';
import Link from 'next/link';
import { ArrowRight, TrendingUp, Share2, Search, Code, Smartphone, Palette, Home, ShoppingCart } from 'lucide-react';
import { getAllServices } from '@/lib/services-data';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

interface BentoGridItemProps {
  title: string;
  headline: string;
  overview: string;
  icon: React.ReactNode;
  href: string;
  className?: string;
  size?: 'small' | 'medium' | 'large';
}

const BentoGridItem = ({
  title,
  headline,
  overview,
  icon,
  href,
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
    <motion.div variants={variants} className={cn('h-full', className)}>
      <Link
        href={href}
        className="group border-primary/10 bg-card hover:border-primary/30 relative flex h-full cursor-pointer flex-col justify-between overflow-hidden rounded-xl border px-6 pt-6 pb-10 shadow-md transition-all duration-500 hover:shadow-lg"
      >
        <div className="absolute top-0 -right-1/2 z-0 size-full cursor-pointer bg-[linear-gradient(to_right,#3d16165e_1px,transparent_1px),linear-gradient(to_bottom,#3d16165e_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] bg-[size:24px_24px]"></div>
      
        <div className="relative z-10 flex h-full flex-col justify-between">
          <div>
            {/* <div className="bg-primary/10 text-primary shadow-primary/10 group-hover:bg-primary/20 group-hover:shadow-primary/20 mb-4 flex h-12 w-12 items-center justify-center rounded-full shadow transition-all duration-500">
              {icon}
            </div> */}
            <h3 className={cn('mb-2 text-xl md:text-2xl  tracking-tight', geistSans.className)}>
              {title}
            </h3>
            <p className={cn('text-base md:text-[16px] leading-relaxed text-muted-foreground mb-3', geistSans.className)}>
              {headline}
            </p>
            <p className={cn('text-sm md:text-[14px] leading-relaxed text-muted-foreground mb-4 line-clamp-3', geistSans.className)}>
              {overview}
            </p>
          </div>
          <div className="text-primary mt-4 flex items-center text-sm">
            <span className="mr-1">Learn more</span>
            <ArrowRight className="size-4 transition-all duration-500 group-hover:translate-x-2" />
          </div>
        </div>
        <div className="from-primary to-primary/30 absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r blur-2xl transition-all duration-500 group-hover:blur-lg" />
      </Link>
    </motion.div>
  );
};

// Icon mapping for services
const serviceIcons: Record<string, React.ReactNode> = {
  'performance-marketing': <TrendingUp className="size-6" />,
  'social-media-management': <Share2 className="size-6" />,
  'seo-local-seo': <Search className="size-6" />,
  'website-design-development': <Code className="size-6" />,
  'mobile-app-development': <Smartphone className="size-6" />,
  'branding-creative-design': <Palette className="size-6" />,
  'real-estate-marketing': <Home className="size-6" />,
  'e-commerce-growth': <ShoppingCart className="size-6" />,
};

// Size distribution for 8 services
const serviceSizes: ('small' | 'medium' | 'large')[] = [
  'large',
  'medium',
  'medium',
  'large',
  'small',
  'medium',
  'medium',
  'large',
];

const ServicesGrid = () => {
  const services = getAllServices();

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
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {services.map((service, i) => (
              <BentoGridItem
                key={service.id}
                title={service.name}
                headline={service.headline}
                overview={service.overview}
                icon={serviceIcons[service.id] || <Code className="size-6" />}
                href={`/services/${service.id}`}
                size={serviceSizes[i] || 'medium'}
                className={cn(
                  serviceSizes[i] === 'large'
                    ? 'col-span-4'
                    : serviceSizes[i] === 'medium'
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
};

export default ServicesGrid;

