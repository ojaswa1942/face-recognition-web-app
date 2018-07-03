const express=require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const knex = require('knex');

const db = knex({
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    user : 'ojaswa',
    password : 'ojaswa',
    database : 'face-recog'
  }
});

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
		trx.insert({
			hash: hash,
			email: email
		})
		.into('login')
		.returning('email')
		.then(loginEmail)
	});
	db('users')
		.returning('*')
		.insert({
			email: email, 
			name: name,
			joined: new Date() 
		})
		.then(user =>{
			res.json(user[0]);
		})
		.catch(err => res.status(400).json('Unable to register'))
})

app.post('/signin', (req,res)=>{
	if(req.body.email === database.users[0].email && 
		req.body.password === database.users[0].password )
		return res.json(database.users[0]);
	else
		res.status(400).json('Failure')	
})

app.get('/profile/:id', (req,res)=>{
	const {id} = req.params;
 	db.select('*').from('users').where({id})
	.then(user => {
		if(user.length)
			res.json(user[0]);
		else
			res.status(404).json('No such user');
	})
	.catch(err => res.status(404).json('Something is wrong'));
})

app.put('/image', (req, res) =>{
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
})

app.listen(3000, ()=>{
	console.log('We are on on port 3000!');
})
