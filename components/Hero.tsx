import { useTranslations } from "next-intl";

export function Hero() {
  const t = useTranslations();

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#050914] min-h-screen flex items-center"
    >
      {/* Ambient glow layers */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-0 h-[700px] w-[700px] rounded-full bg-[#009cc2]/10 blur-[130px]" />
        <div className="absolute right-0 top-1/4 h-[500px] w-[500px] rounded-full bg-[#009cc2]/5 blur-[100px]" />
        <div className="absolute bottom-0 left-1/3 h-[300px] w-[600px] rounded-full bg-[#ffd700]/5 blur-[100px]" />
      </div>

      {/* Subtle grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,156,194,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,156,194,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative mx-auto w-full max-w-7xl px-6 py-24 lg:py-32">
        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* ── LEFT: Text content ── */}
          <div className="flex flex-col">

            {/* Accreditation badge */}
            <div className="mb-8 inline-flex w-fit items-center gap-2 rounded-full border border-[#009cc2]/40 bg-[#009cc2]/5 px-4 py-1.5 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-[#009cc2] shadow-[0_0_6px_#009cc2]" />
              <span className="text-xs font-semibold tracking-[0.18em] text-[#009cc2] uppercase">
                {t("hero.badge")}
              </span>
            </div>

            {/* Main heading */}
            <h1 className="font-black leading-[1.02] tracking-tight text-white text-5xl sm:text-6xl xl:text-7xl">
              {t("hero.title")}
              <br />
              <em
                className="font-black text-[#009cc2] italic"
                style={{
                  textShadow: "0 0 40px rgba(0,156,194,0.45)",
                }}
              >
                {t("hero.titleAccent")}
              </em>
              <br />
              {t("hero.titleEnd")}
            </h1>

            {/* Subtitle */}
            <p className="mt-7 max-w-[480px] text-base leading-[1.75] text-white/60 sm:text-lg">
              {t("hero.subtitle")}
            </p>

            {/* CTA buttons */}
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-block bg-[#ffd700] px-7 py-3.5 text-xs font-black tracking-[0.22em] text-black uppercase transition-all duration-200 hover:bg-[#ffe033] hover:shadow-[0_0_30px_rgba(255,215,0,0.4)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ffd700]"
              >
                {t("hero.ctaBook")}
              </a>
              <a
                href="#services"
                className="inline-block border border-white/40 px-7 py-3.5 text-xs font-black tracking-[0.22em] text-white uppercase transition-all duration-200 hover:border-white/70 hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
              >
                {t("hero.ctaServices")}
              </a>
            </div>
          </div>

          {/* ── RIGHT: Glowing orb graphic ── */}
          <div className="relative flex items-center justify-center">
            <div className="relative h-[420px] w-[420px] sm:h-[480px] sm:w-[480px]">

              {/* Outermost faint ring */}
              <div className="absolute inset-0 rounded-full border border-[#009cc2]/10" />

              {/* Rotating dashed ring */}
              <div
                className="absolute inset-6 rounded-full border border-[#009cc2]/20"
                style={{
                  animation: "spin 25s linear infinite",
                  borderStyle: "dashed",
                }}
              />

              {/* Second static ring */}
              <div className="absolute inset-12 rounded-full border border-[#009cc2]/30" />

              {/* Third ring with tick marks simulation */}
              <div
                className="absolute inset-20 rounded-full border border-[#009cc2]/40"
                style={{ animation: "spin 18s linear infinite reverse" }}
              />

              {/* Inner glow disc */}
              <div className="absolute inset-28 rounded-full bg-[#009cc2]/10 backdrop-blur-sm" />
              <div className="absolute inset-32 rounded-full bg-[#009cc2]/15 blur-md" />
              <div className="absolute inset-36 rounded-full bg-[#009cc2]/20 blur-lg" />

              {/* Center text */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <div className="font-mono text-[10px] tracking-[0.35em] text-[#009cc2]/50 uppercase">
                  DIAGNOSTIC
                </div>
                <div className="mt-2 font-mono text-[10px] tracking-[0.35em] text-[#009cc2]/50 uppercase">
                  PRECISION
                </div>
                <div className="mt-3 font-black text-lg tracking-[0.3em] text-[#009cc2] uppercase" style={{ textShadow: "0 0 20px rgba(0,156,194,0.7)" }}>
                  EXCELLENCE
                </div>
              </div>

              {/* Orbiting dot top */}
              <div
                className="absolute left-1/2 top-3 -translate-x-1/2 h-2 w-2 rounded-full bg-[#009cc2] shadow-[0_0_10px_#009cc2,0_0_20px_#009cc2]"
                style={{ animation: "spin 8s linear infinite" }}
              />

              {/* Stats card pinned to bottom */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex min-w-[260px] overflow-hidden rounded-lg border border-white/10 bg-white/5 backdrop-blur-md">
                <div className="flex-1 border-r border-white/10 px-5 py-4 text-center">
                  <div
                    className="text-2xl font-black text-[#009cc2]"
                    style={{ textShadow: "0 0 20px rgba(0,156,194,0.5)" }}
                  >
                    {t("hero.stat1Value")}
                  </div>
                  <div className="mt-1 text-[10px] font-semibold tracking-[0.2em] text-white/40 uppercase">
                    {t("hero.stat1Label")}
                  </div>
                </div>
                <div className="flex-1 px-5 py-4 text-center">
                  <div
                    className="text-2xl font-black text-[#009cc2]"
                    style={{ textShadow: "0 0 20px rgba(0,156,194,0.5)" }}
                  >
                    {t("hero.stat2Value")}
                  </div>
                  <div className="mt-1 text-[10px] font-semibold tracking-[0.2em] text-white/40 uppercase">
                    {t("hero.stat2Label")}
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom fade into next section */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-[#050914] to-transparent" />
    </section>
  );
}
