import Image from "next/image";
import { useTranslations } from "next-intl";

type Props = {
  title?: string;
  subtitle?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  privacyNote?: string;
  privacyHref?: string;
  images?: Array<{ src: string; alt: string }>;
  id?: string;
};

export function StackedImagesSection({
  id = "booking",
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  privacyNote,
  privacyHref = "/terms",
  images = [
    { src: "/images/collage-1.jpg", alt: "Lab image 1" },
    { src: "/images/collage-4.jpg", alt: "Lab image 2" },
    { src: "/images/collage-3.jpg", alt: "Lab image 3" },
    { src: "/images/collage-2.jpg", alt: "Lab image 4" },
    { src: "/images/collage-5.jpg", alt: "Lab image 5" },
  ],
}: Props) {
  const t = useTranslations();
  const resolvedTitle = title ?? t("stacked.title");
  const resolvedSubtitle = subtitle ?? t("stacked.subtitle");
  const resolvedPrimaryCta = primaryCta ?? { label: t("stacked.primaryCta"), href: "/#results" };
  const resolvedSecondaryCta = secondaryCta ?? { label: t("stacked.secondaryCta"), href: "/#contact" };
  const resolvedPrivacyNote = privacyNote ?? t("stacked.privacyNote");

  return (
    <section id={id} className="relative" data-reveal="fade-up">
      <div className="mx-auto max-w-6xl px-6 py-14 lg:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-(--font-display) text-4xl tracking-tight text-text-0 sm:text-5xl">
              {resolvedTitle}
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-text-1">
              {resolvedSubtitle}
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href={resolvedPrimaryCta.href}
                className="inline-flex items-center justify-center rounded-full border border-border-0 bg-surface-0 px-6 py-3 text-sm font-semibold text-text-0 transition hover:brightness-105 focus:outline-none focus-visible:[box-shadow:var(--ring-primary)]"
              >
                {resolvedPrimaryCta.label}
              </a>
              {resolvedSecondaryCta ? (
                <a
                  href={resolvedSecondaryCta.href}
                  className="inline-flex items-center justify-center rounded-full bg-[#009cc2] px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_60px_rgba(91,58,22,0.25)] transition hover:brightness-110 focus:outline-none focus-visible:[box-shadow:var(--ring-primary)]"
                >
                  {resolvedSecondaryCta.label}
                </a>
              ) : null}
            </div>

            <p className="mt-6 text-xs text-text-2">
              <a href={privacyHref} className="underline decoration-white/25 underline-offset-2 hover:decoration-white/50">
                {resolvedPrivacyNote}
              </a>
            </p>
          </div>

          <div className="relative collage-stage">
            <div className="pointer-events-none absolute -inset-6 rounded-[34px] bg-linear-to-br from-black/8 via-black/0 to-black/10 blur-2xl" />

            <div className="relative mx-auto max-w-[520px]">
              <div className="grid grid-cols-12 gap-4 auto-rows-[56px] sm:auto-rows-[64px]">
                {/* Top-left (smaller) */}
                <div className="col-start-2 col-span-5 row-start-2 row-span-3 overflow-hidden rounded-[18px] shadow-[0_16px_50px_rgba(0,0,0,0.18)] collage-tile collage-drift-1 hover-glow">
                  <div className="relative h-full w-full">
                    <Image
                      src={images[0]?.src ?? "/images/collage-1.png"}
                      alt={images[0]?.alt ?? "Lab image"}
                      fill
                      className="object-cover transition-transform duration-500 ease-out hover:scale-[1.04]"
                    />
                  </div>
                </div>

                {/* Top-right (tall) */}
                <div className="col-start-8 col-span-5 row-start-1 row-span-4 overflow-hidden rounded-[18px] shadow-[0_16px_50px_rgba(0,0,0,0.18)] collage-tile collage-drift-2 hover-glow">
                  <div className="relative h-full w-full">
                    <Image
                      src={images[1]?.src ?? "/images/collage-2.png"}
                      alt={images[1]?.alt ?? "Lab image"}
                      fill
                      className="object-cover transition-transform duration-500 ease-out hover:scale-[1.04]"
                    />
                  </div>
                </div>

                {/* Bottom-left */}
                <div className="col-start-1 col-span-5 row-start-5 row-span-3 overflow-hidden rounded-[18px] shadow-[0_16px_50px_rgba(0,0,0,0.18)] collage-tile collage-drift-3 hover-glow">
                  <div className="relative h-full w-full">
                    <Image
                      src={images[2]?.src ?? "/images/collage-3.png"}
                      alt={images[2]?.alt ?? "Lab image"}
                      fill
                      className="object-cover transition-transform duration-500 ease-out hover:scale-[1.04]"
                    />
                  </div>
                </div>

                {/* Bottom-middle (slightly lower) */}
                <div className="col-start-6 col-span-4 row-start-6 row-span-3 overflow-hidden rounded-[18px] shadow-[0_16px_50px_rgba(0,0,0,0.18)] translate-y-3 sm:translate-y-4 collage-tile collage-drift-4 hover-glow">
                  <div className="relative h-full w-full">
                    <Image
                      src={images[3]?.src ?? "/images/collage-4.png"}
                      alt={images[3]?.alt ?? "Lab image"}
                      fill
                      className="object-cover transition-transform duration-500 ease-out hover:scale-[1.04]"
                    />
                  </div>
                </div>

                {/* Bottom-right */}
                <div className="col-start-10 col-span-6 row-start-5 row-span-4 overflow-hidden rounded-[18px] shadow-[0_16px_50px_rgba(0,0,0,0.18)] collage-tile collage-drift-5 hover-glow">
                  <div className="relative h-full w-full">
                    <Image
                      src={images[4]?.src ?? "/images/collage-5.png"}
                      alt={images[4]?.alt ?? "Lab image"}
                      fill
                      className="object-cover transition-transform duration-500 ease-out hover:scale-[1.04]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

