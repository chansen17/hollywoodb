import React from 'react';
import { NavLink } from 'react-router-dom';

import ImagePath from "../skyline-1.png";

function Home() {
    return (
        <div className="home">
            <h1 className="animate__animated animate__zoomInDown">HollywooDB</h1>
            <NavLink className="animate__animated animate__zoomInUp" to="/movies"><span>Search</span> <i class="fas fa-film"></i></NavLink>
            <img className="img" src={ImagePath} alt="hollywood sign"/>
        </div>
    )
}

export default Home
