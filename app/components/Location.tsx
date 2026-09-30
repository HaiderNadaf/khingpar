const ADDRESS = "No.45/1, Andapura, off Huskur Road, Electronic City, Bangalore";
const MAPS_QUERY = encodeURIComponent(`Khingpar Restaurant & Bar, ${ADDRESS}`);

const HOURS = [{ day: "Monday – Sunday", time: "11:00 AM – 11:30 PM" }];
const PHONE_DISPLAY = "080-472-89171";
const PHONE_HREF = "tel:+918047289171";

export default function Location() {
  return (
    <section id="visit" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow text-xs font-medium uppercase text-gold">
            Visit Us
          </p>
          <h2 className="font-display mt-4 text-4xl text-foreground sm:text-5xl">
            Find us in Electronic City.
          </h2>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <div className="overflow-hidden rounded-3xl border border-line">
            <iframe
              title="Khingpar Restaurant & Bar location map"
              src={`https://www.google.com/maps?q=${MAPS_QUERY}&output=embed`}
              className="h-full min-h-[360px] w-full grayscale invert-[.92] contrast-[.9]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="flex flex-col justify-between rounded-3xl border border-line bg-surface p-8 sm:p-10">
            <div>
              <h3 className="font-display text-2xl text-foreground">Khingpar Restaurant &amp; Bar</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{ADDRESS}</p>
              <a
                href={PHONE_HREF}
                className="mt-2 inline-block text-sm text-gold-light hover:text-gold"
              >
                {PHONE_DISPLAY}
              </a>

              <div className="mt-8 space-y-2 border-t border-line pt-6">
                {HOURS.map((h) => (
                  <div key={h.day} className="flex items-center justify-between text-sm">
                    <span className="text-muted">{h.day}</span>
                    <span className="text-foreground">{h.time}</span>
                  </div>
                ))}
              </div>

              <p className="mt-6 text-xs text-muted">
                High chairs available &middot; dogs welcome on the outdoor patio &middot;
                free Wi-Fi throughout.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${MAPS_QUERY}`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-gold px-6 py-3 text-sm font-semibold text-background transition-transform hover:scale-[1.03]"
              >
                Get Directions
              </a>
              <a
                href={PHONE_HREF}
                className="rounded-full border border-line px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-gold hover:text-gold-light"
              >
                Reserve a Table
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
