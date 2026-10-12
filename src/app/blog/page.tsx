import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BLOG_POSTS } from "@/lib/data/blogData";
import { 
  FileText, 
  Clock, 
  ArrowRight, 
  Calendar,
  Sparkles,
  ChevronRight,
  TrendingUp,
  ShieldCheck,
  PhoneCall
} from "lucide-react";
import { Card3D } from "@/components/ui/Motion3D";
import { MaskRevealImage } from "@/components/scroll/ScrollPrimitives";
import SectionTransitionDivider from "@/components/ui/SectionTransitionDivider";
import { SITE_INFO } from "@/lib/data/siteData";

export const metadata: Metadata = {
  title: "Dhrusti IT Security Blog - Guides, Tips & Surveillance News",
  description: "Dhrusti IT Security Blog — CCTV how-tos, pro tips and surveillance updates to help you choose, install and maintain smarter security systems.",
  alternates: {
    canonical: "https://www.dhrusti.in/blog"
  },
  openGraph: {
    title: "Dhrusti IT Security Blog - Guides, Tips & Surveillance News",
    description: "Dhrusti IT Security Blog — CCTV how-tos, pro tips and surveillance updates to help you choose, install and maintain smarter security systems.",
    url: "https://www.dhrusti.in/blog",
    siteName: "Dhrusti",
    type: "website"
  }
};

export default function BlogPage() {
  const featuredPost = BLOG_POSTS[0];
  const otherPosts = BLOG_POSTS.slice(1);

  return (
    <div className="py-16 md:py-24 bg-[#f8fafc] text-slate-900">
      {/* Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-16">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-mono uppercase tracking-widest mb-4 shadow-sm">
            <FileText className="w-3.5 h-3.5 text-amber-600" />
            Security Intelligence & Buyer Guides
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight text-slate-900">
            Guides, Tips & <span className="text-gradient-gold">Surveillance News</span>
          </h1>
          <p className="text-slate-600 text-base md:text-lg mt-4 leading-relaxed">
            Dhrusti IT Security Blog — CCTV how-tos, pro tips and surveillance updates to help you choose, install, and maintain smarter security systems.
          </p>
        </div>
      </div>

      {/* Main Content Layout with 2-Column Grid + Sidebar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Main Blog Stream (8 cols) */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Featured Post Card */}
            {featuredPost && (
              <Card3D>
                <article className="bg-white rounded-3xl overflow-hidden border border-slate-200 hover:border-amber-400 shadow-md hover:shadow-xl transition-all group">
                  <div className="relative w-full h-72 sm:h-96 overflow-hidden bg-slate-100">
                    <MaskRevealImage
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      shape="center"
                      priority
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      containerClassName="relative w-full h-full"
                    />
                    <div className="absolute top-4 left-4 flex gap-2 z-10">
                      <span className="px-3.5 py-1.5 rounded-full bg-slate-900/90 text-amber-400 text-xs font-mono font-bold tracking-wider backdrop-blur-md shadow-md">
                        ★ Latest Feature
                      </span>
                      <span className="px-3.5 py-1.5 rounded-full bg-amber-500 text-slate-950 text-xs font-mono font-bold tracking-wider shadow-md">
                        {featuredPost.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-8">
                    <div className="flex items-center gap-4 text-xs font-mono text-slate-500 mb-3">
                      <span className="flex items-center gap-1.5 text-amber-700 font-semibold">
                        <Calendar className="w-3.5 h-3.5" />
                        {featuredPost.date}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-slate-400" />
                        {featuredPost.readTime}
                      </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 group-hover:text-amber-700 transition-colors mb-4 leading-snug">
                      <Link href={`/blog/${featuredPost.slug}`}>
                        {featuredPost.title}
                      </Link>
                    </h2>

                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                      {featuredPost.excerpt}
                    </p>

                    <Link
                      href={`/blog/${featuredPost.slug}`}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 text-white font-bold text-xs uppercase tracking-wider group-hover:bg-amber-600 transition-all shadow-md"
                    >
                      Read Full Article <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </article>
              </Card3D>
            )}

            <SectionTransitionDivider variant="amber-beam" className="my-8" />

            {/* Grid of Other Articles */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              {otherPosts.map((post) => (
                <Card3D key={post.slug} className="h-full">
                  <article className="bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-amber-400 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between h-full group">
                    <div>
                      <div className="relative w-full h-48 overflow-hidden bg-slate-100">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-3 left-3">
                          <span className="px-2.5 py-1 rounded-md bg-white/90 backdrop-blur-md text-[10px] font-mono font-bold text-amber-900 uppercase shadow-sm">
                            {post.category}
                          </span>
                        </div>
                      </div>

                      <div className="p-5">
                        <div className="flex items-center gap-3 text-[11px] font-mono text-slate-400 mb-2">
                          <span>{post.date}</span>
                          <span>•</span>
                          <span>{post.readTime}</span>
                        </div>

                        <h3 className="text-base font-bold text-slate-900 group-hover:text-amber-700 transition-colors mb-2 leading-snug line-clamp-2">
                          <Link href={`/blog/${post.slug}`}>
                            {post.title}
                          </Link>
                        </h3>

                        <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                          {post.excerpt}
                        </p>
                      </div>
                    </div>

                    <div className="p-5 pt-0">
                      <Link
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-amber-700 group-hover:text-amber-800 transition-colors"
                      >
                        Read Article <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </article>
                </Card3D>
              ))}
            </div>

          </div>

          {/* Sidebar (4 cols) matching authentic blog.html */}
          <div className="lg:col-span-4 space-y-8">
            
            {/* Recent Blogs Sidebar Box */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm sticky top-28">
              <div className="flex items-center gap-2 mb-6 pb-4 border-b border-slate-100">
                <TrendingUp className="w-5 h-5 text-amber-600" />
                <h3 className="text-lg font-extrabold text-slate-900">Recent Blogs</h3>
              </div>

              <ul className="space-y-4">
                {BLOG_POSTS.map((post, idx) => (
                  <li key={idx} className="group">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors"
                    >
                      <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-800 text-xs font-mono font-bold flex items-center justify-center shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <div>
                        <h4 className="text-xs font-bold text-slate-800 group-hover:text-amber-700 transition-colors leading-snug">
                          {post.title}
                        </h4>
                        <span className="text-[10px] text-slate-400 font-mono mt-1 block">
                          {post.date}
                        </span>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Consultation / Help Box */}
              <div className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 text-white shadow-md">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center mb-3">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-white mb-1">Need CCTV Advice?</h4>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  Talk with our certified security engineers for a tailored site survey and quote.
                </p>
                <a
                  href={`tel:${SITE_INFO.phonePrimary.replace(/\s+/g, '')}`}
                  className="w-full py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 transition-colors shadow-sm"
                >
                  <PhoneCall className="w-3.5 h-3.5" /> Call {SITE_INFO.phonePrimary}
                </a>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
