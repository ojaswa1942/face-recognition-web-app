import React from 'react';

const Navigation = ({routeChange}) =>{
	return(
		<nav style ={{display:'flex', justifyContent:'flex-end'}}>
			<p onClick={() => routeChange('signin')} className='f3 link dim black underline pa3 pointer'>Sign Out</p>
		</nav>
		);
}
export default Navigation;