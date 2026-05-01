"use client";

import { TestimonialCard } from "@/components/TestimonialCard";
import { testimonials } from "@/data/portfolioData";

const marqueeTestimonials = [...testimonials, ...testimonials];

export function TestimonialsSlider() {
  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[color:var(--testimonial-fade)] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[color:var(--testimonial-fade)] to-transparent" />
      <div className="testimonial-track flex w-max gap-6 py-1">
        {marqueeTestimonials.map((testimonial, idx) => (
          <div key={`${testimonial.image}-${idx}`} className="w-[290px] shrink-0 md:w-[340px]">
            <TestimonialCard {...testimonial} />
          </div>
        ))}
      </div>
    </div>
  );
}
