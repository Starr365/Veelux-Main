import Link from "next/link";

interface ButtonProps {
    children: React.ReactNode;
    href?: string;
    onClick?: () => void;
    className?: string;
}

export default function Button({
    children,
    href,
    onClick,
    className = "",
}: ButtonProps) {
    const baseStyles =
        "inline-flex items-center justify-center px-5 py-2 md:px-6 md:py-2.5 border-2 border-white rounded-md text-white text-[12px] md:text-[13px] font-semibold hover:bg-white/8 transition-colors whitespace-nowrap tracking-wide";

    if (href) {
        return (
            <Link href={href} className={`${baseStyles} ${className}`}>
                {children}
            </Link>
        );
    }

    return (
        <button onClick={onClick} className={`${baseStyles} ${className}`}>
            {children}
        </button>
    );
}
