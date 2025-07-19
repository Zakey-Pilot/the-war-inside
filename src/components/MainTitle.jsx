import { playfairDisplay } from "@/styles/fonts/playfair-display";
import clsx from 'clsx';

export default function MainTitle({ text, isCenter, withTitleOverlineMargin = true }) {
    return (
        <h1 className={
            clsx(`${playfairDisplay.className} antialiased font-semibold 
                text-[40px] md:text-[60px] leading-[56px] md:leading-[80px]`,
                {
                    "text-center": isCenter,
                    "my-6": withTitleOverlineMargin,
                    "mb-6": !withTitleOverlineMargin
                },
            )
        }>{text}</h1>
    );
}