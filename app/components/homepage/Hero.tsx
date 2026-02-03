import Image from "next/image";

export default function Hero() {
  return (
    <div className="flex flex-col lg:flex-row min-h-[calc(100vh-64px)] md:min-h-[calc(100vh-72px)] pt-16 md:pt-20 lg:pt-[72px]">
      {/* Left Side - Content */}
      <div className="w-full lg:w-1/2 flex flex-col justify-start px-4 md:px-8 lg:px-14 pt-6 md:pt-8 lg:pt-10 pb-10">
        {/* Main Headline */}
        <h1 className="text-4xl md:text-5xl lg:text-[76px] font-bold leading-[1.05] md:leading-none lg:leading-[0.95] mb-6 md:mb-8 lg:mb-9 tracking-[-0.02em] md:tracking-[-0.03em] lg:tracking-[-0.05em] text-white">
          LUXURY DESIGN
          <br />
          UNIQUE, DURABLE
          <br />
          COMFORTABLE CHAIRS.
        </h1>

        {/* Three Chair Images Row */}
        <div className="flex gap-2 md:gap-3 lg:gap-3.5 mb-6 md:mb-8 lg:mb-9 overflow-x-auto scrollbar-hide pb-2">
          <div className="relative w-[140px] h-[100px] md:w-[160px] md:h-[115px] lg:w-[190px] lg:h-[135px] rounded-[10px] overflow-hidden shrink-0">
            <Image
              src="/chair_1.jpg"
              alt="Luxury Chair 1"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative w-[140px] h-[100px] md:w-[160px] md:h-[115px] lg:w-[190px] lg:h-[135px] rounded-[10px] overflow-hidden shrink-0">
            <Image
              src="/chair_2.jpg"
              alt="Luxury Chair 2"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative w-[140px] h-[100px] md:w-[160px] md:h-[115px] lg:w-[190px] lg:h-[135px] rounded-[10px] overflow-hidden shrink-0">
            <Image
              src="/chair_3.jpg"
              alt="Luxury Chair 3"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Description Text */}
        <p className="text-sm md:text-base lg:text-[17px] leading-[1.6] md:leading-[1.7] lg:leading-[1.75] text-white max-w-full lg:max-w-[580px] font-normal">
          Our chairs are well crafter to suit
          <br />
          any space, crafter and{" "}
          <span className="text-[#90EE90] font-semibold">sculpted</span> to
          <br />
          your desired taste that will effortlessly
          <br />
          fit your space.
        </p>
      </div>

      {/* Right Side - Large Hero Image */}
      <div className="w-full lg:w-1/2 relative h-[400px] md:h-[500px] lg:h-auto">
        <Image
          src="/chair_1.jpg"
          alt="Luxury Chair Hero"
          fill
          className="object-cover"
          priority
        />
      </div>
    </div>
  );
}
