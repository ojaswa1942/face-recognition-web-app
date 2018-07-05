const Clarifai = require('clarifai');


const app = new Clarifai.App({
 apiKey: 'b605f9a3a598410db5130036282301a9'
});

const handleApiCall =(req, res) => {
	app.models
		.predict(Clarifai.FACE_DETECT_MODEL, req.body.input)
		.then(data =>{
			res.json(data);
		})
		.catch(err => res.status(400).json("Something with API"));
}

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
	handleImage,
	handleApiCall
}