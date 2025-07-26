'use client'

import { useState } from 'react'
import { CiMenuFries } from 'react-icons/ci'
import { IoMdClose } from 'react-icons/io'
import { AnimatePresence, motion } from 'framer-motion'
import NavSection from './NavSection'
import Logo from '../Logo'
import PrimaryButton from '../Buttons/PrimaryButton'

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <>
            {/* Background overlay */}
            {menuOpen && (
                <div
                    className="fixed inset-0 z-40  md:hidden"
                    onClick={() => setMenuOpen(false)}
                />
            )}

            <div className="flex flex-col absolute top-0 left-0 w-full">
                {/* Top Row */}
                <div className="py-3.5 px-4 md:px-32 flex justify-between items-center bg-black/80 z-50">
                    <Logo />
                    <div className="hidden md:flex items-center gap-8">
                        <NavSection />
                        <div className="ml-8">
                            <PrimaryButton hint="Notify Me" />
                        </div>
                    </div>

                    <button
                        className="md:hidden absolute top-4 right-4 text-white text-3xl"
                        onClick={() => setMenuOpen(prev => !prev)}
                        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                    >
                        {menuOpen ? <IoMdClose /> : <CiMenuFries />}
                    </button>
                </div>

                {/* Mobile Nav Animated */}
                <AnimatePresence>
                    {menuOpen && (
                        <motion.div
                            className="w-full md:hidden bg-black/80 z-50"
                            key="mobile-nav"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.4, ease: 'easeInOut' }}
                        >
                            <div className="p-8 flex flex-col gap-6">
                                <a href="#hero" className="text-white text-xl">Home</a>
                                <hr className="border-t border-white/40" />
                                <a href="#about-1" className="text-white text-xl">About</a>
                                <hr className="border-t border-white/40" />
                                <a href="#vision" className="text-white text-xl">Vision</a>
                                <hr className="border-t border-white/40" />
                                <a href="#game-teaser" className="text-white text-xl">Game Teaser</a>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </>
    )
}