import { Gauge, ShieldCheck } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";

export function About() {
  const t = useTranslations();
  return (
    <section id="about" className="relative">
      <div className="mx-auto max-w-6xl px-6 py-18 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="text-xs font-semibold tracking-[0.24em] text-brand-primary">
              {t("about.kicker")}
            </div>
            <h2 className="mt-4 font-(--font-display) text-3xl tracking-tight text-text-0 sm:text-4xl">
              {t("about.title")}{" "}
              <span className="text-brand-primary">{t("about.titleAccent")}</span>
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-text-1 sm:text-lg">
              {t("about.body")}
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-border-0 bg-surface-0 p-5 shadow-[0_18px_60px_rgba(0,0,0,0.14)]">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="h-5 w-5 text-brand-primary" />
                  <div className="text-sm font-semibold text-text-0">
                    {t("about.cards.precision.title")}
                  </div>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-text-2">
                  {t("about.cards.precision.body")}
                </p>
              </div>
              <div className="rounded-2xl border border-brand-accent/30 bg-surface-0 p-5 shadow-[0_18px_60px_rgba(0,0,0,0.14)]">
                <div className="flex items-center gap-3">
                  <Gauge className="h-5 w-5 text-brand-accent" />
                  <div className="text-sm font-semibold text-text-0">
                    {t("about.cards.speed.title")}
                  </div>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-text-2">
                  {t("about.cards.speed.body")}
                </p>
              </div>
            </div>
          </div>

          <>
            <Image
              src="/images/about-1.png"
              alt={t("about.imageAlt")}
              quality={95}
              width={400}
              height={320}
              className="object-cover"
              style={{ imageRendering: "auto" }}
            /></>

        </div>
      </div>
    </section>
  );
}

