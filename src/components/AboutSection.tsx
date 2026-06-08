import { Button, Chip, Paper } from "@mui/material";
import { clinic } from "@/lib/clinic-data";

const improvements = [
  "Appointment requests include preferred time and service details.",
  "Patients are reminded that complex procedures may affect schedule flow.",
  "The clinic can clarify estimated cost ranges before treatment confirmation.",
  "Safety-first decisions are framed clearly instead of simply accepting every case.",
];

export default function AboutSection() {
  return (
    <section id="about" className="bg-slate-950 py-20 text-white lg:py-28">
      <div className="section-container grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div>
          <Chip
            label="About the clinic"
            className="bg-cyan-300 text-slate-950"
          />

          <h2 className="mt-6 text-4xl font-black tracking-tight sm:text-5xl">
            A Cebu dental clinic focused on affordable care and patient comfort.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            Somosot Dental Cebu serves patients looking for practical dental
            care, especially braces, cleaning, extractions, fillings, and related
            treatments. The strongest review signals mention accommodating staff,
            gentle dentists, comfortable visits, and affordability.
          </p>

          <p className="mt-4 text-base leading-7 text-slate-400">
            The sharper truth: a landing page should not pretend every review is
            perfect. It should build confidence by setting expectations around
            waiting time, pricing clarity, treatment suitability, and appointment
            communication.
          </p>

          <div className="mt-8">
            <Button component="a" href="#contact" variant="contained">
              Send an inquiry
            </Button>
          </div>
        </div>

        <Paper
          elevation={0}
          className="rounded-[2rem] border border-white/10! bg-white/10 p-6 text-white backdrop-blur"
        >
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-400">
            Trust-building details
          </p>

          <div className="mt-6 grid gap-4">
            {improvements.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/10 p-4"
              >
                <p className="text-sm leading-6 text-slate-600!">{item}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-2xl bg-white p-5 text-slate-950">
            <p className="text-sm font-bold text-slate-500">Clinic location</p>
            <p className="mt-2 font-black">{clinic.address}</p>
            <p className="mt-2 text-sm text-slate-600">
              Verify the exact unit and availability before publishing the final
              live website.
            </p>
          </div>
        </Paper>
      </div>
    </section>
  );
}