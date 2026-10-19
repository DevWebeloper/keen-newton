"use client";

import { useEffect } from "react";

// Staggered entrance for [data-reveal] elements. Content is only hidden once
// this runs (the `motion` class), so the page reads fine without script.
export default function MotionLayer() {
  useEffect(() => {
    const root = document.documentElement;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const items = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const below = items.filter((el) => el.getBoundingClientRect().top > window.innerHeight * 0.9);
    below.forEach((el) => el.classList.add("is-waiting"));
    root.classList.add("motion");

    const observer = new IntersectionObserver(
      (entries) => {
        const entering = entries.filter((e) => e.isIntersecting);
        entering.forEach((entry, i) => {
          const el = entry.target as HTMLElement;
          el.style.transitionDelay = `${i * 75}ms`;
          el.classList.remove("is-waiting");
          observer.unobserve(el);
        });
      },
      { rootMargin: "0px 0px -8% 0px" },
    );
    below.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return null;
}
