# Project Summary:
This is an angular UI which interacts with a basic spring boot project. The backend project is present in the github repository called "BasicSpringBootAndDocker".

API Call Made to backend :
Api Endpoint: http://localhost:8085/rest/docker/login

HTTP Method: POST

Request Body: 
{ "userId":"ABC", "password":"ABC123" }

Response Body:
{ "loginMessage": "Logged in successfully !", "userId": "ABC", "password": "ABC123", "name": "Saanvi Roy Choudhury", "age": 18 }


UI url: http://localhost:4200/login
The above url will open a login page. Put anything as userid/password, hit login button. After login is hit, the loginservice in angular, will hit the spring boot backend POST api "http://localhost:8085/rest/docker/login", passing the request as 
{ "userId":"ABC", "password":"ABC123" }.
The api as response will return the userid,password, name,age and loginMessage.
The response is displayed in the homepage redirected to "http://localhost:4200/homepage".

# BasicAngularAndDocker

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.0.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

