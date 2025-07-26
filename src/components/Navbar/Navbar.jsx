'use client';
import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import NavSection from "./NavSection"
import Logo from "../Logo"
import PrimaryButton from "../Buttons/PrimaryButton"

export default function Navbar({ title }) {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            {/* Overlay for slide-down menu */}
            {menuOpen && (
                <div className="fixed inset-0 z-40 bg-black md:hidden" onClick={() => setMenuOpen(false)}></div>
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
                    <CiMenuFries className="w-7 h-7 text-white" />
                </button>
            </div>
            {/* Slide-down Mobile Menu */}
            <div
                className={`fixed top-0 left-0 w-full max-h-[60vh] bg-black z-50 transform transition-transform duration-300 md:hidden ${menuOpen ? 'translate-y-0' : '-translate-y-full'}`}
                style={{ boxShadow: menuOpen ? '0 2px 8px rgba(0,0,0,0.2)' : 'none' }}
            >
                <div className="relative flex flex-col h-full p-8 gap-8">
                    {/* Close Button */}
                    <button
                        className="absolute top-4 right-4 text-white text-3xl focus:outline-none"
                        onClick={() => setMenuOpen(false)}
                        aria-label="Close menu"
                    >
                        <IoMdClose />
                    </button>
                    {/* Mobile Nav Items with dividers */}
                    <div className="flex flex-col gap-0 mt-2">
                        <a href="#hero" className="text-white text-xl py-3 px-2 flex items-center">Home</a>
                        <hr className="border-t border-white/40 mx-2" />
                        <a href="#about-1" className="text-white text-xl py-3 px-2 flex items-center">About</a>
                        <hr className="border-t border-white/40 mx-2" />
                        <a href="" className="text-white text-xl py-3 px-2 flex items-center">Vision</a>
                        <hr className="border-t border-white/40 mx-2" />
                        <a href="#game-teaser" className="text-white text-xl py-3 px-2 flex items-center">Game teaser</a>
                    </div>
                    <div className="mt-6">
                        <PrimaryButton hint={"Notify Me"} />
                    </div>
                </div>
            </div>
        </>
    )
}