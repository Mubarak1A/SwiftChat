import { React, useState } from 'react';
import './signin.css'


const Signin = ({ onRouteChange }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const onSubmitSignin = async () => {
        const myForm = document.getElementById('myForm');

        myForm.addEventListener("submit", function (event) {
            event.preventDefault();
        })

        const response = await fetch('http://localhost:5000/signin', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
          },
            body: JSON.stringify({ email, password }),
        });

        console.log(response.status);
        console.log(response);
        
        if (response.status === 400) {
            // Successful sign-in, you can redirect or show a success message
            onRouteChange('App');
        } else {
            // Handle errors, e.g., display error message
            alert("Incorrect email or password");
        }
    };


    return(
        <div classname='signin'>
            <div class="container">
                <h1>Sign In</h1>

                <form id='myForm'>
                <div class="form-group">
                    <label for="username">Email</label>
                    <input type="email" id="username" name="email" placeholder="Enter your email" required>
                    </input>
                </div>

                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" id="password" name="password" placeholder="Enter your password" required>
                    </input>
                </div>

                <button type="submit" class="submit-button"
                    onClick={onSubmitSignin}>
                    Sign In
                </button>
                <p>Don't have an account? <a href='#sign-up' onClick={() => onRouteChange('signUp')}>Sign Up</a></p>
                </form>
            </div>

            <div class="footer">
                &copy; 2023 Swift<span style={{color:"blue"}}>Chat</span>. All rights reserved.
            </div>
        </div>
    );
}


export default Signin;