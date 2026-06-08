import { Button, Paper } from "@mui/material";
import { Facebook, LocationOn, Mail, Phone } from "@mui/icons-material";
import { clinic } from "@/lib/clinic-data";
import ContactForm from "./ContactForm";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 lg:py-28">
      <div className="section-container grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="font-bold uppercase tracking-[0.25em] text-cyan-700">
            Contact
          </p>
          <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
            Request an appointment or ask about a service.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Share your concern, preferred service, and contact details. The form
            submits to a Next.js API route and can later be connected to email,
            Google Sheets, Supabase, or a CRM.
          </p>

          <div className="mt-8 grid gap-4">
            <div className="flex gap-3">
              <div className="grid size-11 shrink-0 place-items-center rounded-2xl bg-cyan-50 text-cyan-700">
                <Phone />
              </div>
              <div>
                <p className="font-black text-slate-950">Phone</p>
                <a
                  href={`tel:${clinic.phone.replaceAll(" ", "")}`}
                  className="text-slate-600 hover:text-cyan-700"
                >
                  {clinic.phone}
                </a>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="grid size-11 shrink-0 place-items-center rounded-2xl bg-cyan-50 text-cyan-700">
                <Mail />
              </div>
              <div>
                <p className="font-black text-slate-950">Email</p>
                <a
                  href={`mailto:${clinic.email}`}
                  className="text-slate-600 hover:text-cyan-700"
                >
                  {clinic.email}
                </a>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="grid size-11 shrink-0 place-items-center rounded-2xl bg-cyan-50 text-cyan-700">
                <LocationOn />
              </div>
              <div>
                <p className="font-black text-slate-950">Clinic address</p>
                <p className="text-slate-600">{clinic.address}</p>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              component="a"
              href={clinic.facebookUrl}
              target="_blank"
              rel="noreferrer"
              variant="outlined"
              startIcon={<Facebook />}
            >
              Message on Facebook
            </Button>
          </div>
        </div>

        <Paper
          elevation={0}
          className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-xl shadow-cyan-950/5 sm:p-8"
        >
          <ContactForm />
        </Paper>
      </div>
    </section>
  );
}