import React from 'react';
import './signin.css'


class Signin extends React.Component() {
    constructor(props) {
        super(props);
        this.state = {
            signInEmail: '',
            signInPassword: ''
        }
    }

    onEmailChange = (event) => {
        this.setState({signInEmail: event.target.value})
    }

    onPasswordChange = (event) => {
        this.setState({signInPassword: event.target.value})
    }

    onSubmitSignin = () => {
        fetch('http://localhost:5000/signin', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: this.state.signInEmail,
                password: this.state.signInPassword
            })
        }) 
        .then(response => response.json)
        .then(data => {
            if (data === 'success'){
                this.props.onRouteChange('App');
            }
        })
    }

   render() {
    const { onRouteChange } = this.props;
    return(
        <div classname='signin'>
            <div class="container">
                <h1>Sign In</h1>

                <form>
                <div class="form-group">
                    <label for="username">Email</label>
                    <input type="email" id="username" name="email" placeholder="Enter your email" required
                        onChange={this.onEmailChange}>
                    </input>
                </div>

                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" id="password" name="password" placeholder="Enter your password" required
                        onChange={this.onPasswordChange}>
                    </input>
                    <p class="error-message">Incorrect username or password.</p>
                </div>

                <button type="submit" class="submit-button" 
                    onClick={this.onSubmitSignin}>
                    Sign In
                </button>
                <p>Don't have an account? <a href='#' onClick={() => onRouteChange('signUp')}>Sign Up</a></p>
                </form>
            </div>

            <div class="footer">
                &copy; 2023 Swift<span style={{color:"blue"}}>Chat</span>. All rights reserved.
            </div>
        </div>
    );
   }
}


export default Signin;