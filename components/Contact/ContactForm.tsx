"use client";

import { useEffect, useRef, useState } from "react";
import { Geist } from "next/font/google";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FlowButton } from "@/components/ui/flow-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle2 } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const services = [
  "Performance Marketing",
  "Social Media Management",
  "SEO & Local SEO",
  "Website Design & Development",
  "Mobile App Development",
  "Branding & Creative Design",
  "Real Estate Marketing",
  "E-commerce Growth",
];

const ContactForm = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set(formRef.current, {
        opacity: 0,
        y: 30,
      });

      // Create timeline with ScrollTrigger
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
        defaults: { ease: "power3.out" },
      });

      // Animate form
      tl.to(formRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, service: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after showing success message
    setTimeout(() => {
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        message: "",
      });
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <section ref={sectionRef} className="w-full py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="bg-card border border-border rounded-xl p-6 md:p-8 lg:p-12"
          >
            {isSubmitted ? (
              <div className="text-center py-12">
                <CheckCircle2 className="w-16 h-16 text-primary mx-auto mb-4" />
                <h3
                  className={`text-2xl md:text-3xl mb-4 tracking-tight ${geistSans.className}`}
                >
                  Thank you!
                </h3>
                <p
                  className={`text-lg md:text-xl text-muted-foreground ${geistSans.className}`}
                >
                  Our team will get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="fullName" className={geistSans.className}>
                      Full Name *
                    </Label>
                    <Input
                      id="fullName"
                      name="fullName"
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      className={geistSans.className}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className={geistSans.className}>
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className={geistSans.className}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone" className={geistSans.className}>
                      Phone Number *
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className={geistSans.className}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company" className={geistSans.className}>
                      Company Name
                    </Label>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleChange}
                      className={geistSans.className}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service" className={geistSans.className}>
                    Service Interested In *
                  </Label>
                  <Select
                    value={formData.service}
                    onValueChange={handleSelectChange}
                    required
                  >
                    <SelectTrigger className={geistSans.className}>
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      {services.map((service) => (
                        <SelectItem key={service} value={service}>
                          {service}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className={geistSans.className}>
                    Message *
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className={geistSans.className}
                    placeholder="Tell us about your project..."
                  />
                </div>

                <FlowButton
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full md:w-auto"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </FlowButton>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

