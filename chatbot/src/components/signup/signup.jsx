import React from 'react';
import './signup.css';


class Signup extends React.Component() {
    constructor(props) {
        super(props);
        this.state = {
            signInName : '',
            signInEmail: '',
            signInPassword: ''
        }
    }

    onNameChange = (event) => {
        this.setState({signInName: event.target.value})
    }

    onEmailChange = (event) => {
        this.setState({signInEmail: event.target.value})
    }

    onPasswordChange = (event) => {
        this.setState({signInPassword: event.target.value});
    }

    onSubmitSignin = () => {
        fetch('http://localhost:5000/register', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                name: this.state.signInName,
                email: this.state.signInEmail,
                password: this.state.signInPassword
            })
        }) 
        .then(response => response.json)
        .then(user => {
            if (user.id){
                this.props.loadUser(user);
                this.props.onRouteChange('signIn');
            }
        })
    }

    render() {
        const { onRouteChange } = this.props;
        return (
            <div classname='signup'>
            <div class="container">
                <h1>Sign up</h1>

                <form>
                <div class="form-group">
                    <label for="username">Name</label>
                    <input type="text" id="username" name="username" placeholder="Enter your Name" required
                        onChange={this.onNameChange}>
                    </input>
                </div>

                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="Enter your email" required
                        onChange={this.onEmailChange}>
                    </input>
                </div>

                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" id="password" name="password" placeholder="Enter your password" required
                        onChange={this.onPasswordChange}>
                    </input>
                </div>

                <button type="submit" class="submit-button" 
                    onClick={this.onSubmitSignin}>
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
}

export default Signup;