export default function FinalCTA() {
  return (
    <section
      className="relative overflow-hidden px-6 py-[120px]"
      style={{
        background:
          "radial-gradient(ellipse 50% 60% at 50% 100%, rgba(229,180,90,0.08), transparent 70%)," +
          "radial-gradient(circle at 50% 0%, rgba(229,180,90,0.03) 0%, transparent 50%)," +
          "var(--color-bg)",
      }}
    >
      <div className="relative mx-auto max-w-[1160px] text-center">
        <h2
          className="m-0 mb-5 font-display font-semibold text-text"
          style={{
            fontSize: "clamp(2.4rem, 5vw, 3.6rem)",
            lineHeight: 1.1,
            letterSpacing: "-0.03em",
          }}
        >
          Self-host it.
          <br />
          <em className="not-italic text-accent-gold">Own your data.</em>
        </h2>
        <p className="mx-auto mb-8 max-w-[48ch] text-lg leading-relaxed text-text-secondary">
          Free forever. MIT licensed. No telemetry. Contributions welcome.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <a
            href="https://github.com/BitcoinTX-org/BTCTX-org"
            className="inline-flex h-[52px] items-center justify-center gap-[10px] whitespace-nowrap rounded-md border border-transparent bg-accent-gold px-7 text-base font-semibold text-[#1a1a1a] transition-all hover:bg-accent-gold-hover hover:-translate-y-px"
            style={{
              boxShadow:
                "0 1px 2px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.1)",
              letterSpacing: "-0.005em",
            }}
          >
            <svg
              viewBox="0 0 24 24"
              className="h-[18px] w-[18px]"
              fill="none"
              stroke="#1a1a1a"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
            </svg>
            View repository on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
