import { Chip, Paper, Rating } from "@mui/material";
import { FormatQuote } from "@mui/icons-material";
import { clinic, reviewTags, testimonials } from "@/lib/clinic-data";

export default function ReviewsSection() {
  return (
    <section id="reviews" className="bg-white py-20 lg:py-28">
      <div className="section-container">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="font-bold uppercase tracking-[0.25em] text-cyan-700">
              Reviews
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
              What patients mention most.
            </h2>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6">
            <div className="flex flex-wrap items-center gap-4">
              <p className="text-5xl font-black text-slate-950">
                {clinic.rating}
              </p>
              <div>
                <Rating value={clinic.rating} precision={0.1} readOnly />
                <p className="mt-1 text-sm font-medium text-slate-500">
                  Based on {clinic.reviewCount} reviews from your supplied data.
                </p>
              </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {reviewTags.map((tag) => (
                <Chip
                  key={tag.label}
                  label={`${tag.label} · ${tag.count}`}
                  variant="outlined"
                  className="bg-white"
                />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Paper
              key={testimonial.name}
              elevation={0}
              className="rounded-[1.75rem] border border-slate-200 p-6"
            >
              <FormatQuote className="text-cyan-600" />
              <p className="mt-4 min-h-32 text-sm leading-7 text-slate-600">
                “{testimonial.quote}”
              </p>
              <div className="mt-6 border-t border-slate-100 pt-4">
                <p className="font-black text-slate-950">{testimonial.name}</p>
                <p className="text-sm text-slate-500">{testimonial.meta}</p>
              </div>
            </Paper>
          ))}
        </div>
      </div>
    </section>
  );
}