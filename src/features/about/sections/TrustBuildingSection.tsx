import { clinic } from "@/lib/clinic-data";
import { Paper } from "@mui/material";

const improvements = [
  "Appointment requests include preferred time and service details.",
  "Patients are reminded that complex procedures may affect schedule flow.",
  "The clinic can clarify estimated cost ranges before treatment confirmation.",
  "Safety-first decisions are framed clearly instead of simply accepting every case.",
];

function TrustBuildingSection() {
    return (
        <Paper
          elevation={0}
          className="rounded-4xl border border-white/10! bg-white/10! p-6 text-white backdrop-blur"
        >
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-400">
            Trust-building details
          </p>

          <div className="mt-6 grid gap-4">
            {improvements.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/10! p-4"
              >
                <p className="text-sm leading-6 text-slate-400!">{item}</p>
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
      );
}

export default TrustBuildingSection;
