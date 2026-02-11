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
        "inline-flex items-center justify-center px-5 py-2 md:px-3 md:py-2 bg-white rounded-md text-black text-sm md:text-base font-semibold hover:bg-white/70 transition-colors whitespace-nowrap tracking-wide";

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
