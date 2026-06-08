import { FormatQuote } from "@mui/icons-material";
import { Paper } from "@mui/material";
import { TestimonialType } from "../types/testimonial.types";

function TestimonialsCard({ testimonial }: { testimonial: TestimonialType }) {
  return (
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
  );
}

export default TestimonialsCard;
