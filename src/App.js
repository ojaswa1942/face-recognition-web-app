import React, { Component } from 'react';
import './App.css';
import Navigation from './Components/Navigation/Navigation'
import Logo from './Components/Logo/Logo'
import ImageForm from './Components/ImageForm/ImageForm'
import Rank from './Components/Rank/Rank'
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import FaceRecognition from './Components/FaceRecognition/FaceRecognition.js';

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
      url: '',
      box: {},
    }
  }

  calculateFaceLocation = (response) => {
    const face = response.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputimg');
    const width = Number(image.width);
    const height = Number(image.height);

  }

  onInput = (event) => {
    this.setState({input: event.target.value})
  }

  onKey = (event) => {
    if(event.key==='Enter')
      this.onClick();
  }

  onClick = () =>{
    this.setState({url: this.state.input});
    console.log("Click");
    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
    .then(response => {
      this.calculateFaceLocation(response);})
    .catch(err => console.log(err));
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
        <ImageForm 
          onClick={this.onClick} 
          onKey ={this.onKey} 
          onInput = {this.onInput}
        />
        <br />
        <FaceRecognition input={this.state.url}/>
      </div>
    );
  }
}

export default App;
