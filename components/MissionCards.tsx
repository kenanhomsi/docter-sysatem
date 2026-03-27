import { Eye, Flag, MessageSquare } from "lucide-react";
import { useTranslations } from "next-intl";

const icons = [Flag, Eye, MessageSquare] as const;

export function MissionCards() {
  const t = useTranslations();
  const cards = t.raw("mission.cards") as Array<{ title: string; body: string }>;

  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-6 py-18 lg:py-24">
        <div className="grid gap-6 lg:grid-cols-3">
          {cards.map((c, idx) => {
            const Icon = icons[idx] ?? Flag;
            return (
              <div
                key={c.title}
                className="group relative overflow-hidden rounded-[28px] border border-border-0 bg-surface-0 p-7 shadow-[0_25px_80px_rgba(0,0,0,0.16)] backdrop-blur hover-lift hover-glow chem-hover"
              >

                <div className="flex items-start justify-between gap-6">
                  <div>
                    <div className="text-xs font-semibold tracking-[0.22em] text-brand-primary">
                      {c.title.toUpperCase()}
                    </div>
                    <h3 className="mt-3 font-(--font-display) text-xl text-text-0">
                      {c.title}
                    </h3>
                  </div>
                  <div className="rounded-2xl border border-border-0 bg-surface-1 p-3">
                    <Icon className="h-6 w-6 text-brand-primary" />
                  </div>
                </div>

                <p className="mt-5 text-sm leading-relaxed text-text-2">
                  {c.body}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

