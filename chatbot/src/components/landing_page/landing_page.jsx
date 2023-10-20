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
            <div class="intro-section">
                <h1>Welcome to <strong style={{fontSize:"1em", color:"blue",}}>
                    Swift<span style={{color:"orange"}}>Chat</span></strong></h1>

                <p>    Experience the future of conversations with our intelligent chatbot.<br></br>
                    Engage, learn, and streamline interactions effortlessly.
                    Let's redefine dialogue, one chat at a time.
                </p>
                <img class="app-logo" src={logo} alt="App Logo"></img> <br></br>
                <a href="#">
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


/*
<body>
    <div className="main-container"
                style={{display:"flex", justifyContent:"space-around", width:"90%", margin:"auto",
                alignItems:"center"}}>

                <div className="text" style={{width:"50%", padding:"0"}}>
                    <h2 style={{margin:"0"}}>Welcome to <strong style={{fontSize:"1em", color:"blue",}}>
                                Swift<span style={{color:"orange"}}>Chat</span></strong></h2>
                    <p style={{margin:"0"}}>
                        Experience the future of conversations with our intelligent chatbot.
                        Engage, learn, and streamline interactions effortlessly.
                        Let's redefine dialogue, one chat at a time.
                    </p>
                    <button className="main-button" onClick={() => onRouteChange('auth')}>Explore App</button>
                </div>

                <div className="logo" style={{width:"30%", height:"30%"}}>
                    <img src={logo} alt="✨" style={{width:"100%", height:"100%"}}></img>
                </div>
            </div>

            <div className="features" 
                style={{textAlign:"center", margin:"80px auto", backgroundColor:"rgb(232, 232, 247)", width:"80%", padding:"20px"}}>
                <h2 style={{fontSize:"2em", color:"blue" }}>HOW IT WORKS</h2>
                <div className="processes" style={{display:"flex", justifyContent:"space-around"}}>
                    <div
                        style={{display:"block", backgroundColor:"whitesmoke", width:"30%", borderRadius:"10px", padding:"10px"}}>
                        <img src={input} alt=""></img>
                        <p>Enter your desired input (questions e.t.c) in the Input box</p>
                    </div>
                    <div
                        style={{display:"block", backgroundColor:"whitesmoke", width:"30%", borderRadius:"10px", padding:"10px"}}>
                        <img src={output} alt=""></img>
                        <p>Retreive your corresponding response</p>
                    </div>
                </div>   
            </div>

            <section id="our-team" 
                style={{width:"70%", margin:"60px auto", backgroundColor:"rgb(232, 232, 247)", textAlign:"center"}}>
                <div class="0ur-team--container" 
                    style={{width:"40%", margin:"auto", padding:"30px", justifyContent:"center", alignItems:"center"}}>
                    <h2 style={{fontSize:"2.5em", height:"max-content"}}>Our Team</h2>

                    <img src={mubarak} alt="" style={{width:"100%", height:"auto", margin:"auto"}}/>
                    <div class="member-details" style={{margin:"0", padding:"0"}}>
                        <h3 style={{fontSize:"2em", margin:"0", padding:"0"}}>Mubarak Adesina</h3>
                        <p style={{fontSize:"1.3em", margin:"0", padding:"0"}}>Full-Stack Developer</p>
                    </div>
                    <div class="social-media-links"
                        style={{display:"flex", justifyContent:"space-between", width:"80%", margin:"20px auto"}}>
                        <a href="https://www.facebook.com/adesina.mubarak.73" target="_blank">
                            <img src={facebook} alt="" />
                        </a>
                        <a href="https://twitter.com/Spi_Cam" target="_blank">
                            <img src={twitter} alt="" />
                        </a>
                        <a href="https://www.linkedin.com/in/mubarak-adesina-30562b224/" target="_blank">
                            <img src={linkedin} alt="" />
                        </a>
                    </div>
                </div>
            </section>

            <footer style={{textAlign:"center", borderTop:"solid rgb(110, 104, 104) 2px", color:"rgb(110, 104, 104)"}}>
            <div class="copyright">
                <p>&copy; 2023 <strong style={{fontSize:"1em", color:"blue",}}>
                                Swift<span style={{color:"orange"}}>Chat</span></strong>. All rights reserved.</p>
            </div>
            </footer>
</body>
</html> */
