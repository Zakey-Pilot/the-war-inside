import NavSection from "./NavSection"
import Logo from "../Logo"
import PrimaryButton from "../Buttons/PrimaryButton"

export default async function Navbar(
    { title }
) {
    return (
        <>
            <div className="absolute top-0 left-0 w-full bg-black/80 py-3.5 px-32 flex justify-between items-center">
                <Logo />
                <NavSection />
                <PrimaryButton hint={"Notify Me"} />
            </div>
        </>
    )
}