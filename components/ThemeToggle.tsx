"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

type Theme = "dark" | "light";

function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === "undefined") return "dark";
    const saved = (localStorage.getItem("theme") as Theme | null) ?? null;
    const preferred =
      window.matchMedia?.("(prefers-color-scheme: light)")?.matches === true
        ? "light"
        : "dark";
    return saved ?? preferred;
  });

  const label = useMemo(
    () => (theme === "dark" ? "Switch to light mode" : "Switch to dark mode"),
    [theme],
  );

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      onClick={() => {
        const next: Theme = theme === "dark" ? "light" : "dark";
        setTheme(next);
        localStorage.setItem("theme", next);
        applyTheme(next);
      }}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border-0 bg-surface-0 text-text-0 transition hover:brightness-105 focus:outline-none focus-visible:[box-shadow:var(--ring-primary)]"
    >
      {theme === "dark" ? (
        <Sun className="h-5 w-5 text-brand-accent" />
      ) : (
        <Moon className="h-5 w-5 text-brand-primary" />
      )}
    </button>
  );
}

