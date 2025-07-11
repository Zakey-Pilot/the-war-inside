import Overline from "./Overline";
import MainTitle from "./MainTitle";
import Description from "./Description";
import clsx from 'clsx';

export default function InfoColumn({ overline, title, description, isCenter = false }) {
    return (
        <div className={clsx(
            "flex flex-col",
            {
                "items-center": isCenter
            }
        )}>
            <Overline text={overline} />
            <MainTitle text={title} isCenter={isCenter} />
            <Description text={description} isCenter={isCenter} />
        </div>

    );
}