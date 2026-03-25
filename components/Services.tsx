"use client";

import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

import MagicBento, { type BentoCardProps } from "./MagicBento";

export function Services() {
  const t = useTranslations();

  const bentoCards: BentoCardProps[] = [
    {
      surface: "glass",
      label: t("services.card1.badge"),
      title: t("services.card1.title"),
      description: t("services.card1.body")
    },
    {
      surface: "accent",
      label: t("services.card2.title"),
      title: t("services.card2.title"),
      description: t("services.card2.body")
    },
    {
      surface: "glass",
      label: t("services.kicker"),
      title: [t("services.card1.tags.0"), t("services.card1.tags.1"), t("services.card1.tags.2")].join(" · "),
      description: t("services.subtitle"),
      children: (
        <>
          <h3 className="font-(--font-display) m-0 text-2xl tracking-tight text-text-0">
            {t("services.card3.title")}
          </h3>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-text-2">{t("services.card3.body")}</p>
        </>
      )
    },
    {
      imageSrc: "/images/earth.jpg",
      imageAlt: t("services.card3.imageAlt"),
      title: t("services.card3.title")
    },
    // {
    //   surface: "glass",
    //   children: (
    //     <>
    //       <h3 className="font-(--font-display) m-0 text-2xl tracking-tight text-text-0">
    //         {t("services.card3.title")}
    //       </h3>
    //       <p className="mt-3 max-w-xl text-sm leading-relaxed text-text-2">{t("services.card3.body")}</p>
    //       <div className="mt-6 grid grid-cols-2 gap-4">
    //         <div className="rounded-2xl border border-border-0 bg-surface-0 p-4">
    //           <div className="text-xs tracking-[0.22em] text-text-2">24H</div>
    //           <div className="mt-2 text-lg font-bold text-text-0">{t("services.card3.stats.uptime")}</div>
    //         </div>
    //         <div className="rounded-2xl border border-brand-accent/25 bg-surface-0 p-4">
    //           <div className="text-xs tracking-[0.22em] text-text-2">64MS</div>
    //           <div className="mt-2 text-lg font-bold text-text-0">{t("services.card3.stats.latency")}</div>
    //         </div>
    //       </div>
    //     </>
    //   )
    // },

  ];

  return (
    <section id="services" className="relative">
      <div className="mx-auto max-w-6xl px-6 py-18 lg:py-24">
        <div className="text-center">
          <div className="text-xs font-semibold tracking-[0.24em] text-brand-primary">
            {t("services.kicker")}
          </div>
          <h2 className="mt-4 font-(--font-display) text-3xl tracking-tight text-text-0 sm:text-4xl">
            {t("services.title")}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-text-1">
            {t("services.subtitle")}
          </p>
        </div>

        <div className="relative mt-12 w-full">
          <div
            className="pointer-events-none absolute -inset-x-4 -inset-y-10 rounded-[40px] bg-linear-to-br from-brand-primary/14 via-transparent to-brand-accent/12 blur-3xl sm:-inset-x-8 lg:-inset-x-12"
            aria-hidden
          />
          <div className="relative flex w-full justify-center">
            <MagicBento
              layout="services"
              cards={bentoCards}
              textAutoHide={false}
              enableStars
              enableSpotlight
              enableBorderGlow={true}
              enableTilt={false}
              enableMagnetism={false}
              clickEffect
              spotlightRadius={400}
              particleCount={12}
              glowColor="0, 156, 194"
              disableAnimations={false}
            />
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 rounded-2xl border border-border-0 bg-surface-1 px-6 py-3 text-sm font-semibold text-text-0 transition hover:brightness-105 focus:outline-none focus-visible:[box-shadow:var(--ring-primary)]"
          >
            {t("services.card2.cta")}
            <ArrowRight className="h-4 w-4 rtl:rotate-180" />
          </a>
        </div>
      </div>
    </section>
  );
}
