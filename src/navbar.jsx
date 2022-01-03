import React from "react";
import { Routes, Route, useNavigate, NavLink as Link } from "react-router-dom";

import image from "../img/SocialPlace.png"


export const Navbar = () => {

    const navigate = useNavigate()

    return(
    <div className="navbar_composant">
        <nav className="navbar">

            <div className="box_logo_register_page">
                <img className="logo_register_page" src={image} />
            </div>

            <div className="box_navbar">
                <ul className="navbar_list">
                    <Link to="/home">
                        <li className="home_link">Home</li>
                    </Link>
                    <Link to="/friends">
                        <li className="topics_link">Friends</li>
                    </Link>
                    <Link to="/profil">
                        <li className="profil_link">Profil</li>
                    </Link>
                </ul>
            </div>

            <div className="box_logout">

                    <div className="box_btn_logout">
                        <button className="btn_logout" onClick={() => navigate('/login')}>Logout</button>
                    </div>
            </div>
        </nav>
    </div>
)
}