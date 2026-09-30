const IMAGES = [
  {
    src: "/images/poolside-bar.jpg",
    alt: "Poolside bar at Khingpar at dusk",
    span: "row-span-2",
  },
  {
    src: "/images/sashimi-swans-overhead.jpg",
    alt: "Sashimi plated tableside",
    span: "",
  },
  {
    src: "/images/tuna-tataki.jpg",
    alt: "Tuna tataki plated with a cocktail",
    span: "",
  },
  {
    src: "/images/entrance-staircase.jpg",
    alt: "Entrance staircase at Khingpar",
    span: "row-span-2",
  },
  {
    src: "/images/crispy-chicken.jpg",
    alt: "Crispy glazed chicken small plate",
    span: "",
  },
  {
    src: "/images/rice-bowl-fusion.jpg",
    alt: "Fusion rice plate with satay skewer",
    span: "",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="relative bg-surface py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="section-eyebrow text-xs font-medium uppercase text-gold">
              Gallery
            </p>
            <h2 className="font-display mt-4 text-4xl text-foreground sm:text-5xl">
              A look inside Khingpar.
            </h2>
          </div>
        </div>

        <div className="mt-14 grid auto-rows-[160px] grid-cols-2 gap-4 sm:auto-rows-[220px] lg:grid-cols-4">
          {IMAGES.map((img) => (
            <div
              key={img.src}
              className={`${img.span} overflow-hidden rounded-2xl border border-line`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
