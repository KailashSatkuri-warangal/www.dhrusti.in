import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { SECURITY_SOLUTIONS, SecuritySolution } from "@/lib/data/servicesData";
import { 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Building2, 
  PhoneCall,
  Sparkles
} from "lucide-react";
import { MaskRevealImage } from "@/components/scroll/ScrollPrimitives";
import SectionTransitionDivider from "@/components/ui/SectionTransitionDivider";
import { Card3D } from "@/components/ui/Motion3D";
import { SITE_INFO } from "@/lib/data/siteData";

export async function generateStaticParams() {
  return SECURITY_SOLUTIONS.flatMap((s) => [
    { slug: s.slug },
    { slug: s.id }
  ]);
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const sol = SECURITY_SOLUTIONS.find((s) => s.slug === slug || s.id === slug);
  if (!sol) return { title: "Solution Not Found | Dhrusti IT Security" };

  return {
    title: `${sol.metaTitle}`,
    description: sol.metaDescription,
    openGraph: {
      title: sol.metaTitle,
      description: sol.metaDescription,
      images: [sol.image],
    }
  };
}

export default async function SolutionDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const sol = SECURITY_SOLUTIONS.find((s) => s.slug === slug || s.id === slug);

  if (!sol) {
    notFound();
  }

  const otherSolutions = SECURITY_SOLUTIONS.filter((s) => s.id !== sol.id);

  return (
    <div className="py-16 md:py-24 bg-[#f8fafc] text-slate-900 min-h-screen">
      {/* Breadcrumb Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-8">
        <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
          <Link href="/" className="hover:text-amber-600 transition-colors">Home</Link>
          <span>/</span>
          <Link href="/solutions" className="hover:text-amber-600 transition-colors">Solutions</Link>
          <span>/</span>
          <span className="text-slate-900 font-bold">{sol.title}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Solutions Sidebar */}
          <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-28">
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-md">
              <h3 className="text-base font-bold text-slate-900 mb-4 pb-3 border-b border-slate-100 flex items-center gap-2">
                <Building2 className="w-4 h-4 text-amber-600" />
                Security Solutions
              </h3>

              <ul className="space-y-1.5">
                {SECURITY_SOLUTIONS.map((s) => {
                  const isActive = s.id === sol.id || s.slug === sol.slug;
                  return (
                    <li key={s.id}>
                      <Link
                        href={`/solutions/${s.slug}`}
                        className={`block px-4 py-3 rounded-xl text-xs font-semibold transition-all ${
                          isActive
                            ? "bg-amber-600 text-white font-bold shadow-sm"
                            : "text-slate-700 hover:bg-slate-50 hover:text-amber-700"
                        }`}
                      >
                        {s.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Direct Phone Assistance */}
            <div className="p-6 rounded-3xl bg-amber-50 border border-amber-200 text-slate-900 space-y-3">
              <span className="text-[10px] font-mono font-bold text-amber-800 uppercase tracking-widest block">
                • Need Custom Blueprint?
              </span>
              <h4 className="text-sm font-bold text-slate-900">Custom Architecture Consultation</h4>
              <p className="text-xs text-slate-600">
                Our senior security architects analyze floorplans and design blindspot-free layouts.
              </p>
              <a
                href={`tel:${SITE_INFO.phonePrimary.replace(/\s+/g, '')}`}
                className="inline-flex items-center gap-2 text-xs font-mono font-bold text-amber-800 hover:underline pt-2"
              >
                <PhoneCall className="w-3.5 h-3.5" /> {SITE_INFO.phonePrimary}
              </a>
            </div>
          </aside>

          {/* Right Column: Detailed Solution Content */}
          <main className="lg:col-span-8 space-y-8">
            <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-200 shadow-xl space-y-8">
              {/* Mask Reveal Image */}
              <div className="relative w-full h-72 sm:h-96 rounded-2xl overflow-hidden border border-slate-200 shadow-md">
                <MaskRevealImage
                  src={sol.image}
                  alt={sol.title}
                  shape="horizontal"
                  priority
                  className="object-cover"
                  containerClassName="relative w-full h-full"
                />
              </div>

              {/* Title & Ideal For */}
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-mono font-bold uppercase">
                  Ideal For: {sol.idealFor}
                </div>
                <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                  {sol.title}
                </h1>
                <p className="text-sm text-slate-500 italic">
                  {sol.subtitle}
                </p>
              </div>

              {/* Original Full Text Paragraphs */}
              <div className="space-y-5 text-slate-700 text-sm md:text-base leading-relaxed">
                {sol.fullArticleParagraphs.map((p, idx) => (
                  <p key={idx} className="leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>

              {/* Feature Checklist */}
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <h3 className="text-xs font-mono text-amber-900 font-bold uppercase tracking-wider">
                  • Key Architecture Capabilities
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {sol.features.map((feat, i) => (
                    <div key={i} className="text-xs text-slate-700 flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <Link
                  href={`/get-a-quote?solution=${sol.id}`}
                  className="px-8 py-4 rounded-xl bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md text-center flex items-center justify-center gap-2"
                >
                  Configure Custom Solution Plan <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href={`https://wa.me/${SITE_INFO.whatsapp}?text=Hi%20Dhrusti%20Team,%20I%20want%20a%20quote%20for%20${encodeURIComponent(sol.title)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md text-center flex items-center justify-center gap-2"
                >
                  WhatsApp Quote
                </a>
              </div>
            </div>
          </main>
        </div>
      </div>

      {/* Cinematic Divider */}
      <SectionTransitionDivider variant="grid-glow" className="mb-16" />

      {/* Other Industry Blueprints */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-mono font-bold text-amber-700 uppercase tracking-widest block mb-2">
            Industry Tailored Blueprints
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Explore Other <span className="text-gradient-gold">Security Blueprints</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {otherSolutions.map((item) => (
            <Card3D key={item.id} className="h-full">
              <Link
                href={`/solutions/${item.slug}`}
                className="block p-6 rounded-3xl bg-white border border-slate-200 hover:border-amber-400 shadow-sm hover:shadow-xl transition-all duration-300 h-full group"
              >
                <div className="relative w-full h-40 rounded-2xl overflow-hidden mb-4 bg-slate-100">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="inline-block px-2.5 py-0.5 rounded-full bg-amber-50 text-[10px] font-mono font-bold text-amber-800 uppercase mb-2">
                  {item.idealFor}
                </div>
                <h3 className="text-base font-bold text-slate-900 group-hover:text-amber-700 transition-colors mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 line-clamp-2 mb-4 leading-relaxed">
                  {item.description}
                </p>
                <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-amber-700 uppercase tracking-wider group-hover:translate-x-1 transition-transform">
                  View Blueprint <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            </Card3D>
          ))}
        </div>
      </div>
    </div>
  );
}
