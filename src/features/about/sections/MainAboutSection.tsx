import { Button, Chip } from "@mui/material";

function MainAboutSection() {
  return (
    <div>
      <Chip label="About the clinic" className="bg-cyan-300 text-slate-950" />

      <h2 className="mt-6 text-4xl font-black tracking-tight sm:text-5xl">
        A Cebu dental clinic focused on affordable care and patient comfort.
      </h2>

      <p className="mt-6 text-lg leading-8 text-slate-300">
        Somosot Dental Cebu serves patients looking for practical dental care,
        especially braces, cleaning, extractions, fillings, and related
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
  );
}

export default MainAboutSection;
