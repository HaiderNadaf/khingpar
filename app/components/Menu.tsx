"use client";

import { useState } from "react";
import { MENU, MENU_PHILOSOPHY, TAG_LABELS } from "../data/menu";

function vegState(tags?: string[]): "veg" | "nonveg" | "mixed" | undefined {
  if (!tags) return undefined;
  const hasVeg = tags.some((t) => t === "V" || t === "VG");
  const hasNonVeg = tags.some((t) => t === "NV");
  const mixed = tags.some((t) => t === "VG/NV");
  if (mixed || (hasVeg && hasNonVeg)) return "mixed";
  if (hasVeg) return "veg";
  if (hasNonVeg) return "nonveg";
  return undefined;
}

function VegDot({ state }: { state: "veg" | "nonveg" | "mixed" }) {
  const color = state === "veg" ? "#6fae93" : state === "nonveg" ? "#c76a52" : undefined;
  if (state === "mixed") {
    return (
      <span className="flex h-3 w-3 shrink-0 items-center justify-center rounded-[3px] border border-gold-light/70">
        <span className="h-1.5 w-1.5 rounded-full bg-gold-light/70" />
      </span>
    );
  }
  return (
    <span
      className="flex h-3 w-3 shrink-0 items-center justify-center rounded-[3px] border"
      style={{ borderColor: color }}
    >
      <span className="h-1.5 w-1.5 rounded-full" style={{ background: color }} />
    </span>
  );
}

export default function Menu() {
  const [active, setActive] = useState(MENU[0].key);
  const category = MENU.find((c) => c.key === active) ?? MENU[0];

  return (
    <section id="menu" className="relative bg-surface py-28">
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow text-xs font-medium uppercase text-gold">
            The Menu
          </p>
          <h2 className="font-display mt-4 text-4xl text-foreground sm:text-5xl">
            Built stall by stall.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted">{MENU_PHILOSOPHY}</p>
        </div>

        <div className="mt-14 flex flex-wrap justify-center gap-2">
          {MENU.map((cat) => (
            <button
              key={cat.key}
              type="button"
              onClick={() => setActive(cat.key)}
              className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                active === cat.key
                  ? "border-gold bg-gold text-background font-medium"
                  : "border-line text-muted hover:border-gold/60 hover:text-gold-light"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="mt-14 overflow-hidden rounded-3xl border border-line bg-surface-2">
          {category.image && (
            <div className="relative h-52 w-full sm:h-72">
              <img
                src={category.image}
                alt={category.imageAlt ?? category.label}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-2 via-surface-2/20 to-transparent" />
            </div>
          )}

          <div className="p-6 sm:p-10">
          <div className="text-center">
            {category.subtitle && (
              <p className="section-eyebrow text-xs uppercase text-gold">
                {category.subtitle}
              </p>
            )}
            <h3 className="font-display mt-2 text-2xl text-foreground sm:text-3xl">
              {category.label}
            </h3>
            {category.intro && (
              <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-muted">
                {category.intro}
              </p>
            )}
          </div>

          <ul className="mt-10 divide-y divide-line">
            {category.items.map((item) => {
              const veg = vegState(item.tags);
              const allergenTags = (item.tags ?? []).filter(
                (t) => !["V", "VG", "NV", "VG/NV"].includes(t)
              );
              return (
                <li key={item.name} className="flex flex-col gap-2 py-5 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      {veg && <VegDot state={veg} />}
                      <span className="font-display text-lg text-foreground">
                        {item.name}
                      </span>
                      {item.chef && (
                        <span className="rounded-full border border-gold/50 px-2 py-0.5 text-[10px] uppercase tracking-wide text-gold-light">
                          {item.chef}
                        </span>
                      )}
                      {allergenTags.map((t) => (
                        <span
                          key={t}
                          className="rounded-full bg-surface px-2 py-0.5 text-[10px] uppercase tracking-wide text-muted"
                        >
                          {TAG_LABELS[t] ?? t}
                        </span>
                      ))}
                    </div>
                    {item.description && (
                      <p className="mt-1.5 max-w-lg text-sm leading-relaxed text-muted">
                        {item.description}
                      </p>
                    )}
                  </div>
                  <span className="shrink-0 text-sm font-medium text-gold-light sm:pt-1">
                    {item.price}
                  </span>
                </li>
              );
            })}
          </ul>
          </div>
        </div>

        <p className="mt-10 text-center text-xs text-muted">
          Prices are in ₹ and subject to applicable taxes &middot; V/VG =
          vegetarian, NV = non-vegetarian &middot; ask your server about
          allergens.
        </p>
      </div>
    </section>
  );
}
