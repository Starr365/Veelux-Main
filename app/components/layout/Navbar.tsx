import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-3 md:px-8 md:py-4 backdrop-blur-md bg-black/30 border-b border-white/10">
      <div className="flex items-center gap-2 md:gap-3 overflow-x-auto scrollbar-hide">
        <Link
          href="#"
          className="px-3 py-1.5 md:px-4 md:py-2 rounded-[8px] bg-white/10 backdrop-blur-sm text-white text-[10px] md:text-xs font-medium hover:bg-white/20 transition-colors border border-white/20 whitespace-nowrap"
        >
          Home
        </Link>
        <Link
          href="#"
          className="px-3 py-1.5 md:px-4 md:py-2 rounded-[8px] bg-white/10 backdrop-blur-sm text-white text-[10px] md:text-xs font-medium hover:bg-white/20 transition-colors border border-white/20 whitespace-nowrap"
        >
          Products
        </Link>
        <Link
          href="#"
          className="px-3 py-1.5 md:px-4 md:py-2 rounded-[8px] bg-white/10 backdrop-blur-sm text-white text-[10px] md:text-xs font-medium hover:bg-white/20 transition-colors border border-white/20 whitespace-nowrap"
        >
          About
        </Link>
        <Link
          href="#"
          className="px-3 py-1.5 md:px-4 md:py-2 rounded-[8px] bg-white/10 backdrop-blur-sm text-white text-[10px] md:text-xs font-medium hover:bg-white/20 transition-colors border border-white/20 whitespace-nowrap"
        >
          Pricing
        </Link>
        <Link
          href="#"
          className="px-3 py-1.5 md:px-4 md:py-2 rounded-[8px] bg-white/10 backdrop-blur-sm text-white text-[10px] md:text-xs font-medium hover:bg-white/20 transition-colors border border-white/20 whitespace-nowrap"
        >
          Reviews
        </Link>
      </div>
      <Link
        href="#"
        className="px-3 py-1.5 md:px-4 md:py-2 rounded-[8px] bg-white/10 backdrop-blur-sm text-white text-[10px] md:text-xs font-medium hover:bg-white/20 transition-colors flex items-center gap-1.5 md:gap-2 border border-white/20 whitespace-nowrap"
      >
        Contact Us
        <svg
          width="10"
          height="10"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="inline-block"
        >
          <path
            d="M1 11L11 1M11 1H1M11 1V11"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Link>
    </nav>
  );
}
