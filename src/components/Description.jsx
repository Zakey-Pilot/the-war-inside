import clsx from 'clsx';

export default function Description({ text, isCenter }) {

    return (
        <p className={clsx(`whitespace-pre-line text-base leading-[30px]`,
            {
                "text-center": isCenter
            },
        )}>{text}</p>
    );
}

