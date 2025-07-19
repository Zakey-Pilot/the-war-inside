import Link from "next/link";

export default function NavbarButton({ hint ,href}) {
    return (
        <a className="text-base text-[#FAFAFA] hover:text-white hover:font-semibold transition-colors" href={href}>{hint}</a>
    );
}