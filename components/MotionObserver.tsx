"use client";

import { useEffect } from "react";

type Options = {
  selector?: string;
  rootMargin?: string;
  threshold?: number;
};

const DEFAULTS: Required<Options> = {
  selector: "[data-reveal]",
  rootMargin: "0px 0px -12% 0px",
  threshold: 0.1,
};

export function MotionObserver(props: Options) {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches) return;

    const { selector, rootMargin, threshold } = { ...DEFAULTS, ...props };
    const targets = Array.from(document.querySelectorAll<HTMLElement>(selector));
    if (!targets.length) return;

    for (const el of targets) el.style.willChange = "transform, opacity, filter";

    const obs = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          (entry.target as HTMLElement).classList.add("is-revealed");
          obs.unobserve(entry.target);
        }
      },
      { rootMargin, threshold },
    );

    for (const el of targets) obs.observe(el);
    return () => obs.disconnect();
  }, [props]);

  return null;
}

