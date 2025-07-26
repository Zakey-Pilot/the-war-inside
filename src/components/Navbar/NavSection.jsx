import NavbarButton from "./NavbarItem"

export default function NavSection({ mobile = false }) {
    return (
        <>
            <div className={mobile ? "flex flex-col gap-6" : "flex gap-[40px]"}>
                <NavbarButton hint={"Home"} href={"#hero"}/>
                <NavbarButton hint={"About"} href={"#about-1"}/>
                <NavbarButton hint={"Vision"} href={""} />
                <NavbarButton hint={"Game teaser"} href={"#game-teaser"} />
            </div>
        </>
    )
}