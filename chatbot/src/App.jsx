import { React, Component} from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './components/navbar/navbar';
import Signup from './components/signup/signup';
import Signin from './components/signin/signin';
import LandingPage from './components/landing_page/landing_page';
import ChatBot from './components/chatbot/chatbot';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      route: 'App',
      isSignedIn: false,
      user: {
        id: '',
        name: '',
        email: '',
        chats: '',
        joined: ''
      }
    }
  }

  updateChats = (data) => {
    fetch('http://localhost/chatbot', {
        method: 'put',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({
            id: this.state.id
        })
    })
    .then(response => response.json())
    .then(chats => {
      this.setState(Object.assign(this.state.user, {chats: chats + data}))
    })
}

  loadUser = (data) => {
    this.setState(
      {user: {
          id: data.id,
          name: data.name,
          email: data.email,
          chats: data.chats,
          joined: data.joined
        }
      }
    )
  }

  onRouteChange = (route) => {
    if (route === 'landingPage'){
      this.setState({isSignedIn: false})
    }
    else if (route === 'App') {
      this.setState({isSignedIn: true})
    }
    this.setState({route: route})
  }

  render() {
    return(
      <div>
        <Navbar 
          onRouteChange={this.onRouteChange}
          isSignedIn={this.state.isSignedIn}
        />
        { this.state.route === 'landingPage'
         ? <LandingPage onRouteChange={this.onRouteChange} />
         : this.state.route === 'signUp'
         ? <Signup loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
         : this.state.route === 'signIn'
         ? <Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
         : this.state.route === 'App'
         ? <ChatBot />
         : <div>
            <LandingPage onRouteChange={this.onRouteChange} />
          </div>
        }
      </div>
    );
  }
}

export default App;