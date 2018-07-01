import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({input, box}) =>{
	return(
		<div className='center w-40'>
			<div className='absolute mt2'>
				<img id='inputimg' alt='Result will appear here' src={input} height='auto' />
				<div className='box' 
					style={{top:box.topRow, 
						right: box.rightCol, 
						bottom: box.bottomRow, 
						left: box.leftCol}}>
				</div>
			</div>			
		</div>		
	);
}
export default FaceRecognition;