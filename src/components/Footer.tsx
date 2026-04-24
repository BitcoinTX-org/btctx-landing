import logo from "../assets/logo-64.png";

export default function Footer() {
  return (
    <footer className="border-t border-hairline bg-bg px-6 py-8">
      <div className="mx-auto flex max-w-[1160px] flex-wrap items-center justify-between gap-6">
        <div className="flex items-center gap-[10px] text-sm text-text-secondary">
          <img src={logo} alt="" className="w-[22px]" />
          <strong className="font-display text-base font-semibold tracking-[-0.02em] text-text">
            BitcoinTX
          </strong>
          <span className="text-text-muted">
            · a self-hosted Bitcoin ledger
          </span>
        </div>
        <div className="flex items-center gap-5 font-mono text-xs text-text-muted">
          <span className="text-text-muted">MIT License</span>
          <a
            href="https://github.com/BitcoinTX-org/BTCTX-org"
            className="text-text-secondary no-underline transition-colors hover:text-accent-gold"
          >
            github.com/BitcoinTX-org/BTCTX-org
          </a>
        </div>
      </div>
    </footer>
  );
}
