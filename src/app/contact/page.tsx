"use client";

import { useEffect, useState } from "react";
import ContactForm from "@/components/ContactForm";
import PageHero from "@/components/PageHero";
import { LinkedInIcon, XIcon, InstagramIcon } from "@/components/SocialIcons";
import { sanityClient } from "@/lib/sanity";

const DEFAULTS = {
  contactEmail: "hello@mavyn.ae",
  contactPhone: "+971 (0) 56 856 5999",
  contactAddress: "Sharjah, United Arab Emirates",
  linkedinUrl: "https://www.linkedin.com",
  instagramUrl: "https://www.instagram.com",
  twitterUrl: "https://x.com",
};

export default function ContactPage() {
  const [settings, setSettings] = useState(DEFAULTS);

  useEffect(() => {
    async function fetchSettings() {
      try {
        const data = await sanityClient.fetch(
          `*[_type == "siteSettings"][0] {
            contactEmail,
            contactPhone,
            contactAddress,
            linkedinUrl,
            instagramUrl,
            twitterUrl
          }`
        );
        if (data) {
          setSettings({
            contactEmail: data.contactEmail || DEFAULTS.contactEmail,
            contactPhone: data.contactPhone || DEFAULTS.contactPhone,
            contactAddress: data.contactAddress || DEFAULTS.contactAddress,
            linkedinUrl: data.linkedinUrl || DEFAULTS.linkedinUrl,
            instagramUrl: data.instagramUrl || DEFAULTS.instagramUrl,
            twitterUrl: data.twitterUrl || DEFAULTS.twitterUrl,
          });
        }
      } catch (err) {
        // Sanity not available — use defaults
      }
    }
    fetchSettings();
  }, []);

  return (
    <>
      <PageHero
        label="Contact Us"
        title={"Connect\nWith Us"}
        subtitle="Ready to take the next step? Contact us today to learn more about our offerings or to schedule a consultation."
        image="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=2400&q=80"
      />

      {/* Contact Section */}
      <section className="relative py-20 lg:py-28" style={{ background: "#FFFFFF" }}>
        <div className="mx-auto max-w-[1320px] px-6 lg:px-12">
          {/* Section heading */}
          <div className="text-center mb-14">
            <h2
              className="font-light"
              style={{ fontSize: "clamp(32px, 4vw, 52px)", color: "#101820" }}
            >
              Contact Us
            </h2>
            <p className="mt-4 text-[15px] max-w-lg mx-auto" style={{ color: "#5F6B65" }}>
              We&rsquo;re here to help. Whether you have questions, feedback, or
              need support, our team is ready to assist you.
            </p>
          </div>

          {/* Two columns: Form first on mobile, Info left on desktop */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12 lg:gap-16">
            {/* Form — shows first on mobile */}
            <div className="order-1 lg:order-1 -mx-6 sm:mx-0 p-5 sm:p-6 lg:p-10 sm:rounded-2xl" style={{ background: "#E0F2E0" }}>
              <ContactForm />
            </div>

            {/* Get in touch — shows second on mobile, right on desktop */}
            <div className="order-2 lg:order-2">
              <h3
                className="font-light"
                style={{ fontSize: "clamp(28px, 3vw, 40px)", color: "#101820" }}
              >
                Get in touch
              </h3>

              <div className="mt-8 space-y-7">
                {/* Email */}
                <div>
                  <p className="text-[12px] uppercase tracking-[0.2em] mb-1" style={{ color: "#5F6B65" }}>
                    Email:
                  </p>
                  <a
                    href={`mailto:${settings.contactEmail}`}
                    className="text-[16px] font-semibold transition-colors duration-300 cursor-pointer"
                    style={{ color: "#101820" }}
                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#00A65A"}
                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "#101820"}
                  >
                    {settings.contactEmail}
                  </a>
                </div>

                {/* Phone */}
                <div>
                  <p className="text-[12px] uppercase tracking-[0.2em] mb-1" style={{ color: "#5F6B65" }}>
                    Phone:
                  </p>
                  <p className="text-[16px] font-semibold" style={{ color: "#101820" }}>
                    {settings.contactPhone}
                  </p>
                </div>

                {/* Address */}
                <div>
                  <p className="text-[12px] uppercase tracking-[0.2em] mb-1" style={{ color: "#5F6B65" }}>
                    Address:
                  </p>
                  <p className="text-[16px] font-semibold leading-relaxed" style={{ color: "#101820" }}>
                    {settings.contactAddress}
                  </p>
                </div>

                {/* Follow Us */}
                <div>
                  <p className="text-[12px] uppercase tracking-[0.2em] mb-3" style={{ color: "#5F6B65" }}>
                    Follow Us:
                  </p>
                  <div className="flex items-center gap-4">
                    <a href={settings.instagramUrl} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="transition-colors duration-300 cursor-pointer" style={{ color: "#101820" }} onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#00A65A"} onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "#101820"}>
                      <InstagramIcon className="w-5 h-5" />
                    </a>
                    <a href={settings.linkedinUrl} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="transition-colors duration-300 cursor-pointer" style={{ color: "#101820" }} onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#00A65A"} onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "#101820"}>
                      <LinkedInIcon className="w-5 h-5" />
                    </a>
                    <a href={settings.twitterUrl} target="_blank" rel="noopener noreferrer" aria-label="X" className="transition-colors duration-300 cursor-pointer" style={{ color: "#101820" }} onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#00A65A"} onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "#101820"}>
                      <XIcon className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section — Book a Compliance Discussion */}
      <section className="relative py-6 lg:py-14" style={{ background: "#FFFFFF" }}>
        <div className="relative overflow-hidden mx-3 lg:mx-10 rounded-2xl" style={{ background: "#073F36" }}>
        <div className="relative min-h-[320px] lg:min-h-[440px] flex items-center">
          {/* Background image */}
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2000&q=80"
            alt=""
            className="absolute inset-0 w-full h-full object-cover opacity-20"
          />
          {/* Overlay */}
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(90deg, rgba(7,63,54,0.95) 0%, rgba(7,63,54,0.7) 60%, rgba(7,63,54,0.5) 100%)" }}
          />

          <div className="relative w-full mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-14 py-10 lg:py-16">
            <p className="text-[11px] tracking-[0.4em] uppercase font-medium mb-5" style={{ color: "#16D6A3" }}>
              Take the Next Step
            </p>
            <h2
              className="font-light leading-[1.08] text-white max-w-2xl"
              style={{ fontSize: "clamp(22px, 4vw, 48px)" }}
            >
              Ready to strengthen your compliance position?
            </h2>
            <p className="mt-5 max-w-lg text-[15px] leading-[1.7]" style={{ color: "rgba(255,255,255,0.65)" }}>
              Tell us where the regulatory pressure is — we&rsquo;ll start there. From a single AML review to a multi-year managed programme, the bench scales with the mandate.
            </p>
            <div className="mt-8">
              <a
                href={`mailto:${settings.contactEmail}`}
                className="premium-cta-white inline-flex items-center gap-3 pl-7 pr-2 py-2 rounded-full transition-colors duration-350 cursor-pointer"
              >
                <span className="premium-cta-white__text text-[15px] font-medium whitespace-nowrap">
                  Book a Compliance Discussion
                </span>
                <span className="premium-cta-white__circle relative flex items-center justify-center w-10 h-10 rounded-full transition-colors duration-350 overflow-hidden">
                  <span className="premium-cta-white__arrow absolute inset-0 flex items-center justify-center">
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                      <path d="M4 12L12 4M12 4H6M12 4V10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>
        </div>
      </section>
    </>
  );
}
