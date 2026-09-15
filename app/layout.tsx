import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Source_Sans_3 } from "next/font/google";
import { Footer } from "@/components/footer";
import { Providers } from "@/components/providers";
import {
  COMPANY_NAME,
  EMAIL_DISPLAY,
  GLOBAL_SEO_KEYWORDS,
  PHONE_TEL,
  SITE_TAGLINE,
  SITE_URL,
} from "@/lib/site";
import "./globals.css";

const sourceSans = Source_Sans_3({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
  fallback: ["system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
  fallback: ["Georgia", "Cambria", "Times New Roman", "serif"],
});

export const viewport: Viewport = {
  themeColor: "#071e3a",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${COMPANY_NAME} | Edible Oil Wholesale & Agricultural Commodity Trading India`,
    template: `%s | ${COMPANY_NAME}`,
  },
  description:
    "SS OIL AND FIBRES is an established B2B agricultural commodity and edible oil trading company with 40+ years market legacy. Supplying Kachi Ghani mustard oil, soya refined oil, cottonseed oil, sesame seeds, groundnut seeds, sugar, jaggery and spices.",
  keywords: GLOBAL_SEO_KEYWORDS,
  applicationName: COMPANY_NAME,
  authors: [{ name: COMPANY_NAME, url: SITE_URL }],
  creator: COMPANY_NAME,
  publisher: COMPANY_NAME,
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${COMPANY_NAME} | ${SITE_TAGLINE}`,
    description:
      "Reliable bulk sourcing, competitive mandi pricing, and timely nationwide dispatch of pure edible oils and agricultural commodities.",
    url: SITE_URL,
    siteName: COMPANY_NAME,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: `${COMPANY_NAME} Edible Oil & Agricultural Commodity Trading`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${COMPANY_NAME} | ${SITE_TAGLINE}`,
    description:
      "Wholesale supplier of edible oils, agricultural seeds, sugar, jaggery and pulses with 40+ years experience.",
    images: ["/images/hero.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": ["Organization", "WholesaleStore"],
    name: COMPANY_NAME,
    alternateName: "SS Oils",
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    image: `${SITE_URL}/images/hero.jpg`,
    description:
      "Agricultural commodity and edible oil trading company specializing in bulk supply of mustard oil, soya refined oil, seeds, sugar, and pulses.",
    telephone: PHONE_TEL,
    email: EMAIL_DISPLAY,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: PHONE_TEL,
        contactType: "sales",
        areaServed: "IN",
        availableLanguage: ["English", "Hindi"],
      },
    ],
    sameAs: [],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: COMPANY_NAME,
    url: SITE_URL,
    description:
      "B2B trading company for edible oils and agricultural commodities.",
  };

  return (
    <html
      lang="en"
      className={`${sourceSans.variable} ${cormorant.variable} h-full antialiased scroll-smooth`}
    >
      <body className="flex min-h-full flex-col bg-cream text-ink selection:bg-gold-soft/30 selection:text-navy-deep">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <Providers>
          <main className="flex-1">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

