"use client";
import Link from "next/link"
import EmailForm from "./EmailForm"
import { useData } from "@/context/DataContext"
import InfoColumn from "./InfoColumn";
import CameraView from "./CameraView";

export default function GameTeaser() {


    return (
        <>
            <section className={`bg-[url("/bg.png")]  bg-repeat bg-contain`}>
                <dev className="w-full h-dvh flex flex-col  justify-center  px-4 md:px-32 py-[60px]">
                    <InfoColumn
                        overline={"Game teaser"}
                        title={"First Glimpse"}
                        description={"Step into the first frames of War & Peace. Watch the teaser and get a taste of the journey ahead."}
                        isCenter={true}
                    />
                    <section className=" grow w-full mt-5" >
                        <CameraView />
                    </section>
                </dev>
            </section>
        </>
    )
}