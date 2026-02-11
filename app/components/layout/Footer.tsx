import Link from "next/link";
import {
    HiPhone,
    HiEnvelope,
    HiClock,
} from "react-icons/hi2";
import { IoLogoWhatsapp } from "react-icons/io5";
import { BsWatch } from "react-icons/bs";

const navLinks = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: "About", href: "/about" },
    { label: "Pricing", href: "/pricing" },
    { label: "Reviews", href: "/reviews" },
];

const legalLinks = [
    { label: "Terms and condition", href: "/terms" },
    { label: "License and Agreement", href: "/license" },
    { label: "Payment and install", href: "/payment" },
];

const contactInfo = [
    {
        icon: HiPhone,
        text: "+234 123 4567 890",
        iconColor: "text-accent",
    },
    {
        icon: IoLogoWhatsapp,
        text: "+234 123 6278 8289",
        iconColor: "text-accent",
    },
    {
        icon: HiEnvelope,
        text: "veelux@gmail.com",
        iconColor: "text-glass-heavy",
    },
    {
        icon: HiClock,
        text: "Open and Close",
        subtext: "09:00 am – 10:00 pm",
        iconColor: "text-accent",
    },
];

export default function Footer() {
    return (
        <footer className="w-full bg-black relative overflow-hidden">
            {/* Main Footer Content */}
            <div className="px-8 md:px-12 lg:px-16 pt-14 md:pt-20 pb-10 md:pb-14">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12 lg:gap-16 max-w-6xl mx-auto">
                    {/* Column 1 - Veelux */}
                    <div>
                        <h3 className="text-white text-[15px] md:text-[16px] font-semibold mb-5 md:mb-6">
                            Veelux
                        </h3>
                        <ul className="space-y-3 md:space-y-3.5">
                            {navLinks.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-glass-subtle text-[13px] md:text-[14px] font-light hover:text-white transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 2 - Legal */}
                    <div>
                        <h3 className="text-white text-[15px] md:text-[16px] font-semibold mb-5 md:mb-6 uppercase tracking-wider">
                            Legal
                        </h3>
                        <ul className="space-y-3 md:space-y-3.5">
                            {legalLinks.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-glass-subtle text-[13px] md:text-[14px] font-light hover:text-white transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3 - Contact */}
                    <div>
                        <h3 className="text-white text-[15px] md:text-[16px] font-semibold mb-5 md:mb-6 uppercase tracking-wider">
                            Contact
                        </h3>
                        <ul className="space-y-4 md:space-y-5">
                            {contactInfo.map((item, index) => {
                                const Icon = item.icon;
                                return (
                                    <li key={index} className="flex items-start gap-3">
                                        <Icon
                                            className={`w-[18px] h-[18px] mt-0.5 shrink-0 ${item.iconColor}`}
                                        />
                                        <div>
                                            <p className="text-glass-heavy text-[13px] md:text-[14px] font-light">
                                                {item.text}
                                            </p>
                                            {item.subtext && (
                                                <p className="text-glass-heavy text-[12px] md:text-[13px] font-light mt-0.5">
                                                    {item.subtext}
                                                </p>
                                            )}
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Divider */}
            <div className="mx-8 md:mx-12 lg:mx-16 h-px bg-glass-ghost" />

            {/* Watermark Section */}
            <div className="relative px-8 md:px-12 lg:px-16 py-10 md:py-14">
                {/* Large Watermark Text + Icon */}
                <div className="flex items-center gap-2 md:gap-4 select-none pointer-events-none">
                    {/* Tilted Watch Icon */}
                    <BsWatch
                        className="text-glass-ghost -rotate-25"
                        style={{ fontSize: "clamp(80px, 12vw, 160px)" }}
                    />
                    {/* VEELUX Watermark */}
                    <span
                        className="text-glass-ghost font-extrabold uppercase tracking-wider leading-none"
                        style={{ fontSize: "clamp(80px, 14vw, 200px)" }}
                    >
                        VEELUX
                    </span>
                </div>
            </div>

            {/* Copyright */}
            <div className="text-center pb-6 md:pb-8">
                <p className="text-glass-subtle text-[10px] md:text-[11px] tracking-[0.15em] font-light uppercase">
                    © {new Date().getFullYear()} Veelux by Starr Codes
                </p>
            </div>
        </footer>
    );
}
