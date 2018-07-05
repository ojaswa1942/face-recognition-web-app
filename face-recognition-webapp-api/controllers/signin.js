const handleSignin = (req,res,db,bcrypt)=>{
	//(db, bcrypt) => (req, res) =>
	const {email, password} = req.body;
	// bcrypt.compare(password, hash, function(err, res) {
   
	// });
	db.select('email', 'hash').from('login')
	.where({email})
	.then(data => {
		bcrypt.compare(password, data[0].hash, function(err, result) {
			if(result)
				{
					return db.select('*').from('users')
					.where('email', '=', email)
					.then(user =>{
						res.json(user[0])
					})
					.catch(err => res.status(400).json('Invalid User'))
				}
			else
				return res.status(400).json("Invalid Credentials");
		 })
	})
	.catch(err=> res.status(400).json('Invalid Credentials'))	
}

module.exports={
	handleSignin: handleSignin
};