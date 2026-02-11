import Image from "next/image";
import { HiMapPin } from "react-icons/hi2";
import { TbCurrencyDollar } from "react-icons/tb";

interface ProductCardProps {
    name: string;
    price: string;
    image: string;
    label: string;
    subtitle?: string;
}

export default function ProductCard({
    name,
    price,
    image,
    label,
    subtitle = "Amani Crested",
}: ProductCardProps) {
    return (
        <div className="w-full">
            {/* Card Container */}
            <div className="relative w-full h-[300px] md:h-[340px] lg:h-[380px] rounded-[22px] overflow-hidden group">
                <Image
                    src={image}
                    alt={name}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />

                {/* Top Right - Label */}
                <div className="absolute top-3.5 right-3.5 bg-overlay backdrop-blur-md border border-glass-faint rounded-full px-3.5 py-1">
                    <span className="text-white text-[10px] md:text-[11px] font-medium">
                        {label}
                    </span>
                </div>

                {/* Bottom - Glassmorphism bar */}
                <div
                    className="absolute bottom-3 left-1/2 -translate-x-1/2 w-[calc(100%-24px)] rounded-xl px-3.5 py-2.5 flex flex-col justify-center items-center gap-2.5 bg-glass-md shadow-[0px_4px_4px_var(--color-overlay)]"
                >
                    {/* Inner row: name+subtitle left, price right */}
                    <div className="w-full flex flex-row justify-between items-center gap-4">
                        {/* Left - Name & Subtitle */}
                        <div className="flex flex-col items-start gap-[2px] min-w-0">
                            <h3 className="text-black text-[16px] md:text-[18px] lg:text-[22px] font-semibold leading-tight truncate w-full">
                                {name}
                            </h3>
                            <div className="flex items-center gap-1">
                                <HiMapPin className="w-[14px] h-[14px] text-black shrink-0" />
                                <span className="text-black text-[11px] md:text-[13px] lg:text-[15px] font-light">
                                    {subtitle}
                                </span>
                            </div>
                        </div>

                        {/* Right - Price Tag */}
                        <div className="shrink-0 flex items-center justify-center rounded-[11px] px-2.5 py-2 bg-cream">
                            <div className="flex items-center">
                                <TbCurrencyDollar className="w-[16px] h-[16px] text-black" />
                                <span className="text-black text-[12px] md:text-[13px] lg:text-[15px] font-light whitespace-nowrap">
                                    {price}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
