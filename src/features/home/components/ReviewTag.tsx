import { ReviewTagType } from "../types/reviewtag.types";

function ReviewTag({ tag }: { tag: ReviewTagType }) {
  return (
    <div
      key={tag.label}
      className="flex items-center justify-between rounded-2xl bg-white/10 px-4 py-3 backdrop-blur"
    >
      <span className="text-sm font-medium">{tag.label}</span>
      <span className="rounded-full bg-cyan-300 px-3 py-1 text-xs font-black text-slate-950">
        {tag.count}
      </span>
    </div>
  );
}

export default ReviewTag;
