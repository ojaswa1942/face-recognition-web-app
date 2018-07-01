import React from 'react';
import './SignIn.css';

class SignIn extends React.Component{

	constructor(props){
		super(props);
		this.state ={
			signInEmail: '',
			signInPassword: ''
		}
	}
	onEmailChange = (event) => {
		this.setState({signInEmail: event.target.value})
	}

	onPasswordChange = (event) => {
		this.setState({signInPassword: event.target.value})
	}

	onSubmitSignIn = () => {
		fetch('http://localhost:3000/signin', {
			method: 'post',
			headers: {'Content-type': 'application/json'},
			body: JSON.stringify({
				email: this.state.signInEmail,
				password: this.state.signInPassword
			})
		})
		.then(response => response.json())
		.then(data => {
			if(data === "Success")
				this.props.routeChange('home');
			else{
				const el = document.getElementById('incorrect');
				el.classList.remove('hidden');
			}
		})
	}

	render(){
		const {routeChange} = this.props; 
		return(
			<article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 center shadow-5">
				<div className="center">
					<main className="pa4 black-80">
					  <div className="measure">
						    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
						      <legend className="f1 fw6 ph0 mh0">Sign In</legend>
						      <div className="mt3">
						        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
						        <input className="pa2 input-reset ba b--black bg-transparent hover-bg-black hover-white w-100" 
						        type="email" 
						        name="email-address"  
						        id="email-address" 
						        onChange={this.onEmailChange}	/>
						      </div>
						      <div className="mv3">
						        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
						        <input className="b pa2 input-reset ba b--black bg-transparent hover-bg-black hover-white w-100" 
						        type="password" 
						        name="password"  
						        id="password" 
						        onChange={this.onPasswordChange}	/>
						      </div>
						    </fieldset>
						    <div className="">
						      <input onClick={this.onSubmitSignIn} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign in" />
						    </div>
						    <div id='incorrect' className="hidden lh-copy mt3">
						    	Invalid credentials
						    </div>
						    <div className="lh-copy mt3">
						      <a href="#0" onClick={() => routeChange('register')} className="f6 link dim black db">Register</a>
						    </div>
					  	</div>
					</main>
				</div>
			</article>		
	);
	}
}
export default SignIn;