import { ArrowRight } from "lucide-react";
import { HashAwareLink } from "@/components/HashAwareLink";
import { ThemeToggle } from "@/components/ThemeToggle";
import { LocaleSwitch } from "@/components/LocaleSwitch";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

const links: { key: string; sectionId?: string; href?: string }[] = [
  { key: "home", sectionId: "home" },
  { key: "about", sectionId: "about" },
  { key: "services", sectionId: "services" },
  { key: "blog", href: "/blog" },
  { key: "news", sectionId: "news" },
  { key: "results", sectionId: "results" },
  { key: "contact", sectionId: "contact" },
];

export function Navbar() {
  const t = useTranslations();
  return (
    <header className="sticky top-0 z-40">
      <div className="border-b border-border-0 bg-surface-1 backdrop-blur-xl">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex items-center justify-between py-4">
            <HashAwareLink
              sectionId="home"
              className="group inline-flex items-center gap-2 font-(--font-display) text-lg tracking-wide"
            >
              <span className="text-text-0">METWALI</span>
              <span className="text-brand-primary">LABS</span>
              <span className="ml-2 hidden rounded-full border border-border-0 bg-surface-0 px-2 py-0.5 text-[10px] text-text-2 lg:inline-flex">
                ISO 9001
              </span>
            </HashAwareLink>

            <nav className="hidden items-center gap-7 text-sm text-text-1 lg:flex">
              {links.map((l) =>
                l.href ? (
                  <Link
                    key={l.key}
                    href={l.href}
                    className="relative transition-colors hover:text-text-0"
                  >
                    {t(`nav.${l.key}`)}
                  </Link>
                ) : (
                  <HashAwareLink
                    key={l.key}
                    sectionId={l.sectionId!}
                    className="relative transition-colors hover:text-text-0"
                  >
                    {t(`nav.${l.key}`)}
                  </HashAwareLink>
                ),
              )}
            </nav>

            <div className="flex items-center gap-3">
              <ThemeToggle />
              <LocaleSwitch />
              <HashAwareLink
                sectionId="contact"
                className="inline-flex items-center gap-2 rounded-full bg-brand-primary px-5 py-2.5 text-sm font-semibold text-white shadow-[0_18px_60px_rgba(0,156,194,0.35)] transition hover:brightness-110 focus:outline-none focus-visible:[box-shadow:var(--ring-primary)]"
              >
                {t("nav.bookAppointment")}
                <ArrowRight className="h-4 w-4" />
              </HashAwareLink>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

