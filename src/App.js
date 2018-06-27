import React, { Component } from 'react';
import './App.css';
import Navigation from './Components/Navigation/Navigation'
import Logo from './Components/Logo/Logo'

class App extends Component {
  render() {
    return (
      <div className="App"> 
        <Navigation />
        <Logo />
{/*                <ImageForm />
                <FaceRecognition />*/}
      </div>
    );
  }
}

export default App;
