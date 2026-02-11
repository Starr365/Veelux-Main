import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex">
      {/* Left Side - Black Background with Content */}
      <div className="w-full lg:w-[55%] bg-black flex flex-col justify-start px-6 md:px-10 lg:px-12 pt-24 md:pt-28 lg:pt-32 pb-10 relative z-10">
        {/* Main Headline */}
        <h1 className="text-3xl md:text-5xl lg:text-[64px] xl:text-[72px] font-bold leading-[1.1] md:leading-[1.05] lg:leading-[1.02] mb-8 md:mb-10 lg:mb-12 tracking-[-0.02em]">
          <span className="italic text-white">LUXURY DESIGN</span>
          <br />
          <span className="text-white">UNIQUE, DURABLE</span>
          <br />
          <span className="text-white">PREMIUM WATCHES.</span>
        </h1>

        {/* Three Watch Images Row */}
        <div className="flex gap-3 md:gap-4 mb-8 md:mb-10 lg:mb-12 relative z-20">
          {/* Watch 1 */}
          <div className="relative w-[120px] h-[90px] md:w-[140px] md:h-[105px] lg:w-[160px] lg:h-[115px] rounded-[14px] overflow-hidden shrink-0 border border-glass-ghost">
            <Image
              src="/watch_h1.jpg"
              alt="Luxury watch detail"
              fill
              className="object-cover"
            />
          </div>

          {/* Watch 2 */}
          <div className="relative w-[120px] h-[90px] md:w-[140px] md:h-[105px] lg:w-[160px] lg:h-[115px] rounded-[14px] overflow-hidden shrink-0 border border-glass-ghost">
            <Image
              src="/watch_h2.jpg"
              alt="Premium timepiece"
              fill
              className="object-cover"
            />
          </div>

          {/* Watch 3 */}
          <div className="relative w-[120px] h-[90px] md:w-[140px] md:h-[105px] lg:w-[160px] lg:h-[115px] rounded-[14px] overflow-hidden shrink-0 border border-glass-ghost">
            <Image
              src="/watch_3.jpg"
              alt="Elegant watch design"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Description Text */}
        <p className="text-sm md:text-base lg:text-[15px] leading-[1.7] md:leading-[1.75] text-glass-heavy max-w-[320px] lg:max-w-[280px] font-normal">
          Our watches are well crafted to suit
          <br />
          any style, crafted and{" "}
          <span className="text-accent underline decoration-accent underline-offset-2">sculpted</span> to
          <br />
          your desired taste that will effortlessly
          <br />
          complement your look.
        </p>
      </div>

      {/* Right Side - Large Hero Image */}
      <div className="hidden lg:block absolute top-0 right-0 w-[50%] h-full">
        <Image
          src="/watch_hero.jpg"
          alt="Luxury premium watch"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* Mobile/Tablet Hero Image */}
      <div className="lg:hidden w-full h-[350px] md:h-[450px] relative mt-6">
        <Image
          src="/watch_hero.jpg"
          alt="Luxury premium watch"
          fill
          className="object-cover object-center"
          priority
        />
      </div>
    </section>
  );
}
