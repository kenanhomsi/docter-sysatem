import { Calendar, Phone, User } from "lucide-react";
import { useTranslations } from "next-intl";

export function Contact() {
  const t = useTranslations();
  return (
    <section id="contact" className="relative">
      <div className="mx-auto max-w-6xl px-6 py-18 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <div className="text-xs font-semibold tracking-[0.24em] text-brand-primary">
              {t("contact.kicker")}
            </div>
            <h2 className="mt-4 font-(--font-display) text-3xl tracking-tight text-text-0 sm:text-4xl">
              {t("contact.title")}
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-text-1">
              {t("contact.subtitle")}
            </p>

            <div className="mt-8 space-y-4 rounded-[28px] border border-border-0 bg-surface-0 p-7 shadow-[0_25px_80px_rgba(0,0,0,0.16)] backdrop-blur">
              <div className="text-sm font-semibold text-text-0">
                {t("contact.infoTitle")}
              </div>
              <div className="grid gap-3 text-sm text-text-1">
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-brand-primary" />
                  <span>
                    {t("contact.landline")}: 011-3340604
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-brand-primary" />
                  <span>
                    {t("contact.mobile")}: 0991828342
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-brand-accent" />
                  <span>
                    {t("contact.emergency")}: 9547
                  </span>
                </div>
                <div className="pt-2 text-text-2">
                  {t("contact.address")}
                </div>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[28px] border border-border-0 bg-surface-0 p-7 shadow-[0_25px_80px_rgba(0,0,0,0.16)] backdrop-blur">
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-brand-primary/14 blur-3xl" />

            <form className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-2 inline-flex items-center gap-2 text-xs font-semibold tracking-wide text-text-2">
                    <User className="h-4 w-4 text-brand-primary" />
                    {t("contact.form.nameLabel")}
                  </span>
                  <input
                    className="w-full rounded-2xl border border-border-0 bg-surface-1 px-4 py-3 text-sm text-text-0 outline-none placeholder:text-text-2 focus:[box-shadow:var(--ring-primary)]"
                    placeholder={t("contact.form.namePlaceholder")}
                    name="name"
                    required
                  />
                </label>
                <label className="block">
                  <span className="mb-2 inline-flex items-center gap-2 text-xs font-semibold tracking-wide text-text-2">
                    <Phone className="h-4 w-4 text-brand-primary" />
                    {t("contact.form.phoneLabel")}
                  </span>
                  <input
                    className="w-full rounded-2xl border border-border-0 bg-surface-1 px-4 py-3 text-sm text-text-0 outline-none placeholder:text-text-2 focus:[box-shadow:var(--ring-primary)]"
                    placeholder={t("contact.form.phonePlaceholder")}
                    name="phone"
                    required
                  />
                </label>
              </div>

              <label className="block">
                <span className="mb-2 inline-flex items-center gap-2 text-xs font-semibold tracking-wide text-text-2">
                  <Calendar className="h-4 w-4 text-brand-primary" />
                  {t("contact.form.dateLabel")}
                </span>
                <input
                  type="date"
                  className="w-full rounded-2xl border border-border-0 bg-surface-1 px-4 py-3 text-sm text-text-0 outline-none placeholder:text-text-2 focus:[box-shadow:var(--ring-primary)]"
                  name="visitDate"
                  required
                />
              </label>

              <label className="block">
                <span className="mb-2 inline-flex items-center gap-2 text-xs font-semibold tracking-wide text-text-2">
                  {t("contact.form.detailsLabel")}
                </span>
                <textarea
                  className="min-h-32 w-full resize-none rounded-2xl border border-border-0 bg-surface-1 px-4 py-3 text-sm text-text-0 outline-none placeholder:text-text-2 focus:[box-shadow:var(--ring-primary)]"
                  placeholder={t("contact.form.detailsPlaceholder")}
                  name="details"
                />
              </label>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-2xl bg-brand-primary px-5 py-3 text-sm font-semibold text-white shadow-[0_18px_60px_rgba(0,156,194,0.35)] transition hover:brightness-110 focus:outline-none focus-visible:[box-shadow:var(--ring-primary)]"
              >
                {t("contact.form.submit")}
              </button>

              <p className="text-xs leading-relaxed text-text-2">
                {t("contact.form.note")}
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

