"use client";

const chips = [
  "AML-CFT",
  "DNFBP Compliance",
  "UBO Registers",
  "ESR Notifications",
  "PDPL Readiness",
  "Corporate Tax",
  "Sanctions Screening",
  "Governance",
  "Free-Zone Compliance",
  "Regulatory Readiness"
];

export default function TrustChipsMarquee() {
  const list = [...chips, ...chips];
  return (
    <section
      className="relative border-y overflow-hidden py-5"
      style={{ borderColor: "rgba(0,0,0,0.06)", background: "#E0F2E0" }}
    >
      <div
        aria-hidden
        className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to right, #E0F2E0, transparent)" }}
      />
      <div
        aria-hidden
        className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to left, #E0F2E0, transparent)" }}
      />
      <div className="flex w-max animate-marquee gap-4">
        {list.map((c, i) => (
          <div
            key={`${c}-${i}`}
            className="flex items-center gap-2 px-5 py-2"
          >
            <span
              className="block w-[5px] h-[5px] rotate-45 shrink-0"
              style={{ background: "#147B58" }}
            />
            <span
              className="text-[13px] tracking-[0.22em] uppercase whitespace-nowrap font-medium"
              style={{ color: "rgba(16,24,32,0.85)" }}
            >
              {c}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

