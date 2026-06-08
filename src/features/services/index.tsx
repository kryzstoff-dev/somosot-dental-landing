import { services } from "@/lib/clinic-data";
import ServiceCard from "./components/ServiceCard";

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 lg:py-28">
      <div className="section-container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-bold uppercase tracking-[0.25em] text-cyan-700">
            Services
          </p>
          <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
            Dental care built around comfort and clarity.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Highlight the most searched and reviewed services while keeping the
            page clean, trustworthy, and easy to scan.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard
              key={`service-${index}-${service.title}`}
              service={service}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
