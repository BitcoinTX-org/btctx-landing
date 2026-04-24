import dashboardImg from "../assets/screenshots/dashboard.png";

export default function Dashboard() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-[1160px]">
        <p className="m-0 mb-4 font-mono text-xs uppercase tracking-[0.18em] text-accent-gold">
          The dashboard
        </p>
        <h2 className="m-0 mb-4 max-w-[28ch] font-display text-[2rem] font-semibold leading-tight tracking-[-0.02em] text-text">
          Every number, one screen.
        </h2>
        <p className="m-0 max-w-[56ch] text-lg leading-relaxed text-text-secondary">
          The whole state of your portfolio in a single dense view. No tabs to
          hunt through, no graphs that obscure the numbers underneath them.
        </p>

        <div
          className="relative mt-10 rounded-xl border border-hairline bg-panel p-5"
          style={{ boxShadow: "0 8px 24px rgba(0,0,0,0.40)" }}
        >
          <div
            aria-hidden
            className="pointer-events-none absolute -inset-0.5 -z-10 rounded-[14px] opacity-60"
            style={{
              background:
                "linear-gradient(135deg, rgba(229,180,90,0.3), transparent 40%, rgba(247,147,26,0.15))",
            }}
          />
          <img
            src={dashboardImg}
            alt="BitcoinTX dashboard screenshot showing portfolio overview, current Bitcoin price, realized and unrealized gains"
            className="block w-full rounded-md"
          />
        </div>
        <p className="mt-4 text-center font-mono text-sm text-text-muted">
          Track holdings, realized and unrealized gains, and USD balance at a
          glance.
        </p>
      </div>
    </section>
  );
}
