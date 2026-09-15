export const COMPANY_NAME = "SS OIL AND FIBRES";
export const SITE_TAGLINE = "Agricultural Commodity & Edible Oil Trading";
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://ssoilandfibres.com";

export const PHONE_DISPLAY = "74190 75157";
export const PHONE_TEL = "+917419075157";
export const WHATSAPP_NUMBER = "917419075157";
export const WHATSAPP_URL =
  "https://wa.me/917419075157?text=Hello%20SS%20OIL%20AND%20FIBRES%2C%20I%20would%20like%20to%20enquire%20about%20edible%20oils%20and%20commodity%20rates.";
export const EMAIL_DISPLAY = "info@ssoilandfibres.com";
export const OPERATING_HOURS = "Mon - Sat: 9:00 AM - 7:30 PM (IST)";
export const TRADING_DESK_LABEL = "B2B Wholesale Trading Desk";

export const GLOBAL_SEO_KEYWORDS = [
  "SS OIL AND FIBRES",
  "SS Oils",
  "edible oil wholesale supplier India",
  "mustard oil bulk supplier",
  "kachi ghani mustard oil wholesale",
  "pure sarson tel bulk trader",
  "soya refined oil wholesale",
  "cottonseed oil bulk supplier",
  "cotton refined oil trader",
  "rice bran oil wholesale",
  "sesame seed exporter India",
  "groundnut seed wholesale supplier",
  "mustard seed bulk mandi trader",
  "yellow mustard seed supplier",
  "sugar wholesale trader India",
  "jaggery gur bulk supplier",
  "cereals and pulses trading",
  "wholesale spices trading India",
  "B2B edible oil trading company",
  "agricultural commodity sourcing India",
];

export const PRODUCT_OPTIONS = [
  "Mustard Oil",
  "Kachi Ghani Mustard Oil",
  "Soya Refined Oil",
  "Cotton Refined Oil",
  "Cottonseed Oil",
  "Soya Degummed Oil",
  "Yellow Mustard Oil",
  "Rice Bran Oil",
  "Sesame Seed",
  "Groundnut Seed",
  "Mustard Seed",
  "Yellow Mustard Seed",
  "Sugar",
  "Jaggery",
  "Cereals / Pulses",
  "Spices",
  "Other",
] as const;

export type ProductOption = (typeof PRODUCT_OPTIONS)[number];

export type ProductItem = {
  name: string;
  slug: string;
  description: string;
  image: string;
  category: "oils" | "seeds" | "food" | "spices";
  packaging?: string;
  gradeBadge?: string;
  specs?: string[];
};

export const edibleOils: ProductItem[] = [
  {
    name: "Kachi Ghani Mustard Oil",
    slug: "kachi-ghani-mustard-oil",
    description:
      "Traditionally cold-pressed raw mustard oil featuring strong natural pungency, high aroma, and authentic purity for commercial food buyers.",
    image: "/images/kachi-ghani-mustard-oil.jpg",
    category: "oils",
    packaging: "Tankers, 200L Drums & 15L Tins",
    gradeBadge: "Cold Pressed / Premium Pungency",
    specs: ["High Pungency Grade", "Rich in MUFA & Omega-3", "Direct Mill Allocation"],
  },
  {
    name: "Mustard Oil",
    slug: "mustard-oil",
    description:
      "Widely traded pure mustard oil sourced to meet commercial grading, food processing standards, and flexible batch delivery terms.",
    image: "/images/mustard-oil.jpg",
    category: "oils",
    packaging: "Bulk Road Tankers & 15L Tins",
    gradeBadge: "Pure Filtered Grade",
    specs: ["Commercial Purity Standards", "Consistent Acid Value", "Wholesale Mandi Parity"],
  },
  {
    name: "Soya Refined Oil",
    slug: "soya-refined-oil",
    description:
      "Light, neutral refined soybean oil traded for bulk food manufacturers, bakeries, snack processors, and commercial packaging units.",
    image: "/images/soya-refined-oil.jpg",
    category: "oils",
    packaging: "Road Tankers & Bulk Drums",
    gradeBadge: "Refined Bleached Deodorized",
    specs: ["High Smoke Point", "Clean Clarity & Odourless", "Bulk Tanker Dispatch"],
  },
  {
    name: "Cotton Refined Oil",
    slug: "cotton-refined-oil",
    description:
      "Refined cottonseed oil characterized by neutral flavour, excellent fry stability, and long commercial shelf life.",
    image: "/images/cotton-refined-oil.jpg",
    category: "oils",
    packaging: "Bulk Tankers & Commercial Drums",
    gradeBadge: "Frying Stable Grade",
    specs: ["High Frying Stability", "Neutral Taste Profile", "Reliable Supply Window"],
  },
  {
    name: "Cottonseed Oil",
    slug: "cottonseed-oil",
    description:
      "Premium graded cottonseed oil traded according to agreed bargain specs, moisture parameters, and scheduled dispatches.",
    image: "/images/cottonseed-oil.jpg",
    category: "oils",
    packaging: "Tankers & Wholesale Packing",
    gradeBadge: "Commercial Grade",
    specs: ["Custom FFA Parameters", "Strict Lot Testing", "Current to 15-Day Delivery"],
  },
  {
    name: "Soya Degummed Oil",
    slug: "soya-degummed-oil",
    description:
      "Crude degummed soya oil sourced directly for edible oil refineries, chemical applications, and industrial processors.",
    image: "/images/soya-degummed-oil.jpg",
    category: "oils",
    packaging: "Bulk Road Tankers Only",
    gradeBadge: "Raw Refinery Grade",
    specs: ["Refinery Direct Sourcing", "Low Phosphatide Content", "Competitive Parity"],
  },
  {
    name: "Yellow Mustard Oil",
    slug: "yellow-mustard-oil",
    description:
      "Mild pungent yellow mustard oil with golden clarity, preferred for regional culinary applications and delicate food preparations.",
    image: "/images/yellow-mustard-oil.jpg",
    category: "oils",
    packaging: "15L Tins, Drums & Tankers",
    gradeBadge: "Mild Pungent / Golden",
    specs: ["Golden Hue & Clarity", "Mild Aromatic Flavour", "Direct Farm-Seed Origin"],
  },
  {
    name: "Rice Bran Oil",
    slug: "rice-bran-oil",
    description:
      "Physically refined rice bran oil enriched with natural Oryzanol, high thermal resistance, and health-focused commercial applications.",
    image: "/images/rice-bran-oil.jpg",
    category: "oils",
    packaging: "Bulk Tankers & Commercial Tins",
    gradeBadge: "High Oryzanol Grade",
    specs: ["Oryzanol Enriched", "High Heat Resistance", "Health-Oriented B2B Trade"],
  },
];

export const agriculturalSeeds: ProductItem[] = [
  {
    name: "Sesame Seed",
    slug: "sesame-seed",
    description:
      "Natural and hulled sesame seeds (white, black, and brown) sourced from key agricultural producing belts for commercial trade.",
    image: "/images/sesame-seed.jpg",
    category: "seeds",
    packaging: "25kg / 50kg PP Bags",
    gradeBadge: "Export & Domestic Quality",
    specs: ["99/1 & Auto-Sort Grades", "Uniform Seed Size", "Careful Moisture Control"],
  },
  {
    name: "Groundnut Seed",
    slug: "groundnut-seed",
    description:
      "Bold and Java variety groundnut seeds (peanuts) selected for oil milling, table use, confectionery, and wholesale procurement.",
    image: "/images/groundnut.jpg",
    category: "seeds",
    packaging: "50kg Jute / PP Bags",
    gradeBadge: "Bold & Java Counts",
    specs: ["High Oil Content Yield", "Count-Specific Selection", "Mandi Direct Procurement"],
  },
  {
    name: "Mustard Seed",
    slug: "mustard-seed",
    description:
      "Brown and black mustard seeds (Sarson) with high oil yield percentage, traded for crushing mills and bulk spice processors.",
    image: "/images/mustard-seed.jpg",
    category: "seeds",
    packaging: "50kg Standard Bags",
    gradeBadge: "High Oil Content",
    specs: ["Crushing Quality Guaranteed", "Low Foreign Matter (<1%)", "Bulk Mandi Batches"],
  },
  {
    name: "Yellow Mustard Seed",
    slug: "yellow-mustard-seed",
    description:
      "Handled through our trusted agricultural trading network, with premium size grading for food processing and specialty oil extraction.",
    image: "/images/yellow-mustard-seed.jpg",
    category: "seeds",
    packaging: "25kg / 50kg Bags",
    gradeBadge: "Bold Yellow Grade",
    specs: ["Bright Golden Colour", "Uniform Grain Grading", "Strict Moisture Parameters"],
  },
];

export const foodCommodities: ProductItem[] = [
  {
    name: "Sugar",
    slug: "sugar",
    description:
      "Refined white crystal sugar (M-30, S-30) sourced from certified sugar mills for commercial, beverage, and confectionery buyers.",
    image: "/images/sugar.jpg",
    category: "food",
    packaging: "50kg Laminated PP Bags",
    gradeBadge: "M-30 / S-30 Mill Grade",
    specs: ["Sparkling White Crystals", "Low ICUMSA Value", "Full Truckload Dispatch"],
  },
  {
    name: "Jaggery",
    slug: "jaggery",
    description:
      "Traditional natural jaggery (gur) available in blocks, tubs, and granular form, free of chemical bleaching agents.",
    image: "/images/jaggery.jpg",
    category: "food",
    packaging: "10kg, 20kg Boxes & 50kg Sacks",
    gradeBadge: "Natural Gur (Chemical-Free)",
    specs: ["Natural Sugarcane Purity", "Rich Mineral Aroma", "Hygienic Solid Blocks"],
  },
  {
    name: "Cereals",
    slug: "cereals",
    description:
      "Agricultural cereals including wheat, maize, and rice traded across mandis and commercial flour/feed millers.",
    image: "/images/wheat.jpg",
    category: "food",
    packaging: "50kg Bulk Bags",
    gradeBadge: "Grain Graded",
    specs: ["High Gluten / Milling Grain", "Dust & Impurity Screened", "Seasonal Mandi Parity"],
  },
  {
    name: "Pulses",
    slug: "pulses",
    description:
      "Bulk pulses and lentils (Chana, Toor, Urad, Moong) sourced and traded according to strict grading and buyer requirements.",
    image: "/images/lentils.jpg",
    category: "food",
    packaging: "30kg / 50kg Bags",
    gradeBadge: "Clean & Polished / Unpolished",
    specs: ["Uniform Size & Colour", "High Cooking Yield", "Prompt Batch Dispatch"],
  },
];

export const spicesProduct: ProductItem = {
  name: "Spices",
  slug: "spices",
  description:
    "Commercial trading of whole and powdered spices (turmeric, coriander, cumin, red chilli) aligned to regional demand and seasonal harvests.",
  image: "/images/spices-bowls.jpg",
  category: "spices",
  packaging: "25kg / 50kg Bags & Customized Packs",
  gradeBadge: "Agmark / Commercial Whole",
  specs: ["Sun-Dried & Cleaned", "High Volatile Oil Retention", "Seasonally Procured"],
};

export const allProducts: ProductItem[] = [
  ...edibleOils,
  ...agriculturalSeeds,
  ...foodCommodities,
  spicesProduct,
];

export const productCategories = [
  {
    title: "Edible Oils",
    href: "/products/edible-oils",
    image: "/images/category-edible-oils.jpg",
    description:
      "Kachi Ghani mustard, pure mustard, refined soya, cottonseed and rice bran oils traded for commercial buyers.",
    tagline: "Cold Pressed & Refined Wholesale",
    items: edibleOils.map((p) => p.name),
  },
  {
    title: "Agricultural Seeds",
    href: "/products/agricultural-commodities",
    image: "/images/category-agricultural-seeds.jpg",
    description:
      "Sesame, groundnut, yellow mustard and black mustard seeds sourced directly through our established mandi network.",
    tagline: "High Oil Content & Grading",
    items: agriculturalSeeds.map((p) => p.name),
  },
  {
    title: "Other Commodities",
    href: "/products/sugar-jaggery-cereals",
    image: "/images/category-food-commodities.jpg",
    description:
      "Refined sugar, organic jaggery, cereals, pulses and spices sourced for food processors, wholesalers, and institutional buyers.",
    tagline: "Staples & Commercial Food Grade",
    items: ["Sugar", "Jaggery", "Cereals", "Pulses", "Spices"],
  },
] as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  {
    href: "/products",
    label: "Products",
    children: [
      { href: "/products/edible-oils", label: "Edible Oils (Mustard, Soya, Cotton)" },
      {
        href: "/products/agricultural-commodities",
        label: "Agricultural Seeds (Sesame, Groundnut, Mustard)",
      },
      {
        href: "/products/sugar-jaggery-cereals",
        label: "Sugar, Jaggery & Cereals",
      },
      { href: "/products/spices", label: "Spices" },
    ],
  },
  { href: "/values", label: "Our Values" },
  { href: "/supply-delivery", label: "Supply & Logistics" },
  { href: "/contact", label: "Contact & Rates" },
] as const;

export const FAQ_ITEMS = [
  {
    question: "What edible oils does SS OIL AND FIBRES trade?",
    answer:
      "We trade a comprehensive portfolio of edible oils including Kachi Ghani Mustard Oil, Filtered Mustard Oil, Soya Refined Oil, Cotton Refined Oil, Cottonseed Oil, Soya Degummed Oil, Yellow Mustard Oil, and Physically Refined Rice Bran Oil.",
  },
  {
    question: "What is your typical supply timeline and order turnaround?",
    answer:
      "Supply timelines depend on the negotiated trade agreement and market availability. Dispatches can range from immediate/current delivery up to approximately 10–15 days, coordinated systematically with dedicated road tankers and freight partners.",
  },
  {
    question: "What packaging options are available for bulk buyers?",
    answer:
      "For edible oils, we arrange dispatches in Bulk Road Tankers (10 to 30+ MT), 200-litre food-grade steel/HDPE drums, and standard 15-litre/15kg tins. Agricultural seeds and commodities are packaged in 25kg, 30kg, and 50kg HDPE/PP or jute bags according to buyer specifications.",
  },
  {
    question: "How do you source agricultural commodities and guarantee grading?",
    answer:
      "With over 40 years of trading heritage and second-generation presence in the agricultural mandi network, we inspect seeds, moisture levels, and oil yields at procurement. Transactions follow strict agreed bargains and commercial testing parameters.",
  },
  {
    question: "How can I request a live price quote or book a bargain?",
    answer:
      "You can connect directly with our trading desk by calling +91 74190 75157, sending a WhatsApp message via our direct link, or submitting an online enquiry form with your product, quantity, and delivery destination.",
  },
];
