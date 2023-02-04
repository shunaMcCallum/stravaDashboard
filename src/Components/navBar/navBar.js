import React from "react";
import { useNavigate } from "react-router-dom";
import '../../Styling/NavBar.css'

const NavBar = () => {
    const navigate = useNavigate();

    const handleHomeButtonClick = () => {
        navigate("/")
    }

    const handleActivitiesButtonClick = () => {
        navigate("/activities")
    }

    return (
        <div className="nav-bar-container">
            <h1 id="nav-bar-header"> Strava Dashboard </h1>
            <div className="nav-bar-list-container">
                <button id="home-button" onClick={handleHomeButtonClick}> Home </button>
                <button id="activities-button" onClick={handleActivitiesButtonClick}> Activities </button>
            </div>
        </div>
    )
}

export default NavBar;