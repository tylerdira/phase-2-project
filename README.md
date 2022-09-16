## Table of contents
* [General Info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)
* [Project Functionalities](#project-functionalities)
* [Important/Major Components](#importantmajor-components)

## General Info
This project showcases a mini social media platform that mimics common functionalities seen in social media platforms found today.

## Technologies 
 * This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
 * This project utilizes the json-server-auth package. To install this package please refrence the 'Setup' section below. 
 * This project also uses json server.
 * **Note: A majority of the css in this application was found online and implemented by the developers.**

## Setup
To run this project, install json server and the auth package on your machine by running: 
```
$ npm install -D json-server json-server-auth
```
Once installed run:
```
$ npm run server
```
Then open a new terminal and run:
```
$ npm start
```
To run the script command and start our json server. 

## Project Functionalities 
Upon opening this project you will be taken to the login/signup screen. Here you will have the opportunity to create an account through the sign up form. 
After signing up, login with your credentials and you will be taken to the 'Home' screen of the application. 
On the 'Home' page of this application you can see all the posts that have been made. Additionally you can like and comment on any of them. 
Additionally, you can sort through the list of posts by caption or date in the designated search bar. 
At the top of the application you will see the Navbar that will take you to other pages.
On the 'New Post' page you can create a new post by adding the images' link address and your caption.
The 'Top 5 Liked Posts' page shows... well obviously the 5 posts that have the most likes...
The 'Logout' button will log you out of the application and send you back to the login/signup page. 

## Important/Major Components
In order to successfully login, you must enter credentials that have been put through the sign up form previously. 
