import React, { Component } from 'react';
import './App.css';
import Navigation from './Components/Navigation/Navigation'
import Logo from './Components/Logo/Logo'
import ImageForm from './Components/ImageForm/ImageForm'
import Rank from './Components/Rank/Rank'
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';

const app = new Clarifai.App({
 apiKey: 'b605f9a3a598410db5130036282301a9'
});

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
    this.setState({input: event.target.value})
    console.log(event);
  }

  onKey = (event) => {
    if(event.key==='Enter')
      this.onClick();
  }

  onClick = () =>{
    console.log("Click");
    app.models.predict("a403429f2ddf4b49b307e318f00e528b", 
      "https://samples.clarifai.com/face-det.jpg").then(
    function(response) {
      console.log(response);
    },
    function(err) {
      // there was an error
    }
  );
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
        <ImageForm onClick={this.onClick} onKey ={this.onKey} onInput = {this.onInput}/>
     {/*<FaceRecognition />*/}
      </div>
    );
  }
}

export default App;
