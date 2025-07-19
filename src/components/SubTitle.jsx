import { playfairDisplay } from "@/styles/fonts/playfair-display";
import clsx from 'clsx';

export default function SubTitle({ text, isCenter = false, withTitleOverlineMargin = true }) {
    return (
        <h2 className={
            clsx(`${playfairDisplay.className} antialiased font-medium 
                text-[28px] md:text-[48px] leading-[42px] md:leading-[72px]`,
                {
                    "text-center": isCenter,
                    "my-6": withTitleOverlineMargin,
                    "mb-6": !withTitleOverlineMargin
                },
            )
        }>{text}</h2>
    );
}