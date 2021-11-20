import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { closeSideNav, removeOverlay, removeSideNavActive } from "../../events";
import Version from "../Version";

const NavSide = (props: any) => {
    let location = useLocation();
    useEffect(() => {
        // console.log(location.pathname);
        closeSideNav()
        removeOverlay()
    }, [])
    return (
        <nav id="nav-side">
            {/* Close Side Nav */}
            <div className="nav-side-div nav-side-menu-close-container">
                <button id="nav-side-menu-close">&#10094;</button>
            </div>
            {/* Links */}
            <div className="nav-side-div">
                <ul className="nav-side-ul nav-side-main-topics">
                    {/* {createMenuLinks()} */}
                    {/* <li><Link to="/" ><span className="nav-html-icons">&#9881;</span>Home</Link></li> */}
                    <li><Link onClick={removeSideNavActive} to="/" >Home</Link></li>
                    <li><Link onClick={removeSideNavActive} to="/docs">Docs</Link></li>
                    <li><Link onClick={removeSideNavActive} to="/about">About</Link></li>
                    <li><Link onClick={removeSideNavActive} to="/contact">Contact</Link></li>

                    <li><Link onClick={removeSideNavActive} to="/docs">Docs</Link></li>
                    <li><Link onClick={removeSideNavActive} to="/about">About</Link></li>
                    <li><Link onClick={removeSideNavActive} to="/contact">Contact</Link></li>
                    <li><Link onClick={removeSideNavActive} to="/docs">Docs</Link></li>
                    <li><Link onClick={removeSideNavActive} to="/about">About</Link></li>
                    <li><Link onClick={removeSideNavActive} to="/contact">Contact</Link></li>
                    <li><Link onClick={removeSideNavActive} to="/docs">Docs</Link></li>
                    <li><Link onClick={removeSideNavActive} to="/about">About</Link></li>
                    <li><Link onClick={removeSideNavActive} to="/contact">Contact</Link></li>
                    <li><Link onClick={removeSideNavActive} to="/docs">Docs</Link></li>
                    <li><Link onClick={removeSideNavActive} to="/about">About</Link></li>
                    <li><Link onClick={removeSideNavActive} to="/contact">Contact</Link></li>
                    <li><button>Sign</button></li>
                </ul>
            </div>
            {/* Version Number */}
            <Version />
            {/* </ul> */}
        </nav>
    )
}

export default NavSide
