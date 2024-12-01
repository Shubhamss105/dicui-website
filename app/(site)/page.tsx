import { Metadata } from "next";
import Hero from "@/components/Hero";
import Brands from "@/components/Brands";
import Feature from "@/components/Features";
import About from "@/components/About";
import FeaturesTab from "@/components/FeaturesTab";
import FunFact from "@/components/FunFact";
import Integration from "@/components/Integration";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Blog from "@/components/Blog";
import OurFeatures from "@/components/OurFeatures";

export const metadata: Metadata = {
  title: "DQ - Restaurant Management Software",
  description: "Restaurant Management Software",
  // other metadata
};

export default function Home() {
  return (
    <main>
      <Hero />
      {/* <Brands /> */}
      <Feature />
      <OurFeatures/>
      <About />
      <FeaturesTab />
      <FunFact />
      <Integration />
      <Pricing />
      <CTA />
      <FAQ />
      {/* <Testimonial /> */}
      <Contact />
      {/* <Blog /> */}
    </main>
  );
}
