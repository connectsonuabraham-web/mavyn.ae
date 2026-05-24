"use client";

import ServiceCardCarousel from "@/components/ui/card-carousel";
import PremiumCTA from "@/components/PremiumCTA";

type ServiceItem = {
  title: string;
  blurb: string;
  image: string;
};

export default function ServicesStepCarousel({ services }: { services: ServiceItem[] }) {
  const carouselItems = services.map((s) => ({
    title: s.title,
    image: s.image,
  }));

  return (
    <section className="relative py-12 lg:py-16 section-white">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-12">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2
            className="font-semibold"
            style={{ fontSize: "clamp(24px, 3.4vw, 42px)", color: "#101820" }}
          >
            Services
          </h2>
          <p className="mt-3 text-[14px] max-w-md mx-auto" style={{ color: "#5F6B65" }}>
            Operational services we build and run for regulated firms.
          </p>
        </div>

        {/* Card Carousel */}
        <ServiceCardCarousel items={carouselItems} autoplayDelay={2500} />

        {/* CTA Button */}
        <div className="mt-10 flex justify-center">
          <PremiumCTA href="/services">Learn More</PremiumCTA>
        </div>
      </div>
    </section>
  );
}

