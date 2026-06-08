"use client";

import {
  Alert,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { Send } from "@mui/icons-material";
import { useClinicStore } from "@/store/useClinicStore";
import { services } from "@/lib/clinic-data";

export default function ContactForm() {
  const form = useClinicStore((state) => state.form);
  const errors = useClinicStore((state) => state.errors);
  const isSubmitting = useClinicStore((state) => state.isSubmitting);
  const submitStatus = useClinicStore((state) => state.submitStatus);
  const updateField = useClinicStore((state) => state.updateField);
  const submitForm = useClinicStore((state) => state.submitForm);

  return (
    <form
      className="grid gap-4"
      onSubmit={(event) => {
        event.preventDefault();
        void submitForm();
      }}
    >
      {submitStatus === "success" && (
        <Alert severity="success">
          Your inquiry was sent. The clinic can now review your request and
          respond with next steps.
        </Alert>
      )}

      {submitStatus === "error" && (
        <Alert severity="error">
          Something went wrong. Please try again or message the clinic directly.
        </Alert>
      )}

      <div className="grid gap-4 sm:grid-cols-2">
        <TextField
          label="Full name"
          value={form.name}
          onChange={(event) => updateField("name", event.target.value)}
          error={Boolean(errors.name)}
          helperText={errors.name}
          fullWidth
        />

        <TextField
          label="Email address"
          type="email"
          value={form.email}
          onChange={(event) => updateField("email", event.target.value)}
          error={Boolean(errors.email)}
          helperText={errors.email}
          fullWidth
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <TextField
          label="Phone number"
          value={form.phone}
          onChange={(event) => updateField("phone", event.target.value)}
          error={Boolean(errors.phone)}
          helperText={errors.phone}
          fullWidth
        />

        <FormControl fullWidth error={Boolean(errors.service)}>
          <InputLabel id="service-label">Service needed</InputLabel>
          <Select
            labelId="service-label"
            label="Service needed"
            value={form.service}
            onChange={(event) => updateField("service", event.target.value)}
          >
            {services.map((service) => (
              <MenuItem key={service.title} value={service.title}>
                {service.title}
              </MenuItem>
            ))}
          </Select>
          {errors.service && (
            <p className="mx-4 mt-1 text-xs text-red-600">{errors.service}</p>
          )}
        </FormControl>
      </div>

      <TextField
        label="Message"
        value={form.message}
        onChange={(event) => updateField("message", event.target.value)}
        error={Boolean(errors.message)}
        helperText={
          errors.message ||
          "Example: preferred date, concern, current pain level, or questions about pricing."
        }
        multiline
        minRows={5}
        fullWidth
      />

      <Button
        type="submit"
        variant="contained"
        size="large"
        endIcon={<Send />}
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending..." : "Send Inquiry"}
      </Button>
    </form>
  );
}