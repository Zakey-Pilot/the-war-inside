"use client";
import Link from "next/link"
import EmailForm from "./EmailForm"
import { useData } from "@/context/DataContext"
import InfoColumn from "./InfoColumn";
import clsx from "clsx";

export default function About({ overline, title, description, withTopGradient = false, withBottomGradient = false, isLTR = true }) {


    return (
        <>
            <section className={`bg-[url("/bg.png")]  bg-repeat bg-cover`}>
                <div className={clsx(
                    "w-full h-dvh flex flex-col  justify-center  px-4 items-center md:px-32 ",
                    {
                        "top-gradient-overlay": withTopGradient,
                        "bottom-gradient-overlay": withBottomGradient,
                        "md:items-start": isLTR,
                        "md:items-end": !isLTR
                    }
                )}>

                    <div className="md:w-[600px]">
                        <InfoColumn
                            overline={overline}
                            title={title}
                            description={description}
                        />
                    </div>
                </div>
            </section>
        </>
    )
}