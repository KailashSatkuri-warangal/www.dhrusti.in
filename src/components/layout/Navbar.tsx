"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { SITE_INFO } from "@/lib/data/siteData";
import { 
  Menu, 
  X, 
  Phone, 
  Mail,
  ChevronDown, 
  ChevronRight,
  ShieldCheck, 
  Camera, 
  Wrench, 
  Layers, 
  Lock, 
  PhoneCall, 
  Clock, 
  Video, 
  MonitorCheck, 
  Cpu, 
  Radio,
  ArrowRight
} from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [securitySolutionsSubmenu, setSecuritySolutionsSubmenu] = useState(false);
  const [productsDropdown, setProductsDropdown] = useState(false);
  const [portfolioDropdown, setPortfolioDropdown] = useState(false);

  // Mobile Accordion States
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [mobilePortfolioOpen, setMobilePortfolioOpen] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdown(false);
    setProductsDropdown(false);
    setPortfolioDropdown(false);
    setSecuritySolutionsSubmenu(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const dropdownMotion = {
    initial: { opacity: 0, y: 8, scale: 0.98 },
    animate: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: 8, scale: 0.98 },
    transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] as const }
  };

  return (
    <>
      {/* Top Rapid Hotline / Dispatch Bar */}
      <div className="bg-slate-900 text-slate-200 py-2 px-4 text-xs font-mono border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
          {/* Left: Phone and Email */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 sm:gap-6 text-slate-300">
            <span className="flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <a href="tel:+918984567456" className="hover:text-amber-400 transition-colors font-bold text-white">
                +91 - 8984567456
              </a>
            </span>
            <span className="hidden sm:inline text-slate-700">|</span>
            <span className="flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-amber-400" />
              <a href="mailto:info@dhrusti.in" className="hover:text-amber-400 transition-colors">
                info@dhrusti.in
              </a>
            </span>
          </div>

          {/* Right: Social Media Links */}
          <div className="flex items-center gap-4 text-slate-300">
            <span className="text-[10px] uppercase tracking-wider text-slate-400 hidden sm:inline">Follow Us:</span>
            
            {/* Facebook */}
            <a 
              href={SITE_INFO.socialLinks.facebook} 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Facebook"
              className="w-7 h-7 rounded-lg bg-slate-800 hover:bg-amber-600 text-white flex items-center justify-center transition-all duration-200 shadow-sm hover:scale-105"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.688 5H18V0h-3.808C10.595 0 9 1.583 9 4.615V8z"/>
              </svg>
            </a>

            {/* Instagram */}
            <a 
              href={SITE_INFO.socialLinks.instagram} 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Instagram"
              className="w-7 h-7 rounded-lg bg-slate-800 hover:bg-amber-600 text-white flex items-center justify-center transition-all duration-200 shadow-sm hover:scale-105"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>

            {/* YouTube */}
            <a 
              href={SITE_INFO.socialLinks.youtube} 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="YouTube"
              className="w-7 h-7 rounded-lg bg-slate-800 hover:bg-amber-600 text-white flex items-center justify-center transition-all duration-200 shadow-sm hover:scale-105"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>

            {/* LinkedIn */}
            <a 
              href={SITE_INFO.socialLinks.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="LinkedIn"
              className="w-7 h-7 rounded-lg bg-slate-800 hover:bg-amber-600 text-white flex items-center justify-center transition-all duration-200 shadow-sm hover:scale-105"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Main Glassmorphic Sticky Header */}
      <header
        className={`sticky top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-lg shadow-slate-900/5 py-3.5"
            : "bg-white/85 backdrop-blur-md py-4 border-b border-slate-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-40 h-10 md:w-48 md:h-12 flex items-center">
              <Image
                src="/images/Dhrusti-it-seccurity-logo.png"
                alt="Dhrusti IT Security Logo"
                width={200}
                height={50}
                priority
                className="object-contain transition-transform duration-300 group-hover:scale-[1.02]"
              />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 font-semibold text-xs tracking-wider uppercase">
            <Link
              href="/"
              className={`relative px-3 py-2 rounded-lg transition-all ${
                pathname === "/" ? "text-amber-700 bg-amber-50 font-bold" : "text-slate-700 hover:text-amber-700 hover:bg-slate-50"
              }`}
            >
              Home
              {pathname === "/" && (
                <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-amber-500 rounded-full" />
              )}
            </Link>

            <Link
              href="/about-us"
              className={`relative px-3 py-2 rounded-lg transition-all ${
                pathname.startsWith("/about") ? "text-amber-700 bg-amber-50 font-bold" : "text-slate-700 hover:text-amber-700 hover:bg-slate-50"
              }`}
            >
              About Us
              {pathname.startsWith("/about") && (
                <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-amber-500 rounded-full" />
              )}
            </Link>

            {/* SERVICES MEGA-DROPDOWN */}
            <div 
              className="relative"
              onMouseEnter={() => setServicesDropdown(true)}
              onMouseLeave={() => {
                setServicesDropdown(false);
                setSecuritySolutionsSubmenu(false);
              }}
            >
              <Link
                href="/services"
                className={`relative px-3 py-2 rounded-lg transition-all flex items-center gap-1 ${
                  pathname.startsWith("/services") || pathname.startsWith("/solutions") ? "text-amber-700 bg-amber-50 font-bold" : "text-slate-700 hover:text-amber-700 hover:bg-slate-50"
                }`}
              >
                Services <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesDropdown ? "rotate-180" : ""}`} />
                {(pathname.startsWith("/services") || pathname.startsWith("/solutions")) && (
                  <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-amber-500 rounded-full" />
                )}
              </Link>

              <AnimatePresence>
                {servicesDropdown && (
                  <motion.div 
                    {...dropdownMotion}
                    className="absolute top-full left-0 w-80 pt-2 z-50"
                  >
                    <div className="bg-white rounded-2xl p-3 shadow-2xl border border-slate-200 space-y-1">
                      <div className="px-3 py-1.5 text-[10px] font-mono font-bold text-amber-800 uppercase tracking-wider border-b border-slate-100">
                        Surveillance & Telecom Services
                      </div>

                      <Link href="/services/cctv-installation-services-in-warangal" className="flex items-center gap-2 px-3 py-2 rounded-xl text-xs text-slate-800 hover:bg-amber-50 hover:text-amber-700 transition-all font-semibold">
                        <ShieldCheck className="w-3.5 h-3.5 text-amber-600" /> CCTV Installation
                      </Link>

                      <Link href="/services/maintanance-amc" className="flex items-center gap-2 px-3 py-2 rounded-xl text-xs text-slate-800 hover:bg-amber-50 hover:text-amber-700 transition-all font-semibold">
                        <Wrench className="w-3.5 h-3.5 text-amber-600" /> Maintanance & AMC
                      </Link>

                      <Link href="/services/system-upgrades" className="flex items-center gap-2 px-3 py-2 rounded-xl text-xs text-slate-800 hover:bg-amber-50 hover:text-amber-700 transition-all font-semibold">
                        <Cpu className="w-3.5 h-3.5 text-amber-600" /> System Upgrades
                      </Link>

                      <Link href="/services/remote-monitoring-setup" className="flex items-center gap-2 px-3 py-2 rounded-xl text-xs text-slate-800 hover:bg-amber-50 hover:text-amber-700 transition-all font-semibold">
                        <Radio className="w-3.5 h-3.5 text-amber-600" /> Remote Monitoring Setup
                      </Link>

                      <Link href="/services/event-surveillance" className="flex items-center gap-2 px-3 py-2 rounded-xl text-xs text-slate-800 hover:bg-amber-50 hover:text-amber-700 transition-all font-semibold">
                        <Video className="w-3.5 h-3.5 text-amber-600" /> Event Surveillance
                      </Link>

                      <Link href="/services/cctv-on-hire-basis" className="flex items-center gap-2 px-3 py-2 rounded-xl text-xs text-slate-800 hover:bg-amber-50 hover:text-amber-700 transition-all font-semibold">
                        <Clock className="w-3.5 h-3.5 text-amber-600" /> CCTV On Hire Basis
                      </Link>

                      <Link href="/services/central-monitoring-system" className="flex items-center gap-2 px-3 py-2 rounded-xl text-xs text-slate-800 hover:bg-amber-50 hover:text-amber-700 transition-all font-semibold">
                        <MonitorCheck className="w-3.5 h-3.5 text-amber-600" /> Central Monitoring System
                      </Link>

                      <Link href="/services/telephone-intercom" className="flex items-center gap-2 px-3 py-2 rounded-xl text-xs text-slate-800 hover:bg-amber-50 hover:text-amber-700 transition-all font-semibold">
                        <PhoneCall className="w-3.5 h-3.5 text-amber-600" /> Telephone Intercom
                      </Link>

                      <Link href="/services/epabx" className="flex items-center gap-2 px-3 py-2 rounded-xl text-xs text-slate-800 hover:bg-amber-50 hover:text-amber-700 transition-all font-semibold">
                        <Phone className="w-3.5 h-3.5 text-amber-600" /> EPABX Services
                      </Link>

                      {/* Nested Security Solutions Submenu */}
                      <div 
                        className="relative pt-1 border-t border-slate-100"
                        onMouseEnter={() => setSecuritySolutionsSubmenu(true)}
                        onMouseLeave={() => setSecuritySolutionsSubmenu(false)}
                      >
                        <Link 
                          href="/solutions" 
                          className="flex items-center justify-between px-3 py-2 rounded-xl text-xs text-amber-800 hover:bg-amber-50 font-bold transition-all"
                        >
                          <span className="flex items-center gap-2">
                            <Layers className="w-3.5 h-3.5 text-amber-600" /> Security Solutions
                          </span>
                          <ChevronRight className="w-3.5 h-3.5" />
                        </Link>

                        <AnimatePresence>
                          {securitySolutionsSubmenu && (
                            <motion.div 
                              {...dropdownMotion}
                              className="absolute left-full top-0 pl-2 w-72 z-50"
                            >
                              <div className="bg-white rounded-2xl p-3 shadow-2xl border border-slate-200 space-y-1">
                                <div className="px-3 py-1 text-[10px] font-mono font-bold text-amber-800 uppercase tracking-wider border-b border-slate-100">
                                  Domain Solutions
                                </div>
                                <Link href="/solutions/residential-solutions" className="block px-3 py-2 rounded-xl text-xs text-slate-800 hover:bg-amber-50 hover:text-amber-700 transition-all font-semibold">
                                  Residential Solutions
                                </Link>
                                <Link href="/solutions/commercial-solutions" className="block px-3 py-2 rounded-xl text-xs text-slate-800 hover:bg-amber-50 hover:text-amber-700 transition-all font-semibold">
                                  Commercial Solutions
                                </Link>
                                <Link href="/solutions/industrial-solutions" className="block px-3 py-2 rounded-xl text-xs text-slate-800 hover:bg-amber-50 hover:text-amber-700 transition-all font-semibold">
                                  Industrial Solutions
                                </Link>
                                <Link href="/solutions/custom-security-plans" className="block px-3 py-2 rounded-xl text-xs text-slate-800 hover:bg-amber-50 hover:text-amber-700 transition-all font-semibold">
                                  Custom Security Plans
                                </Link>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* PRODUCTS DROPDOWN */}
            <div 
              className="relative"
              onMouseEnter={() => setProductsDropdown(true)}
              onMouseLeave={() => setProductsDropdown(false)}
            >
              <Link
                href="/products"
                className={`relative px-3 py-2 rounded-lg transition-all flex items-center gap-1 ${
                  pathname.startsWith("/products") || pathname === "/cctv-cameras" || pathname === "/video-door-phones" ? "text-amber-700 bg-amber-50 font-bold" : "text-slate-700 hover:text-amber-700 hover:bg-slate-50"
                }`}
              >
                Products <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${productsDropdown ? "rotate-180" : ""}`} />
                {(pathname.startsWith("/products") || pathname === "/cctv-cameras" || pathname === "/video-door-phones") && (
                  <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-amber-500 rounded-full" />
                )}
              </Link>

              <AnimatePresence>
                {productsDropdown && (
                  <motion.div 
                    {...dropdownMotion}
                    className="absolute top-full left-0 w-72 pt-2 z-50"
                  >
                    <div className="bg-white rounded-2xl p-3 shadow-2xl border border-slate-200 space-y-1">
                      <div className="px-3 py-1.5 text-[10px] font-mono font-bold text-amber-800 uppercase tracking-wider border-b border-slate-100">
                        Hardware Catalog
                      </div>
                      <Link href="/cctv-cameras" className="flex items-center gap-2 px-3 py-2 rounded-xl text-xs text-slate-800 hover:bg-amber-50 hover:text-amber-700 transition-all font-semibold">
                        <Camera className="w-3.5 h-3.5 text-amber-600" /> CCTV Cameras
                      </Link>
                      <Link href="/video-door-phones" className="flex items-center gap-2 px-3 py-2 rounded-xl text-xs text-slate-800 hover:bg-amber-50 hover:text-amber-700 transition-all font-semibold">
                        <Lock className="w-3.5 h-3.5 text-amber-600" /> Video Door Phones & Access Control
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* PORTFOLIO DROPDOWN */}
            <div 
              className="relative"
              onMouseEnter={() => setPortfolioDropdown(true)}
              onMouseLeave={() => setPortfolioDropdown(false)}
            >
              <Link
                href="/portfolio"
                className={`relative px-3 py-2 rounded-lg transition-all flex items-center gap-1 ${
                  pathname.startsWith("/portfolio") || pathname === "/clients" || pathname === "/gallery" || pathname === "/partners" ? "text-amber-700 bg-amber-50 font-bold" : "text-slate-700 hover:text-amber-700 hover:bg-slate-50"
                }`}
              >
                Portfolio <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${portfolioDropdown ? "rotate-180" : ""}`} />
                {(pathname.startsWith("/portfolio") || pathname === "/clients" || pathname === "/gallery" || pathname === "/partners") && (
                  <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-amber-500 rounded-full" />
                )}
              </Link>

              <AnimatePresence>
                {portfolioDropdown && (
                  <motion.div 
                    {...dropdownMotion}
                    className="absolute top-full left-0 w-64 pt-2 z-50"
                  >
                    <div className="bg-white rounded-2xl p-3 shadow-2xl border border-slate-200 space-y-1">
                      <div className="px-3 py-1.5 text-[10px] font-mono font-bold text-amber-800 uppercase tracking-wider border-b border-slate-100">
                        Track Record & Credentials
                      </div>
                      <Link href="/clients" className="flex items-center gap-2 px-3 py-2 rounded-xl text-xs text-slate-800 hover:bg-amber-50 hover:text-amber-700 transition-all font-semibold">
                        Clients (1,000+ Completed)
                      </Link>
                      <Link href="/gallery" className="flex items-center gap-2 px-3 py-2 rounded-xl text-xs text-slate-800 hover:bg-amber-50 hover:text-amber-700 transition-all font-semibold">
                        On-Site Installation Gallery
                      </Link>
                      <Link href="/partners" className="flex items-center gap-2 px-3 py-2 rounded-xl text-xs text-slate-800 hover:bg-amber-50 hover:text-amber-700 transition-all font-semibold">
                        OEM Brand Partners
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/blog"
              className={`relative px-3 py-2 rounded-lg transition-all ${
                pathname.startsWith("/blog") ? "text-amber-700 bg-amber-50 font-bold" : "text-slate-700 hover:text-amber-700 hover:bg-slate-50"
              }`}
            >
              Blog
              {pathname.startsWith("/blog") && (
                <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-amber-500 rounded-full" />
              )}
            </Link>

            <Link
              href="/contact-us"
              className={`relative px-3 py-2 rounded-lg transition-all ${
                pathname.startsWith("/contact") ? "text-amber-700 bg-amber-50 font-bold" : "text-slate-700 hover:text-amber-700 hover:bg-slate-50"
              }`}
            >
              Contact Us
              {pathname.startsWith("/contact") && (
                <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-amber-500 rounded-full" />
              )}
            </Link>
          </nav>

          {/* Right Action CTA (Desktop) */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/get-a-quote"
              className="relative group overflow-hidden px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-amber-500/25 transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-2"
            >
              <span>Get a Quote</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
          </div>

          {/* Mobile Hamburger Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-slate-800 hover:bg-slate-100 transition-colors focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-amber-700" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer with Backdrop and Staggered Items */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-40 bg-slate-900/50 backdrop-blur-sm lg:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Sliding Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] as const }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-sm z-50 bg-white shadow-2xl flex flex-col p-6 pt-20 overflow-y-auto lg:hidden"
            >
              {/* Close button inside drawer */}
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="absolute top-5 right-5 p-2 rounded-xl bg-slate-100 text-slate-700 hover:bg-amber-50 hover:text-amber-700 transition-colors"
                aria-label="Close Menu"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex flex-col gap-2 font-mono text-xs tracking-wider uppercase">
                {/* Home */}
                <Link
                  href="/"
                  className={`p-3 rounded-xl border transition-colors ${pathname === "/" ? "bg-amber-50 border-amber-300 text-amber-800 font-bold" : "border-slate-200 text-slate-800"}`}
                >
                  Home
                </Link>

                {/* About Us */}
                <Link
                  href="/about-us"
                  className={`p-3 rounded-xl border transition-colors ${pathname.startsWith("/about") ? "bg-amber-50 border-amber-300 text-amber-800 font-bold" : "border-slate-200 text-slate-800"}`}
                >
                  About Us
                </Link>

                {/* Services Accordion */}
                <div className="border border-slate-200 rounded-xl overflow-hidden">
                  <button
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    className="w-full p-3 bg-slate-50 flex items-center justify-between text-slate-800 font-bold text-left cursor-pointer"
                  >
                    <span>Services</span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileServicesOpen ? "rotate-180 text-amber-600" : ""}`} />
                  </button>

                  <AnimatePresence>
                    {mobileServicesOpen && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] as const }}
                        className="overflow-hidden p-3 bg-white space-y-2 border-t border-slate-100"
                      >
                        <Link href="/services/cctv-installation-services-in-warangal" className="block py-1.5 px-2 rounded-lg text-slate-700 hover:bg-amber-50 text-[11px] font-semibold">
                          • CCTV Installation
                        </Link>
                        <Link href="/services/maintanance-amc" className="block py-1.5 px-2 rounded-lg text-slate-700 hover:bg-amber-50 text-[11px] font-semibold">
                          • Maintanance & AMC
                        </Link>
                        <Link href="/services/system-upgrades" className="block py-1.5 px-2 rounded-lg text-slate-700 hover:bg-amber-50 text-[11px] font-semibold">
                          • System Upgrades
                        </Link>
                        <Link href="/services/remote-monitoring-setup" className="block py-1.5 px-2 rounded-lg text-slate-700 hover:bg-amber-50 text-[11px] font-semibold">
                          • Remote Monitoring Setup
                        </Link>
                        <Link href="/services/event-surveillance" className="block py-1.5 px-2 rounded-lg text-slate-700 hover:bg-amber-50 text-[11px] font-semibold">
                          • Event Surveillance
                        </Link>
                        <Link href="/services/cctv-on-hire-basis" className="block py-1.5 px-2 rounded-lg text-slate-700 hover:bg-amber-50 text-[11px] font-semibold">
                          • CCTV On Hire Basis
                        </Link>
                        <Link href="/services/central-monitoring-system" className="block py-1.5 px-2 rounded-lg text-slate-700 hover:bg-amber-50 text-[11px] font-semibold">
                          • Central Monitoring System
                        </Link>
                        <Link href="/services/telephone-intercom" className="block py-1.5 px-2 rounded-lg text-slate-700 hover:bg-amber-50 text-[11px] font-semibold">
                          • Telephone Intercom
                        </Link>
                        <Link href="/services/epabx" className="block py-1.5 px-2 rounded-lg text-slate-700 hover:bg-amber-50 text-[11px] font-semibold">
                          • EPABX Services
                        </Link>

                        {/* Sub-Accordion: Security Solutions */}
                        <div className="pt-2 border-t border-slate-100">
                          <button
                            onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}
                            className="w-full py-1.5 px-2 bg-amber-50 rounded-lg flex items-center justify-between text-amber-900 font-bold text-[11px] cursor-pointer"
                          >
                            <span>Security Solutions</span>
                            <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${mobileSolutionsOpen ? "rotate-180" : ""}`} />
                          </button>

                          <AnimatePresence>
                            {mobileSolutionsOpen && (
                              <motion.div 
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.25 }}
                                className="overflow-hidden pl-4 pt-1 space-y-1"
                              >
                                <Link href="/solutions/residential-solutions" className="block py-1 text-slate-600 hover:text-amber-700 text-[10px] font-semibold">
                                  - Residential Solutions
                                </Link>
                                <Link href="/solutions/commercial-solutions" className="block py-1 text-slate-600 hover:text-amber-700 text-[10px] font-semibold">
                                  - Commercial Solutions
                                </Link>
                                <Link href="/solutions/industrial-solutions" className="block py-1 text-slate-600 hover:text-amber-700 text-[10px] font-semibold">
                                  - Industrial Solutions
                                </Link>
                                <Link href="/solutions/custom-security-plans" className="block py-1 text-slate-600 hover:text-amber-700 text-[10px] font-semibold">
                                  - Custom Security Plans
                                </Link>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Products Accordion */}
                <div className="border border-slate-200 rounded-xl overflow-hidden">
                  <button
                    onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                    className="w-full p-3 bg-slate-50 flex items-center justify-between text-slate-800 font-bold text-left cursor-pointer"
                  >
                    <span>Products</span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileProductsOpen ? "rotate-180 text-amber-600" : ""}`} />
                  </button>

                  <AnimatePresence>
                    {mobileProductsOpen && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden p-3 bg-white space-y-2 border-t border-slate-100"
                      >
                        <Link href="/cctv-cameras" className="block py-1.5 px-2 rounded-lg text-slate-700 hover:bg-amber-50 text-[11px] font-semibold">
                          • CCTV Cameras
                        </Link>
                        <Link href="/video-door-phones" className="block py-1.5 px-2 rounded-lg text-slate-700 hover:bg-amber-50 text-[11px] font-semibold">
                          • Video Door Phones & Access Control
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Portfolio Accordion */}
                <div className="border border-slate-200 rounded-xl overflow-hidden">
                  <button
                    onClick={() => setMobilePortfolioOpen(!mobilePortfolioOpen)}
                    className="w-full p-3 bg-slate-50 flex items-center justify-between text-slate-800 font-bold text-left cursor-pointer"
                  >
                    <span>Portfolio</span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobilePortfolioOpen ? "rotate-180 text-amber-600" : ""}`} />
                  </button>

                  <AnimatePresence>
                    {mobilePortfolioOpen && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden p-3 bg-white space-y-2 border-t border-slate-100"
                      >
                        <Link href="/clients" className="block py-1.5 px-2 rounded-lg text-slate-700 hover:bg-amber-50 text-[11px] font-semibold">
                          • Clients (1,000+ Completed)
                        </Link>
                        <Link href="/gallery" className="block py-1.5 px-2 rounded-lg text-slate-700 hover:bg-amber-50 text-[11px] font-semibold">
                          • Gallery
                        </Link>
                        <Link href="/partners" className="block py-1.5 px-2 rounded-lg text-slate-700 hover:bg-amber-50 text-[11px] font-semibold">
                          • Brand Partners
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Blog */}
                <Link
                  href="/blog"
                  className={`p-3 rounded-xl border transition-colors ${pathname.startsWith("/blog") ? "bg-amber-50 border-amber-300 text-amber-800 font-bold" : "border-slate-200 text-slate-800"}`}
                >
                  Blog
                </Link>

                {/* Contact Us */}
                <Link
                  href="/contact-us"
                  className={`p-3 rounded-xl border transition-colors ${pathname.startsWith("/contact") ? "bg-amber-50 border-amber-300 text-amber-800 font-bold" : "border-slate-200 text-slate-800"}`}
                >
                  Contact Us
                </Link>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col gap-3">
                <Link
                  href="/get-a-quote"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold text-center text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all"
                >
                  Get a Quote
                </Link>

                <a
                  href={`tel:${SITE_INFO.phoneSecondary.replace(/\s+/g, '')}`}
                  className="w-full py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-800 font-bold text-center text-xs flex items-center justify-center gap-2 transition-colors"
                >
                  <Phone className="w-4 h-4 text-amber-600" />
                  Direct: +91 - 8984567456
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
