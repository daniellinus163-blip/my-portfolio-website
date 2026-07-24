"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { webApps, mobileApps } from "@/data/portfolioData";

export function ToolsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Combine web and mobile app images for the carousel
  const allProjects = [...webApps, ...mobileApps];
  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % allProjects.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [allProjects.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % allProjects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + allProjects.length) % allProjects.length);
  };

  const visibleSlides = isMobile ? 1 : 3;

  return (
    <div className="relative w-full py-8 px-4">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-[#FFD700] mb-2" style={{ textShadow: '0 0 20px rgba(255, 215, 0, 0.5)' }}>
          Tools & Technologies Showcase
        </h3>
        <p className="text-sm text-[#94A3B8]">Web Apps • Mobile Apps • Development Tools</p>
      </div>

      <div className="relative overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * (100 / visibleSlides)}%)` }}
        >
          {allProjects.map((project, index) => (
            <div 
              key={`${project.slug}-${index}`}
              className="flex-shrink-0 w-full px-2"
              style={{ width: `${100 / visibleSlides}%` }}
            >
              <div className="glass-card rounded-2xl overflow-hidden h-64 relative group">
                <div className="relative w-full h-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#FFD700] mb-1">
                      {project.type === 'web' ? 'Web App' : 'Mobile App'}
                    </p>
                    <h4 className="text-sm font-bold text-[#F8FAFC] mb-2">{project.title}</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span 
                          key={tech}
                          className="text-xs px-2 py-1 rounded-full bg-[#FFD700]/20 text-[#FFD700] border border-[#FFD700]/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-[#FFD700]/20 border border-[#FFD700]/30 flex items-center justify-center text-[#FFD700] hover:bg-[#FFD700]/30 transition-all"
          style={{ backdropFilter: 'blur(10px)' }}
        >
          ←
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-[#FFD700]/20 border border-[#FFD700]/30 flex items-center justify-center text-[#FFD700] hover:bg-[#FFD700]/30 transition-all"
          style={{ backdropFilter: 'blur(10px)' }}
        >
          →
        </button>
      </div>

      {/* Dots indicator */}
      <div className="flex justify-center gap-2 mt-4">
        {allProjects.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex 
                ? 'bg-[#FFD700] w-6' 
                : 'bg-[#94A3B8]/30 hover:bg-[#94A3B8]/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
