"use client";

import { useEffect, useId, useRef, useState } from "react";
import { PRODUCT_OPTIONS, WHATSAPP_URL } from "@/lib/site";
import { useEnquiry } from "@/lib/enquiry-context";

type FormState = {
  fullName: string;
  companyName: string;
  phone: string;
  email: string;
  product: string;
  packagingPreference: string;
  deliveryLocation: string;
  quantity: string;
  message: string;
};

const emptyForm: FormState = {
  fullName: "",
  companyName: "",
  phone: "",
  email: "",
  product: "",
  packagingPreference: "Bulk Tankers / Full Truckload",
  deliveryLocation: "",
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

  // Sync open state and defaultProduct during render
  const [prevIsOpen, setPrevIsOpen] = useState(isOpen);
  const [prevDefaultProduct, setPrevDefaultProduct] = useState(defaultProduct);

  if (isOpen !== prevIsOpen || defaultProduct !== prevDefaultProduct) {
    setPrevIsOpen(isOpen);
    setPrevDefaultProduct(defaultProduct);
    if (isOpen) {
      setForm((prev) => ({
        ...prev,
        product: defaultProduct || prev.product,
      }));
      setSubmitted(false);
      setErrors({});
    }
  }

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      const timer = window.setTimeout(() => firstFieldRef.current?.focus(), 40);
      return () => {
        window.clearTimeout(timer);
        document.body.style.overflow = "";
      };
    }
    document.body.style.overflow = "";
  }, [isOpen]);

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
      next.phone = "Enter a valid 10-digit phone number.";
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
    await new Promise((resolve) => setTimeout(resolve, 600));
    console.info("Enquiry payload received:", form);
    setSubmitting(false);
    setSubmitted(true);
    setForm(emptyForm);
  }

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[90] flex items-end justify-center p-0 sm:items-center sm:p-4 md:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
    >
      <button
        type="button"
        className="fixed inset-0 bg-navy-deep/70 backdrop-blur-[3px] transition-opacity"
        aria-label="Close enquiry form"
        onClick={closeEnquiry}
      />
      <div className="relative z-10 flex max-h-[92dvh] w-full flex-col overflow-hidden rounded-t-lg bg-cream shadow-2xl sm:max-h-[88vh] sm:max-w-xl sm:rounded-sm">
        {/* Sticky Modal Header */}
        <div className="flex shrink-0 items-center justify-between border-b border-line bg-white/95 px-5 py-3.5 backdrop-blur-sm sm:px-6">
          <div>
            <span className="text-[0.66rem] font-semibold tracking-[0.2em] text-gold uppercase">
              B2B Trading Desk
            </span>
            <h2 id={titleId} className="font-display text-xl text-navy sm:text-2xl">
              Request Live Mandi / Trade Quote
            </h2>
          </div>
          <button
            type="button"
            onClick={closeEnquiry}
            className="grid h-9 w-9 place-items-center rounded-sm text-2xl font-light text-muted hover:bg-paper hover:text-navy"
            aria-label="Close"
          >
            ×
          </button>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-6">
          {submitted ? (
            <div className="py-10 text-center">
              <div className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-full bg-emerald-100 text-2xl text-emerald-700">
                ✓
              </div>
              <p className="font-display text-2xl text-navy sm:text-3xl">
                Requirement Received
              </p>
              <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted">
                Thank you for your enquiry. Our commercial trading desk will
                review current market parity and connect with you shortly.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn bg-emerald-600 text-white hover:bg-emerald-700"
                >
                  💬 Connect on WhatsApp Now
                </a>
                <button
                  type="button"
                  className="btn btn-outline-dark"
                  onClick={closeEnquiry}
                >
                  Close
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid gap-3.5" noValidate>
              <div className="grid gap-3.5 sm:grid-cols-2">
                <Field
                  ref={firstFieldRef}
                  label="Full Name"
                  required
                  value={form.fullName}
                  onChange={(v) => update("fullName", v)}
                  error={errors.fullName}
                  autoComplete="name"
                  placeholder="Your Name"
                />
                <Field
                  label="Company / Firm Name"
                  value={form.companyName}
                  onChange={(v) => update("companyName", v)}
                  autoComplete="organization"
                  placeholder="Business / Mill Name"
                />
              </div>

              <div className="grid gap-3.5 sm:grid-cols-2">
                <Field
                  label="Phone / Mobile Number"
                  required
                  type="tel"
                  value={form.phone}
                  onChange={(v) => update("phone", v)}
                  error={errors.phone}
                  autoComplete="tel"
                  placeholder="e.g. 9876543210"
                />
                <Field
                  label="Email (Optional)"
                  type="email"
                  value={form.email}
                  onChange={(v) => update("email", v)}
                  error={errors.email}
                  autoComplete="email"
                  placeholder="name@company.com"
                />
              </div>

              <div className="grid gap-3.5 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-1 block text-[0.7rem] font-semibold tracking-[0.08em] text-navy uppercase">
                    Product Required <span className="text-gold">*</span>
                  </span>
                  <select
                    required
                    value={form.product}
                    onChange={(e) => update("product", e.target.value)}
                    className="w-full rounded-sm border border-line bg-white px-3 py-2.5 text-sm text-ink focus:border-navy focus:outline-none"
                  >
                    <option value="">Select a product</option>
                    {PRODUCT_OPTIONS.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  {errors.product ? (
                    <span className="mt-1 block text-xs text-red-600">
                      {errors.product}
                    </span>
                  ) : null}
                </label>

                <label className="block">
                  <span className="mb-1 block text-[0.7rem] font-semibold tracking-[0.08em] text-navy uppercase">
                    Packaging Preference
                  </span>
                  <select
                    value={form.packagingPreference}
                    onChange={(e) => update("packagingPreference", e.target.value)}
                    className="w-full rounded-sm border border-line bg-white px-3 py-2.5 text-sm text-ink focus:border-navy focus:outline-none"
                  >
                    <option value="Bulk Road Tankers">Bulk Road Tankers (10 - 30 MT)</option>
                    <option value="200L Commercial Drums">200L Food-Grade Drums</option>
                    <option value="15L / 15kg Tins">15L / 15kg Standard Tins</option>
                    <option value="50kg Bulk Bags">50kg HDPE / PP Bags (Seeds/Food)</option>
                    <option value="Custom / Negotiable">Custom / As Agreed</option>
                  </select>
                </label>
              </div>

              <div className="grid gap-3.5 sm:grid-cols-2">
                <Field
                  label="Quantity (MT / Tins / Bags)"
                  value={form.quantity}
                  onChange={(v) => update("quantity", v)}
                  placeholder="e.g. 10 MT / 500 Tins"
                />
                <Field
                  label="Delivery Destination / Mandi"
                  value={form.deliveryLocation}
                  onChange={(v) => update("deliveryLocation", v)}
                  placeholder="City, State (e.g. Jaipur, Rajasthan)"
                />
              </div>

              <label className="block">
                <span className="mb-1 block text-[0.7rem] font-semibold tracking-[0.08em] text-navy uppercase">
                  Additional Notes / Specifications
                </span>
                <textarea
                  rows={3}
                  value={form.message}
                  placeholder="Specify pungency, delivery window, or target parity..."
                  onChange={(e) => update("message", e.target.value)}
                  className="w-full resize-y rounded-sm border border-line bg-white px-3 py-2.5 text-sm text-ink focus:border-navy focus:outline-none"
                />
              </label>

              <div className="mt-2 flex flex-col gap-2.5 sm:flex-row">
                <button
                  type="submit"
                  className="btn btn-gold w-full flex-1 py-3 text-sm"
                  disabled={submitting}
                >
                  {submitting ? "Submitting..." : "Submit Trading Enquiry"}
                </button>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn flex items-center justify-center gap-1.5 border border-emerald-600 bg-emerald-50 py-3 text-sm font-semibold text-emerald-800 hover:bg-emerald-100 sm:w-auto"
                >
                  <span>💬 WhatsApp Rates</span>
                </a>
              </div>
            </form>
          )}
        </div>
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
      <span className="mb-1 block text-[0.7rem] font-semibold tracking-[0.08em] text-navy uppercase">
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
        className="w-full rounded-sm border border-line bg-white px-3 py-2.5 text-sm text-ink focus:border-navy focus:outline-none"
      />
      {error ? <span className="mt-1 block text-xs text-red-600">{error}</span> : null}
    </label>
  );
}

