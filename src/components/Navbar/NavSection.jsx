import NavbarButton from "./NavbarItem"

export default async function NavSection() {
    return (
        <>
            <div className="flex gap-[40px]">
                <NavbarButton hint={"Home"} href={"#hero"}/>
                <NavbarButton hint={"About"} href={"#about-1"}/>
                <NavbarButton hint={"Vision"} href={""} />
                <NavbarButton hint={"Game teaser"} href={"#game-teaser"} />
            </div>
        </>
    )
}