import { blogPosts } from "@/data/blog-posts";
import { Link } from "@/i18n/navigation";
import { notFound } from "next/navigation";
import Image from "next/image";
import { getTranslations } from "next-intl/server";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const t = await getTranslations();

  return (
    <main className="flex-1 section-overlap">
      <section className="relative">
        <div className="mx-auto max-w-4xl px-6 py-16 lg:py-24">
          <Link
            href="/blog"
            className="inline-flex items-center rounded-full border border-border-0 bg-surface-0 px-4 py-2 text-xs font-semibold tracking-wide text-text-1 transition hover:brightness-105 focus:outline-none focus-visible:[box-shadow:var(--ring-primary)]"
          >
            {t("blog.backToBlog")}
          </Link>

          <div className="mt-6 flex flex-wrap items-center gap-2">
            <div className="rounded-full border border-border-0 bg-surface-0 px-3 py-1 text-[11px] font-semibold tracking-[0.22em] text-brand-primary">
              {post.category}
            </div>
            <div className="text-xs text-text-2">·</div>
            <time className="text-xs text-text-2" dateTime={post.publishedAt}>
              {post.publishedAt}
            </time>
          </div>

          <h1 className="mt-5 font-(--font-display) text-4xl tracking-tight text-text-0 sm:text-5xl">
            {post.title}
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-text-1">
            {post.excerpt}
          </p>

          <div className="mt-10 overflow-hidden rounded-[28px] border border-border-0 bg-surface-0 shadow-[0_25px_80px_rgba(0,0,0,0.12)]">
            <div className="relative aspect-16/8 w-full">
              {post.image ? (
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  quality={95}
                  sizes="(min-width: 1024px) 896px, 100vw"
                  className="object-cover"
                />
              ) : (
                <div
                  className="absolute inset-0 bg-linear-to-tr from-black/35 via-white/5 to-transparent"
                  aria-label={t("blog.imagePlaceholderAlt")}
                  role="img"
                />
              )}
              <div className="absolute inset-0 bg-linear-to-tr from-black/20 via-black/5 to-black/5" />
            </div>
          </div>

          <article className="prose prose-invert mt-10 max-w-none">
            {post.body.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </article>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href={post.sourceUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-brand-primary px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_60px_rgba(0,156,194,0.25)] transition hover:brightness-110 focus:outline-none focus-visible:[box-shadow:var(--ring-primary)]"
            >
              {t("blog.originalSource")}
            </a>
            <Link
              href="/blog"
              className="inline-flex items-center justify-center rounded-full border border-border-0 bg-surface-0 px-6 py-3 text-sm font-semibold text-text-0 transition hover:brightness-105 focus:outline-none focus-visible:[box-shadow:var(--ring-primary)]"
            >
              {t("blog.viewAll")}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

