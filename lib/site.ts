export const COMPANY_NAME = "SS OIL AND FIBRES";

export const PHONE_DISPLAY = "74190 75157";
export const PHONE_TEL = "+917419075157";

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
};

export const edibleOils: ProductItem[] = [
  {
    name: "Kachi Ghani Mustard Oil",
    slug: "kachi-ghani-mustard-oil",
    description:
      "Traditionally preferred mustard oil traded for food and commercial requirements.",
    image: "/images/oil-glass.jpg",
    category: "oils",
  },
  {
    name: "Mustard Oil",
    slug: "mustard-oil",
    description:
      "A widely traded edible oil sourced according to quality and delivery terms.",
    image: "/images/oil-bottles.jpg",
    category: "oils",
  },
  {
    name: "Soya Refined Oil",
    slug: "soya-refined-oil",
    description:
      "Refined soya oil traded for business buyers across the food supply chain.",
    image: "/images/oil-food.jpg",
    category: "oils",
  },
  {
    name: "Cotton Refined Oil",
    slug: "cotton-refined-oil",
    description:
      "Refined cotton oil handled as part of our edible-oil trading range.",
    image: "/images/oil-bottles.jpg",
    category: "oils",
  },
  {
    name: "Cottonseed Oil",
    slug: "cottonseed-oil",
    description:
      "Cottonseed oil traded to meet agreed specifications and supply schedules.",
    image: "/images/oil-glass.jpg",
    category: "oils",
  },
  {
    name: "Soya Degummed Oil",
    slug: "soya-degummed-oil",
    description:
      "Degummed soya oil traded for processors and commercial buyers.",
    image: "/images/aisle.jpg",
    category: "oils",
  },
  {
    name: "Yellow Mustard Oil",
    slug: "yellow-mustard-oil",
    description:
      "Yellow mustard oil sourced through our agricultural trading network.",
    image: "/images/harvest.jpg",
    category: "oils",
  },
  {
    name: "Rice Bran Oil",
    slug: "rice-bran-oil",
    description:
      "Rice bran oil traded alongside our wider edible-oil portfolio.",
    image: "/images/rice.jpg",
    category: "oils",
  },
];

export const agriculturalSeeds: ProductItem[] = [
  {
    name: "Sesame Seed",
    slug: "sesame-seed",
    description:
      "Sesame seed traded as an agricultural commodity according to market requirements.",
    image: "/images/seeds-spices.jpg",
    category: "seeds",
  },
  {
    name: "Groundnut Seed",
    slug: "groundnut-seed",
    description:
      "Groundnut seed sourced and traded for commercial agricultural demand.",
    image: "/images/groundnut.jpg",
    category: "seeds",
  },
  {
    name: "Mustard Seed",
    slug: "mustard-seed",
    description:
      "Mustard seed traded for oil and commodity buyers across the market.",
    image: "/images/harvest.jpg",
    category: "seeds",
  },
  {
    name: "Yellow Mustard Seed",
    slug: "yellow-mustard-seed",
    description:
      "Yellow mustard seed handled through our commodity trading activity.",
    image: "/images/crops.jpg",
    category: "seeds",
  },
];

export const foodCommodities: ProductItem[] = [
  {
    name: "Sugar",
    slug: "sugar",
    description: "Trading and supply of sugar arranged as per agreed terms.",
    image: "/images/sugar.jpg",
    category: "food",
  },
  {
    name: "Jaggery",
    slug: "jaggery",
    description: "Trading of jaggery (gur) for commercial and market requirements.",
    image: "/images/jaggery.jpg",
    category: "food",
  },
  {
    name: "Cereals",
    slug: "cereals",
    description: "Cereals traded as part of our food-commodity activity.",
    image: "/images/wheat.jpg",
    category: "food",
  },
  {
    name: "Pulses",
    slug: "pulses",
    description: "Pulses sourced and traded according to buyer requirements.",
    image: "/images/lentils.jpg",
    category: "food",
  },
];

export const spicesProduct: ProductItem = {
  name: "Spices",
  slug: "spices",
  description:
    "Trading of spices as agricultural food commodities, aligned to market demand and supply.",
  image: "/images/spices-bowls.jpg",
  category: "spices",
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
      "Mustard, soya, cotton and rice bran oils traded for commercial buyers.",
    items: edibleOils.map((p) => p.name),
  },
  {
    title: "Agricultural Seeds",
    href: "/products/agricultural-commodities",
    image: "/images/category-agricultural-seeds.jpg",
    description:
      "Sesame, groundnut and mustard seeds sourced through our trading network.",
    items: agriculturalSeeds.map((p) => p.name),
  },
  {
    title: "Other Commodities",
    href: "/products/sugar-jaggery-cereals",
    image: "/images/category-food-commodities.jpg",
    description:
      "Sugar, jaggery, cereals, pulses and spices for food-commodity trading.",
    items: ["Sugar", "Jaggery", "Cereals", "Pulses", "Spices"],
  },
] as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  {
    href: "/products",
    label: "Products",
    children: [
      { href: "/products/edible-oils", label: "Edible Oils" },
      {
        href: "/products/agricultural-commodities",
        label: "Agricultural Commodities",
      },
      {
        href: "/products/sugar-jaggery-cereals",
        label: "Sugar, Jaggery & Cereals",
      },
      { href: "/products/spices", label: "Spices" },
    ],
  },
  { href: "/values", label: "Our Values" },
  { href: "/supply-delivery", label: "Supply & Delivery" },
  { href: "/contact", label: "Contact" },
] as const;
