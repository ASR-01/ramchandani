'use client';

import { ArrowRight } from 'lucide-react';
import { ReactNode } from 'react';
import Link from 'next/link';

interface FlowButtonProps {
  text?: string;
  children?: ReactNode;
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  className?: string;
}

export function FlowButton({ 
  text = "Modern Button", 
  children,
  href,
  onClick,
  type = 'button',
  disabled = false,
  className = ""
}: FlowButtonProps) {
  const buttonClasses = `group relative flex items-center gap-1 overflow-hidden rounded-[100px] border-[1.5px] border-[#333333]/40 bg-transparent px-8 py-3 text-sm font-semibold text-[#111111] cursor-pointer transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] hover:border-transparent hover:text-white hover:rounded-[12px] active:scale-[0.95] disabled:opacity-50 disabled:cursor-not-allowed ${className}`;

  const buttonContent = (
    <>
      {/* Left arrow (arr-2) */}
      <ArrowRight 
        className="absolute w-4 h-4 left-[-25%] stroke-[#111111] fill-none z-[9] group-hover:left-4 group-hover:stroke-white transition-all duration-[800ms] ease-[cubic-bezier(0.34,1.56,0.64,1)]" 
      />
      {/* Text */}
      <span className="relative z-[1] -translate-x-3 group-hover:translate-x-3 transition-all duration-[800ms] ease-out">
        {children || text}
      </span>
      {/* Circle */}
      <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-[#111111] rounded-[50%] opacity-0 group-hover:w-[220px] group-hover:h-[220px] group-hover:opacity-100 transition-all duration-[800ms] ease-[cubic-bezier(0.19,1,0.22,1)]"></span>
      {/* Right arrow (arr-1) */}
      <ArrowRight 
        className="absolute w-4 h-4 right-4 stroke-[#111111] fill-none z-[9] group-hover:right-[-25%] group-hover:stroke-white transition-all duration-[800ms] ease-[cubic-bezier(0.34,1.56,0.64,1)]" 
      />
    </>
  );

  if (href) {
    // Check if it's an external link
    const isExternal = href.startsWith('http://') || href.startsWith('https://');
    
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={buttonClasses}
        >
          {buttonContent}
        </a>
      );
    } else {
      // Internal link - use Next.js Link
      return (
        <Link
          href={href}
          className={buttonClasses}
        >
          {buttonContent}
        </Link>
      );
    }
  }

  return (
    <button 
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={buttonClasses}
    >
      {buttonContent}
    </button>
  );
}

