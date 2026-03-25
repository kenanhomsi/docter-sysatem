"use client";

import {useLocale, useTranslations} from "next-intl";
import {usePathname, useRouter} from "@/i18n/navigation";
import {useSearchParams} from "next/navigation";
import {type Locale} from "@/i18n/routing";

function nextLocale(current: Locale) {
  return current === "ar" ? "en" : "ar";
}

function stripLocalePrefix(pathname: string) {
  const stripped = pathname.replace(/^\/(en|ar)(?=\/|$)/, "");
  return stripped === "" ? "/" : stripped;
}

export function LocaleSwitch() {
  const t = useTranslations();
  const router = useRouter();
  const locale = useLocale() as Locale;
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const target = nextLocale(locale);
  const unprefixedPath = stripLocalePrefix(pathname);
  const qs = searchParams?.toString();
  const hash = typeof window !== "undefined" ? window.location.hash : "";

  return (
    <button
      type="button"
      onClick={() => {
        const href = unprefixedPath + (qs ? `?${qs}` : "") + (hash || "");
        router.replace(href, {locale: target});
      }}
      className="inline-flex items-center justify-center rounded-full border border-border-0 bg-surface-0 px-3 py-2 text-xs font-semibold tracking-wide text-text-0 transition hover:brightness-110 focus:outline-none focus-visible:[box-shadow:var(--ring-primary)]"
      aria-label={t("nav.language")}
    >
      {target.toUpperCase()}
    </button>
  );
}

