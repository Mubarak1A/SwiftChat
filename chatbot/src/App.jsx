import { React, Component} from 'react';
//import ReactDOM from 'react-dom/client';
import Navbar from './components/navbar/navbar';
import Signup from './components/signup/signup';
import Signin from './components/signin/signin';
//import Auth from './components/auth/auth';
import LandingPage from './components/landing_page/landing_page';
import Input from './components/input/input';
import Output from './components/output/output'
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
            <Input 
             onInput={this.onInput}
             onButtonClick={this.onButtonClick} 
            />
            <Output output={this.state.output}/>
          </div>
        }
      </div>
    );
  }
}

export default App;