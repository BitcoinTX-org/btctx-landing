import { Apple, Ship, Layers } from "lucide-react";

export default function InstallMethods() {
  return (
    <section
      id="install"
      className="border-y border-hairline bg-bg px-6 py-24"
    >
      <div className="mx-auto max-w-[1160px]">
        <p className="m-0 mb-4 font-mono text-xs uppercase tracking-[0.18em] text-accent-gold">
          Install it your way
        </p>
        <h2 className="m-0 mb-4 max-w-[28ch] font-display text-[2rem] font-semibold leading-tight tracking-[-0.02em] text-text">
          Three ways to run it.
        </h2>
        <p className="m-0 max-w-[56ch] text-lg leading-relaxed text-text-secondary">
          Same engine, same ledger, same reports — pick the delivery that
          matches how you self-host.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
          {/* Mac */}
          <div className="flex flex-col gap-4 rounded-xl border border-hairline bg-panel p-6">
            <div className="flex items-center gap-3 border-b border-hairline-strong pb-2">
              <div className="grid h-8 w-8 place-items-center text-accent-gold">
                <Apple className="h-6 w-6" strokeWidth={1.75} />
              </div>
              <h3 className="m-0 whitespace-nowrap font-display text-xl font-semibold tracking-[-0.02em] text-accent-gold">
                Mac app
              </h3>
            </div>
            <p className="m-0 text-base leading-relaxed text-text-secondary">
              Double-click to run. Signed Mac app with FIFO cost basis and IRS
              reporting built in.
            </p>
            <a
              href="https://github.com/BitcoinTX-org/BTCTX-org/releases/download/v0.5.5/BitcoinTX.dmg"
              className="mt-auto inline-flex h-11 items-center justify-center gap-[10px] self-stretch whitespace-nowrap rounded-md border border-transparent bg-accent-gold px-[22px] text-sm font-semibold text-[#1a1a1a] transition-all hover:bg-accent-gold-hover hover:-translate-y-px"
              style={{
                boxShadow:
                  "0 1px 2px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.1)",
                letterSpacing: "-0.005em",
              }}
            >
              Download .dmg (33 MB)
            </a>
          </div>

          {/* Docker */}
          <div className="flex flex-col gap-4 rounded-xl border border-hairline bg-panel p-6">
            <div className="flex items-center gap-3 border-b border-hairline-strong pb-2">
              <div className="grid h-8 w-8 place-items-center text-accent-gold">
                <Ship className="h-6 w-6" strokeWidth={1.75} />
              </div>
              <h3 className="m-0 whitespace-nowrap font-display text-xl font-semibold tracking-[-0.02em] text-accent-gold">
                Docker
              </h3>
            </div>
            <p className="m-0 text-base leading-relaxed text-text-secondary">
              Single container. Runs anywhere Docker runs. Same engine as the
              Mac app.
            </p>
            <div className="flex min-w-0 items-center gap-[10px] overflow-x-auto whitespace-nowrap rounded-md border border-hairline bg-bg px-[14px] py-[10px] font-mono text-xs text-text">
              <span className="shrink-0 whitespace-nowrap select-none text-text-muted">
                $
              </span>
              <span className="shrink-0 whitespace-nowrap">
                docker pull b1ackswan/btctx:v0.5.5
              </span>
            </div>
            <a
              href="https://hub.docker.com/r/b1ackswan/btctx"
              className="mt-auto inline-flex h-11 items-center justify-center gap-[10px] self-stretch whitespace-nowrap rounded-md border border-hairline-strong bg-transparent px-[22px] text-sm font-semibold text-text transition-all hover:border-accent-gold hover:text-accent-gold hover:-translate-y-px"
              style={{
                boxShadow:
                  "0 1px 2px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.1)",
                letterSpacing: "-0.005em",
              }}
            >
              View on Docker Hub
            </a>
          </div>

          {/* StartOS */}
          <div className="flex flex-col gap-4 rounded-xl border border-hairline bg-panel p-6">
            <div className="flex items-center gap-3 border-b border-hairline-strong pb-2">
              <div className="grid h-8 w-8 place-items-center text-accent-gold">
                <Layers className="h-6 w-6" strokeWidth={1.75} />
              </div>
              <h3 className="m-0 whitespace-nowrap font-display text-xl font-semibold tracking-[-0.02em] text-accent-gold">
                StartOS
              </h3>
            </div>
            <p className="m-0 text-base leading-relaxed text-text-secondary">
              One-click install on StartOS sovereign servers. Maximum
              sovereignty.
            </p>
            <a
              href="https://github.com/BitcoinTX-org/BTCTX-StartOS/releases/download/v0.5.5-beta/btctx.s9pk"
              className="inline-flex h-11 items-center justify-center gap-[10px] self-stretch whitespace-nowrap rounded-md border border-transparent bg-accent-gold px-[22px] text-sm font-semibold text-[#1a1a1a] transition-all hover:bg-accent-gold-hover hover:-translate-y-px"
              style={{
                boxShadow:
                  "0 1px 2px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.1)",
                letterSpacing: "-0.005em",
              }}
            >
              Download .s9pk (244 MB)
            </a>
            <a
              href="https://github.com/BitcoinTX-org/BTCTX-StartOS"
              className="mt-1 text-center font-mono text-xs text-text-muted no-underline transition-colors hover:text-accent-gold"
            >
              View StartOS repo →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
