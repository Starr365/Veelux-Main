import Image from "next/image";

export default function About() {
    return (
        <section className="w-full bg-black px-6 md:px-10 lg:px-12 py-16 md:py-20 lg:py-24">
            {/* Top Row - Image Left + Text Right */}
            <div className="flex flex-col md:flex-row items-start gap-8 md:gap-10 lg:gap-14 mb-16 md:mb-20 lg:mb-28">
                {/* Left - Large Rounded Image */}
                <div className="relative w-full md:w-[45%] h-[220px] md:h-[260px] lg:h-[300px] rounded-[18px] overflow-hidden shrink-0 border border-glass-ghost">
                    <Image
                        src="/watch_section.jpg"
                        alt="Premium luxury watch collection"
                        fill
                        className="object-cover object-center"
                    />
                </div>

                {/* Right - Description Text */}
                <div className="flex items-start pt-2 md:pt-4 lg:pt-6">
                    <p className="text-sm md:text-[15px] lg:text-base leading-[1.75] md:leading-[1.8] text-glass-heavy max-w-[520px] font-normal">
                        At Veelux, we meticulously handcraft each piece using only the
                        finest materials, from supple, full-grain leather to sustainably
                        sourced exotic woods. Our designs are a harmonious blend of
                        timeless elegance and modern innovation, ensuring that every
                        watch not only looks stunning but also provides an unparalleled
                        experience.
                    </p>
                </div>
            </div>

            {/* Bottom Row - Two Images Side by Side, Centered */}
            <div className="flex justify-center gap-4">
                <div className="relative w-[220px] h-[200px] md:w-[260px] md:h-[240px] lg:w-[300px] lg:h-[280px] rounded-[14px] overflow-hidden">
                    <Image
                        src="/watch_lux.jpg"
                        alt="Luxury watch detail"
                        fill
                        className="object-cover object-center"
                    />
                </div>
                <div className="relative w-[220px] h-[200px] md:w-[260px] md:h-[240px] lg:w-[300px] lg:h-[280px] rounded-[14px] overflow-hidden">
                    <Image
                        src="/watch_premium.jpg"
                        alt="Premium watch design"
                        fill
                        className="object-cover object-center"
                    />
                </div>
            </div>
        </section>
    );
}
