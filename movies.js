import db from './mongoConnect.js'

const movies = db.collection('movie')

// CRUD on movies

// Get all movies (Updated on 8-8-2022)
export const queryMovies = async (req, res) => {
  const allMovies = await movies.find().toArray()
  res.send(allMovies)
}

// Add a movie
export const addMovie = async (req, res) => {
  await movies.insertOne(req.body)
  const allMovies = await movies.find().toArray()
  res.send(allMovies)
}

// Update movie
export async function updateMovie(req, res) {
  await movies.findOneAndUpdate(req.query, { $set: req.body })
  const movieUpdated = await movies.find(req.query).toArray()
  res.send(movieUpdated)
}

// Delete Movie
export async function deleteMovie(req, res) {
  // movies.findOneAndDelete(movieToDelete, (err, result) => {
  //     console.log(result)
  // })
  await movies.findOneAndDelete(req.query)
  const allMovies = await movies.find().toArray()
  res.send(allMovies)
}

// Delete movie
// Handle promise if no callback is provided
// export function deleteMovie() {
//     movies
//         .findOneAndDelete({name: 'Braveheart'})
//         .then(() => console.log('movie deleted'))
//         .catch(err => console.error(err))
// }
//test
//