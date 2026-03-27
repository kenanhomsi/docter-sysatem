import { About } from "@/components/About";
import { Branches } from "@/components/Branches";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { ScrollToHashOnMount } from "@/components/ScrollToHashOnMount";
import { IsoBanner } from "@/components/IsoBanner";
import { MissionCards } from "@/components/MissionCards";
import { Navbar } from "@/components/Navbar";
import { News } from "@/components/News";
import { Services } from "@/components/Services";
import { StackedImagesSection } from "@/components/StackedImagesSection";
import { TopBar } from "@/components/TopBar";
import { getTranslations } from "next-intl/server";
import type { CSSProperties } from "react";

export default async function Home() {
  const t = await getTranslations();

  return (
    <div className="flex flex-1 flex-col">
      <ScrollToHashOnMount />
      <TopBar />
      <Navbar />
      <main className="flex-1 section-overlap">
        <section data-reveal="fade-up" data-bg-logo-section>
          <Hero />
        </section>
        <section data-reveal="fade-up" data-bg-logo-section style={{ "--reveal-delay": "60ms" } as CSSProperties}>
          <IsoBanner />
        </section>
        <section data-reveal="fade-up" data-bg-logo-section style={{ "--reveal-delay": "90ms" } as CSSProperties}>
          <About />
        </section>
        <section data-reveal="fade-up" data-bg-logo-section>
          <StackedImagesSection />
        </section>
        <section data-reveal="fade-up" data-bg-logo-section>
          <MissionCards />
        </section>
        <section data-reveal="fade-up" data-bg-logo-section>
          <Services />
        </section>
        <section data-reveal="fade-up" data-bg-logo-section>
          <News />
        </section>
        <section data-reveal="fade-up" data-bg-logo-section>
          <Branches />
        </section>
        <section id="results" className="relative" data-reveal="zoom" data-bg-logo-section>
          <div className="mx-auto max-w-6xl px-6 py-18 lg:py-24">
            <div className="rounded-[28px] border border-white/10 bg-white/5 p-10 text-center shadow-[0_25px_80px_rgba(0,0,0,0.45)] backdrop-blur hover-lift hover-glow chem-hover">
              <div className="text-xs font-semibold tracking-[0.24em] text-brand-primary">
                {t("home.results.kicker")}
              </div>
              <h2 className="mt-4 font-(--font-display) text-3xl tracking-tight text-white sm:text-4xl">
                {t("home.results.title")}
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-text-1">
                {t("home.results.body")}
              </p>
              <a
                href="#contact"
                className="mt-7 inline-flex items-center justify-center rounded-full bg-brand-primary px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_60px_rgba(0,156,194,0.35)] transition hover:brightness-110 focus:outline-none focus-visible:[box-shadow:var(--ring-primary)] hover-lift"
              >
                {t("home.results.cta")}
              </a>
            </div>
          </div>
        </section>
        <section data-reveal="fade-up" data-bg-logo-section>
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}

