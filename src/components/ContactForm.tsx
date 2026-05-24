"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, FormEvent } from "react";
import PremiumCTA from "./PremiumCTA";

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  message: string;
};

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    message: ""
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const e: Partial<Record<keyof FormState, string>> = {};
    if (!form.firstName.trim()) e.firstName = "Required";
    if (!form.lastName.trim()) e.lastName = "Required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email";
    if (!form.message.trim()) e.message = "Tell us a few lines";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    setSubmitting(true);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "YOUR_WEB3FORMS_ACCESS_KEY",
          subject: `New Contact Form — ${form.firstName} ${form.lastName}`,
          from_name: "Mavyn Website",
          name: `${form.firstName} ${form.lastName}`,
          email: form.email,
          phone: form.phone || "Not provided",
          company: form.company || "Not provided",
          message: form.message,
        }),
      });

      if (res.ok) {
        setSubmitted(true);
        setForm({ firstName: "", lastName: "", email: "", phone: "", company: "", message: "" });
      }
    } catch (err) {
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  const inputStyle = "w-full px-4 sm:px-5 py-3 sm:py-4 rounded-full text-[14px] sm:text-[15px] border-0 outline-none transition-all duration-300 focus:ring-2 focus:ring-[#00A65A]/30";
  const inputBg = { background: "#FFFFFF", color: "#101820" };

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      {/* First name + Last name */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-[14px] font-semibold mb-2" style={{ color: "#101820" }}>
            First name
          </label>
          <input
            className={inputStyle}
            style={inputBg}
            type="text"
            placeholder="Ahmed"
            autoComplete="given-name"
            value={form.firstName}
            onChange={(e) => setForm({ ...form, firstName: e.target.value })}
          />
          {errors.firstName && <p className="mt-1 text-[12px]" style={{ color: "#00A65A" }}>{errors.firstName}</p>}
        </div>
        <div>
          <label className="block text-[14px] font-semibold mb-2" style={{ color: "#101820" }}>
            Last name
          </label>
          <input
            className={inputStyle}
            style={inputBg}
            type="text"
            placeholder="Al Mansouri"
            autoComplete="family-name"
            value={form.lastName}
            onChange={(e) => setForm({ ...form, lastName: e.target.value })}
          />
          {errors.lastName && <p className="mt-1 text-[12px]" style={{ color: "#00A65A" }}>{errors.lastName}</p>}
        </div>
      </div>

      {/* Email */}
      <div>
        <label className="block text-[14px] font-semibold mb-2" style={{ color: "#101820" }}>
          Email address
        </label>
        <input
          className={inputStyle}
          style={inputBg}
          type="email"
          placeholder="example@youremail.com"
          autoComplete="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        {errors.email && <p className="mt-1 text-[12px]" style={{ color: "#00A65A" }}>{errors.email}</p>}
      </div>

      {/* Phone + Company */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-[14px] font-semibold mb-2" style={{ color: "#101820" }}>
            Phone number
          </label>
          <input
            className={inputStyle}
            style={inputBg}
            type="tel"
            placeholder="+971 6 XXX XXXX"
            autoComplete="tel"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
          />
        </div>
        <div>
          <label className="block text-[14px] font-semibold mb-2" style={{ color: "#101820" }}>
            Company
          </label>
          <input
            className={inputStyle}
            style={inputBg}
            type="text"
            placeholder="ex. Emirates NBD"
            autoComplete="organization"
            value={form.company}
            onChange={(e) => setForm({ ...form, company: e.target.value })}
          />
        </div>
      </div>

      {/* Message */}
      <div>
        <label className="block text-[14px] font-semibold mb-2" style={{ color: "#101820" }}>
          Message
        </label>
        <textarea
          rows={5}
          className="w-full px-4 sm:px-5 py-3 sm:py-4 rounded-2xl text-[14px] sm:text-[15px] border-0 outline-none resize-none transition-all duration-300 focus:ring-2 focus:ring-[#00A65A]/30"
          style={inputBg}
          placeholder="Write your message here..."
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
        />
        {errors.message && <p className="mt-1 text-[12px]" style={{ color: "#00A65A" }}>{errors.message}</p>}
      </div>

      {/* Cookie consent checkbox */}
      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          id="cookie-consent"
          className="mt-1 w-4 h-4 rounded border-gray-300 accent-[#073F36] cursor-pointer"
          required
        />
        <label htmlFor="cookie-consent" className="text-[13px] leading-[1.6] cursor-pointer" style={{ color: "#5F6B65" }}>
          I agree to the collection and processing of my personal data as described in the{" "}
          <a href="/privacy-policy" className="underline underline-offset-2 transition-colors duration-300 hover:text-[#00A65A]" style={{ color: "#073F36" }}>Privacy Policy</a>.
        </label>
      </div>

      {/* Submit */}
      <div className="pt-2">
        <PremiumCTA type="submit">Submit Form</PremiumCTA>
      </div>

      <AnimatePresence>
        {submitted && (
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mt-4 p-5 rounded-2xl text-[14px]"
            style={{ background: "rgba(0,166,90,0.08)", color: "#00A65A", border: "1px solid rgba(0,166,90,0.2)" }}
          >
            Thank you, your form is submitted.
          </motion.div>
        )}
      </AnimatePresence>
    </form>
  );
}

