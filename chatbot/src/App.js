import React from 'react';
//import ReactDOM from 'react-dom/client';
import Navbar from './components/navbar/navbar';
import Signup from './components/signup/signup';
import Signin from './components/signin/signin';
import LandingPage from './components/landing_page/landing_page';
import Input from './components/input/input';
import Output from './components/output/output'
import './App.css';

const App = () => {
  return (
    <div>
      <Navbar />
      <Signup />
      <Signin />
      <LandingPage />
      <Input />
      <Output />
    </div>
  );
}

export default App;
