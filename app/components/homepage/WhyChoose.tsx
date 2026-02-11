import Image from "next/image";
import { HiClock, HiShieldCheck, HiViewColumns, HiCheckBadge } from "react-icons/hi2";
import IconWrapper from "../shared/IconWrapper";

const features = [
    {
        icon: HiClock,
        title: "The Legacy of Comfort",
        description:
            "More than a watch, it is an heirloom. Our pieces are meticulously crafted to stand the test of time, promising a legacy of comfort that can be enjoyed for generations to come.",
    },
    {
        icon: HiShieldCheck,
        title: "A Statement, Not a Seat",
        description:
            "Each Veelux watch is a singular work of art. We design beyond the trends, crafting pieces that are as individual as you are—a true reflection of your unique style.",
    },
    {
        icon: HiViewColumns,
        title: "The Foundation of Form",
        description:
            "Beneath our elegant exteriors lies an unyielding core of strength. We select only the most resilient materials and employ master-level craftsmanship, ensuring your watch is built to withstand the test of time.",
    },
    {
        icon: HiCheckBadge,
        title: "The Pursuit of Perfection",
        description:
            "Quality is the cornerstone of every Veelux creation. From the selection of fine grain leathers to the final stitch, we are meticulously dedicated to perfection, ensuring an unparalleled level of excellence in every detail.",
    },
];

export default function WhyChoose() {
    return (
        <section className="w-full px-6 md:px-10 lg:px-12 py-16 md:py-20 lg:py-24">
            {/* Small Decorative Divider */}
            <div className="flex justify-center mb-5">
                <div className="w-8 h-[2px] bg-white/30 rounded-full" />
            </div>

            {/* Subtitle */}
            <p className="text-center text-[10px] md:text-xs tracking-[0.3em] uppercase text-white/30 font-normal mb-4 md:mb-5">
                Why Choose Veelux
            </p>

            {/* Main Heading */}
            <h2 className="text-center text-xl md:text-2xl lg:text-[30px] font-bold text-white leading-[1.3] mb-12 md:mb-16">
                We have redefined the art of{" "}
                <span className="text-accent underline decoration-accent underline-offset-4 decoration-2">
                    crafting
                </span>
                .✦
            </h2>

            {/* Four Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-14 md:mb-18 lg:mb-20">
                {features.map((feature, index) => {
                    const Icon = feature.icon;
                    return (
                        <div key={index} className="text-center">
                            {/* Icon */}
                            <div className="flex justify-center mb-4">
                                <IconWrapper icon={Icon} />
                            </div>

                            {/* Title */}
                            <h3 className="text-white text-[13px] md:text-sm font-bold mb-2 md:mb-3">
                                {feature.title}
                            </h3>

                            {/* Description */}
                            <p className="text-white/30 text-[10px] md:text-[11px] leading-[1.7] font-normal max-w-[240px] mx-auto">
                                {feature.description}
                            </p>
                        </div>
                    );
                })}
            </div>

            {/* Large Full-Width Image */}
            <div className="relative w-full h-[280px] md:h-[380px] lg:h-[460px] rounded-[16px] overflow-hidden border border-white/8">
                <Image
                    src="/watch_hero.jpg"
                    alt="Luxury watch craftsmanship"
                    fill
                    className="object-cover object-center"
                />
            </div>
        </section>
    );
}
