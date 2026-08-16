import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://amaanwarsi.thedev.id"),
  title: "Amaan Warsi - Backend Engineer & Systems Builder",
  description: "I build resilient backend systems and full-stack products.",
  keywords: [
    "amaan warsi", "mr. amaan warsi", "backend engineer", "systems builder", 
    "web developer", "freelancer", "portfolio", "next.js"
  ],
  openGraph: {
    type: "profile",
    title: "Amaan Warsi - Backend Engineer & Systems Builder",
    description: "I build resilient backend systems and full-stack products.",
    url: "https://amaanwarsi.thedev.id/",
    firstName: "Amaan",
    lastName: "Warsi",
    images: [
      {
        url: "/assets/images/amaanwarsi-1.jpg",
      }
    ]
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": "https://amaanwarsi.thedev.id/#website",
      "url": "https://amaanwarsi.thedev.id/",
      "name": "Amaan Warsi - Backend Engineer & Systems Builder",
      "inLanguage": "en",
    },
    {
      "@context": "https://schema.org",
      "@type": "ProfilePage",
      "@id": "https://amaanwarsi.thedev.id/#webpage",
      "url": "https://amaanwarsi.thedev.id/",
      "name": "Amaan Warsi - Backend Engineer & Systems Builder",
      "isPartOf": {
        "@id": "https://amaanwarsi.thedev.id/#website"
      },
      "mainEntity": {
        "@type": "Person",
        "@id": "https://amaanwarsi.thedev.id/#person",
        "name": "Amaan Warsi",
        "url": "https://amaanwarsi.thedev.id/",
        "image": "https://amaanwarsi.thedev.id/assets/images/amaanwarsi-1.jpg",
        "email": "mailto:its.amaanwarsi@gmail.com",
        "jobTitle": "Backend Engineer & Systems Builder",
        "description": "I build resilient backend systems and full-stack products.",
        "sameAs": [
          "https://www.linkedin.com/in/amaanwarsi/",
          "https://github.com/amaanwarsi",
          "https://www.instagram.com/amaanibnsuhail/",
          "https://youtube.com/@amaanwarsiii",
          "https://www.facebook.com/its.amaanwarsi"
        ],
        "knowsAbout": [
          "Backend Engineering",
          "System Design",
          "Full-Stack Development",
          "Node.js",
          "React",
          "Docker"
        ],
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Moradabad",
          "addressRegion": "UP",
          "postalCode": "244001",
          "addressCountry": "IN"
        }
      }
    }
  ];

  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable} h-full antialiased`}
    >
      <body className="antialiased selection:bg-accent/30 selection:text-text-primary">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
