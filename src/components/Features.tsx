import { AlignJustify, TrendingUp, FileText } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Feature = {
  icon: LucideIcon;
  title: string;
  body: React.ReactNode;
};

const features: Feature[] = [
  {
    icon: AlignJustify,
    title: "Double-entry accounting",
    body: (
      <>
        Every transaction creates linked debit and credit lines. Cash flows in,
        cash flows out, and the books always balance — the same discipline banks
        use, applied to your sats.
      </>
    ),
  },
  {
    icon: TrendingUp,
    title: "FIFO cost basis",
    body: (
      <>
        Acquired BTC is consumed in the order you bought it. Short-term and
        long-term gains split automatically at the{" "}
        <code className="rounded-[3px] bg-surface px-[6px] py-px font-mono text-[0.92em] text-text">
          365-day
        </code>{" "}
        holding line — no manual lot picking.
      </>
    ),
  },
  {
    icon: FileText,
    title: "IRS-ready reports",
    body: (
      <>
        Form 8949 and Schedule D, populated from your ledger and exported as
        PDF or CSV. Drop them into TurboTax, hand them to a CPA, or file direct.
      </>
    ),
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="border-y border-hairline bg-bg-elevated px-6 py-24"
    >
      <div className="mx-auto max-w-[1160px]">
        <p className="m-0 mb-4 font-mono text-xs uppercase tracking-[0.18em] text-accent-gold">
          What it does
        </p>
        <h2
          className="m-0 mb-4 max-w-[28ch] font-display text-[2rem] font-semibold leading-tight tracking-[-0.02em] text-text"
        >
          Three things, done right.
        </h2>
        <p className="m-0 max-w-[56ch] text-lg leading-relaxed text-text-secondary">
          A proper ledger, lot-accurate cost basis, and the forms your
          accountant actually asks for — no spreadsheet gymnastics, no SaaS
          subscription.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                className="flex flex-col gap-3 rounded-xl border border-hairline bg-panel p-6 transition-all hover:-translate-y-0.5"
                style={{
                  // hover border + shadow via pseudo would need a class; use inline hover via :hover group not available — approximate with static styles + Tailwind
                }}
              >
                <div
                  className="grid h-11 w-11 place-items-center rounded-md text-accent-gold"
                  style={{ backgroundColor: "rgba(229,180,90,0.12)" }}
                >
                  <Icon className="h-[22px] w-[22px]" strokeWidth={1.75} />
                </div>
                <h3 className="m-0 border-b border-hairline-strong pb-2 font-display text-xl font-semibold tracking-[-0.02em] text-accent-gold">
                  {f.title}
                </h3>
                <p className="m-0 text-base leading-relaxed text-text-secondary">
                  {f.body}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
