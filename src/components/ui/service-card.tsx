import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export interface ServiceCardProps {
  title?: string;
  subtitle?: string;
  image?: string;
  href?: string;
  label?: string;
}

export default function ServiceCard({
  title = "Service Title",
  subtitle = "Service description goes here",
  image = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
  href = "/contact",
  label = "Service",
}: ServiceCardProps) {
  return (
    <div className="w-full group cursor-pointer">
      <Link href={href} className="relative block overflow-hidden rounded-2xl h-[380px] lg:h-[420px] border" style={{ borderColor: "rgba(0,0,0,0.06)" }}>
        {/* Background image — top portion */}
        <div className="absolute inset-0">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-all duration-600 group-hover:blur-[8px] group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 25vw"
          />
        </div>

        {/* Default state — small card at bottom with title + dots + arrow */}
        <div
          className="absolute bottom-0 left-0 right-0 h-[45%] rounded-t-xl p-5 flex flex-col justify-start transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] origin-bottom-right group-hover:h-full group-hover:rounded-t-none"
          style={{ background: "rgba(224,242,224,0.95)", backdropFilter: "blur(12px)" }}
        >
          {/* Label — always visible, same position */}
          <span
            className="text-[10px] tracking-[0.3em] uppercase font-semibold mb-2"
            style={{ color: "#073F36" }}
          >
            {label}
          </span>

          {/* Title — always visible */}
          <h3
            className="text-[17px] lg:text-[20px] font-semibold leading-tight"
            style={{ color: "#101820" }}
          >
            {title}
          </h3>

          {/* Dots — visible by default, hidden on hover */}
          <span className="mt-2 text-[20px] leading-none tracking-widest opacity-60 group-hover:opacity-0 transition-opacity duration-300" style={{ color: "#5F6B65" }}>
            ...
          </span>

          {/* Arrow icon — top right corner, visible by default */}
          <div className="absolute top-4 right-4 flex items-center justify-center w-9 h-9 rounded-full border transition-all duration-300 group-hover:opacity-0"
            style={{ borderColor: "rgba(0,0,0,0.15)", background: "transparent" }}
          >
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M4 12L12 4M12 4H6M12 4V10" stroke="#101820" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          {/* Description — hidden by default, shown on hover */}
          <p
            className="mt-3 text-[13px] leading-[1.65] opacity-0 group-hover:opacity-100 transition-opacity duration-400 delay-150"
            style={{ color: "#5F6B65" }}
          >
            {subtitle}
          </p>

          {/* Learn More — hidden by default, shown on hover */}
          <div className="mt-auto pt-4 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-400 delay-200">
            <span
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-[11px] font-semibold tracking-[0.1em] uppercase"
              style={{ background: "#073F36", color: "#FFFFFF" }}
            >
              Learn More
              <ArrowRight className="w-3.5 h-3.5" />
            </span>

            {/* Arrow circle — hover state */}
            <div className="flex items-center justify-center w-10 h-10 rounded-full" style={{ background: "#073F36" }}>
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M4 12L12 4M12 4H6M12 4V10" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

