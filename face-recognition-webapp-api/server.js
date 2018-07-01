const express=require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');

const app=express();

app.use(bodyParser.json());
app.use(cors());

const database = {
	users: [
	{
		id: '123',
		name: 'John',
		email: 'john@gmail.com',
		password: 'cookies',
		entries: 0,
		joined: new Date()
	},	
	{
		id: '124',
		name: 'Johny',
		email: 'johny@gmail.com',
		password: 'cookie',
		entries: 0,
		joined: new Date()
	}
	]
}

app.get('/', (req,res)=>{
	res.send(database.users);
})

app.post('/register', (req,res) =>{
	const {email, name, password} =req.body;
	bcrypt.hash(password, null, null, function(err, hash) {
    // Store hash in your password DB.
    console.log(hash);
});
	database.users.push({
		id: '125',
		name: name,
		email: email,
		entries: 0,
		joined: new Date()
	})

	res.json(database.users[database.users.length -1]);
})

app.post('/signin', (req,res)=>{
	if(req.body.email === database.users[0].email && 
		req.body.password === database.users[0].password )
		res.json('Success');
	else
		res.status(400).json('Failure')	
})

app.get('/profile/:id', (req,res)=>{
	const {id} = req.params;
	let found=false;
	database.users.forEach(user => {
		if(user.id === id){
			found=true;
			return res.json(user);
		}
	})
		if(!found){
			res.status(404).json("No such user");
		}
})

app.put('/image', (req, res) =>{
	const {id} = req.body;
	let found=false;
	database.users.forEach(user => {
		if(user.id === id){
			found=true;
			user.entries++;
			return res.json(user.entries);
		}
	})
	if(!found){
		res.status(404).json("No such user");
		}
})

app.listen(3000, ()=>{
	console.log('We are on on port 3000!');
})
