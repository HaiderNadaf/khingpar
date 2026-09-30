const AMENITIES = [
  {
    label: "High Chairs",
    detail: "Family-friendly seating on request",
    icon: (
      <path d="M7 4v9m10-9v9M7 13h10l-1.5 7h-7L7 13Zm0 0L5 8h14l-2 5" />
    ),
  },
  {
    label: "Dogs Allowed Outside",
    detail: "Bring your dog to the patio",
    icon: (
      <>
        <circle cx="12" cy="13" r="4.5" />
        <path d="M8 6.5C7 5 5 5 4.5 6.5S5.5 9.5 8 9.5M16 6.5c1-1.5 3-1.5 3.5 0S18.5 9.5 16 9.5" />
      </>
    ),
  },
  {
    label: "Free Wi-Fi",
    detail: "Stay connected through your meal",
    icon: (
      <>
        <path d="M5 9a11 11 0 0 1 14 0M8 12.5a6.5 6.5 0 0 1 8 0" />
        <circle cx="12" cy="17" r="1" fill="currentColor" stroke="none" />
      </>
    ),
  },
  {
    label: "Full Bar",
    detail: "Craft cocktails & spirits list",
    icon: <path d="M6 4h12l-5 7v7h3v2H8v-2h3v-7L6 4Z" />,
  },
  {
    label: "Outdoor Seating",
    detail: "Open-air patio dining",
    icon: (
      <>
        <path d="M12 3v11M5 10l7-7 7 7" />
        <path d="M4 14h16M6 14v7M18 14v7" />
      </>
    ),
  },
  {
    label: "Reservations",
    detail: "Walk-ins welcome, tables held on request",
    icon: (
      <>
        <rect x="4" y="5" width="16" height="15" rx="2" />
        <path d="M4 10h16M8 3v4M16 3v4" />
      </>
    ),
  },
];

export default function Amenities() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow text-xs font-medium uppercase text-gold">
            Good to Know
          </p>
          <h2 className="font-display mt-4 text-4xl text-foreground sm:text-5xl">
            Made for regulars.
          </h2>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {AMENITIES.map((item) => (
            <div
              key={item.label}
              className="flex items-start gap-4 rounded-2xl border border-line bg-surface p-6"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6 shrink-0 text-gold-light"
              >
                {item.icon}
              </svg>
              <div>
                <p className="font-medium text-foreground">{item.label}</p>
                <p className="mt-1 text-sm text-muted">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
