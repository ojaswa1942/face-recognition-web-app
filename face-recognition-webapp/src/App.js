import React, { Component } from 'react';
import './App.css';
import Navigation from './Components/Navigation/Navigation'
import Logo from './Components/Logo/Logo'
import ImageForm from './Components/ImageForm/ImageForm'
import Rank from './Components/Rank/Rank'
import Particles from 'react-particles-js';
import FaceRecognition from './Components/FaceRecognition/FaceRecognition.js';
import SignIn from './Components/SignIn/SignIn';
import Register from './Components/Register/Register';


const ParticlesProps = {
  particles: {
    number: {
      value: 50,
      density: {
        enable: true,
        value_area: 830
      }
    }
  }
}

const initialState = {
  input: '',
  url: '',
  box: {},
  route: 'signin',
  isSignedIn: false,
  user: {      
    id: '',
    name: '',
    email: '',
    entries: 0,
    joined:'',
  }
}

class App extends Component {


  constructor(){
    super();
    this.state={
      input: '',
      url: '',
      box: {},
      route: 'signin',
      isSignedIn: false,
      user: {      
        id: '',
        name: '',
        email: '',
        entries: 0,
        joined:'',
      }
    }
  }

  loadUser = (data) => {
    this.setState({user: {
      id: data.id,
      name: data.name,
      email: data.email,
      entries: data.entries,
      joined: data.joined
    }})
  }

  calculateFaceLocation = (response) => {
    const face = response.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputimg');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: face.left_col * width,
      topRow: face.top_row * height,
      rightCol: width - (face.right_col * width),
      bottomRow: height - (face.bottom_row * height),
    }
  }

  markBox = (box) => {
    this.setState({box: box});
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
    fetch('https://face-recog-api.herokuapp.com/imageurl', {
          method: 'post',
          headers: {'Content-type': 'application/json'},
          body: JSON.stringify({
            input: this.state.input,
          })
        })
    .then(response => response.json())
    .then(response => {
      if(response){
        fetch('https://face-recog-api.herokuapp.com/image', {
          method: 'put',
          headers: {'Content-type': 'application/json'},
          body: JSON.stringify({
            id: this.state.user.id,
          })
        })
        .then(response => response.json())
        .then(count => {
          this.setState(Object.assign(this.state.user, {entries: count}))
        })
        .catch(console.log)
      }
      this.markBox(this.calculateFaceLocation(response));})
    .catch(err => console.log("There seems an error", err));
  }

  routeChange = (route) =>{
    if(route==='signout')
     { this.setState(initialState);}
    else if(route==='home')
     { this.setState({isSignedIn: true});}

    this.setState({route: route});  
  }


  render() {

    const {url, box, route, isSignedIn} = this.state;
    return (
      <div className="App">
         <Particles 
              params={ParticlesProps}
              className='particles' /> 
        <Navigation routeChange={this.routeChange} isSignedIn={isSignedIn}/>    
        {
          (route==='register') ? <Register routeChange={this.routeChange} loadUser={this.loadUser} />:
          (route==='signin' || route==='signout') ? <SignIn routeChange={this.routeChange} loadUser={this.loadUser}/>  
            :<div> 
              <Logo />  
              <Rank name={this.state.user.name} entries={this.state.user.entries} />
              <ImageForm 
                onClick={this.onClick} 
                onKey ={this.onKey} 
                onInput = {this.onInput} />
              <FaceRecognition 
                input={url}
                box={box} />
            </div>
        }
      </div>
    );
  }
}

export default App;
