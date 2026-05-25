"use client";

import { motion } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import PremiumCTA from "./PremiumCTA";
import React from "react";
import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";
import { cn } from "@/lib/utils";

export type SlideItem = {
  title: string;
  image: string;
};

type Props = {
  heading?: React.ReactNode;
  items: SlideItem[];
  className?: string;
  showNavigation?: boolean;
  loop?: boolean;
  autoplay?: boolean;
};

export default function CoverflowCarousel({
  heading,
  items,
  className,
  showNavigation = false,
  loop = true,
  autoplay = false
}: Props) {
  const css = `
    .Mavyn_Coverflow {
      width: 100%;
      height: 420px;
      padding-bottom: 50px !important;
    }
    .Mavyn_Coverflow .swiper-slide {
      background-position: center;
      background-size: cover;
      width: 340px;
      border-radius: 16px;
      overflow: hidden;
      background-color: #073F36;
    }
    @media (min-width: 768px) {
      .Mavyn_Coverflow {
        height: 500px;
      }
      .Mavyn_Coverflow .swiper-slide {
        width: 440px;
      }
    }
    .Mavyn_Coverflow .swiper-pagination-bullet {
      background-color: rgba(20, 123, 88, 0.4) !important;
    }
        .Mavyn_Coverflow .swiper-slide-active .mavyn-slide-title {
      color: #FFFFFF !important;
    }
    .Mavyn_Coverflow .swiper-slide-active .mavyn-slide-underline {
      transform: scaleX(1) !important;
    }
    .Mavyn_Coverflow .swiper-pagination-bullet-active {
      background-color: #147B58 !important;
    }
  `;

  return (
    <section className={cn("relative overflow-hidden py-12 lg:py-16 section-white", className)}>

      <div className="relative mx-auto max-w-[1320px] px-6 lg:px-10">
        {heading && <div className="mb-14 lg:mb-16">{heading}</div>}

        <motion.div
          initial={{ opacity: 0, translateY: 20 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.3, delay: 0.5 }}
          className="relative w-full max-w-6xl mx-auto px-5"
        >
          <style>{css}</style>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="w-full card-white"
          >
            <Swiper
              spaceBetween={30}
              autoplay={
                autoplay
                  ? { delay: 1500, disableOnInteraction: true }
                  : false
              }
              effect="coverflow"
              grabCursor={true}
              slidesPerView="auto"
              centeredSlides={true}
              loop={loop}
              coverflowEffect={{
                rotate: 20,
                stretch: -40,
                depth: 200,
                modifier: 1,
                slideShadows: true
              }}
              pagination={{ clickable: true }}
              navigation={{
                nextEl: ".coverflow-next",
                prevEl: ".coverflow-prev"
              }}
              className="Mavyn_Coverflow"
              modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
            >
              {items.map((item, index) => (
                <SwiperSlide key={`${item.title}-${index}`}>
                  <div className="relative h-full w-full">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="380px"
                      className="h-full w-full object-cover"
                    />
                    {/* Dark gradient for text readability */}
                    <div
                      aria-hidden
                      className="absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(180deg, rgba(7,63,54,0.4) 0%, rgba(7,63,54,0.3) 40%, rgba(7,63,54,0.85) 100%)"
                      }}
                    />
                    {/* Title */}
                    <div className="absolute inset-0 flex items-center justify-center text-center px-4">
                      <div className="flex flex-col items-center">
                        <h3
                          className="mavyn-slide-title font-semibold text-white text-shadow-soft transition-colors duration-500"
                          style={{ fontSize: "clamp(18px, 2.4vw, 28px)" }}
                        >
                          {item.title}
                        </h3>
                        <span className="mavyn-slide-underline block mt-3 h-[2px] w-16 bg-cyan-brand origin-left scale-x-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]" />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </motion.div>

        {/* Navigation arrows — on the sides, outside the cards */}
        <button
          type="button"
          className="coverflow-prev hidden lg:flex absolute top-1/2 -translate-y-1/2 left-2 lg:left-6 z-20 items-center justify-center w-11 h-11 rounded-full cursor-pointer transition-all duration-300"
          style={{ background: "#073F36", color: "#FFFFFF" }}
          onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = "#00A65A"}
          onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = "#073F36"}
        >
          <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
            <path d="M14 5H1M5 1L1 5l4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </button>
        <button
          type="button"
          className="coverflow-next hidden lg:flex absolute top-1/2 -translate-y-1/2 right-2 lg:right-6 z-20 items-center justify-center w-11 h-11 rounded-full cursor-pointer transition-all duration-300"
          style={{ background: "#073F36", color: "#FFFFFF" }}
          onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = "#00A65A"}
          onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = "#073F36"}
        >
          <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
            <path d="M0 5h13M9 1l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </button>

        {/* Learn more CTA */}
        <div className="mt-10 flex justify-center">
          <PremiumCTA href="/services">Learn more</PremiumCTA>
        </div>
      </div>
    </section>
  );
}

