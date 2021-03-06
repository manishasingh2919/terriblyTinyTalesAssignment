# Terribly Tiny Tales Assignment

> Words Frequency Counter Backend by Node.Js and Frontend by React Js.<br>
View Demo [here](https://terriblytinytales-assignment.herokuapp.com/) ![Heroku](https://heroku-badge.herokuapp.com/?app=heroku-badge)<br>

## Usage
Install [nodemon](https://github.com/remy/nodemon)

```
yarn add nodemon
```

Install server and client dependencies

```
yarn (This install server side dependencies)
cd client (Move tp client directory)
yarn (This will install client side dependencies)
```

To start the server and client at the same time (from the root of the project)

```
yarn dev
```

Running the production build on localhost. This will create a production build, then Node will serve the app on http://localhost:5000

```
NODE_ENV=production yarn dev:server
```

## How this works

The key to use an Express backend with a project created with `create-react-app` is on using a **proxy**. We have a _proxy_ entry in `client/package.json`

```
"proxy": "http://localhost:5000/"
```
This tells Webpack development server to proxy our API requests to our API server, given that our Express server is running on **localhost:5000**

## Basic Work Flow
>->Frontend is devloped in [React Js](https://reactjs.org/) where a textbox which accepts a number input N with a Submit button.<br>
->Value N is the parsed to backend which is developed on [Node.Js](https://nodejs.org/) and [yarn](https://yarnpkg.com/) as an package manager is used.<br>
->At backend, file stored at url is fetched, read and processed for giving a sorted value of words and their frequency of occurrence in the file.<br>
->Then on the basis of value N it  return the top N most frequently occurring words in this file.<br>
->At last all the array of data according to value N is parsed to client side which display the top N words and their frequency of occurrence in the frontend, in a tabular format.

## Test Cases and Screenshots
**Frontend Layout**
![](Screenshots/Screenshot%20(65).png)

**(Test Case 1)** Result for value of N = 10
![](Screenshots/Screenshot%20(67).png)

**(Test Case 2)** Result for value of N = 5
![](Screenshots/Screenshot%20(69).png)

**Test Data on console**
![](Screenshots/Screenshot%20(70).png)
