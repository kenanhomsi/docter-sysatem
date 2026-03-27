import { useTranslations } from "next-intl";

export function Hero() {
  const t = useTranslations();

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-[var(--bg-0)]"
    >
      {/* Background video */}
      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
      >
        <source src="/images/hero1.mp4" type="video/mp4" />
      </video>
      <div className="hero-video__scrim" aria-hidden="true" />

      {/* Ambient glow layers — softer in light mode */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-0 h-[700px] w-[700px] rounded-full bg-[#009cc2]/10 blur-[130px] theme-light:bg-[#009cc2]/[0.07] theme-light:blur-[100px]" />
        <div className="absolute right-0 top-1/4 h-[500px] w-[500px] rounded-full bg-[#009cc2]/5 blur-[100px] theme-light:bg-[#009cc2]/[0.05]" />
        <div className="absolute bottom-0 left-1/3 h-[300px] w-[600px] rounded-full bg-[#ffd700]/5 blur-[100px] theme-light:bg-[#ffd700]/[0.08]" />
      </div>

      {/* Subtle grid — cyan on dark; slate-only layer in light */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03] theme-light:hidden"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,156,194,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,156,194,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 hidden opacity-[0.055] theme-light:block"
        style={{
          backgroundImage:
            "linear-gradient(rgba(6,24,44,0.14) 1px, transparent 1px), linear-gradient(90deg, rgba(6,24,44,0.14) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative mx-auto w-full max-w-7xl px-6 py-24 lg:py-32">
        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* ── LEFT: Text content ── */}
          <div className="flex flex-col">

            {/* Accreditation badge */}
            <div className="mb-8 inline-flex w-fit items-center gap-2 rounded-full border border-[var(--border-1)] bg-[var(--surface-0)] px-4 py-1.5 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-[#009cc2] shadow-[0_0_6px_#009cc2] theme-light:shadow-[0_0_4px_rgba(0,156,194,0.45)]" />
              <span className="text-xs font-semibold tracking-[0.18em] text-[#009cc2] uppercase">
                {t("hero.badge")}
              </span>
            </div>

            {/* Main heading */}
            <h1 className="text-5xl font-black leading-[1.02] tracking-tight text-[var(--text-0)] sm:text-6xl xl:text-7xl">
              {t("hero.title")}
              <br />
              <em
                className="font-black italic text-[#009cc2] theme-light:text-[#006f8c] [text-shadow:0_0_40px_rgba(0,156,194,0.45)] theme-light:[text-shadow:0_2px_20px_rgba(0,156,194,0.12)]"
              >
                {t("hero.titleAccent")}
              </em>
              <br />
              {t("hero.titleEnd")}
            </h1>

            {/* Subtitle */}
            <p className="mt-7 max-w-[480px] text-base leading-[1.75] text-[var(--text-2)] sm:text-lg">
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
                className="inline-block border border-[var(--border-0)] px-7 py-3.5 text-xs font-black uppercase tracking-[0.22em] text-[var(--text-0)] transition-all duration-200 hover:border-[var(--border-1)] hover:bg-[var(--surface-0)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--border-1)]"
              >
                {t("hero.ctaServices")}
              </a>
            </div>
          </div>

          {/* ── RIGHT: Glowing orb graphic ── */}
          <div className="relative flex items-center justify-center">
            <div className="relative h-[420px] w-[420px] sm:h-[480px] sm:w-[480px] orbital med-hover">

              {/* Outermost faint ring */}
              <div className="orbital-ring orbital-ring--outer border border-[#009cc2]/10 theme-light:border-[#009cc2]/22" />

              {/* Analytical lab HUD (appears on hover) */}
              <div className="lab-hud" aria-hidden>
                <div className="lab-hud__reticle" />
                <div className="lab-hud__scanline" />
                <div className="lab-hud__readout lab-hud__readout--tl">
                  <div className="lab-hud__k">QC</div>
                  <div className="lab-hud__v">OK</div>
                </div>
                <div className="lab-hud__readout lab-hud__readout--tr">
                  <div className="lab-hud__k">ANALYSIS</div>
                  <div className="lab-hud__v">RUNNING</div>
                </div>
                <div className="lab-hud__readout lab-hud__readout--bl">
                  <div className="lab-hud__k">SAMPLE</div>
                  <div className="lab-hud__v">A-17</div>
                </div>
                <div className="lab-hud__readout lab-hud__readout--br">
                  <div className="lab-hud__k">CONF.</div>
                  <div className="lab-hud__v">99.9%</div>
                </div>
              </div>

              {/* Chemical reaction vibe (field + bubbles + sparks) */}
              <div className="reaction-field" />
              <div className="reaction-bubbles">
                <span className="reaction-bubble" style={{ "--x": "34%", "--s": "10px", "--d": "4.6s", "--delay": "-0.8s" } as React.CSSProperties} />
                <span className="reaction-bubble" style={{ "--x": "46%", "--s": "14px", "--d": "5.2s", "--delay": "-2.4s" } as React.CSSProperties} />
                <span className="reaction-bubble" style={{ "--x": "58%", "--s": "9px", "--d": "4.1s", "--delay": "-1.6s" } as React.CSSProperties} />
                <span className="reaction-bubble" style={{ "--x": "67%", "--s": "12px", "--d": "5.8s", "--delay": "-3.1s" } as React.CSSProperties} />
                <span className="reaction-bubble" style={{ "--x": "39%", "--s": "8px", "--d": "3.9s", "--delay": "-2.0s" } as React.CSSProperties} />
                <span className="reaction-bubble" style={{ "--x": "52%", "--s": "11px", "--d": "4.9s", "--delay": "-0.2s" } as React.CSSProperties} />
              </div>
              <div className="reaction-sparks" />

              {/* Rotating dashed ring */}
              <div className="orbital-ring orbital-ring--dash inset-6 border border-[#009cc2]/20 theme-light:border-[#009cc2]/30 [border-style:dashed]" />

              {/* Second static ring */}
              <div className="absolute inset-12 rounded-full border border-[#009cc2]/30 theme-light:border-[#009cc2]/40" />

              {/* Third ring with tick marks simulation */}
              <div className="orbital-ring orbital-ring--mid inset-20 border border-[#009cc2]/40 theme-light:border-[#009cc2]/50" />

              {/* Inner glow disc */}
              <div className="absolute inset-28 rounded-full bg-[#009cc2]/10 backdrop-blur-sm theme-light:bg-[#009cc2]/[0.08]" />
              <div className="absolute inset-32 rounded-full bg-[#009cc2]/15 blur-md theme-light:bg-[#009cc2]/[0.10]" />
              <div className="absolute inset-36 rounded-full bg-[#009cc2]/20 blur-lg theme-light:bg-[#009cc2]/[0.12]" />

              {/* Center text */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <div className="font-mono text-[10px] tracking-[0.35em] text-[#009cc2]/50 uppercase theme-light:text-[#006f8c]/70">
                  DIAGNOSTIC
                </div>
                <div className="mt-2 font-mono text-[10px] tracking-[0.35em] text-[#009cc2]/50 uppercase theme-light:text-[#006f8c]/70">
                  PRECISION
                </div>
                <div className="mt-3 text-lg font-black uppercase tracking-[0.3em] text-[#009cc2] theme-light:text-[#006f8c] [text-shadow:0_0_20px_rgba(0,156,194,0.7)] theme-light:[text-shadow:none]">
                  EXCELLENCE
                </div>
              </div>

              {/* Orbiting electron */}
              <div className="orbital-orbit">
                <div className="orbital-electron theme-light:shadow-[0_0_8px_rgba(0,156,194,0.35)]" />
              </div>
              <div className="orbital-orbit orbital-orbit--slow">
                <div className="orbital-electron theme-light:shadow-[0_0_8px_rgba(0,156,194,0.35)] opacity-70 scale-90" />
              </div>

              {/* Stats card pinned to bottom */}
              <div className="absolute -bottom-6 left-1/2 flex min-w-[260px] -translate-x-1/2 overflow-hidden rounded-lg border border-[var(--border-0)] bg-[var(--surface-0)] backdrop-blur-md theme-light:shadow-[var(--shadow-soft)]">
                <div className="flex-1 border-r border-[var(--border-0)] px-5 py-4 text-center">
                  <div className="text-2xl font-black text-[#009cc2] theme-light:text-[#006f8c] [text-shadow:0_0_20px_rgba(0,156,194,0.5)] theme-light:[text-shadow:none]">
                    {t("hero.stat1Value")}
                  </div>
                  <div className="mt-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--text-2)]">
                    {t("hero.stat1Label")}
                  </div>
                </div>
                <div className="flex-1 px-5 py-4 text-center">
                  <div className="text-2xl font-black text-[#009cc2] theme-light:text-[#006f8c] [text-shadow:0_0_20px_rgba(0,156,194,0.5)] theme-light:[text-shadow:none]">
                    {t("hero.stat2Value")}
                  </div>
                  <div className="mt-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--text-2)]">
                    {t("hero.stat2Label")}
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom fade into next section */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-[var(--bg-0)] to-transparent" />
    </section>
  );
}
