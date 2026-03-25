import {ArrowRight, ExternalLink, MapPin} from "lucide-react";
import Image from "next/image";
import {useTranslations} from "next-intl";
import {News} from "@/components/News";
import {Link} from "@/i18n/navigation";

export default function LabsPage() {
  const t = useTranslations();

  const locations = [
    {
      name: t("labs.locations.items.0.name"),
      address: t("labs.locations.items.0.address"),
    },
    {
      name: t("labs.locations.items.1.name"),
      address: t("labs.locations.items.1.address"),
    },
  ];

  return (
    <main className="flex-1 section-overlap">
      <section className="relative">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:py-24">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <h1 className="font-(--font-display) text-4xl tracking-tight text-text-0 sm:text-5xl">
                {t("labs.hero.title")}
              </h1>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-text-1">
                {t("labs.hero.body")}
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-3">
                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center rounded-full bg-brand-primary px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_60px_rgba(0,156,194,0.25)] transition hover:brightness-110 focus:outline-none focus-visible:[box-shadow:var(--ring-primary)]"
                >
                  {t("labs.hero.ctaStart")}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link
                  href="/#results"
                  className="inline-flex items-center justify-center rounded-full border border-border-0 bg-surface-0 px-6 py-3 text-sm font-semibold text-text-0 transition hover:brightness-105 focus:outline-none focus-visible:[box-shadow:var(--ring-primary)]"
                >
                  {t("labs.hero.ctaForms")}
                </Link>
              </div>

              <p className="mt-6 text-xs text-text-2">{t("labs.hero.privacy")}</p>
            </div>

            <div className="relative overflow-hidden rounded-[28px] border border-border-0 bg-surface-0 shadow-[0_28px_90px_rgba(0,0,0,0.14)]">
              <div className="relative aspect-video w-full">
                <Image
                  src="/images/labs-need-test.png"
                  alt={t("labs.hero.imageAlt")}
                  fill
                  quality={95}
                  sizes="(min-width: 1024px) 520px, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:py-24">
          <div className="text-center">
            <div className="text-xs font-semibold tracking-[0.24em] text-text-2">
              {t("labs.viewLabs.kicker")}
            </div>
            <h2 className="mt-3 font-(--font-display) text-4xl tracking-tight text-text-0 sm:text-5xl">
              {t("labs.viewLabs.title")}
            </h2>
            <Link
              href="/#branches"
              className="mt-6 inline-flex items-center justify-center rounded-full bg-surface-1 px-7 py-3 text-xs font-semibold tracking-wide text-text-0 shadow-[0_16px_50px_rgba(0,0,0,0.10)] transition hover:brightness-105 focus:outline-none focus-visible:[box-shadow:var(--ring-primary)]"
            >
              {t("labs.viewLabs.cta")}
            </Link>
          </div>

          <div className="mt-10 overflow-hidden rounded-[28px] border border-border-0 bg-surface-0 shadow-[0_28px_90px_rgba(0,0,0,0.14)]">
            <div className="relative aspect-16/8 w-full">
              <Image
                src="/images/labs-view-labs.png"
                alt={t("labs.viewLabs.imageAlt")}
                fill
                quality={95}
                sizes="(min-width: 1024px) 1152px, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <News />

      <section className="relative">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:py-24">
          <div>
            <div className="text-xs font-semibold tracking-[0.24em] text-brand-primary">
              {t("labs.locations.kicker")}
            </div>
            <h2 className="mt-3 font-(--font-display) text-4xl tracking-tight text-text-0">
              {t("labs.locations.title")}
            </h2>
            <p className="mt-3 text-base text-text-1">{t("labs.locations.body")}</p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-12">
            <div className="rounded-[28px] border border-border-0 bg-surface-0 p-7 shadow-[0_25px_80px_rgba(0,0,0,0.12)] lg:col-span-4">
              <div className="space-y-5">
                {locations.map((l) => (
                  <div key={l.name} className="border-l-2 border-brand-primary/60 pl-4">
                    <div className="font-semibold text-text-0">{l.name}</div>
                    <div className="mt-1 text-sm text-text-2">{l.address}</div>
                    <Link
                      href="/#branches"
                      className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-brand-primary hover:text-text-0"
                    >
                      {t("labs.locations.viewMap")} <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                ))}
              </div>

              <Link
                href="/#branches"
                className="mt-6 inline-flex items-center gap-2 rounded-full border border-border-0 bg-surface-1 px-4 py-2 text-xs font-semibold text-text-0 transition hover:brightness-105 focus:outline-none focus-visible:[box-shadow:var(--ring-primary)]"
              >
                <MapPin className="h-4 w-4 text-brand-primary" />
                {t("labs.locations.openMaps")}
                <ExternalLink className="h-4 w-4 text-text-2" />
              </Link>
            </div>

            <div className="relative overflow-hidden rounded-[28px] border border-border-0 bg-surface-0 shadow-[0_25px_80px_rgba(0,0,0,0.12)] lg:col-span-8">
              <div className="relative aspect-video w-full">
                <Image
                  src="/images/labs-locations.png"
                  alt={t("labs.locations.mapAlt")}
                  fill
                  quality={95}
                  sizes="(min-width: 1024px) 768px, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

