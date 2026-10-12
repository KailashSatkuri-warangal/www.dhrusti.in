import type { Metadata } from "next";
import AboutClientView from "@/components/sections/AboutClientView";

export const metadata: Metadata = {
  title: "CCTV Camera Dealer in Kondapur, Hyderabad, Warangal and Hanamkonda | Meet the Founder — Dhrusti",
  description: "Dhrusti is your trusted CCTV Camera Dealer in Kondapur, Warangal, and Hyderabad providing high-quality surveillance cameras, expert installation, and maintenance services.",
  alternates: {
    canonical: "https://www.dhrusti.in/about"
  }
};

export default function AboutPage() {
  return <AboutClientView />;
}
