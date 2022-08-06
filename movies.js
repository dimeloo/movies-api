import movies from "./mongoConnect.js"

// CRUD on movies

// Get all movies
export const queryMovies= async () => {
    const allMovies = await movies.find().toArray()

    return allMovies
}

// Add a movie
export const addMovie = async (body) => {
    const movieAdded =  await movies.insertOne(body)
    return movieAdded
}

// Update movie
export async function updateMovie(query, body) {
    const movieUpdated = await movies.findOneAndUpdate(query , {$set: body})
}

// Delete Movie
export async function deleteMovie(movieToDelete) {
    // movies.findOneAndDelete(movieToDelete, (err, result) => {
    //     console.log(result)
    // })
    const movieDeleted = await movies.findOneAndDelete(movieToDelete)
    return movieDeleted
}


// Delete movie
// Handle promise if no callback is provided
// export function deleteMovie() {
//     movies
//         .findOneAndDelete({name: 'Braveheart'})
//         .then(() => console.log('movie deleted'))
//         .catch(err => console.error(err))
// }
