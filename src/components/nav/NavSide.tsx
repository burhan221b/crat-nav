import { useEffect } from "react";
// import { useHistory } from "react-router-dom";
import { closeSideNav, removeOverlay } from "../../events";
import Version from "../Version";

const NavSide = () => {
    // const { location } = useHistory()
    useEffect(() => {
        closeSideNav()
        removeOverlay()
        return () => {

        }
    }, [])
    return (
        <nav id="nav-side">
            {/* Close Side Nav */}
            <button id="nav-side-menu-close">&#10094;</button>
            {/* Profile */}
            {/* <DashboardProfile /> */}
            {/* Links To Different Pages/Topics */}
            {/* <ul className="nav-side-main-topics">
                <Link onClick={removeDashboardActive} to="/" ><li className={location.pathname === "/" ? "active" : ""}><span className="nav-html-icons">&#9881;</span> Dashboard</li></Link>
                <Link onClick={removeDashboardActive} to="/devices" ><li className={location.pathname === "/devices" ? "active" : ""}><span className="nav-html-icons">&#9881;</span> Devices</li></Link>
                <Link onClick={removeDashboardActive} to="/history" ><li className={location.pathname === "/history" ? "active" : ""}><span className="nav-html-icons">&#9881;</span> History</li></Link>
                <Link onClick={removeDashboardActive} to="/settings" ><li className={location.pathname === "/settings" ? "active" : ""}><span className="nav-html-icons">&#9881;</span> Settings</li></Link>
                <Link onClick={removeDashboardActive} to="/orders" ><li className={location.pathname === "/orders" ? "active" : ""}><span className="nav-html-icons">&#9881;</span> Orders</li></Link>
                <Link onClick={removeDashboardActive} to="/help" ><li className={location.pathname === "/help" ? "active" : ""}><span className="nav-html-icons">&#9881;</span> Help</li></Link>
                <Link onClick={removeDashboardActive} to="/aboutus" ><li className={location.pathname === "/aboutus" ? "active" : ""}><span className="nav-html-icons">&#9881;</span> About Us</li></Link> */}
            {/* Version Number */}
            <Version />
            {/* </ul> */}
        </nav>
    )
}

export default NavSide
