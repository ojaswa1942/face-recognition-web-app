# face-recognition-web-app
v-1.1
A full-stack working web application using Clarifai Web API for face detection in an image, with website designed using REACTjs.

Steps to start:
1. Clone this repo

2. Go to face-recognition-web-app/face-recognition-webapp
    This is the main project folder for the front end.

3. Run npm install
    This will install all the dependencies.
    
4. Go to face-recognition-web-app/face-recognition-webapp-api
    This is the server i.e. the back-end for the application
    
5. Run npm install
    This will install all the dependencies.
    
6. Run npm start
    This will run the server, on port 3000
    
5. Go to face-recognition-web-app/face-recognition-webapp and run npm start
    Press Y when prompted for using another port
    (Since 3000 is default for create-react-app module and it is occupied)
    It will use the port 3001
    
    
Configuring Database:
** Make sure you use postgreSQL instead of mySQL for this code base.
1. Create a database face-recog
2. Create table users and login, with following structure (Generated using \d tb_name in psql)

