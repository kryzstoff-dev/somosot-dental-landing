import { Button, Chip, Rating } from "@mui/material";
import { ArrowForward, Facebook, LocationOn, Verified } from "@mui/icons-material";
import { clinic, reviewTags } from "@/lib/clinic-data";

export default function HeroSection() {
  return (
    <section id="home" className="hero-grid overflow-hidden">
      <div className="section-container grid min-h-[calc(100vh-80px)] items-center gap-12 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
        <div>
          <Chip
            icon={<Verified />}
            label={`${clinic.rating} rating · ${clinic.reviewCount} reviews`}
            color="primary"
            variant="outlined"
            className="mb-6 bg-white"
          />

          <h1 className="max-w-4xl text-5xl font-black tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
            Gentle dental care for confident Cebu smiles.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            From braces and cleaning to wisdom tooth extraction, root canal, and
            restorative care, Somosot Dental Cebu helps patients feel informed,
            comfortable, and cared for.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              component="a"
              href="#contact"
              variant="contained"
              size="large"
              endIcon={<ArrowForward />}
            >
              Request Appointment
            </Button>

            <Button
              component="a"
              href={clinic.facebookUrl}
              target="_blank"
              rel="noreferrer"
              variant="outlined"
              size="large"
              startIcon={<Facebook />}
            >
              Visit Facebook
            </Button>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2">
              <Rating value={clinic.rating} precision={0.1} readOnly />
              <span className="text-sm font-bold text-slate-700">
                {clinic.rating}/5
              </span>
            </div>
            <div className="flex items-center gap-2 text-sm font-medium text-slate-500">
              <LocationOn fontSize="small" />
              Near Fuente Osmeña Circle, Cebu City
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-8 -top-8 size-40 rounded-full bg-cyan-300/30 blur-3xl" />
          <div className="absolute -bottom-8 -right-8 size-48 rounded-full bg-teal-300/30 blur-3xl" />

          <div className="gradient-card relative rounded-[2rem] border border-white p-5 shadow-2xl shadow-cyan-950/10">
            <div className="rounded-[1.5rem] bg-slate-950 p-6 text-white">
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-200">
                Patient Review Themes
              </p>

              <div className="mt-6 grid gap-3">
                {reviewTags.slice(0, 6).map((tag) => (
                  <div
                    key={tag.label}
                    className="flex items-center justify-between rounded-2xl bg-white/10 px-4 py-3 backdrop-blur"
                  >
                    <span className="text-sm font-medium">{tag.label}</span>
                    <span className="rounded-full bg-cyan-300 px-3 py-1 text-xs font-black text-slate-950">
                      {tag.count}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl border border-white/10 bg-white/10 p-4">
                <p className="text-3xl font-black">175+</p>
                <p className="mt-1 text-sm text-slate-300">
                  patient reviews analyzed for trust signals, common services,
                  and patient experience themes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}