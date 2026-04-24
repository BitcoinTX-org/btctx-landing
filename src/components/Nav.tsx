import logo from "../assets/logo-64.png";

export default function Nav() {
  return (
    <header
      className="sticky top-0 z-50 border-b border-[rgba(255,255,255,0.08)] backdrop-blur-xl"
      style={{ backgroundColor: "rgba(18, 18, 18, 0.82)" }}
    >
      <div className="mx-auto flex max-w-[1160px] items-center justify-between gap-6 px-6 py-[14px]">
        <a href="#" className="flex items-center gap-[10px] text-text no-underline">
          <img src={logo} alt="" className="h-7 w-7" />
          <span className="font-display text-lg font-semibold tracking-[-0.02em]">
            BitcoinTX
          </span>
        </a>
        <nav className="flex items-center gap-6">
          <a
            href="#features"
            className="hidden text-sm font-medium text-text-secondary transition-colors hover:text-accent-gold md:inline"
          >
            Features
          </a>
          <a
            href="#how"
            className="hidden text-sm font-medium text-text-secondary transition-colors hover:text-accent-gold md:inline"
          >
            How it works
          </a>
          <a
            href="#stack"
            className="hidden text-sm font-medium text-text-secondary transition-colors hover:text-accent-gold md:inline"
          >
            Stack
          </a>
          <a
            href="https://github.com/BitcoinTX-org/BTCTX-org"
            className="inline-flex h-9 items-center justify-center rounded-md border border-hairline-strong bg-transparent px-[14px] text-xs font-semibold text-text transition-colors hover:border-accent-gold hover:text-accent-gold"
          >
            GitHub
          </a>
        </nav>
      </div>
    </header>
  );
}
