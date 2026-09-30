export type MenuItem = {
  name: string;
  tags?: string[];
  chef?: string;
  price: string;
  description?: string;
};

export type MenuCategory = {
  key: string;
  label: string;
  subtitle?: string;
  intro?: string;
  image?: string;
  imageAlt?: string;
  items: MenuItem[];
};

export const MENU_PHILOSOPHY =
  "Our take on the Southeast Asian food markets we love — brought closer to home, right here in Bangalore. We're deeply inspired by the culture of these streets: the focus, the repetition, and the belief that truly great food is built through craft, not excess. KHINGPAR is built around specialist stalls, each dedicated to a single discipline — sauce, dim sum, fire grilling, sushi and curry — supported by a live kitchen that brings everything together with consistency and care. Broths are simmered, dumplings are folded fresh, and sauces are crafted by hand. Order from one stall or many — everything comes together at your table.";

export const MENU: MenuCategory[] = [
  {
    key: "otsumami",
    label: "Otsumami",
    subtitle: "Bar Snacks",
    image: "/images/crispy-chicken.jpg",
    imageAlt: "Crispy glazed chicken bar snack with a cocktail",
    intro:
      "Otsumami is a Japanese term for bar snacks. Our selection is crafted with a refined Pan-Asian focus — bold, precise flavors inspired by Japanese and Asian street cultures, built to complement our signature cocktails.",
    items: [
      {
        name: "Chilli Garlic Edamame",
        tags: ["V", "SOY"],
        price: "₹625",
        description: "Charred edamame, burnt garlic crisps, in-house chilli garlic sauce",
      },
      {
        name: "Dynamite Prawn",
        tags: ["NV", "SHELLFISH"],
        price: "₹695",
        description: "Sweet chilli, red yuzu kosho, sesame",
      },
      {
        name: "Mala Chicken Wings",
        tags: ["NV", "D"],
        chef: "Chef Recommends",
        price: "₹725",
        description: "Mala spice, smoked chilli oil, scallions",
      },
      {
        name: "Kung Pao Chicken",
        tags: ["NV"],
        price: "₹725",
        description: "Khingpar-style kung pao chicken, bell pepper, onion, cashew nut",
      },
      {
        name: "Tang Cu Pork Belly",
        tags: ["NV"],
        price: "₹795",
        description: "Crispy pork belly, black vinegar, rock sugar, soy, ginger, sesame",
      },
      {
        name: "Signature Chongqing",
        tags: ["VG"],
        price: "₹625",
        description:
          "Fried spicy mushrooms and broccoli, wok-tossed with dried red chillies, Sichuan pepper & scallions",
      },
      {
        name: "Thai Chilli Basil Lotus Stem",
        tags: ["VG", "NUTS"],
        price: "₹725",
        description: "Crispy fried lotus stem, honey, basil, chilli, sesame seeds",
      },
    ],
  },
  {
    key: "soup",
    label: "Soup",
    items: [
      {
        name: "Miso Soup",
        tags: ["VG", "SOY"],
        price: "₹455",
        description: "Shiro miso, wakame, fresh tofu, kombu",
      },
      {
        name: "Tom Kha Gai",
        tags: ["NV"],
        price: "₹555",
        description: "Coconut, galangal, lemongrass, Thai spice — chicken or prawn",
      },
      {
        name: "Chicken Wonton Soup",
        price: "₹555",
        description:
          "Hand-folded chicken wontons, seasonal vegetables and spring onion in a comforting Asian broth",
      },
    ],
  },
  {
    key: "cold-plate",
    label: "Cold Plate",
    items: [
      {
        name: "Goma-ae Salad",
        tags: ["VG"],
        price: "₹425",
        description: "Goma dressing, toasted sesame seeds, Japanese salad",
      },
      {
        name: "Som Tam Salad",
        tags: ["VG"],
        price: "₹425",
        description: "Raw papaya, cherry tomato, chilli, tamarind & palm sugar dressing",
      },
      {
        name: "Whole Nut & Fruit Salad",
        price: "₹525",
        description:
          "Pomegranate, cucumber and seasonal fruits tossed with assorted whole nuts in a light Asian dressing",
      },
    ],
  },
  {
    key: "tartare",
    label: "Tartare & Poke",
    subtitle: "Cold Plate & Tartare",
    image: "/images/tuna-tataki.jpg",
    imageAlt: "Raw fish plate from the tartare and poke stall",
    items: [
      {
        name: "Nikkei Cured Ceviche",
        tags: ["NV", "FISH", "G/F"],
        price: "₹1095",
        description: "Chilli, truffle ponzu, mandarin, sesame",
      },
      {
        name: "Poke Bowl",
        tags: ["NV", "FISH"],
        chef: "Chef's Signature",
        price: "₹1295",
        description:
          "Sushi rice, Norwegian salmon, akame, crab stick, avocado, cucumber, edamame",
      },
    ],
  },
  {
    key: "sushi",
    label: "Sushi & Sashimi",
    image: "/images/sashimi-swans.jpg",
    imageAlt: "Sashimi plated at the sushi stall",
    items: [
      {
        name: "Dynamite Prawn Tempura Uramaki",
        tags: ["NV"],
        price: "₹995",
        description: "8pc — tiger prawn, chilli mayo, sansho salt, tanuki crunch",
      },
      {
        name: "Fiery Veg Tempura Maki",
        tags: ["VG"],
        price: "₹695",
        description: "8pc — asparagus, zucchini, carrot, tobanjan mayo, sesame crunch",
      },
      {
        name: "Crunchy Avocado Roll",
        tags: ["VG"],
        chef: "Chef's Signature",
        price: "₹695",
        description: "Grilled avocado, smashed avocado, red chilli",
      },
      {
        name: "Yasai Tempura Uramaki",
        tags: ["VG"],
        chef: "Chef's Signature",
        price: "₹695",
        description: "8pc — crispy broccoli, magic powder, coriander chilli relish, tamarind gel",
      },
      {
        name: "Asparagus Tempura Uramaki",
        tags: ["VG"],
        price: "₹695",
        description: "8pc — asparagus, cream cheese, teriyaki sauce, chilli",
      },
      {
        name: "Tanuki Tokyo Chicken Sushi",
        tags: ["NV"],
        price: "₹745",
        description:
          "Japanese-style sushi roll with crispy chicken, cucumber, avocado, spicy mayo & teriyaki glaze",
      },
      {
        name: "Spicy Salmon Uramaki",
        tags: ["NV"],
        chef: "Chef's Signature",
        price: "₹995",
        description: "8pc — fresh salmon, chilli mayo, jalapeño gel, myoga",
      },
      {
        name: "Tuna Expedition",
        tags: ["NV"],
        price: "₹1995",
        description: "Sashimi & nigiri, 8pc — chutoro, otoro, akame, shiso, pickled ginger, wasabi",
      },
      {
        name: "Moriawase",
        tags: ["NV"],
        chef: "Chef's Signature",
        price: "₹6995",
        description: "Chutoro, otoro, akame, salmon — 16pc signature chef's choice sushi",
      },
    ],
  },
  {
    key: "dimsum",
    label: "Gyoza, Dimsum & Bao",
    items: [
      {
        name: "Farm Veg Gyoza",
        tags: ["VG"],
        price: "₹425",
        description: "4pc — in-house kimchi, nappa cabbage, leeks, chilli soy dressing",
      },
      {
        name: "Chicken Gyoza",
        tags: ["NV"],
        price: "₹655",
        description: "Japanese pan-seared dumplings, chicken, cabbage, ginger, garlic, sesame ponzu",
      },
      {
        name: "Xiao Long Bao Chicken",
        tags: ["NV"],
        price: "₹655",
        description:
          "Soupy dumplings infused with ginger, scallions and aromatic spices, inspired by the classic flavours of Shanghai",
      },
      {
        name: "Chicken in Chilli Oil Dimsums",
        tags: ["NV"],
        price: "₹525",
        description: "4pc — scallion, water chestnut, brown garlic, red chilli",
      },
      {
        name: "Thai Green Curry Dumplings",
        tags: ["VG"],
        chef: "Chef's Signature",
        price: "₹495",
        description: "4pc — Thai treasure veg, Thai green curry, crispy",
      },
      {
        name: "Mala Cream Cheese Dumpling",
        tags: ["VG"],
        chef: "Chef's Signature",
        price: "₹495",
        description: "Cream cheese, water chestnut, scallion, in-house mala sauce",
      },
      {
        name: "Garlic Prawn & Chive Dimsums",
        tags: ["NV"],
        price: "₹695",
        description: "4pc — fresh river prawn, sesame oil, tom kha sauce, chilli oil",
      },
      {
        name: "Umami Truffle Mushroom Bao",
        tags: ["VG"],
        chef: "Chef's Signature",
        price: "₹695",
        description: "3pc — black fungus, white fungus, shiitake, porcini, white truffle oil",
      },
      {
        name: "Khingpar Sexy Yaki Bao",
        tags: ["NV"],
        price: "₹795",
        description:
          "3pc — soft steamed bao filled with tender spiced chicken, scallions, ginger and aromatic Asian flavours, chilli oil",
      },
      {
        name: "Char-siu Pork Bao",
        tags: ["NV"],
        price: "₹895",
        description: "3pc — pork belly, in-house char-siu sauce, five spice",
      },
      {
        name: "Black Pepper Lamb Bao",
        tags: ["NV"],
        chef: "Chef's Signature",
        price: "₹895",
        description: "3pc — Australian lamb, scallion, ginger, in-house pepper sauce",
      },
    ],
  },
  {
    key: "mains",
    label: "Rice & Noodles",
    subtitle: "Asian Mains",
    image: "/images/rice-bowl-fusion.jpg",
    imageAlt: "Wok-fried rice plate with a fried egg and satay skewer",
    items: [
      {
        name: "La Yu Ban Mien Flat Noodles",
        tags: ["VG", "G/F"],
        chef: "Chef's Signature",
        price: "₹625",
        description: "Pad Thai hawker-style noodles, bean sprouts, fresh tofu, peanuts, chilli",
      },
      {
        name: "Thai Curry Bowl",
        tags: ["VG/NV"],
        price: "₹795 – ₹895",
        description: "Exotic Thai veg, jasmine rice, scallion, coconut, chilli",
      },
      {
        name: "Mapo Tofu",
        tags: ["VG"],
        price: "₹895",
        description:
          "Tofu, exotic vegetables, button mushroom, sesame, jasmine rice, in-house black bean sauce",
      },
      {
        name: "Build Your Own Bowl",
        tags: ["VG/NV"],
        price: "₹895",
        description: "Choice of black bean, chilli garlic, or Hong Kong Sichuan hot",
      },
      {
        name: "Thai Basil Fried Rice",
        tags: ["VG/NV"],
        price: "₹695",
        description: "Basil, red chilli, Thai herbs — choice of veg, chicken or prawn",
      },
      {
        name: "Chilli Garlic Noodles",
        tags: ["VG/NV"],
        price: "₹595 – ₹695",
        description: "Hakka noodles, garlic crisp, chilli oil, bok choy, sesame — choice of tofu or chicken",
      },
      {
        name: "XO Seafood Fried Rice",
        tags: ["NV"],
        chef: "Chef's Signature",
        price: "₹795",
        description: "Prawn, calamari, in-house chef's signature XO sauce",
      },
      {
        name: "Nasi Goreng",
        tags: ["NV"],
        price: "₹850",
        description: "Indonesian wok-fried rice, chicken, egg, vegetables, sweet soy, crispy shallots",
      },
      {
        name: "Japanese Katsu Curry",
        tags: ["VG/NV"],
        price: "₹795 – ₹895",
        description: "Katsu, potato, carrot, in-house katsu spice",
      },
      {
        name: "Singapore Red Curry",
        tags: ["VG/NV"],
        price: "₹795 – ₹895",
        description: "Tofu, red chilli, treasure veg",
      },
      {
        name: "Miso Ramen",
        price: "₹795 – ₹895",
        description:
          "Japanese miso broth, ramen noodles, chicken, seasonal vegetables, spring onion",
      },
    ],
  },
  {
    key: "robata",
    label: "Robata",
    subtitle: "炭火の魔法 — The Magic of Charcoal Fire",
    intro: "Welcome to the Robata experience.",
    items: [
      {
        name: "Chicken Satay Yakitori",
        tags: ["NV"],
        price: "₹795",
        description: "3pc",
      },
      {
        name: "Prawn Kushiyaki",
        tags: ["NV"],
        price: "₹825",
        description: "3pc",
      },
      {
        name: "Miso Glazed Salmon",
        tags: ["NV"],
        price: "₹995",
      },
    ],
  },
  {
    key: "teppanyaki",
    label: "Teppanyaki",
    intro: "Where Japanese grilling becomes an experience.",
    items: [
      { name: "Teppanyaki Chicken Teriyaki", price: "₹725" },
      { name: "Japanese Yakimeshi Rice", price: "₹595" },
      { name: "Garlic Butter Prawns Teppanyaki", price: "₹825" },
    ],
  },
  {
    key: "dessert",
    label: "Dessert",
    subtitle: "Sweet Endings",
    intro:
      "End your journey at Khingpar with a collection of Pan-Asian-inspired desserts, where delicate textures, tropical flavours and subtle sweetness come together for a memorable final bite.",
    items: [
      {
        name: "Dark Chocolate Panna Cotta",
        price: "₹720",
        description: "Silky dark chocolate panna cotta, berry coulis & chocolate crumble",
      },
      {
        name: "Strawberry Panna Cotta",
        price: "₹720",
        description: "Delicate strawberry panna cotta, fresh strawberry compote & vanilla crumble",
      },
      {
        name: "Orange Posset",
        price: "₹525",
        description:
          "A smooth citrus cream infused with fresh orange, finished with orange zest and a light almond crumble",
      },
    ],
  },
];

export const TAG_LABELS: Record<string, string> = {
  V: "Veg",
  VG: "Veg",
  NV: "Non-Veg",
  "VG/NV": "Veg / Non-Veg",
  SOY: "Soy",
  SHELLFISH: "Shellfish",
  D: "Dairy",
  FISH: "Fish",
  NUTS: "Nuts",
  "G/F": "Gluten-Free",
};
