
# face-recognition-web-app
v-1.1
A full-stack working web application using Clarifai Web API for face detection in an image, with website designed using REACTjs, server using NODE with EXPRESS.js and PostgreSQL for database. The server, the database and the front-end are all deployed on Heroku.
Clarifai API uses Convolutional Neural Network to train its model and is trained on large dataset.


[Check out the application here](https://face-recogniti.herokuapp.com/)

### Steps to start:
1. Clone this repo

2. Go to face-recognition-web-app/face-recognition-webapp
    This is the main project folder for the front end.

3. Run npm install
    This will install all the dependencies.

4. You must add your own API key in the `src/App.js` file to connect to Clarifai.

You can grab Clarifai API key [here](https://www.clarifai.com/)

5. Go to face-recognition-web-app/face-recognition-webapp-api
    This is the server i.e. the back-end for the application
    
6. Run npm install
    This will install all the dependencies.
    
7. Run npm start
    This will run the server, on port 3000
    
8. Go to face-recognition-web-app/face-recognition-webapp and run npm start
    Press Y when prompted for using another port
    (Since 3000 is default for create-react-app module and it is occupied)
    It will use the port 3001
    
    
### Configuring Database:
** Make sure you use postgreSQL instead of mySQL for this code base.
1. Create a database face-recog
2. Create table users and login, with following structure:
(Generated using \d tb_name in psql)

                                    Table "public.users"
                                    
| Column  |            Type             |                     Modifiers
|---------|-----------------------------|-----------------------------------------------
| id      | integer                     | not null default nextval('users_id_seq'::regclass)
| name    | character varying(100)      | 
| email   | text                        | not null
| entries | bigint                      | default 0
| joined  | timestamp without time zone | not null
Indexes:
    "users_pkey" PRIMARY KEY, btree (id)
    "users_email_key" UNIQUE CONSTRAINT, btree (email)
    
                                 Table "public.login"                                 
| Column |          Type          |                     Modifiers
|--------|------------------------|----------------------------------------------------
| id     | integer                | not null default nextval('login_id_seq'::regclass)
| hash   | character varying(100) | not null
| email  | text                   | not null
Indexes:
    "login_pkey" PRIMARY KEY, btree (id)
    "login_email_key" UNIQUE CONSTRAINT, btree (email)



3. Enter user and password for the database in server.js

#### Modules used:
1. [react](https://www.npmjs.com/package/react)
2. [clarifai](https://www.npmjs.com/package/clarifai)
3. [tachyons](https://www.npmjs.com/package/tachyons)
4. [bcrypt-nodejs](https://www.npmjs.com/package/bcrypt-nodejs)
5. [body-parser](https://www.npmjs.com/package/body-parser)
6. [cors](https://www.npmjs.com/package/cors)
7. [express](https://www.npmjs.com/package/express)
8. [knex](https://www.npmjs.com/package/knex)
9. [pg](https://www.npmjs.com/package/pg)
10. [nodemon (devDependency)](https://www.npmjs.com/package/nodemon)
