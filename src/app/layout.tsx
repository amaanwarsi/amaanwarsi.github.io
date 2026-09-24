import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-poppins",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Amaan Warsi — Product-Minded Engineer",
    template: "%s | Amaan Warsi"
  },
  description: siteConfig.description,
  keywords: [
    "amaan warsi", "mr. amaan warsi", "product-minded engineer", "product builder",
    "web developer", "freelancer", "portfolio", "next.js"
  ],
  authors: [
    {
      name: "Amaan Warsi",
      url: siteConfig.url,
    }
  ],
  creator: "Amaan Warsi",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: "Amaan Warsi — Product-Minded Engineer",
    description: siteConfig.ogDescription,
    siteName: "Amaan Warsi Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amaan Warsi — Product-Minded Engineer",
    description: siteConfig.ogDescription,
    creator: "@itsamaanwarsi",
  },
  verification: {
    google: "pkpr4JpqcEbopxgcnEa31BDWuZXokn8UbR1cSLdfjGk",
  },
  icons: {
    icon: "/images/logo.webp",
    shortcut: "/images/logo.webp",
    apple: "/images/logo.webp",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      "url": `${siteConfig.url}/`,
      "name": "Amaan Warsi — Product-Minded Engineer",
      "inLanguage": "en",
    },
    {
      "@context": "https://schema.org",
      "@type": "ProfilePage",
      "@id": `${siteConfig.url}/#webpage`,
      "url": `${siteConfig.url}/`,
      "name": "Amaan Warsi — Product-Minded Engineer",
      "isPartOf": {
        "@id": `${siteConfig.url}/#website`
      },
      "mainEntity": {
        "@type": "Person",
        "@id": `${siteConfig.url}/#person`,
        "name": "Amaan Warsi",
        "url": `${siteConfig.url}/`,
        "image": `${siteConfig.url}/opengraph-image`,
        "jobTitle": "Product-Minded Engineer",
        "description": siteConfig.description,
        "sameAs": Object.values(siteConfig.links),
        "knowsAbout": [
          "Product Management",
          "Product Development",
          "Product Discovery",
          "User Research",
          "Product Strategy",
          "Product Requirements",
          "Product Engineering",
          "Software Engineering",
          "System Design"
        ],
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Moradabad",
          "addressRegion": "UP",
          "addressCountry": "IN"
        }
      }
    }
  ];

  return (
    <html
      lang="en"
      className={`${poppins.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="antialiased bg-white text-charcoal font-inter font-light selection:bg-charcoal selection:text-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
