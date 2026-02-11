"use client";

import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";

export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-4 md:px-8 md:py-5 lg:px-7 lg:py-6">
      {/* Left Side - Navigation Links in a single pill container */}
      <div className="flex items-center bg-overlay backdrop-blur-sm rounded-full border border-glass-ghost px-1 py-1">
        <Link
          href="#"
          className="px-4 py-2 md:px-5 md:py-2.5 text-white text-xs md:text-sm font-medium hover:bg-glass-ghost rounded-full transition-colors whitespace-nowrap"
        >
          Home
        </Link>
        <Link
          href="#"
          className="px-4 py-2 md:px-5 md:py-2.5 text-white text-xs md:text-sm font-medium hover:bg-glass-ghost rounded-full transition-colors whitespace-nowrap"
        >
          Products
        </Link>
        <Link
          href="#"
          className="px-4 py-2 md:px-5 md:py-2.5 text-white text-xs md:text-sm font-medium hover:bg-glass-ghost rounded-full transition-colors whitespace-nowrap"
        >
          About
        </Link>
        <Link
          href="#"
          className="px-4 py-2 md:px-5 md:py-2.5 text-white text-xs md:text-sm font-medium hover:bg-glass-ghost rounded-full transition-colors whitespace-nowrap"
        >
          Pricing
        </Link>
        <Link
          href="#"
          className="px-4 py-2 md:px-5 md:py-2.5 text-white text-xs md:text-sm font-medium hover:bg-glass-ghost rounded-full transition-colors whitespace-nowrap"
        >
          Reviews
        </Link>
      </div>

      {/* Right Side - Contact Us Button */}
      <Link
        href="#"
        className="flex items-center gap-2 bg-white rounded-full pl-4 pr-1.5 py-1.5 md:pl-5 md:pr-2 md:py-2 hover:bg-muted transition-colors group"
      >
        <span className="text-black text-xs md:text-sm font-medium">Contact Us</span>
        <span className="flex items-center justify-center w-7 h-7 md:w-8 md:h-8 bg-black rounded-full">
          <GoArrowUpRight className="w-3.5 h-3.5 md:w-4 md:h-4 text-white" />
        </span>
      </Link>
    </nav>
  );
}
