import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css"
import { Fade } from "react-reveal";

function NavBar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    return (
        <Fade top duration={1000} distance="20px">
            <div>
                <header className="header">
                        <NavLink exact to="/" className="nav-logo">
                            <span className="logo-name">
                                MamanTube
                            </span>
                            <i className="fas facode"></i>
                        </NavLink>
                        <ul className={click ? "nav-menu active" : "nav-menu"}>
                            <li className="nav-item">
                                <NavLink
                                    exact
                                    to="/"
                                    activeClassname="active"
                                    className="nav-links"
                                    onClick={handleClick}
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    exact
                                    to="/about"
                                    activeClassname="active"
                                    className="nav-links"
                                    onClick={handleClick}
                                >
                                    About
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    exact
                                    to="/blog"
                                    activeClassname="active"
                                    className="nav-links"
                                    onClick={handleClick}
                                >
                                    Blog
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    exact
                                    to="/contact"
                                    activeClassname="active"
                                    className="nav-links"
                                    onClick={handleClick}
                                >
                                    Blog
                                </NavLink>
                            </li>
                        </ul>
                        <div className="nav-icon" onClick={handleClick}>
                            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
                        </div>
                </header>
            </div>
        </Fade>
    );
}

export default NavBar;