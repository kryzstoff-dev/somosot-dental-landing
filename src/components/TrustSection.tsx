import { Paper } from "@mui/material";
import { trustItems } from "@/lib/clinic-data";

export default function TrustSection() {
  return (
    <section className="bg-white py-10">
      <div className="section-container grid gap-4 md:grid-cols-3">
        {trustItems.map((item) => {
          const Icon = item.icon;

          return (
            <Paper
              key={item.title}
              elevation={0}
              className="rounded-3xl border border-slate-200 p-6"
            >
              <div className="mb-4 grid size-12 place-items-center rounded-2xl bg-cyan-50 text-cyan-700">
                <Icon />
              </div>
              <h3 className="text-lg font-black text-slate-950">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {item.description}
              </p>
            </Paper>
          );
        })}
      </div>
    </section>
  );
}