"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import PremiumCTA from "./PremiumCTA";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination
} from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

export type Capability = {
  title: string;
  blurb: string;
  image: string;
};

type Variant = "services" | "capability";

export default function TwelveCapabilities({
  variant = "services",
  items
}: {
  variant?: Variant;
  items: Capability[];
}) {
  return (
    <section className="relative overflow-hidden bg-bg py-20 lg:py-28">
      <div className="absolute inset-0 grid-bg opacity-[0.06] pointer-events-none" />

      <div className="relative mx-auto max-w-[1320px] px-6 lg:px-10">
        {/* Heading */}
        {variant === "services" ? (
          <motion.h2
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="text-center font-light text-ink leading-none"
            style={{ fontSize: "clamp(48px, 8vw, 110px)" }}
          >
            Services
          </motion.h2>
        ) : (
          <div className="text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="inline-flex flex-col items-center gap-3"
            >
              <span className="text-[11px] tracking-[0.4em] uppercase text-cyan-brand font-medium">
                Full Capability Set
              </span>
              <span className="block w-12 h-px bg-cyan-brand/70" />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 font-light text-ink leading-[1.05]"
              style={{ fontSize: "clamp(34px, 4.6vw, 64px)" }}
            >
              Twelve practices,{" "}
              <span className="font-normal text-cyan-brand normal-case tracking-normal">
                one bench.
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mt-5 text-ink-muted text-[15px] lg:text-[16px] leading-[1.7] max-w-xl mx-auto"
            >
              Pick one. Combine three. Hand us the whole thing. The structure
              flexes to the mandate , the standards don&rsquo;t.
            </motion.p>
          </div>
        )}

        {/* Swiper Coverflow Carousel */}
        <div className="mt-12 lg:mt-16 relative">
          <style>{`
            .cap-swiper {
              width: 100%;
              padding-bottom: 60px !important;
            }
            .cap-swiper .swiper-slide {
              width: 320px;
              transition: all 0.4s ease;
            }
            @media (min-width: 1024px) {
              .cap-swiper .swiper-slide {
                width: 380px;
              }
            }
            .cap-swiper .swiper-pagination-bullet {
              background-color: rgba(20, 123, 88, 0.4) !important;
              width: 10px;
              height: 10px;
            }
            .cap-swiper .swiper-pagination-bullet-active {
              background-color: #147B58 !important;
              transform: scale(1.2);
            }
            .cap-swiper .swiper-button-next,
            .cap-swiper .swiper-button-prev {
              color: #147B58 !important;
              width: 44px;
              height: 44px;
              border-radius: 50%;
              border: 1px solid rgba(20, 123, 88, 0.5);
              background: rgba(0, 5, 10, 0.7);
              backdrop-filter: blur(8px);
            }
            .cap-swiper .swiper-button-next::after,
            .cap-swiper .swiper-button-prev::after {
              font-size: 16px;
              font-weight: 600;
            }
            .cap-swiper .swiper-button-next:hover,
            .cap-swiper .swiper-button-prev:hover {
              border-color: #147B58;
              background: rgba(20, 123, 88, 0.08);
            }
          `}</style>

          <Swiper
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: true
            }}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 140,
              modifier: 1.5,
              slideShadows: true
            }}
            pagination={{ clickable: true }}
            navigation={true}
            modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
            className="cap-swiper"
          >
            {items.map((cap, idx) => (
              <SwiperSlide key={`${cap.title}-${idx}`}>
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10">
                  <Image
                    src={cap.image}
                    alt={cap.title}
                    fill
                    sizes="380px"
                    className="object-cover"
                  />
                  {/* Dark overlay */}
                  <div
                    aria-hidden
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(2,8,15,0.3) 0%, rgba(0,5,10,0.5) 50%, rgba(2,8,15,0.88) 100%)"
                    }}
                  />
                  {/* Title centered */}
                  <div className="absolute inset-0 flex items-center justify-center text-center px-6">
                    <h3
                      className="uppercase text-ink font-light drop-shadow-[0_2px_20px_rgba(0,5,10,0.8)]"
                      style={{
                        fontSize: "clamp(18px, 2.2vw, 26px)",
                        lineHeight: 1.2
                      }}
                    >
                      {cap.title}
                    </h3>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Learn more CTA */}
        <div className="mt-4 flex justify-center">
          <PremiumCTA href="/services">Learn more</PremiumCTA>
        </div>
      </div>
    </section>
  );
}
