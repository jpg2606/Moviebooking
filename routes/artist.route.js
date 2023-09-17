// const express = require('express')
// const findAllArtists = require('../controllers/artist.controller')
// const router  = express.Router()

// router.get('/artists',findAllArtists)

//   module.exports = router
const express = require('express');
const router = express.Router();
const artistController = require('../controllers/artist.controller');

// Routes for artists
router.get('/artists', artistController.findAllArtists);

module.exports = router;

