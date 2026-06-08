"use client";

import AboutSection from "@/features/about";
import ContactSection from "@/features/contact";
import HeroSection from "@/features/home";
import ReviewsSection from "@/features/reviews";
import ServicesSection from "@/features/services";
import TrustSection from "@/features/trust";

export default function Page() {
  return (
    <>
      <HeroSection />
      <TrustSection />
      <ServicesSection />
      <AboutSection />
      <ReviewsSection />
      <ContactSection />
    </>
  );
}
