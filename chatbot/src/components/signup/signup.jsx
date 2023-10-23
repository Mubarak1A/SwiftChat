import { React, useState } from 'react';
import './signup.css';


const Signup = ({ onRouteChange, loadUser }) => {
    const [name, setName] = useState('');
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
            body: JSON.stringify({ name, email, password }),
        });

        console.log(response.status);
        console.log(response);
        
        if (response.status === 400) {
            // Successful sign-in, you can redirect or show a success message
            loadUser(user);
            onRouteChange('signIn');
        } else {
            // Handle errors, e.g., display error message
            alert("Incorrect email or password");
        }
    };

    return (
        <div classname='signup'>
        <div class="container">
            <h1>Sign up</h1>

            <form method='POST'>
            <div class="form-group">
                <label for="username">Name</label>
                <input type="text" id="username" name="username" placeholder="Enter your Name" required>
                </input>
            </div>

            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Enter your email" required>
                </input>
            </div>

            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" id="password" name="password" placeholder="Enter your password" required>
                </input>
            </div>

            <button type="#submit" class="submit-button" 
                onClick={onSubmitSignin}>
                Sign Up
            </button>
            <p>Already have an account? <a href='#' onClick={() => onRouteChange('signIn')}>Sign In</a></p>
            </form>
        </div>

        <div class="footer">
            &copy; 2023 Swift<span style={{color:"blue"}}>Chat</span>. All rights reserved.
        </div>
    </div>
    );
}


export default Signup;