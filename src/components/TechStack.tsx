export default function TechStack() {
  const items = ["React", "TypeScript", "FastAPI", "SQLite", "Docker"];

  return (
    <section
      id="stack"
      className="border-y border-hairline bg-bg px-6 py-14"
    >
      <div className="mx-auto flex max-w-[1160px] flex-wrap items-center justify-center gap-6">
        <span className="font-mono text-xs uppercase tracking-[0.18em] text-text-muted">
          Built with
        </span>
        <div className="flex flex-wrap items-center gap-4">
          {items.map((label, i) => (
            <span key={label} className="flex items-center gap-4">
              <span className="font-mono text-sm font-medium text-text">
                {label}
              </span>
              {i < items.length - 1 && (
                <span className="select-none font-mono text-text-muted">·</span>
              )}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
