import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/ui/SmoothScroll";
import CustomCursor from "@/components/ui/CustomCursor";
import Preloader from "@/components/ui/Preloader";
import PageTransition from "@/components/ui/PageTransition";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.dhrusti.in"),
  title: "Dhrusti IT Security — 360° CCTV Surveillance & Smart Access Systems",
  description: "Dhrusti IT Security Private Limited: 4K Solar PTZ Cameras, AI Humanoid Tracking, Biometrics, and 24/7 CCTV Installation & Maintenance across Telangana & Andhra Pradesh. Pioneering since 2003.",
  keywords: [
    "CCTV Camera Hyderabad",
    "CCTV Camera Warangal",
    "CCTV Camera Dealer Kondapur",
    "Solar CCTV Camera",
    "4G SIM Camera",
    "CCTV Installation Services",
    "Biometric Attendance",
    "Video Door Phone",
    "Dhrusti IT Security"
  ],
  authors: [{ name: "Mr. Vidiyala Noothan Kumar", url: "https://www.dhrusti.in" }],
  creator: "Dhrusti IT Security Private Limited",
  publisher: "Dhrusti IT Security",
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.dhrusti.in/",
    title: "Dhrusti IT Security — 360° CCTV & Surveillance Solutions",
    description: "50,000+ CCTV Cameras installed across Hyderabad, Warangal, and AP. 20+ Years of Excellence since 2003.",
    siteName: "Dhrusti IT Security",
    images: [
      {
        url: "/images/Dhrusti-it-seccurity-logo.png",
        width: 1200,
        height: 630,
        alt: "Dhrusti IT Security 360 Degree Surveillance",
      }
    ]
  },
  icons: {
    icon: "/images/favicon.jpg",
    shortcut: "/images/favicon.jpg",
    apple: "/images/favicon.jpg"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Schema.org JSON-LD Structured Data
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.dhrusti.in/#organization",
        "name": "Dhrusti IT Security Private Limited",
        "alternateName": "Dhrusti",
        "url": "https://www.dhrusti.in",
        "logo": "https://www.dhrusti.in/images/Dhrusti-it-seccurity-logo.png",
        "founder": {
          "@type": "Person",
          "name": "Mr. Vidiyala Noothan Kumar"
        },
        "foundingDate": "2003",
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "telephone": "+91-8688566688",
            "contactType": "customer service",
            "areaServed": "IN",
            "availableLanguage": "English, Telugu, Hindi"
          }
        ]
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://www.dhrusti.in/#kondapur",
        "name": "Dhrusti IT Security - Hyderabad Hub",
        "image": "https://www.dhrusti.in/images/Dhrusti-it-seccurity-logo.png",
        "telephone": "08688566688",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Plot 187, 3rd Floor, Above Allen Solly, Raghavendra Colony, Kondapur",
          "addressLocality": "Hyderabad",
          "addressRegion": "Telangana",
          "postalCode": "500084",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 17.4694476,
          "longitude": 78.3620208
        }
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://www.dhrusti.in/#warangal",
        "name": "Dhrusti IT Security - Warangal HQ",
        "image": "https://www.dhrusti.in/images/Dhrusti-it-seccurity-logo.png",
        "telephone": "09346105589",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "# 9-1-88, Markandeya Street, Opp. Padmashali Sangam, Girmajipet",
          "addressLocality": "Warangal",
          "addressRegion": "Telangana",
          "postalCode": "506002",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 17.979091,
          "longitude": 79.5996296
        }
      }
    ]
  };

  return (
    <html lang="en" className="light">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Clear any old legacy service workers from earlier cached projects on localhost */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
                navigator.serviceWorker.getRegistrations().then(function(registrations) {
                  for (let registration of registrations) {
                    registration.unregister();
                  }
                });
              }
            `,
          }}
        />
      </head>
      <body className="bg-[#f8fafc] text-slate-900 antialiased selection:bg-amber-400 selection:text-slate-950 min-h-screen flex flex-col justify-between">
        <SmoothScroll>
          <Preloader />
          <CustomCursor />
          <Navbar />
          <main className="flex-1 w-full">
            <PageTransition>
              {children}
            </PageTransition>
          </main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
