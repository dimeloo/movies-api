// 1. Import mongo
import {MongoClient} from 'mongodb'

import {uri} from './credentials.js'

// 2. Create variable and set the connection from MongoDB Compass
// const uri = 'mongodb://localhost:27017'

// 3. Create client mongo instance
const client = new MongoClient(uri)

// 4. Connect to bocacode-test database
const db = client.db('bocacode-test')

// 5. Create variable and assign it the 'movie' collection from the bocacode-test database
const movies = db.collection('movie')

export default movies