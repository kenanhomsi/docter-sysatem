import {blogPosts} from "@/data/blog-posts";
import {ArrowRight, ArrowUpRight, Home} from "lucide-react";
import Image from "next/image";
import {getTranslations} from "next-intl/server";
import {Link} from "@/i18n/navigation";

function formatPostDate(iso: string, locale: string) {
  const d = new Date(iso + "T12:00:00");
  if (Number.isNaN(d.getTime())) return iso;
  return new Intl.DateTimeFormat(locale === "ar" ? "ar" : "en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(d);
}

type PostMetaProps = {
  category: string;
  publishedAt: string;
  dateLabel: string;
};

function PostMeta({category, publishedAt, dateLabel}: PostMetaProps) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="rounded-full border border-border-1/60 bg-brand-primary/10 px-3 py-1 text-[11px] font-semibold tracking-wide text-brand-primary">
        {category}
      </span>
      <span className="text-xs text-text-2" aria-hidden>
        ·
      </span>
      <time className="text-xs font-medium text-text-2" dateTime={publishedAt}>
        {dateLabel}
      </time>
    </div>
  );
}

export default async function BlogIndexPage({
  params,
}: {
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  const t = await getTranslations();
  const [featured, ...rest] = blogPosts;
  const count = blogPosts.length;

  return (
    <main className="flex-1 section-overlap">
      <section className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute -top-24 right-0 h-[420px] w-[420px] rounded-full bg-brand-primary/20 blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -bottom-32 left-1/4 h-[320px] w-[480px] rounded-full bg-brand-accent/10 blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.035] [background-image:linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:48px_48px]"
          aria-hidden
        />

        <div className="relative mx-auto max-w-6xl px-6 pb-12 pt-16 lg:pb-16 lg:pt-20">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-border-0 bg-surface-0 px-4 py-2 text-xs text-text-1">
                <span className="h-2 w-2 rounded-full bg-brand-accent shadow-[0_0_0_4px_rgba(255,215,0,0.15)]" />
                <span className="font-semibold tracking-[0.2em] text-brand-accent">
                  {t("blog.kicker")}
                </span>
                <span className="text-text-2">·</span>
                <span className="text-text-2">{t("blog.articleCount", {count})}</span>
              </div>

              <h1 className="mt-6 font-(--font-display) text-4xl leading-[1.08] tracking-tight text-text-0 sm:text-5xl">
                {t("blog.title")}
              </h1>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-text-1 sm:text-lg">
                {t("blog.subtitle")}
              </p>
            </div>

            <Link
              href="/#news"
              className="inline-flex shrink-0 items-center gap-2 self-start rounded-full border border-border-0 bg-surface-0 px-5 py-3 text-sm font-semibold text-text-0 shadow-[0_12px_40px_rgba(0,0,0,0.2)] transition hover:border-border-1 hover:brightness-105 focus:outline-none focus-visible:[box-shadow:var(--ring-primary)] lg:self-auto"
            >
              <Home className="h-4 w-4 text-brand-primary" />
              {t("blog.backToHome")}
            </Link>
          </div>
        </div>
      </section>

      <section className="relative">
        <div className="mx-auto max-w-6xl px-6 pb-20 lg:pb-28">
          {featured ? (
            <>
              <article className="group relative overflow-hidden rounded-[28px] border border-border-0 bg-surface-0 shadow-[0_25px_80px_rgba(0,0,0,0.22)] backdrop-blur transition duration-300 hover:border-border-1 hover:shadow-[0_32px_100px_rgba(0,0,0,0.28)]">
                <div className="grid lg:grid-cols-12 lg:gap-0">
                  <Link
                    href={`/blog/${featured.slug}`}
                    className="relative block aspect-[16/10] overflow-hidden lg:col-span-5 lg:aspect-auto lg:min-h-[300px]"
                  >
                    {featured.image ? (
                      <Image
                        src={featured.image}
                        alt={featured.title}
                        fill
                        className="object-cover transition duration-700 group-hover:scale-[1.04]"
                        sizes="(max-width: 1024px) 100vw, 42vw"
                        priority
                      />
                    ) : (
                      <div
                        className="absolute inset-0 bg-linear-to-tr from-brand-primary/30 via-surface-1 to-transparent"
                        aria-label={t("blog.imagePlaceholderAlt")}
                        role="img"
                      />
                    )}
                    <div className="absolute inset-0 bg-linear-to-t from-black/50 via-black/10 to-transparent lg:bg-linear-to-r" />
                    <span className="absolute left-5 top-5 rounded-full bg-brand-accent px-3 py-1 text-[10px] font-bold tracking-[0.15em] text-[#1a1400] shadow-md">
                      {t("blog.featured")}
                    </span>
                  </Link>

                  <div className="flex flex-col justify-center p-7 lg:col-span-7 lg:p-10 lg:pl-8">
                    <PostMeta
                      category={featured.category}
                      publishedAt={featured.publishedAt}
                      dateLabel={formatPostDate(featured.publishedAt, locale)}
                    />
                    <h2 className="mt-4 font-(--font-display) text-2xl font-semibold leading-snug tracking-tight text-text-0 sm:text-3xl">
                      <Link
                        href={`/blog/${featured.slug}`}
                        className="transition hover:text-brand-primary"
                      >
                        {featured.title}
                      </Link>
                    </h2>
                    <p className="mt-4 line-clamp-4 text-base leading-relaxed text-text-1">
                      {featured.excerpt}
                    </p>
                    <Link
                      href={`/blog/${featured.slug}`}
                      className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-brand-primary transition hover:gap-3"
                    >
                      {t("blog.readArticle")}
                      <ArrowRight className="h-4 w-4 rtl:rotate-180" />
                    </Link>
                  </div>
                </div>
              </article>

              {rest.length > 0 ? (
                <div className="mt-14">
                  <h2 className="mb-8 font-(--font-display) text-xl font-semibold tracking-tight text-text-0 sm:text-2xl">
                    {t("blog.moreArticles")}
                  </h2>
                  <div className="grid gap-6 md:grid-cols-2">
                    {rest.map((post) => (
                      <article
                        key={post.slug}
                        className="group flex h-full flex-col overflow-hidden rounded-[28px] border border-border-0 bg-surface-0 shadow-[0_20px_70px_rgba(0,0,0,0.18)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-border-1 hover:shadow-[0_28px_90px_rgba(0,0,0,0.25)]"
                      >
                        <Link href={`/blog/${post.slug}`} className="block shrink-0">
                          <div className="relative aspect-[16/10] w-full overflow-hidden">
                            {post.image ? (
                              <Image
                                src={post.image}
                                alt={post.title}
                                fill
                                className="object-cover opacity-95 transition duration-500 group-hover:scale-[1.05]"
                                sizes="(max-width: 768px) 100vw, 50vw"
                              />
                            ) : (
                              <div
                                className="absolute inset-0 bg-linear-to-tr from-black/35 via-white/5 to-transparent"
                                aria-label={t("blog.imagePlaceholderAlt")}
                                role="img"
                              />
                            )}
                            <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-black/10 opacity-80 transition group-hover:opacity-60" />
                          </div>
                        </Link>

                        <div className="flex flex-1 flex-col p-6">
                          <PostMeta
                            category={post.category}
                            publishedAt={post.publishedAt}
                            dateLabel={formatPostDate(post.publishedAt, locale)}
                          />
                          <h3 className="mt-3 text-lg font-semibold leading-snug text-text-0">
                            <Link
                              href={`/blog/${post.slug}`}
                              className="transition hover:text-brand-primary"
                            >
                              {post.title}
                            </Link>
                          </h3>
                          <p className="mt-3 line-clamp-3 flex-1 text-sm leading-relaxed text-text-1">
                            {post.excerpt}
                          </p>

                          <Link
                            href={`/blog/${post.slug}`}
                            className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-text-1 transition hover:text-brand-primary"
                          >
                            {t("blog.readArticle")}
                            <ArrowUpRight className="h-4 w-4 opacity-70 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 rtl:-scale-x-100" />
                          </Link>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              ) : null}
            </>
          ) : null}
        </div>
      </section>
    </main>
  );
}
