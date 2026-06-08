import MainContactSection from "./sections/MainContactSection";
import ContactFormSection from "./sections/ContactFormSection";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 lg:py-28">
      <div className="section-container grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <MainContactSection />

        <ContactFormSection />
      </div>
    </section>
  );
}