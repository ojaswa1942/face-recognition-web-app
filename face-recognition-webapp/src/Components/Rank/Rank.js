import React from 'react';
import './Rank.css'

const Rank = ({entries, name}) =>{
	return(
		<div className="">
			<div className="white f3">
				{`${name}, your current entry count is..`}
			</div>
			<div className="white f1">
				{entries}
			</div>						
		</div>		
	);
}
export default Rank;