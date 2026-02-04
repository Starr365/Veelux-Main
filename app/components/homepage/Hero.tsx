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
          <span className="text-white">COMFORTABLE CHAIRS.</span>
        </h1>

        {/* Three Chair Images Row */}
        <div className="flex gap-3 md:gap-4 mb-8 md:mb-10 lg:mb-12 relative z-20">
          {/* Chair 1 - Gray modern chair (using chair_3 temporarily as placeholder) */}
          <div className="relative w-[120px] h-[90px] md:w-[140px] md:h-[105px] lg:w-[160px] lg:h-[115px] rounded-[14px] overflow-hidden shrink-0 border border-white/10">
            <Image
              src="/chair_gray.png"
              alt="Modern gray armchair"
              fill
              className="object-cover"
            />
          </div>

          {/* Chair 2 - Blue velvet wingback */}
          <div className="relative w-[120px] h-[90px] md:w-[140px] md:h-[105px] lg:w-[160px] lg:h-[115px] rounded-[14px] overflow-hidden shrink-0 border border-white/10">
            <Image
              src="/chair_1.jpg"
              alt="Blue velvet wingback chair"
              fill
              className="object-cover"
            />
          </div>

          {/* Chair 3 - Striped pattern chair */}
          <div className="relative w-[120px] h-[90px] md:w-[140px] md:h-[105px] lg:w-[160px] lg:h-[115px] rounded-[14px] overflow-hidden shrink-0 border border-white/10">
            <Image
              src="/chair_2.jpg"
              alt="Striped accent chair"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Description Text */}
        <p className="text-sm md:text-base lg:text-[15px] leading-[1.7] md:leading-[1.75] text-white/80 max-w-[320px] lg:max-w-[280px] font-normal">
          Our chairs are well crafter to suit
          <br />
          any space, crafter and{" "}
          <span className="text-[#7FD17F] underline decoration-[#7FD17F] underline-offset-2">sculpted</span> to
          <br />
          your desired taste that will effortlessly
          <br />
          fit your space.
        </p>
      </div>

      {/* Right Side - Large Hero Image (Beige armchair with wooden frame) */}
      <div className="hidden lg:block absolute top-0 right-0 w-[50%] h-full">
        <Image
          src="/chair_3.jpg"
          alt="Luxury beige armchair with wooden frame"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* Mobile/Tablet Hero Image */}
      <div className="lg:hidden w-full h-[350px] md:h-[450px] relative mt-6">
        <Image
          src="/chair_3.jpg"
          alt="Luxury beige armchair with wooden frame"
          fill
          className="object-cover object-center"
          priority
        />
      </div>
    </section>
  );
}
