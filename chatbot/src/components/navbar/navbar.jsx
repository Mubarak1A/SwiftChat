import React from "react";
import './navbar.css';
import logo from '../../assets/logo.png';

const Navbar = ({ onRouteChange, isSignedIn }) => {
  const renderSignedInNav = () => (
    <div className="nav">
      <div className="nav-logo">
        <img src={logo} alt="✨" style={{ width: "40px", height: "40px" }} />
        <h3 style={{ fontSize: "1em", color: "blue", textAlign: "end" }}>
          Swift<span style={{ color: "orange" }}>Chat</span>
        </h3>
      </div>

      <div className="nav-log">
        <a
          href="#home"
          onClick={() => onRouteChange('landingPage')}
          style={{
            color: "rgb(110, 104, 104)",
            textDecoration: "none",
            fontSize: "1.3em",
          }}
        >
          SignOut
        </a>
      </div>
    </div>
  );

  const renderSignedOutNav = () => (
    <div className="nav">
      <div className="nav-logo">
        <img src={logo} alt="✨" style={{ width: "40px", height: "40px" }} />
        <h3 style={{ fontSize: "1em", color: "blue", textAlign: "end" }}>
          Swift<span style={{ color: "orange" }}>Chat</span>
        </h3>
      </div>

      <div className="nav-log">
        <a
          href="#sign-up"
          onClick={() => onRouteChange('signUp')}
          style={{
            color: "rgb(110, 104, 104)",
            textDecoration: "none",
            fontSize: "1.3em",
          }}
        >
          SignUp
        </a>
        <a
          href="#sign-in"
          onClick={() => onRouteChange('signIn')}
          style={{
            color: "rgb(110, 104, 104)",
            textDecoration: "none",
            fontSize: "1.3em",
          }}
        >
          SignIn
        </a>
      </div>
    </div>
  );

  return isSignedIn ? renderSignedInNav() : renderSignedOutNav();
};

export default Navbar;
