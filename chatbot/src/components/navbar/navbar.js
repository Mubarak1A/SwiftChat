import React from "react";
import './navbar.css'

const Navbar = ({ onRouteChange, isSignedIn }) => {
    
        if (isSignedIn) {
            return(
                <div className="nav">
                    <nav>
                        <h1>LOGO</h1>
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
                        <h1>LOGO</h1>
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