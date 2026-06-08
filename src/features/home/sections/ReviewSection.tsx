import { reviewTags } from "@/lib/clinic-data";
import ReviewTag from "../components/ReviewTag";

function ReviewSection() {
  return (
    <div className="relative">
      <div className="absolute -left-8 -top-8 size-40 rounded-full bg-cyan-300/30 blur-3xl" />
      <div className="absolute -bottom-8 -right-8 size-48 rounded-full bg-teal-300/30 blur-3xl" />

      <div className="gradient-card relative rounded-4xl border border-white p-5 shadow-2xl shadow-cyan-950/10">
        <div className="rounded-3xl bg-slate-950 p-6 text-white">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-200">
            Patient Review Themes
          </p>

          <div className="mt-6 grid gap-3">
            {reviewTags.slice(0, 6).map((tag, index) => (
              <ReviewTag key={`reviewtag-${index}-${tag.label}`} tag={tag} />
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-white/10 bg-white/10 p-4">
            <p className="text-3xl font-black">175+</p>
            <p className="mt-1 text-sm text-slate-300">
              patient reviews analyzed for trust signals, common services, and
              patient experience themes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReviewSection;
