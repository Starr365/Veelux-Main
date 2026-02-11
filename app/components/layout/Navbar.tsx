"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { GoArrowUpRight } from "react-icons/go";
import { HiMenuAlt3, HiX } from "react-icons/hi";

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Products", href: "#products" },
    { label: "About", href: "#about" },
    { label: "Pricing", href: "/pricing" },
    { label: "Reviews", href: "#reviews" },
  ];

  // Disable scroll when sidebar is open
  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isSidebarOpen]);

  return (
    <>
      <nav className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-4 md:px-8 lg:pl-10 lg:pr-0 lg:py-0 py-4 md:py-5">
        {/* Left Side - Desktop Navigation Links (Pill) */}
        <div className="flex items-center gap-4 lg:py-8">
          <div className="hidden md:flex items-center bg-white/10 backdrop-blur-sm rounded-full border border-white/30 px-1 py-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="px-4 py-2 md:px-5 md:py-2.5 text-white text-xs md:text-sm font-medium hover:bg-cream/20 rounded-full transition-colors whitespace-nowrap"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="md:hidden flex items-center justify-center w-10 h-10 bg-white/10 rounded-full border border-white/10 text-white"
          >
            <HiMenuAlt3 className="w-6 h-6" />
          </button>
        </div>

        {/* Right Side - Contact Us Button (Desktop Notch) */}
        <div className="hidden lg:block">
          <div className="bg-black p-3 rounded-bl-[30px]">
            <Link
              href="/contact"
              className="flex items-center gap-2 bg-white rounded-full pl-5 pr-2 py-2 hover:bg-gray-100 transition-colors group"
            >
              <span className="text-black text-sm font-semibold tracking-tight">Contact Us</span>
              <span className="flex items-center justify-center w-8 h-8 bg-black rounded-full">
                <GoArrowUpRight className="w-4 h-4 text-white" />
              </span>
            </Link>
          </div>
        </div>

        {/* Right Side - Contact Us Button (Mobile) */}
        <div className="lg:hidden">
          <Link
            href="/contact"
            className="flex items-center gap-2 bg-white rounded-full pl-4 pr-1.5 py-1.5 hover:bg-gray-100 transition-colors group"
          >
            <span className="text-black text-xs font-medium">Contact Us</span>
            <span className="flex items-center justify-center w-7 h-7 bg-black rounded-full">
              <GoArrowUpRight className="w-3.5 h-3.5 text-white" />
            </span>
          </Link>
        </div>
      </nav>

      {/* Mobile Sidebar Overlay */}
      <div
        className={`fixed inset-0 z-50 bg-black/60 backdrop-blur-sm transition-opacity duration-300 md:hidden ${isSidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        onClick={() => setIsSidebarOpen(false)}
      />

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-[260px] z-50 bg-black/90 backdrop-blur-xl border-l border-white/10 transition-transform duration-300 md:hidden ${isSidebarOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex flex-col h-full p-6">
          <div className="flex justify-end mb-10">
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="flex items-center justify-center w-10 h-10 bg-white/10 rounded-full border border-white/10 text-white"
            >
              <HiX className="w-5 h-5" />
            </button>
          </div>

          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-white text-lg font-medium hover:text-accent transition-colors"
                onClick={() => setIsSidebarOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="mt-auto">
            <p className="text-white/30 text-xs tracking-wider uppercase">
              Veelux Premium
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
