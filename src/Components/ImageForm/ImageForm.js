import React from 'react';
import './ImageForm.css'

const ImageForm = ({onInput, onClick}) =>{
	return(
		<div className="">
			<p className="f3">
				{'This Magic Brain will detect faces in your pictures. Give it a try'}
			</p>
			<div className='center'>
				<div className='form gradient-pattern center pa4 br3 shadow-2 w-80'>
					<input type='text' className='f4 pa2 w-70 center' onChange={onInput}/>
					<button onClick={onClick} className='w-30 grow f4 link ph3 pv2 dib white bg-orange'>Detect</button>
				</div>
			</div>
		</div>		
	);
}
export default ImageForm;