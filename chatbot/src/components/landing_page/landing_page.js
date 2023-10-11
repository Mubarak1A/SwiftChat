import React from "react";
import './landing_page.css'

const LandingPage = ({ onRouteChange }) => {
    return(
        <div className="extras">
            <h2>Welcome Mubarak</h2>
            <p> The island doesn't have "lakes'
                (water inside that isn't connected to the water surrounding the island).
            </p>
            <button onClick={() => onRouteChange('signUp')}>Explore App</button>
        </div>
    );
}

export default LandingPage;