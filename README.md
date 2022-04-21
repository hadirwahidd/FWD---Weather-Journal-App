# FWD - Weather Journal App

Professional Track - Project #2

## Description:

- This project is an asynchronous web app that uses data from a Web API (OpenWeatherMap API) and user data to dynamically update the UI of the app.
- It's main idea is to record a weather journal for users: 
  - The user enters a zip code (allowed US zip codes only for now) and how is he feeling for today then presses the button to generate information.
  - The UI of the app is then updated with the temperature (based on the entered zip code), the date and the user's entered feelings.

## Package Manager used:

- npm

## Instructions:

- Clone this repository.
- Type `npm install` into your terminal to install all the dependencies for this project.
- Create API credentials on OpenWeatherMap.com.
- In "website/app.js", make sure you update the global variable `myAPIKey` with yours.
- Type `npm run start` into your terminal to start the server.

## Dependencies:

- express, body-parser, cors.

## Scripts:

- `npm run start`: starts the app (runs server.js).
> Press ctrl + c to terminate batch job.