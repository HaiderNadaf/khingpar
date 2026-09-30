export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden pt-24">
      <div className="absolute inset-0">
        <img
          src="/images/poolside-bar.jpg"
          alt="Poolside bar at Khingpar Restaurant & Bar at dusk"
          className="h-full w-full object-cover object-[65%_center]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/30 to-transparent" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl">
          <div className="flex flex-wrap items-center gap-3 text-xs text-muted">
            <span className="flex items-center gap-1 rounded-full border border-line bg-background/40 px-3 py-1 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-jade-light" />
              Open Now
            </span>
            <span className="flex items-center gap-1 rounded-full border border-line bg-background/40 px-3 py-1 backdrop-blur-sm text-gold-light">
              ★★★★★ 5.0 &middot; 10 reviews
            </span>
            <span className="rounded-full border border-line bg-background/40 px-3 py-1 backdrop-blur-sm">
              Pan Asian &middot; Electronic City
            </span>
          </div>

          <h1 className="font-display mt-6 text-5xl leading-[1.05] text-foreground sm:text-6xl lg:text-7xl">
            Pan-Asian flavors,
            <br />
            <span className="text-gradient-gold italic">crafted for the night.</span>
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted">
            Sushi, dim sum, wok-fired noodles and hand-shaken cocktails — Khingpar
            brings the best of Asia to Electronic City, Bangalore, in a room built
            for long dinners and longer conversations.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="tel:+918047289171"
              className="rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-background transition-transform hover:scale-[1.03]"
            >
              Reserve a Table
            </a>
            <a
              href="#menu"
              className="rounded-full border border-line px-7 py-3.5 text-sm font-semibold text-foreground transition-colors hover:border-gold hover:text-gold-light"
            >
              View Menu
            </a>
          </div>

          <p className="mt-8 text-sm text-muted">
            No.45/1, Andapura, off Huskur Road, Electronic City &middot; High chairs
            &middot; Dogs allowed outside &middot; Wi-Fi
          </p>
        </div>
      </div>
    </section>
  );
}
