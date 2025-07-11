import { playfairDisplay } from "@/styles/fonts/playfair-display";
import clsx from 'clsx';

export default function MainTitle({ text, isCenter }) {
    return (
        <h1 className={
            clsx(`${playfairDisplay.className} antialiased font-semibold 
                text-[40px] md:text-[60px] leading-[56px] md:leading-[80px] mb-6`,
                {
                    "text-center":isCenter
                },
            )
        }>{text}</h1>
    );
}