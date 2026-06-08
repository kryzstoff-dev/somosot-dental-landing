import { Paper } from "@mui/material";
import ContactForm from "../components/ContactForm";

function ContactFormSection() {
  return (
    <Paper
      elevation={0}
      className="rounded-4xl border border-slate-200 bg-white p-5 shadow-xl shadow-cyan-950/5 sm:p-8"
    >
      <ContactForm />
    </Paper>
  );
}

export default ContactFormSection;
