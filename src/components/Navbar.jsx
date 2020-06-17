import React from 'react';
import { NavLink } from 'react-router-dom';

import Logo from "../hollywoodimg.png";

function Navbar() {
    return (
        <ul className="navbar">
            <li><NavLink to="/"><img className="logo" src={Logo}/></NavLink></li>
        </ul>
    )
}

export default Navbar
