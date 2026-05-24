"use client"

import React from "react"
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"
import "swiper/css/navigation"
import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper/modules"

interface CardItem {
  title: string
  image: string
}

interface ServiceCardCarouselProps {
  items: CardItem[]
  autoplayDelay?: number
}

export default function ServiceCardCarousel({
  items,
  autoplayDelay = 2000,
}: ServiceCardCarouselProps) {
  const css = `
    .service-carousel {
      width: 100%;
      padding-bottom: 50px;
    }
    .service-carousel .swiper-slide {
      background-position: center;
      background-size: cover;
      width: 300px;
      height: 400px;
    }
    @media (min-width: 768px) {
      .service-carousel .swiper-slide {
        width: 340px;
        height: 440px;
      }
    }
    .service-carousel .swiper-3d .swiper-slide-shadow-left {
      background-image: none;
    }
    .service-carousel .swiper-3d .swiper-slide-shadow-right {
      background: none;
    }
    .service-carousel .swiper-pagination-bullet {
      background-color: rgba(7, 63, 54, 0.3) !important;
    }
    .service-carousel .swiper-pagination-bullet-active {
      background-color: #073F36 !important;
    }
  `

  // Double the items for seamless loop
  const allItems = [...items, ...items]

  return (
    <div className="w-full">
      <style>{css}</style>
      <Swiper
        spaceBetween={30}
        autoplay={{
          delay: autoplayDelay,
          disableOnInteraction: false,
        }}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ clickable: true }}
        navigation={{
          nextEl: ".service-carousel-next",
          prevEl: ".service-carousel-prev",
        }}
        modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
        className="service-carousel"
      >
        {allItems.map((item, index) => (
          <SwiperSlide key={`${item.title}-${index}`}>
            <div className="relative h-full w-full rounded-2xl overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="340px"
                className="object-cover"
              />
              {/* Dark overlay for text readability */}
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(180deg, rgba(7,63,54,0.2) 0%, rgba(7,63,54,0.7) 100%)" }}
              />
              {/* Title centered */}
              <div className="absolute inset-0 flex items-center justify-center text-center px-6">
                <h3 className="text-white text-[18px] md:text-[22px] font-semibold leading-tight">
                  {item.title}
                </h3>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation arrows */}
      <div className="flex items-center justify-center gap-4 mt-4">
        <button
          type="button"
          className="service-carousel-prev flex items-center justify-center w-11 h-11 rounded-full cursor-pointer transition-all duration-300"
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
          className="service-carousel-next flex items-center justify-center w-11 h-11 rounded-full cursor-pointer transition-all duration-300"
          style={{ background: "#073F36", color: "#FFFFFF" }}
          onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = "#00A65A"}
          onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = "#073F36"}
        >
          <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
            <path d="M0 5h13M9 1l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </button>
      </div>
    </div>
  )
}

