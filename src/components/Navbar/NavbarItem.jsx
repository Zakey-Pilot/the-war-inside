import Link from "next/link";

export default function NavbarButton({ hint, href }) {
    return (
        <Link className="text-base text-[#FAFAFA] hover:text-white hover:font-semibold transition-colors  self-center" href={href}>{hint}</Link>
    );
}