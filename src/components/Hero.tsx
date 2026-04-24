import { useState } from "react";
import { Download } from "lucide-react";

function GithubMark({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      style={style}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  );
}

type TabKey = "mac" | "docker" | "startos";

const tabs: { key: TabKey; label: string }[] = [
  { key: "mac", label: "Mac" },
  { key: "docker", label: "Docker" },
  { key: "startos", label: "StartOS" },
];

export default function Hero() {
  const [active, setActive] = useState<TabKey>("mac");

  return (
    <section
      className="relative overflow-hidden px-6 pb-20 pt-[120px] md:pb-20 md:pt-[120px]"
      style={{
        background:
          "radial-gradient(ellipse 60% 50% at 20% 0%, rgba(247,147,26,0.08), transparent 60%)," +
          "radial-gradient(ellipse 50% 40% at 85% 20%, rgba(229,180,90,0.06), transparent 60%)," +
          "radial-gradient(circle at 50% 0%, rgba(229,180,90,0.03) 0%, transparent 50%)," +
          "var(--color-bg)",
      }}
    >
      <div className="relative mx-auto max-w-[1160px] text-center">
        <div
          className="mb-6 inline-flex items-center gap-2 rounded-full border px-[14px] py-[6px] text-xs font-semibold uppercase tracking-[0.1em] text-accent-orange"
          style={{
            backgroundColor: "rgba(247,147,26,0.12)",
            borderColor: "rgba(247,147,26,0.25)",
          }}
        >
          <span
            className="block h-[6px] w-[6px] rounded-full bg-accent-orange"
            style={{ boxShadow: "0 0 0 4px rgba(247,147,26,0.2)" }}
          />
          Free · Open source · MIT licensed
        </div>

        <h1
          className="mx-0 mb-5 font-display font-semibold text-text"
          style={{
            fontSize: "clamp(2.4rem, 5.5vw, 4.2rem)",
            lineHeight: 1.05,
            letterSpacing: "-0.035em",
          }}
        >
          Self-hosted Bitcoin
          <br />
          <em className="not-italic text-accent-gold">tax tracking.</em>
        </h1>

        <p
          className="mx-auto mb-8 max-w-[46ch] text-text-secondary"
          style={{
            fontSize: "clamp(1.125rem, 1.6vw, 1.25rem)",
            lineHeight: 1.5,
          }}
        >
          No cloud. No exchange sync. Your keys, your data.
        </p>

        <div className="mb-8 flex flex-wrap justify-center gap-3">
          <a
            href="https://github.com/BitcoinTX-org/BTCTX-org/releases/download/v0.5.5/BitcoinTX.dmg"
            className="inline-flex h-[52px] items-center justify-center gap-[10px] whitespace-nowrap rounded-md border border-transparent bg-accent-gold px-7 text-base font-semibold text-[#1a1a1a] transition-all hover:bg-accent-gold-hover hover:-translate-y-px"
            style={{
              boxShadow:
                "0 1px 2px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.1)",
              letterSpacing: "-0.005em",
            }}
          >
            <Download className="h-[18px] w-[18px]" strokeWidth={2} />
            Download for Mac
          </a>
          <a
            href="https://github.com/BitcoinTX-org/BTCTX-org"
            className="inline-flex h-[52px] items-center justify-center gap-[10px] whitespace-nowrap rounded-md border border-hairline-strong bg-transparent px-7 text-base font-semibold text-text transition-all hover:border-accent-gold hover:text-accent-gold hover:-translate-y-px"
            style={{
              boxShadow:
                "0 1px 2px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.1)",
              letterSpacing: "-0.005em",
            }}
          >
            <GithubMark className="h-[18px] w-[18px]" />
            View on GitHub
          </a>
        </div>

        <div className="mb-6 font-mono text-xs text-text-muted tracking-[0.04em]">
          v0.5.5<span className="text-gray-700 px-[6px]" style={{ color: "#444444" }}>·</span>
          33 MB<span style={{ color: "#444444", padding: "0 6px" }}>·</span>
          macOS 10.15+
        </div>

        <div
          role="tablist"
          aria-label="Install methods"
          className="mx-auto max-w-[640px] overflow-hidden rounded-xl border border-hairline-strong bg-panel"
          style={{ boxShadow: "0 4px 12px rgba(0,0,0,0.20)" }}
        >
          <div className="flex border-b border-hairline bg-bg-elevated">
            {tabs.map((t) => {
              const selected = active === t.key;
              return (
                <button
                  key={t.key}
                  role="tab"
                  aria-selected={selected}
                  onClick={() => setActive(t.key)}
                  className={
                    "flex-1 cursor-pointer border-0 border-b-2 bg-transparent px-[18px] py-[14px] font-body text-sm font-semibold transition-colors " +
                    (selected
                      ? "border-accent-gold text-accent-gold bg-panel"
                      : "border-transparent text-text-muted hover:text-text-secondary")
                  }
                >
                  {t.label}
                </button>
              );
            })}
          </div>

          <div className="flex flex-col items-start gap-4 p-6 text-left">
            {active === "mac" && <MacPanel />}
            {active === "docker" && <DockerPanel />}
            {active === "startos" && <StartOsPanel />}
          </div>
        </div>
      </div>
    </section>
  );
}

function MacPanel() {
  return (
    <>
      <a
        href="https://github.com/BitcoinTX-org/BTCTX-org/releases/download/v0.5.5/BitcoinTX.dmg"
        className="inline-flex h-11 items-center justify-center gap-[10px] whitespace-nowrap rounded-md border border-transparent bg-accent-gold px-[22px] text-sm font-semibold text-[#1a1a1a] transition-all hover:bg-accent-gold-hover hover:-translate-y-px"
        style={{
          boxShadow:
            "0 1px 2px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.1)",
          letterSpacing: "-0.005em",
        }}
      >
        <Download className="h-[18px] w-[18px]" strokeWidth={2} />
        Download .dmg
      </a>
      <div className="font-mono text-xs text-text-muted" style={{ lineHeight: 1.5 }}>
        BitcoinTX.dmg · 33.2 MB · macOS 10.15+
        <br />
        For IRS forms:{" "}
        <code className="rounded-[3px] bg-surface px-[6px] py-px text-accent-gold">
          brew install pdftk-java
        </code>
      </div>
    </>
  );
}

function DockerPanel() {
  const [copied, setCopied] = useState(false);
  const cmd =
    "# pinned version\ndocker pull b1ackswan/btctx:v0.5.5\n# or always latest\ndocker pull b1ackswan/btctx:latest";

  return (
    <>
      <div
        className="box-border flex w-full items-start gap-3 rounded-md border border-hairline bg-bg p-[14px_16px] font-mono text-sm text-text"
        style={{ lineHeight: 1.7 }}
      >
        <pre className="m-0 flex-1 overflow-x-auto whitespace-pre font-mono">
          <span className="text-text-muted"># pinned version</span>
          {"\n"}docker pull b1ackswan/btctx:v0.5.5{"\n"}
          <span className="text-text-muted"># or always latest</span>
          {"\n"}docker pull b1ackswan/btctx:latest
        </pre>
        <button
          onClick={() => {
            navigator.clipboard?.writeText(cmd).then(() => {
              setCopied(true);
              setTimeout(() => setCopied(false), 1400);
            });
          }}
          className={
            "shrink-0 cursor-pointer rounded-[4px] border-0 bg-transparent px-2 py-1 font-mono text-xs transition-colors hover:bg-surface " +
            (copied ? "text-accent-gold" : "text-text-muted hover:text-accent-gold")
          }
        >
          {copied ? "copied" : "copy"}
        </button>
      </div>
      <div className="font-mono text-xs text-text-muted" style={{ lineHeight: 1.5 }}>
        Runs anywhere Docker runs · ~80 MB image
      </div>
    </>
  );
}

function StartOsPanel() {
  return (
    <>
      <p className="m-0 text-sm text-text-secondary" style={{ lineHeight: 1.5 }}>
        One-click install on your StartOS server.
      </p>
      <a
        href="https://github.com/BitcoinTX-org/BTCTX-StartOS/releases/download/v0.5.5-beta/btctx.s9pk"
        className="inline-flex h-11 items-center justify-center gap-[10px] whitespace-nowrap rounded-md border border-transparent bg-accent-gold px-[22px] text-sm font-semibold text-[#1a1a1a] transition-all hover:bg-accent-gold-hover hover:-translate-y-px"
        style={{
          boxShadow:
            "0 1px 2px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.1)",
          letterSpacing: "-0.005em",
        }}
      >
        <Download className="h-[18px] w-[18px]" strokeWidth={2} />
        Download btctx.s9pk
      </a>
      <div className="font-mono text-xs text-text-muted" style={{ lineHeight: 1.5 }}>
        btctx.s9pk · 244 MB · Start9 sovereign servers
      </div>
    </>
  );
}
