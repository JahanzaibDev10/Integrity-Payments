"use client";

import { useEffect, useState } from "react";
import HeroSlide from "./HeroSlide";
import { heroSlides } from "@/data/integrityPayments";

export default function HeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return undefined;
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % heroSlides.length);
    }, 4000);
    return () => window.clearInterval(timer);
  }, [paused]);

  return (
    <section
      className="integrity-hero"
      aria-label="Resilient Payments featured services"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      {heroSlides.map((slide, index) => (
        <HeroSlide key={slide.href} slide={slide} active={index === activeIndex} />
      ))}
      <div className="integrity-hero-dots" aria-label="Hero slides">
        {heroSlides.map((slide, index) => (
          <button
            key={slide.href}
            type="button"
            aria-label={`Show slide ${index + 1}`}
            aria-current={index === activeIndex}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </section>
  );
}
