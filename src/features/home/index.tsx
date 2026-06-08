import MainHeroSection from "./sections/MainHeroSection";
import ReviewSection from "./sections/ReviewSection";

export default function HeroSection() {
  return (
    <section id="home" className="hero-grid overflow-hidden">
      <div className="section-container grid min-h-[calc(100vh-80px)] items-center gap-12 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
        <MainHeroSection />

        <ReviewSection />
      </div>
    </section>
  );
}