import React from "react";
import './navbar.css'

const Navbar = ({ onRouteChange, isSignedIn }) => {
    
        if (isSignedIn) {
            return(
                <div className="nav">
                    <nav>
                        <img src="logo.png" alt=""></img>
                        <a href="#" onClick={() => {
                            onRouteChange('landingPage')}
                        }>Signout</a>
                    </nav>
                </div>
            );
        }
        else {
            return(
                <div className="nav">
                    <nav>
                        <img src="logo.png" alt=""></img>
                        <div className="nav-log">
                            <a href="#" onClick={() => onRouteChange('signUp')}>Sign Up</a>
                            <a href="#" onClick={() => onRouteChange('signIn')}>Sign In</a>
                        </div>
                    </nav>
                </div>
            );
        }
}


export default Navbar;