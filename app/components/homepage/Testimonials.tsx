"use client";

import Image from "next/image";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

import "swiper/css";

const testimonials = [
    {
        quote:
            "\u201CI've always believed a great watch can transform a look, and the watch I received from Veelux proves it. The leather is incredibly soft, and the watch itself is like a personal retreat. It's more than just an accessory; it's a piece of art that makes a statement. Worth every single penny.\u201D",
        name: "Sarah M",
        role: "Interior designer",
        avatar: "/watch_h1.jpg",
    },
    {
        quote:
            "\u201CThe craftsmanship of my Veelux watch is beyond anything I've ever owned. Every detail has been carefully considered\u2014from the weight of the case to the smoothness of the crown. It elevates my style effortlessly and I receive compliments everywhere I go.\u201D",
        name: "James K",
        role: "Creative Director",
        avatar: "/watch_h2.jpg",
    },
    {
        quote:
            "\u201CAs someone who appreciates fine details, Veelux exceeded all my expectations. The precision engineering and luxurious materials come together in a timepiece that's both elegant and durable. It's the kind of watch you pass down through generations.\u201D",
        name: "Amara O",
        role: "Fashion Consultant",
        avatar: "/watch_3.jpg",
    },
    {
        quote:
            "\u201CFrom the moment I unboxed my Veelux watch, I knew it was special. The packaging, the finish, the feel on my wrist\u2014everything screams quality. It's become my go-to for every occasion, casual or formal. Absolutely love it.\u201D",
        name: "David R",
        role: "Architect",
        avatar: "/watch_black.jpg",
    },
];

export default function Testimonials() {
    const swiperRef = useRef<SwiperType | null>(null);

    return (
        <section className="w-full bg-black px-6 md:px-10 lg:px-12 py-16 md:py-20 lg:py-24">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-6 md:gap-8 lg:gap-10">
                {/* Left - Static Image */}
                <div className="relative w-full h-[260px] md:h-auto md:min-h-[280px] rounded-[14px] overflow-hidden">
                    <Image
                        src="/watch_lux.jpg"
                        alt="Veelux luxury watch"
                        fill
                        className="object-cover object-center"
                    />
                </div>

                {/* Right - Text Content */}
                <div className="min-w-0">
                    <Swiper
                        onSwiper={(swiper) => {
                            swiperRef.current = swiper;
                        }}
                        modules={[Autoplay]}
                        slidesPerView={1}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        loop={true}
                        style={{ width: "100%" }}
                    >
                        {testimonials.map((testimonial, index) => (
                            <SwiperSlide key={index}>
                                <div className="pr-2">
                                    <p className="text-glass-heavy text-[13px] md:text-[14px] lg:text-[15px] font-light leading-[1.8] wrap-break-word whitespace-normal">
                                        {testimonial.quote}
                                    </p>

                                    <div className="flex items-center gap-3 mt-6">
                                        <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0 border border-glass-ghost">
                                            <Image
                                                src={testimonial.avatar}
                                                alt={testimonial.name}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <div>
                                            <p className="text-white text-[13px] font-semibold">
                                                {testimonial.name}
                                            </p>
                                            <p className="text-glass text-[11px] font-light">
                                                {testimonial.role}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Navigation */}
                    <div className="flex gap-2 mt-6">
                        <button
                            onClick={() => swiperRef.current?.slidePrev()}
                            className="w-9 h-9 rounded-lg border border-glass-border flex items-center justify-center hover:bg-glass-ghost transition-colors"
                            aria-label="Previous testimonial"
                        >
                            <GoArrowLeft className="w-4 h-4 text-white" />
                        </button>
                        <button
                            onClick={() => swiperRef.current?.slideNext()}
                            className="w-9 h-9 rounded-lg border border-glass-border flex items-center justify-center hover:bg-glass-ghost transition-colors"
                            aria-label="Next testimonial"
                        >
                            <GoArrowRight className="w-4 h-4 text-white" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
