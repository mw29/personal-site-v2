import React from "react";
import { BrowserRouter, Link, Route } from "react-router-dom";
import './NavBar.css';

function NavBar(){
    return(
        <nav>
            <ul className="nav-list">
                <li className="nav-item">
                    <Link to="/">About</Link>
                </li>
                <li className="nav-item">
                    <Link to="/Research">Research</Link>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;
