import { Box, Pencil, Download } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Step = {
  n: string;
  icon: LucideIcon;
  title: string;
  body: string;
};

const steps: Step[] = [
  {
    n: "01",
    icon: Box,
    title: "Install on your box",
    body: "Pick your install — Mac, Docker, or StartOS. Same engine, same ledger, same reports. Install once, open the app. Runs on a Mac, a Pi, an old laptop, or a Start9 server.",
  },
  {
    n: "02",
    icon: Pencil,
    title: "Enter transactions manually",
    body: "Buys, sells, transfers, spends, income. Paste from CSV or type one at a time. The ledger checks itself — no silent drift.",
  },
  {
    n: "03",
    icon: Download,
    title: "Export IRS forms",
    body: "Pick a tax year, pick a format. Complete tax report, Form 8949, Schedule D, or raw transaction history. PDF or CSV.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how"
      className="border-y border-hairline bg-bg-elevated px-6 py-24"
    >
      <div className="mx-auto max-w-[1160px]">
        <p className="m-0 mb-4 font-mono text-xs uppercase tracking-[0.18em] text-accent-gold">
          How it works
        </p>
        <h2 className="m-0 mb-4 max-w-[28ch] font-display text-[2rem] font-semibold leading-tight tracking-[-0.02em] text-text">
          Three steps, on your own box.
        </h2>
        <p className="m-0 max-w-[56ch] text-lg leading-relaxed text-text-secondary">
          No signup, no onboarding flow, no "connect your Coinbase." Pull the
          image, enter your history, export the forms.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
          {steps.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.n}
                className="relative flex flex-col gap-3 rounded-xl border border-hairline bg-panel p-6"
              >
                <span className="absolute right-6 top-5 font-mono text-xs tracking-[0.1em] text-text-muted">
                  {s.n}
                </span>
                <div
                  className="mb-2 grid h-12 w-12 place-items-center rounded-md border text-accent-gold"
                  style={{
                    backgroundColor: "rgba(229,180,90,0.1)",
                    borderColor: "rgba(229,180,90,0.2)",
                  }}
                >
                  <Icon className="h-6 w-6" strokeWidth={1.75} />
                </div>
                <h3 className="m-0 border-b border-hairline-strong pb-2 font-display text-xl font-semibold tracking-[-0.02em] text-accent-gold">
                  {s.title}
                </h3>
                <p className="m-0 text-base leading-relaxed text-text-secondary">
                  {s.body}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
