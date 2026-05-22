"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const services = [
  { label: "Compliance & AML", href: "/what-we-do" },
  { label: "Risk & Audit", href: "/what-we-do" },
  { label: "Business Services", href: "/services" },
  { label: "Advisory & Strategy", href: "/what-we-do" },
  { label: "Payroll & Operations", href: "/services" },
  { label: "Training & Certification", href: "/services" },
];

const sectors = [
  { label: "Banking", href: "/what-we-do" },
  { label: "DNFBP", href: "/services" },
  { label: "Free-Zone Entity", href: "/services" },
  { label: "Mainland Company", href: "/services" },
  { label: "Investment & Insurance", href: "/what-we-do" },
];

export default function AssistSection() {
  const router = useRouter();
  const [serviceOpen, setServiceOpen] = useState(false);
  const [sectorOpen, setSectorOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [selectedSector, setSelectedSector] = useState("");

  const handleServiceSelect = (item: typeof services[0]) => {
    setSelectedService(item.label);
    setServiceOpen(false);
    router.push(item.href);
  };

  const handleSectorSelect = (item: typeof sectors[0]) => {
    setSelectedSector(item.label);
    setSectorOpen(false);
    router.push(item.href);
  };

  return (
    <section className="relative py-6 lg:py-10 px-4 sm:px-6 lg:px-10" style={{ background: "#FFFFFF" }}>
      <div className="relative mx-auto max-w-[1320px] rounded-3xl overflow-visible py-14 lg:py-20 px-6 lg:px-12" style={{ background: "#E0F2E0" }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left — Text + Dropdowns */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="font-light leading-[1.08]"
              style={{ fontSize: "clamp(26px, 3.5vw, 44px)", color: "#101820" }}
            >
              How can we assist you today?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-4 text-[14px] leading-[1.7] max-w-md"
              style={{ color: "#5F6B65" }}
            >
              Learn more about our core areas of expertise by selecting your topic of interest.
            </motion.p>

            {/* Dropdowns */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-7 flex flex-col sm:flex-row gap-3 relative z-[60]"
            >
              {/* Service Dropdown */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => { setServiceOpen(!serviceOpen); setSectorOpen(false); }}
                  className="flex items-center justify-between gap-4 w-full sm:w-[210px] px-5 py-3 rounded-full border cursor-pointer transition-all duration-300 hover:border-[#073F36]"
                  style={{ background: "#FFFFFF", borderColor: "rgba(0,0,0,0.12)", color: "#101820" }}
                >
                  <span className="text-[13px]">{selectedService || "What do you need?"}</span>
                  <svg
                    width="12" height="12" viewBox="0 0 12 12" fill="none"
                    className="shrink-0 transition-transform duration-300"
                    style={{ transform: serviceOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                  >
                    <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>

                {serviceOpen && (
                  <>
                    <div className="fixed inset-0 z-[55]" onClick={() => setServiceOpen(false)} />
                    <div
                      className="absolute left-0 top-full mt-2 z-[60] w-full sm:w-[240px] p-2 rounded-xl shadow-[0_12px_40px_-8px_rgba(0,0,0,0.15)] max-h-[200px] overflow-y-auto"
                      style={{ background: "#FFFFFF" }}
                    >
                      {services.map((item) => (
                        <button
                          key={item.label}
                          type="button"
                          onClick={() => handleServiceSelect(item)}
                          className="w-full text-left px-4 py-2.5 rounded-lg text-[13px] cursor-pointer transition-colors duration-200 hover:bg-[rgba(7,63,54,0.05)]"
                          style={{ color: "#101820" }}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </>
                )}
              </div>

              {/* Sector Dropdown */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => { setSectorOpen(!sectorOpen); setServiceOpen(false); }}
                  className="flex items-center justify-between gap-4 w-full sm:w-[210px] px-5 py-3 rounded-full border cursor-pointer transition-all duration-300 hover:border-[#073F36]"
                  style={{ background: "#FFFFFF", borderColor: "rgba(0,0,0,0.12)", color: "#101820" }}
                >
                  <span className="text-[13px]">{selectedSector || "Your sector"}</span>
                  <svg
                    width="12" height="12" viewBox="0 0 12 12" fill="none"
                    className="shrink-0 transition-transform duration-300"
                    style={{ transform: sectorOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                  >
                    <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>

                {sectorOpen && (
                  <>
                    <div className="fixed inset-0 z-[55]" onClick={() => setSectorOpen(false)} />
                    <div
                      className="absolute left-0 top-full mt-2 z-[60] w-full sm:w-[240px] p-2 rounded-xl shadow-[0_12px_40px_-8px_rgba(0,0,0,0.15)] max-h-[200px] overflow-y-auto"
                      style={{ background: "#FFFFFF" }}
                    >
                      {sectors.map((item) => (
                        <button
                          key={item.label}
                          type="button"
                          onClick={() => handleSectorSelect(item)}
                          className="w-full text-left px-4 py-2.5 rounded-lg text-[13px] cursor-pointer transition-colors duration-200 hover:bg-[rgba(7,63,54,0.05)]"
                          style={{ color: "#101820" }}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </motion.div>
          </div>

          {/* Right — Professional customer support image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:block relative w-full aspect-[5/4] rounded-2xl overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1000&q=80"
              alt="Professional customer support"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
