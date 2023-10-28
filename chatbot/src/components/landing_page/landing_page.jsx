import React from "react";
import './landing_page.css';
import logo from '../../assets/logo.png';
import input from '../../assets/input.png';
import output from '../../assets/output.png';
import mubarak from '../../assets/Mubarak.png';
import facebook from '../../assets/facebook.png';
import twitter from '../../assets/twitter.png';
import linkedin from '../../assets/linkedin.png'

const LandingPage = ({ onRouteChange }) => {
    return(
        <div className="main">
            <div class="intro-section" id="home">
                <h1>Welcome to <strong style={{fontSize:"1em", color:"blue",}}>
                    Swift<span style={{color:"orange"}}>Chat</span></strong></h1>

                <p>    Experience the future of conversations with our intelligent chatbot.<br></br>
                    Engage, learn, and streamline interactions effortlessly.
                    Let's redefine dialogue, one chat at a time.
                </p>
                <img class="app-logo" src={logo} alt="App Logo"></img> <br></br>
                <a href="#sign-in">
                    <button
                        style={{ backgroundColor: "#ff8800", color: "#ffffff", padding: "20px 30px",
                                border: "none", borderRadius: "5px", cursor: "pointer"}}
                        onClick={() => onRouteChange('signIn')}
                    > Chat with Bot
                    </button>
                </a>
            </div>

            <div class="feature-section">
                <h2>How It Works</h2>
                <div class="feature-steps">
                    <div class="feature-step">
                        <img src={input} alt="Step 1"></img>
                        <p>Enter your desired input (questions, etc.) in the Input box.</p>
                    </div>
                    <div class="feature-step">
                        <img src={output} alt="Step 2"></img>
                        <p>Retrieve your corresponding response.</p>
                    </div>
                </div>
            </div>

            <div class="our-team-section">
                <h2>Our Team</h2>
                <img class="team-member-image" src={mubarak} alt="Team Member"></img>
                <h3>Mubarak Adesina</h3>
                <p>Full-Stack Developer</p>
                <div class="social-media-links">
                    <a href="https://www.facebook.com/adesina.mubarak.73" target="_blank">
                        <img src={facebook} alt="Facebook"></img>
                    </a>
                    <a href="https://twitter.com/Spi_Cam" target="_blank">
                        <img src={twitter} alt="Twitter"></img>
                    </a>
                    <a href="https://www.linkedin.com/in/mubarak-adesina-30562b224/" target="_blank">
                        <img src={linkedin} alt="LinkedIn"></img>
                    </a>
                </div>
            </div>

            <div class="footer">
                &copy; 2023 Swift<span style={{color:"#3498d"}}>Chat</span>. All rights reserved.
            </div>
        </div>
    );
}

export default LandingPage;