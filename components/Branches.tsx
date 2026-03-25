import { MapPin, Navigation } from "lucide-react";
import { BranchMap } from "@/components/BranchMap";
import { useTranslations } from "next-intl";

export function Branches() {
  const t = useTranslations();
  const branches = [
    { name: t("branches.items.0.name"), address: t("branches.items.0.address") },
    { name: t("branches.items.1.name"), address: t("branches.items.1.address") },
  ];

  return (
    <section id="branches" className="relative">
      <div className="mx-auto max-w-6xl px-6 py-18 lg:py-24">
        <div className="text-center">
          <div className="text-xs font-semibold tracking-[0.24em] text-brand-primary">
            {t("branches.kicker")}
          </div>
          <h2 className="mt-4 font-(--font-display) text-3xl tracking-tight text-text-0 sm:text-4xl">
            {t("branches.title")}
          </h2>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {branches.map((b, idx) => (
            <div
              key={b.name}
              className="group relative overflow-hidden rounded-[28px] border border-border-0 bg-surface-0 shadow-[0_25px_80px_rgba(0,0,0,0.16)] backdrop-blur"
            >
              <div className="pointer-events-none absolute -right-18 -top-18 h-60 w-60 rounded-full bg-brand-primary/12 blur-3xl" />

              <div className="p-7">
                <BranchMap address={b.address} className="mb-5" />

                <div className="flex items-start justify-between gap-6">
                  <div className="flex items-start gap-4">
                    <div className="mt-1 rounded-2xl border border-border-0 bg-surface-1 p-3">
                      <MapPin
                        className={`h-6 w-6 ${
                          idx === 0 ? "text-brand-primary" : "text-brand-accent"
                        }`}
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-text-0">
                        {b.name}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-text-2">
                        {b.address}
                      </p>
                    </div>
                  </div>
                </div>

                <a
                  href={`https://www.openstreetmap.org/search?query=${encodeURIComponent(
                    b.address,
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-primary transition group-hover:text-text-0"
                >
                  {t("branches.getDirections")}
                  <Navigation className="h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

