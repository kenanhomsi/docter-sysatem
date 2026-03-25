import { useTranslations } from "next-intl";

export function Footer() {
  const t = useTranslations();

  return (
    <footer className="border-t border-border-0 bg-surface-1">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-10 lg:grid-cols-3">
          <div>
            <div className="font-(--font-display) text-lg tracking-wide text-text-0">
              METWALI <span className="text-brand-primary">LABS</span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-text-2">
              {t("footer.description")}
            </p>
          </div>

          <div>
            <div className="text-sm font-semibold text-text-0">
              {t("footer.addressTitle")}
            </div>
            <p className="mt-3 text-sm leading-relaxed text-text-2">
              {t("footer.addressBody")}
            </p>
          </div>

          <div>
            <div className="text-sm font-semibold text-text-0">
              {t("footer.contactTitle")}
            </div>
            <div className="mt-3 space-y-2 text-sm text-text-2">
              <div>
                {t("footer.landline")}: 011-3340604
              </div>
              <div>
                {t("footer.mobile")}: 0991828342
              </div>
              <div>
                {t("topbar.emergency")}: 9547
              </div>
            </div>
            <div className="mt-4 flex items-center gap-3 text-sm text-text-2">
              <a className="hover:text-text-0" href="#" aria-label="Facebook">
                Facebook
              </a>
              <span className="text-text-2/60">·</span>
              <a className="hover:text-text-0" href="#" aria-label="Instagram">
                Instagram
              </a>
              <span className="text-text-2/60">·</span>
              <a className="hover:text-text-0" href="#" aria-label="YouTube">
                YouTube
              </a>
              <span className="text-text-2/60">·</span>
              <a className="hover:text-text-0" href="#" aria-label="Twitter">
                Twitter
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-border-0 pt-6 text-xs text-text-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            © {new Date().getFullYear()} Metwali Labs. {t("footer.rights")}
          </div>
          <div>{t("footer.poweredBy")}</div>
        </div>
      </div>
    </footer>
  );
}

