const express=require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const knex = require('knex');
const register = require('./controllers/register');
const signin = require('./controllers/signin');
const profile = require('./controllers/profile');
const image = require('./controllers/image');
const Clarifai = require('clarifai');

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

app.get('/', (req,res)=>{ res.send(database.users)})
app.post('/register', (req, res) => {register.handleRegister(req, res, db, bcrypt)});
app.post('/signin', (req, res) => {signin.handleSignin(req, res, db, bcrypt)});
//handleSignin(db, bcrypt)(req,res)
app.get('/profile/:id', (req, res) => { profile.handleProfile(req, res, db)});
app.put('/image', (req, res) => {image.handleImage(req, res, db)});
app.listen(3000, ()=>{
	console.log('We are on on port 3000!');
})
