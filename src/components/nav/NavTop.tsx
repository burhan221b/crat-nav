import { useEffect } from "react"
import { openSideNav } from "../../events"

const NavTop = () => {
    useEffect(() => {
        openSideNav()
    }, [])
    return (
        <nav id="nav-top">
            <button id="nav-top-menu-bar">&#9776;</button>
            <div>PlaceHolderForSomething</div>
        </nav>
    )
}

export default NavTop
