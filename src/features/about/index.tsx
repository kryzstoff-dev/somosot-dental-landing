import MainAboutSection from "./sections/MainAboutSection";
import TrustBuildingSection from "./sections/TrustBuildingSection";

export default function AboutSection() {
  return (
    <section id="about" className="bg-slate-950 py-20 text-white lg:py-28">
      <div className="section-container grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <MainAboutSection />

        <TrustBuildingSection />
      </div>
    </section>
  );
}