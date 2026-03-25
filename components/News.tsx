"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { blogPosts } from "@/data/blog-posts";
import { Link } from "@/i18n/navigation";

export function News() {
  const t = useTranslations();
  const articles = blogPosts.slice(0, 3);

  return (
    <section id="news" className="relative">
      <div className="mx-auto max-w-6xl px-6 py-18 lg:py-24">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <div className="text-xs font-semibold tracking-[0.24em] text-brand-accent">
              {t("news.kicker")}
            </div>
            <h2 className="mt-4 font-(--font-display) text-3xl tracking-tight text-text-0 sm:text-4xl">
              {t("news.title")}
            </h2>
          </div>

          <Link
            href="/blog"
            className="rounded-full border border-border-0 bg-surface-0 px-5 py-2.5 text-xs font-semibold tracking-wide text-text-1 transition hover:brightness-105 focus:outline-none focus-visible:[box-shadow:var(--ring-primary)]"
          >
            {t("news.viewAll")}
          </Link>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {articles.map((a) => (
            <article
              key={a.slug}
              className="group overflow-hidden rounded-[28px] border border-border-0 bg-surface-0 shadow-[0_25px_80px_rgba(0,0,0,0.18)] backdrop-blur"
            >
              <Link href={`/blog/${a.slug}`} className="block">
                <div className="relative aspect-4/3 w-full">
                  {a.image ? (
                    <Image
                      src={a.image}
                      alt={a.title}
                      fill
                      className="object-cover opacity-90 transition duration-500 group-hover:scale-[1.02]"
                    />
                  ) : (
                    <div
                      className="absolute inset-0 bg-linear-to-tr from-black/35 via-white/5 to-transparent"
                      aria-label={t("blog.imagePlaceholderAlt")}
                      role="img"
                    />
                  )}
                  <div className="absolute inset-0 bg-linear-to-tr from-black/35 via-black/5 to-black/5" />
                </div>
              </Link>
              <div className="p-6">
                <div className="text-[11px] font-semibold tracking-[0.22em] text-brand-primary">
                  {a.category}
                </div>
                <h3 className="mt-3 text-lg font-semibold leading-snug text-text-0">
                  {a.title}
                </h3>
                <Link
                  href={`/blog/${a.slug}`}
                  className="mt-5 inline-flex text-sm font-semibold text-text-1 transition hover:text-text-0"
                >
                  {t("news.readArticle")}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

