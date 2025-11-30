export interface ServiceFeature {
  title: string;
  items: string[];
}

export interface ServiceProcess {
  step: number;
  title: string;
  description: string;
}

export interface ServiceResult {
  text: string;
}

export interface Service {
  id: string;
  name: string;
  headline: string;
  overview: string;
  whatWeDeliver?: ServiceFeature[];
  ourProcess?: ServiceProcess[];
  results?: ServiceResult[];
  investment?: string;
  timeline?: string;
  perfectFor?: string[];
  whatMakesDifferent?: string[];
  monthlyDeliverables?: string[];
  whatIncluded?: string[];
  packageOptions?: {
    name: string;
    price: string;
    features: string[];
  }[];
}

export const services: Service[] = [
  {
    id: "performance-marketing",
    name: "Performance Marketing",
    headline: "Turn Ad Spend Into Revenue Growth",
    overview: "Stop wasting money on ads that don't convert. Our performance marketing experts craft precision-targeted campaigns across Google, Meta, TikTok, and LinkedIn that deliver qualified leads and measurable ROI—every single time.",
    whatWeDeliver: [
      {
        title: "Google Ads Management",
        items: [
          "Search Ads that capture high-intent buyers",
          "Display Ads for brand awareness and retargeting",
          "Shopping Ads for e-commerce dominance",
          "YouTube Ads for video engagement",
          "Performance Max campaigns for maximum reach"
        ]
      },
      {
        title: "Meta Ads (Facebook & Instagram)",
        items: [
          "Conversion-optimized ad creatives",
          "Advanced audience targeting and lookalikes",
          "Retargeting campaigns that close sales",
          "Lead generation forms that convert",
          "E-commerce catalog campaigns"
        ]
      },
      {
        title: "TikTok Advertising",
        items: [
          "Viral-worthy video ad creation",
          "Influencer partnership campaigns",
          "Spark Ads leveraging organic content",
          "Shopping integrations"
        ]
      },
      {
        title: "LinkedIn Ads (B2B Focus)",
        items: [
          "Executive decision-maker targeting",
          "Lead generation for professional services",
          "Account-based marketing campaigns",
          "Thought leadership content promotion"
        ]
      }
    ],
    ourProcess: [
      {
        step: 1,
        title: "Audience Research",
        description: "Identify your ideal customers and where they spend time online"
      },
      {
        step: 2,
        title: "Campaign Strategy",
        description: "Develop multi-channel approach with clear KPIs and budgets"
      },
      {
        step: 3,
        title: "Creative Development",
        description: "Craft compelling ad copy and eye-catching visuals"
      },
      {
        step: 4,
        title: "Launch & Monitor",
        description: "Deploy campaigns with real-time performance tracking"
      },
      {
        step: 5,
        title: "Optimize & Scale",
        description: "Continuously refine for better results and profitable scaling"
      }
    ],
    results: [
      { text: "Lower cost per acquisition (CPA)" },
      { text: "Higher conversion rates" },
      { text: "Improved return on ad spend (ROAS)" },
      { text: "Qualified lead pipeline" },
      { text: "Transparent performance reporting" }
    ],
    investment: "Starting From: AED 3,500/month (ad spend separate)"
  },
  {
    id: "social-media-management",
    name: "Social Media Management",
    headline: "Build a Community That Drives Business",
    overview: "Social media isn't just about posting pretty pictures—it's about building relationships, establishing authority, and driving real business outcomes. We manage your social presence end-to-end, so you can focus on running your business.",
    whatWeDeliver: [
      {
        title: "Strategic Planning",
        items: [
          "Comprehensive social media audit",
          "Competitor analysis",
          "Content strategy development",
          "Platform-specific best practices",
          "Hashtag research and strategy"
        ]
      },
      {
        title: "Content Creation",
        items: [
          "20-30 monthly posts (platform-dependent)",
          "Professional graphic design",
          "Engaging Reels and video content",
          "Stories and interactive content",
          "Carousel posts and infographics",
          "Copywriting that converts"
        ]
      },
      {
        title: "Community Management",
        items: [
          "Daily comment monitoring and responses",
          "DM management and customer service",
          "Reputation monitoring",
          "Engagement with relevant accounts",
          "Crisis management support"
        ]
      },
      {
        title: "Growth & Engagement",
        items: [
          "Organic growth strategies",
          "Influencer identification and outreach",
          "Contest and giveaway management",
          "User-generated content campaigns",
          "Trend monitoring and participation"
        ]
      },
      {
        title: "Analytics & Reporting",
        items: [
          "Monthly performance reports",
          "Audience insights and demographics",
          "Content performance analysis",
          "Competitor benchmarking",
          "Strategic recommendations"
        ]
      }
    ],
    whatMakesDifferent: [
      "Content based on actual data, not assumptions",
      "Trend-jacking for maximum visibility",
      "Platform-native content (no recycling)",
      "Consistent brand voice across channels",
      "Fast response times to audience engagement"
    ],
    perfectFor: [
      "Businesses wanting consistent online presence",
      "Brands looking to build authority",
      "Companies targeting younger demographics",
      "Service providers needing social proof",
      "E-commerce stores driving direct sales"
    ],
    investment: "Starting From: AED 2,800/month"
  },
  {
    id: "seo-local-seo",
    name: "SEO & Local SEO",
    headline: "Rank Higher. Get Found. Grow Faster.",
    overview: "When your ideal customers search Google, do they find you—or your competitors? Our SEO experts use proven strategies to get your business ranking at the top of search results, driving consistent, high-quality organic traffic that converts.",
    whatWeDeliver: [
      {
        title: "Technical SEO",
        items: [
          "Site speed optimization",
          "Mobile responsiveness",
          "Core Web Vitals improvement",
          "XML sitemap creation",
          "Robots.txt optimization",
          "SSL certificate implementation",
          "Structured data markup",
          "Crawl error resolution"
        ]
      },
      {
        title: "On-Page SEO",
        items: [
          "Comprehensive keyword research",
          "Title tag and meta description optimization",
          "Header tag structure",
          "Content optimization",
          "Internal linking strategy",
          "Image optimization",
          "URL structure improvement",
          "Schema markup implementation"
        ]
      },
      {
        title: "Off-Page SEO",
        items: [
          "High-quality backlink acquisition",
          "Guest posting on authoritative sites",
          "Digital PR and brand mentions",
          "Social signals optimization",
          "Online directory submissions",
          "Broken link building",
          "Competitor backlink analysis"
        ]
      },
      {
        title: "Content Strategy",
        items: [
          "SEO-optimized blog writing",
          "Pillar content development",
          "FAQ sections",
          "Landing page copywriting",
          "Content gap analysis",
          "Keyword cluster strategy"
        ]
      },
      {
        title: "Local SEO (Dubai-Focused)",
        items: [
          "Google Business Profile optimization",
          "Local citation building",
          "Review generation and management",
          "Local keyword targeting",
          "\"Near me\" search optimization",
          "Google Maps ranking",
          "Local link building",
          "Multi-location SEO (if applicable)"
        ]
      },
      {
        title: "E-commerce SEO",
        items: [
          "Product page optimization",
          "Category page strategy",
          "Shopping feed optimization",
          "Review schema implementation",
          "Product descriptions",
          "Faceted navigation optimization"
        ]
      }
    ],
    monthlyDeliverables: [
      "Keyword ranking report",
      "Traffic and conversion analytics",
      "Technical SEO audit updates",
      "Backlink acquisition report",
      "Competitor analysis",
      "Content recommendations",
      "Strategic consultation call"
    ],
    timeline: "Months 1-2: Foundation and quick wins | Months 3-4: Visibility improvements | Months 5-6: Significant traffic growth | Months 6+: Sustained top rankings",
    investment: "Starting From: AED 3,200/month"
  },
  {
    id: "website-design-development",
    name: "Website Design & Development",
    headline: "Websites That Look Stunning AND Convert",
    overview: "Your website is often the first impression customers have of your business. We build lightning-fast, mobile-responsive, conversion-optimized websites that turn visitors into customers—combining beautiful design with technical excellence.",
    whatWeDeliver: [
      {
        title: "Corporate Websites",
        items: ["Professional online presence that establishes credibility and showcases your expertise."]
      },
      {
        title: "E-commerce Stores",
        items: ["Full-featured online shops with seamless checkout experiences that maximize sales."]
      },
      {
        title: "Portfolio & Agency Sites",
        items: ["Showcase your work with stunning visual presentations and intuitive navigation."]
      },
      {
        title: "Landing Pages",
        items: ["High-converting standalone pages designed for specific campaigns or offers."]
      },
      {
        title: "Booking & Appointment Systems",
        items: ["Integrated scheduling for service-based businesses with automated confirmations."]
      },
      {
        title: "Custom Web Applications",
        items: ["Bespoke platforms tailored to your unique business requirements."]
      }
    ],
    ourProcess: [
      {
        step: 1,
        title: "Discovery",
        description: "Understand your goals, audience, and competitors"
      },
      {
        step: 2,
        title: "Wireframing",
        description: "Create site structure and user flow"
      },
      {
        step: 3,
        title: "Design",
        description: "Develop stunning visual concepts"
      },
      {
        step: 4,
        title: "Development",
        description: "Build with clean, scalable code"
      },
      {
        step: 5,
        title: "Testing",
        description: "Comprehensive QA across devices"
      },
      {
        step: 6,
        title: "Launch",
        description: "Deploy with monitoring and support"
      },
      {
        step: 7,
        title: "Optimize",
        description: "Ongoing improvements based on data"
      }
    ],
    whatIncluded: [
      "Fully responsive (desktop, tablet, mobile)",
      "Admin training and documentation",
      "1 year hosting (premium servers)",
      "1 year maintenance and support",
      "3 rounds of revisions",
      "Performance optimization",
      "Basic SEO setup",
      "Analytics integration",
      "Contact forms and social integration"
    ],
    timeline: "Simple website: 2-3 weeks | Medium complexity: 4-6 weeks | Complex/E-commerce: 6-10 weeks",
    investment: "Starting From: AED 8,000 for basic corporate site"
  },
  {
    id: "mobile-app-development",
    name: "Mobile App Development",
    headline: "Powerful Apps That Users Love",
    overview: "From concept to launch, we build intuitive, high-performance mobile applications that deliver exceptional user experiences and drive business value.",
    whatWeDeliver: [
      {
        title: "Native iOS Apps",
        items: ["Swift-based applications optimized for iPhone and iPad with native performance."]
      },
      {
        title: "Native Android Apps",
        items: ["Kotlin/Java applications for the Android ecosystem with Material Design."]
      },
      {
        title: "Cross-Platform Apps",
        items: ["React Native and Flutter for cost-effective apps running on both platforms."]
      },
      {
        title: "Progressive Web Apps (PWA)",
        items: ["Web-based apps with native-like features and offline capabilities."]
      }
    ],
    ourProcess: [
      {
        step: 1,
        title: "Consultation",
        description: "Define features, platform, and scope"
      },
      {
        step: 2,
        title: "UI/UX Design",
        description: "Create intuitive, beautiful interfaces"
      },
      {
        step: 3,
        title: "Development",
        description: "Build with best practices and clean code"
      },
      {
        step: 4,
        title: "Testing",
        description: "Rigorous QA on multiple devices"
      },
      {
        step: 5,
        title: "Launch",
        description: "App Store and Play Store submission"
      },
      {
        step: 6,
        title: "Support",
        description: "Post-launch monitoring and updates"
      }
    ],
    whatIncluded: [
      "Source code ownership",
      "App store deployment assistance",
      "3 months post-launch support",
      "Documentation and training",
      "Backend API development",
      "Admin panel for content management",
      "Analytics integration",
      "App store optimization basics"
    ],
    timeline: "Basic app: 8-12 weeks | Medium complexity: 12-16 weeks | Complex app: 16-24 weeks",
    investment: "Starting From: AED 25,000 for basic cross-platform app"
  },
  {
    id: "branding-creative-design",
    name: "Branding & Creative Design",
    headline: "Create a Brand That Stands Out",
    overview: "Your brand is more than a logo—it's the emotional connection customers have with your business. We create cohesive, memorable brand identities that resonate with your audience and set you apart from competitors.",
    whatWeDeliver: [
      {
        title: "Brand Strategy",
        items: [
          "Brand positioning and messaging",
          "Target audience definition",
          "Competitive differentiation",
          "Brand voice and personality",
          "Value proposition development"
        ]
      },
      {
        title: "Logo Design",
        items: [
          "Multiple concept exploration",
          "Unlimited revisions",
          "Vector file delivery",
          "Brand color palette",
          "Typography selection",
          "Logo usage guidelines"
        ]
      },
      {
        title: "Brand Identity System",
        items: [
          "Logo variations (primary, secondary, icon)",
          "Color palette (primary, secondary, accent)",
          "Typography system",
          "Brand patterns and textures",
          "Icon library",
          "Photography style guide",
          "Brand voice guidelines"
        ]
      },
      {
        title: "Marketing Collateral",
        items: [
          "Business card design",
          "Letterhead and envelope",
          "Email signature template",
          "Presentation templates",
          "Brochure and flyer design",
          "Product catalog design",
          "Corporate profile design"
        ]
      }
    ],
    packageOptions: [
      {
        name: "Starter Package",
        price: "AED 2,500",
        features: [
          "Logo design (3 concepts)",
          "Basic brand guidelines",
          "Business card design",
          "Social media kit"
        ]
      },
      {
        name: "Professional Package",
        price: "AED 5,000",
        features: [
          "Logo design (5 concepts)",
          "Comprehensive brand guidelines",
          "Complete stationery suite",
          "Social media branding kit",
          "Marketing collateral (2 designs)"
        ]
      },
      {
        name: "Enterprise Package",
        price: "AED 8,000+",
        features: [
          "Full brand strategy",
          "Logo design (unlimited concepts)",
          "Complete brand identity system",
          "Comprehensive marketing materials",
          "Brand launch support",
          "Brand style guard (ongoing)"
        ]
      }
    ],
    timeline: "2-6 weeks depending on scope"
  },
  {
    id: "real-estate-marketing",
    name: "Real Estate Marketing",
    headline: "Fill Your Pipeline with Qualified Property Leads",
    overview: "The UAE real estate market is competitive. Our specialized real estate marketing strategies help developers, agencies, and brokers generate consistent, high-quality leads and close more deals.",
    whatWeDeliver: [
      {
        title: "Lead Generation Campaigns",
        items: [
          "Facebook & Instagram ads targeting property seekers",
          "Google Ads for high-intent searches",
          "Landing pages optimized for conversions",
          "Lead capture and qualification systems"
        ]
      },
      {
        title: "Property Listing Optimization",
        items: [
          "Professional property photography",
          "Virtual tour creation",
          "Compelling listing descriptions",
          "SEO-optimized property pages",
          "Integration with property portals"
        ]
      },
      {
        title: "Developer Marketing",
        items: [
          "Pre-launch buzz campaigns",
          "Project website development",
          "Investor presentation materials",
          "Virtual showroom creation",
          "Email marketing campaigns"
        ]
      },
      {
        title: "Agent Branding",
        items: [
          "Personal branding strategy",
          "Professional headshots and content",
          "Agent website development",
          "Social media presence building",
          "Client testimonial campaigns"
        ]
      },
      {
        title: "Content Marketing",
        items: [
          "Market insights and reports",
          "Neighborhood guides",
          "Investment opportunity articles",
          "First-time buyer guides",
          "Seller resources"
        ]
      }
    ],
    whatMakesDifferent: [
      "Deep understanding of UAE property market",
      "Proven lead generation systems",
      "Integration with Dubai Land Department data",
      "Multi-language campaign capabilities",
      "Compliance with UAE real estate marketing regulations"
    ],
    results: [
      { text: "Qualified lead generation" },
      { text: "Lower cost per lead" },
      { text: "Higher quality prospects" },
      { text: "Improved close rates" },
      { text: "Enhanced brand visibility" }
    ],
    investment: "Starting From: AED 4,500/month"
  },
  {
    id: "e-commerce-growth",
    name: "E-commerce Growth",
    headline: "Scale Your Online Store Profitably",
    overview: "Selling online is complex. We provide end-to-end e-commerce solutions from store development to marketing to optimization—helping you maximize revenue and build a sustainable online business.",
    whatWeDeliver: [
      {
        title: "Store Development",
        items: [
          "Shopify store setup and customization",
          "WooCommerce development",
          "Custom e-commerce platforms",
          "Product catalog setup",
          "Payment gateway integration",
          "Shipping integration",
          "Multi-currency support"
        ]
      },
      {
        title: "E-commerce Marketing",
        items: [
          "Google Shopping campaigns",
          "Facebook catalog ads",
          "Instagram shopping",
          "Influencer collaborations",
          "Email marketing automation",
          "Retargeting campaigns"
        ]
      },
      {
        title: "Conversion Rate Optimization",
        items: [
          "A/B testing",
          "Checkout optimization",
          "Product page improvements",
          "Trust signal implementation",
          "Cart abandonment recovery"
        ]
      },
      {
        title: "E-commerce SEO",
        items: [
          "Product optimization",
          "Category page strategy",
          "Blog content creation",
          "Technical SEO",
          "Link building"
        ]
      },
      {
        title: "Retention & Loyalty",
        items: [
          "Email flows (welcome, abandoned cart, post-purchase)",
          "Loyalty program setup",
          "SMS marketing",
          "Customer win-back campaigns"
        ]
      },
      {
        title: "Analytics & Insights",
        items: [
          "Sales tracking dashboard",
          "Customer behavior analysis",
          "Product performance reports",
          "Marketing attribution",
          "Inventory insights"
        ]
      }
    ],
    investment: "Custom packages starting from AED 6,000/month"
  }
];

export function getServiceById(id: string): Service | undefined {
  return services.find(service => service.id === id);
}

export function getAllServices(): Service[] {
  return services;
}

