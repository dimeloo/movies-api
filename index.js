import express from 'express'
import cors from 'cors'

import { addMovie, queryMovies, deleteMovie, updateMovie } from './movies.js'
import { addEmployee } from './employees.js'

const app = express()
app.use(cors())
app.use(express.json()) // Required to receive JSON in body for POST

const PORT = 4000

/* *********************************************************************** */
// CRUD
// GET MOVIES
app.get('/get-movies', queryMovies)

app.get('/', (req, res) => {
  res.send('Hey here is my API!!')
})

/* ************************************************************************ */

// ADD MOVIES
app.post('/add-movie', addMovie)

/* ************************************************************************ */

// DELETE MOVIES
app.delete('/delete-movie', deleteMovie)

/* ************************************************************************ */

// UPDATE MOVIES
app.put('/update-movie', updateMovie)

/* ************************************************************************ */


// Employee Routes
app.post('/add-employee', addEmployee)
app.get('/', (req, res) => res.send('Hey here is my API!!'))
app.listen(process.env.PORT, () => console.log('API running on ', process.env.PORT))