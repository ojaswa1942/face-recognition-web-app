const Clarifai = require('clarifai');


const handleImage=(req,res,db)=>{
	const {id} = req.body;
	db('users')
		.where({id})
		.increment('entries',1)
		.returning('entries')
		.then(entries => {
			if(entries.length)
				res.json(entries[0]);
			else
				res.json('No such user');
		})
		.catch(err => res.status(400).json('Bro, something is wrong'));
}

module.exports={
	handleImage: handleImage
}