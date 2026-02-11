"use client";

import Button from "../shared/Button";
import Carousel from "../shared/Carousel";
import ProductCard from "../shared/ProductCard";

const products = [
    {
        name: "Black Royale Watch",
        price: "282 USD",
        image: "/watch_black.jpg",
        label: "Double Collection",
    },
    {
        name: "Blue Beyani Watch",
        price: "282 USD",
        image: "/watch_b2.jpg",
        label: "Singles",
    },
    {
        name: "Green Beyani Watch",
        price: "282 USD",
        image: "/watch_lux.jpg",
        label: "Singles",
    },
    {
        name: "Bour Couple Watch",
        price: "282 USD",
        image: "/watch_royale.jpg",
        label: "Double Collection",
    },
    {
        name: "Ryan Premium Watch",
        price: "282 USD",
        image: "/watch_ryan.jpg",
        label: "Singles",
    },
    {
        name: "Premium Classic",
        price: "382 USD",
        image: "/watch_premium.jpg",
        label: "Singles",
    },
    {
        name: "Body Edition",
        price: "182 USD",
        image: "/watch_body.webp",
        label: "Limited",
    },
    {
        name: "Section Heritage",
        price: "482 USD",
        image: "/watch_section.jpg",
        label: "Double Collection",
    },
    {
        name: "Luxe B5 Watch",
        price: "342 USD",
        image: "/watch_b5.jpg",
        label: "Singles",
    },
    {
        name: "Watch Three Edition",
        price: "262 USD",
        image: "/watch_3.jpg",
        label: "Limited",
    },
];

export default function Products() {
    return (
        <section id="products" className="w-full px-6 md:px-10 lg:px-12 pt-10 pb-16 md:pt-14 md:pb-20">
            {/* Header Row */}
            <div className="flex items-end justify-between mb-8 md:mb-10">
                <div>
                    <p className="text-xs md:text-base tracking-[0.02em] uppercase text-white font-normal mb-2 md:mb-3">
                        Discover Veelux
                    </p>
                    <h2 className="text-[22px] md:text-[28px] lg:text-[34px] font-extrabold text-white leading-[1.15] uppercase tracking-tight">
                        Explore Our
                        <br />
                        Luxury Watches
                    </h2>
                </div>
                <Button>View More</Button>
            </div>

            {/* Carousel */}
            <Carousel
                spaceBetween={16}
                slidesPerView={1}
                breakpoints={{
                    480: { slidesPerView: 2, spaceBetween: 16 },
                    768: { slidesPerView: 2, spaceBetween: 18 },
                    1024: { slidesPerView: 3, spaceBetween: 20 },
                    1280: { slidesPerView: 4, spaceBetween: 20 },
                }}
                autoplayDelay={2000}
            >
                {products.map((product, index) => (
                    <ProductCard
                        key={index}
                        name={product.name}
                        price={product.price}
                        image={product.image}
                        label={product.label}
                        subtitle="Amani Crested"
                    />
                ))}
            </Carousel>
        </section>
    );
}
