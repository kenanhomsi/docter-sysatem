import { Gauge, ShieldCheck } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";

export function About() {
  const t = useTranslations();
  return (
    <section id="about" className="relative isolate overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <video
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        >
          <source src="/images/about.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-white/55 dark:bg-black/25" />
        <div className="absolute inset-0 opacity-[0.08] [background:radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.35)_1px,transparent_0)] [background-size:20px_20px] dark:opacity-[0.12]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-18 lg:py-24">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="self-end lg:pt-4">
            <div className="rounded-[32px] border border-border-0/70 bg-surface-0/28 p-6 shadow-[0_26px_90px_rgba(0,0,0,0.14)] backdrop-blur-md dark:bg-surface-0/24 sm:p-8">


              <h2 className="mt-5 font-(--font-display) text-3xl leading-tight tracking-tight text-text-0 sm:text-4xl">
                {t("about.title")}
              </h2>

              <p className="mt-4 text-base leading-relaxed text-text-1 sm:text-lg">
                {t("about.body")}
              </p>

              <div className="mt-2 grid gap-4 sm:grid-cols-2">
                <div className="group rounded-2xl border border-border-0/70 bg-surface-0/55 p-5 shadow-[0_18px_60px_rgba(0,0,0,0.10)] backdrop-blur-sm transition-transform duration-300 hover:-translate-y-0.5 dark:bg-surface-0/20">
                  <div className="flex items-start gap-3">
                    <div className="rounded-2xl border border-border-0/70 bg-surface-1/70 p-2.5">
                      <ShieldCheck className="h-5 w-5 text-brand-primary" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-text-0">
                        {t("about.cards.precision.title")}
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-text-2">
                        {t("about.cards.precision.body")}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="group rounded-2xl border border-border-0/70 bg-surface-0/55 p-5 shadow-[0_18px_60px_rgba(0,0,0,0.10)] backdrop-blur-sm transition-transform duration-300 hover:-translate-y-0.5 dark:bg-surface-0/20">
                  <div className="flex items-start gap-3">
                    <div className="rounded-2xl border border-border-0/70 bg-surface-1/70 p-2.5">
                      <Gauge className="h-5 w-5 text-brand-accent" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-text-0">
                        {t("about.cards.speed.title")}
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-text-2">
                        {t("about.cards.speed.body")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-[32px] border border-border-0/60 bg-surface-0/55 p-2 shadow-[0_34px_110px_rgba(0,0,0,0.20)] backdrop-blur">
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-brand-primary/10 via-white/10 to-transparent dark:from-brand-primary/15 dark:via-black/10" />
              <Image
                src="/images/about-1.png"
                alt={t("about.imageAlt")}
                quality={95}
                width={720}
                height={640}
                className="relative h-auto w-full rounded-[26px] object-cover"
                style={{ imageRendering: "auto" }}
                priority={false}
              />
            </div>
          </div>


        </div>
      </div>
    </section>
  );
}

