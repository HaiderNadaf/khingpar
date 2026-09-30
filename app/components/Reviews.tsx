const HIGHLIGHTS = [
  "Fresh sushi cut to order",
  "Dumplings that sell out on weekends",
  "Cocktails worth staying for",
  "Easy, welcoming service",
];

export default function Reviews() {
  return (
    <section id="reviews" className="relative bg-surface py-28">
      <div className="mx-auto max-w-5xl px-6 text-center lg:px-10">
        <p className="section-eyebrow text-xs font-medium uppercase text-gold">
          Reputation
        </p>
        <h2 className="font-display mt-4 text-4xl text-foreground sm:text-5xl">
          Rated 5.0 by our guests.
        </h2>

        <div className="mt-10 flex flex-col items-center gap-3">
          <span className="font-display text-6xl text-gold-light">5.0</span>
          <div className="flex gap-1 text-gold-light" aria-hidden>
            {Array.from({ length: 5 }).map((_, i) => (
              <svg key={i} viewBox="0 0 20 20" fill="currentColor" className="h-6 w-6">
                <path d="M10 1.5l2.6 5.6 6.1.6-4.6 4.1 1.3 6-5.4-3.1-5.4 3.1 1.3-6-4.6-4.1 6.1-.6L10 1.5Z" />
              </svg>
            ))}
          </div>
          <p className="text-sm text-muted">Based on 10 verified Google reviews</p>
        </div>

        <div className="mx-auto mt-12 grid max-w-2xl grid-cols-2 gap-4 sm:grid-cols-4">
          {HIGHLIGHTS.map((h) => (
            <div
              key={h}
              className="rounded-xl border border-line bg-surface-2 px-4 py-5 text-sm text-muted"
            >
              {h}
            </div>
          ))}
        </div>

        <a
          href="https://www.google.com/search?q=Khingpar+Restaurant+%26+Bar+Electronic+City+reviews"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-gold hover:text-gold-light"
        >
          Read reviews on Google
        </a>
      </div>
    </section>
  );
}
