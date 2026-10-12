import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { SERVICES, ServiceItem } from "@/lib/data/servicesData";
import { 
  ShieldCheck, 
  Wrench, 
  Cpu, 
  Radio, 
  Video, 
  Clock, 
  MonitorCheck, 
  PhoneCall, 
  CheckCircle2, 
  ArrowRight, 
  Phone, 
  ArrowLeft, 
  Sparkles 
} from "lucide-react";
import { MaskRevealImage } from "@/components/scroll/ScrollPrimitives";
import SectionTransitionDivider from "@/components/ui/SectionTransitionDivider";
import { Card3D } from "@/components/ui/Motion3D";
import { SITE_INFO } from "@/lib/data/siteData";

export async function generateStaticParams() {
  return SERVICES.flatMap((s) => [
    { slug: s.slug },
    { slug: s.id }
  ]);
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug || s.id === slug);
  if (!service) return { title: "Service Not Found | Dhrusti IT Security" };

  return {
    title: `${service.metaTitle}`,
    description: service.metaDescription,
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      images: [service.image],
    }
  };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug || s.id === slug);

  if (!service) {
    notFound();
  }

  const relatedServices = SERVICES.filter((s) => s.id !== service.id).slice(0, 3);

  return (
    <div className="py-16 md:py-24 bg-[#f8fafc] text-slate-900 min-h-screen">
      {/* Breadcrumb Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-8">
        <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
          <Link href="/" className="hover:text-amber-600 transition-colors">Home</Link>
          <span>/</span>
          <Link href="/services" className="hover:text-amber-600 transition-colors">Services</Link>
          <span>/</span>
          <span className="text-slate-900 font-bold">{service.title}</span>
        </div>
      </div>

      {/* Main Layout: 2 Columns (Sidebar + Content) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Services Sidebar Navigation */}
          <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-28">
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-md">
              <h3 className="text-base font-bold text-slate-900 mb-4 pb-3 border-b border-slate-100 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-amber-600" />
                Our Services Menu
              </h3>

              <ul className="space-y-1.5">
                {SERVICES.map((s) => {
                  const isActive = s.id === service.id || s.slug === service.slug;
                  return (
                    <li key={s.id}>
                      <Link
                        href={`/services/${s.slug}`}
                        className={`block px-4 py-3 rounded-xl text-xs font-semibold transition-all ${
                          isActive
                            ? "bg-amber-600 text-white font-bold shadow-sm"
                            : "text-slate-700 hover:bg-slate-50 hover:text-amber-700"
                        }`}
                      >
                        {s.title.replace(" Services", "")}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Direct Support CTA Card */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 text-white shadow-lg space-y-4">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-400/30 flex items-center justify-center text-amber-400">
                <PhoneCall className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-base font-bold">24/7 Security Helpline</h4>
                <p className="text-xs text-slate-300 mt-1">Speak directly with an on-duty CCTV field engineer.</p>
              </div>
              <a
                href={`tel:${SITE_INFO.phonePrimary.replace(/\s+/g, '')}`}
                className="block w-full py-3 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-bold text-xs uppercase tracking-wider text-center transition-all shadow-md"
              >
                Call: {SITE_INFO.phonePrimary}
              </a>
            </div>
          </aside>

          {/* Right Column: Detailed Article Content */}
          <main className="lg:col-span-8 space-y-8">
            <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-200 shadow-xl space-y-8">
              {/* Featured Mask Reveal Image */}
              <div className="relative w-full h-72 sm:h-96 rounded-2xl overflow-hidden border border-slate-200 shadow-md">
                <MaskRevealImage
                  src={service.image}
                  alt={service.title}
                  shape="center"
                  priority
                  className="object-cover"
                  containerClassName="relative w-full h-full"
                />
              </div>

              {/* Title & Badge */}
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs font-mono uppercase tracking-widest shadow-sm">
                  <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                  Authorized Engineering
                </div>
                <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                  {service.title}
                </h1>
              </div>

              {/* Full Paragraphs from Original Site */}
              <div className="space-y-5 text-slate-700 text-sm md:text-base leading-relaxed">
                {service.fullArticleParagraphs.map((p, idx) => (
                  <p key={idx} className="leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>

              {/* Highlights & Scope of Work */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-slate-100">
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                  <h3 className="text-xs font-mono text-amber-900 font-bold uppercase tracking-wider">
                    • Key Service Highlights
                  </h3>
                  <ul className="space-y-2">
                    {service.highlights.map((h, i) => (
                      <li key={i} className="text-xs text-slate-700 flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                  <h3 className="text-xs font-mono text-amber-900 font-bold uppercase tracking-wider">
                    • Scope of Execution
                  </h3>
                  <ul className="space-y-2">
                    {service.scopeOfWork.map((s, i) => (
                      <li key={i} className="text-xs text-slate-700 flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Trigger */}
              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <Link
                  href={`/get-a-quote?service=${service.id}`}
                  className="px-8 py-4 rounded-xl bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md text-center flex items-center justify-center gap-2"
                >
                  Book On-Site Survey & Estimate <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href={`https://wa.me/${SITE_INFO.whatsapp}?text=Hi%20Dhrusti%20Team,%20I%20am%20interested%20in%20${encodeURIComponent(service.title)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md text-center flex items-center justify-center gap-2"
                >
                  WhatsApp Inquiry
                </a>
              </div>
            </div>
          </main>
        </div>
      </div>

      {/* Cinematic Divider */}
      <SectionTransitionDivider variant="amber-beam" className="mb-16" />

      {/* Related Services Recommendation Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-mono font-bold text-amber-700 uppercase tracking-widest block mb-2">
            Complete Surveillance Spectrum
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Explore Complementary <span className="text-gradient-gold">Security Services</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedServices.map((rel) => (
            <Card3D key={rel.id} className="h-full">
              <Link
                href={`/services/${rel.slug}`}
                className="block p-6 rounded-3xl bg-white border border-slate-200 hover:border-amber-400 shadow-sm hover:shadow-xl transition-all duration-300 h-full group"
              >
                <div className="relative w-full h-40 rounded-2xl overflow-hidden mb-4 bg-slate-100">
                  <Image
                    src={rel.image}
                    alt={rel.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-base font-bold text-slate-900 group-hover:text-amber-700 transition-colors mb-2">
                  {rel.title}
                </h3>
                <p className="text-xs text-slate-600 line-clamp-2 mb-4 leading-relaxed">
                  {rel.shortDesc}
                </p>
                <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-amber-700 uppercase tracking-wider group-hover:translate-x-1 transition-transform">
                  View Specifications <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            </Card3D>
          ))}
        </div>
      </div>
    </div>
  );
}
