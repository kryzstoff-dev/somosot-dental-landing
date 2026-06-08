import { clinic } from "@/lib/clinic-data";
import { ArrowForward, Facebook, LocationOn, Verified } from "@mui/icons-material";
import { Button, Chip, Rating } from "@mui/material";

function MainHeroSection() {
  return (
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
  );
}

export default MainHeroSection;
