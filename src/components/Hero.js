"use client";
import Link from "next/link"
import EmailForm from "./EmailForm"
import { useData } from "@/context/DataContext"
import InfoColumn from "./InfoColumn";

export default function Hero() {


    return (
        <>
            <section className={`bg-[url("/hero-bg.png")]  bg-repeat bg-cover bg-[position:73%_bottom] md:bg-bottom`}>
                <div className="w-full h-dvh flex flex-col  justify-center  px-4 md:px-32 gradient-overlay">
                    <InfoColumn
                        overline={"War & Peace"}
                        title={"War Tears. Peace Heals."}
                        description={"A hand-drawn journey through ruin and redemption.\nComing soon — a story-driven game where your choices matter."}
                    />
                </div>
            </section>
        </>
    )
}