"use client";

import { useEffect, useId, useRef, useState } from "react";
import { PRODUCT_OPTIONS } from "@/lib/site";
import { useEnquiry } from "@/lib/enquiry-context";

type FormState = {
  fullName: string;
  companyName: string;
  phone: string;
  email: string;
  product: string;
  quantity: string;
  message: string;
};

const emptyForm: FormState = {
  fullName: "",
  companyName: "",
  phone: "",
  email: "",
  product: "",
  quantity: "",
  message: "",
};

export function EnquiryModal() {
  const { isOpen, closeEnquiry, defaultProduct } = useEnquiry();
  const titleId = useId();
  const firstFieldRef = useRef<HTMLInputElement>(null);
  const [form, setForm] = useState<FormState>(emptyForm);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setForm((prev) => ({
        ...prev,
        product: defaultProduct || prev.product,
      }));
      setSubmitted(false);
      setErrors({});
      document.body.style.overflow = "hidden";
      const timer = window.setTimeout(() => firstFieldRef.current?.focus(), 40);
      return () => {
        window.clearTimeout(timer);
        document.body.style.overflow = "";
      };
    }
    document.body.style.overflow = "";
  }, [isOpen, defaultProduct]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeEnquiry();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, closeEnquiry]);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  }

  function validate(values: FormState) {
    const next: Partial<FormState> = {};
    if (values.fullName.trim().length < 2) {
      next.fullName = "Please enter your full name.";
    }
    const phone = values.phone.replace(/\s+/g, "");
    if (!/^[0-9+\-]{10,15}$/.test(phone)) {
      next.phone = "Enter a valid phone number.";
    }
    if (values.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      next.email = "Enter a valid email address.";
    }
    if (!values.product) {
      next.product = "Please select a product.";
    }
    return next;
  }

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    const nextErrors = validate(form);
    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors);
      return;
    }

    setSubmitting(true);
    // Frontend-ready submit. Connect Formspree / email / WhatsApp API here.
    await new Promise((resolve) => setTimeout(resolve, 600));
    console.info("Enquiry payload ready for API:", form);
    setSubmitting(false);
    setSubmitted(true);
    setForm(emptyForm);
  }

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[80] flex items-end justify-center p-0 sm:items-center sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
    >
      <button
        type="button"
        className="absolute inset-0 bg-navy-deep/60 backdrop-blur-[2px]"
        aria-label="Close enquiry form"
        onClick={closeEnquiry}
      />
      <div className="relative z-10 max-h-[100dvh] w-full overflow-y-auto bg-cream shadow-2xl sm:max-h-[90vh] sm:max-w-xl sm:rounded-sm">
        <div className="flex items-start justify-between border-b border-line px-5 py-4 sm:px-7">
          <div>
            <p className="text-[0.68rem] font-semibold tracking-[0.22em] text-gold uppercase">
              Trading Enquiry
            </p>
            <h2 id={titleId} className="mt-1 font-display text-2xl text-navy">
              Send Your Requirement
            </h2>
          </div>
          <button
            type="button"
            onClick={closeEnquiry}
            className="grid h-10 w-10 place-items-center rounded-sm text-2xl leading-none text-muted hover:bg-paper hover:text-navy"
            aria-label="Close"
          >
            ×
          </button>
        </div>

        {submitted ? (
          <div className="px-5 py-10 text-center sm:px-7">
            <p className="font-display text-2xl text-navy">Thank you</p>
            <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted">
              Your enquiry has been received. Our team will get in touch with
              you shortly.
            </p>
            <button type="button" className="btn btn-primary mt-8" onClick={closeEnquiry}>
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="grid gap-4 px-5 py-5 sm:px-7 sm:py-6" noValidate>
            <Field
              ref={firstFieldRef}
              label="Full Name"
              required
              value={form.fullName}
              onChange={(v) => update("fullName", v)}
              error={errors.fullName}
              autoComplete="name"
            />
            <Field
              label="Company Name"
              value={form.companyName}
              onChange={(v) => update("companyName", v)}
              autoComplete="organization"
            />
            <div className="grid gap-4 sm:grid-cols-2">
              <Field
                label="Phone Number"
                required
                type="tel"
                value={form.phone}
                onChange={(v) => update("phone", v)}
                error={errors.phone}
                autoComplete="tel"
              />
              <Field
                label="Email"
                type="email"
                value={form.email}
                onChange={(v) => update("email", v)}
                error={errors.email}
                autoComplete="email"
              />
            </div>
            <label className="block">
              <span className="mb-1.5 block text-[0.72rem] font-semibold tracking-[0.08em] text-navy uppercase">
                Product Interested In <span className="text-gold">*</span>
              </span>
              <select
                required
                value={form.product}
                onChange={(e) => update("product", e.target.value)}
                className="w-full rounded-sm border border-line bg-white px-3 py-3 text-sm text-ink"
              >
                <option value="">Select a product</option>
                {PRODUCT_OPTIONS.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              {errors.product ? (
                <span className="mt-1 block text-xs text-red-700">{errors.product}</span>
              ) : null}
            </label>
            <Field
              label="Quantity Required"
              value={form.quantity}
              onChange={(v) => update("quantity", v)}
              placeholder="e.g. 10 MT"
            />
            <label className="block">
              <span className="mb-1.5 block text-[0.72rem] font-semibold tracking-[0.08em] text-navy uppercase">
                Message
              </span>
              <textarea
                rows={4}
                value={form.message}
                onChange={(e) => update("message", e.target.value)}
                className="w-full resize-y rounded-sm border border-line bg-white px-3 py-3 text-sm text-ink"
              />
            </label>
            <button type="submit" className="btn btn-gold mt-1 w-full" disabled={submitting}>
              {submitting ? "Submitting..." : "Submit Enquiry"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  error,
  required,
  type = "text",
  autoComplete,
  placeholder,
  ref,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  required?: boolean;
  type?: string;
  autoComplete?: string;
  placeholder?: string;
  ref?: React.Ref<HTMLInputElement>;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-[0.72rem] font-semibold tracking-[0.08em] text-navy uppercase">
        {label}
        {required ? <span className="text-gold"> *</span> : null}
      </span>
      <input
        ref={ref}
        type={type}
        required={required}
        value={value}
        autoComplete={autoComplete}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-sm border border-line bg-white px-3 py-3 text-sm text-ink"
      />
      {error ? <span className="mt-1 block text-xs text-red-700">{error}</span> : null}
    </label>
  );
}
