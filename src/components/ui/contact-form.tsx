"use client";

import { useState } from "react";
import { sendContactForm } from "@/app/actions";

export function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string | undefined>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    org: "",
    message: "",
  });

  const validateField = (name: string, value: string): string => {
    if (name === "name" && !value.trim()) return "Name is required";
    if (name === "email" && !value.trim()) return "Email is required";
    if (name === "email" && value && !value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      return "Please enter a valid email address";
    }
    return "";
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (touched[name]) {
      const error = validateField(name, value);
      setErrors((prev) => ({ ...prev, [name]: error || undefined }));
    }
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error || undefined }));
  };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const newErrors: Record<string, string | undefined> = {};
    (["name", "email"] as const).forEach((key) => {
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setTouched({ name: true, email: true, org: true, message: true });
      return;
    }

    setIsLoading(true);
    const result = await sendContactForm(formData);
    setIsLoading(false);

    if (result.success) {
      setSent(true);
    } else {
      setErrors({ form: result.error });
      setTouched({ name: true, email: true, org: true, message: true });
    }
  }

  if (sent) {
    return (
      <div className="rounded-2xl bg-[var(--brand-forest)]/6 border border-[var(--brand-forest)]/10 p-8 sm:p-10 text-center">
        <p className="font-display text-xl sm:text-[26px] text-[var(--ink)]">Message sent.</p>
        <p className="mt-2 text-sm sm:text-[15px] text-[var(--ink-muted)]">
          We&apos;ll get back to you within one business day.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl bg-white border border-[var(--border)] p-5 sm:p-6 md:p-8 shadow-card space-y-4 sm:space-y-5"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
        <Field
          label="Your name"
          name="name"
          placeholder="Jane Cooper"
          required
          value={formData.name}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.name}
          touched={touched.name}
        />
        <Field
          label="Email"
          name="email"
          type="email"
          placeholder="jane@company.com"
          required
          value={formData.email}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.email}
          touched={touched.email}
        />
      </div>
      <Field
        label="Company or charity"
        name="org"
        placeholder="Acme Co."
        value={formData.org}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <div>
        <label htmlFor="message" className="block text-xs sm:text-[13px] font-medium text-[var(--ink)]">
          What&apos;s the slowest part of your week?
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="A few sentences are enough."
          value={formData.message}
          onChange={handleChange}
          onBlur={handleBlur}
          className="mt-2 w-full rounded-xl border border-[var(--border-strong)] bg-[var(--bg-cream)] px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-[15px] text-[var(--ink)] placeholder:text-[var(--ink-soft)] focus:outline-none focus:border-[var(--brand-forest)] focus-visible:ring-2 focus-visible:ring-[var(--accent-lime)] focus-visible:ring-offset-2 transition-colors duration-200 ease-out"
        />
      </div>
      {errors.form && (
        <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-3">
          {errors.form}
        </p>
      )}
      <button
        type="submit"
        disabled={isLoading}
        className="inline-flex items-center gap-2 rounded-full bg-[var(--brand-forest)] text-[var(--bg-cream)] font-medium px-5 sm:px-6 py-3 sm:py-3.5 text-sm sm:text-[15px] hover:bg-[var(--brand-forest-mid)] active:scale-[0.97] transition-[transform,background-color] duration-200 ease-out focus-visible:ring-2 focus-visible:ring-[var(--accent-lime)] focus-visible:ring-offset-2 focus-visible:outline-none disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {isLoading ? "Sending..." : "Send →"}
      </button>
      <p className="text-[11px] sm:text-[12px] text-[var(--ink-soft)]">
        Or email us directly:{" "}
        <a className="underline underline-offset-2" href="mailto:hello@cube86.com">
          hello@cube86.com
        </a>
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
  value,
  onChange,
  onBlur,
  error,
  touched,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  error?: string;
  touched?: boolean;
}) {
  const hasError = error && touched;

  return (
    <div>
      <label htmlFor={name} className="block text-xs sm:text-[13px] font-medium text-[var(--ink)]">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className={`mt-2 w-full rounded-xl border bg-[var(--bg-cream)] px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-[15px] text-[var(--ink)] placeholder:text-[var(--ink-soft)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-lime)] focus-visible:ring-offset-2 transition-colors duration-200 ease-out ${
          hasError
            ? "border-red-500 focus:border-red-500"
            : "border-[var(--border-strong)] focus:border-[var(--brand-forest)]"
        }`}
      />
      {hasError && <p className="mt-1 text-xs sm:text-[12px] text-red-600">{error}</p>}
    </div>
  );
}
