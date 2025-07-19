export default function PrimaryButton({ hint }) {
    return (
        <div className="py-2 px-4 bg-white rounded-[16px] flex justify-center items-center">
            <span className=" text-black text-base/[30px] text-center">{hint}</span>
        </div>
    );
}