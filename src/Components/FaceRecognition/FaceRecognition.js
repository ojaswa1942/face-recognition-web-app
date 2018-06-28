import React from 'react';

const FaceRecognition = ({input}) =>{
	return(
		<div className='center w-40'>
			<img id='inputimg' alt='Result will appear here' src={input} />			
		</div>		
	);
}
export default FaceRecognition;