import React, { Component } from 'react';
import './App.css';
import Navigation from './Components/Navigation/Navigation'
import Logo from './Components/Logo/Logo'
import ImageForm from './Components/ImageForm/ImageForm'
import Rank from './Components/Rank/Rank'
import Particles from 'react-particles-js';

const ParticlesProps = {
  particles: {
    number: {
      value: 150,
      density: {
        enable: true,
        value_area: 830
      }
    }
  }
}

class App extends Component {

  constructor(){
    super();
    this.state={
      input: '',
    }
  }

  onInput = (event) => {
    console.log(event.target.value);
  }

  onClick = () =>{
    console.log("Click");
    
  }

  render() {
    return (
      <div className="App">
         <Particles 
              params={ParticlesProps}
              className='particles' /> 
        <Navigation />
        <Logo />
        <Rank />
        <ImageForm onClick={this.onClick} onInput = {this.onInput}/>
     {/*<FaceRecognition />*/}
      </div>
    );
  }
}

export default App;
