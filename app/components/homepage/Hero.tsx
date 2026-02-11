import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0">
      {/* Left Side - Content */}
      <div className="flex flex-col justify-start px-6 md:px-10 pt-24 md:pt-28 lg:pt-32 pb-8 relative z-10 w-full">
        {/* Main Headline */}
        <h1 className="text-2xl md:text-4xl lg:text-[40px] leading-normal mb-8 md:mb-10 lg:mb-12 tracking-[0.05em]">
          <span className="text-white">LUXURY DESIGN</span>
          <br />
          <span className="text-white">UNIQUE, DURABLE</span>
          <br />
          <span className="text-white">PREMIUM WATCHES.</span>
        </h1>

        {/* Three Watch Images Row - Overlapping Design */}
        <div className="flex gap-2 bg-black p-2.5 md:p-2 rounded-[28px] md:rounded-[32px] w-fit mb-8 md:mb-9 relative z-20 lg:translate-x-[60%] xl:translate-x-[60%] shadow-2xl">
          {/* Watch 1 */}
          <div className="relative w-[75px] h-[60px] md:w-[150px] md:h-[130px] lg:w-[150px] lg:h-[110px] rounded-[20px] md:rounded-[24px] overflow-hidden shrink-0">
            <Image
              src="/watch_h1.jpg"
              alt="Luxury watch detail"
              fill
              className="object-cover"
            />
          </div>

          {/* Watch 2 */}
          <div className="relative w-[75px] h-[60px] md:w-[130px] md:h-[100px] lg:w-[150px] lg:h-[110px] rounded-[20px] md:rounded-[24px] overflow-hidden shrink-0">
            <Image
              src="/watch_h2.jpg"
              alt="Premium timepiece"
              fill
              className="object-cover"
            />
          </div>

          {/* Watch 3 */}
          <div className="relative w-[75px] h-[60px] md:w-[130px] md:h-[100px] lg:w-[150px] lg:h-[110px] rounded-[20px] md:rounded-[24px] overflow-hidden shrink-0">
            <Image
              src="/watch_3.jpg"
              alt="Elegant watch design"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Description Text */}
        <p className="max-w-[400px] text-sm md:text-base lg:text-[15px] leading-[1.7] md:leading-[1.75] text-white font-normal">
          Our watches are well crafted to suit any style, crafted and {" "}
          <span className="text-accent">sculpted</span>
          {" "}
          to your desired taste that will effortlessly complement your look.
        </p>
      </div>

      {/* Right Side - Large Hero Image */}
      <div className="relative w-full h-[400px] md:h-[500px] lg:h-full px-6 md:px-10 lg:px-0 lg:pr-8 lg:py-8">
        <div className="relative w-full h-full rounded-[24px] overflow-hidden">
          <Image
            src="/watch_royale.jpg"
            alt="Luxury premium watch"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
      </div>
    </section>
  );
}
