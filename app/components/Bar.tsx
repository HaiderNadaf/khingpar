const POURS = [
  {
    name: "Smoked Lychee Sour",
    notes: "Whisky, lychee, citrus, applewood smoke",
  },
  {
    name: "Electronic City Old Fashioned",
    notes: "House-spiced bourbon, jaggery, orange oils",
  },
  {
    name: "Yuzu Highball",
    notes: "Japanese whisky, yuzu, soda, long pour",
  },
  {
    name: "Thai Basil Gimlet",
    notes: "Gin, thai basil, lime, palm sugar",
  },
];

export default function Bar() {
  return (
    <section id="bar" className="relative overflow-hidden py-28">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-2 lg:items-center lg:px-10">
        <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-line">
          <img
            src="/images/indoor-bar.jpg"
            alt="The indoor bar at Khingpar Restaurant & Bar"
            className="h-full w-full object-cover"
          />
        </div>

        <div>
          <p className="section-eyebrow text-xs font-medium uppercase text-gold">
            The Bar
          </p>
          <h2 className="font-display mt-4 text-4xl leading-tight text-foreground sm:text-5xl">
            Cocktails built to
            <br />
            <span className="text-gradient-gold italic">outlast dinner.</span>
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-muted">
            Our bar team pulls flavors from the same pantry as the kitchen —
            yuzu, lemongrass, lychee, tamarind — poured over a full spirits list
            and late-night bar bites.
          </p>

          <ul className="mt-10 space-y-5 border-t border-line pt-8">
            {POURS.map((pour) => (
              <li key={pour.name} className="flex items-baseline justify-between gap-4">
                <span className="font-display text-lg text-foreground">
                  {pour.name}
                </span>
                <span className="text-right text-sm text-muted">{pour.notes}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
