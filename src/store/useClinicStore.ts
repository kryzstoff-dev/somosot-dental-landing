import { create } from "zustand";

export type ContactFormValues = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

type ContactErrors = Partial<Record<keyof ContactFormValues, string>>;

type ClinicStore = {
  mobileMenuOpen: boolean;
  form: ContactFormValues;
  errors: ContactErrors;
  isSubmitting: boolean;
  submitStatus: "idle" | "success" | "error";

  openMobileMenu: () => void;
  closeMobileMenu: () => void;
  updateField: <K extends keyof ContactFormValues>(
    key: K,
    value: ContactFormValues[K]
  ) => void;
  validateForm: () => boolean;
  submitForm: () => Promise<void>;
  resetForm: () => void;
};

const initialForm: ContactFormValues = {
  name: "",
  email: "",
  phone: "",
  service: "",
  message: "",
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const useClinicStore = create<ClinicStore>((set, get) => ({
  mobileMenuOpen: false,
  form: initialForm,
  errors: {},
  isSubmitting: false,
  submitStatus: "idle",

  openMobileMenu: () => set({ mobileMenuOpen: true }),
  closeMobileMenu: () => set({ mobileMenuOpen: false }),

  updateField: (key, value) =>
    set((state) => ({
      form: {
        ...state.form,
        [key]: value,
      },
      errors: {
        ...state.errors,
        [key]: undefined,
      },
      submitStatus: "idle",
    })),

  validateForm: () => {
    const { form } = get();
    const errors: ContactErrors = {};

    if (!form.name.trim()) errors.name = "Please enter your name.";
    if (!form.email.trim()) {
      errors.email = "Please enter your email.";
    } else if (!emailRegex.test(form.email)) {
      errors.email = "Please enter a valid email address.";
    }

    if (!form.phone.trim()) errors.phone = "Please enter your phone number.";
    if (!form.service.trim()) errors.service = "Please choose a service.";
    if (!form.message.trim()) {
      errors.message = "Please tell us how we can help.";
    } else if (form.message.trim().length < 10) {
      errors.message = "Please add a little more detail.";
    }

    set({ errors });
    return Object.keys(errors).length === 0;
  },

  submitForm: async () => {
    const isValid = get().validateForm();
    if (!isValid) return;

    set({ isSubmitting: true, submitStatus: "idle" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(get().form),
      });

      if (!response.ok) {
        throw new Error("Failed to send message.");
      }

      set({
        form: initialForm,
        errors: {},
        isSubmitting: false,
        submitStatus: "success",
      });
    } catch {
      set({
        isSubmitting: false,
        submitStatus: "error",
      });
    }
  },

  resetForm: () =>
    set({
      form: initialForm,
      errors: {},
      submitStatus: "idle",
    }),
}));