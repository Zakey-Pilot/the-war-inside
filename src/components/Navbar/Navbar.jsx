'use client';
import { useState } from "react";
import NavSection from "./NavSection"
import Logo from "../Logo"
import PrimaryButton from "../Buttons/PrimaryButton"

export default function Navbar({ title }) {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            {/* Overlay for slide-in menu */}
            {menuOpen && (
                <div className="fixed inset-0 z-40 bg-black/60 md:hidden" onClick={() => setMenuOpen(false)}></div>
            )}
            <div className="fixed top-0 left-0 w-full bg-black/80 py-3.5 px-4 md:px-32 flex justify-between items-center z-50">
                <Logo />
                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    <NavSection />
                    <div className="ml-8">
                        <PrimaryButton hint={"Notify Me"} />
                    </div>
                </div>
                {/* Hamburger Icon for Mobile */}
                <button
                    className="md:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    <span className={`block w-7 h-0.5 bg-white mb-1.5 transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                    <span className={`block w-7 h-0.5 bg-white mb-1.5 transition-all ${menuOpen ? 'opacity-0' : ''}`}></span>
                    <span className={`block w-7 h-0.5 bg-white transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                </button>
            </div>
            {/* Slide-in Mobile Menu */}
            <div
                className={`fixed top-0 right-0 h-full w-64 bg-black z-50 transform transition-transform duration-300 md:hidden ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}
                style={{ boxShadow: menuOpen ? '-2px 0 8px rgba(0,0,0,0.2)' : 'none' }}
            >
                <div className="flex flex-col h-full p-8 gap-8">
                    <div className="flex-1 flex flex-col gap-8">
                        <NavSection mobile />
                        <PrimaryButton hint={"Notify Me"} />
                    </div>
                </div>
            </div>
        </>
    )
}