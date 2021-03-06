const express=require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const knex = require('knex');
const register = require('./controllers/register');
const signin = require('./controllers/signin');
const profile = require('./controllers/profile');
const image = require('./controllers/image');

const db = knex({
  client: 'pg',
  connection: {
  	connectionString: process.env.DATABASE_URL,
  	ssl: true
    // host : 'postgresql-vertical-98606',
    // user : 'ojaswa',
    // password : 'ojaswa',
    // database : 'face-recog'
  }
});

const app=express();

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req,res)=>{ res.send('it is working')})
app.post('/register', (req, res) => {register.handleRegister(req, res, db, bcrypt)});
app.post('/signin', (req, res) => {signin.handleSignin(req, res, db, bcrypt)});
					//handleSignin(db, bcrypt)(req,res)
app.get('/profile/:id', (req, res) => { profile.handleProfile(req, res, db)});
app.put('/image', (req, res) => {image.handleImage(req, res, db)});
app.post('/imageurl', (req, res) => {image.handleApiCall(req, res)});

app.listen(process.env.PORT || 3000, ()=>{
	console.log(`We are on on port ${process.env.PORT}!`);
})
