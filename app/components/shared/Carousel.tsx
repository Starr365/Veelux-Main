"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import type { SwiperOptions } from "swiper/types";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

import "swiper/css";

interface CarouselProps {
    children: React.ReactNode[];
    spaceBetween?: number;
    slidesPerView?: number | "auto";
    breakpoints?: SwiperOptions["breakpoints"];
    autoplayDelay?: number;
    loop?: boolean;
    navPosition?: "center" | "left";
}

import Button from "./Button";

export default function Carousel({
    children,
    spaceBetween = 16,
    slidesPerView = 1,
    breakpoints,
    autoplayDelay = 3000,
    loop = true,
    navPosition = "center",
}: CarouselProps) {
    const swiperRef = useRef<SwiperType | null>(null);

    return (
        <div>
            <Swiper
                onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                }}
                modules={[Autoplay]}
                spaceBetween={spaceBetween}
                slidesPerView={slidesPerView}
                breakpoints={breakpoints}
                autoplay={{
                    delay: autoplayDelay,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}
                loop={loop}
            >
                {children.map((child, index) => (
                    <SwiperSlide key={index}>{child}</SwiperSlide>
                ))}
            </Swiper>

            {/* Navigation Arrows */}
            <div
                className={`flex gap-3 mt-7 md:mt-9 ${navPosition === "center" ? "justify-center" : "justify-start"
                    }`}
            >
                <Button
                    onClick={() => swiperRef.current?.slidePrev()}
                    className="p-0 w-10 h-10 md:w-11 md:h-11 rounded-full text-black"
                    aria-label="Previous slide"
                >
                    <GoArrowLeft className="w-5 h-5 md:w-6 md:h-6" />
                </Button>
                <Button
                    onClick={() => swiperRef.current?.slideNext()}
                    className="p-0 w-10 h-10 md:w-11 md:h-11 rounded-full text-black"
                    aria-label="Next slide"
                >
                    <GoArrowRight className="w-5 h-5 md:w-6 md:h-6" />
                </Button>
            </div>
        </div>
    );
}
