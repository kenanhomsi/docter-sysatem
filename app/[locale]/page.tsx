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

export default async function Home() {
  const t = await getTranslations();



  return (
    <div className="flex flex-1 flex-col">
      <ScrollToHashOnMount />
      <TopBar />
      <Navbar />
      <main className="flex-1 section-overlap">
        <Hero />
        <IsoBanner />
        <About />
        <StackedImagesSection />
        <MissionCards />
        <Services />
        <News />
        <Branches />
        <section id="results" className="relative">
          <div className="mx-auto max-w-6xl px-6 py-18 lg:py-24">
            <div className="rounded-[28px] border border-white/10 bg-white/5 p-10 text-center shadow-[0_25px_80px_rgba(0,0,0,0.45)] backdrop-blur">
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
                className="mt-7 inline-flex items-center justify-center rounded-full bg-brand-primary px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_60px_rgba(0,156,194,0.35)] transition hover:brightness-110 focus:outline-none focus-visible:[box-shadow:var(--ring-primary)]"
              >
                {t("home.results.cta")}
              </a>
            </div>
          </div>
        </section>
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

