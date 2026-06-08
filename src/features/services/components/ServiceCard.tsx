import { ArrowForward } from "@mui/icons-material";
import { Button, Paper } from "@mui/material";
import { ServiceType } from "../types/service.types";

function ServiceCard({ service }: { service: ServiceType }) {
  const Icon = service.icon;

  return (
    <Paper
      key={service.title}
      elevation={0}
      className="group rounded-[1.75rem] border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-950/10"
    >
      <div className="mb-6 grid size-14 place-items-center rounded-2xl bg-cyan-50 text-cyan-700 transition group-hover:bg-cyan-600 group-hover:text-white">
        <Icon />
      </div>

      <h3 className="text-xl font-black text-slate-950">{service.title}</h3>

      <p className="mt-3 min-h-24 text-sm leading-7 text-slate-600">
        {service.description}
      </p>

      <Button
        component="a"
        href="#contact"
        variant="text"
        endIcon={<ArrowForward />}
        className="mt-4"
      >
        Ask about this
      </Button>
    </Paper>
  );
}

export default ServiceCard;
