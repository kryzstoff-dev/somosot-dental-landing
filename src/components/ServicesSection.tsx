import { Button, Paper } from "@mui/material";
import { ArrowForward } from "@mui/icons-material";
import { services } from "@/lib/clinic-data";

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
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <Paper
                key={service.title}
                elevation={0}
                className="group rounded-[1.75rem] border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-950/10"
              >
                <div className="mb-6 grid size-14 place-items-center rounded-2xl bg-cyan-50 text-cyan-700 transition group-hover:bg-cyan-600 group-hover:text-white">
                  <Icon />
                </div>

                <h3 className="text-xl font-black text-slate-950">
                  {service.title}
                </h3>

                <p className="mt-3 min-h-24 text-sm leading-7 text-slate-600">
                  {service.description}
                </p>

                <Button
                  component="a"
                  href="#contact"
                  variant="text"
                  endIcon={<ArrowForward />}
                  className="mt-4"
                >
                  Ask about this
                </Button>
              </Paper>
            );
          })}
        </div>
      </div>
    </section>
  );
}