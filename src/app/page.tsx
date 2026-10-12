import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Turntable360Hero from "@/components/hero/Turntable360Hero";
import SectionSkeleton from "@/components/ui/SectionSkeleton";
import SectionTransitionDivider from "@/components/ui/SectionTransitionDivider";
import { HOME_FAQS } from "@/lib/data/siteData";

// ─── Dynamic Section Loading with Branded Transitions ─────────────────────────

const HomeAboutSection = dynamic(
  () => import("@/components/sections/HomeAboutSection"),
  {
    loading: () => <SectionSkeleton label="INITIALIZING ABOUT LEGACY..." minHeight="min-h-[480px]" />
  }
);

const FeaturedProductsSection = dynamic(
  () => import("@/components/sections/FeaturedProductsSection"),
  {
    loading: () => <SectionSkeleton label="LOADING 360° HARDWARE CATALOG..." minHeight="min-h-[560px]" />
  }
);

const ServicesGridSection = dynamic(
  () => import("@/components/sections/ServicesGridSection"),
  {
    loading: () => <SectionSkeleton label="LOADING 9 CORE SURVEILLANCE SERVICES..." minHeight="min-h-[520px]" />
  }
);

const WhyChooseUsSection = dynamic(
  () => import("@/components/sections/WhyChooseUsSection"),
  {
    loading: () => <SectionSkeleton label="LOADING 3D ARCHITECTURAL DEPTH..." minHeight="min-h-[520px]" />
  }
);

const StatsSection = dynamic(
  () => import("@/components/sections/StatsSection"),
  {
    loading: () => <SectionSkeleton label="SYNCHRONIZING VERIFIED TELEMETRY..." minHeight="min-h-[320px]" />
  }
);

const TestimonialsSection = dynamic(
  () => import("@/components/sections/TestimonialsSection"),
  {
    loading: () => <SectionSkeleton label="LOADING VERIFIED COMMENDATIONS..." minHeight="min-h-[460px]" />
  }
);

const MarqueeBand = dynamic(
  () => import("@/components/ui/MarqueeBand"),
  {
    loading: () => <SectionSkeleton label="LOADING OEM PARTNERS..." minHeight="min-h-[120px]" />
  }
);

const HomeFAQSection = dynamic(
  () => import("@/components/sections/HomeFAQSection"),
  {
    loading: () => <SectionSkeleton label="LOADING KNOWLEDGE ACCORDIONS..." minHeight="min-h-[380px]" />
  }
);

const MultiBranchSection = dynamic(
  () => import("@/components/sections/MultiBranchSection"),
  {
    loading: () => <SectionSkeleton label="MAPPING PHYSICAL EXPERIENCE CENTERS..." minHeight="min-h-[480px]" />
  }
);

export const metadata: Metadata = {
  title: "CCTV Camera in Kondapur, Hyderabad, Warangal and Hanamkonda | CCTV Camera Shop | Dhrusti IT Security",
  description: "Secure your property with Dhrusti's reliable CCTV Camera in Kondapur, Warangal and Hyderabad. Get advanced surveillance solutions for homes and businesses with clear monitoring, 24/7 reliability, and expert installation services.",
  alternates: {
    canonical: "https://www.dhrusti.in/"
  },
  other: {
    "DC.title": "CCTV Camera in Warangal, Hanamkonda, Kazipet and Kondapur",
    "geo.region": "IN-AP",
    "geo.placename": "Warangal, Hanamkonda, Kondapur",
    "geo.position": "17.979872;79.599797",
    "ICBM": "17.979872, 79.599797"
  },
  openGraph: {
    title: "CCTV Camera in Kondapur, Hyderabad, Warangal and Hanamkonda | CCTV Camera Shop | Dhrusti IT Security",
    description: "Secure your property with Dhrusti's reliable CCTV Camera in Warangal. Get advanced surveillance solutions for homes and businesses with clear monitoring, 24/7 reliability",
    url: "https://www.dhrusti.in/",
    siteName: "Dhrusti",
    type: "website",
    images: [
      {
        url: "/images/Dhrusti-it-seccurity-logo.png",
        width: 1200,
        height: 630,
        alt: "Dhrusti IT Security"
      }
    ]
  }
};

export default function HomePage() {
  const homeSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "name": "Dhrusti",
        "image": "https://www.dhrusti.in/images/Dhrusti-it-seccurity-logo.png",
        "@id": "https://www.dhrusti.in/#warangal",
        "url": "https://www.dhrusti.in/",
        "telephone": "09346105589",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "HNO: 9-1-88, Markandeya Street, opp. padmashali Sangam, Girmajipet",
          "addressLocality": "Warangal",
          "postalCode": "506002",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 17.979091,
          "longitude": 79.5996296
        },
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          "opens": "10:00",
          "closes": "19:30"
        },
        "sameAs": [
          "https://www.facebook.com/dhrustiit",
          "https://www.instagram.com/noothankumar"
        ]
      },
      {
        "@type": "LocalBusiness",
        "name": "Dhrusti",
        "image": "https://www.dhrusti.in/images/Dhrusti-it-seccurity-logo.png",
        "@id": "https://www.dhrusti.in/#kondapur",
        "url": "https://www.dhrusti.in/",
        "telephone": "08688566688",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Third floor, Plot 187, above Allen Solly showroom, Raghavendra Colony, Kondapur",
          "addressLocality": "Hyderabad",
          "postalCode": "500084",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 17.4694476,
          "longitude": 78.3620208
        },
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          "opens": "00:00",
          "closes": "23:59"
        },
        "sameAs": [
          "https://www.facebook.com/dhrustiit",
          "https://www.instagram.com/noothankumar"
        ]
      },
      {
        "@type": "Organization",
        "name": "Dhrusti",
        "alternateName": "Dhrusti IT Security",
        "url": "https://www.dhrusti.in",
        "logo": "https://www.dhrusti.in/images/Dhrusti-it-seccurity-logo.png",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "08688566688",
          "contactType": "customer service",
          "areaServed": "IN",
          "availableLanguage": "en"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": HOME_FAQS.map((faq) => ({
          "@type": "Question",
          "name": faq.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.a
          }
        }))
      }
    ]
  };

  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchema) }}
      />

      {/* 1. Interactive 360° Turntable Hero (Immediate Critical Render) */}
      <Turntable360Hero />

      {/* Section Transition Flare */}
      <SectionTransitionDivider variant="amber-beam" />

      {/* 2. Authentic About Us Section (gap.jpg, 2003/2021 History, Trademark 2020) */}
      <HomeAboutSection />

      {/* Section Transition Flare */}
      <SectionTransitionDivider variant="grid-glow" />

      {/* 3. Featured 5 Cameras Showcase with 3D Orbit View & Specs */}
      <FeaturedProductsSection />

      {/* Section Transition Flare */}
      <SectionTransitionDivider variant="amber-beam" />

      {/* 4. Core Surveillance Services */}
      <ServicesGridSection />

      {/* Section Transition Flare */}
      <SectionTransitionDivider variant="grid-glow" />

      {/* 5. Why Choose Us (4 Pillars with Center 3D Floating Camera) */}
      <WhyChooseUsSection />

      {/* Section Transition Flare */}
      <SectionTransitionDivider variant="amber-beam" />

      {/* 6. Live Proof Numbers & Impact Counters (50,000+ Cameras, 1000+ Projects, 20+ Years, 50+ Team) */}
      <StatsSection />

      {/* Section Transition Flare */}
      <SectionTransitionDivider variant="grid-glow" />

      {/* 7. Testimonials from IPS Commissioners & Real Clients */}
      <TestimonialsSection />

      {/* Section Transition Flare */}
      <SectionTransitionDivider variant="amber-beam" />

      {/* 8. OEM Partners Marquee (9 Brand Logos) */}
      <MarqueeBand />

      {/* Section Transition Flare */}
      <SectionTransitionDivider variant="grid-glow" />

      {/* 9. FAQ Accordion (6 Schema-synced Questions) */}
      <HomeFAQSection />

      {/* Section Transition Flare */}
      <SectionTransitionDivider variant="amber-beam" />

      {/* 10. Multi-Branch Physical Experience Centers & Google Maps */}
      <MultiBranchSection />
    </div>
  );
}
