import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { closeSideNav, removeOverlay, removeSideNavActive, openSideNavTopic, closeSideNavTopic } from "../../events";
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
            <div className="nav-side-div menu">
                <ul className="nav-side-ul nav-side-main-topics" id="SIDE-MAIN-MENU">
                    {/* {createMenuLinks()} */}
                    {/* <li><Link to="/" ><span className="nav-html-icons">&#9881;</span>Home</Link></li> */}
                    <li><Link onClick={removeSideNavActive} to="/" >Home</Link></li>
                    <li><Link onClick={removeSideNavActive} to="/about">About</Link></li>
                    <li><Link onClick={removeSideNavActive} to="/contact">Contact</Link></li>
                    {/* <li><Link onClick={removeSideNavActive} to="/notes">Notes</Link></li> */}
                    {/* <li onClick={() => openSideNavTopic("NOTES")}>Notes</li> */}
                    <li><Link onClick={() => openSideNavTopic("NOTES")} to="/notes">Notes</Link></li>
                    <li><Link onClick={() => openSideNavTopic("DOCS")} to="/docs">Docs</Link></li>
                    <li><button>Sign</button></li>
                </ul>

                <ul className="nav-side-ul nav-side-main-topics right-wing" id="NOTES">
                    <li><button onClick={() => closeSideNavTopic("NOTES")}><h2>&#10094;</h2></button></li>
                    <li><Link onClick={removeSideNavActive} to="/about">About</Link></li>
                    <li><Link onClick={removeSideNavActive} to="/contact">Contact</Link></li>
                    <li><Link onClick={removeSideNavActive} to="/docs">Docs</Link></li>
                    <li><Link onClick={removeSideNavActive} to="/about">About</Link></li>
                    <li><Link onClick={removeSideNavActive} to="/contact">Contact</Link></li>
                    <li><Link onClick={removeSideNavActive} to="/docs">Docs</Link></li>
                    <li><Link onClick={removeSideNavActive} to="/about">About</Link></li>
                    <li><Link onClick={removeSideNavActive} to="/contact">Contact</Link></li>
                </ul>

                <ul className="nav-side-ul nav-side-main-topics right-wing" id="DOCS">
                    <li><button onClick={() => closeSideNavTopic("DOCS")}><h2>&#10094;</h2></button></li>
                    <li><Link onClick={removeSideNavActive} to="/" >1</Link></li>
                    <li><Link onClick={removeSideNavActive} to="/docs">2</Link></li>
                    <li><Link onClick={removeSideNavActive} to="/about">3</Link></li>
                    <li><Link onClick={removeSideNavActive} to="/contact">4</Link></li>
                    <li><Link onClick={removeSideNavActive} to="/about">5</Link></li>
                    <li><Link onClick={removeSideNavActive} to="/contact">6</Link></li>
                    <li><Link onClick={removeSideNavActive} to="/docs">7</Link></li>
                    <hr />
                    <h3>New Content</h3>
                    <li><Link onClick={removeSideNavActive} to="/about">8</Link></li>
                    <li><Link onClick={removeSideNavActive} to="/contact">9</Link></li>
                    <li><Link onClick={removeSideNavActive} to="/docs">10</Link></li>
                    <li><Link onClick={removeSideNavActive} to="/about">11</Link></li>
                    <li><Link onClick={removeSideNavActive} to="/contact">12</Link></li>
                    <li><Link onClick={removeSideNavActive} to="/docs">13</Link></li>
                    <hr />
                    <h3>New Content</h3>
                    <li><Link onClick={removeSideNavActive} to="/about">14</Link></li>
                    <li><Link onClick={removeSideNavActive} to="/contact">15</Link></li>
                    <li><Link onClick={removeSideNavActive} to="/docs">10</Link></li>
                    <li><Link onClick={removeSideNavActive} to="/about">11</Link></li>
                    <li><Link onClick={removeSideNavActive} to="/contact">12</Link></li>
                    <li><Link onClick={removeSideNavActive} to="/docs">13</Link></li>
                    <li><Link onClick={removeSideNavActive} to="/about">14</Link></li>
                    <li><Link onClick={removeSideNavActive} to="/contact">15</Link></li>
                    <li><Link onClick={removeSideNavActive} to="/docs">10</Link></li>
                    <li><Link onClick={removeSideNavActive} to="/about">11</Link></li>
                    <li><Link onClick={removeSideNavActive} to="/contact">12</Link></li>
                    <li><Link onClick={removeSideNavActive} to="/docs">13</Link></li>
                    <li><Link onClick={removeSideNavActive} to="/about">14</Link></li>
                    <li><Link onClick={removeSideNavActive} to="/contact">15</Link></li>
                    <li><Link onClick={removeSideNavActive} to="/docs">10</Link></li>
                    <li><Link onClick={removeSideNavActive} to="/about">11</Link></li>
                    <li><Link onClick={removeSideNavActive} to="/contact">12</Link></li>
                    <li><Link onClick={removeSideNavActive} to="/docs">13</Link></li>
                    <li><Link onClick={removeSideNavActive} to="/about">14</Link></li>
                    <li><Link onClick={removeSideNavActive} to="/contact">15</Link></li>
                    <li><Link onClick={removeSideNavActive} to="/docs">10</Link></li>
                    <li><Link onClick={removeSideNavActive} to="/about">11</Link></li>
                    <li><Link onClick={removeSideNavActive} to="/contact">12</Link></li>
                    <li><Link onClick={removeSideNavActive} to="/docs">13</Link></li>
                    <li><Link onClick={removeSideNavActive} to="/about">14</Link></li>
                    <li><Link onClick={removeSideNavActive} to="/contact">15</Link></li>
                </ul>
            </div>
            {/* Version Number */}
            <div className="nav-side-div">
                <Version />
            </div>
            {/* </ul> */}
        </nav>
    )
}

const layerLinks = (LINK: string) => {

}

export default NavSide
