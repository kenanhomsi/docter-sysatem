"use client";

import { useEffect, useMemo, useState } from "react";

type Props = {
  /**
   * URL in /public (or absolute) for the background logo.
   */
  src?: string;
  /**
   * CSS selector for sections that should "activate" the watermark.
   * Defaults to: main > section[data-bg-logo-section]
   */
  sectionSelector?: string;
};

export function BackgroundLogo({
  src = "/images/medical-logo.svg",
  sectionSelector = "main > section[data-bg-logo-section]",
}: Props) {
  const [isInSection, setIsInSection] = useState(() => {
    if (typeof window === "undefined") return true;
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches) return true;
    const targets = document.querySelectorAll<HTMLElement>(sectionSelector);
    return targets.length === 0;
  });
  const [isScrollingDown, setIsScrollingDown] = useState(false);

  const prefersReducedMotion = useMemo(() => {
    if (typeof window === "undefined") return true;
    return window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      const delta = y - lastY;
      if (Math.abs(delta) > 2) setIsScrollingDown(delta > 0);
      lastY = y;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (prefersReducedMotion) return;

    const targets = Array.from(document.querySelectorAll<HTMLElement>(sectionSelector));

    // If the page doesn't declare sections, keep a subtle watermark enabled.
    if (!targets.length) return;

    const visible = new Set<Element>();
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) visible.add(e.target);
          else visible.delete(e.target);
        }
        setIsInSection(visible.size > 0);
      },
      { root: null, threshold: 0.18, rootMargin: "-10% 0px -10% 0px" },
    );

    for (const el of targets) obs.observe(el);
    return () => obs.disconnect();
  }, [prefersReducedMotion, sectionSelector]);

  const isVisible = isInSection && !isScrollingDown;

  return (
    <div
      className="bg-logo-layer"
      aria-hidden="true"
      style={
        {
          "--bg-logo-opacity": isVisible ? 1 : 0,
        } as React.CSSProperties
      }
    >
      <div className="bg-logo-layer__inner" />
      <div
        className="bg-logo-layer__mark"
        style={{
          backgroundImage: `url("${src}")`,
        }}
      />
    </div>
  );
}

