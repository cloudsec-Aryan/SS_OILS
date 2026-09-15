import type { Metadata } from "next";
import { Cormorant_Garamond, Source_Sans_3 } from "next/font/google";
import { Footer } from "@/components/footer";
import { Providers } from "@/components/providers";
import { COMPANY_NAME } from "@/lib/site";
import "./globals.css";

const sourceSans = Source_Sans_3({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ssoilandfibres.example"),
  title: {
    default: `${COMPANY_NAME} | Edible Oil & Agricultural Commodity Trading`,
    template: `%s | ${COMPANY_NAME}`,
  },
  description:
    "SS OIL AND FIBRES is an agricultural commodity and edible oil trading company with decades of market experience and second-generation expertise.",
  openGraph: {
    title: `${COMPANY_NAME} | Edible Oil & Agricultural Commodity Trading`,
    description:
      "Reliable sourcing, competitive trading and timely supply of edible oils and agricultural commodities.",
    type: "website",
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

export default function RootLayout({ children }: LayoutProps<"/">) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: COMPANY_NAME,
    telephone: "+917419075157",
    description:
      "Agricultural commodity and edible oil trading company.",
  };

  return (
    <html
      lang="en"
      className={`${sourceSans.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-cream text-ink">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Providers>
          <main className="flex-1">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
