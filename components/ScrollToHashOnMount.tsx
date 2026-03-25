"use client";

import { usePathname } from "@/i18n/navigation";
import { useEffect } from "react";

export function ScrollToHashOnMount() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== "/") return;
    const hash = window.location.hash.slice(1);
    if (!hash) return;
    const el = document.getElementById(decodeURIComponent(hash));
    if (!el) return;
    const t = window.requestAnimationFrame(() => {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    });
    return () => window.cancelAnimationFrame(t);
  }, [pathname]);

  return null;
}
