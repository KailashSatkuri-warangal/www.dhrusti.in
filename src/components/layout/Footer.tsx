"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Shield, 
  CheckCircle2, 
  ArrowUpRight,
  ExternalLink,
  ShieldCheck,
  ArrowRight
} from "lucide-react";
import { SITE_INFO } from "@/lib/data/siteData";

export default function Footer() {
  return (
    <footer className="w-full bg-slate-950 border-t border-slate-800 text-slate-300 text-xs relative overflow-hidden">
      {/* Ambient background glow */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] opacity-15 pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(217,119,6,0.25) 0%, transparent 70%)"
        }}
      />

      {/* Pre-footer Cinematic Call to Action Band */}
      <div className="relative border-b border-slate-800/80 py-16 px-4 sm:px-6 bg-slate-900/60 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 font-mono text-[11px] uppercase tracking-widest"
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            24/7 Rapid Surveillance Deployment
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight"
          >
            Let&apos;s Build Your Next-Gen <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500">
              Security & Surveillance Grid
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-400 max-w-xl mx-auto text-sm leading-relaxed"
          >
            From single AI solar PTZ cameras to multi-site optical infrastructure across Telangana and Andhra Pradesh. Guaranteed same-day dispatch and certified installation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.28 }}
            className="flex flex-wrap items-center justify-center gap-4 pt-2"
          >
            <Link
              href="/get-a-quote"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold px-7 py-3.5 rounded-xl shadow-lg shadow-amber-500/25 transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/35 hover:-translate-y-0.5 text-sm"
            >
              Instant Quote Estimator
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:+918688566688"
              className="inline-flex items-center gap-2 bg-slate-800/90 hover:bg-slate-800 border border-slate-700 text-slate-200 hover:text-white font-semibold px-6 py-3.5 rounded-xl transition-all duration-300 hover:-translate-y-0.5 text-sm"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              Direct Hotline: +91 86885 66688
            </a>
          </motion.div>
        </div>
      </div>

      {/* Main Footer Links Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          {/* Col 1: Brand & Credibility */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block bg-white p-2.5 rounded-2xl shadow-sm hover:opacity-95 transition-opacity">
              <Image
                src="/images/Dhrusti-it-seccurity-logo.png"
                alt="Dhrusti IT Security Logo"
                width={190}
                height={50}
                className="object-contain"
              />
            </Link>
            <p className="text-slate-300 leading-relaxed max-w-sm">
              <strong className="text-white font-semibold">Dhrusti IT Security Private Limited</strong> is Telangana & Andhra Pradesh&apos;s leading surveillance engineering firm, pioneering internet-connected CCTV streaming and biometric systems since 2003.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700 text-[11px] text-amber-400 font-mono font-semibold">
                ✓ Since 2003
              </span>
              <span className="px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700 text-[11px] text-amber-400 font-mono font-semibold">
                ✓ 50,000+ Cameras
              </span>
              <span className="px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700 text-[11px] text-amber-400 font-mono font-semibold">
                ✓ CREDAI Member
              </span>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold tracking-widest text-white uppercase border-l-2 border-amber-500 pl-2">
              Navigation
            </h4>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-amber-400 transition-colors">Home Page</Link></li>
              <li><Link href="/about-us" className="hover:text-amber-400 transition-colors">About Legacy &amp; Founder</Link></li>
              <li><Link href="/cctv-cameras" className="hover:text-amber-400 transition-colors">360° CCTV Cameras</Link></li>
              <li><Link href="/video-door-phones" className="hover:text-amber-400 transition-colors">Video Door Phones</Link></li>
              <li><Link href="/clients" className="hover:text-amber-400 transition-colors">Clients (1,000+)</Link></li>
              <li><Link href="/gallery" className="hover:text-amber-400 transition-colors">On-Site Gallery</Link></li>
              <li><Link href="/partners" className="hover:text-amber-400 transition-colors">Brand Partners</Link></li>
              <li><Link href="/get-a-quote" className="hover:text-amber-400 transition-colors text-amber-400 font-bold">Instant Quote Estimator</Link></li>
            </ul>
          </div>

          {/* Col 3: Core Surveillance Services */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold tracking-widest text-white uppercase border-l-2 border-amber-500 pl-2">
              Services &amp; Solutions
            </h4>
            <ul className="space-y-1.5 text-[11px]">
              <li><Link href="/services/cctv-installation-services-in-warangal" className="hover:text-amber-400 transition-colors">CCTV Installation</Link></li>
              <li><Link href="/services/maintanance-amc" className="hover:text-amber-400 transition-colors">Maintenance &amp; AMC</Link></li>
              <li><Link href="/services/system-upgrades" className="hover:text-amber-400 transition-colors">System Upgrades</Link></li>
              <li><Link href="/services/remote-monitoring-setup" className="hover:text-amber-400 transition-colors">Remote Monitoring Setup</Link></li>
              <li><Link href="/services/event-surveillance" className="hover:text-amber-400 transition-colors">Event Surveillance</Link></li>
              <li><Link href="/services/cctv-on-hire-basis" className="hover:text-amber-400 transition-colors">CCTV On Hire Basis</Link></li>
              <li><Link href="/services/central-monitoring-system" className="hover:text-amber-400 transition-colors">Central Monitoring System</Link></li>
              <li><Link href="/services/telephone-intercom" className="hover:text-amber-400 transition-colors">Telephone Intercom</Link></li>
              <li><Link href="/services/epabx" className="hover:text-amber-400 transition-colors">EPABX Services</Link></li>
              <li><Link href="/solutions" className="hover:text-amber-400 transition-colors text-amber-400 font-semibold">Security Solutions →</Link></li>
            </ul>
          </div>

          {/* Col 4: Primary Offices & Dispatch */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold tracking-widest text-white uppercase border-l-2 border-amber-500 pl-2">
              Command Centers
            </h4>
            <div className="space-y-3">
              <div>
                <p className="font-bold text-white text-xs">Hyderabad Tech Hub:</p>
                <p className="text-[11px] text-slate-300">Plot 187, 3rd Floor, Above Allen Solly, Kondapur, Hyderabad - 500084</p>
                <a href="tel:+918688566688" className="text-amber-400 font-mono hover:underline font-bold">+91 86885 66688</a>
              </div>

              <div>
                <p className="font-bold text-white text-xs">Warangal Corporate HQ:</p>
                <p className="text-[11px] text-slate-300">#9-1-88, Markandeya St, Girmajipet, Warangal - 506002</p>
                <a href="tel:+919346105589" className="text-amber-400 font-mono hover:underline font-bold">+91 93461 05589</a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400 text-[11px]">
          <div>
            © {new Date().getFullYear()} Dhrusti IT Security Private Limited. All Rights Reserved.
          </div>

          <div className="flex items-center gap-6">
            <span>ISO Certified Integrity</span>
            <span>•</span>
            <span>Registered Brand DHRUSTI®</span>
            <span>•</span>
            <Link href="/contact" className="hover:text-amber-400 transition-colors">
              All 4 Branch Locations
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
