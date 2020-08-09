# Terribly Tiny Tales Assignment

> Words Frequency Counter Backend by Node.Js and Frontend by React Js.
View Demo here

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
>Frontend is devloped in [React Js](https://reactjs.org/) where a textbox which accepts a number input N with a Submit button.
Value N is the parsed to backend which is developed on [Node.Js](https://nodejs.org/) and [yarn](https://yarnpkg.com/) as an package manager is used.
At backend, file stored at url is fetched, read and processed for giving a sorted value of words and their frequency of occurrence in the file.
Then on the basis of value N it  return the top N most frequently occurring words in this file.
At last all the array of data according to value N is parsed to client side which display the top N words and their frequency of occurrence in the frontend, in a tabular format.

## Test Cases and Screenshots
