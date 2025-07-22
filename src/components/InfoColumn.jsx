import Overline from "./Overline";
import MainTitle from "./MainTitle";
import SubTitle from "./SubTitle";
import Description from "./Description";
import clsx from 'clsx';

export default function InfoColumn({ overline, title, description, isCenter = false, withTitleOverlineMargin = true, withMainTitle = false }) {
    const titleComponent = withMainTitle ?
        <MainTitle text={title} isCenter={isCenter} withTitleOverlineMargin={withTitleOverlineMargin} /> :
        <SubTitle text={title} isCenter={isCenter} withTitleOverlineMargin={withTitleOverlineMargin} />;
    return (
        <div className={clsx(
            "flex flex-col",
            {
                "items-center": isCenter
            }
        )}>
            <Overline text={overline} />
            {titleComponent}
            <Description text={description} isCenter={isCenter} />
        </div>

    );
}