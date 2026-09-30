const STATS = [
  { value: "5.0", label: "Average rating" },
  { value: "6+", label: "Asian cuisines on one menu" },
  { value: "7", label: "Days a week" },
];

export default function About() {
  return (
    <section id="about" className="relative py-28">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-2 lg:items-center lg:px-10">
        <div className="order-2 lg:order-1">
          <p className="section-eyebrow text-xs font-medium uppercase text-gold">
            Our Story
          </p>
          <h2 className="font-display mt-4 text-4xl leading-tight text-foreground sm:text-5xl">
            One kitchen, every corner of Asia.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted">
            Khingpar is built around specialist stalls, each dedicated to a
            single discipline — sauce, dim sum, fire grilling, sushi and curry
            — supported by a live kitchen that brings it all together. A
            plate of nigiri, dumplings folded fresh, a bowl of miso ramen, a
            cocktail from the bar — everything comes together at your table.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Tucked just off Huskur Road in Electronic City, the space moves from
            an easy weekday lunch to a full bar buzz after dark — warm lighting,
            low music, and a patio that welcomes your dog while you eat.
          </p>

          <div className="mt-10 grid grid-cols-3 gap-6 border-t border-line pt-8">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-3xl text-gold-light">{stat.value}</p>
                <p className="mt-1 text-xs leading-snug text-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-line">
            <img
              src="/images/entrance-staircase.jpg"
              alt="Entrance and staircase at Khingpar Restaurant & Bar"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
