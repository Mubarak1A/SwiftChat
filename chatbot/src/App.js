import React from 'react';
//import ReactDOM from 'react-dom/client';
import Navbar from './components/navbar/navbar';
import LandingPage from './components/navbar/landing_page/landing_page';
import Input from './components/navbar/input/input';
import Output from './components/navbar/output/output';
import './App.css';

const App = () => {
  return (
    <div>
      <Navbar />
      <signup />
      <signin />
      <LandingPage />
      <Input />
      <Output />
    </div>
  );
}

export default App;
