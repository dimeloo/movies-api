// 1. Download MongoDB - brew tap mongodb/brew
// brew services list
// brew services start mongodb-community@5.0
// brew services stop mongodb-community@5.0
// mongosh to connect to database

// MongoDB commands
/*******************************************/
// show dbs = show databases
// use <database name> = switch databases or create new one if it doesn't exist
// db.movie.insertOne({"name": "The Matrix"}) = use current database to insert document
// show collections = find tables
// db.movie.find() = search all items in current database
// db.movie.updateOne() = insert new data into document (first parameters is the query)
// db.movie.updateOne({"name": "The Matrix"}, {$set:{"rating":10}}) = att rating of 10 to Matrix
// db.movie.insertMany([{"name":"Braveheart"},{"NAME":"BEFORE SUNSET", "awesome": true},{"name":"Tangled", "favorite": "yes", "rating": 9, "times-watched": 567}]) = insert array of objects into database
// db.movie.insertOne({"Name":"Gone in 60 seconds", "createdAt": new Date()}) = insert new movie and use function to insert timestamp
// db.movie.deleteOne({"name": "Gone in 60 seconds"}) = delete the movie
// db.movie.updateMany({"rating": {$lt: 9}}, {$set:{"sucks": true}}) = check ratings and set the value of sucks to true for ratings less than 9

// Connect to our MongoDB
// Full CRUD from our app

/* *********************************************************** */

// const mikesScript = require('./myScript')
// const secondFunction = require('./myScript')

// mikesScript()
// secondFunction()

/* *********************************************************** */
// ES5 way (old)

// const {mikesScript, secondFunction, car} = require('./myScript')
// const {thirdFunction} = require('./modules2')

// mikesScript()
// secondFunction()
// thirdFunction()

// console.log('car from index', car)

/* *********************************************************** */

// import { mikesScript, secondFunction, car } from "./myScript"
// import { mikesScript, secondFunction } from "./myScript"
import thirdFunction from './modules2.js'
import fourthFunction from './modules2.js'

// mikesScript()
// secondFunction()
thirdFunction()

// console.log('car from index', car)