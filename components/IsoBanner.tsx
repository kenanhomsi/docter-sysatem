"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { useLocale, useTranslations } from "next-intl";

type Slide = {
  eyebrow: string;
  title: string;
  subtitle: string;
  highlights: Array<{ k: string; v: string }>;
  imageSrc: string;
  imageAlt: string;
};

export function IsoBanner() {
  const t = useTranslations();
  const locale = useLocale();

  const slides: Slide[] = useMemo(() => {
    return t.raw("iso.slides") as Slide[];
  }, [t]);

  const [active, setActive] = useState(0);

  useEffect(() => {
    const media = window.matchMedia?.("(prefers-reduced-motion: reduce)");
    if (media?.matches) return;
    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % slides.length);
    }, 6500);
    return () => window.clearInterval(id);
  }, [slides.length]);

  const slide = slides[active]!;

  const ariaId = "iso-banner-slide";

  return (
    <section aria-label={t("iso.ariaLabel")} className="relative">
      <div className="mx-auto max-w-6xl px-6 pb-2 lg:pb-6">
        <div
          dir={locale === "ar" ? "rtl" : "ltr"}
          lang={locale}
          className="group relative overflow-hidden rounded-[28px] border border-border-0 bg-surface-0 shadow-[0_28px_90px_rgba(0,0,0,0.18)]"
        >
          <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
            <div className="absolute inset-0 [background:conic-gradient(from_180deg_at_50%_50%,rgba(0,156,194,0.22),rgba(255,215,0,0.16),rgba(0,156,194,0.22))]" />
            <div className="absolute inset-px rounded-[27px] bg-surface-0" />
          </div>
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -left-24 top-1/2 h-[340px] w-[340px] -translate-y-1/2 rounded-full bg-brand-primary/18 blur-3xl" />
            <div className="absolute -right-28 top-1/3 h-[320px] w-[320px] -translate-y-1/2 rounded-full bg-brand-accent/14 blur-3xl" />
            <div className="absolute inset-0 bg-linear-to-tr from-black/28 via-black/6 to-black/12" />
            <div className="absolute inset-0 opacity-[0.20] bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.16)_1px,transparent_0)] bg-size-[18px_18px]" />
          </div>

          <div className="relative grid min-h-[260px] grid-cols-1 items-center gap-8 px-6 py-11 sm:min-h-[280px] sm:px-10 sm:py-12 lg:grid-cols-[1fr_340px_auto] lg:gap-10 lg:px-12">
            <div className="max-w-3xl lg:max-w-none">
              <div className="inline-flex items-center gap-2 rounded-full border border-border-0 bg-surface-1 px-4 py-2 text-xs font-semibold tracking-wide text-text-1 backdrop-blur transition duration-300 hover:brightness-110">
                <span className="h-2 w-2 rounded-full bg-brand-primary shadow-[0_0_0_4px_rgba(0,156,194,0.18)]" />
                <span className="translate-y-[0.5px]">{slide.eyebrow}</span>
              </div>

              <h2
                id={ariaId}
                className="mt-5 font-(--font-display) text-[30px] leading-[1.15] tracking-tight text-text-0 sm:text-4xl lg:text-[44px]"
              >
                <span className="bg-linear-to-l from-brand-accent/85 via-white/92 to-brand-primary/90 bg-clip-text text-transparent">
                  {slide.title}
                </span>
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-text-1 sm:text-base">
                {slide.subtitle}
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {slide.highlights.map((h) => (
                  <div
                    key={h.k}
                    className="relative overflow-hidden rounded-2xl border border-border-0 bg-surface-1 px-4 py-3 backdrop-blur transition duration-300 hover:-translate-y-px hover:brightness-110"
                  >
                    <div className="pointer-events-none absolute -left-10 -top-10 h-24 w-24 rounded-full bg-brand-primary/14 blur-2xl" />
                    <div className="text-xs font-semibold text-text-0">
                      {h.k}
                    </div>
                    <div className="mt-1 text-[11px] leading-relaxed text-text-1">
                      {h.v}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                {/* <a
                  href="#results"
                  className="inline-flex items-center justify-center rounded-full bg-brand-primary px-5 py-3 text-sm font-semibold text-white shadow-[0_18px_60px_rgba(0,156,194,0.35)] transition hover:brightness-110 focus:outline-none focus-visible:[box-shadow:var(--ring-primary)]"
                >
                  عرض النتائج
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full border border-border-0 bg-surface-1 px-5 py-3 text-sm font-semibold text-text-0 backdrop-blur transition hover:brightness-110 focus:outline-none focus-visible:[box-shadow:var(--ring-primary)]"
                >
                  تواصل معنا
                </a> */}

                <div className="flex flex-wrap items-center gap-3">
                  <div className="group relative inline-flex items-center gap-3 rounded-2xl border border-border-0 bg-surface-1 px-4 py-3 backdrop-blur transition hover:brightness-110">
                    <div className="relative grid h-20 w-20 place-items-center rounded-full bg-white/6 ring-1 ring-white/12">
                      <div className="pointer-events-none absolute inset-0 rounded-full bg-linear-to-br from-brand-primary/35 via-white/0 to-brand-accent/25 opacity-80" />
                      <Image
                        src="/images/ISO1.png"
                        alt="ISO 9001:2015"
                        fill
                      />
                    </div>
                    <div className="leading-tight">
                      <div className="text-xs font-semibold text-text-0">
                        ISO 9001:2015
                      </div>
                      <div className="text-[11px] text-text-1">{t("iso.badges.0.subtitle")}</div>
                    </div>
                    <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 ring-1 ring-brand-primary/35 transition group-hover:opacity-100" />
                  </div>

                  <div className="group relative inline-flex items-center gap-3 rounded-2xl border border-border-0 bg-surface-1 px-4 py-3 backdrop-blur transition hover:brightness-110">
                    <div className="relative grid h-20 w-20 place-items-center rounded-full bg-white/6 ring-1 ring-white/12">
                      <div className="pointer-events-none absolute inset-0 rounded-full bg-linear-to-br from-brand-accent/25 via-white/0 to-brand-primary/25 opacity-80" />
                      <Image
                        src="/images/ISO2.png"
                        alt="ISO 9001:2015"
                        fill
                      />
                    </div>
                    <div className="leading-tight">
                      <div className="text-xs font-semibold text-text-0">
                        United Registrar
                      </div>
                      <div className="text-[11px] text-text-1">{t("iso.badges.1.subtitle")}</div>
                    </div>
                    <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 ring-1 ring-brand-accent/30 transition group-hover:opacity-100" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-col gap-5">
              <div className="relative order-first lg:order-0">
                <div className="absolute -inset-3 rounded-[26px] bg-linear-to-br from-brand-primary/22 via-white/0 to-brand-accent/18 blur-2xl" />
                <div className="relative overflow-hidden rounded-[24px] border border-border-0 bg-surface-1 shadow-[0_22px_70px_rgba(0,0,0,0.22)]">
                  <div className="relative aspect-4/5 w-full">
                    <Image
                      src={slide.imageSrc}
                      alt={slide.imageAlt}
                      fill
                      priority={false}
                      className="object-cover opacity-[0.92] saturate-[1.05] contrast-[1.06]"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/45 via-black/10 to-transparent" />
                    <div className="pointer-events-none absolute inset-0 bg-linear-to-r from-black/18 via-transparent to-black/8" />
                  </div>

                </div>
              </div>

              <div className="flex items-center justify-between gap-3 lg:flex-col lg:justify-center">
                {/* <div className="flex flex-row-reverse items-center gap-2">
                  <button
                    type="button"
                    aria-label="Previous slide"
                    aria-controls={ariaId}
                    onClick={prev}
                    className="grid h-11 w-11 place-items-center rounded-full border border-border-0 bg-surface-1 text-text-0 backdrop-blur transition duration-300 hover:brightness-110 hover:scale-[1.02] focus:outline-none focus-visible:[box-shadow:var(--ring-primary)]"
                  >
                    <span aria-hidden className="text-lg leading-none">
                      ›
                    </span>
                  </button>
                  <button
                    type="button"
                    aria-label="Next slide"
                    aria-controls={ariaId}
                    onClick={next}
                    className="grid h-11 w-11 place-items-center rounded-full border border-border-0 bg-surface-1 text-text-0 backdrop-blur transition duration-300 hover:brightness-110 hover:scale-[1.02] focus:outline-none focus-visible:[box-shadow:var(--ring-primary)]"
                  >
                    <span aria-hidden className="text-lg leading-none">
                      ‹
                    </span>
                  </button>
                </div> */}

                <div
                  aria-label={t("iso.indicators")}
                  className="flex items-center justify-center gap-1.5 lg:mt-4"
                >
                  {slides.map((_, idx) => (
                    <button
                      key={idx}
                      type="button"
                      aria-label={t("iso.goToSlide", { index: idx + 1 })}
                      aria-controls={ariaId}
                      aria-current={idx === active}
                      onClick={() => setActive(idx)}
                      className={[
                        "h-2.5 rounded-full transition duration-300 focus:outline-none focus-visible:[box-shadow:var(--ring-primary)]",
                        idx === active
                          ? "w-8 bg-brand-primary/90 shadow-[0_0_0_4px_rgba(0,156,194,0.12)]"
                          : "w-2.5 bg-white/20 hover:bg-white/28",
                      ].join(" ")}
                    />
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
