import React from "react";
import './landing_page.css'

const LandingPage = ({ onRouteChange }) => {
    return(
        <div className="main">
            <h2>Welcome to <strong>SwifChat</strong></h2>
            <p>
                Experience the future of conversations with our intelligent chatbot.
                Engage, learn, and streamline interactions effortlessly.
                Let's redefine dialogue, one chat at a time.
            </p>
            <button className="main-button" onClick={() => onRouteChange('signUp')}>Explore App</button>
        </div>
    );
}

export default LandingPage;