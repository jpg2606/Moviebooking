const  Artist = require('../models/artist.model')

const findAllArtists = (req, res) => {
    Artist.find()
      .then(artists => {
        res.json(artists);
      })
      .catch(err => {
        res.status(500).json({ error: 'Internal server error' });
      });
  };
// Import any necessary modules or data models
// Example: const Artist = require('../models/artist');

// findAllArtists - to get all Artists.
exports.findAllArtists = (req, res) => {
  // Implement your logic to find all artists and send a JSON response
};

// module.exports = findAllArtists
 
    