const Genre = require('../models/genre.model');

const findAllgenre = (req,res)=>{
    Genre.find()
    .then(genre=>{
        res.json(genre)
    })
    .catch(err=>{
        console.log(err)
        res.status(401).send('error')
    })
}

// module.exports = findAllgenre;
 // Import any necessary modules or data models
// Example: const Genre = require('../models/genre');

// findAllGenres - to get all Genres.
exports.findAllGenres = (req, res) => {
    // Implement your logic to find all genres and send a JSON response
  };
  