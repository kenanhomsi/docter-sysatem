import { Clock, PhoneCall, Radio, Smartphone } from "lucide-react";
import { useTranslations } from "next-intl";

const info = {
  tel: "0113340604",
  cell: "0991828342",
  emergency: "9547",
  hours: "08:00 - 22:00",
};

export function TopBar() {
  const t = useTranslations();
  return (
    <div className="hidden lg:block">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-center justify-between py-3 text-[11px] tracking-wide text-text-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              <span className="text-text-1">{t("topbar.systemOnline")}</span>
            </span>
          </div>

          <div className="flex items-center gap-6">
            <span className="inline-flex items-center gap-2">
              <PhoneCall className="h-3.5 w-3.5 text-brand-primary" />
              <span>
                {t("topbar.tel")}: {info.tel}
              </span>
            </span>
            <span className="inline-flex items-center gap-2">
              <Smartphone className="h-3.5 w-3.5 text-brand-primary" />
              <span>
                {t("topbar.cell")}: {info.cell}
              </span>
            </span>
            <span className="inline-flex items-center gap-2">
              <Radio className="h-3.5 w-3.5 text-brand-accent" />
              <span>
                {t("topbar.emergency")}: {info.emergency}
              </span>
            </span>
            <span className="inline-flex items-center gap-2">
              <Clock className="h-3.5 w-3.5 text-brand-secondary" />
              <span>
                {t("topbar.labHours")}: {info.hours}
              </span>
            </span>
          </div>
        </div>
      </div>
      <div className="h-px w-full bg-white/5" />
    </div>
  );
}

