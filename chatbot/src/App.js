import { React, Component} from 'react';
//import ReactDOM from 'react-dom/client';
import Navbar from './components/navbar/navbar';
import Signup from './components/signup/signup';
import Signin from './components/signin/signin';
import LandingPage from './components/landing_page/landing_page';
import Input from './components/input/input';
import Output from './components/output/output'
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      route: 'landingPage'
    }
  }

  onRouteChange = (page) => {
    this.setState({route: page})
  }

  render() {
    return(
      <div>
        <Navbar />
        { this.state.route === 'landingPage'
         ? <LandingPage onRouteChange={this.onRouteChange} />
         : this.state.route === 'signUp'
         ? <Signup onRouteChange={this.onRouteChange}/>
         : this.state.route === 'signIn'
         ? <Signin onRouteChange={this.onRouteChange}/>
         : <div>
            <Input />
            <Output />
          </div>
        }
      </div>
    );
  }
}

export default App;
