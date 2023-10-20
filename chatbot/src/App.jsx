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
      input: '',
      output: '',
      route: 'landingPage',
      isSignedIn: false
    }
  }

  onInput = (event) => {
    this.setState({input: event.target.value})
    //console.log(this.state.input)
  }

  onButtonClick = (input) => {
    input = this.state.input;
    //console.log('click')
    this.setState({output: input})
  }

  onRouteChange = (route) => {
    if (route === 'signout'){
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
         ? <Signup onRouteChange={this.onRouteChange}/>
         : this.state.route === 'signIn'
         ? <Signin onRouteChange={this.onRouteChange}/>
         : this.state.route === 'signOut'
         ? <LandingPage onRouteChange={this.onRouteChange} />
         : <div>
            <ChatBot />
          </div>
        }
      </div>
    );
  }
}

export default App;