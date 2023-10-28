import React, { Component } from 'react';
import Navbar from './components/navbar/navbar';
import Signup from './components/signup/signup';
import Signin from './components/signin/signin';
import LandingPage from './components/landing_page/landing_page';
import ChatBot from './components/chatbot/chatbot';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      route: 'landingPage',
      user: {
        id: '',
        name: '',
        email: '',
        chats: '',
        joined: '',
      },
      isSignedIn: false,
    };
  }

  updateChats = (data) => {
    fetch('http://localhost/chatbot', {
      method: 'put',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id: this.state.id,
      }),
    })
      .then((response) => response.json())
      .then((chats) => {
        this.setState((prevState) => ({
          user: { ...prevState.user, chats: chats + data },
        }));
      });
  };

  loadUser = (data) => {
    this.setState((prevState) => ({
      user: {
        ...prevState.user,
        id: data.id,
        name: data.name,
        email: data.email,
        chats: data.chats,
        joined: data.joined,
      },
    }));
  };

  onRouteChange = (route) => {
    if (route === 'landingPage') {
      this.setState({ isSignedIn: false });
    } else if (route === 'App') {
      this.setState({ isSignedIn: true });
    }
    this.setState({ route: route });
  };

  render() {
    const { route, isSignedIn } = this.state;
    return (
      <div>
        <Navbar onRouteChange={this.onRouteChange} isSignedIn={isSignedIn} />
        {route === 'landingPage' ? (
          <LandingPage onRouteChange={this.onRouteChange} />
        ) : route === 'signUp' ? (
          <Signup loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
        ) : route === 'signIn' ? (
          <Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
        ) : route === 'App' ? (
          <ChatBot />
        ) : (
          <LandingPage onRouteChange={this.onRouteChange} />
        )}
      </div>
    );
  }
}

export default App;
