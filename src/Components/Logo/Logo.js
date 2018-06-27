import React from 'react';
import Tilt from 'react-tilt'
import brain from './logo2.png'
import './Logo.css'

const Logo = () =>{
	return(
		<div className="ma4 mt0">
			<Tilt className="Tilt br0 shadow-1" options={{ max : 35 }} style={{ height: 150, width: 150 }} >
				 <div className="Tilt-inner pa3" style={{paddingTop: '30px'}}> <img alt="logo" src={brain} /> </div>
			</Tilt>
		</div>		
	);
}
export default Logo;