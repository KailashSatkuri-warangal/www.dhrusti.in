import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { BLOG_POSTS, BlogPost } from "@/lib/data/blogData";
import { 
  Calendar, 
  Clock, 
  User, 
  ArrowLeft, 
  Share2, 
  ShieldCheck, 
  CheckCircle2, 
  HelpCircle,
  ArrowRight,
  PhoneCall
} from "lucide-react";
import { MaskRevealImage } from "@/components/scroll/ScrollPrimitives";
import SectionTransitionDivider from "@/components/ui/SectionTransitionDivider";
import { Card3D } from "@/components/ui/Motion3D";
import { SITE_INFO } from "@/lib/data/siteData";

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return { title: "Post Not Found | Dhrusti IT Security" };

  return {
    title: `${post.title} — Dhrusti IT Security`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = BLOG_POSTS.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <article className="py-16 md:py-24 bg-[#f8fafc] text-slate-900 min-h-screen">
      {/* Header & Breadcrumb */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 mb-10">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-xs font-mono text-slate-500 hover:text-amber-600 transition-colors mb-6 uppercase tracking-wider"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Security Blog
        </Link>

        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-mono uppercase tracking-widest mb-4">
          <ShieldCheck className="w-3.5 h-3.5 text-amber-600" />
          {post.category}
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
          {post.title}
        </h1>

        <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-500 pb-8 border-b border-slate-200">
          <span className="flex items-center gap-1.5 text-slate-700 font-semibold">
            <User className="w-4 h-4 text-amber-600" /> {post.author}
          </span>
          <span>•</span>
          <span className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4 text-amber-600" /> {post.date}
          </span>
          <span>•</span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-amber-600" /> {post.readTime}
          </span>
        </div>
      </div>

      {/* Featured Visual */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 mb-12">
        <div className="relative w-full h-72 sm:h-96 md:h-[480px] rounded-3xl overflow-hidden border border-slate-200 shadow-xl">
          <MaskRevealImage
            src={post.image}
            alt={post.title}
            shape="center"
            priority
            className="object-cover"
            containerClassName="relative w-full h-full"
          />
        </div>
      </div>

      {/* Main Content Body */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-6 text-slate-700 text-sm md:text-base leading-relaxed">
        {post.content.map((paragraph, idx) => (
          <p key={idx} className="leading-relaxed font-normal">
            {paragraph}
          </p>
        ))}

        {/* FAQs if present */}
        {post.faqs && post.faqs.length > 0 && (
          <div className="mt-12 pt-8 border-t border-slate-200 space-y-6">
            <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-amber-600" /> Frequently Asked Questions
            </h3>
            <div className="space-y-4">
              {post.faqs.map((faq, i) => (
                <div key={i} className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
                  <h4 className="text-sm font-bold text-slate-900">
                    {faq.q}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* In-Article Call to Action Card */}
        <div className="mt-12 p-8 rounded-3xl bg-gradient-to-br from-amber-600 to-amber-800 text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <h4 className="text-xl font-bold">Need CCTV Installation for Your Property?</h4>
            <p className="text-xs text-amber-100 max-w-md">
              Speak directly with Mr. Noothan Kumar & our certified security engineers in Warangal and Hyderabad.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <Link
              href="/get-a-quote"
              className="px-6 py-3 rounded-xl bg-white text-slate-900 font-bold text-xs uppercase tracking-wider hover:bg-amber-50 transition-all text-center shadow-md"
            >
              Get Free Estimate
            </Link>
            <a
              href={`tel:${SITE_INFO.phonePrimary.replace(/\s+/g, '')}`}
              className="px-5 py-3 rounded-xl bg-amber-700/80 border border-white/20 text-white font-bold text-xs uppercase tracking-wider hover:bg-amber-700 transition-all text-center flex items-center justify-center gap-1.5"
            >
              <PhoneCall className="w-3.5 h-3.5" /> Call Now
            </a>
          </div>
        </div>
      </div>

      {/* Related Posts Grid */}
      {relatedPosts.length > 0 && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-16">
          <SectionTransitionDivider variant="amber-beam" className="mb-16" />

          <div className="text-center max-w-xl mx-auto mb-10">
            <h3 className="text-2xl font-bold text-slate-900">Related Security Insights</h3>
            <p className="text-xs text-slate-500 mt-1">Explore more technology updates and surveillance buyer guides.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedPosts.map((related) => (
              <Card3D key={related.slug} className="h-full">
                <Link
                  href={`/blog/${related.slug}`}
                  className="group bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full"
                >
                  <div className="relative w-full h-48 overflow-hidden">
                    <Image
                      src={related.image}
                      alt={related.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded-md bg-white/90 backdrop-blur-md text-[10px] font-mono font-bold text-amber-800 uppercase shadow-sm">
                        {related.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="text-base font-bold text-slate-900 group-hover:text-amber-700 transition-colors line-clamp-2 mb-2">
                        {related.title}
                      </h4>
                      <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-4">
                        {related.excerpt}
                      </p>
                    </div>

                    <span className="text-xs font-mono font-bold text-amber-700 flex items-center gap-1 uppercase tracking-wider">
                      Read Article <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              </Card3D>
            ))}
          </div>
        </div>
      )}
    </article>
  );
}
