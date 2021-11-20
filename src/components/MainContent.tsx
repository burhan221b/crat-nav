import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { closeSideNav, removeOverlay } from '../events';

const MainContent = () => {
    useEffect(() => {
        closeSideNav()
        removeOverlay()
        return () => {

        }
    }, [])
    return (
        <main className="main-content">
            <Routes>
                <Route path="/docs" element={<Docs />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/sign" element={<Sign />} />
                <Route path="/" element={<Home />} />
            </Routes>
        </main>
    )
}


// Test Components below
function Home() {
    useEffect(() => {
        closeSideNav()
        removeOverlay()
        return () => {

        }
    }, [])
    return <h1>HOME</h1>;
}

function About() {
    useEffect(() => {
        closeSideNav()
        removeOverlay()
        return () => {

        }
    }, [])
    return <h1>About</h1>;
}

function Contact() {
    useEffect(() => {
        closeSideNav()
        removeOverlay()
        return () => {

        }
    }, [])
    return <h1>Contact</h1>;
}

function Sign() {
    useEffect(() => {
        closeSideNav()
        removeOverlay()
        return () => {

        }
    }, [])
    return <h1>Sign</h1>;
}

function Docs() {
    useEffect(() => {
        closeSideNav()
        removeOverlay()
        return () => {

        }
    }, [])
    return <h1>Docs</h1>;
}



export default MainContent
