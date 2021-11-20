import { useEffect } from "react"
import { Link } from "react-router-dom"
import { openSideNav } from "../../events"

const NavTop = () => {
    useEffect(() => {
        openSideNav()
    }, [])
    return (
        <nav id="nav-top">
            <button className="mobile" id="nav-top-menu-bar">&#9776;</button>
            <div className="nav-top-div">
                <h2>LOGO</h2>
            </div>
            <div className="nav-top-div desktop">
                <ul className="nav-top-ul">
                    {/* {createMenuLinks()} */}
                    <li><Link to="/" >Home</Link></li>
                    <li><Link to="/docs">Docs</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><button>Sign</button></li>
                </ul>
            </div>
        </nav>
    )
}

export default NavTop
