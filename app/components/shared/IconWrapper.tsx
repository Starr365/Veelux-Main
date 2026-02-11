import { IconType } from "react-icons";

interface IconWrapperProps {
    icon: IconType;
    className?: string;
}

export default function IconWrapper({ icon: Icon, className = "" }: IconWrapperProps) {
    return (
        <div
            className={`w-[67px] h-[58px] flex items-center justify-center bg-glass rounded-[14px] px-5 py-[15px] ${className}`}
        >
            <Icon className="w-7 h-7 text-white" />
        </div>
    );
}
